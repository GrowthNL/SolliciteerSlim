import type { CvExample } from "./types";

export const CV_EXAMPLES: CvExample[] = [
  {
    slug: "administratief-medewerker",
    profession: "Administratief medewerker",
    category: "Administratie",
    template: "klassiek",
    metaTitle: "CV-voorbeeld administratief medewerker | CVmaken.nu",
    metaDescription:
      "Bekijk een sterk CV-voorbeeld voor administratief medewerker. Inclusief profieltekst, werkervaring en tips om jouw nauwkeurigheid en organisatietalent te laten zien.",
    intro:
      "Als administratief medewerker draait alles om nauwkeurigheid, structuur en betrouwbaarheid. Een goed CV laat zien dat je processen soepel laat verlopen en dat werkgevers blind op jouw administratie kunnen vertrouwen. Maak je werkervaring concreet met cijfers over verwerkte facturen, doorlooptijden of verbeterde processen.",
    whatToInclude: [
      "Een heldere profieltekst die je nauwkeurigheid en organisatietalent benadrukt",
      "Concrete werkervaring met cijfers, zoals aantal verwerkte facturen of dossiers per week",
      "Kennis van administratieve software zoals Exact, AFAS of Microsoft Office",
      "Aantoonbare ervaring met agendabeheer, archivering en correspondentie",
      "Vaardigheden rond klantcontact en telefonische afhandeling",
      "Relevante opleidingen of cursussen op het gebied van administratie of secretarieel werk",
    ],
    tips: [
      { title: "Maak nauwkeurigheid meetbaar", text: "Noem concrete aantallen zoals verwerkte facturen of foutpercentages. Zo bewijs je jouw precisie in plaats van het alleen te benoemen." },
      { title: "Benoem je software-kennis duidelijk", text: "Werkgevers zoeken op specifieke pakketten zoals Exact, AFAS of SAP. Vermeld deze letterlijk zodat je CV gevonden wordt en aansluit op de vacature." },
      { title: "Laat zien dat je processen verbetert", text: "Een administratief medewerker die zelf verbeteringen voorstelt valt op. Beschrijf een proces dat je efficienter maakte of digitaliseerde." },
    ],
    keywords: ["cv administratief medewerker", "cv voorbeeld administratie", "administratief medewerker cv template", "voorbeeld cv secretarieel", "cv backoffice medewerker", "administratie cv tips", "cv maken administratief", "profieltekst administratief medewerker"],
    faq: [
      { q: "Wat zet ik in mijn profieltekst als administratief medewerker?", a: "Beschrijf in 3 zinnen je nauwkeurigheid, organisatietalent en ervaring met administratieve software. Voeg een concreet resultaat toe, zoals een verbeterde doorlooptijd, om direct indruk te maken." },
      { q: "Welke vaardigheden zijn belangrijk op een administratief CV?", a: "Denk aan nauwkeurigheid, kennis van Office en boekhoudpakketten, plannen, klantcontact en discretie. Combineer harde softwarekennis met persoonlijke kwaliteiten zoals stressbestendigheid." },
      { q: "Hoe lang mag een CV voor een administratieve functie zijn?", a: "Houd het op een of maximaal twee paginas. Recruiters scannen snel, dus zorg dat je belangrijkste ervaring en software-kennis bovenaan en goed leesbaar staan." },
    ],
    doc: {
      version: 1,
      personalDetails: { firstName: "Sanne", lastName: "Bakker", professionalTitle: "Administratief medewerker", email: "sanne.bakker@email.nl", phone: "06 12345678", city: "Utrecht", linkedinUrl: "linkedin.com/in/sannebakker", websiteUrl: "", photoUrl: "" },
      profileSummary: "Nauwkeurige en gestructureerde administratief medewerker met 6 jaar ervaring in de financiele en zakelijke dienstverlening. Verwerk gemiddeld 400 facturen per week met een foutmarge onder de 1 procent en zorg voor een vlekkeloze administratie. Sterk in plannen, archiveren en het stroomlijnen van processen. Werk vlot met Exact, AFAS en het volledige Microsoft Office-pakket.",
      workExperience: [
        { id: "we-1", jobTitle: "Administratief medewerker backoffice", company: "Van der Meer Accountants", location: "Utrecht", startDate: "mrt 2021", endDate: "", isCurrent: true, bullets: ["Verwerk wekelijks circa 400 inkoop- en verkoopfacturen in Exact met een foutmarge onder 1 procent", "Verkortte de doorlooptijd van de maandafsluiting met 20 procent door de digitale archivering te herstructureren", "Eerste aanspreekpunt voor 150 klanten bij vragen over facturen en betalingen", "Stelde een nieuw werkinstructiedocument op waardoor de inwerktijd van nieuwe collegas halveerde"] },
        { id: "we-2", jobTitle: "Administratief medewerker", company: "Logistiek Centrum Nederland", location: "Nieuwegein", startDate: "jan 2018", endDate: "feb 2021", isCurrent: false, bullets: ["Beheerde de orderadministratie en agenda voor een team van 12 medewerkers", "Controleerde en verwerkte dagelijks 80 leveringsbonnen en pakbonnen in AFAS", "Reduceerde voorraadverschillen met 15 procent door een strakkere registratie in te voeren"] },
      ],
      education: [{ id: "edu-1", institution: "ROC Midden Nederland", degree: "MBO niveau 4", fieldOfStudy: "Bedrijfsadministratie", location: "Utrecht", startDate: "sep 2013", endDate: "jul 2017", isCurrent: false, description: "" }],
      skills: ["Exact Online", "AFAS Profit", "Microsoft Office (Excel gevorderd)", "Facturatie en debiteurenbeheer", "Agendabeheer", "Nauwkeurig archiveren", "Klantcontact", "Procesoptimalisatie"],
      languages: [{ id: "lang-1", name: "Nederlands", level: "Moedertaal" }, { id: "lang-2", name: "Engels", level: "B2" }],
      certificates: [{ id: "cert-1", name: "Praktijkdiploma Boekhouden (PDB)", description: "Erkend diploma op het gebied van boekhouden en financiele administratie." }],
      courses: [],
      interests: ["Hardlopen", "Lezen", "Vrijwilligerswerk bij de lokale bibliotheek"],
      references: [],
      customSections: [],
    },
  },
  {
    slug: "software-engineer",
    profession: "Software Engineer",
    category: "Tech",
    template: "modern",
    metaTitle: "CV-voorbeeld Software Engineer | CVmaken.nu",
    metaDescription:
      "Een professioneel CV-voorbeeld voor Software Engineer met sterke profieltekst, tech-stack en meetbare resultaten. Inclusief tips om recruiters en ATS te overtuigen.",
    intro:
      "Als Software Engineer overtuig je niet met buzzwords maar met aantoonbare impact en een heldere tech-stack. Een sterk CV laat zien welke problemen je hebt opgelost, welke technologieen je beheerst en hoe jouw code het verschil maakte. Maak je resultaten meetbaar met cijfers over performance, schaalbaarheid of gereduceerde bugs.",
    whatToInclude: [
      "Een duidelijke tech-stack met talen, frameworks en tools die je echt beheerst",
      "Werkervaring met meetbare impact, zoals verbeterde laadtijden of minder bugs",
      "Concrete projecten en je rol daarin, van architectuur tot deployment",
      "Ervaring met werkwijzen zoals Agile, Scrum, CI/CD en code reviews",
      "Een link naar je GitHub of portfolio om je werk te tonen",
      "Relevante opleidingen, certificeringen of bijdragen aan open source",
    ],
    tips: [
      { title: "Toon impact, niet alleen taken", text: "Schrijf niet wat je deed maar wat het opleverde. Bijvoorbeeld: de API-responstijd met 40 procent verlaagd door caching te implementeren." },
      { title: "Houd je tech-stack scanbaar", text: "Recruiters en ATS-systemen zoeken op specifieke technologieen. Groepeer je vaardigheden logisch zodat je belangrijkste stack direct opvalt." },
      { title: "Link naar werkende code", text: "Een GitHub-profiel of portfolio zegt vaak meer dan tien regels tekst. Zorg dat je beste repositories opgeschoond en voorzien zijn van een goede README." },
    ],
    keywords: ["cv software engineer", "cv voorbeeld developer", "software engineer cv template", "cv programmeur", "tech cv voorbeeld", "cv full stack developer", "software engineer profieltekst", "cv maken developer"],
    faq: [
      { q: "Moet ik mijn volledige tech-stack op mijn CV zetten?", a: "Vermeld vooral de technologieen die relevant zijn voor de functie en die je echt beheerst. Een te lange lijst met oppervlakkige kennis werkt averechts en ondermijnt je geloofwaardigheid." },
      { q: "Hoe laat ik impact zien als Software Engineer?", a: "Koppel je werk aan meetbare resultaten zoals snellere laadtijden, minder downtime of een hogere testdekking. Cijfers maken je bijdrage concreet en overtuigend." },
      { q: "Is een GitHub-link belangrijk op mijn CV?", a: "Ja, voor veel tech-rollen is dit een groot pluspunt. Het geeft recruiters direct inzicht in je codekwaliteit, mits je profiel opgeruimd en representatief is." },
    ],
    doc: {
      version: 1,
      personalDetails: { firstName: "Daan", lastName: "Visser", professionalTitle: "Software Engineer", email: "daan.visser@email.nl", phone: "06 23456789", city: "Amsterdam", linkedinUrl: "linkedin.com/in/daanvisser", websiteUrl: "github.com/daanvisser", photoUrl: "" },
      profileSummary: "Resultaatgerichte full-stack Software Engineer met 7 jaar ervaring in het bouwen van schaalbare webapplicaties. Gespecialiseerd in TypeScript, React en Node.js, met sterke kennis van cloudinfrastructuur op AWS. Verlaagde laadtijden en verbeterde testdekking in meerdere productieomgevingen. Werk graag in Agile-teams en hecht waarde aan clean code en zorgvuldige code reviews.",
      workExperience: [
        { id: "we-1", jobTitle: "Senior Software Engineer", company: "TechNova", location: "Amsterdam", startDate: "apr 2021", endDate: "", isCurrent: true, bullets: ["Verlaagde de gemiddelde API-responstijd met 40 procent door Redis-caching en queryoptimalisatie te implementeren", "Migreerde een monolithische applicatie naar microservices op AWS, wat de deploytijd van 30 naar 5 minuten bracht", "Verhoogde de testdekking van 45 naar 85 procent en reduceerde productiebugs met circa 30 procent", "Begeleidde 3 junior engineers via pair programming en gestructureerde code reviews"] },
        { id: "we-2", jobTitle: "Software Engineer", company: "Digital Solutions BV", location: "Haarlem", startDate: "aug 2017", endDate: "mrt 2021", isCurrent: false, bullets: ["Ontwikkelde nieuwe features voor een SaaS-platform met 50.000 actieve gebruikers met React en Node.js", "Bouwde een geautomatiseerde CI/CD-pipeline met GitHub Actions die de releasefrequentie verdubbelde", "Loste kritieke performanceproblemen op waardoor de Lighthouse-score van 60 naar 92 steeg"] },
      ],
      education: [
        { id: "edu-1", institution: "Technische Universiteit Delft", degree: "MSc", fieldOfStudy: "Computer Science", location: "Delft", startDate: "sep 2014", endDate: "jul 2016", isCurrent: false, description: "" },
        { id: "edu-2", institution: "Hogeschool van Amsterdam", degree: "HBO Bachelor", fieldOfStudy: "Informatica", location: "Amsterdam", startDate: "sep 2010", endDate: "jul 2014", isCurrent: false, description: "" },
      ],
      skills: ["TypeScript / JavaScript", "React & Next.js", "Node.js", "AWS (Lambda, ECS, S3)", "Docker & Kubernetes", "PostgreSQL", "CI/CD (GitHub Actions)", "Agile / Scrum"],
      languages: [{ id: "lang-1", name: "Nederlands", level: "Moedertaal" }, { id: "lang-2", name: "Engels", level: "C1" }],
      certificates: [{ id: "cert-1", name: "AWS Certified Solutions Architect - Associate", description: "Certificering voor het ontwerpen van schaalbare en veilige systemen op AWS." }],
      courses: [],
      interests: ["Open source bijdragen", "Bordspellen", "Wielrennen"],
      references: [],
      customSections: [],
    },
  },
  {
    slug: "verpleegkundige",
    profession: "Verpleegkundige",
    category: "Zorg",
    template: "klassiek",
    metaTitle: "CV-voorbeeld verpleegkundige | CVmaken.nu",
    metaDescription:
      "Sterk CV-voorbeeld voor verpleegkundige inclusief BIG-registratie, specialisaties en tips. Laat je zorgvaardigheden en ervaring overtuigend zien aan werkgevers.",
    intro:
      "Als verpleegkundige draait je CV om vertrouwen, vakbekwaamheid en zorgzaamheid. Werkgevers willen direct je BIG-registratie, je specialisaties en je ervaring met verschillende patientgroepen zien. Combineer harde kwalificaties met voorbeelden van hoe je het verschil maakt aan het bed.",
    whatToInclude: [
      "Je BIG-registratie en registratienummer, duidelijk en goed vindbaar",
      "Je opleidingsniveau, zoals MBO-verpleegkundige niveau 4 of HBO-V",
      "Specialisaties en afdelingen waar je ervaring hebt, zoals IC, SEH of ouderenzorg",
      "Ervaring met EPD-systemen zoals HiX, Epic of Nedap",
      "Vaardigheden rond patientveiligheid, medicatie en multidisciplinair samenwerken",
      "Relevante bij- en nascholing die je BIG-registratie en kennis op peil houdt",
    ],
    tips: [
      { title: "Zet je BIG-registratie bovenaan", text: "Voor verpleegkundigen is een geldige BIG-registratie essentieel. Vermeld je registratienummer duidelijk zodat werkgevers het direct kunnen verifieren." },
      { title: "Specificeer je afdelingen en patientgroepen", text: "Ervaring op de IC verschilt sterk van de geriatrie. Benoem de afdelingen en doelgroepen waarmee je werkte zodat je aansluit op de juiste vacature." },
      { title: "Toon je menselijke kant met resultaat", text: "Beschrijf hoe je patienttevredenheid of zorgkwaliteit verbeterde. Zo combineer je vakkundigheid met de zorgzaamheid die werkgevers zoeken." },
    ],
    keywords: ["cv verpleegkundige", "cv voorbeeld verpleegkundige", "verpleegkundige cv template", "cv zorg voorbeeld", "BIG-registratie cv", "cv HBO-V", "verpleegkundige profieltekst", "cv maken zorg"],
    faq: [
      { q: "Moet ik mijn BIG-registratie op mijn CV vermelden?", a: "Ja, dit is voor verpleegkundigen onmisbaar. Vermeld je BIG-nummer en de geldigheidsperiode duidelijk, zodat werkgevers je bevoegdheid direct kunnen controleren." },
      { q: "Welke specialisaties zet ik op mijn verpleegkundige CV?", a: "Benoem de afdelingen en patientgroepen waarmee je ervaring hebt, zoals IC, SEH, oncologie of ouderenzorg. Voeg ook relevante bekwaamheden toe zoals reanimatie of wondzorg." },
      { q: "Hoe laat ik mijn zorgkwaliteit zien op een CV?", a: "Gebruik concrete voorbeelden, zoals een verbeterde patienttevredenheid of een verlaagd aantal medicatiefouten. Combineer dit met je opleidingen en bijscholing." },
    ],
    doc: {
      version: 1,
      personalDetails: { firstName: "Lisa", lastName: "de Vries", professionalTitle: "Verpleegkundige (BIG-geregistreerd)", email: "lisa.devries@email.nl", phone: "06 34567890", city: "Rotterdam", linkedinUrl: "linkedin.com/in/lisadevries", websiteUrl: "", photoUrl: "" },
      profileSummary: "Betrokken en stressbestendige HBO-verpleegkundige met 8 jaar ervaring op de afdeling Spoedeisende Hulp en Interne Geneeskunde. BIG-geregistreerd (nummer 19012345678) en gespecialiseerd in acute zorg en triage. Sterk in multidisciplinair samenwerken en het waarborgen van patientveiligheid onder hoge druk. Werk dagelijks met het EPD HiX en hecht veel waarde aan persoonlijke, warme zorg.",
      workExperience: [
        { id: "we-1", jobTitle: "Verpleegkundige Spoedeisende Hulp", company: "Erasmus MC", location: "Rotterdam", startDate: "feb 2020", endDate: "", isCurrent: true, bullets: ["Verleen acute zorg en voer triage uit voor gemiddeld 40 patienten per dienst op de SEH", "Coordineer de zorg rond reanimaties en traumaopvang binnen een multidisciplinair team", "Begeleidde de implementatie van een nieuw triageprotocol dat de wachttijd met 15 procent verkortte", "Fungeer als praktijkbegeleider voor stagiaires en nieuwe collegas"] },
        { id: "we-2", jobTitle: "Verpleegkundige Interne Geneeskunde", company: "Maasstad Ziekenhuis", location: "Rotterdam", startDate: "sep 2016", endDate: "jan 2020", isCurrent: false, bullets: ["Verzorgde de dagelijkse zorg en medicatie voor een afdeling met 28 bedden", "Verlaagde het aantal medicatiefouten door een dubbelchecksysteem te introduceren", "Voerde gesprekken met patienten en familie over behandelplannen en nazorg"] },
      ],
      education: [{ id: "edu-1", institution: "Hogeschool Rotterdam", degree: "HBO Bachelor", fieldOfStudy: "Verpleegkunde (HBO-V)", location: "Rotterdam", startDate: "sep 2012", endDate: "jul 2016", isCurrent: false, description: "" }],
      skills: ["Acute zorg en triage", "Reanimatie (BLS/ALS)", "Wondverzorging", "Medicatieveiligheid", "EPD HiX", "Multidisciplinair samenwerken", "Patientvoorlichting", "Stressbestendig handelen"],
      languages: [{ id: "lang-1", name: "Nederlands", level: "Moedertaal" }, { id: "lang-2", name: "Engels", level: "B2" }],
      certificates: [{ id: "cert-1", name: "BIG-registratie verpleegkundige", description: "Geldige registratie in het BIG-register, nummer 19012345678." }, { id: "cert-2", name: "Certificaat Advanced Life Support (ALS)", description: "Gecertificeerd in geavanceerde reanimatietechnieken voor acute zorgsituaties." }],
      courses: [],
      interests: ["Yoga", "Wandelen", "Vrijwilligerswerk bij het Rode Kruis"],
      references: [],
      customSections: [],
    },
  },
  {
    slug: "marketing-manager",
    profession: "Marketing Manager",
    category: "Marketing",
    template: "modern",
    metaTitle: "CV-voorbeeld Marketing Manager | CVmaken.nu",
    metaDescription:
      "Overtuigend CV-voorbeeld voor Marketing Manager met meetbare resultaten, strategie en leiderschap. Inclusief tips om je impact op groei en ROI te laten zien.",
    intro:
      "Als Marketing Manager bewijs je je waarde met groeicijfers, ROI en strategisch leiderschap. Een sterk CV vertaalt campagnes naar resultaten: meer leads, hogere conversie en aantoonbare omzetgroei. Laat zien dat je zowel de strategie bepaalt als teams aanstuurt die het verschil maken.",
    whatToInclude: [
      "Een resultaatgerichte profieltekst met je belangrijkste groeicijfers",
      "Meetbare resultaten per campagne, zoals ROI, conversie en leadgroei",
      "Ervaring met leiderschap en het aansturen van marketingteams",
      "Kennis van kanalen en tools zoals Google Analytics, HubSpot en SEA",
      "Strategische vaardigheden rond positionering, branding en budgetbeheer",
      "Relevante opleidingen of certificeringen op het gebied van marketing",
    ],
    tips: [
      { title: "Spreek de taal van resultaat", text: "Een Marketing Manager wordt afgerekend op cijfers. Vermeld concrete groei in leads, omzet of ROI in plaats van algemene taakomschrijvingen." },
      { title: "Combineer strategie met leiderschap", text: "Laat zien dat je niet alleen campagnes bedenkt maar ook teams en budgetten aanstuurt. Noem de teamgrootte en het budget dat je beheerde." },
      { title: "Toon je tooling en datagedrevenheid", text: "Werkgevers zoeken marketeers die op data sturen. Benoem tools zoals GA4, HubSpot en SEA-platforms om je analytische aanpak te onderbouwen." },
    ],
    keywords: ["cv marketing manager", "cv voorbeeld marketing", "marketing manager cv template", "cv online marketing", "marketing cv tips", "cv marketeer voorbeeld", "marketing manager profieltekst", "cv maken marketing"],
    faq: [
      { q: "Welke cijfers zet ik op mijn marketing CV?", a: "Denk aan groei in leads, conversiepercentages, ROI, omzetbijdrage en budget. Concrete getallen maken je impact tastbaar en onderscheiden je van andere kandidaten." },
      { q: "Hoe laat ik leiderschap zien als Marketing Manager?", a: "Benoem de grootte van het team dat je aanstuurde, het budget dat je beheerde en strategische beslissingen die je nam. Dit toont dat je klaar bent voor verantwoordelijkheid." },
      { q: "Welke tools horen op een marketing CV?", a: "Vermeld relevante platforms zoals Google Analytics 4, HubSpot, Google Ads en social-advertising tools. Pas je lijst aan op de tools die in de vacature genoemd worden." },
    ],
    doc: {
      version: 1,
      personalDetails: { firstName: "Tom", lastName: "Jansen", professionalTitle: "Marketing Manager", email: "tom.jansen@email.nl", phone: "06 45678901", city: "Eindhoven", linkedinUrl: "linkedin.com/in/tomjansen", websiteUrl: "tomjansen.nl", photoUrl: "" },
      profileSummary: "Strategische en datagedreven Marketing Manager met 9 jaar ervaring in B2B- en B2C-marketing. Realiseerde een leadgroei van 60 procent en verdubbelde de online omzet binnen twee jaar. Sterk in het aansturen van teams, het beheren van budgetten en het vertalen van data naar groei. Ervaren met de volledige marketingmix, van branding tot performance marketing.",
      workExperience: [
        { id: "we-1", jobTitle: "Marketing Manager", company: "BrightWave", location: "Eindhoven", startDate: "jan 2021", endDate: "", isCurrent: true, bullets: ["Verhoogde het aantal gekwalificeerde leads met 60 procent door een datagedreven contentstrategie te lanceren", "Stuurde een team van 6 marketeers aan en beheerde een jaarbudget van 750.000 euro", "Verdubbelde de online omzet in twee jaar door optimalisatie van SEA- en SEO-campagnes", "Verlaagde de cost-per-lead met 35 procent door betere kanaalattributie en A/B-testen"] },
        { id: "we-2", jobTitle: "Online Marketeer", company: "Mediahuis Digital", location: "Den Bosch", startDate: "mrt 2016", endDate: "dec 2020", isCurrent: false, bullets: ["Beheerde Google Ads-campagnes met een maandbudget van 50.000 euro en een ROAS van 4,5", "Verhoogde de organische websitebezoeken met 80 procent via een nieuwe SEO-strategie", "Implementeerde HubSpot voor marketing automation, wat de conversie van leads naar klant met 25 procent verbeterde"] },
      ],
      education: [
        { id: "edu-1", institution: "Tilburg University", degree: "MSc", fieldOfStudy: "Marketing Management", location: "Tilburg", startDate: "sep 2013", endDate: "jul 2015", isCurrent: false, description: "" },
        { id: "edu-2", institution: "Fontys Hogescholen", degree: "HBO Bachelor", fieldOfStudy: "Commerciele Economie", location: "Eindhoven", startDate: "sep 2009", endDate: "jul 2013", isCurrent: false, description: "" },
      ],
      skills: ["Marketingstrategie", "SEA & SEO", "Google Analytics 4", "HubSpot", "Contentmarketing", "Budgetbeheer", "Teamleiderschap", "Conversieoptimalisatie"],
      languages: [{ id: "lang-1", name: "Nederlands", level: "Moedertaal" }, { id: "lang-2", name: "Engels", level: "C1" }],
      certificates: [{ id: "cert-1", name: "Google Ads Search Certificering", description: "Officiele certificering voor het opzetten en optimaliseren van zoekcampagnes." }, { id: "cert-2", name: "HubSpot Inbound Marketing", description: "Certificering in inbound-marketingstrategie en marketing automation." }],
      courses: [],
      interests: ["Hardlopen", "Fotografie", "Podcasts over ondernemerschap"],
      references: [],
      customSections: [],
    },
  },
  {
    slug: "accountant",
    profession: "Accountant",
    category: "Finance",
    template: "klassiek",
    metaTitle: "CV-voorbeeld Accountant: template en tips | CVmaken.nu",
    metaDescription:
      "Bekijk een professioneel CV-voorbeeld voor accountants. Inclusief profielschets, vaardigheden en tips over NBA, boekhoudpakketten en jaarrekeningen.",
    intro:
      "Een sterk CV voor een accountant draait om betrouwbaarheid, nauwkeurigheid en aantoonbare cijfermatige resultaten. Laat zien dat je bekend bent met relevante boekhoudpakketten, wet- en regelgeving en dat je waarde toevoegt aan zowel de klant als het kantoor. Recruiters in de financiele sector letten op concrete prestaties en certificeringen zoals een NBA-inschrijving.",
    whatToInclude: [
      "Je opleidingsniveau en eventuele RA- of AA-titel met NBA-inschrijving",
      "Ervaring met boekhoudpakketten zoals Exact, Twinfield, AFAS of Unit4",
      "Concrete resultaten: aantal afgeronde jaarrekeningen, klantportefeuilles en efficiencyverbeteringen",
      "Kennis van wet- en regelgeving (fiscaliteit, IFRS, RJ-richtlijnen)",
      "Soft skills zoals nauwkeurigheid, adviesvaardigheid en klantcommunicatie",
      "Relevante cursussen en permanente educatie (PE-punten)",
    ],
    tips: [
      { title: "Kwantificeer je werk", text: "Noem het aantal dossiers, jaarrekeningen of de omvang van de klantportefeuille die je beheerde. Cijfers maken je impact direct tastbaar voor de recruiter." },
      { title: "Benoem je software", text: "Boekhoudkantoren zoeken vaak gericht op tooling. Vermeld expliciet welke boekhoudpakketten je beheerst en op welk niveau, zodat je door de ATS-selectie komt." },
      { title: "Toon je betrouwbaarheid", text: "Verwijs naar je NBA-inschrijving en PE-punten. Dit bevestigt dat je voldoet aan de beroepseisen en je vak serieus bijhoudt." },
    ],
    keywords: ["cv accountant", "accountant cv voorbeeld", "cv finance", "boekhouder cv", "NBA accountant", "jaarrekening", "Exact Twinfield", "financieel cv"],
    faq: [
      { q: "Welke vaardigheden zet ik op mijn accountant-cv?", a: "Vermeld zowel technische vaardigheden (boekhoudpakketten, jaarrekeningen, fiscaliteit, IFRS/RJ) als persoonlijke vaardigheden zoals nauwkeurigheid, analytisch vermogen en klantadvies. Combineer dit met concrete resultaten." },
      { q: "Moet ik mijn NBA-inschrijving vermelden?", a: "Ja. Als je een RA- of AA-titel hebt en bent ingeschreven bij de NBA, vermeld dit prominent bij je personalia of certificeringen. Het is voor veel functies een harde eis." },
      { q: "Hoeveel werkervaring laat ik zien?", a: "Toon je twee tot drie meest relevante functies van de afgelopen tien jaar. Focus op resultaten en verantwoordelijkheden in plaats van een volledige opsomming van taken." },
    ],
    doc: {
      version: 1,
      personalDetails: { firstName: "Sanne", lastName: "de Vries", professionalTitle: "Accountant (AA)", email: "sanne.devries@email.nl", phone: "06 12345678", city: "Utrecht", linkedinUrl: "linkedin.com/in/sannedevries", websiteUrl: "", photoUrl: "" },
      profileSummary: "Gedreven en nauwkeurige accountant (AA) met meer dan 8 jaar ervaring in de samenstelpraktijk bij het MKB. Ingeschreven bij de NBA en gespecialiseerd in het samenstellen van jaarrekeningen, fiscale aangiften en strategisch klantadvies. Beheer zelfstandig een portefeuille van ruim 60 klanten en realiseerde een efficiencyverbetering van 20% door automatisering van het samenstelproces.",
      workExperience: [
        { id: "we-1", jobTitle: "Accountant (AA)", company: "Berenschot Accountants", location: "Utrecht", startDate: "mrt 2020", endDate: "", isCurrent: true, bullets: ["Beheer een klantportefeuille van 60+ MKB-ondernemingen en stel jaarlijks ruim 70 jaarrekeningen samen", "Realiseerde een efficiencyverbetering van 20% door implementatie van Twinfield en geautomatiseerde werkprogramma's", "Adviseer ondernemers over fiscale optimalisatie, wat klanten gemiddeld 8% besparing op de aangifte opleverde", "Begeleid en review het werk van twee junior assistent-accountants"] },
        { id: "we-2", jobTitle: "Assistent-accountant", company: "Flynth Adviseurs en Accountants", location: "Amersfoort", startDate: "sep 2016", endDate: "feb 2020", isCurrent: false, bullets: ["Stelde jaarrekeningen samen voor een diverse portefeuille van eenmanszaken en BV's", "Verzorgde aangiften inkomstenbelasting, vennootschapsbelasting en btw voor 40+ klanten", "Verwerkte boekhoudingen in Exact Online en signaleerde proactief afwijkingen in de cijfers"] },
      ],
      education: [
        { id: "edu-1", institution: "Nyenrode Business Universiteit", degree: "Master of Science", fieldOfStudy: "Accountancy (AA-opleiding)", location: "Breukelen", startDate: "sep 2013", endDate: "jun 2016", isCurrent: false, description: "" },
        { id: "edu-2", institution: "Hogeschool Utrecht", degree: "Bachelor", fieldOfStudy: "Accountancy", location: "Utrecht", startDate: "sep 2009", endDate: "jun 2013", isCurrent: false, description: "" },
      ],
      skills: ["Samenstellen jaarrekeningen", "Fiscale aangiften (IB, VPB, btw)", "Twinfield", "Exact Online", "AFAS", "Klantadvies", "RJ-richtlijnen", "Analytisch vermogen"],
      languages: [{ id: "lang-1", name: "Nederlands", level: "Moedertaal" }, { id: "lang-2", name: "Engels", level: "B2" }],
      certificates: [{ id: "cert-1", name: "NBA-inschrijving (AA)", description: "Ingeschreven Accountant-Administratieconsulent bij de Nederlandse Beroepsorganisatie van Accountants." }, { id: "cert-2", name: "Permanente Educatie (PE)", description: "Jaarlijks behalen van de vereiste PE-punten op het gebied van fiscaliteit en verslaggeving." }],
      courses: [],
      interests: ["Hardlopen", "Beleggen", "Zeilen"],
      references: [],
      customSections: [],
    },
  },
  {
    slug: "leraar",
    profession: "Leraar",
    category: "Onderwijs",
    template: "klassiek",
    metaTitle: "CV-voorbeeld Leraar: template en tips | CVmaken.nu",
    metaDescription:
      "Maak indruk met een professioneel CV-voorbeeld voor leraren. Met tips over lesbevoegdheid, onderwijsniveaus, didactiek en concrete resultaten in de klas.",
    intro:
      "Een goed CV voor een leraar laat niet alleen je lesbevoegdheid en onderwijservaring zien, maar ook je didactische visie en de resultaten die je leerlingen behalen. Scholen zoeken docenten die vakinhoudelijk sterk zijn en tegelijk een veilig en motiverend klasklimaat creeren. Maak je bevoegdheid, onderwijsniveaus en betrokkenheid bij de schoolorganisatie meteen duidelijk.",
    whatToInclude: [
      "Je lesbevoegdheid (eerste- of tweedegraads) en bevoegde vakken",
      "De onderwijsniveaus waar je ervaring mee hebt (vmbo, havo, vwo, mbo, po)",
      "Concrete resultaten zoals slagingspercentages of verbeterde leerlingprestaties",
      "Didactische en pedagogische vaardigheden en methodieken die je toepast",
      "Extra rollen zoals mentoraat, sectievoorzitter of coordinator",
      "Relevante nascholing, certificeringen en lerarenregistratie",
    ],
    tips: [
      { title: "Maak je bevoegdheid zichtbaar", text: "Vermeld direct of je een eerste- of tweedegraads bevoegdheid hebt en voor welke vakken. Dit is vaak het eerste waar een schoolleider naar kijkt." },
      { title: "Toon impact op leerlingen", text: "Noem concrete resultaten, zoals een gestegen slagingspercentage of een verbeterd gemiddeld cijfer voor jouw vak. Dit maakt je toegevoegde waarde tastbaar." },
      { title: "Laat je betrokkenheid zien", text: "Scholen waarderen docenten die meer doen dan lesgeven. Vermeld mentoraat, commissies of projecten waarmee je hebt bijgedragen aan de school." },
    ],
    keywords: ["cv leraar", "leraar cv voorbeeld", "cv docent", "lesbevoegdheid cv", "cv onderwijs", "tweedegraads bevoegdheid", "docent sollicitatie", "cv basisschool"],
    faq: [
      { q: "Moet ik mijn lesbevoegdheid op mijn cv zetten?", a: "Ja, absoluut. Vermeld duidelijk of je een eerste- of tweedegraads bevoegdheid hebt en voor welke vakken. Voeg ook je registratie in het lerarenregister toe indien van toepassing." },
      { q: "Hoe laat ik resultaten zien als leraar?", a: "Gebruik concrete cijfers waar mogelijk: slagingspercentages, gemiddelde cijferstijging, of de groei van leerlingen die je begeleidde. Beschrijf ook vernieuwingen die je in de les hebt doorgevoerd." },
      { q: "Welke extra rollen zijn relevant?", a: "Mentoraat, sectie- of teamleiderschap, examencommissie, of het ontwikkelen van lesmateriaal laten zien dat je breed inzetbaar en betrokken bent bij de schoolorganisatie." },
    ],
    doc: {
      version: 1,
      personalDetails: { firstName: "Thomas", lastName: "Jansen", professionalTitle: "Docent Nederlands (tweedegraads)", email: "thomas.jansen@email.nl", phone: "06 23456789", city: "Nijmegen", linkedinUrl: "linkedin.com/in/thomasjansen", websiteUrl: "", photoUrl: "" },
      profileSummary: "Bevlogen tweedegraads docent Nederlands met 7 jaar ervaring in het voortgezet onderwijs op vmbo-, havo- en vwo-niveau. Sterk in het creeren van een veilig en activerend klasklimaat en het inzetten van differentiatie. Verhoogde als sectievoorzitter het gemiddelde examencijfer Nederlands met 0,6 punt door invoering van een nieuwe leesmethode.",
      workExperience: [
        { id: "we-1", jobTitle: "Docent Nederlands en sectievoorzitter", company: "Stedelijk Gymnasium Nijmegen", location: "Nijmegen", startDate: "aug 2020", endDate: "", isCurrent: true, bullets: ["Geef les in Nederlands aan klassen op havo- en vwo-niveau, gemiddeld 28 leerlingen per klas", "Verhoogde als sectievoorzitter het gemiddelde eindexamencijfer Nederlands van 6,4 naar 7,0", "Begeleid als mentor jaarlijks een mentorklas van 26 leerlingen bij studie- en sociale ontwikkeling", "Ontwikkelde een vakoverstijgend leesbevorderingsproject dat schoolbreed is ingevoerd"] },
        { id: "we-2", jobTitle: "Docent Nederlands", company: "Kandinsky College", location: "Nijmegen", startDate: "aug 2017", endDate: "jul 2020", isCurrent: false, bullets: ["Verzorgde lessen Nederlands aan vmbo- en havoklassen in de onder- en bovenbouw", "Paste differentiatie en formatief toetsen toe om aan te sluiten bij verschillende leerniveaus", "Begeleidde startende collega's en stagiairs als onderdeel van het inwerktraject"] },
      ],
      education: [{ id: "edu-1", institution: "Hogeschool van Arnhem en Nijmegen", degree: "Bachelor of Education", fieldOfStudy: "Tweedegraads lerarenopleiding Nederlands", location: "Nijmegen", startDate: "sep 2013", endDate: "jun 2017", isCurrent: false, description: "" }],
      skills: ["Didactiek en lesontwerp", "Differentiatie", "Klassenmanagement", "Formatief toetsen", "Mentoraat", "Magister", "Pedagogisch klimaat", "Examentraining"],
      languages: [{ id: "lang-1", name: "Nederlands", level: "Moedertaal" }, { id: "lang-2", name: "Engels", level: "B2" }],
      certificates: [{ id: "cert-1", name: "Tweedegraads lesbevoegdheid Nederlands", description: "Bevoegd om les te geven in het vak Nederlands in vmbo, havo (onderbouw) en mbo." }, { id: "cert-2", name: "BHV-certificaat", description: "Gecertificeerd bedrijfshulpverlener, jaarlijks bijgeschoold." }],
      courses: [],
      interests: ["Literatuur", "Toneel", "Wielrennen"],
      references: [],
      customSections: [],
    },
  },
  {
    slug: "projectmanager",
    profession: "Projectmanager",
    category: "Consultancy",
    template: "modern",
    metaTitle: "CV-voorbeeld Projectmanager: template en tips | CVmaken.nu",
    metaDescription:
      "Professioneel CV-voorbeeld voor projectmanagers. Met tips over PRINCE2, Agile, budgetbeheer, teamgrootte en het tonen van meetbare projectresultaten.",
    intro:
      "Een overtuigend CV voor een projectmanager bewijst dat je projecten op tijd en binnen budget oplevert en teams effectief aanstuurt. Recruiters kijken naar de omvang van je projecten, je methodieken zoals PRINCE2 of Agile, en de concrete resultaten die je behaalde. Vertaal je ervaring naar cijfers: budgetomvang, teamgrootte en behaalde doelstellingen.",
    whatToInclude: [
      "Methodologieen en certificeringen zoals PRINCE2, Agile/Scrum of IPMA",
      "Budgetomvang van de projecten die je hebt beheerd",
      "Teamgrootte en het aantal stakeholders dat je aanstuurde",
      "Concrete resultaten: opgeleverd binnen budget, tijdwinst of kostenbesparing",
      "Branchekennis en het type projecten (IT, bouw, transformatie)",
      "Vaardigheden in stakeholdermanagement, risicobeheer en planning",
    ],
    tips: [
      { title: "Geef projecten een schaal", text: "Noem altijd budget, teamgrootte en doorlooptijd. Een project van 2 miljoen euro met een team van 15 zegt direct iets over je niveau en verantwoordelijkheid." },
      { title: "Vermeld je certificeringen", text: "PRINCE2, Agile/Scrum en IPMA zijn veelgevraagde keurmerken. Zet ze prominent op je cv, want recruiters filteren hier vaak gericht op." },
      { title: "Focus op resultaat, niet op proces", text: "Beschrijf wat het project opleverde: kostenbesparing, omzetgroei of tijdwinst. Resultaten onderscheiden je van kandidaten die enkel taken opsommen." },
    ],
    keywords: ["cv projectmanager", "projectmanager cv voorbeeld", "cv project manager", "PRINCE2 cv", "Agile projectmanager", "cv consultancy", "projectleider cv", "stakeholdermanagement"],
    faq: [
      { q: "Welke certificeringen zet ik op mijn projectmanager-cv?", a: "Vermeld erkende certificeringen zoals PRINCE2 (Foundation of Practitioner), PMP, IPMA of Agile/Scrum (PSM). Deze zijn vaak een harde selectie-eis en versterken je profiel direct." },
      { q: "Hoe maak ik mijn projectervaring concreet?", a: "Beschrijf per project de budgetomvang, teamgrootte, doorlooptijd en het behaalde resultaat. Gebruik werkwoorden als 'leverde op', 'realiseerde' en 'reduceerde' met bijbehorende cijfers." },
      { q: "Moet ik de gebruikte methodiek vermelden?", a: "Ja. Geef per rol of project aan of je waterval, Agile/Scrum of een hybride aanpak hanteerde. Dit laat zien dat je je werkwijze afstemt op de context van de organisatie." },
    ],
    doc: {
      version: 1,
      personalDetails: { firstName: "Lisa", lastName: "Bakker", professionalTitle: "Senior Projectmanager (PRINCE2)", email: "lisa.bakker@email.nl", phone: "06 34567890", city: "Amsterdam", linkedinUrl: "linkedin.com/in/lisabakker", websiteUrl: "", photoUrl: "" },
      profileSummary: "Resultaatgerichte senior projectmanager met 10 jaar ervaring in complexe IT- en transformatieprojecten binnen de financiele en publieke sector. PRINCE2- en Scrum-gecertificeerd en gewend aan budgetten tot 3 miljoen euro en teams van 15+ professionals. Leverde de afgelopen drie jaar 95% van de projecten op tijd en binnen budget op.",
      workExperience: [
        { id: "we-1", jobTitle: "Senior Projectmanager", company: "Deloitte Consulting", location: "Amsterdam", startDate: "jan 2021", endDate: "", isCurrent: true, bullets: ["Leid digitale transformatieprojecten met budgetten tot 3 miljoen euro en teams van 15 tot 20 professionals", "Realiseerde een kostenbesparing van 18% bij een ERP-implementatie door scherpe scope- en risicobeheersing", "Stuur multidisciplinaire teams aan met een hybride aanpak (PRINCE2 en Scrum) en rapporteer aan de stuurgroep", "Leverde 95% van de projecten op tijd en binnen budget op dankzij strakke stakeholderafstemming"] },
        { id: "we-2", jobTitle: "Projectmanager", company: "Capgemini", location: "Utrecht", startDate: "mrt 2016", endDate: "dec 2020", isCurrent: false, bullets: ["Beheerde IT-projecten met budgetten van 0,5 tot 1,5 miljoen euro en teams tot 12 personen", "Reduceerde de doorlooptijd van een migratietraject met 25% door invoering van Agile sprints", "Coordineerde stakeholders op directieniveau en verzorgde maandelijkse voortgangsrapportages"] },
      ],
      education: [
        { id: "edu-1", institution: "Erasmus Universiteit Rotterdam", degree: "Master of Science", fieldOfStudy: "Business Information Management", location: "Rotterdam", startDate: "sep 2011", endDate: "aug 2013", isCurrent: false, description: "" },
        { id: "edu-2", institution: "Hogeschool van Amsterdam", degree: "Bachelor", fieldOfStudy: "Bedrijfskundige Informatica", location: "Amsterdam", startDate: "sep 2007", endDate: "jun 2011", isCurrent: false, description: "" },
      ],
      skills: ["PRINCE2", "Agile/Scrum", "Stakeholdermanagement", "Budgetbeheer", "Risicomanagement", "Projectplanning", "MS Project", "Jira"],
      languages: [{ id: "lang-1", name: "Nederlands", level: "Moedertaal" }, { id: "lang-2", name: "Engels", level: "C1" }],
      certificates: [{ id: "cert-1", name: "PRINCE2 Practitioner", description: "Gecertificeerd in de PRINCE2-methodiek voor het beheersen en leiden van projecten." }, { id: "cert-2", name: "Professional Scrum Master I (PSM I)", description: "Scrum.org-certificering voor het begeleiden van Agile teams." }],
      courses: [],
      interests: ["Bergwandelen", "Schaken", "Architectuur"],
      references: [],
      customSections: [],
    },
  },
  {
    slug: "verkoopmedewerker",
    profession: "Verkoopmedewerker",
    category: "Sales",
    template: "minimaal",
    metaTitle: "CV-voorbeeld Verkoopmedewerker: template en tips | CVmaken.nu",
    metaDescription:
      "Gratis CV-voorbeeld voor verkoopmedewerkers. Met tips over omzet, targets, klantgerichtheid en het tonen van concrete verkoopresultaten in de winkel.",
    intro:
      "Een goed CV voor een verkoopmedewerker laat zien dat je klantgericht bent, targets haalt en bijdraagt aan de omzet van de winkel. Werkgevers in de retail zoeken enthousiaste medewerkers met commerciele instelling en goede communicatieve vaardigheden. Maak je verkoopresultaten en klantbeoordelingen waar mogelijk concreet met cijfers.",
    whatToInclude: [
      "Concrete verkoopresultaten zoals behaalde targets en omzetbijdrage",
      "Ervaring met kassasystemen, voorraadbeheer en bestellingen",
      "Klantgerichtheid en aantoonbare klanttevredenheid",
      "Commerciele vaardigheden zoals upselling en cross-selling",
      "Flexibiliteit in werktijden en inzet tijdens piekperiodes",
      "Talenkennis en communicatieve vaardigheden voor klantcontact",
    ],
    tips: [
      { title: "Maak je verkoop meetbaar", text: "Vermeld behaalde targets, omzetgroei of het aantal klanten dat je per dag hielp. Cijfers bewijzen je commerciele waarde voor de winkel." },
      { title: "Benadruk klantgerichtheid", text: "Retailwerkgevers zoeken mensen die klanten met plezier helpen. Noem voorbeelden van goede klantbeoordelingen of terugkerende klanten dankzij jouw service." },
      { title: "Toon je flexibiliteit", text: "Bereidheid om in het weekend, de avonden of tijdens drukke periodes te werken is een groot pluspunt. Vermeld dit expliciet op je cv." },
    ],
    keywords: ["cv verkoopmedewerker", "verkoopmedewerker cv voorbeeld", "cv retail", "cv winkelmedewerker", "cv verkoop", "verkoper sollicitatie", "cv detailhandel", "klantgerichtheid cv"],
    faq: [
      { q: "Wat zet ik op mijn cv als ik weinig werkervaring heb?", a: "Focus op je commerciele instelling, klantgerichtheid en flexibiliteit. Vermeld bijbanen, stages of vrijwilligerswerk waar je met klanten werkte en benoem je leergierigheid en enthousiasme." },
      { q: "Hoe laat ik verkoopresultaten zien?", a: "Gebruik cijfers waar mogelijk: behaalde targets, omzetgroei, het aantal klanten per dienst of een hoge klanttevredenheidsscore. Dit maakt je toegevoegde waarde concreet." },
      { q: "Welke vaardigheden zijn belangrijk voor een verkoopmedewerker?", a: "Klantgerichtheid, commercieel inzicht, communicatieve vaardigheden, kennis van kassasystemen en flexibiliteit. Vermeld ook upselling en het werken in teamverband." },
    ],
    doc: {
      version: 1,
      personalDetails: { firstName: "Daan", lastName: "Visser", professionalTitle: "Verkoopmedewerker retail", email: "daan.visser@email.nl", phone: "06 45678901", city: "Rotterdam", linkedinUrl: "linkedin.com/in/daanvisser", websiteUrl: "", photoUrl: "" },
      profileSummary: "Enthousiaste en klantgerichte verkoopmedewerker met 5 jaar ervaring in de retail en fashion. Sterk in persoonlijk advies, upselling en het halen van verkooptargets. Behaalde gemiddeld 110% van mijn maandelijkse omzettarget en droeg bij aan een stijging van de klanttevredenheid naar 4,7 op 5.",
      workExperience: [
        { id: "we-1", jobTitle: "Verkoopmedewerker", company: "Bijenkorf", location: "Rotterdam", startDate: "feb 2021", endDate: "", isCurrent: true, bullets: ["Behaal structureel 110% van mijn maandelijkse omzettarget door gericht persoonlijk klantadvies", "Verhoogde de gemiddelde besteding per klant met 15% via upselling en cross-selling", "Verzorg de kassa-afhandeling, voorraadbeheer en het aanvullen van de winkelvloer", "Behaalde een individuele klanttevredenheidsscore van 4,7 op 5 in klantonderzoeken"] },
        { id: "we-2", jobTitle: "Verkoopmedewerker", company: "H&M", location: "Rotterdam", startDate: "sep 2019", endDate: "jan 2021", isCurrent: false, bullets: ["Hielp dagelijks 50+ klanten met advies en het vinden van de juiste producten", "Verzorgde de visuele presentatie van de winkel en de wisseling van collecties", "Werkte flexibel tijdens piekperiodes zoals sale, feestdagen en weekenden"] },
      ],
      education: [{ id: "edu-1", institution: "Albeda College", degree: "Mbo niveau 4", fieldOfStudy: "Commercieel medewerker (Retail)", location: "Rotterdam", startDate: "sep 2015", endDate: "jun 2019", isCurrent: false, description: "" }],
      skills: ["Klantgerichtheid", "Upselling en cross-selling", "Kassasystemen", "Voorraadbeheer", "Commercieel inzicht", "Teamwork", "Productpresentatie", "Flexibiliteit"],
      languages: [{ id: "lang-1", name: "Nederlands", level: "Moedertaal" }, { id: "lang-2", name: "Engels", level: "B2" }],
      certificates: [{ id: "cert-1", name: "Diploma Commercieel medewerker (mbo-4)", description: "Afgeronde mbo-opleiding gericht op verkoop en klantadvies in de retail." }, { id: "cert-2", name: "Cursus Klantgericht verkopen", description: "Interne training in adviserend verkopen en omgaan met klantvragen." }],
      courses: [],
      interests: ["Mode", "Voetbal", "Reizen"],
      references: [],
      customSections: [],
    },
  },
  {
    slug: "data-analist",
    profession: "Data Analist",
    category: "Tech",
    template: "modern",
    metaTitle: "CV-voorbeeld Data Analist en gratis template | CVmaken.nu",
    metaDescription:
      "Bekijk een professioneel CV-voorbeeld voor Data Analist. Met Python, SQL en Power BI accenten, concrete resultaten en handige tips om direct op te vallen bij recruiters.",
    intro:
      "Een sterk CV voor een Data Analist laat niet alleen je technische vaardigheden zien, maar vooral de impact die je met data hebt gemaakt. Recruiters zoeken naar bewijs dat je ruwe data omzet in beslissingen, dus combineer tools als Python, SQL en Power BI met meetbare resultaten. Dit voorbeeld helpt je om jouw analytische waarde overtuigend op papier te zetten.",
    whatToInclude: [
      "Een profielschets die je analytische denkwijze en zakelijke impact benadrukt",
      "Concrete tools en talen: SQL, Python (pandas), Power BI of Tableau",
      "Resultaatgerichte werkervaring met cijfers, zoals tijdwinst of omzetimpact",
      "Ervaring met datavisualisatie en het vertalen van inzichten naar de business",
      "Relevante opleiding of certificeringen op het gebied van data en statistiek",
      "Vaardigheden in datakwaliteit, ETL-processen en het bouwen van dashboards",
    ],
    tips: [
      { title: "Toon impact, niet alleen tools", text: "Vermeld niet alleen dat je SQL kent, maar wat je ermee bereikte. Bijvoorbeeld: een dashboard dat de rapportagetijd met 60% verkortte. Cijfers maken jouw waarde concreet en geloofwaardig." },
      { title: "Stem keywords af op de vacature", text: "Veel werkgevers gebruiken een ATS dat scant op termen als Python, ETL en Power BI. Neem de exacte tools uit de vacaturetekst over in je vaardigheden en werkervaring zodat je door de selectie komt." },
      { title: "Maak je profielschets bondig", text: "Houd je profiel op vier tot vijf zinnen en focus op je sterkste analytische resultaten. Recruiters lezen de eerste seconden vluchtig, dus zet je belangrijkste waarde bovenaan." },
    ],
    keywords: ["cv data analist", "data analist voorbeeld", "data analyst cv", "sql cv", "python data cv", "power bi cv", "cv template tech", "data analist sollicitatie"],
    faq: [
      { q: "Welke vaardigheden zijn het belangrijkst op een CV voor Data Analist?", a: "De belangrijkste vaardigheden zijn SQL, Python of R, datavisualisatie met Power BI of Tableau, en ervaring met ETL en datakwaliteit. Combineer deze technische skills altijd met voorbeelden van zakelijke impact, zoals snellere rapportages of betere besluitvorming." },
      { q: "Hoe lang moet een CV voor een Data Analist zijn?", a: "Houd je CV bij voorkeur op een of maximaal twee pagina's. Focus op je meest relevante en recente ervaring en laat oudere of niet-relevante banen kort. Kwaliteit en meetbare resultaten wegen zwaarder dan volledigheid." },
      { q: "Moet ik mijn projecten op mijn CV vermelden?", a: "Ja, zeker als je junior bent of overstapt naar data. Vermeld een of twee concrete projecten met de gebruikte tools en het behaalde resultaat. Een link naar een GitHub-portfolio of dashboard versterkt je geloofwaardigheid aanzienlijk." },
    ],
    doc: {
      version: 1,
      personalDetails: { firstName: "Lisa", lastName: "de Vries", professionalTitle: "Data Analist", email: "lisa.devries@email.nl", phone: "06 12345678", city: "Utrecht", linkedinUrl: "linkedin.com/in/lisadevries", websiteUrl: "github.com/lisadevries", photoUrl: "" },
      profileSummary: "Resultaatgerichte Data Analist met 5 jaar ervaring in het omzetten van complexe datasets naar bruikbare inzichten. Gespecialiseerd in SQL, Python en Power BI, met een sterke focus op het bouwen van schaalbare dashboards en het automatiseren van rapportages. Werk graag op het snijvlak van data en business, waar ik analyses vertaal naar concrete beslissingen die tijd en kosten besparen.",
      workExperience: [
        { id: "we-1", jobTitle: "Data Analist", company: "RetailNova", location: "Utrecht", startDate: "mrt 2022", endDate: "", isCurrent: true, bullets: ["Ontwikkelde Power BI-dashboards die de maandelijkse rapportagetijd met 60% verkortten voor het management.", "Automatiseerde data-pijplijnen in Python en SQL, waardoor 12 uur handmatig werk per week wegviel.", "Voerde klantsegmentatie-analyses uit die bijdroegen aan een omzetstijging van 8% in de webshop.", "Begeleidde twee junior analisten in SQL-best practices en datavisualisatie."] },
        { id: "we-2", jobTitle: "Junior Data Analist", company: "FinSight BV", location: "Amersfoort", startDate: "jan 2020", endDate: "feb 2022", isCurrent: false, bullets: ["Bouwde geautomatiseerde KPI-rapportages in Power BI voor vier afdelingen.", "Verbeterde de datakwaliteit door een validatieproces op te zetten dat fouten met 35% reduceerde.", "Analyseerde verkoopdata in SQL en presenteerde inzichten aan stakeholders."] },
      ],
      education: [
        { id: "edu-1", institution: "Universiteit Utrecht", degree: "MSc", fieldOfStudy: "Methodology and Statistics", location: "Utrecht", startDate: "sep 2017", endDate: "aug 2019", isCurrent: false, description: "" },
        { id: "edu-2", institution: "Hogeschool Utrecht", degree: "BSc", fieldOfStudy: "Bedrijfskunde", location: "Utrecht", startDate: "sep 2013", endDate: "jul 2017", isCurrent: false, description: "" },
      ],
      skills: ["SQL", "Python (pandas, NumPy)", "Power BI", "Tableau", "ETL-processen", "Datavisualisatie", "Statistiek", "Excel (gevorderd)"],
      languages: [{ id: "lang-1", name: "Nederlands", level: "Moedertaal" }, { id: "lang-2", name: "Engels", level: "C1" }],
      certificates: [{ id: "cert-1", name: "Microsoft Certified: Power BI Data Analyst Associate", description: "Officiele certificering voor het bouwen en beheren van Power BI-oplossingen." }],
      courses: [],
      interests: ["Datavisualisatie", "Hardlopen", "Schaken"],
      references: [],
      customSections: [],
    },
  },
  {
    slug: "hr-adviseur",
    profession: "HR Adviseur",
    category: "HR",
    template: "klassiek",
    metaTitle: "CV-voorbeeld HR Adviseur en gratis template | CVmaken.nu",
    metaDescription:
      "Professioneel CV-voorbeeld voor HR Adviseur. Met aandacht voor verzuimbegeleiding, AFAS, arbeidsrecht en concrete resultaten. Inclusief praktische tips en template.",
    intro:
      "Als HR Adviseur ben je de schakel tussen medewerkers, management en beleid, en dat mag je CV laten zien. Werkgevers zoeken naar een combinatie van mensgerichtheid en kennis van wet- en regelgeving, verzuim en HR-systemen zoals AFAS. Dit voorbeeld helpt je om je adviserende rol en behaalde resultaten professioneel te presenteren.",
    whatToInclude: [
      "Een profielschets die je adviserende rol en mensgerichte aanpak benadrukt",
      "Ervaring met verzuimbegeleiding en de Wet verbetering poortwachter",
      "Kennis van HR-systemen zoals AFAS of Visma en de gehele HR-cyclus",
      "Concrete resultaten, zoals verlaagd verzuim of verbeterde retentie",
      "Kennis van arbeidsrecht, cao's en personeelsbeleid",
      "Soft skills als adviesvaardigheid, gesprekstechnieken en discretie",
    ],
    tips: [
      { title: "Maak je adviserende impact zichtbaar", text: "HR draait om mensen, maar resultaten overtuigen. Vermeld bijvoorbeeld dat je het ziekteverzuim van 6% naar 4% bracht of de doorlooptijd van werving halveerde. Zo toon je dat je beleid daadwerkelijk verschil maakt." },
      { title: "Benoem je systeemkennis expliciet", text: "Veel organisaties werken met AFAS, Visma of Workday. Noem de systemen die jij beheerst, want dit is vaak een harde eis in vacatures en bespaart de werkgever inwerktijd." },
      { title: "Toon je kennis van wetgeving", text: "Verwijs naar concrete kaders zoals de Wet verbetering poortwachter, cao-toepassing of de AVG. Dit laat zien dat je betrouwbaar adviseert en risico's voor de organisatie kunt afdekken." },
    ],
    keywords: ["cv hr adviseur", "hr adviseur voorbeeld", "hr cv template", "personeelsadviseur cv", "verzuim cv", "afas cv", "human resources cv", "hr sollicitatie"],
    faq: [
      { q: "Wat moet er zeker op een CV voor HR Adviseur staan?", a: "Vermeld je ervaring met de volledige HR-cyclus, verzuimbegeleiding, kennis van arbeidsrecht en de HR-systemen die je beheerst, zoals AFAS. Combineer dit met concrete resultaten zoals lager verzuim of betere retentie om je waarde te onderbouwen." },
      { q: "Hoe laat ik soft skills zien op mijn HR-CV?", a: "Vertaal soft skills naar situaties en resultaten. In plaats van enkel 'communicatief sterk' te schrijven, vermeld je dat je lastige verzuimgesprekken voerde of leidinggevenden coachte. Concrete voorbeelden maken je vaardigheden geloofwaardig." },
      { q: "Welke opleiding is gangbaar voor een HR Adviseur?", a: "Veel HR Adviseurs hebben een hbo-opleiding HRM of een verwante studie. Aanvullende certificeringen op het gebied van arbeidsrecht, verzuim of coaching zijn een sterke plus en mogen zeker op je CV." },
    ],
    doc: {
      version: 1,
      personalDetails: { firstName: "Sander", lastName: "Bakker", professionalTitle: "HR Adviseur", email: "sander.bakker@email.nl", phone: "06 23456789", city: "Eindhoven", linkedinUrl: "linkedin.com/in/sanderbakker", websiteUrl: "", photoUrl: "" },
      profileSummary: "Betrokken HR Adviseur met 7 jaar ervaring in advisering over de volledige HR-cyclus, verzuimbegeleiding en personeelsbeleid. Sterk in het coachen van leidinggevenden en het vertalen van wet- en regelgeving naar werkbaar beleid. Combineer een mensgerichte aanpak met resultaatgericht denken en ruime ervaring met AFAS en de Wet verbetering poortwachter.",
      workExperience: [
        { id: "we-1", jobTitle: "HR Adviseur", company: "TechBuild Groep", location: "Eindhoven", startDate: "apr 2021", endDate: "", isCurrent: true, bullets: ["Verlaagde het ziekteverzuim binnen twee jaar van 6,2% naar 4,1% door een proactief verzuimbeleid.", "Adviseerde 15 leidinggevenden over arbeidsrecht, functioneringstrajecten en de Wet verbetering poortwachter.", "Implementeerde een nieuwe AFAS-workflow waardoor administratieve handelingen met 30% afnamen.", "Begeleidde een reorganisatie van 40 medewerkers met aandacht voor zorgvuldige communicatie."] },
        { id: "we-2", jobTitle: "HR Medewerker", company: "ZorgPartners Brabant", location: "Tilburg", startDate: "feb 2018", endDate: "mrt 2021", isCurrent: false, bullets: ["Beheerde de personeelsadministratie en HR-cyclus voor 120 medewerkers in AFAS.", "Coordineerde wervings- en selectietrajecten en verkortte de gemiddelde doorlooptijd met 25%.", "Verzorgde de onboarding van nieuwe medewerkers en verbeterde de medewerkerstevredenheid hierover."] },
      ],
      education: [{ id: "edu-1", institution: "Fontys Hogescholen", degree: "Bachelor", fieldOfStudy: "Human Resource Management", location: "Eindhoven", startDate: "sep 2014", endDate: "jul 2018", isCurrent: false, description: "" }],
      skills: ["Verzuimbegeleiding", "AFAS", "Arbeidsrecht", "Werving en selectie", "Wet verbetering poortwachter", "Adviesvaardigheden", "Personeelsbeleid", "Gesprekstechnieken"],
      languages: [{ id: "lang-1", name: "Nederlands", level: "Moedertaal" }, { id: "lang-2", name: "Engels", level: "B2" }],
      certificates: [{ id: "cert-1", name: "Praktijkdiploma Arbeidsrecht", description: "Verdieping in cao-toepassing, ontslagrecht en arbeidsovereenkomsten." }],
      courses: [],
      interests: ["Coaching", "Wielrennen", "Psychologie"],
      references: [],
      customSections: [],
    },
  },
  {
    slug: "grafisch-ontwerper",
    profession: "Grafisch Ontwerper",
    category: "Creatief",
    template: "minimaal",
    metaTitle: "CV-voorbeeld Grafisch Ontwerper en template | CVmaken.nu",
    metaDescription:
      "CV-voorbeeld voor Grafisch Ontwerper met focus op portfolio, Adobe Creative Suite en concrete projecten. Inclusief tips om creatief en strak op te vallen.",
    intro:
      "Als Grafisch Ontwerper is je CV zelf een visitekaartje van je vormgevingskwaliteiten, dus strak en overzichtelijk is een must. Werkgevers en studio's kijken naar je portfolio, je beheersing van Adobe Creative Suite en je gevoel voor merk en concept. Dit voorbeeld laat zien hoe je creativiteit en professionaliteit in balans brengt op papier.",
    whatToInclude: [
      "Een duidelijke link naar je online portfolio bovenaan je CV",
      "Beheersing van Adobe Creative Suite: Photoshop, Illustrator en InDesign",
      "Ervaring met huisstijlen, branding en zowel print als digitaal ontwerp",
      "Concrete projecten met opdrachtgever, rol en resultaat",
      "Kennis van typografie, kleurtheorie en lay-out",
      "Aanvullende vaardigheden zoals Figma, motion of UX/UI-design",
    ],
    tips: [
      { title: "Zet je portfolio centraal", text: "Voor een ontwerper is het portfolio belangrijker dan de tekst. Plaats een opvallende, klikbare link bovenaan je CV en zorg dat je sterkste werk vooraan in je portfolio staat. Recruiters beslissen vaak op basis van je beste twee of drie stukken." },
      { title: "Houd het ontwerp van je CV strak", text: "Een minimaal en consistent CV laat je oog voor detail zien. Gebruik veel witruimte, een rustig kleurenpalet en maximaal twee lettertypen. Overdaad schaadt, ook bij creatieve functies." },
      { title: "Beschrijf je rol per project", text: "Vermeld niet alleen wat je maakte, maar ook jouw aandeel: concept, uitwerking of eindverantwoordelijkheid. Zo begrijpt de lezer welke ontwerpverantwoordelijkheid je echt aankunt." },
    ],
    keywords: ["cv grafisch ontwerper", "grafisch ontwerper voorbeeld", "graphic designer cv", "portfolio cv", "adobe cv", "vormgever cv", "creatief cv template", "designer sollicitatie"],
    faq: [
      { q: "Moet ik mijn portfolio toevoegen aan mijn CV?", a: "Absoluut. Voor een Grafisch Ontwerper is het portfolio het belangrijkste onderdeel. Plaats een duidelijke, klikbare link bovenaan je CV en zorg dat de site actueel is en je sterkste werk toont. Zonder portfolio mist je sollicitatie de kern." },
      { q: "Hoe creatief mag mijn CV als ontwerper zijn?", a: "Je CV mag je stijl uitstralen, maar leesbaarheid en overzicht gaan voor. Een strak, minimaal ontwerp met goede typografie laat je vakmanschap beter zien dan een druk geheel. Bewaar je creatieve experimenten voor je portfolio." },
      { q: "Welke software moet ik vermelden op mijn CV?", a: "Vermeld in elk geval Adobe Photoshop, Illustrator en InDesign, aangevuld met tools die relevant zijn voor de vacature, zoals Figma, After Effects of UX-tools. Geef per tool een eerlijk niveau aan zodat verwachtingen kloppen." },
    ],
    doc: {
      version: 1,
      personalDetails: { firstName: "Noa", lastName: "Jansen", professionalTitle: "Grafisch Ontwerper", email: "noa.jansen@email.nl", phone: "06 34567890", city: "Amsterdam", linkedinUrl: "linkedin.com/in/noajansen", websiteUrl: "noajansen.design", photoUrl: "" },
      profileSummary: "Creatieve Grafisch Ontwerper met 6 jaar ervaring in branding, huisstijlontwerp en visuele communicatie voor print en digitaal. Sterk in het vertalen van merkverhalen naar herkenbare ontwerpen, met een minimalistische en doordachte stijl. Beheers de volledige Adobe Creative Suite en werk graag van concept tot eindoplevering.",
      workExperience: [
        { id: "we-1", jobTitle: "Grafisch Ontwerper", company: "Studio Vorm", location: "Amsterdam", startDate: "jun 2021", endDate: "", isCurrent: true, bullets: ["Ontwierp huisstijlen voor 20+ opdrachtgevers, van concept tot complete merkrichtlijnen.", "Verzorgde de visuele rebranding van een retailketen, wat de merkherkenning meetbaar verhoogde.", "Werkte aan zowel print- als digitale uitingen in Photoshop, Illustrator en InDesign.", "Begeleidde een stagiair en bewaakte de creatieve kwaliteit binnen projecten."] },
        { id: "we-2", jobTitle: "Junior Grafisch Ontwerper", company: "Bureau Helder", location: "Haarlem", startDate: "aug 2018", endDate: "mei 2021", isCurrent: false, bullets: ["Ontwikkelde social media-content en advertentievisuals voor diverse klanten.", "Maakte drukwerk zoals brochures, flyers en verpakkingen drukklaar.", "Ondersteunde senior ontwerpers bij grotere brandingtrajecten."] },
      ],
      education: [{ id: "edu-1", institution: "Willem de Kooning Academie", degree: "Bachelor", fieldOfStudy: "Grafisch Ontwerp", location: "Rotterdam", startDate: "sep 2014", endDate: "jul 2018", isCurrent: false, description: "" }],
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Branding en huisstijl", "Typografie", "Figma", "Print- en drukwerk", "Concept en lay-out"],
      languages: [{ id: "lang-1", name: "Nederlands", level: "Moedertaal" }, { id: "lang-2", name: "Engels", level: "C1" }],
      certificates: [{ id: "cert-1", name: "Adobe Certified Professional: Visual Design", description: "Officiele certificering in visueel ontwerp met Adobe-software." }],
      courses: [],
      interests: ["Fotografie", "Typografie", "Moderne kunst"],
      references: [],
      customSections: [],
    },
  },
  {
    slug: "logistiek-medewerker",
    profession: "Logistiek Medewerker",
    category: "Logistiek",
    template: "minimaal",
    metaTitle: "CV-voorbeeld Logistiek Medewerker en template | CVmaken.nu",
    metaDescription:
      "CV-voorbeeld voor Logistiek Medewerker met VCA, heftruckcertificaat en WMS-ervaring. Concrete resultaten en tips om snel uitgenodigd te worden voor een gesprek.",
    intro:
      "Als Logistiek Medewerker draait alles om nauwkeurigheid, snelheid en betrouwbaarheid, en dat mag je CV uitstralen. Werkgevers letten op je certificaten zoals VCA en heftruck, je ervaring met WMS-systemen en je inzetbaarheid. Dit voorbeeld helpt je om je praktische ervaring en betrouwbaarheid helder en overzichtelijk te presenteren.",
    whatToInclude: [
      "Relevante certificaten zoals VCA, heftruck- en reachtruckcertificaat",
      "Ervaring met WMS-systemen en scanapparatuur",
      "Concrete resultaten, zoals orderpicksnelheid of foutreductie",
      "Kennis van magazijnprocessen: ontvangst, opslag, picking en verzending",
      "Inzetbaarheid in ploegendienst en fysieke belastbaarheid",
      "Soft skills als nauwkeurigheid, teamwork en flexibiliteit",
    ],
    tips: [
      { title: "Zet je certificaten bovenaan", text: "Voor logistieke functies zijn certificaten vaak een harde eis. Vermeld je VCA, heftruck- en reachtruckcertificaat duidelijk en goed zichtbaar, zodat de werkgever in een oogopslag ziet dat je inzetbaar bent." },
      { title: "Maak je betrouwbaarheid concreet", text: "Werkgevers zoeken betrouwbare krachten. Vermeld bijvoorbeeld een hoge orderpicknauwkeurigheid, lage foutmarge of dat je flexibel inzetbaar bent in ploegendiensten. Concrete cijfers vallen direct op." },
      { title: "Benoem je systeemervaring", text: "Ervaring met een WMS of scansysteem maakt je waardevoller en bespaart inwerktijd. Noem de systemen waarmee je werkte, zoals SAP of een ander WMS, zodat je voorsprong meteen duidelijk is." },
    ],
    keywords: ["cv logistiek medewerker", "logistiek medewerker voorbeeld", "magazijnmedewerker cv", "vca cv", "heftruck cv", "wms cv", "logistiek cv template", "orderpicker sollicitatie"],
    faq: [
      { q: "Welke certificaten zet ik op mijn CV als logistiek medewerker?", a: "Vermeld in elk geval je VCA, heftruckcertificaat en eventueel reachtruck- of EPT-certificaat. Deze zijn vaak een harde eis in vacatures. Zet ze duidelijk zichtbaar in een aparte rubriek zodat de werkgever je inzetbaarheid direct ziet." },
      { q: "Heb ik veel werkervaring nodig voor een logistieke functie?", a: "Niet altijd. Veel werkgevers waarderen betrouwbaarheid, flexibiliteit en de juiste certificaten net zo zwaar als jarenlange ervaring. Heb je weinig ervaring, benadruk dan je leergierigheid, fysieke inzet en bereidheid tot ploegendienst." },
      { q: "Hoe laat ik zien dat ik nauwkeurig werk?", a: "Vertaal nauwkeurigheid naar concrete cijfers, zoals een hoge orderpicknauwkeurigheid of een lage foutmarge. Vermeld ook ervaring met scanapparatuur en WMS, want dat onderstreept dat je gestructureerd en foutloos werkt." },
    ],
    doc: {
      version: 1,
      personalDetails: { firstName: "Tom", lastName: "Visser", professionalTitle: "Logistiek Medewerker", email: "tom.visser@email.nl", phone: "06 45678901", city: "Tilburg", linkedinUrl: "linkedin.com/in/tomvisser", websiteUrl: "", photoUrl: "" },
      profileSummary: "Betrouwbare en flexibele Logistiek Medewerker met 5 jaar ervaring in magazijn- en distributieomgevingen. Ervaren in orderpicking, voorraadbeheer en het werken met WMS-systemen en scanapparatuur. In het bezit van VCA en heftruck- en reachtruckcertificaat, inzetbaar in ploegendienst en gericht op nauwkeurig en efficient werken.",
      workExperience: [
        { id: "we-1", jobTitle: "Logistiek Medewerker", company: "DistriHub Nederland", location: "Tilburg", startDate: "feb 2022", endDate: "", isCurrent: true, bullets: ["Picte gemiddeld 180 orders per dienst met een nauwkeurigheid van 99,6%.", "Bediende heftruck en reachtruck voor het verplaatsen en stapelen van pallets.", "Werkte dagelijks met een WMS en scanapparatuur voor voorraadregistratie.", "Droeg bij aan een snellere ontvangstverwerking waardoor wachttijden voor vrachtwagens daalden."] },
        { id: "we-2", jobTitle: "Magazijnmedewerker", company: "Logimax BV", location: "Waalwijk", startDate: "mrt 2019", endDate: "jan 2022", isCurrent: false, bullets: ["Verzorgde ontvangst, opslag en verzending van goederen volgens magazijnprocedures.", "Hielp het aantal pickfouten te verlagen door consequent te scannen en te controleren.", "Werkte in wisselende ploegendiensten en sprong flexibel bij waar nodig."] },
      ],
      education: [{ id: "edu-1", institution: "ROC Tilburg", degree: "Mbo niveau 2", fieldOfStudy: "Logistiek Medewerker", location: "Tilburg", startDate: "sep 2016", endDate: "jul 2018", isCurrent: false, description: "" }],
      skills: ["Orderpicking", "Heftruck en reachtruck", "WMS-systemen", "Scanapparatuur", "Voorraadbeheer", "VCA", "Nauwkeurig werken", "Ploegendienst"],
      languages: [{ id: "lang-1", name: "Nederlands", level: "Moedertaal" }, { id: "lang-2", name: "Engels", level: "A2" }],
      certificates: [{ id: "cert-1", name: "VCA Basis", description: "Certificaat veiligheid, gezondheid en milieu voor operationeel personeel." }, { id: "cert-2", name: "Heftruck- en reachtruckcertificaat", description: "Bevoegdheid voor het veilig bedienen van heftruck en reachtruck." }],
      courses: [],
      interests: ["Voetbal", "Sleutelen aan auto's", "Fitness"],
      references: [],
      customSections: [],
    },
  },
];

export function getAllExamples(): CvExample[] {
  return CV_EXAMPLES;
}

export function getExampleBySlug(slug: string): CvExample | undefined {
  return CV_EXAMPLES.find((e) => e.slug === slug);
}

export function getRelatedExamples(slug: string, limit = 3): CvExample[] {
  const current = getExampleBySlug(slug);
  if (!current) return CV_EXAMPLES.slice(0, limit);
  const sameCat = CV_EXAMPLES.filter((e) => e.slug !== slug && e.category === current.category);
  const others = CV_EXAMPLES.filter((e) => e.slug !== slug && e.category !== current.category);
  return [...sameCat, ...others].slice(0, limit);
}
