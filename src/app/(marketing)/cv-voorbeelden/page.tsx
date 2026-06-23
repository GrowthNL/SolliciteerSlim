import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  BookOpen,
  Briefcase,
  Code2,
  Coffee,
  GraduationCap,
  HardHat,
  Heart,
  Home,
  MessageSquare,
  Package,
  Palette,
  Pencil,
  PieChart,
  Scale,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CV-voorbeelden per beroep — 24 beroepen",
  description:
    "Bekijk cv-voorbeelden voor 24 beroepen: van software engineer tot verpleegkundige. Gebruik ze als inspiratie en maak jouw eigen cv in SolliciteerSlim.",
};

const professions = [
  {
    icon: Code2,
    title: "Software Engineer",
    sector: "Tech",
    sections: ["Profiel", "Werkervaring", "Projecten", "Vaardigheden", "Opleiding"],
    tip: "Zet vaardigheden en programmeertalen hoog — recruiters scannen hier als eerste op.",
  },
  {
    icon: BarChart2,
    title: "Marketing Manager",
    sector: "Marketing",
    sections: ["Profiel", "Werkervaring", "Vaardigheden", "Certificaten", "Opleiding"],
    tip: "Kwantificeer alles: '€200k budget beheerd', 'CTR verhoogd met 40%'.",
  },
  {
    icon: Heart,
    title: "Verpleegkundige",
    sector: "Zorg",
    sections: ["Profiel", "Werkervaring", "Opleiding", "Certificaten", "Talen"],
    tip: "Vermeld je BIG-registratienummer en relevante bijscholingen prominent.",
  },
  {
    icon: BookOpen,
    title: "Leraar",
    sector: "Onderwijs",
    sections: ["Profiel", "Werkervaring", "Opleiding", "Bevoegdheden", "Interesses"],
    tip: "Vermeld je lesbevoegdheid per vak en de onderwijsniveaus (vmbo, havo, vwo).",
  },
  {
    icon: Briefcase,
    title: "Accountant",
    sector: "Finance",
    sections: ["Profiel", "Werkervaring", "Opleiding", "Vaardigheden", "Lidmaatschappen"],
    tip: "Noem de fiscale en boekhoudpakketten die je beheerst (SAP, Exact, Twinfield).",
  },
  {
    icon: Users,
    title: "Projectmanager",
    sector: "Consultancy",
    sections: ["Profiel", "Werkervaring", "Certificaten", "Vaardigheden", "Opleiding"],
    tip: "Noem je PRINCE2/PMP-certificering en geef projectomvang (budget, teamgrootte).",
  },
  {
    icon: Pencil,
    title: "Grafisch Designer",
    sector: "Creatief",
    sections: ["Profiel", "Werkervaring", "Vaardigheden", "Portfolio", "Opleiding"],
    tip: "Link naar je online portfolio. Houd het cv clean — laat het werk spreken.",
  },
  {
    icon: Package,
    title: "Logistiek Medewerker",
    sector: "Logistiek",
    sections: ["Profiel", "Werkervaring", "Vaardigheden", "Certificaten", "Opleiding"],
    tip: "Vermeld certificaten (VCA, heftruckcertificaat) en WMS-systemen bovenaan.",
  },
  {
    icon: Stethoscope,
    title: "Doktersassistente",
    sector: "Zorg",
    sections: ["Profiel", "Werkervaring", "Opleiding", "BIG-registratie", "Vaardigheden"],
    tip: "Vermeld je BIG-registratie en noem specifieke taken zoals triageren en assisteren bij kleine ingrepen — dat onderscheidt je direct van andere kandidaten.",
  },
  {
    icon: Users,
    title: "HR Manager",
    sector: "HR",
    sections: ["Profiel", "Werkervaring", "Opleiding", "Vaardigheden", "Certificaten"],
    tip: "Benoem HR-systemen (AFAS, Workday, SAP SuccessFactors) en laat zien hoe jouw beleid heeft bijgedragen aan lagere verzuimcijfers of hogere medewerkerstevredenheid.",
  },
  {
    icon: PieChart,
    title: "Data Analist",
    sector: "Tech",
    sections: ["Profiel", "Werkervaring", "Projecten", "Vaardigheden", "Opleiding"],
    tip: "Noem concrete tools (Python, SQL, Power BI, Tableau) en beschrijf een project met een meetbaar bedrijfsresultaat — recruiters kijken direct naar impact, niet alleen naar technieken.",
  },
  {
    icon: Briefcase,
    title: "Financieel Controller",
    sector: "Finance",
    sections: ["Profiel", "Werkervaring", "Opleiding", "Vaardigheden", "Lidmaatschappen"],
    tip: "Kwantificeer de omvang van je rapportages (jaarrekening voor €50M omzet) en vermeld lidmaatschap van het NBA of NIVRA — dat wekt direct vertrouwen bij de hiring manager.",
  },
  {
    icon: Scale,
    title: "Juridisch Medewerker",
    sector: "Juridisch",
    sections: ["Profiel", "Werkervaring", "Opleiding", "Publicaties", "Talen"],
    tip: "Specificeer je rechtsgebied (arbeidsrecht, vastgoed, strafrecht) en noem eventuele publicaties of stages bij rechtbanken — generalisten vallen minder op dan specialisten.",
  },
  {
    icon: TrendingUp,
    title: "Salesmanager",
    sector: "Sales",
    sections: ["Profiel", "Werkervaring", "Vaardigheden", "Resultaten", "Opleiding"],
    tip: "Resultaten zijn alles: vermeld quota's, omzetgroei en het aantal klanten in je portfolio. Een getal zegt meer dan een pagina tekst in sales-cv's.",
  },
  {
    icon: Palette,
    title: "UX Designer",
    sector: "Creatief",
    sections: ["Profiel", "Werkervaring", "Portfolio", "Vaardigheden", "Opleiding"],
    tip: "Voeg een portfoliolink toe direct naast je naam — zonder portfolio wordt een UX cv zelden serieus genomen. Beschrijf je ontwerpproces, niet alleen het eindresultaat.",
  },
  {
    icon: Heart,
    title: "Sociaal Werker",
    sector: "Zorg",
    sections: ["Profiel", "Werkervaring", "Opleiding", "Certificaten", "Vrijwilligerswerk"],
    tip: "Benoem de doelgroepen waarmee je hebt gewerkt (jeugd, ouderen, daklozen) en vermeld agressietraining of SKJ-registratie als je die hebt — werkgevers in de zorg hechten hier veel waarde aan.",
  },
  {
    icon: MessageSquare,
    title: "Communicatieadviseur",
    sector: "Communicatie",
    sections: ["Profiel", "Werkervaring", "Vaardigheden", "Publicaties", "Opleiding"],
    tip: "Link naar persberichten, campagnes of artikelen die je hebt gemaakt. Concreet bewijs van je schrijf- en strategisch vermogen overtuigt meer dan zelfomschrijvingen.",
  },
  {
    icon: HardHat,
    title: "Bouwkundig Ingenieur",
    sector: "Techniek",
    sections: ["Profiel", "Werkervaring", "Projecten", "Certificaten", "Opleiding"],
    tip: "Omschrijf projecten met m², budget en opdrachtgever. Vermeld BIM-software (Revit, AutoCAD) en VCA-certificering — dat zijn standaard vereisten bij grote aannemers.",
  },
  {
    icon: Home,
    title: "Vastgoedmakelaar",
    sector: "Vastgoed",
    sections: ["Profiel", "Werkervaring", "Resultaten", "Certificaten", "Opleiding"],
    tip: "Noem het aantal transacties en totale verkoopvolume dat je hebt begeleid. VastgoedCert of NVM-lidmaatschap zijn voor werkgevers absolute must-haves.",
  },
  {
    icon: Coffee,
    title: "Hotelmanager",
    sector: "Horeca",
    sections: ["Profiel", "Werkervaring", "Talen", "Vaardigheden", "Opleiding"],
    tip: "Vermeld talen met niveau (C1, B2) en het type accommodatie (boutique, 4-sterren keten, resort) — gastvrije sectoren kijken als eerste naar communicatie en flexibiliteit.",
  },
  {
    icon: Truck,
    title: "Supply Chain Manager",
    sector: "Logistiek",
    sections: ["Profiel", "Werkervaring", "Vaardigheden", "Certificaten", "Opleiding"],
    tip: "Beschrijf supply chain-verbeteringen met cijfers: 'doorlooptijd verkort met 15%', 'kosten verlaagd met €300k'. APICS CSCP-certificering versterkt je profiel aanzienlijk.",
  },
  {
    icon: GraduationCap,
    title: "Onderwijsassistent",
    sector: "Onderwijs",
    sections: ["Profiel", "Werkervaring", "Opleiding", "Bevoegdheden", "Interesses"],
    tip: "Vermeld de leeftijdsgroepen waarmee je hebt gewerkt en eventuele ervaring met zorgleerlingen of NT2. Scholen zoeken aantoonbare affiniteit met kinderen én teamwork.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Analist",
    sector: "Tech",
    sections: ["Profiel", "Werkervaring", "Certificaten", "Vaardigheden", "Opleiding"],
    tip: "Certificeringen zijn cruciaal: vermeld CEH, OSCP, CompTIA Security+ of ISO 27001 direct bovenaan. Beschrijf concrete incidentresponsen of penetratietests zonder vertrouwelijke details.",
  },
  {
    icon: GraduationCap,
    title: "Starter / Geen ervaring",
    sector: "Algemeen",
    sections: ["Profiel", "Opleiding", "Stage", "Vaardigheden", "Vrijwilligerswerk"],
    tip: "Zet je stageplaatsen en bijbanen bovenaan werkervaring en omschrijf wat je geleerd hebt. Recruiters weten dat je net begint — durf te laten zien wat je wil en kunt leren.",
  },
];

