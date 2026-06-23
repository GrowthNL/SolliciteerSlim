import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Shield, Globe, Users, ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { NumberTicker } from "@/components/magic/number-ticker";
import { Testimonials } from "@/components/magic/testimonials";

export const metadata: Metadata = {
  title: "Over ons | CVmaken.nu, Gebouwd voor de Nederlandse arbeidsmarkt",
  description:
    "CVmaken.nu is een Nederlands AI-cv-bouwer die gebouwd is voor de Nederlandse arbeidsmarkt. Direct, eerlijk, ATS-proof, zonder poespas.",
};

const stats = [
  {
    label: "Made in 🇳🇱",
    sub: "Voor de Nederlandse markt",
  },
  {
    label: (
      <>
        <NumberTicker value={3} /> templates
      </>
    ),
    sub: "Modern, Klassiek, Minimaal",
  },
  {
    label: "AI-powered",
    sub: "Aangedreven door GPT-4o",
  },
  {
    label: "Gratis starten",
    sub: "Geen creditcard nodig",
  },
];

const values = [
  {
    icon: Heart,
    title: "Eerlijkheid boven alles",
    description:
      "Wij schrijven geen tekst voor je. AI verbetert en verfijnt jóúw woorden, de inhoud blijft authentiek en herkenbaar als van jou. Geen generieke bullshit die recruiters in één oogopslag doorzien.",
    accent: "bg-[#FFE3DA]",
    iconColor: "text-[#FB5B36]",
  },
  {
    icon: Shield,
    title: "Privacy-first",
    description:
      "Jouw cv-data is van jou. We verkopen geen gegevens aan derden, er zijn geen advertentienetwerken, en alles wordt veilig opgeslagen. Punt.",
    accent: "bg-[#EDF7C6]",
    iconColor: "text-[#111113]",
  },
  {
    icon: Globe,
    title: "Nederlands door en door",
    description:
      "Gebouwd voor de Nederlandse arbeidsmarkt. Nederlandse ATS-normen, Nederlandse sectornamen, Nederlandse datumnotaties, niet een vertaalde Amerikaanse tool.",
    accent: "bg-[#EDF7C6]",
    iconColor: "text-[#111113]",
  },
  {
    icon: Users,
    title: "Toegankelijk voor iedereen",
    description:
      "Er blijft altijd een gratis laag bestaan. Een goed cv mag geen luxe zijn die voorbehouden is aan mensen die toevallig de juiste software kunnen betalen.",
    accent: "bg-[#FFE3DA]",
    iconColor: "text-[#FB5B36]",
  },
];

