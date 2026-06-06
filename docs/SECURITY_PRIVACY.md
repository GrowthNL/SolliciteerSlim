# Security and privacy

## Uitgangspunten
Sollicitatiegegevens zijn persoonlijk en kunnen gevoelige context bevatten. SolliciteerSlim gebruikt dataminimalisatie, least privilege, defense in depth en privacyvriendelijke standaardinstellingen. Dit document is een technisch uitgangspunt en geen vervanging voor juridisch advies of een definitieve AVG-documentatie.

## Geheimen en configuratie
- Geheimen staan alleen in lokale/Vercel environment variables en nooit in Git.
- `SUPABASE_SERVICE_ROLE_KEY`, `OPENAI_API_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` en `RESEND_API_KEY` zijn server-only.
- Alleen variabelen met een bewuste `NEXT_PUBLIC_`-prefix mogen in de browserbundel komen.
- Service role wordt alleen gebruikt voor strikt noodzakelijke beheerflows, nooit als standaard databaseclient.
- Productie-, preview- en ontwikkelomgevingen gebruiken aparte sleutels en waar mogelijk aparte projecten.

## Authenticatie en autorisatie
- Supabase Auth beheert wachtwoorden en sessies; de app slaat geen wachtwoorden op.
- Dashboardroutes controleren sessies server-side.
- Iedere gebruikerstabel krijgt RLS voordat toegang vanuit de app wordt ingeschakeld.
- De server vertrouwt nooit op een `user_id` uit de browser, maar gebruikt de geauthenticeerde identiteit.
- Gerelateerde objecten (cv, vacature, brief) worden op gezamenlijk eigenaarschap gecontroleerd.

## Persoonsgegevens
- Contactgegevens worden alleen verwerkt voor cv-functionaliteit en accountbeheer.
- Verstuur naar AI alleen secties die voor de gekozen actie nodig zijn; verwijder naam, e-mail, telefoon en adres als die niet relevant zijn.
- Sla geen volledige cv’s, brieven, vacatures of prompts op in AI usage logs.
- Telemetrie gebruikt geen documentinhoud en geen vrije tekst van gebruikers.
- Storage buckets zijn privé; downloads gebruiken korte, ondertekende URLs of geautoriseerde serverresponses.

## AI-veiligheid
- AI-output is onbetrouwbare invoer en wordt gevalideerd en veilig gerenderd.
- Output mag geen feiten toevoegen die niet in de invoer staan.
- De UI vraagt de gebruiker output te controleren, vooral cijfers, datums en kwalificaties.
- Rate limits, actiequota, maximale inputlengte en timeouts beperken misbruik en kosten.
- Prompt injection in vacatureteksten wordt behandeld als data; vacature-inhoud kan systeempolicies niet overschrijven.

## Betaling en webhooks
- Betaalkaartgegevens lopen rechtstreeks via Stripe; de app verwerkt of bewaart ze niet.
- Webhookhandtekeningen worden gecontroleerd op de ruwe request body.
- Eventverwerking is idempotent en checkoutredirects kennen geen rechten toe.
- Entitlements worden server-side bepaald aan de hand van betrouwbare database-/webhookstatus.

## Webbeveiliging
- Gebruik veilige, HTTP-only sessiecookies volgens Supabase-aanbevelingen.
- Valideer formulierdata en providerresponses met runtime-schema’s.
- Render vrije tekst als tekst, niet als ongefilterde HTML.
- Stel passende security headers in, waaronder CSP zodra externe domeinen definitief zijn.
- Bescherm mutaties tegen CSRF volgens het gekozen server-action/cookiepatroon.
- Gebruik rate limiting op auth-, AI-, export- en webhookgevoelige endpoints.

## AVG-workflows vóór livegang
- Privacyverklaring met doelen, grondslagen, subverwerkers en bewaartermijnen.
- Verwerkersovereenkomsten en instellingen voor Supabase, OpenAI, Stripe, Resend en Vercel.
- Export van persoonsgegevens.
- Account- en gegevensverwijdering met bevestiging en herauthenticatie.
- Procedure voor inzage, correctie, bezwaar en incidentrespons.
- Beoordeling van internationale doorgifte en benodigde waarborgen.

## Incidentrespons
1. Beperk toegang en roteer mogelijk gelekte sleutels.
2. Bewaar veilige technische bewijslast zonder extra persoonlijke data te kopiëren.
3. Bepaal scope, betrokken gegevens en gebruikers.
4. Documenteer tijdlijn, maatregelen en beslissingen.
5. Beoordeel meldplicht aan toezichthouder en betrokkenen binnen toepasselijke termijnen.
6. Los de oorzaak op en voeg regressietests of controles toe.

## Pre-launch checklist
- [ ] Geen geheimen in repository, clientbundle of logs.
- [ ] RLS- en ownership-tests slagen voor alle gebruikerstabellen.
- [ ] Storage is privé en downloadlinks verlopen.
- [ ] AI-dataminimalisatie en logredactie zijn getest.
- [ ] Stripe-webhooks verifiëren handtekeningen en zijn idempotent.
- [ ] Accountverwijdering en data-export zijn beschikbaar.
- [ ] Security headers, dependency scanning en rate limits zijn actief.
- [ ] Privacyverklaring en subverwerkerslijst zijn gereviewd.
