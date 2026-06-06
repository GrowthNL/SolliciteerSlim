# Product specification — SolliciteerSlim

## Productvisie
SolliciteerSlim is een AI-first sollicitatieassistent voor de Nederlandse markt. Het product helpt werkzoekenden niet alleen met de vormgeving van een cv, maar vooral met het gericht afstemmen van cv en sollicitatiebrief op een concrete vacature.

**Kernbelofte:** “Maak in enkele minuten een professioneel cv en sollicitatiebrief die aansluiten op jouw vacature.”

## Doelgroep
- Nederlandse werkzoekenden die sneller een professioneel document willen maken.
- Starters die hulp nodig hebben bij structuur en formulering.
- Ervaren professionals die per vacature een gerichte versie willen maken.
- Carrièreswitchers die overdraagbare vaardigheden helder willen presenteren.

## Productprincipes
1. **Inhoud vóór versiering:** een goed passend verhaal is belangrijker dan veel templates.
2. **Gebruiker in controle:** AI doet voorstellen; de gebruiker controleert en publiceert.
3. **Nooit feiten verzinnen:** geen fictieve werkgevers, opleidingen, resultaten, datums of certificaten.
4. **Privacy als standaard:** verzamel, verstuur en log zo weinig mogelijk persoonsgegevens.
5. **Nederlands en nuchter:** heldere taal, praktische adviezen en geen overdreven claims.
6. **Snel resultaat:** korte stappen, live feedback en duidelijke primaire acties.

## MVP-scope
### In scope
- Publieke marketing- en SEO-pagina’s.
- Registratie, login en wachtwoordherstel.
- Dashboard en basisaccount.
- CV-editor, meerdere secties, templatekeuze en preview.
- AI-verbetering van profiel en werkervaring.
- Vacature-invoer, analyse, matchadvies en ATS-check light.
- Genereren en bewerken van een Nederlandse sollicitatiebrief.
- Betrouwbare PDF-export.
- Gratis, eenmalige download, Starter en Pro.
- Stripe checkout, paywall en basisabonnementsbeheer.

### Buiten scope
Mobiele app, LinkedIn-import, job scraping, volledige ATS-simulator, B2B-dashboard, menselijke reviewmarktplaats, tientallen templates, uitgebreide application tracking, publieke profielen en AI-avatar/video.

## Belangrijkste gebruikersflow
1. Bezoeker ziet de kernbelofte en start gratis.
2. Gebruiker maakt een account aan.
3. Gebruiker maakt een cv of voert bestaande inhoud handmatig in.
4. Gebruiker plakt een vacature.
5. SolliciteerSlim analyseert de vacature en toont begrijpelijke aandachtspunten.
6. Gebruiker accepteert, wijzigt of negeert AI-suggesties.
7. Gebruiker genereert eventueel een sollicitatiebrief.
8. Gebruiker kiest een template en bekijkt de preview.
9. Bij export of overschrijden van gratis AI-gebruik verschijnt een transparante betaalkeuze.
10. Gebruiker downloadt een PDF.

## Functionele eisen per domein
### CV
Ondersteunde secties: persoonlijke gegevens, profiel, werkervaring, opleiding, vaardigheden, talen, certificaten, cursussen, interesses, optionele referenties en aangepaste secties. Secties moeten herordenbaar en optioneel zijn, behalve minimale persoonsgegevens.

### Vacaturematch
De analyse toont functietitel, organisatie, harde vaardigheden, soft skills, relevante termen, ervaringsniveau, toon en belangrijke formuleringen. De matchscore is een hulpmiddel en nooit een garantie op selectie.

### AI
Elke AI-output is bewerkbaar, toont waar passend een verificatiemelding en vervangt nooit automatisch bestaande inhoud zonder toestemming.

### Betaling
- **Free:** account, cv maken/bewerken, beperkte AI, preview, geen volledige export of een watermerkexport.
- **One-time:** één PDF-download.
- **Starter:** meer AI, PDF-export, meerdere cv’s en brieven.
- **Pro:** hogere gebruikslimieten, vacaturematching, extra templates en later application tracking.

## Niet-functionele eisen
- Mobile-first en toetsenbordvriendelijk.
- Nederlandse interface als standaard.
- Snelle initiële laadtijd en server components waar passend.
- Duidelijke lege, laad- en foutstatussen.
- WCAG-bewuste contrasten, focusstijlen en labels.
- Geen geheime sleutels of persoonlijke data in clientbundels.

## Succesindicatoren voor MVP
- Percentage registraties dat een eerste cv start.
- Percentage gestarte cv’s dat tot preview komt.
- Gebruik en acceptatie van AI-suggesties.
- Percentage gebruikers dat een vacature toevoegt.
- Conversie naar PDF-export of betaald plan.
- Tijd van registratie tot eerste bruikbare preview.
- Supportmeldingen en correctieverzoeken rond AI-feiten.

## Phase 1-acceptatie
Een lokaal startbare Next.js-app met responsive homepage, publieke routes, auth-placeholders, dashboard-shell, CV-editor-shell, centrale UI-componenten, documentatie, configuratie en een expliciete roadmap. Er worden nog geen externe diensten aangeroepen.
