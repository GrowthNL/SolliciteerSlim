import Link from "next/link";
import { ArrowRight, Check, FileCheck2, FileText, SearchCheck, ShieldCheck, Sparkles, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModernPreview } from "@/features/templates/modern-preview";
import { KlassiekPreview } from "@/features/templates/klassiek-preview";
import { MinimaalPreview } from "@/features/templates/minimaal-preview";
import { Reveal } from "@/components/magic/reveal";
import { NumberTicker } from "@/components/magic/number-ticker";
import { TrustBar } from "@/components/magic/trust-bar";
import { Testimonials } from "@/components/magic/testimonials";
import { JsonLd } from "@/components/seo/json-ld";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["Verzint de AI ervaring die ik niet heb?", "Nee. CVmaken.nu verbetert formuleringen, maar mag nooit werkgevers, diploma's, resultaten of datums bedenken. Jij controleert altijd de uitkomst."],
    ["Kan ik CVmaken.nu gratis proberen?", "Ja. Je kunt gratis een account en cv maken, bewerken en bekijken. Betaalde opties worden pas relevant bij uitgebreid AI-gebruik en PDF-export."],
    ["Is mijn cv veilig?", "Privacy is een uitgangspunt in de architectuur. Persoonlijke gegevens worden alleen verwerkt waar nodig en zijn met toegangsregels per gebruiker afgeschermd."],
    ["Is dit geschikt voor elke branche?", "De basis is breed inzetbaar. Door een vacature toe te voegen houdt de AI rekening met de rol, branche en gevraagde vaardigheden."],
  ].map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const steps = [
  "Vul je gegevens in of plak je bestaande cv",
  "Plak een vacature voor directe analyse",
  "Laat AI je cv en brief verbeteren",
  "Kies een template en download je PDF",
];

const features = [
  { icon: WandSparkles, title: "AI cv verbeteren", text: "Maak je profiel en werkervaring sterker, zonder feiten te verzinnen." },
  { icon: FileText, title: "Sollicitatiebrief maken", text: "Genereer een persoonlijke basisbrief die aansluit op jouw verhaal." },
  { icon: SearchCheck, title: "Vacature-analyse", text: "Zie snel welke vaardigheden, woorden en ervaring écht tellen." },
  { icon: FileCheck2, title: "ATS-check", text: "Controleer leesbaarheid, opbouw en dekking van relevante zoekwoorden." },
  { icon: Sparkles, title: "Professionele templates", text: "Kies uit strakke ontwerpen die inhoud en leesbaarheid vooropzetten." },
  { icon: ShieldCheck, title: "PDF export", text: "Download een verzorgd document dat klaar is om te versturen." },
];

const faqs = [
  ["Verzint de AI ervaring die ik niet heb?", "Nee. CVmaken.nu verbetert formuleringen, maar mag nooit werkgevers, diploma's, resultaten of datums bedenken. Jij controleert altijd de uitkomst."],
  ["Kan ik CVmaken.nu gratis proberen?", "Ja. Je kunt gratis een account en cv maken, bewerken en bekijken. Betaalde opties worden pas relevant bij uitgebreid AI-gebruik en PDF-export."],
  ["Is mijn cv veilig?", "Privacy is een uitgangspunt in de architectuur. Persoonlijke gegevens worden alleen verwerkt waar nodig en zijn met toegangsregels per gebruiker afgeschermd."],
  ["Is dit geschikt voor elke branche?", "De basis is breed inzetbaar. Door een vacature toe te voegen houdt de AI rekening met de rol, branche en gevraagde vaardigheden."],
];

function ResumePreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Floating match badge */}
      <div className="absolute -left-5 top-14 z-10 hidden animate-float rounded-2xl border border-[#E5E3DA] bg-white p-4 shadow-xl sm:block">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-full bg-[#EDF7C6] text-[#111113]">
            <Sparkles className="size-4" />
          </span>
          <div>
            <div className="text-xs text-[#9A9A92]">Vacaturematch</div>
            <div className="font-bold text-[#111113]">82% passend</div>
          </div>
        </div>
      </div>

      {/* CV mockup */}
      <div className="rotate-[1.5deg] rounded-[1.75rem] border border-[#E5E3DA] bg-white p-3 shadow-[0_30px_80px_rgba(17,17,19,0.14)]">
        <div className="rounded-2xl bg-[#F2F1EC] p-6 sm:p-8">
          <div className="flex gap-4 border-b border-[#DDDBD1] pb-6">
            <div className="size-14 overflow-hidden rounded-full bg-[#111113]">
              <svg viewBox="0 0 64 64" fill="none" className="size-full">
                <circle cx="32" cy="32" r="32" fill="#F0EBE3"/>
                <ellipse cx="32" cy="70" rx="22" ry="18" fill="#2E2E2C"/>
                <rect x="27" y="46" width="10" height="10" rx="2" fill="#D4A574"/>
                <circle cx="32" cy="38" r="14" fill="#D4A574"/>
                <path d="M18 36 Q18 22 32 20 Q46 22 46 36 Q44 28 32 27 Q20 28 18 36Z" fill="#2E2E2C"/>
                <ellipse cx="27" cy="37" rx="2" ry="2.2" fill="#1a1a1a"/>
                <ellipse cx="37" cy="37" rx="2" ry="2.2" fill="#1a1a1a"/>
                <path d="M27 43 Q32 47 37 43" stroke="#C0856A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-[#111113]">Lisa van der Berg</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-[.14em] text-[#C6F24E] bg-[#111113] px-1.5 py-0.5 rounded inline-block">Marketing Manager</div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-[1fr_.45fr] gap-6">
            <div>
              <div className="h-2 w-20 rounded bg-[#111113]" />
              <div className="mt-3 space-y-2">
                <div className="h-1.5 rounded bg-[#DDDBD1]" />
                <div className="h-1.5 rounded bg-[#DDDBD1]" />
                <div className="h-1.5 w-5/6 rounded bg-[#DDDBD1]" />
              </div>
              <div className="mt-5 h-2 w-28 rounded bg-[#111113]" />
              <div className="mt-3 border-l-2 border-[#C6F24E] pl-3">
                <div className="h-2 w-24 rounded bg-[#2E2E2C]" />
                <div className="mt-1 text-[9px] text-[#9A9A92]">Coolblue · 2021-heden</div>
                <div className="mt-1.5 h-1.5 rounded bg-[#DDDBD1]" />
                <div className="mt-1 h-1.5 w-4/5 rounded bg-[#DDDBD1]" />
              </div>
            </div>
            <div>
              <div className="h-2 w-14 rounded bg-[#111113]" />
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="h-5 w-14 rounded-full bg-[#EDF7C6]" />
                <span className="h-5 w-10 rounded-full bg-[#EDF7C6]" />
                <span className="h-5 w-16 rounded-full bg-[#EDF7C6]" />
                <span className="h-5 w-12 rounded-full bg-[#FFE3DA]" />
              </div>
              <div className="mt-5 h-2 w-12 rounded bg-[#111113]" />
              <div className="mt-2 space-y-1.5">
                <div className="h-1.5 rounded bg-[#DDDBD1]" />
                <div className="h-1.5 w-3/4 rounded bg-[#DDDBD1]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom badge */}
      <div className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-xl border border-[#E5E3DA] bg-white px-4 py-2.5 text-sm font-semibold text-[#111113] shadow-lg">
        <span className="size-2 rounded-full bg-[#FB5B36]" />
        Klaar voor export
      </div>
    </div>
  );
}

export function Homepage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#E5E3DA] py-20 sm:py-28 lg:py-32">
        <div className="grid-fade absolute inset-0" />
        <div className="container-shell relative grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
              <span className="size-2 rounded-full bg-[#FB5B36]" />
              AI-hulp voor jouw volgende stap
            </div>

            <h1 className="mt-6 max-w-2xl text-balance text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#111113] sm:text-5xl lg:text-[58px]">
              Maak sneller een cv dat{" "}
              <span className="bg-[#C6F24E] px-[0.1em] rounded-[4px] text-[#111113]">echt past</span>{" "}
              bij de vacature.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#56564F]">
              CVmaken.nu helpt je met AI om je cv, motivatiebrief en vacaturematch te verbeteren, zonder gedoe, zonder nepfeiten.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-[#111113] text-[#F2F1EC] hover:bg-[#2E2E2C] rounded-lg text-[15px] font-bold px-7 py-3.5 h-auto">
                <Link href="/registreren">Start gratis <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-lg border border-[#DDDBD1] bg-white text-[#111113] hover:bg-[#F2F1EC] text-[15px] font-semibold h-auto px-7 py-3.5">
                <Link href="/cv-voorbeelden">Bekijk voorbeelden</Link>
              </Button>
            </div>

            {/* Trust strip */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#56564F]">
              {["Geen creditcard nodig", "Jij houdt de controle", "Gemaakt voor Nederland"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="size-4 text-[#FB5B36]" />{item}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-8 border-t border-[#E5E3DA] pt-8">
              <div>
                <div className="text-2xl font-black tracking-tight text-[#111113]">
                  <NumberTicker value={3} suffix=" min" />
                </div>
                <div className="mt-0.5 text-xs text-[#9A9A92]">gemiddelde bouwtijd</div>
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight text-[#111113]">
                  <NumberTicker value={3} suffix="×" />
                </div>
                <div className="mt-0.5 text-xs text-[#9A9A92]">templates beschikbaar</div>
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight text-[#111113]">GPT-4o</div>
                <div className="mt-0.5 text-xs text-[#9A9A92]">AI onder de motorkap</div>
              </div>
            </div>
          </div>

          <ResumePreview />
        </div>
      </section>

      {/* ── Trust bar ──────────────────────────────────────────────────────── */}
      <TrustBar />

      {/* ── How it works ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono-label text-xs text-[#9A9A92]">
              <span className="text-[#FB5B36] font-bold">01</span> · Zo werkt het
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#111113] sm:text-4xl">
              Van losse info naar een sterke sollicitatie
            </h2>
            <p className="mt-4 text-[#56564F]">Vier stappen. De AI doet voorstellen, jij maakt de keuzes.</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step} delay={i * 90}>
                <div className="group relative h-full rounded-2xl border border-[#E5E3DA] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#111113]/5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#FB5B36] text-sm font-black text-white">
                    {i + 1}
                  </span>
                  <p className="mt-5 font-semibold leading-6 text-[#111113]">{step}</p>
                  {i < 3 && (
                    <ArrowRight className="absolute -right-3 top-9 z-10 hidden size-5 rounded-full bg-white text-[#DDDBD1] lg:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features dark ──────────────────────────────────────────────────── */}
      <section className="bg-[#111113] py-20 sm:py-24">
        <div className="container-shell">
          <div className="max-w-2xl">
            <p className="font-mono-label text-xs text-[#9A9A92]">
              <span className="text-[#C6F24E] font-bold">02</span> · Eén slimme werkplek
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#F2F1EC] sm:text-4xl">
              Alles wat je nodig hebt om gericht te solliciteren
            </h2>
            <p className="mt-4 leading-7 text-[#9A9A92]">
              Niet alleen een mooi ontwerp, maar praktische hulp om je inhoud beter te laten aansluiten.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 100}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[.04] p-6 transition-all duration-200 hover:bg-white/[.07] hover:border-white/20">
                  <span className={`mb-4 flex size-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 ${i % 3 === 2 ? "bg-[#FFE3DA]/20 text-[#FB5B36]" : "bg-[#C6F24E]/15 text-[#C6F24E]"}`}>
                    <Icon className="size-5" />
                  </span>
                  <div className="font-bold text-[#F2F1EC]">{title}</div>
                  <p className="mt-1.5 text-sm leading-6 text-[#9A9A92]">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Templates ──────────────────────────────────────────────────────── */}
      <section className="border-y border-[#E5E3DA] bg-white py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono-label text-xs text-[#9A9A92]">
              <span className="text-[#FB5B36] font-bold">03</span> · Kies jouw template
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#111113] sm:text-4xl">
              Professionele cv-ontwerpen die bij jou passen
            </h2>
            <p className="mt-4 text-[#56564F]">
              Drie stijlen, één platform. Kies wat bij je past en download als PDF.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {(
              [
                {
                  Component: ModernPreview,
                  name: "Modern",
                  tagline: "Tweekolomsig met fotoslot",
                  badge: "Populair",
                  cardBorder: "border-[#C6F24E]",
                  shadow: "group-hover:shadow-[#C6F24E]/30",
                },
                {
                  Component: KlassiekPreview,
                  name: "Klassiek",
                  tagline: "Tijdloos & formeel",
                  badge: null,
                  cardBorder: "border-[#E5E3DA]",
                  shadow: "group-hover:shadow-[#111113]/10",
                },
                {
                  Component: MinimaalPreview,
                  name: "Minimaal",
                  tagline: "Strak & ruimtelijk",
                  badge: null,
                  cardBorder: "border-[#E5E3DA]",
                  shadow: "group-hover:shadow-[#111113]/10",
                },
              ] as const
            ).map(({ Component, name, tagline, badge, cardBorder, shadow }) => (
              <div key={name} className="group flex flex-col">
                <div
                  className={`overflow-hidden rounded-2xl border-2 ${cardBorder} transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-2xl ${shadow}`}
                >
                  <Component />
                </div>
                <div className="mt-5 flex items-start justify-between px-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-lg text-[#111113]">{name}</span>
                      {badge && (
                        <span className="inline-block rounded-full bg-[#FB5B36] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-white">
                          {badge}
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 text-sm text-[#9A9A92]">{tagline}</div>
                  </div>
                  <Link
                    href="/registreren"
                    className="shrink-0 flex items-center gap-1.5 rounded-lg bg-[#111113] px-4 py-2 text-xs font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C]"
                  >
                    Kiezen <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/cv-templates"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#56564F] transition-colors hover:text-[#111113]"
            >
              Meer over onze templates <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────────────── */}
      <Testimonials />

      {/* ── Trust ──────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono-label text-xs text-[#9A9A92]">
              <span className="text-[#FB5B36] font-bold">04</span> · AI met gezonde grenzen
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#111113] sm:text-4xl">
              Jouw verhaal blijft altijd van jou
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#56564F]">
              CVmaken.nu is ontworpen om je werk uit handen te nemen, niet om de waarheid mooier te maken dan die is.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Geen verborgen proefabonnementen", "Jij houdt controle over je gegevens", "AI verzint geen ervaring", "Voor Nederlandse sollicitaties"].map((item) => (
                <div key={item} className="flex gap-3 text-sm font-medium text-[#111113]">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#C6F24E]">
                    <Check className="size-3.5 text-[#111113]" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border-2 border-[#C6F24E] bg-[#111113] p-8 sm:p-10">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#FB5B36]" />
              <span className="font-mono-label text-[10px] text-[#9A9A92]">ONZE BELOFTE</span>
            </div>
            <p className="mt-6 text-2xl font-black leading-snug tracking-tight text-[#F2F1EC]">
              &ldquo;AI helpt je om{" "}
              <span className="bg-[#C6F24E] px-[0.08em] rounded-sm text-[#111113]">scherper</span>{" "}
              te formuleren. Jij bepaalt wat klopt en wat wordt verstuurd.&rdquo;
            </p>
            <p className="mt-5 text-sm leading-6 text-[#9A9A92]">Privacy-first · Feitelijk · Transparant</p>
          </div>
        </div>
      </section>

      {/* ── Pricing preview ────────────────────────────────────────────────── */}
      <section className="border-y border-[#E5E3DA] bg-white py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-mono-label text-xs text-[#9A9A92]">
              <span className="text-[#FB5B36] font-bold">05</span> · Eenvoudige prijzen
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#111113] sm:text-4xl">
              Begin gratis, betaal pas als je klaar bent
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
            {([
              ["Gratis", "€0", "Maak en bewerk je cv", false],
              ["Starter", "€7/mnd", "PDF-export + meerdere cv's", true],
              ["Pro", "€14/mnd", "Alles + AI-credits per maand", false],
            ] as const).map(([name, price, copy, featured]) => (
              <div
                key={name}
                className={`rounded-2xl border p-6 transition-all ${featured ? "border-[#C6F24E] bg-[#111113] text-[#F2F1EC] shadow-xl" : "border-[#E5E3DA] bg-white"}`}
              >
                {featured && (
                  <span className="mb-3 inline-block rounded-full bg-[#C6F24E] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#111113]">
                    Populair
                  </span>
                )}
                <div className="text-lg font-black">{name}</div>
                <div className={`mt-1 text-2xl font-black ${featured ? "text-[#C6F24E]" : "text-[#111113]"}`}>{price}</div>
                <p className={`mt-2 text-sm ${featured ? "text-[#9A9A92]" : "text-[#56564F]"}`}>{copy}</p>
                <Link
                  href="/prijzen"
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-all ${featured ? "bg-[#C6F24E] text-[#111113] hover:bg-[#DCF58A]" : "border border-[#E5E3DA] text-[#111113] hover:bg-[#F2F1EC]"}`}
                >
                  Bekijk mogelijkheden <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="font-mono-label text-xs text-[#9A9A92]">
              <span className="text-[#FB5B36] font-bold">06</span> · Veelgestelde vragen
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#111113]">
              Helder voordat je begint
            </h2>
            <p className="mt-4 leading-7 text-[#56564F]">
              Nog iets onduidelijk? In de app leggen we iedere AI-stap begrijpelijk uit.
            </p>
          </div>
          <div className="divide-y divide-[#E5E3DA] border-y border-[#E5E3DA]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#111113]">
                  {question}
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#E5E3DA] text-xl font-light text-[#FB5B36] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-8 text-sm leading-6 text-[#56564F]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="px-4 pb-24">
        <div className="container-shell overflow-hidden rounded-3xl bg-[#111113] px-6 py-16 sm:px-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-[#9A9A92]">
              <span className="size-1.5 rounded-full bg-[#C6F24E]" />
              Gratis beginnen
            </div>
            <h2 className="mt-6 text-balance text-3xl font-black tracking-[-0.04em] text-[#F2F1EC] sm:text-4xl">
              Klaar om slimmer aan je sollicitatie te werken?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#9A9A92]">
              Maak gratis je eerste cv. Je hebt geen creditcard nodig.
            </p>
            <Button asChild size="lg" className="mt-8 bg-[#C6F24E] text-[#111113] hover:bg-[#DCF58A] rounded-lg text-[15px] font-black px-8 py-4 h-auto">
              <Link href="/registreren">Start gratis <ArrowRight className="size-4" /></Link>
            </Button>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-[#56564F]">
              {["Geen creditcard", "Direct aan de slag", "Made in NL"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <Check className="size-3.5 text-[#C6F24E]" />{t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
