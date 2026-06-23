"use client";

import { useMemo, useState } from "react";
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
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/magic/reveal";

type Profession = {
  icon: LucideIcon;
  title: string;
  sector: string;
  sections: string[];
  tip: string;
};

const professions: Profession[] = [
  { icon: Code2, title: "Software Engineer", sector: "Tech", sections: ["Profiel", "Werkervaring", "Projecten", "Vaardigheden", "Opleiding"], tip: "Zet vaardigheden en programmeertalen hoog, recruiters scannen hier als eerste op." },
  { icon: BarChart2, title: "Marketing Manager", sector: "Marketing", sections: ["Profiel", "Werkervaring", "Vaardigheden", "Certificaten", "Opleiding"], tip: "Kwantificeer alles: '€200k budget beheerd', 'CTR verhoogd met 40%'." },
  { icon: Heart, title: "Verpleegkundige", sector: "Zorg", sections: ["Profiel", "Werkervaring", "Opleiding", "Certificaten", "Talen"], tip: "Vermeld je BIG-registratienummer en relevante bijscholingen prominent." },
  { icon: BookOpen, title: "Leraar", sector: "Onderwijs", sections: ["Profiel", "Werkervaring", "Opleiding", "Bevoegdheden", "Interesses"], tip: "Vermeld je lesbevoegdheid per vak en de onderwijsniveaus (vmbo, havo, vwo)." },
  { icon: Briefcase, title: "Accountant", sector: "Finance", sections: ["Profiel", "Werkervaring", "Opleiding", "Vaardigheden", "Lidmaatschappen"], tip: "Noem de fiscale en boekhoudpakketten die je beheerst (SAP, Exact, Twinfield)." },
  { icon: Users, title: "Projectmanager", sector: "Consultancy", sections: ["Profiel", "Werkervaring", "Certificaten", "Vaardigheden", "Opleiding"], tip: "Noem je PRINCE2/PMP-certificering en geef projectomvang (budget, teamgrootte)." },
  { icon: Pencil, title: "Grafisch Designer", sector: "Creatief", sections: ["Profiel", "Werkervaring", "Vaardigheden", "Portfolio", "Opleiding"], tip: "Link naar je online portfolio. Houd het cv clean, laat het werk spreken." },
  { icon: Package, title: "Logistiek Medewerker", sector: "Logistiek", sections: ["Profiel", "Werkervaring", "Vaardigheden", "Certificaten", "Opleiding"], tip: "Vermeld certificaten (VCA, heftruckcertificaat) en WMS-systemen bovenaan." },
  { icon: Stethoscope, title: "Doktersassistente", sector: "Zorg", sections: ["Profiel", "Werkervaring", "Opleiding", "BIG-registratie", "Vaardigheden"], tip: "Vermeld je BIG-registratie en noem specifieke taken zoals triageren en assisteren bij kleine ingrepen, dat onderscheidt je direct van andere kandidaten." },
  { icon: Users, title: "HR Manager", sector: "HR", sections: ["Profiel", "Werkervaring", "Opleiding", "Vaardigheden", "Certificaten"], tip: "Benoem HR-systemen (AFAS, Workday, SAP SuccessFactors) en laat zien hoe jouw beleid heeft bijgedragen aan lagere verzuimcijfers of hogere medewerkerstevredenheid." },
  { icon: PieChart, title: "Data Analist", sector: "Tech", sections: ["Profiel", "Werkervaring", "Projecten", "Vaardigheden", "Opleiding"], tip: "Noem concrete tools (Python, SQL, Power BI, Tableau) en beschrijf een project met een meetbaar bedrijfsresultaat, recruiters kijken direct naar impact, niet alleen naar technieken." },
  { icon: Briefcase, title: "Financieel Controller", sector: "Finance", sections: ["Profiel", "Werkervaring", "Opleiding", "Vaardigheden", "Lidmaatschappen"], tip: "Kwantificeer de omvang van je rapportages (jaarrekening voor €50M omzet) en vermeld lidmaatschap van het NBA of NIVRA, dat wekt direct vertrouwen bij de hiring manager." },
  { icon: Scale, title: "Juridisch Medewerker", sector: "Juridisch", sections: ["Profiel", "Werkervaring", "Opleiding", "Publicaties", "Talen"], tip: "Specificeer je rechtsgebied (arbeidsrecht, vastgoed, strafrecht) en noem eventuele publicaties of stages bij rechtbanken, generalisten vallen minder op dan specialisten." },
  { icon: TrendingUp, title: "Salesmanager", sector: "Sales", sections: ["Profiel", "Werkervaring", "Vaardigheden", "Resultaten", "Opleiding"], tip: "Resultaten zijn alles: vermeld quota's, omzetgroei en het aantal klanten in je portfolio. Een getal zegt meer dan een pagina tekst in sales-cv's." },
  { icon: Palette, title: "UX Designer", sector: "Creatief", sections: ["Profiel", "Werkervaring", "Portfolio", "Vaardigheden", "Opleiding"], tip: "Voeg een portfoliolink toe direct naast je naam, zonder portfolio wordt een UX cv zelden serieus genomen. Beschrijf je ontwerpproces, niet alleen het eindresultaat." },
  { icon: Heart, title: "Sociaal Werker", sector: "Zorg", sections: ["Profiel", "Werkervaring", "Opleiding", "Certificaten", "Vrijwilligerswerk"], tip: "Benoem de doelgroepen waarmee je hebt gewerkt (jeugd, ouderen, daklozen) en vermeld agressietraining of SKJ-registratie als je die hebt, werkgevers in de zorg hechten hier veel waarde aan." },
  { icon: MessageSquare, title: "Communicatieadviseur", sector: "Communicatie", sections: ["Profiel", "Werkervaring", "Vaardigheden", "Publicaties", "Opleiding"], tip: "Link naar persberichten, campagnes of artikelen die je hebt gemaakt. Concreet bewijs van je schrijf- en strategisch vermogen overtuigt meer dan zelfomschrijvingen." },
  { icon: HardHat, title: "Bouwkundig Ingenieur", sector: "Techniek", sections: ["Profiel", "Werkervaring", "Projecten", "Certificaten", "Opleiding"], tip: "Omschrijf projecten met m², budget en opdrachtgever. Vermeld BIM-software (Revit, AutoCAD) en VCA-certificering, dat zijn standaard vereisten bij grote aannemers." },
  { icon: Home, title: "Vastgoedmakelaar", sector: "Vastgoed", sections: ["Profiel", "Werkervaring", "Resultaten", "Certificaten", "Opleiding"], tip: "Noem het aantal transacties en totale verkoopvolume dat je hebt begeleid. VastgoedCert of NVM-lidmaatschap zijn voor werkgevers absolute must-haves." },
  { icon: Coffee, title: "Hotelmanager", sector: "Horeca", sections: ["Profiel", "Werkervaring", "Talen", "Vaardigheden", "Opleiding"], tip: "Vermeld talen met niveau (C1, B2) en het type accommodatie (boutique, 4-sterren keten, resort), gastvrije sectoren kijken als eerste naar communicatie en flexibiliteit." },
  { icon: Truck, title: "Supply Chain Manager", sector: "Logistiek", sections: ["Profiel", "Werkervaring", "Vaardigheden", "Certificaten", "Opleiding"], tip: "Beschrijf supply chain-verbeteringen met cijfers: 'doorlooptijd verkort met 15%', 'kosten verlaagd met €300k'. APICS CSCP-certificering versterkt je profiel aanzienlijk." },
  { icon: GraduationCap, title: "Onderwijsassistent", sector: "Onderwijs", sections: ["Profiel", "Werkervaring", "Opleiding", "Bevoegdheden", "Interesses"], tip: "Vermeld de leeftijdsgroepen waarmee je hebt gewerkt en eventuele ervaring met zorgleerlingen of NT2. Scholen zoeken aantoonbare affiniteit met kinderen én teamwork." },
  { icon: ShieldCheck, title: "Cybersecurity Analist", sector: "Tech", sections: ["Profiel", "Werkervaring", "Certificaten", "Vaardigheden", "Opleiding"], tip: "Certificeringen zijn cruciaal: vermeld CEH, OSCP, CompTIA Security+ of ISO 27001 direct bovenaan. Beschrijf concrete incidentresponsen of penetratietests zonder vertrouwelijke details." },
  { icon: GraduationCap, title: "Starter / Geen ervaring", sector: "Algemeen", sections: ["Profiel", "Opleiding", "Stage", "Vaardigheden", "Vrijwilligerswerk"], tip: "Zet je stageplaatsen en bijbanen bovenaan werkervaring en omschrijf wat je geleerd hebt. Recruiters weten dat je net begint, durf te laten zien wat je wil en kunt leren." },
];

