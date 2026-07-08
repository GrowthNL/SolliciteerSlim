# Deployment runbook

SolliciteerSlim / CVmaken.nu draait op **Vercel** (Next.js App Router) met
**Supabase** (database + auth), **Stripe** (betaling), **OpenAI** (AI) en
**Resend** (e-mail). Dit document beschrijft een volledige productie-deploy en
de terugrolprocedure.

## 1. Vereisten

- Een Vercel-project gekoppeld aan de repo `growthnl/solliciteerslim`.
- Een Supabase-project (productie), los van eventuele staging.
- Een Stripe-account met producten en prijzen voor Starter en Pro.
- Een Resend-account met een geverifieerd verzenddomein.
- Optioneel: een Plausible-site voor analytics.

## 2. Omgevingsvariabelen

Zet alle onderstaande variabelen in Vercel (Project → Settings → Environment
Variables), voor zowel **Production** als **Preview**. Nooit committen.

### Publiek (browser, `NEXT_PUBLIC_`)
| Variabele | Omschrijving |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Volledige productie-URL, bijv. `https://cvmaken.nu` |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project-URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optioneel; leeg laten om analytics uit te zetten |

### Server-only (nooit `NEXT_PUBLIC_`)
| Variabele | Omschrijving |
|---|---|
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (bypasst RLS) |
| `OPENAI_API_KEY` | OpenAI API-key |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Signing secret van de webhook-endpoint (stap 4) |
| `RESEND_API_KEY` | Resend API-key |
| `STRIPE_PRICE_STARTER_MONTHLY` | Price-ID Starter maandelijks |
| `STRIPE_PRICE_STARTER_YEARLY` | Price-ID Starter jaarlijks |
| `STRIPE_PRICE_PRO_MONTHLY` | Price-ID Pro maandelijks |
| `STRIPE_PRICE_PRO_YEARLY` | Price-ID Pro jaarlijks |

## 3. Database (Supabase)

Voer de migraties in `supabase/migrations/` op volgorde uit tegen het
productieproject:

```bash
supabase link --project-ref <PROJECT_REF>
supabase db push
```

Of plak de SQL-bestanden handmatig in de Supabase SQL-editor, in deze volgorde:
`0001_initial.sql` → `0002_stripe.sql` → `0003_stripe_events.sql`.

Controleer daarna dat RLS actief is op alle tabellen en dat `stripe_events`
bestaat (nodig voor webhook-idempotentie).

## 4. Stripe webhook

1. Maak in Stripe een webhook-endpoint aan naar
   `https://<jouw-domein>/api/stripe/webhook`.
2. Abonneer op de events: `checkout.session.completed`,
   `customer.subscription.updated`, `customer.subscription.deleted`.
3. Kopieer het **Signing secret** naar `STRIPE_WEBHOOK_SECRET` in Vercel.
4. Zorg dat de vier `STRIPE_PRICE_*` variabelen exact overeenkomen met de
   price-ID's van je Stripe-producten (anders wordt geen plan toegekend).

## 5. Deploy

- Push naar `main` → Vercel bouwt en deployt automatisch naar productie.
- Elke andere branch/PR krijgt een Preview-deploy.
- De build draait `next build`. Regio staat op `fra1` (Frankfurt) via
  `vercel.json`, dichtbij Nederlandse gebruikers en Supabase EU.

## 6. Post-deploy smoke test

Loop deze flow één keer door op productie (gebruik Stripe-testmodus indien
mogelijk):

1. Registreren → bevestigingsmail ontvangen (Resend).
2. Inloggen → dashboard laadt.
3. Nieuw cv maken → automatisch opslaan werkt.
4. CV importeren (plak-tekst) → AI vult de velden.
5. Vacature analyseren + ATS-check + sollicitatiebrief (Pro-account).
6. Controleer dat de AI-creditteller aftelt en bij de limiet blokkeert.
7. Upgraden via Stripe checkout (testkaart `4242 4242 4242 4242`).
8. Controleer in Stripe dat de webhook `200` teruggeeft en dat het plan in
   Supabase op `pro`/`starter` staat.
9. PDF downloaden → bestand wordt gegenereerd (Starter/Pro); een gratis
   account krijgt de upgrade-melding.

## 7. Terugrollen

- **Snel**: Vercel → Deployments → kies de vorige groene deploy →
  *Promote to Production* (instant rollback, geen rebuild).
- **Via git**: `git revert <commit>` op `main` en pushen; Vercel bouwt de
  teruggedraaide staat.
- **Database**: migraties zijn additief (`IF NOT EXISTS`). Een terugrol van de
  app vereist normaal geen database-terugrol. Draai een schema-wijziging nooit
  terug zonder eerst de impact op bestaande rijen te controleren.

## 8. Terugkerende taken

- De GitHub Action `.github/workflows/update-year.yml` werkt op 1 januari
  automatisch jaartallen in de cv-content bij.
