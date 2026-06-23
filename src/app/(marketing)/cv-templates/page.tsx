import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { ModernPreview } from "@/features/templates/modern-preview";
import { KlassiekPreview } from "@/features/templates/klassiek-preview";
import { MinimaalPreview } from "@/features/templates/minimaal-preview";

export const metadata: Metadata = {
  title: "CV Templates | CVmaken.nu — Professioneel en ATS-proof",
  description:
    "Drie professionele cv-templates die ATS-systemen passeren én recruiters aanspreken. Kies de opmaak die bij jouw sector past.",
};

const templates = [
  {
    id: "modern",
    Component: ModernPreview,
    name: "Modern",
    tagline: "Tweekolomsig met fotoslot",
    description:
      "Een eigentijds ontwerp met een ruime hoofdkolom voor werkervaring en een compacte zijbalk voor vaardigheden en talen. De donkere header met lime accent geeft je cv direct karakter.",
    sectors: ["Tech", "Marketing", "Consulting"],
    accent: "border-[#C6F24E]",
    badge: "Populair",
  },
  {
    id: "klassiek",
    Component: KlassiekPreview,
    name: "Klassiek",
    tagline: "Tijdloos & formeel",
    description:
      "Een enkelvoudige kolom die leest als een brief: overzichtelijk, netjes en zonder frivoliteiten. Straalt betrouwbaarheid uit en is volledig geoptimaliseerd voor inhoud.",
    sectors: ["Onderwijs", "Overheid", "Zorg", "Finance"],
    accent: "border-[#E5E3DA]",
    badge: null,
  },
  {
    id: "minimaal",
    Component: MinimaalPreview,
    name: "Minimaal",
    tagline: "Strak & ruimtelijk",
    description:
      "Maximale witruimte, één accentkleur. Rustige elegantie die van nature past bij creatieve sectoren — zonder dat het ten koste gaat van leesbaarheid of ATS-compatibiliteit.",
    sectors: ["Design", "Creatief", "Architectuur"],
    accent: "border-[#E5E3DA]",
    badge: null,
  },
];

const atsPoints = [
  "Geen tabellen, tekstvakken of afbeeldingen die parsers breken",
  'Machine-leesbare sectienamen zoals "Werkervaring" en "Opleiding"',
  "Datum-notaties die ATS-systemen herkennen (bijv. jan 2022 – heden)",
  "Gestructureerde PDF-output die volgorde en inhoud behoud",
];

export default function CvTemplatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E5E3DA] py-20 sm:py-28">
        <div className="grid-fade absolute inset-0" />
        <div className="container-shell relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
            <span className="size-2 rounded-full bg-[#FB5B36]" />
            3 professionele templates
          </div>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.04em] text-[#111113] sm:text-5xl">
            Drie cv-templates die{" "}
            <span className="bg-[#C6F24E] px-[0.1em] rounded-[4px]">ATS-systemen</span>{" "}
            passeren
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#56564F]">
            Elke template is opgebouwd vanuit inhoud — niet vanuit design. Ze zien er goed uit voor
            de recruiter én worden correct gelezen door geautomatiseerde filterprogramma&apos;s.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/registreren"
              className="inline-flex items-center gap-2 rounded-lg bg-[#111113] px-6 py-3 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C]"
            >
              Begin met bouwen <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#templates"
              className="inline-flex items-center gap-2 rounded-lg border border-[#DDDBD1] bg-white px-6 py-3 text-sm font-semibold text-[#111113] transition-colors hover:bg-[#F2F1EC]"
            >
              Bekijk templates
            </Link>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-3">
            {templates.map(({ id, Component, name, tagline, description, sectors, accent, badge }) => (
              <div key={id} className="group flex flex-col">
                {/* Preview */}
                <div
                  className={`overflow-hidden rounded-2xl border-2 ${accent} transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:shadow-[#111113]/10`}
                >
                  <Component />
                </div>

                {/* Meta */}
                <div className="mt-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-[#111113]">{name}</h2>
                    {badge && (
                      <span className="inline-block rounded-full bg-[#FB5B36] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-white">
                        {badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#FB5B36]">{tagline}</div>
                  <p className="mt-3 text-sm leading-6 text-[#56564F]">{description}</p>

                  <div className="mt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#9A9A92]">
                      Geschikt voor
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {sectors.map((sector) => (
                        <span
                          key={sector}
                          className="rounded-full border border-[#E5E3DA] bg-white px-2.5 py-0.5 text-xs font-medium text-[#56564F]"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/registreren"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-[#E5E3DA] bg-white px-4 py-2.5 text-sm font-bold text-[#111113] transition-all hover:bg-[#111113] hover:text-[#F2F1EC]"
                  >
                    Gebruik {name} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATS section */}
      <section className="border-y border-[#E5E3DA] bg-[#111113] py-20 sm:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-[#9A9A92]">
              <span className="size-1.5 rounded-full bg-[#C6F24E]" />
              ATS-proof
            </div>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-[-0.03em] text-[#F2F1EC] sm:text-4xl">
              Alle templates zijn ATS-proof
            </h2>
            <p className="mt-4 leading-7 text-[#9A9A92]">
              De meeste grote bedrijven en uitzendbureaus gebruiken Applicant Tracking Systems om
              cv&apos;s automatisch te scannen. Een visueel aantrekkelijk cv dat niet correct wordt
              gelezen, belandt direct in de prullenbak.
            </p>
            <ul className="mt-6 space-y-3">
              {atsPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#9A9A92]">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#C6F24E]/15">
                    <Check className="size-3.5 text-[#C6F24E]" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/[.04]">
            <div className="border-b border-white/10 px-6 py-4">
              <p className="font-mono-label text-[10px] text-[#9A9A92]">ATS-scanner simulatie</p>
            </div>
            <div className="space-y-4 p-6">
              {[
                "Naam & contactgegevens",
                "Werkervaring (3 functies)",
                "Opleiding",
                "Vaardigheden",
                "Talen",
              ].map((label) => (
                <div key={label} className="flex items-center justify-between text-sm">
                  <span className="text-[#9A9A92]">{label}</span>
                  <span className="flex items-center gap-1.5 rounded-full bg-[#C6F24E]/15 px-3 py-1 text-xs font-semibold text-[#C6F24E]">
                    <ShieldCheck className="size-3" />
                    Herkend
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 bg-[#C6F24E]/10 px-6 py-4">
              <p className="text-xs font-semibold text-[#C6F24E]">
                Alle secties correct gelezen — cv gaat door naar recruiter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container-shell overflow-hidden rounded-3xl bg-[#111113] px-6 py-16 sm:px-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-[#9A9A92]">
              <span className="size-1.5 rounded-full bg-[#C6F24E]" />
              Gratis beginnen
            </div>
            <h2 className="mt-6 text-balance text-3xl font-black tracking-[-0.04em] text-[#F2F1EC] sm:text-4xl">
              Kies je template en begin vandaag
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[#9A9A92]">
              Gratis een cv bouwen met één van de drie templates. Geen creditcard, geen proefperiode.
            </p>
            <Link
              href="/registreren"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#C6F24E] px-8 py-4 text-[15px] font-black text-[#111113] transition-colors hover:bg-[#DCF58A]"
            >
              Gratis starten <ArrowRight className="size-4" />
            </Link>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-[#56564F]">
              {["Geen creditcard", "Direct aan de slag", "Made in NL"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <Check className="size-3.5 text-[#C6F24E]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
