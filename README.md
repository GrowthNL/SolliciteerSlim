# SolliciteerSlim

SolliciteerSlim is een AI-first Nederlandse CV- en sollicitatieassistent. De kernbelofte is:

> Maak in enkele minuten een professioneel cv en sollicitatiebrief die aansluiten op jouw vacature.

Deze repository bevat een afgeronde technische **Phase 1-basis** en de eerste bouwsteen van **Phase 2**: een versieerbaar CV-domeinmodel met runtime-validatie en tests. De marketingwebsite, auth-placeholders, dashboard-shell en CV-editor-shell zijn aanwezig. Supabase, OpenAI, Stripe, Resend en PDF-export zijn nog niet aangesloten.

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

> Let op: dashboardroutes zijn in Phase 1 bewust publiek bereikbaar voor UI-ontwikkeling. Phase 2 voegt Supabase Auth en server-side routebescherming toe.

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
Het CV-documentmodel staat in `src/features/resumes/model.ts` en vormt straks het gedeelde contract voor editor, opslag, preview en PDF. De volgende stap is Supabase configureren, de eerste migrations en RLS-policies toevoegen en daarna authenticatie en persistente CV-opslag aansluiten. Zie [ROADMAP.md](docs/ROADMAP.md) voor de volledige checklist.
