import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Bot,
  FileSearch,
  BarChart3,
  Type,
  Table2,
  Tag,
  FileDown,
  Minus,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ATS-check: zorg dat jouw cv wordt gelezen | CVmaken.nu",
  description:
    "Leer hoe ATS-systemen werken, waarom 75% van de cv's nooit een recruiter bereikt, en hoe je jouw cv ATS-proof maakt met CVmaken.nu.",
};

const atsReasons = [
  {
    icon: Tag,
    title: "Ontbrekende zoekwoorden",
    description:
      "ATS-systemen zoeken naar exacte termen uit de vacature. Als jij 'projectleider' schrijft maar de vacature vraagt om een 'projectmanager', wordt je cv niet gematcht.",
  },
  {
    icon: Table2,
    title: "Tabellen en kolommen",
    description:
      "Veel cv's gebruiken tabellen om informatie netjes naast elkaar te zetten. Helaas lezen ATS-systemen dit als één lange rij tekst zonder logische volgorde.",
  },
  {
    icon: FileSearch,
    title: "Afbeeldingen en iconen",
    description:
      "Vaardigheidsniveaus weergegeven als bolletjes of sterren? Een ATS ziet dit niet. Gebruik altijd gewone tekst voor informatie die de recruiter moet zien.",
  },
  {
    icon: Type,
    title: "Ongewone lettertypen en opmaak",
    description:
      "Decoratieve lettertypes of creatieve layouts kunnen de parsering verstoren. Een ATS verwacht een logische, lineaire tekststroom.",
  },
];

const atsTips = [
  {
    icon: Tag,
    tip: "Gebruik standaard sectiekoppen",
    explanation:
      "Schrijf 'Werkervaring', 'Opleiding' en 'Vaardigheden' — geen creatieve varianten als 'Mijn parcours' of 'Skills & meer'. ATS-systemen herkennen de standaardtermen.",
  },
  {
    icon: Table2,
    tip: "Vermijd tabellen en grafieken",
    explanation:
      "Gebruik geen meerkolomsindelingen, tabelcellen of visuele vaardigheidsbalken. Zet alle informatie in een eenvoudige, lineaire tekststructuur.",
  },
  {
    icon: Tag,
    tip: "Gebruik exact de zoekwoorden uit de vacature",
    explanation:
      "Kopieer de exacte functietitel en vaktermen uit de vacature. Als de vacature vraagt om 'data-analyse', gebruik dan niet 'dataverwerking'. Beide betekenen hetzelfde, maar de ATS matcht alleen de exacte term.",
  },
  {
    icon: FileDown,
    tip: "Sla op als PDF of Word",
    explanation:
      "Sla je cv altijd op als PDF (bij voorkeur) of Word. Vermijd .pages, .odt of andere formaten. Niet elke ATS kan deze bestanden inlezen.",
  },
  {
    icon: Type,
    tip: "Gebruik een standaard lettertype",
    explanation:
      "Kies voor Arial, Calibri, Garamond of een vergelijkbaar standaard lettertype. Vreemde lettertypes kunnen er voor zorgen dat tekens onleesbaar worden voor een ATS.",
  },
  {
    icon: Minus,
    tip: "Vermijd headers en footers",
    explanation:
      "Contactgegevens in de header van een Word-document worden door veel ATS-systemen genegeerd of dubbel ingelezen. Zet je naam en contactinfo gewoon in de body van het document.",
  },
];