// Filter buckets mapped to the real sector values so every filter returns results.
const filters: { label: string; sectors: string[] | null }[] = [
  { label: "Alle beroepen", sectors: null },
  { label: "Tech & Data", sectors: ["Tech"] },
  { label: "Zorg & Welzijn", sectors: ["Zorg"] },
  { label: "Finance", sectors: ["Finance"] },
  { label: "Marketing & Communicatie", sectors: ["Marketing", "Communicatie"] },
  { label: "Sales", sectors: ["Sales"] },
  { label: "Creatief & Design", sectors: ["Creatief"] },
  { label: "Onderwijs", sectors: ["Onderwijs"] },
  { label: "Logistiek", sectors: ["Logistiek"] },
  { label: "Techniek & Bouw", sectors: ["Techniek"] },
  { label: "Juridisch", sectors: ["Juridisch"] },
  { label: "Overig", sectors: ["Consultancy", "HR", "Vastgoed", "Horeca", "Algemeen"] },
];

export function CvExamplesGrid() {
  const [active, setActive] = useState("Alle beroepen");

  const visible = useMemo(() => {
    const filter = filters.find((f) => f.label === active);
    if (!filter || !filter.sectors) return professions;
    return professions.filter((p) => filter.sectors!.includes(p.sector));
  }, [active]);

  return (
    <>
      {/* Sector filter pills (functional) */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {filters.map(({ label }) => {
            const isActive = label === active;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActive(label)}
                aria-pressed={isActive}
                className={
                  isActive
                    ? "rounded-full bg-[#C6F24E] px-4 py-1.5 text-xs font-bold text-[#111113] transition-colors"
                    : "rounded-full border border-[#E5E3DA] bg-white px-4 py-1.5 text-xs font-medium text-[#56564F] transition-colors hover:border-[#111113] hover:text-[#111113]"
                }
              >
                {label}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-[#9A9A92]">
          {active === "Alle beroepen"
            ? "Kies je template en gebruik dit voorbeeld als basis voor jouw eigen cv."
            : `${visible.length} ${visible.length === 1 ? "beroep" : "beroepen"} in deze categorie.`}
        </p>
      </div>

      {/* Profession cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map(({ icon: Icon, title, sector, sections, tip }, i) => (
          <Reveal key={title} delay={(i % 4) * 70} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-[#E5E3DA] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#111113]/5">
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
          </Reveal>
        ))}
      </div>
    </>
  );
}
