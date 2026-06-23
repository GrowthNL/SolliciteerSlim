import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lightbulb,
  FileText,
  MessageSquare,
  Handshake,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { TrustBar } from "@/components/magic/trust-bar";
import { Testimonials } from "@/components/magic/testimonials";

export const metadata: Metadata = {
  title: "Sollicitatiebrief maken die uitnodigt | CVmaken.nu",
  description:
    "Schrijf een sollicitatiebrief die recruiters overtuigt en jou een uitnodiging oplevert. Leer de structuur, voorbeeldzinnen en veelgemaakte fouten — en gebruik AI-hulp voor een persoonlijke brief.",
};

const structure = [
  {
    icon: MessageSquare,
    label: "Opening",
    title: "Start met een haak die verbinding legt",
    description:
      "De eerste zin bepaalt of een recruiter verder leest. Vermijd clichés als 'Hierbij solliciteer ik…'. Toon direct je enthousiasme voor het bedrijf en leg een concrete link naar hun werk, product of missie.",
    tip: "Verwijs naar iets specifieks: een recent project, een uitspraak van de CEO, of een product dat je zelf gebruikt.",
  },
  {
    icon: FileText,
    label: "Middenstuk",
    title: "Waarom ben jíj de juiste persoon?",
    description:
      "Het middenstuk bestaat uit 2–3 alinea's. Koppel je concrete ervaring en resultaten aan de vereisten uit de vacature. Gebruik één sterk voorbeeld per alinea en onderbouw met cijfers waar mogelijk.",
    tip: "Schrijf niet wat je hebt gedaan, maar wat het opleverde. 'Verhoogde klanttevredenheid van 7,2 naar 8,6' is sterker dan 'verantwoordelijk voor klantenservice'.",
  },
  {
    icon: Handshake,
    label: "Afsluiting",
    title: "Eindig met een duidelijke call-to-action",
    description:
      "Sluit af met een concrete uitnodiging tot gesprek. Wacht niet passief af — laat weten dat je beschikbaar bent en geef aan wanneer je belt of mailt voor een reactie.",
    tip: "Schrijf: 'Ik ga graag in gesprek en neem volgende week contact op om een moment af te stemmen.' Dit toont initiatief zonder opdringerig te zijn.",
  },
];

const mistakes = [
  {
    mistake: "Te lang",
    explanation:
      "Een Nederlandse sollicitatiebrief mag maximaal één A4-pagina zijn. Meer dan drie alinea's en een recruiter haakt af. Wees scherp: elke zin moet een reden hebben om erin te staan.",
  },
  {
    mistake: "Copy-paste zonder aanpassing",
    explanation:
      "Recruiters herkennen een standaardbrief direct. Noem altijd de naam van het bedrijf, de specifieke functie en verwijs naar iets concreets uit de vacaturetekst of het bedrijf.",
  },
  {
    mistake: "Geen concreet voorbeeld",
    explanation:
      "Generieke claims als 'ik ben gedreven en communicatief sterk' overtuigen niemand. Onderbouw elke eigenschap met één specifiek voorbeeld uit je loopbaan.",
  },
  {
    mistake: "Fouten in spelling",
    explanation:
      "Spelfouten in een sollicitatiebrief zijn een dealbreaker — zeker voor functies waarbij communicatie belangrijk is. Laat je brief altijd nalezen of gebruik een schrijfhulp.",
  },
  {
    mistake: "Geen duidelijke call-to-action",
    explanation:
      "Sluit niet af met 'ik zie uw reactie met belangstelling tegemoet'. Dit is passief en voorspelbaar. Neem zelf initiatief en geef aan dat je contact opneemt.",
  },
];

