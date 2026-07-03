# SolliciteerSlim

SolliciteerSlim is een AI-first Nederlandse CV- en sollicitatieassistent. De kernbelofte is:

> Maak in enkele minuten een professioneel cv en sollicitatiebrief die aansluiten op jouw vacature.

Deze repository bevat een werkend product met afgeronde **Phase 1 t/m 5** en het grootste deel van **Phase 6**. De marketingwebsite, authenticatie, dashboard en CV-editor zijn functioneel. Supabase, OpenAI, Stripe, Resend en client-side PDF-export zijn aangesloten. Zie [ROADMAP.md](docs/ROADMAP.md) voor de resterende openstaande punten.

## Stack
- Next.js App Router
- TypeScript (strict)
- Tailwind CSS
- shadcn/ui-conventies met lokale UI-componenten
- Gepland: Supabase, OpenAI, Stripe, Resend, React PDF en Vercel

## Snel starten
Vereisten: Node.js 20+ en npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000).

In Phase 1 zijn nog geen echte providerwaarden nodig. Laat server-only variabelen leeg. Commit `.env.local` nooit.

## Scripts
```bash
npm run dev        # lokale ontwikkelserver
npm run lint       # ESLint
npm run typecheck  # TypeScript zonder output
npm test           # CV-model en runtime-validatie
npm run build      # productiebuild
npm run start      # gebouwde app starten
```

## Routes
### Publiek
`/`, `/cv-maken`, `/sollicitatiebrief-maken`, `/ats-check`, `/cv-voorbeelden`, `/cv-templates`, `/prijzen`, `/blog`

### Authenticatie (UI-placeholder)
`/login`, `/registreren`, `/wachtwoord-vergeten`

### App-shell (nog niet afgeschermd)
`/dashboard`, `/dashboard/cv`, `/dashboard/cv/new`, `/dashboard/cv/[id]`, `/dashboard/sollicitatiebrieven`, `/dashboard/vacatures`, `/dashboard/account`

> Dashboardroutes zijn server-side beschermd via Next.js middleware en Supabase Auth. Zonder geldige sessie word je doorgestuurd naar `/login`.

## Mappen
```text
src/app              routes en layouts
src/components/ui    lokale shadcn/ui-bouwstenen
src/components       marketing-, dashboard- en gedeelde componenten
src/lib              helpers en centrale configuratie
src/types            gedeelde domeintypes
docs                 product- en architectuurdocumentatie
```

## Omgevingsvariabelen
Zie `.env.example`. Variabelen zonder `NEXT_PUBLIC_` zijn uitsluitend voor servercode. De Supabase service role key, OpenAI-key, Stripe secret en Resend-key mogen nooit vanuit een Client Component worden geïmporteerd of naar de browser worden gestuurd.

## Documentatie
- [Product specification](docs/PRODUCT_SPEC.md)
- [Technical specification](docs/TECH_SPEC.md)
- [Database schema](docs/DATABASE_SCHEMA.md)
- [AI actions en promptregels](docs/AI_PROMPTS.md)
- [Roadmap en TODO](docs/ROADMAP.md)
- [Security en privacy](docs/SECURITY_PRIVACY.md)

## Huidige vervolgstap
De kernfunctionaliteit (auth, CV-editor met opslag, templates, PDF, AI-acties, Stripe-betaling, Resend-e-mail) is aangesloten. De resterende punten liggen vooral op het vlak van betrouwbaarheid en polish: server-side PDF-export, E2E-tests, rate limiting op de AI-endpoints, een Lighthouse-/toegankelijkheidsaudit en privacyvriendelijke analytics. Zie [ROADMAP.md](docs/ROADMAP.md) voor de volledige checklist.
