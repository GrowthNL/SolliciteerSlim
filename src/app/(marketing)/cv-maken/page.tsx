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
import { Reveal } from "@/components/magic/reveal";
import { NumberTicker } from "@/components/magic/number-ticker";
import { TrustBar } from "@/components/magic/trust-bar";
import { Testimonials } from "@/components/magic/testimonials";

export const metadata: Metadata = {
  title: "CV maken in 5 minuten | CVmaken.nu",
  description:
    "Maak in 5 minuten een professioneel, ATS-vriendelijk cv met AI-hulp. CVmaken.nu begeleidt je stap voor stap naar een cv dat opvalt bij recruiters.",
};

const stats = [
  {
    icon: Clock,
    value: 6,
    suffix: "",
    unit: "seconden",
    label: "Zo lang besteedt een recruiter gemiddeld aan een eerste cv-scan",
  },
  {
    icon: Filter,
    value: 75,
    suffix: "%",
    unit: "van de cv's",
    label: "wordt gefilterd door een ATS-systeem voordat een recruiter het ziet",
  },
  {
    icon: TrendingUp,
    value: 40,
    suffix: "%",
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
      <section className="relative overflow-hidden border-b border-[#E5E3DA] bg-[#F8F8F6] py-20 sm:py-28">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_.75fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
              CV Maken
            </div>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">
              Een professioneel cv maken in{" "}
              <span className="text-[#111113]">5 minuten</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#56564F]">
              CVmaken.nu begeleidt je stap voor stap. Vul je gegevens in, laat de AI je
              teksten aanscherpen en download een ATS-vriendelijk cv dat opvalt.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/registreren"
                className="inline-flex items-center gap-2 rounded-lg bg-[#111113] px-6 py-3.5 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C]"
              >
                Start gratis <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/cv-templates"
                className="inline-flex items-center gap-2 rounded-lg border border-[#E5E3DA] bg-white px-6 py-3.5 text-sm font-semibold text-[#111113] transition-colors hover:bg-[#F2F1EC]"
              >
                Bekijk templates
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#56564F]">
              {["Geen creditcard nodig", "Direct beginnen", "3 professionele templates"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-[#111113]" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Mini CV preview */}
          <div className="rounded-3xl border border-[#E5E3DA] bg-[#F8FCE8] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[.14em] text-[#111113]">
              Wat je bereikt
            </p>
            <ul className="mt-6 space-y-5">
              {[
                "Een helder, leesbaar cv in jouw eigen stijl",
                "AI-suggesties die je teksten scherper maken",
                "Geoptimaliseerd voor ATS-systemen van recruiters",
                "Direct beschikbaar als professionele PDF",
              ].map((item) => (
                <li key={item} className="flex gap-3 font-medium leading-6 text-[#111113]">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#111113]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Stats */}
      <section className="border-b border-[#E5E3DA] py-16 sm:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#111113] sm:text-3xl">
              Waarom een goed cv cruciaal is
            </h2>
            <p className="mt-4 text-[#56564F]">
              De cijfers liegen er niet om. Een cv dat niet door de eerste filters komt, wordt nooit
              gezien.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stats.map(({ icon: Icon, value, suffix, unit, label }, i) => (
              <Reveal key={label} delay={i * 100}>
                <div className="rounded-2xl border border-[#E5E3DA] bg-white p-8 text-center shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
                  <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#EDF7C6]">
                    <Icon className="size-6 text-[#111113]" />
                  </span>
                  <div className="font-display text-4xl font-bold text-[#111113]">
                    <NumberTicker value={value} suffix={suffix} />
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#111113]">{unit}</div>
                  <p className="mt-3 text-sm leading-6 text-[#56564F]">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
              Stap voor stap
            </div>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#111113] sm:text-4xl">
              In 5 stappen naar een professioneel cv
            </h2>
            <p className="mt-4 text-[#56564F]">
              CVmaken.nu neemt je mee door elk onderdeel. Je hoeft niet te weten wat je moet
              schrijven — de app helpt je op weg.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, description }, i) => (
              <Reveal
                key={title}
                delay={i * 80}
                className={number === 5 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <div className="relative h-full rounded-2xl border border-[#E5E3DA] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
                  <div className="flex items-start gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#C6F24E] text-sm font-bold text-[#111113]">
                      {number}
                    </span>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#EDF7C6]">
                      <Icon className="size-5 text-[#111113]" />
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-lg font-semibold text-[#111113]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#56564F]">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/registreren"
              className="inline-flex items-center gap-2 rounded-lg bg-[#111113] px-6 py-3.5 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C]"
            >
              Begin nu gratis <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tips for a good Dutch CV */}
      <section className="bg-[#111113] py-20 text-white sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-[#C6F24E]">
              Tips voor een sterk cv
            </div>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Wat maakt een goed Nederlands cv?
            </h2>
            <p className="mt-4 leading-7 text-[#9A9A92]">
              Recruiters in Nederland hebben specifieke verwachtingen. Dit zijn de regels die het
              meeste verschil maken.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {tips.map(({ title, description }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[.055] p-6">
                  <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                    <CheckCircle2 className="size-5 shrink-0 text-[#C6F24E]" />
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#9A9A92]">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
              Veelgestelde vragen
            </div>
            <h2 className="font-display mt-4 text-3xl font-bold text-[#111113]">
              Alles over cv maken
            </h2>
            <p className="mt-4 leading-7 text-[#56564F]">
              Heb je nog een andere vraag? Onze helpcentrum staat klaar, of stel je vraag direct in
              de app.
            </p>
            <div className="mt-8">
              <Link
                href="/registreren"
                className="inline-flex items-center gap-2 rounded-lg border border-[#E5E3DA] bg-white px-6 py-3.5 text-sm font-semibold text-[#111113] transition-colors hover:bg-[#F2F1EC]"
              >
                Start gratis <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="divide-y divide-[#E5E3DA] border-y border-[#E5E3DA]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#111113]">
                  {question}
                  <span className="text-xl font-normal text-[#C6F24E] group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-8 text-sm leading-6 text-[#56564F]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="container-shell overflow-hidden rounded-3xl bg-[#111113] px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="font-display mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Klaar om je cv te maken?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#9A9A92]">
            Maak gratis je eerste cv. Geen creditcard nodig, geen verborgen kosten.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/registreren"
              className="inline-flex items-center gap-2 rounded-lg bg-[#C6F24E] px-6 py-3.5 text-sm font-bold text-[#111113] transition-colors hover:bg-[#d4f566]"
            >
              Start gratis <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/cv-voorbeelden"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Bekijk cv-voorbeelden
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