const exampleSentences = [
  {
    context: "Van de ene branche naar de andere",
    sentence:
      "Mijn achtergrond in de gezondheidszorg heeft mij geleerd hoe ik complexe informatie helder communiceer — een vaardigheid die ik nu graag inzet in een commerciële omgeving.",
  },
  {
    context: "Solliciteren op een groeifunctie",
    sentence:
      "De afgelopen drie jaar heb ik mij ontwikkeld van junior naar medior designer, en de stap naar een leidinggevende rol bij [Bedrijf] is de logische volgende stap.",
  },
  {
    context: "Gat in het cv uitleggen",
    sentence:
      "In de periode van [maand–maand] heb ik bewust geïnvesteerd in [cursus/project/zorgtaak] en ben ik sterker teruggekomen met concrete vaardigheden die ik nu wil inzetten.",
  },
  {
    context: "Open sollicitatie zonder vacature",
    sentence:
      "Ik volg [Bedrijf] al langere tijd en ben onder de indruk van [specifiek project of initiatief]. Ik geloof dat mijn ervaring in [gebied] directe waarde kan toevoegen aan jullie team.",
  },
];

export default function SollicitatiebriefMakenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E5E3DA] bg-[#F8F8F6] py-20 sm:py-28">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_.75fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">Sollicitatiebrief</div>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">
              Een sollicitatiebrief die jou{" "}
              <span className="text-[#111113]">uitnodigt voor een gesprek</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#56564F]">
              De meeste sollicitatiebrieven worden niet eens uitgelezen. Leer hoe je een brief
              schrijft die direct aansluit op de vacature, de recruiter pakt en jou onderscheidt van
              de rest.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/registreren" className="inline-flex items-center gap-2 rounded-lg bg-[#111113] px-6 py-3.5 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C]">
                Schrijf mijn brief <ArrowRight className="size-4" />
              </Link>
              <Link href="/cv-maken" className="inline-flex items-center gap-2 rounded-lg border border-[#E5E3DA] bg-white px-6 py-3.5 text-sm font-semibold text-[#111113] transition-colors hover:bg-[#F2F1EC]">Maak eerst mijn cv</Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#56564F]">
              {["Gebaseerd op jouw cv", "Afgestemd op de vacature", "Klaar in minuten"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-[#111113]" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-[#E5E3DA] bg-[#F8FCE8] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[.14em] text-[#111113]">
              Wat CVmaken.nu doet
            </p>
            <ul className="mt-6 space-y-5">
              {[
                "Analyseert de vacature op sleutelwoorden en eisen",
                "Genereert een gepersonaliseerde brief op basis van jouw cv",
                "Past de toon aan op branche en functieniveau",
                "Geeft suggesties voor sterkere formuleringen",
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

      {/* Structure */}
      <section className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">Structuur</div>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#111113] sm:text-4xl">
              De structuur van een winnende sollicitatiebrief
            </h2>
            <p className="mt-4 text-[#56564F]">
              Een effectieve sollicitatiebrief heeft drie duidelijke delen. Elk deel heeft een
              specifiek doel — en als één onderdeel ontbreekt, mist de brief haar kracht.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {structure.map(({ icon: Icon, label, title, description, tip }, index) => (
              <Reveal key={title} delay={index * 100} className="h-full">
              <div
                className="relative h-full rounded-2xl border border-[#E5E3DA] bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#EDF7C6]">
                    <Icon className="size-5 text-[#111113]" />
                  </span>
                  <span className="rounded-full bg-[#EDF7C6] px-2.5 py-0.5 text-xs font-semibold text-[#111113]">
                    Deel {index + 1} — {label}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-[#111113]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#56564F]">{description}</p>
                <div className="mt-5 rounded-xl border border-[#E5E3DA] bg-[#F8FCE8] p-4">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="mt-0.5 size-4 shrink-0 text-[#111113]" />
                    <p className="text-xs leading-5 text-[#111113]">{tip}</p>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section className="border-y border-[#E5E3DA] bg-[#F8F8F6] py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">Valkuilen</div>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#111113] sm:text-4xl">
              5 fouten die de meeste sollicitatiebrieven maken
            </h2>
            <p className="mt-4 text-[#56564F]">
              Herken je een van deze fouten? Je bent niet de enige. Maar als je ze vermijdt, sta je
              al voor op de meeste andere kandidaten.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mistakes.map(({ mistake, explanation }, index) => (
              <Reveal
                key={mistake}
                delay={(index % 3) * 80}
                className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
              >
              <div
                className="h-full rounded-2xl border border-[#E5E3DA] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
              >
                <div className="flex items-start gap-3">
                  <XCircle className="mt-0.5 size-5 shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold text-[#111113]">{mistake}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#56564F]">{explanation}</p>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Example sentences */}
      <section className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">Voorbeeldzinnen</div>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#111113] sm:text-4xl">
              Sterke openingszinnen voor elke situatie
            </h2>
            <p className="mt-4 text-[#56564F]">
              Gebruik deze als inspiratie — pas ze altijd aan op je eigen situatie en stem ze af op
              het bedrijf waarnaar je solliciteert.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {exampleSentences.map(({ context, sentence }, i) => (
              <Reveal key={context} delay={(i % 2) * 100} className="h-full">
              <div
                className="h-full rounded-2xl border border-[#E5E3DA] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
              >
                <span className="inline-flex items-center rounded-full border border-[#E5E3DA] bg-[#F2F1EC] px-2.5 py-0.5 text-xs font-medium text-[#56564F]">
                  {context}
                </span>
                <blockquote className="mt-4 border-l-2 border-[#111113] pl-4 text-sm italic leading-7 text-[#111113]">
                  &ldquo;{sentence}&rdquo;
                </blockquote>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA — AI letter generation */}
      <section className="border-t border-[#E5E3DA] bg-[#F8F8F6] py-20 sm:py-24">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">AI-hulp</div>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#111113] sm:text-4xl">
              Laat CVmaken.nu je brief voor je schrijven
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#56564F]">
              Upload je cv en plak de vacaturetekst. CVmaken.nu analyseert beide en genereert
              een persoonlijke sollicitatiebrief die aansluit op jouw profiel én de specifieke eisen
              van de functie.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Altijd gebaseerd op jouw echte ervaring — geen verzinsels",
                "Zoekwoorden uit de vacature verwerkt in de brief",
                "Juiste toon per branche en functieniveau",
                "Direct bewerkbaar en kopieerbaar",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#111113]">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#111113]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/registreren" className="inline-flex items-center gap-2 rounded-lg bg-[#111113] px-6 py-3.5 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C]">
                Maak mijn brief <ArrowRight className="size-4" />
              </Link>
              <Link href="/cv-maken" className="inline-flex items-center gap-2 rounded-lg border border-[#E5E3DA] bg-white px-6 py-3.5 text-sm font-semibold text-[#111113] transition-colors hover:bg-[#F2F1EC]">Eerst cv maken</Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E5E3DA] bg-white p-8 shadow-[0_4px_24px_rgba(16,185,129,0.08)] sm:p-10">
            <div className="flex items-center gap-3 border-b border-[#E5E3DA] pb-5">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#EDF7C6]">
                <Sparkles className="size-5 text-[#111113]" />
              </span>
              <div>
                <div className="font-semibold text-[#111113]">AI Briefgenerator</div>
                <div className="text-sm text-[#9A9A92]">
                  Jouw cv + vacature = persoonlijke brief
                </div>
              </div>
            </div>
            <ol className="mt-6 space-y-5">
              {[
                ["1", "Plak of upload je bestaande cv"],
                ["2", "Kopieer de vacaturetekst"],
                ["3", "CVmaken.nu genereert je brief"],
                ["4", "Pas aan, kopieer en verstuur"],
              ].map(([num, step]) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C6F24E] text-xs font-bold text-[#111113]">
                    {num}
                  </span>
                  <span className="text-sm font-medium text-[#111113]">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-7 rounded-xl border border-[#E5E3DA] bg-[#F8FCE8] p-4 text-xs leading-5 text-[#111113]">
              <strong>Let op:</strong> CVmaken.nu verzint geen ervaring. De AI verbetert je
              formuleringen op basis van wat jij hebt ingevuld — jij controleert altijd het
              eindresultaat.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