export default function AtsCheckPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E5E3DA] bg-[#F8F8F6] py-20 sm:py-28">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_.75fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">ATS-check</div>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">
              Wordt jouw cv gefilterd{" "}
              <span className="text-[#111113]">
                voordat een recruiter het ziet?
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#56564F]">
              De meeste grote bedrijven gebruiken software die cv&apos;s automatisch doorzoekt en filtert
              vóórdat een mens ernaar kijkt. CVmaken.nu helpt je om die filters te passeren.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/registreren" className="inline-flex items-center gap-2 rounded-lg bg-[#111113] px-6 py-3.5 text-sm font-black text-white">
                Check mijn cv <ArrowRight className="size-4" />
              </Link>
              <Link href="/cv-maken" className="inline-flex items-center gap-2 rounded-lg border border-[#E5E3DA] bg-white px-6 py-3.5 text-sm font-black text-[#111113]">Maak een ATS-vriendelijk cv</Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#56564F]">
              {[
                "Zoekwoorden gecontroleerd",
                "Opmaak geanalyseerd",
                "Verbeterpunten in één overzicht",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-[#111113]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ATS score mockup */}
          <div className="rounded-3xl border border-[#E5E3DA] bg-[#EDF7C6] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[.14em] text-[#111113]">
              Voorbeeld ATS-score
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="relative flex size-20 items-center justify-center rounded-full border-4 border-[#C6F24E] bg-white">
                <span className="font-display text-2xl font-bold text-[#111113]">74</span>
              </div>
              <div>
                <div className="font-semibold text-[#111113]">Gedeeltelijk geoptimaliseerd</div>
                <div className="mt-1 text-sm text-[#56564F]">Verbeterpunten gevonden</div>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                { ok: true, label: "Standaard sectiekoppen gevonden" },
                { ok: true, label: "Geen tabellen of kolommen" },
                { ok: false, label: "8 zoekwoorden uit vacature ontbreken" },
                { ok: false, label: "Contactinfo staat in de header" },
              ].map(({ ok, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-[#111113]">
                  {ok ? (
                    <CheckCircle2 className="size-4 shrink-0 text-[#111113]" />
                  ) : (
                    <XCircle className="size-4 shrink-0 text-red-500" />
                  )}
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What is ATS */}
      <section className="py-20 sm:py-24">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">Uitleg</div>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#111113] sm:text-4xl">
              Wat is een ATS?
            </h2>
            <p className="mt-5 leading-7 text-[#56564F]">
              ATS staat voor <strong className="text-[#111113]">Applicant Tracking System</strong> —
              software die bedrijven gebruiken om het sollicitatieproces te beheren. Meer dan 90% van
              de grote bedrijven gebruikt een ATS.
            </p>
            <p className="mt-4 leading-7 text-[#56564F]">
              Wanneer jij je cv uploadt op een vacaturesite of direct solliciteert, wordt het cv
              eerst door deze software gelezen. Het systeem scant op sleutelwoorden, functietitels,
              vaardigheden en opleidingen.
            </p>
            <p className="mt-4 leading-7 text-[#56564F]">
              Alleen cv&apos;s die voldoende overeenkomen met de vacature, krijgen een score die hoog
              genoeg is om door te komen. De rest wordt automatisch afgewezen — zonder dat een mens
              ernaar heeft gekeken.
            </p>
          </div>
          <div className="rounded-3xl border border-[#E5E3DA] bg-[#F8F8F6] p-8 sm:p-10">
            <Bot className="size-10 text-[#9A9A92]" />
            <h3 className="font-display mt-5 text-xl font-bold text-[#111113]">
              Hoe werkt een ATS in de praktijk?
            </h3>
            <ol className="mt-5 space-y-4">
              {[
                "Jij stuurt je cv in als PDF of Word",
                "De ATS zet de tekst om naar platte tekst",
                "Het systeem zoekt naar zoekwoorden uit de vacature",
                "Jouw cv krijgt een matchscore op basis van de overlap",
                "Alleen boven een drempelwaarde gaat het door naar een recruiter",
              ].map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#C6F24E] text-xs font-bold text-[#111113]">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-[#111113]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Why 75% never reaches a recruiter */}
      <section className="border-y border-[#E5E3DA] bg-[#F8F8F6] py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]"><AlertTriangle className="size-3.5 text-[#FB5B36]" />Waarschuwing</div>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#111113] sm:text-4xl">
              Waarom 75% van de cv&apos;s nooit een menselijke recruiter bereikt
            </h2>
            <p className="mt-4 text-[#56564F]">
              Het is niet altijd jouw ervaring die je dwarszit. Vaak zit het probleem in de manier
              waarop je cv is opgemaakt of hoe de tekst is geformuleerd.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {atsReasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-[#E5E3DA] bg-white p-7">
                <div className="mb-1 flex size-10 items-center justify-center rounded-xl bg-red-50">
                  <Icon className="size-5 text-red-500" />
                </div>
                <div className="mt-3 font-semibold text-[#111113]">{title}</div>
                <div className="mt-1.5 text-sm leading-6 text-[#56564F]">{description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to make your CV ATS-proof */}
      <section className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">6 concrete tips</div>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#111113] sm:text-4xl">
              Zo maak je jouw cv ATS-proof
            </h2>
            <p className="mt-4 text-[#56564F]">
              Geen technische kennis nodig. Volg deze zes stappen en je cv passeert de ATS-filter
              een stuk makkelijker.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {atsTips.map(({ icon: Icon, tip, explanation }, index) => (
              <div
                key={tip}
                className="rounded-2xl border border-[#E5E3DA] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
              >
                <div className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#EDF7C6]">
                    <span className="text-xs font-bold text-[#111113]">{index + 1}</span>
                  </span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#F8FCE8]">
                    <Icon className="size-4 text-[#111113]" />
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-[#111113]">{tip}</h3>
                <p className="mt-2 text-sm leading-6 text-[#56564F]">{explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CVmaken.nu ATS check */}
      <section className="bg-[#111113] py-20 text-white sm:py-24">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-[#C6F24E]">CVmaken.nu ATS-check</div>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Wat doet de ATS-check van CVmaken.nu?
            </h2>
            <p className="mt-5 leading-7 text-[#9A9A92]">
              CVmaken.nu analyseert je cv op de meest voorkomende ATS-knelpunten en vergelijkt
              het direct met een vacature van jouw keuze.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                {
                  icon: Tag,
                  label: "Zoekwoorden matchen",
                  desc: "Vergelijkt de woorden in jouw cv met de termen in de vacature en toont welke ontbreken.",
                },
                {
                  icon: FileSearch,
                  label: "Opmaak controleren",
                  desc: "Signaleert tabellen, kolommen en afbeeldingen die ATS-systemen in de war brengen.",
                },
                {
                  icon: BarChart3,
                  label: "Score en actiepunten",
                  desc: "Geeft je een overzichtelijke score én concrete verbeterpunten, gesorteerd op prioriteit.",
                },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#C6F24E]/15">
                    <Icon className="size-5 text-[#C6F24E]" />
                  </span>
                  <div>
                    <div className="font-semibold text-white">{label}</div>
                    <div className="mt-0.5 text-sm text-[#9A9A92]">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/registreren" className="inline-flex items-center gap-2 rounded-lg bg-[#C6F24E] px-6 py-3.5 text-sm font-black text-[#111113]">
                Check mijn cv nu <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/cv-maken"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-black text-white"
              >
                Maak een nieuw cv
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[.055] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[.14em] text-[#C6F24E]">
              Dit krijg je te zien
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  label: "Zoekwoord-dekking",
                  score: "62%",
                  color: "bg-yellow-500",
                  width: "w-[62%]",
                },
                {
                  label: "Opmaak-score",
                  score: "90%",
                  color: "bg-[#C6F24E]",
                  width: "w-[90%]",
                },
                {
                  label: "Leesbaarheid",
                  score: "85%",
                  color: "bg-[#C6F24E]",
                  width: "w-[85%]",
                },
              ].map(({ label, score, color, width }) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-[#9A9A92]">{label}</span>
                    <span className="font-semibold text-white">{score}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full rounded-full ${color} ${width}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-white/10 bg-white/[.05] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <AlertTriangle className="size-4 text-yellow-400" />
                Verbeterpunten gevonden
              </div>
              <ul className="mt-3 space-y-2">
                {[
                  "Voeg 'agile' toe aan je vaardigheden",
                  "Verplaats contactgegevens uit de header",
                  "Gebruik 'projectmanager' i.p.v. 'projectleider'",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#9A9A92]">
                    <span className="mt-0.5 block size-1.5 shrink-0 rounded-full bg-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container-shell overflow-hidden rounded-3xl bg-[#111113] px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="font-display mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Wil je weten of jouw cv de ATS-filter passeert?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#9A9A92]">
            Maak gratis een account en gebruik de ATS-check op je bestaande of nieuw gebouwde cv.
          </p>
          <Link href="/registreren" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-black text-[#111113]">
            Start gratis <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
