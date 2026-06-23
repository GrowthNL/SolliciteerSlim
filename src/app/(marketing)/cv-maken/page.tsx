import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Filter,
  TrendingUp,
  User,
  Briefcase,
  GraduationCap,
  Download,
  AlignLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "CV maken in 5 minuten | CVmaken.nu",
  description:
    "Maak in 5 minuten een professioneel, ATS-vriendelijk cv met AI-hulp. CVmaken.nu begeleidt je stap voor stap naar een cv dat opvalt bij recruiters.",
};

const stats = [
  {
    icon: Clock,
    number: "6",
    unit: "seconden",
    label: "Zo lang besteedt een recruiter gemiddeld aan een eerste cv-scan",
  },
  {
    icon: Filter,
    number: "75%",
    unit: "van de cv's",
    label: "wordt gefilterd door een ATS-systeem voordat een recruiter het ziet",
  },
  {
    icon: TrendingUp,
    number: "40%",
    unit: "meer kans",
    label: "hebben kandidaten met een vacaturegericht cv op een uitnodiging",
  },
];

const steps = [
  {
    number: 1,
    icon: User,
    title: "Persoonlijke gegevens",
    description:
      "Vul je naam, contactgegevens, LinkedIn-URL en woonplaats in. Zorg dat je e-mailadres professioneel klinkt.",
  },
  {
    number: 2,
    icon: AlignLeft,
    title: "Profiel / samenvatting",
    description:
      "Schrijf een krachtige samenvatting van 3–5 zinnen. Onze AI helpt je om dit scherper en overtuigender te formuleren.",
  },
  {
    number: 3,
    icon: Briefcase,
    title: "Werkervaring",
    description:
      "Voeg je werkervaring toe in omgekeerd chronologische volgorde. Beschrijf concrete resultaten met cijfers waar mogelijk.",
  },
  {
    number: 4,
    icon: GraduationCap,
    title: "Opleiding & vaardigheden",
    description:
      "Voeg je opleidingen, certificaten en relevante vaardigheden toe. Gebruik dezelfde terminologie als de vacature.",
  },
  {
    number: 5,
    icon: Download,
    title: "Downloaden als PDF",
    description:
      "Kies een template (Modern, Klassiek of Minimaal) en download een verzorgde PDF die klaar is om te versturen.",
  },
];

const tips = [
  {
    title: "Maximaal 2 pagina's",
    description:
      "Een Nederlands cv is bij voorkeur 1 pagina voor starters en maximaal 2 pagina's voor ervaren professionals. Recruiters houden van beknoptheid.",
  },
  {
    title: "Omgekeerd chronologisch",
    description:
      "Zet je meest recente ervaring bovenaan. Recruiters willen direct zien wat je nu doet of het laatst hebt gedaan.",
  },
  {
    title: "Concrete resultaten, geen taakomschrijvingen",
    description:
      "Schrijf niet 'verantwoordelijk voor social media', maar 'vergroot Instagram-bereik met 40% in 6 maanden'. Resultaten overtuigen.",
  },
  {
    title: "ATS-vriendelijk taalgebruik",
    description:
      "Gebruik dezelfde zoekwoorden als de vacature. Vermijd tabellen, afbeeldingen en ongewone lettertypes die ATS-systemen in de war brengen.",
  },
];

const faqs: [string, string][] = [
  [
    "Hoe lang duurt het om een cv te maken met CVmaken.nu?",
    "De meeste gebruikers hebben binnen 15 tot 30 minuten een compleet, verzorgd cv klaarstaan. Als je al een oud cv hebt om op te baseren, kan dat nog sneller. De AI-suggesties helpen je bovendien om tijd te besparen op nadenken over de juiste bewoording.",
  ],
  [
    "Moet ik een foto op mijn cv zetten?",
    "In Nederland is een professionele pasfoto op het cv gebruikelijk, maar geen verplichting. Bij veel grote bedrijven en internationale organisaties wordt een foto juist afgeraden om onbewuste vooroordelen te voorkomen. CVmaken.nu laat je kiezen.",
  ],
  [
    "Welk bestandsformaat moet ik gebruiken voor mijn cv?",
    "Stuur je cv altijd als PDF, tenzij de vacature specifiek om een Word-bestand vraagt. Een PDF ziet er op elk apparaat hetzelfde uit en is beter leesbaar voor de meeste ATS-systemen. CVmaken.nu exporteert standaard als PDF.",
  ],
];