const sectors = [
  { label: "Alle beroepen", active: true },
  { label: "Tech", active: false },
  { label: "Zorg", active: false },
  { label: "Finance", active: false },
  { label: "Marketing", active: false },
  { label: "Onderwijs", active: false },
  { label: "Creatief", active: false },
  { label: "Logistiek", active: false },
];

export default function CvVoorbeeldenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E5E3DA] py-20 sm:py-28">
        <div className="container-shell text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
            <span className="size-2 rounded-full bg-[#FB5B36]" />
            24 beroepen — direct te gebruiken
          </div>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.04em] text-[#111113] sm:text-5xl">
            Het juiste cv voor{" "}
            <span className="rounded-[4px] bg-[#C6F24E] px-[0.1em]">jouw beroep</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#56564F]">
            Elke functie heeft andere accenten. Bekijk wat recruiters in jouw vakgebied verwachten en
            gebruik onze voorbeelden als startpunt voor je eigen cv.
          </p>
          <Link
            href="/registreren"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#111113] px-6 py-3 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C]"
          >
            Maak mijn cv <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Grid section */}
      <section className="py-20 sm:py-24">
        <div className="container-shell">

          {/* Editorial note */}
          <div className="mx-auto mb-12 max-w-2xl rounded-2xl border border-[#E5E3DA] bg-[#F2F1EC] px-6 py-5">
            <p className="text-sm font-bold text-[#111113]">
              Zijn voorbeelden slim als startpunt?
            </p>
            <p className="mt-2 text-sm leading-6 text-[#56564F]">
              Ja — en dat is geen toeval. Zien hoe een sterk cv eruitziet in jouw vakgebied geeft
              direct houvast: je weet welke secties recruiters verwachten, welke toon werkt en waar
              je je kunt onderscheiden. Dat scheelt je uren zoeken en gokken. Kies hieronder het
              voorbeeld dat het dichtst bij jouw situatie ligt en gebruik het als basis.
            </p>
          </div>

          {/* Sector filter pills (visual only) */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {sectors.map(({ label, active }) => (
                <span
                  key={label}
                  className={
                    active
                      ? "cursor-default rounded-full bg-[#C6F24E] px-4 py-1.5 text-xs font-bold text-[#111113]"
                      : "cursor-default rounded-full border border-[#E5E3DA] bg-white px-4 py-1.5 text-xs font-medium text-[#56564F]"
                  }
                >
                  {label}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-[#9A9A92]">
              Kies je template en gebruik dit voorbeeld als basis voor jouw eigen cv.
            </p>
          </div>

          {/* Profession cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {professions.map(({ icon: Icon, title, sector, sections, tip }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-[#E5E3DA] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#111113]/5"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#EDF7C6] text-[#111113]">
                  <Icon className="size-5" />
                </span>
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-[#F2F1EC] px-2.5 py-0.5 text-[10px] font-semibold text-[#56564F]">
                    {sector}
                  </span>
                  <div className="mt-2 text-lg font-black text-[#111113]">{title}</div>
                </div>
                <div className="mt-4 flex-1">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#9A9A92]">
                    Secties in dit cv
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {sections.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E5E3DA] px-2.5 py-0.5 text-xs font-medium text-[#56564F]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 rounded-xl border-l-2 border-[#FB5B36] bg-[#FFE3DA] px-3 py-2.5">
                  <p className="text-xs font-bold text-[#111113]">Recruiter-tip</p>
                  <p className="mt-1 text-xs leading-5 text-[#56564F]">{tip}</p>
                </div>
                <Link
                  href="/registreren"
                  className="mt-4 flex items-center justify-center gap-1.5 rounded-lg border border-[#E5E3DA] px-4 py-2 text-xs font-bold text-[#111113] transition-all hover:bg-[#111113] hover:text-[#F2F1EC]"
                >
                  Gebruik als basis <ArrowRight className="size-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three rules dark section */}
      <section className="bg-[#111113] py-20 sm:py-24">
        <div className="container-shell max-w-4xl text-center">
          <p className="font-mono-label text-xs text-[#9A9A92]">
            <span className="font-bold text-[#C6F24E]">Recruiter-inzichten</span> — Wat elke recruiter wil zien
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#F2F1EC]">
            De drie regels van een sterk cv
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                num: "01",
                title: "Maximaal 2 pagina's",
                desc: "Meer dan 2 pagina's wordt zelden volledig gelezen. Wees selectief en to the point.",
              },
              {
                num: "02",
                title: "Concrete resultaten",
                desc: "Niet 'verantwoordelijk voor marketing', maar 'omzet verhoogd met 23% via gerichte campagne'.",
              },
              {
                num: "03",
                title: "Afgestemd op de vacature",
                desc: "Een generiek cv verliest het van een specifiek cv. Pas taal en prioriteiten aan per functie.",
              },
            ].map(({ num, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[.04] p-6 text-left">
                <span className="font-mono-label text-2xl font-black text-[#C6F24E]">{num}</span>
                <p className="mt-3 font-bold text-[#F2F1EC]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[#9A9A92]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="px-4 py-20">
        <div className="container-shell overflow-hidden rounded-3xl bg-[#111113] px-6 py-16 sm:px-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-black tracking-[-0.04em] text-[#F2F1EC] sm:text-4xl">
              Klaar om je eigen cv te maken?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#9A9A92]">
              Kies je beroep, volg de stappen en download je cv als PDF. Gratis, zonder creditcard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/registreren"
                className="inline-flex items-center gap-2 rounded-lg bg-[#C6F24E] px-7 py-3.5 text-[15px] font-black text-[#111113] transition-colors hover:bg-[#DCF58A]"
              >
                Start gratis <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/cv-templates"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-7 py-3.5 text-[15px] font-semibold text-[#F2F1EC] transition-colors hover:bg-white/5"
              >
                Bekijk templates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
