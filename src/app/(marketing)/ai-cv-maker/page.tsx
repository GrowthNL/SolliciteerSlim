import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Check,
  Upload,
  ScanSearch,
  FileText,
  Download,
  Zap,
  X,
} from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { Testimonials } from "@/components/magic/testimonials";

export const metadata: Metadata = {
  title: "AI CV Maker | CVmaken.nu — Je cv gebouwd en aangescherpt door AI",
  description:
    "Maak je cv met AI die specifiek getraind is voor de Nederlandse arbeidsmarkt. Geen generieke ChatGPT, maar ATS-bewuste AI die jouw cv per sectie aanscherpt.",
};

export default function AiCvMakerPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="border-b py-20 sm:py-28" style={{ borderColor: "#E5E3DA", backgroundColor: "#F8F8F6" }}>
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ backgroundColor: "#C6F24E", color: "#111113" }}
            >
              <Sparkles className="size-4" />
              Specifiek voor de NL arbeidsmarkt
            </div>

            <h1
              className="font-display text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: "#111113" }}
            >
              Jouw cv in 10 minuten —{" "}
              <span
                className="relative inline-block"
                style={{ color: "#111113" }}
              >
                aangescherpt door{" "}
                <span
                  className="relative"
                  style={{ color: "#111113" }}
                >
                  <span
                    className="relative z-10"
                    style={{ color: "#111113" }}
                  >
                    AI
                  </span>
                  <span
                    className="absolute inset-x-0 bottom-0 -z-0 h-[0.35em] rounded"
                    style={{ backgroundColor: "#C6F24E" }}
                  />
                </span>
              </span>
            </h1>

            <p
              className="mx-auto mt-6 max-w-xl text-lg leading-8"
              style={{ color: "#56564F" }}
            >
              CVmaken.nu gebruikt AI die speciaal getraind is voor Nederlandse cv&apos;s — niet de
              generieke ChatGPT die soms terug naar het Engels vertaalt. ATS-bewust, sectiegericht
              en klaar voor de Nederlandse arbeidsmarkt.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/registreren"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#111113", color: "#F2F1EC" }}
              >
                Begin gratis <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/cv-templates"
                className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-base font-semibold transition-colors hover:opacity-80"
                style={{ borderColor: "#E5E3DA", color: "#111113", backgroundColor: "#F2F1EC" }}
              >
                Bekijk templates
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm" style={{ color: "#56564F" }}>
              {[
                "Specifiek voor NL arbeidsmarkt",
                "Geen ChatGPT",
                "ATS-geoptimaliseerd",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="size-4" style={{ color: "#C6F24E" }} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Hoe het werkt ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: "#F2F1EC" }}>
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#111113" }}
            >
              Hoe het werkt
            </h2>
            <p className="mt-4 text-base leading-7" style={{ color: "#56564F" }}>
              In drie stappen van lege pagina naar een ATS-proof cv dat recruiters aanspreekt.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Vul je gegevens in",
                description:
                  "Doorloop het formulier sectie voor sectie: profiel, werkervaring, opleiding en vaardigheden. CVmaken.nu begeleidt je met slimme hints bij elke stap.",
              },
              {
                number: "02",
                title: 'Klik op "Verbeter met AI"',
                description:
                  "Met één klik scherpt de AI jouw teksten per sectie aan. Je profiel, werkervaringsbullets en vaardigheden worden aangescherpt met de juiste Nederlandse terminologie.",
              },
              {
                number: "03",
                title: "Download als ATS-proof PDF",
                description:
                  "Kies je favoriete template — Modern, Klassiek of Minimaal — en download een professionele PDF die door elk ATS-systeem heen komt.",
              },
            ].map(({ number, title, description }, i) => (
              <Reveal key={number} delay={i * 100}>
                <div
                  className="h-full rounded-2xl border p-8"
                  style={{ borderColor: "#E5E3DA", backgroundColor: "#F8F8F6" }}
                >
                  <div
                    className="font-display text-5xl font-bold leading-none"
                    style={{ color: "#C6F24E" }}
                  >
                    {number}
                  </div>
                  <h3
                    className="font-display mt-5 text-xl font-semibold"
                    style={{ color: "#111113" }}
                  >
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6" style={{ color: "#56564F" }}>
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature showcase ───────────────────────────────────────── */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: "#111113" }}>
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#F2F1EC" }}
            >
              Alles wat je nodig hebt
            </h2>
            <p className="mt-4 text-base leading-7" style={{ color: "#9A9A92" }}>
              CVmaken.nu combineert slimme AI-functies met een intuïtieve editor — gebouwd voor de
              Nederlandse arbeidsmarkt.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Upload,
                title: "CV importeren",
                description:
                  "Upload een bestaand PDF-cv of plak je tekst. De AI herkent automatisch alle secties en vult het formulier voor je in.",
              },
              {
                icon: Sparkles,
                title: "AI tekstverbetering",
                description:
                  "Verbeter je profiel, werkervaringsbullets en vaardigheidssectie met één klik. Per sectie, niet één generieke dump.",
              },
              {
                icon: ScanSearch,
                title: "ATS-check",
                description:
                  "Plak een vacaturetekst en ontvang een score plus concrete tips. Zo weet je zeker dat jouw cv de juiste zoekwoorden bevat.",
              },
              {
                icon: FileText,
                title: "3 professionele templates",
                description:
                  "Kies uit Modern, Klassiek of Minimaal. Alle templates zijn ATS-getest en zien er op elk scherm verzorgd uit.",
              },
            ].map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={(i % 4) * 90}>
                <div
                  className="h-full rounded-2xl border p-7"
                  style={{ borderColor: "#ffffff14", backgroundColor: "#ffffff08" }}
                >
                  <div
                    className="flex size-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "#C6F24E" }}
                  >
                    <Icon className="size-5" style={{ color: "#111113" }} />
                  </div>
                  <h3
                    className="font-display mt-5 text-base font-semibold"
                    style={{ color: "#F2F1EC" }}
                  >
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6" style={{ color: "#9A9A92" }}>
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI vs ChatGPT comparison ───────────────────────────────── */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: "#F8F8F6" }}>
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#111113" }}
            >
              CVmaken.nu AI vs. ChatGPT
            </h2>
            <p className="mt-4 text-base leading-7" style={{ color: "#56564F" }}>
              Niet alle AI is gelijk. Dit zijn de verschillen die er toe doen als je een baan
              zoekt in Nederland.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {/* CVmaken.nu */}
            <Reveal delay={0} className="h-full">
            <div
              className="h-full rounded-2xl border-2 p-8"
              style={{ borderColor: "#C6F24E", backgroundColor: "#F2F1EC" }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="flex size-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#C6F24E" }}
                >
                  <Zap className="size-5" style={{ color: "#111113" }} />
                </div>
                <span
                  className="font-display text-lg font-bold"
                  style={{ color: "#111113" }}
                >
                  CVmaken.nu AI
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  "CV-specifiek getraind op Nederlandse cv's",
                  "Altijd output in correct Nederlands",
                  "ATS-bewust: gebruikt de juiste zoekwoorden",
                  "Gestructureerde output per cv-sectie",
                  "Begrijpt de Nederlandse arbeidsmarkt",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#111113" }}>
                    <Check
                      className="mt-0.5 size-4 shrink-0"
                      style={{ color: "#111113" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>

            {/* ChatGPT */}
            <Reveal delay={120} className="h-full">
            <div
              className="h-full rounded-2xl border p-8"
              style={{ borderColor: "#E5E3DA", backgroundColor: "#F2F1EC" }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="flex size-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#E5E3DA" }}
                >
                  <span className="text-base font-bold" style={{ color: "#56564F" }}>AI</span>
                </div>
                <span
                  className="font-display text-lg font-bold"
                  style={{ color: "#56564F" }}
                >
                  Generieke AI (ChatGPT)
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  "Generiek getraind, niet cv-specifiek",
                  "Vertaalt teksten soms (deels) naar Engels",
                  "Geen ATS-bewustzijn of zoekwoord­optimalisatie",
                  "Vrije tekst, geen cv-structuur",
                  "Geen kennis van NL arbeidsmarkt­normen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#56564F" }}>
                    <X
                      className="mt-0.5 size-4 shrink-0"
                      style={{ color: "#FB5B36" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Social proof ──────────────────────────────────────────── */}
      <Testimonials />

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: "#F2F1EC" }}>
        <div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <div
              className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{ backgroundColor: "#C6F24E", color: "#111113" }}
            >
              Veelgestelde vragen
            </div>
            <h2
              className="font-display mt-2 text-3xl font-bold"
              style={{ color: "#111113" }}
            >
              Alles over AI en cv&apos;s
            </h2>
            <p className="mt-4 leading-7" style={{ color: "#56564F" }}>
              Staat jouw vraag er niet bij? Neem contact op of stel hem direct in de app.
            </p>
            <div className="mt-8">
              <Link
                href="/registreren"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#111113", color: "#F2F1EC" }}
              >
                Begin gratis <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="divide-y" style={{ borderColor: "#E5E3DA" }}>
            {(
              [
                [
                  "Kan de AI mijn cv schrijven?",
                  "De AI schrijft niet je volledige cv van nul, maar scherpt jouw teksten aan. Je vult je eigen gegevens, ervaringen en vaardigheden in — de AI maakt die teksten vervolgens scherper, professioneler en beter afgestemd op de Nederlandse arbeidsmarkt. Zo blijft het cv authentiek jouw verhaal.",
                ],
                [
                  "Is mijn cv door AI herkenbaar?",
                  "Nee, niet als je de suggesties als startpunt gebruikt en ze personaliseert. De AI geeft je betere formuleringen, maar jij bent degene die de inhoud bepaalt. Een goed AI-verbeterd cv klinkt als jij — alleen scherper.",
                ],
                [
                  "Wat kost de AI-functie?",
                  "De basisversie van CVmaken.nu is gratis, inclusief een beperkt aantal AI-verbeteringen. Voor onbeperkt AI gebruik, de ATS-check en premium templates kun je upgraden naar een betaald abonnement. Bekijk onze prijzenpagina voor actuele tarieven.",
                ],
                [
                  "Werkt het ook voor een carrièreswitch?",
                  "Absoluut. Juist bij een carrièreswitch helpt de AI om transferable skills te herformuleren in de taal van je nieuwe vakgebied. Geef aan welke richting je op wilt en de AI past de nadruk in je teksten dienovereenkomstig aan.",
                ],
              ] as [string, string][]
            ).map(([question, answer]) => (
              <details
                key={question}
                className="group py-5"
                style={{ borderColor: "#E5E3DA" }}
              >
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold"
                  style={{ color: "#111113" }}
                >
                  {question}
                  <span
                    className="text-xl font-normal transition-transform group-open:rotate-45"
                    style={{ color: "#C6F24E" }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-8 text-sm leading-6" style={{ color: "#56564F" }}>
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark CTA ──────────────────────────────────────────────── */}
      <section className="px-4 pb-20 pt-4">
        <div
          className="container-shell overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20"
          style={{ backgroundColor: "#111113" }}
        >
          <div
            className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl"
            style={{ backgroundColor: "#C6F24E" }}
          >
            <Download className="size-7" style={{ color: "#111113" }} />
          </div>
          <h2
            className="font-display mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-4xl"
            style={{ color: "#F2F1EC" }}
          >
            Klaar om je cv te laten aanscherpen door AI?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7" style={{ color: "#9A9A92" }}>
            Begin gratis. Geen creditcard, geen verborgen kosten. In 10 minuten heb je een
            ATS-proof cv klaar voor de Nederlandse arbeidsmarkt.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/registreren"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C6F24E", color: "#111113" }}
            >
              Maak mijn cv met AI <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
