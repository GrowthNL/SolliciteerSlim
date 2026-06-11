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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "ATS-check: zorg dat jouw cv wordt gelezen | SolliciteerSlim",
  description:
    "Leer hoe ATS-systemen werken, waarom 75% van de cv's nooit een recruiter bereikt, en hoe je jouw cv ATS-proof maakt met SolliciteerSlim.",
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
      <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(135deg,#fbfcfa_45%,#edf8f1)] py-20 sm:py-28">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_.75fr]">
          <div>
            <Badge>ATS-check</Badge>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Wordt jouw cv gefilterd{" "}
              <span className="text-emerald-700">
                voordat een recruiter het ziet?
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              De meeste grote bedrijven gebruiken software die cv&apos;s automatisch doorzoekt en filtert
              vóórdat een mens ernaar kijkt. SolliciteerSlim helpt je om die filters te passeren.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/registreren">
                  Check mijn cv <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/cv-maken">Maak een ATS-vriendelijk cv</Link>
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              {[
                "Zoekwoorden gecontroleerd",
                "Opmaak geanalyseerd",
                "Verbeterpunten in één overzicht",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-700" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ATS score mockup */}
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[.14em] text-emerald-800">
              Voorbeeld ATS-score
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="relative flex size-20 items-center justify-center rounded-full border-4 border-emerald-600 bg-white">
                <span className="font-display text-2xl font-bold text-emerald-700">74</span>
              </div>
              <div>
                <div className="font-semibold text-slate-900">Gedeeltelijk geoptimaliseerd</div>
                <div className="mt-1 text-sm text-slate-600">Verbeterpunten gevonden</div>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                { ok: true, label: "Standaard sectiekoppen gevonden" },
                { ok: true, label: "Geen tabellen of kolommen" },
                { ok: false, label: "8 zoekwoorden uit vacature ontbreken" },
                { ok: false, label: "Contactinfo staat in de header" },
              ].map(({ ok, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-slate-800">
                  {ok ? (
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
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
            <Badge>Uitleg</Badge>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Wat is een ATS?
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              ATS staat voor <strong className="text-slate-900">Applicant Tracking System</strong> —
              software die bedrijven gebruiken om het sollicitatieproces te beheren. Meer dan 90% van
              de grote bedrijven gebruikt een ATS.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Wanneer jij je cv uploadt op een vacaturesite of direct solliciteert, wordt het cv
              eerst door deze software gelezen. Het systeem scant op sleutelwoorden, functietitels,
              vaardigheden en opleidingen.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Alleen cv&apos;s die voldoende overeenkomen met de vacature, krijgen een score die hoog
              genoeg is om door te komen. De rest wordt automatisch afgewezen — zonder dat een mens
              ernaar heeft gekeken.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <Bot className="size-10 text-slate-400" />
            <h3 className="font-display mt-5 text-xl font-bold text-slate-950">
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
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Why 75% never reaches a recruiter */}
      <section className="border-y border-slate-100 bg-slate-50 py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <Badge>
              <AlertTriangle className="mr-1.5 size-3.5" />
              Waarschuwing
            </Badge>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Waarom 75% van de cv&apos;s nooit een menselijke recruiter bereikt
            </h2>
            <p className="mt-4 text-slate-600">
              Het is niet altijd jouw ervaring die je dwarszit. Vaak zit het probleem in de manier
              waarop je cv is opgemaakt of hoe de tekst is geformuleerd.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {atsReasons.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader>
                  <span className="mb-1 flex size-10 items-center justify-center rounded-xl bg-red-50">
                    <Icon className="size-5 text-red-500" />
                  </span>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to make your CV ATS-proof */}
      <section className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <Badge>6 concrete tips</Badge>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Zo maak je jouw cv ATS-proof
            </h2>
            <p className="mt-4 text-slate-600">
              Geen technische kennis nodig. Volg deze zes stappen en je cv passeert de ATS-filter
              een stuk makkelijker.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {atsTips.map(({ icon: Icon, tip, explanation }, index) => (
              <div
                key={tip}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
              >
                <div className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                    <Icon className="size-4 text-emerald-700" />
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-slate-950">{tip}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SolliciteerSlim ATS check */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge className="border-white/10 bg-white/10 text-emerald-200">
              SolliciteerSlim ATS-check
            </Badge>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Wat doet de ATS-check van SolliciteerSlim?
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              SolliciteerSlim analyseert je cv op de meest voorkomende ATS-knelpunten en vergelijkt
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
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15">
                    <Icon className="size-5 text-emerald-300" />
                  </span>
                  <div>
                    <div className="font-semibold text-white">{label}</div>
                    <div className="mt-0.5 text-sm text-slate-300">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-500" size="lg">
                <Link href="/registreren">
                  Check mijn cv nu <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="/cv-maken">Maak een nieuw cv</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[.055] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[.14em] text-emerald-200">
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
                  color: "bg-emerald-500",
                  width: "w-[90%]",
                },
                {
                  label: "Leesbaarheid",
                  score: "85%",
                  color: "bg-emerald-500",
                  width: "w-[85%]",
                },
              ].map(({ label, score, color, width }) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">{label}</span>
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
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
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
        <div className="container-shell overflow-hidden rounded-3xl bg-emerald-800 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="font-display mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Wil je weten of jouw cv de ATS-filter passeert?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-emerald-100">
            Maak gratis een account en gebruik de ATS-check op je bestaande of nieuw gebouwde cv.
          </p>
          <Button asChild className="mt-7 bg-white text-emerald-900 hover:bg-emerald-50" size="lg">
            <Link href="/registreren">
              Start gratis <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