export default function CvMakenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(135deg,#fbfcfa_45%,#edf8f1)] py-20 sm:py-28">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_.75fr]">
          <div>
            <Badge>CV Maken</Badge>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Een professioneel cv maken in{" "}
              <span className="text-emerald-700">5 minuten</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              CVmaken.nu begeleidt je stap voor stap. Vul je gegevens in, laat de AI je
              teksten aanscherpen en download een ATS-vriendelijk cv dat opvalt.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/registreren">
                  Start gratis <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/cv-templates">Bekijk templates</Link>
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              {["Geen creditcard nodig", "Direct beginnen", "3 professionele templates"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-emerald-700" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Mini CV preview */}
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[.14em] text-emerald-800">
              Wat je bereikt
            </p>
            <ul className="mt-6 space-y-5">
              {[
                "Een helder, leesbaar cv in jouw eigen stijl",
                "AI-suggesties die je teksten scherper maken",
                "Geoptimaliseerd voor ATS-systemen van recruiters",
                "Direct beschikbaar als professionele PDF",
              ].map((item) => (
                <li key={item} className="flex gap-3 font-medium leading-6 text-slate-800">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 py-16 sm:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Waarom een goed cv cruciaal is
            </h2>
            <p className="mt-4 text-slate-600">
              De cijfers liegen er niet om. Een cv dat niet door de eerste filters komt, wordt nooit
              gezien.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stats.map(({ icon: Icon, number, unit, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
              >
                <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-emerald-100">
                  <Icon className="size-6 text-emerald-700" />
                </span>
                <div className="font-display text-4xl font-bold text-slate-950">{number}</div>
                <div className="mt-1 text-sm font-semibold text-emerald-700">{unit}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <Badge>Stap voor stap</Badge>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              In 5 stappen naar een professioneel cv
            </h2>
            <p className="mt-4 text-slate-600">
              CVmaken.nu neemt je mee door elk onderdeel. Je hoeft niet te weten wat je moet
              schrijven — de app helpt je op weg.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <div
                key={title}
                className={`relative rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.03)] ${
                  number === 5 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                    {number}
                  </span>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                    <Icon className="size-5 text-emerald-700" />
                  </span>
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/registreren">
                Begin nu gratis <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tips for a good Dutch CV */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="border-white/10 bg-white/10 text-emerald-200">
              Tips voor een sterk cv
            </Badge>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Wat maakt een goed Nederlands cv?
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Recruiters in Nederland hebben specifieke verwachtingen. Dit zijn de regels die het
              meeste verschil maken.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {tips.map(({ title, description }) => (
              <Card key={title} className="border-white/10 bg-white/[.055] text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="size-5 shrink-0 text-emerald-400" />
                    {title}
                  </CardTitle>
                  <CardDescription className="text-slate-300">{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <Badge>Veelgestelde vragen</Badge>
            <h2 className="font-display mt-4 text-3xl font-bold text-slate-950">
              Alles over cv maken
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Heb je nog een andere vraag? Onze helpcentrum staat klaar, of stel je vraag direct in
              de app.
            </p>
            <div className="mt-8">
              <Button asChild variant="secondary">
                <Link href="/registreren">
                  Start gratis <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-950">
                  {question}
                  <span className="text-xl font-normal text-emerald-700 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-8 text-sm leading-6 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="container-shell overflow-hidden rounded-3xl bg-emerald-800 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="font-display mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Klaar om je cv te maken?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-emerald-100">
            Maak gratis je eerste cv. Geen creditcard nodig, geen verborgen kosten.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="bg-white text-emerald-900 hover:bg-emerald-50" size="lg">
              <Link href="/registreren">
                Start gratis <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/cv-voorbeelden">Bekijk cv-voorbeelden</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
