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
- [x] Templateconfiguratie scheiden van cv-inhoud (`src/features/templates/`).
- [x] Drie professionele templates gebouwd: Modern (tweekolomsopmaak), Klassiek (enkelvoudige kolom, centered), Minimaal (strak, geen decoratie).
- [x] Templatekeuze-switcher in de editor (Modern / Klassiek / Minimaal).
- [x] PDF-renderer: `@react-pdf/renderer` gekozen; Modern template volledig als PDF geïmplementeerd.
- [x] Client-side PDF-download (dynamische import, geen server nodig).
- [x] Server-side PDF-export via API-route (`/api/pdf`, met server-side `canDownloadPdf`-check).
- [x] Kleuraccenten en typografieopties (sans/serif) voor PDF-export.
- [ ] Visuele regressietests en lange-content/paginabreuktests.

## Phase 4 — AI en vacatureworkflow
- [x] Server-only OpenAI-adapter (`src/lib/openai/client.ts`).
- [x] Vacature-invoer en analyse (`analyzeVacature` in `src/app/actions/ai.ts`).
- [x] Profiel- en werkervaringverbetering (`improveText`).
- [x] ATS-check (`generateAtsCheck`).
- [x] Sollicitatiebriefgenerator (`generateCoverLetter`, `updateCoverLetter`).
- [x] AI-usage logs (`getMonthlyAiUsage`, tabel `ai_usage_logs`).
- [x] Diff/accept-flow bij tekstverbetering (woord-diff met accepteren/negeren, `src/lib/text-diff.ts`).
- [ ] Transparante matchscore naast de ATS-check.
- [x] Schema-validatie (Zod) en timeout-hardening op alle AI-calls (30s timeout + 1 retry op de gedeelde client).
- [ ] Nederlandse evaluatieset en promptversies.

## Phase 5 — Betaling
- [x] Stripe producten/prijzen en server-side mapping (`src/lib/stripe`, `0002_stripe.sql`).
- [x] Checkout-sessie (`createCheckoutSession` in `src/app/actions/stripe.ts`).
- [x] Ondertekende webhooks (`src/app/api/stripe/webhook/route.ts`, signature-verificatie).
- [x] Customer portal (`createPortalSession`).
- [x] Entitlements server-side afdwingen: AI-gebruik, cv-limiet (`assertCanCreateResume`) en PDF-download (`/api/pdf`).
- [x] Idempotentie op webhook-events (`stripe_events`-tabel, reserveer-voor-verwerking).
- [x] Paywall-UI met resterende limieten (Gebruik-kaart op accountpagina: cv's, AI-credits, PDF-toegang).

## Phase 6 — SEO, betrouwbaarheid en polish
- [x] Unieke SEO-content op alle marketing-subpagina's (cv-maken, sollicitatiebrief, ats-check, cv-voorbeelden, cv-templates, prijzen, blog).
- [x] OpenGraph + Twitter-metadata op root layout en individuele pagina's.
- [x] `sitemap.ts` en `robots.ts` gegenereerd via Next.js route handlers.
- [x] Error boundaries: `app/error.tsx` en `app/dashboard/error.tsx`.
- [x] 404-pagina: `app/not-found.tsx`.
- [x] Resend transactionele e-mails (auth + contact, `src/lib/resend`).
- [x] `llms.txt` voor LLM-vindbaarheid.
- [x] Volledig verrijkte cv-voorbeeldpagina's (52 slugs) met jaarlijkse auto-update-action.
- [ ] Blogcontentmodel met volledige artikelen en CMS-integratie.
- [x] Privacyvriendelijke analytics + cookie-consent (consent-gated Plausible, `src/components/consent/`).
- [x] Toegankelijkheid: keyboard-toegankelijke controls en aria-labels op icon-knoppen.
- [x] Rate limiting en abuse protection op AI-endpoints (`src/lib/ai/usage.ts`: per-minuut + maandlimiet, alle AI- en import-calls).
- [x] Vercel deploy-config (`vercel.json`) en deployment-runbook (`docs/DEPLOYMENT.md`).
- [ ] E2E-tests en performancebudget (Lighthouse-meting in CI).

## Huidige focus
Phase 1 t/m 5 zijn functioneel afgerond en het grootste deel van Phase 6 staat live. De resterende prioriteiten liggen op betrouwbaarheid en polish: server-side PDF-export (Phase 3), rate limiting op de AI-endpoints, E2E-tests, een Lighthouse-/toegankelijkheidsaudit en privacyvriendelijke analytics met consent. Lint, typecheck, tests en build zijn lokaal groen; de visuele browsercontrole en Lighthouse-meting staan nog open.
