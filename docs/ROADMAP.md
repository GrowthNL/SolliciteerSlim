# Roadmap

## Phase 1 — Foundation en UI-shell (huidige fase)
- [x] Next.js App Router-, TypeScript- en Tailwind-configuratie.
- [x] Lokale shadcn/ui-basiscomponenten en visuele tokens.
- [x] Responsive marketinghomepage met gevraagde secties.
- [x] Alle publieke, auth- en dashboardroutes als werkende shells.
- [x] Dashboardnavigatie, lege statussen en CV-editor-preview.
- [x] Product-, techniek-, database-, AI-, roadmap- en privacydocumentatie.
- [x] README en `.env.example` zonder geheimen.
- [x] Dependencies installeren en vastleggen in `package-lock.json`.
- [ ] Baseline Lighthouse- en toegankelijkheidscontrole in een browseromgeving.

## Phase 2 — Auth, data en CV-editor
- [x] Supabase-project en lokale migrations configureren (`supabase/migrations/0001_initial.sql`).
- [x] Tabellen, constraints, triggers en RLS-policies implementeren (users, resumes, cover_letters, job_posts, applications, ai_usage_logs).
- [x] Registratie, login, logout, sessie-refresh en wachtwoordherstel (server actions + `@supabase/ssr`).
- [x] Dashboardroutes server-side beschermen via Next.js middleware.
- [x] Versieerbaar CV-domeinmodel en dependencyvrije runtime-validatie toevoegen.
- [x] Editor met alle 7 secties, toevoegen/verwijderen items en volledige lokale state.
- [x] Debounced opslaan (1,5 s), load, duplicate en delete.
- [x] Live template-preview op basis van hetzelfde documentmodel.
- [x] Accountprofiel met profielnaam opslaan; accountverwijdering als placeholder.

## Phase 3 — Templates en PDF
- [ ] Templateconfiguratie scheiden van cv-inhoud.
- [ ] Twee à drie professionele templates bouwen.
- [ ] Templatekeuze, kleuraccenten en typografieopties.
- [ ] PDF-renderer selecteren en font/licentiegedrag vastleggen.
- [ ] Server-side exporttoegang en veilige tijdelijke download.
- [ ] Visuele regressietests en lange-content/paginabreuktests.

## Phase 4 — AI en vacatureworkflow
- [ ] Server-only OpenAI-adapter, schema-validatie en timeouts.
- [ ] Vacature-invoer, analyse en bewerkbare extractie.
- [ ] Profiel- en werkervaringverbetering met diff/accept-flow.
- [ ] Transparante matchscore en ATS-check light.
- [ ] Sollicitatiebriefgenerator met fact-checkoverzicht.
- [ ] AI-usage logs zonder persoonlijke inhoud en planlimieten.
- [ ] Nederlandse evaluatieset en promptversies.

## Phase 5 — Betaling
- [ ] Stripe producten, prijzen en server-side mapping.
- [ ] Checkout voor eenmalige download en abonnementen.
- [ ] Ondertekende, idempotente webhooks.
- [ ] Entitlements voor AI en export.
- [ ] Paywall met duidelijke resterende limieten.
- [ ] Customer portal en facturatiebeheer.

## Phase 6 — SEO, betrouwbaarheid en polish
- [ ] Unieke SEO-content, metadata, canonicals en structured data.
- [ ] Blogcontentmodel, sitemap en robots-configuratie.
- [ ] Privacyvriendelijke analytics-events en consentkeuzes.
- [ ] Error boundaries, observability, rate limiting en abuse protection.
- [ ] E2E-tests, performancebudget en toegankelijkheidsaudit.
- [ ] Resend transactionele e-mails.
- [ ] Vercel preview/production deployment en runbook.

## Definitie van klaar voor de volgende fase
Phase 2 start pas nadat Phase 1 lokaal lint, typecheck en build doorloopt, de route-shell visueel gecontroleerd is en architectuurkeuzes in de docs zijn bijgewerkt. Lint, typecheck, tests en build zijn lokaal groen; de visuele browsercontrole en Lighthouse-meting staan nog open.
