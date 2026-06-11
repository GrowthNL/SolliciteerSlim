import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, Palette, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "CV Templates | SolliciteerSlim — Professioneel en ATS-proof",
  description:
    "Drie professionele cv-templates die ATS-systemen passeren én recruiters aanspreken. Kies de opmaak die bij jouw sector past.",
};

const templates = [
  {
    id: "modern",
    name: "Modern",
    tagline: "Tweekolomsopmaak met groene accenten",
    description:
      "Een eigentijds cv-ontwerp met een compacte zijbalk voor contactgegevens en vaardigheden, en een ruime hoofdkolom voor je werkervaring. De subtiele groen-accenten geven je cv karakter zonder af te leiden.",
    sectors: ["Tech", "Marketing", "Consulting"],
    preview: (
      <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* Header stripe */}
        <div className="flex items-end gap-0">
          {/* Sidebar */}
          <div className="w-2/5 bg-emerald-700 p-4 text-white">
            <div className="mb-1 h-12 w-12 rounded-full bg-emerald-500/50" />
            <div className="mt-3 h-2.5 w-20 rounded bg-white/70" />
            <div className="mt-1 h-2 w-16 rounded bg-white/40" />
            <div className="mt-5 h-1.5 w-12 rounded bg-emerald-300/60" />
            <div className="mt-2 space-y-1.5">
              {[70, 85, 60, 90].map((w, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="h-1.5 rounded-full bg-white/30" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
            <div className="mt-4 h-1.5 w-16 rounded bg-emerald-300/60" />
            <div className="mt-2 space-y-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-1.5 w-full rounded bg-white/30" />
              ))}
            </div>
          </div>
          {/* Main */}
          <div className="flex-1 p-4">
            <div className="h-1.5 w-24 rounded bg-emerald-700/70" />
            <div className="mt-1 h-1 w-20 rounded bg-slate-200" />
            <div className="mt-4 h-1.5 w-16 rounded bg-emerald-700/40" />
            {[1, 2].map((block) => (
              <div key={block} className="mt-3">
                <div className="h-1.5 w-28 rounded bg-slate-400" />
                <div className="mt-1 h-1 w-20 rounded bg-slate-200" />
                <div className="mt-1 space-y-0.5">
                  <div className="h-1 w-full rounded bg-slate-100" />
                  <div className="h-1 w-5/6 rounded bg-slate-100" />
                </div>
              </div>
            ))}
            <div className="mt-4 h-1.5 w-20 rounded bg-emerald-700/40" />
            <div className="mt-2">
              <div className="h-1.5 w-28 rounded bg-slate-400" />
              <div className="mt-1 h-1 w-16 rounded bg-slate-200" />
              <div className="mt-1 h-1 w-full rounded bg-slate-100" />
              <div className="mt-0.5 h-1 w-4/5 rounded bg-slate-100" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "klassiek",
    name: "Klassiek",
    tagline: "Tijdloze enkelvoudige kolom",
    description:
      "Een enkelvoudige kolom die leest als een brief: overzichtelijk, netjes en zonder frivoliteiten. Dit ontwerp straalt betrouwbaarheid uit en is volledig geoptimaliseerd voor sectoren waar inhoud zwaarder weegt dan design.",
    sectors: ["Onderwijs", "Overheid", "Zorg", "Finance"],
    preview: (
      <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        {/* Name block */}
        <div className="border-b-2 border-slate-800 pb-3">
          <div className="h-3 w-32 rounded bg-slate-800" />
          <div className="mt-1 h-1.5 w-20 rounded bg-slate-400" />
          <div className="mt-1 h-1 w-40 rounded bg-slate-200" />
        </div>
        {/* Sections */}
        {["Profiel", "Werkervaring", "Opleiding"].map((section) => (
          <div key={section} className="mt-4">
            <div className="h-1.5 w-20 rounded bg-slate-700" />
            <div className="mt-0.5 h-px w-full bg-slate-200" />
            <div className="mt-2 space-y-0.5">
              <div className="h-1 w-full rounded bg-slate-100" />
              <div className="h-1 w-5/6 rounded bg-slate-100" />
              <div className="h-1 w-11/12 rounded bg-slate-100" />
            </div>
          </div>
        ))}
        <div className="mt-4">
          <div className="h-1.5 w-20 rounded bg-slate-700" />
          <div className="mt-0.5 h-px w-full bg-slate-200" />
          <div className="mt-2 flex flex-wrap gap-1">
            {[48, 56, 36, 52, 44].map((w, i) => (
              <div key={i} className="h-2 rounded bg-slate-200" style={{ width: `${w}px` }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "minimaal",
    name: "Minimaal",
    tagline: "Strak en wit, content centraal",
    description:
      "Maximale witruimte, één accentkleur, één lettertype. Dit ontwerp geeft je cv een rustige elegantie die van nature past bij creatieve sectoren — zonder dat het ten koste gaat van leesbaarheid of ATS-compatibiliteit.",
    sectors: ["Design", "Creatief", "Architectuur"],
    preview: (
      <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        {/* Minimal name */}
        <div className="flex items-start justify-between">
          <div>
            <div className="h-2.5 w-28 rounded bg-slate-950" />
            <div className="mt-1.5 h-1 w-20 rounded bg-slate-300" />
          </div>
          <div className="h-1 w-24 rounded bg-emerald-600/50" />
        </div>
        <div className="mt-1 h-px w-full bg-slate-100" />
        {/* Sections with large whitespace */}
        {[1, 2, 3].map((block) => (
          <div key={block} className="mt-5">
            <div className="flex items-center gap-2">
              <div className="h-px w-4 bg-emerald-600" />
              <div className="h-1.5 w-16 rounded bg-slate-600" />
            </div>
            <div className="mt-2 space-y-0.5 pl-6">
              <div className="h-1.5 w-24 rounded bg-slate-800" />
              <div className="h-1 w-16 rounded bg-slate-300" />
              <div className="mt-1 h-1 w-full rounded bg-slate-100" />
              <div className="h-1 w-4/5 rounded bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
    ),
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
      <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(135deg,#fbfcfa_45%,#edf8f1)] py-20 sm:py-28">
        <div className="container-shell text-center">
          <Badge>3 templates</Badge>
          <h1 className="font-display mt-6 text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Drie professionele templates
            <br className="hidden sm:block" />
            <span className="text-emerald-700"> die ATS-systemen passeren</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Elke template is opgebouwd vanuit de inhoud — niet vanuit het design. Ze zien er goed uit voor
            de recruiter én worden correct gelezen door geautomatiseerde filterprogramma&apos;s.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/registreren">
                Begin met bouwen <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#templates">Bekijk templates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {templates.map((template) => (
              <Card key={template.id} className="flex flex-col overflow-hidden">
                {/* Visual preview */}
                <div className="border-b border-slate-100 bg-slate-50 p-5">
                  {template.preview}
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{template.name}</CardTitle>
                  </div>
                  <p className="text-sm font-semibold text-emerald-700">{template.tagline}</p>
                  <CardDescription className="mt-1 leading-6">{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Geschikt voor
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {template.sectors.map((sector) => (
                      <Badge key={sector} className="text-xs font-medium">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="secondary" className="mt-5 w-full">
                    <Link href="/registreren">
                      Gebruik {template.name} <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ATS section */}
      <section className="border-y border-slate-100 bg-slate-50 py-20 sm:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge>ATS-proof</Badge>
            <h2 className="font-display mt-4 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Alle templates zijn ATS-proof
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              De meeste grote bedrijven en uitzendbureaus gebruiken Applicant Tracking Systems om cv&apos;s
              automatisch te scannen en te rangschikken. Een visueel aantrekkelijk cv dat niet correct
              wordt gelezen, belandt direct in de prullenbak — nog voordat een recruiter er naar heeft
              gekeken.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Onze templates zijn ontworpen met de beperkingen van ATS-parsers in gedachten. Dat betekent:
              geen fancy lay-outs die de tekstvolgorde door elkaar gooien, en geen elementen die parsers
              laten haken.
            </p>
            <ul className="mt-6 space-y-3">
              {atsPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <Check className="size-3.5 text-emerald-700" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          {/* Schematic ATS illustration */}
          <div className="mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
              <div className="border-b border-slate-100 bg-emerald-700 px-5 py-3">
                <p className="text-xs font-semibold text-emerald-100 uppercase tracking-wide">ATS-scanner simulatie</p>
              </div>
              <div className="space-y-4 p-5">
                {[
                  { label: "Naam & contactgegevens", status: "Herkend", ok: true },
                  { label: "Werkervaring (3 functies)", status: "Herkend", ok: true },
                  { label: "Opleiding", status: "Herkend", ok: true },
                  { label: "Vaardigheden", status: "Herkend", ok: true },
                  { label: "Talen", status: "Herkend", ok: true },
                ].map(({ label, status, ok }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">{label}</span>
                    <span
                      className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        ok ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"
                      }`}
                    >
                      <ShieldCheck className="size-3" />
                      {status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-100 bg-emerald-50 px-5 py-3">
                <p className="text-xs font-semibold text-emerald-800">
                  Alle secties correct gelezen — cv gaat door naar recruiter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customisation — coming soon */}
      <section className="py-20 sm:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Emerald", color: "bg-emerald-600" },
                { name: "Indigo", color: "bg-indigo-600" },
                { name: "Amber", color: "bg-amber-500" },
                { name: "Slate", color: "bg-slate-700" },
                { name: "Rose", color: "bg-rose-500" },
                { name: "Sky", color: "bg-sky-500" },
              ].map(({ name, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 opacity-60"
                >
                  <div className={`size-6 rounded-full ${color}`} />
                  <span className="text-sm font-medium text-slate-700">{name}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              Kleuren zijn illustratief — functie beschikbaar in fase 3
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              <Sparkles className="size-3" />
              Binnenkort beschikbaar
            </div>
            <h2 className="font-display mt-4 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Kleur &amp; typografie aanpassen
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              In fase 3 van SolliciteerSlim kun je per template de accentkleur en het lettertype
              aanpassen. Zo houd je de ATS-veilige structuur, maar voeg je een persoonlijk tintje toe
              dat past bij jouw branche of stijl.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Palette className="size-4 text-slate-400" />
                6 accentkleuren (waaronder Emerald, Indigo en Slate)
              </li>
              <li className="flex items-center gap-2">
                <Palette className="size-4 text-slate-400" />
                3 lettertypecombinaties (klassiek, modern, neutraal)
              </li>
              <li className="flex items-center gap-2">
                <Palette className="size-4 text-slate-400" />
                Live preview voordat je opslaat of downloadt
              </li>
            </ul>
            <p className="mt-5 text-sm text-slate-500">
              Starter- en Pro-gebruikers worden automatisch op de hoogte gebracht zodra deze functie
              beschikbaar is.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="container-shell overflow-hidden rounded-3xl bg-emerald-800 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="font-display mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Kies je template en begin vandaag
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-emerald-100">
            Gratis een cv bouwen met een van de drie templates. Geen creditcard, geen proefperiode.
          </p>
          <Button asChild className="mt-7 bg-white text-emerald-900 hover:bg-emerald-50" size="lg">
            <Link href="/registreren">
              Gratis starten <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