export default function OverOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E5E3DA] py-20 sm:py-28">
        <div className="grid-fade absolute inset-0" />
        <div className="container-shell relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
            <span className="size-2 rounded-full bg-[#FB5B36]" />
            Over ons
          </div>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.04em] text-[#111113] sm:text-5xl lg:text-6xl">
            Wij geloven dat een goed cv{" "}
            <span className="bg-[#C6F24E] px-[0.1em] rounded-[4px]">geen luxe</span>{" "}
            mag zijn
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#56564F]">
            CVmaken.nu is gebouwd voor de Nederlandse arbeidsmarkt. Direct, eerlijk, geen
            gedoe. Resultaten die ATS-filters passeren en bij echte recruiters belanden.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#111113]">
        <div className="container-shell">
          <div className="grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
            {stats.map(({ label, sub }, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="px-6 py-10 text-center sm:px-10">
                  <div className="text-xl font-black text-[#F2F1EC] sm:text-2xl">{label}</div>
                  <div className="mt-1.5 text-sm text-[#9A9A92]">{sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom we dit hebben gebouwd */}
      <section className="py-20 sm:py-24">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
              <span className="size-1.5 rounded-full bg-[#C6F24E]" />
              Het verhaal
            </div>
            <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.03em] text-[#111113] sm:text-4xl">
              Waarom we dit hebben gebouwd
            </h2>
            <div className="mt-6 space-y-4 leading-7 text-[#56564F]">
              <p>
                Te veel mensen verliezen hun droombaan niet omdat ze slechte ervaring hebben,
                maar omdat hun cv er niet doorheen komt. Een slecht opgemaakt bestand, de
                verkeerde sectieopbouw, en een ATS-systeem gooit je weg nog voordat een
                recruiter je naam heeft gelezen.
              </p>
              <p>
                De bestaande tools zijn ofwel peperduur, ofwel ontworpen voor de Amerikaanse
                of Britse markt. Wij wilden iets anders: een tool die de Nederlandse normen
                kent, de juiste ATS-structuren begrijpt, en toegankelijk is voor iedereen,
                van recent afgestudeerde tot dertigjarige professional.
              </p>
              <p>
                Geen abonnement verplicht om te starten. Geen vage beloftes. Gewoon een
                gereedschap dat doet wat het zegt.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "ATS-proof structuur",
                "Nederlandse normen",
                "AI die jouw stem behoudt",
              ].map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E3DA] bg-[#F8F8F6] px-3.5 py-1.5 text-sm font-medium text-[#56564F]"
                >
                  <Check className="size-3.5 text-[#C6F24E]" />
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Visual mockup card */}
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-[#111113]">
            <div className="border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#FB5B36]" />
                <span className="text-[11px] font-semibold tracking-wide text-[#9A9A92]">
                  Echte feedback van gebruikers
                </span>
              </div>
            </div>
            <div className="space-y-5 p-6">
              <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
                <p className="text-sm leading-6 text-[#F2F1EC]">
                  &ldquo;Mijn vorige cv werd nooit teruggebeld. Na CVmaken.nu had ik binnen
                  twee weken drie gesprekken gepland.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#C6F24E] text-xs font-black text-[#111113]">
                    L
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#F2F1EC]">Laura, 27</div>
                    <div className="text-[11px] text-[#9A9A92]">Junior UX Designer · Amsterdam</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
                <p className="text-sm leading-6 text-[#F2F1EC]">
                  &ldquo;Eindelijk een tool die begrijpt hoe Nederlandse recruiters denken.
                  Geen vertaalde Engelse sjablonen, gewoon wat hier werkt.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#FB5B36] text-xs font-black text-white">
                    R
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#F2F1EC]">Ravi, 34</div>
                    <div className="text-[11px] text-[#9A9A92]">Projectmanager · Utrecht</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze waarden */}
      <section className="border-y border-[#E5E3DA] bg-[#F8F8F6] py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
              <span className="size-1.5 rounded-full bg-[#C6F24E]" />
              Principes
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-[#111113] sm:text-4xl">
              Onze waarden
            </h2>
            <p className="mt-4 leading-7 text-[#56564F]">
              Geen missiestatement op een kantoorposter. Dit zijn de concrete keuzes die we
              elke dag maken bij het bouwen van CVmaken.nu.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description, accent, iconColor }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-[#E5E3DA] bg-white p-6">
                  <div className={`flex size-11 items-center justify-center rounded-xl ${accent}`}>
                    <Icon className={`size-5 ${iconColor}`} />
                  </div>
                  <h3 className="mt-5 font-black text-[#111113]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#56564F]">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <Testimonials />

      {/* Large centered quote */}
      <section className="bg-[#F2F1EC] py-20 sm:py-28">
        <div className="container-shell mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="text-[#9A9A92]">
              <svg
                className="mx-auto mb-6 size-10 opacity-50"
                viewBox="0 0 40 40"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 28c0-5.523 4.477-10 10-10V8C9.163 8 0 17.163 0 28v4h10v-4zm20 0c0-5.523 4.477-10 10-10V8c-10.837 0-20 9.163-20 20v4h10v-4z" />
              </svg>
            </div>
            <blockquote className="text-balance text-2xl font-black tracking-[-0.03em] text-[#111113] sm:text-3xl lg:text-4xl">
              Elk cv dat door de ATS-filter glipt en bij een recruiter belandt, is er één meer.
            </blockquote>
            <p className="mt-6 text-[#56564F]">
              Dat is waar we elke dag aan werken.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Klein team */}
      <section className="py-20 sm:py-24">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
              <span className="size-1.5 rounded-full bg-[#FB5B36]" />
              Het team
            </div>
            <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.03em] text-[#111113] sm:text-4xl">
              We zijn nog klein,{" "}
              <span className="text-[#FB5B36]">en dat is juist goed</span>
            </h2>
            <div className="mt-6 space-y-4 leading-7 text-[#56564F]">
              <p>
                CVmaken.nu is geen platform dat probeert iedereen ter wereld te bedienen.
                We zijn een klein, gefocust team met een obsessie voor de Nederlandse
                cv-markt. Dat betekent dat elke functie, elk template, elke AI-suggestie
                afgestemd is op wat hier daadwerkelijk werkt.
              </p>
              <p>
                Kleine teams bewegen snel, luisteren scherp naar gebruikers, en kunnen
                keuzes maken die een groot bedrijf nooit zou durven. Als iets niet klopt,
                horen we het en passen we het aan, zonder drie vergaderen en een
                kwartaalplan.
              </p>
              <p>
                We bouwen CVmaken.nu omdat we het zelf hadden willen hebben. Dat is de
                simpelste en eerlijkste motivatie die er bestaat.
              </p>
            </div>
          </div>

          {/* Focus card */}
          <div className="mx-auto w-full max-w-md rounded-3xl border border-[#E5E3DA] bg-[#F8F8F6] p-8">
            <h3 className="font-black text-[#111113]">Waar we ons op richten</h3>
            <ul className="mt-6 space-y-4">
              {[
                {
                  title: "Nederlandse ATS-systemen",
                  desc: "Wij testen tegen de software die grote Nederlandse werkgevers en uitzendbureaus gebruiken.",
                },
                {
                  title: "Nederlandse cv-normen",
                  desc: "Geen foto verplicht, geen geboortedatum standaard, geen Engels jargon dat hier vreemd overkomt.",
                },
                {
                  title: "Gebruikersfeedback",
                  desc: "Elke nieuwe functie is gebaseerd op wat echte gebruikers ons vertellen, niet op wat internationaal trending is.",
                },
              ].map(({ title, desc }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#C6F24E]">
                    <Check className="size-3 text-[#111113]" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-[#111113]">{title}</div>
                    <div className="mt-0.5 text-sm leading-6 text-[#56564F]">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:pb-28">
        <div className="container-shell overflow-hidden rounded-3xl bg-[#111113] px-6 py-16 sm:px-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-[#9A9A92]">
              <span className="size-1.5 rounded-full bg-[#C6F24E]" />
              Gratis beginnen
            </div>
            <h2 className="mt-6 text-balance text-3xl font-black tracking-[-0.04em] text-[#F2F1EC] sm:text-4xl">
              Ervaar het zelf, gratis beginnen
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[#9A9A92]">
              Bouw je eerste cv gratis. Geen creditcard, geen proefperiode die afloopt,
              geen verborgen kosten. Gewoon kijken of het voor jou werkt.
            </p>
            <Link
              href="/registreren"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#C6F24E] px-8 py-4 text-[15px] font-black text-[#111113] transition-colors hover:bg-[#DCF58A]"
            >
              Gratis starten <ArrowRight className="size-4" />
            </Link>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#56564F]">
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
