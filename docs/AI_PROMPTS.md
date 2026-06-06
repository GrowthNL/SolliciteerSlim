# AI actions and prompt policy

## Algemene systeempolicy
Alle AI-acties hanteren dezelfde regels:
- Antwoord standaard in helder, professioneel Nederlands.
- Gebruik uitsluitend feiten die in de input staan.
- Verzin nooit werkgevers, functies, resultaten, aantallen, diploma’s, datums of certificaten.
- Maak onzekerheid expliciet en markeer formuleringen die de gebruiker moet verifiëren.
- Houd de gebruiker in controle: lever voorstellen, geen automatische waarheid.
- Vermijd overdreven claims, clichés, discriminatoire aannames en manipulatieve ATS-beloftes.
- Geef gestructureerde JSON terug volgens het schema van de actie; geen markdown eromheen.

Prompts worden later in versiebeheer als templates en runtime-schema’s geïmplementeerd. Onderstaande specificaties zijn functionele contracten, geen productiepromptteksten.

## 1. improve_cv_profile
**Input:** huidig profiel, beoogde rol, gewenste toon.  
**Output:** `improved_text`, `changes[]`, `verification_notes[]`.

Instructie: behoud inhoudelijke feiten, schrijf bondig (doorgaans 60–100 woorden), begin niet met nietszeggende clichés en verbind relevante ervaring aan de doelrol. Als de input te weinig feitelijke basis biedt, stel geen resultaatclaims voor.

## 2. improve_work_experience
**Input:** functietitel, werkgever, ruwe bullets, doelvacature.  
**Output:** `bullets[]`, `missing_context_questions[]`, `verification_notes[]`.

Instructie: gebruik actieve werkwoorden, maak verantwoordelijkheid en effect duidelijk en neem alleen meetbare impact op als de gebruiker die heeft aangeleverd. Zet ontbrekende cijfers nooit als feit neer; vraag er eventueel naar.

## 3. analyze_vacancy
**Input:** volledige vacaturetekst.  
**Output:** `job_title`, `company`, `required_skills[]`, `soft_skills[]`, `keywords[]`, `experience_level`, `tone`, `important_phrases[]`, `uncertainties[]`.

Instructie: onderscheid expliciete eisen van interpretaties. Neem geen beschermde persoonskenmerken op als matchingcriterium. Citaten uit de vacature blijven kort en functioneel.

## 4. cv_match_score
**Input:** genormaliseerde cv-data en gevalideerde vacatureanalyse.  
**Output:** `score` (0–100), `score_explanation`, `missing_keywords[]`, `suggested_improvements[]`, `warnings[]`.

Instructie: de score is een transparante heuristiek, geen voorspelling van selectie. Beloon relevante aantoonbare ervaring en terminologiedekking; straf opmaak niet alsof dit een volledige ATS-simulator is. Iedere suggestie moet uitvoerbaar en feitelijk zijn.

## 5. generate_cover_letter
**Input:** relevante cv-data, vacaturetekst, toonvoorkeur.  
**Output:** `subject`, `content`, `used_facts[]`, `verification_notes[]`.

Instructie: schrijf een Nederlandse brief met opening, concrete motivatie, relevante ervaring en professionele afsluiting. Vermijd het samenvatten van het hele cv, generieke bewondering en niet-onderbouwde claims. Gebruik placeholders wanneer een noodzakelijke geadresseerde ontbreekt.

## 6. ats_check_light
**Input:** cv-tekst en vacaturetekst.  
**Output:** `keyword_coverage`, `covered_keywords[]`, `missing_keywords[]`, `readability_tips[]`, `missing_sections[]`, `practical_improvements[]`, `disclaimer`.

Instructie: presenteer dit als lichte praktische controle. Claim niet dat alle ATS-systemen hetzelfde werken en adviseer nooit keyword stuffing of verborgen tekst.

## Privacy en logging
- Stuur per actie alleen benodigde secties naar de provider.
- Verwijder contactgegevens als ze niet nodig zijn voor de taak.
- Log actietype, model, latency, tokenaantallen, kostenraming en foutcode; geen volledige input/output.
- Gebruik providerinstellingen die training/dataretentie beperken waar contractueel beschikbaar.
- Voeg een technische `prompt_version` toe aan usage metadata voor reproduceerbaarheid.

## Evaluatie vóór livegang
Maak een vaste Nederlandse evaluatieset met starters, seniors, carrièreswitchers en verschillende sectoren. Controleer feitelijkheid, toon, bruikbaarheid, bias, JSON-validiteit en naleving van woordlimieten. Een response die feiten verzint faalt altijd, ongeacht schrijfstijl.
