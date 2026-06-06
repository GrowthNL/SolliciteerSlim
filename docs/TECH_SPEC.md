# Technical specification

## Stack
- Next.js App Router en TypeScript (strict mode)
- Tailwind CSS voor styling
- shadcn/ui-conventies voor lokale, aanpasbare UI-componenten
- Supabase: Postgres, Auth en Storage (vanaf Phase 2)
- OpenAI API: gestructureerde AI-acties (vanaf Phase 4)
- Stripe: checkout, webhooks en portal (vanaf Phase 5)
- Resend: transactionele e-mail (latere fase)
- React PDF of gelijkwaardig: deterministische PDF-rendering (Phase 3)
- Vercel: hosting en serverless/edge runtime waar passend

## Architectuurprincipes
1. Server Components zijn standaard; Client Components alleen voor interactieve toestand.
2. Externe SDK’s worden achter server-only modules en servicefuncties geplaatst.
3. UI, domeintypes, data-access en providerintegraties blijven gescheiden.
4. Validatie gebeurt op iedere servergrens; TypeScript-types zijn geen runtime-validatie.
5. Mutaties controleren altijd de geauthenticeerde gebruiker, nooit alleen een ontvangen `user_id`.
6. AI-responses gebruiken later JSON-schema’s en worden gevalideerd voordat de UI ze verwerkt.

## Huidige mapstructuur
```text
src/
  app/
    (marketing)/       publieke pagina’s met gedeelde header/footer
    (auth)/            login- en registratie-shell
    dashboard/         afgeschermde productroutes (auth volgt)
  components/
    ui/                 lokale shadcn/ui-bouwstenen
    marketing/          marketingsecties
    dashboard/          app-shell en dashboardcomponenten
    shared/             gedeelde merk- en authcomponenten
  lib/                  framework-onafhankelijke helpers en navigatie
  types/                gedeelde domeintypes
docs/                   product-, techniek- en governance-documentatie
```

## Geplande uitbreidingen
```text
src/
  actions/              server actions per feature
  lib/
    supabase/client.ts  browserclient met anon key
    supabase/server.ts  cookie-aware serverclient
    supabase/admin.ts   service role, uitsluitend server-only en minimaal gebruikt
    ai/                 prompts, schemas, policies en provideradapter
    stripe/             checkout, entitlement en webhookhelpers
    pdf/                documentmodel en renderer
  features/
    resumes/
    vacancies/
    cover-letters/
    billing/
  validators/           runtime-schema’s voor formulieren en API-responses
supabase/
  migrations/           reproduceerbare schema- en RLS-migraties
```

## Rendering en state
- Marketingpagina’s zijn statisch of periodiek gerevalideerd.
- Dashboarddata wordt server-side opgehaald na authenticatie.
- De CV-editor gebruikt lokale form state met gecontroleerde autosave/debounce.
- Persistente updates lopen via server actions of route handlers met schema-validatie.
- Preview gebruikt hetzelfde genormaliseerde CV-model als de PDF-renderer om verschillen te beperken.

## Integratiegrenzen
### Supabase
De anon key mag client-side worden gebruikt in combinatie met RLS. De service role key mag uitsluitend in server-only code staan. Tabellen krijgen RLS voordat productiegegevens worden opgeslagen.

### OpenAI
Alle requests lopen via de server. Alleen velden die noodzakelijk zijn voor de gekozen actie worden verstuurd. Volledige prompts, cv’s en vacatureteksten worden niet in usage logs opgeslagen.

### Stripe
Prijzen en product-ID’s worden server-side gekoppeld. Webhooks zijn de bron van waarheid voor abonnementsstatus. Een redirect vanaf checkout is nooit voldoende bewijs van betaling.

### PDF
De PDF-laag ontvangt een gevalideerd, presentatieneutraal CV-model en templateconfiguratie. Exporttoegang wordt server-side gecontroleerd voordat een bestand wordt gemaakt of ondertekend.

## Foutafhandeling en observability
- Toon veilige, actiegerichte Nederlandse foutmeldingen.
- Log request-ID, actietype, duur en technische foutcode; geen volledige cv-inhoud.
- Webhooks zijn idempotent en bewaren provider-event-ID’s.
- AI-acties leggen tokenaantallen en kostenraming vast zonder promptinhoud.

## Kwaliteitsstrategie
- `npm run lint`, `npm run typecheck` en `npm run build` in CI.
- Unit tests voor normalisatie, entitlements, AI-schema’s en PDF-mapping.
- Integratietests voor RLS, auth-mutaties en Stripe-webhooks.
- End-to-end tests voor registratie → cv → preview → export/paywall.
- Visuele regressiecontrole voor templates en PDF’s.
