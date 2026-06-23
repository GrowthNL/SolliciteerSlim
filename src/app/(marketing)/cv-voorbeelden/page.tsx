import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { TrustBar } from "@/components/magic/trust-bar";
import { CvExamplesGrid } from "@/components/marketing/cv-examples-grid";

export const metadata: Metadata = {
  title: "CV-voorbeelden per beroep, 24 beroepen",
  description:
    "Bekijk cv-voorbeelden voor 24 beroepen: van software engineer tot verpleegkundige. Filter op sector en gebruik ze als basis voor jouw eigen cv in CVmaken.nu.",
  alternates: { canonical: "/cv-voorbeelden" },
};

export default function CvVoorbeeldenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E5E3DA] py-20 sm:py-28">
        <div className="container-shell text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
            <span className="size-2 rounded-full bg-[#FB5B36]" />
            24 beroepen, direct te gebruiken
          </div>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.04em] text-[#111113] sm:text-5xl">
            Het juiste cv voor{" "}
            <span className="rounded-[4px] bg-[#C6F24E] px-[0.1em]">jouw beroep</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#56564F]">
            Elke functie heeft andere accenten. Bekijk wat recruiters in jouw vakgebied verwachten en
            gebruik onze voorbeelden als startpunt voor je eigen cv.
          </p>
          <Link
            href="/registreren"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#111113] px-6 py-3 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C]"
          >
            Maak mijn cv <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <TrustBar />

      {/* Grid section */}
      <section className="py-20 sm:py-24">
        <div className="container-shell">
          {/* Editorial note */}
          <div className="mx-auto mb-12 max-w-2xl rounded-2xl border border-[#E5E3DA] bg-[#F2F1EC] px-6 py-5">
            <p className="text-sm font-bold text-[#111113]">
              Zijn voorbeelden slim als startpunt?
            </p>
            <p className="mt-2 text-sm leading-6 text-[#56564F]">
              Ja, en dat is geen toeval. Zien hoe een sterk cv eruitziet in jouw vakgebied geeft
              direct houvast: je weet welke secties recruiters verwachten, welke toon werkt en waar
              je je kunt onderscheiden. Dat scheelt je uren zoeken en gokken. Kies hieronder het
              voorbeeld dat het dichtst bij jouw situatie ligt en gebruik het als basis.
            </p>
          </div>

          <CvExamplesGrid />
        </div>
      </section>

      {/* Three rules dark section */}
      <section className="bg-[#111113] py-20 sm:py-24">
        <div className="container-shell max-w-4xl text-center">
          <p className="font-mono-label text-xs text-[#9A9A92]">
            <span className="font-bold text-[#C6F24E]">Recruiter-inzichten</span> · Wat elke recruiter wil zien
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#F2F1EC]">
            De drie regels van een sterk cv
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                num: "01",
                title: "Maximaal 2 pagina's",
                desc: "Meer dan 2 pagina's wordt zelden volledig gelezen. Wees selectief en to the point.",
              },
              {
                num: "02",
                title: "Concrete resultaten",
                desc: "Niet 'verantwoordelijk voor marketing', maar 'omzet verhoogd met 23% via gerichte campagne'.",
              },
              {
                num: "03",
                title: "Afgestemd op de vacature",
                desc: "Een generiek cv verliest het van een specifiek cv. Pas taal en prioriteiten aan per functie.",
              },
            ].map(({ num, title, desc }, i) => (
              <Reveal key={title} delay={i * 100} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[.04] p-6 text-left">
                  <span className="font-mono-label text-2xl font-black text-[#C6F24E]">{num}</span>
                  <p className="mt-3 font-bold text-[#F2F1EC]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#9A9A92]">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="px-4 py-20">
        <div className="container-shell overflow-hidden rounded-3xl bg-[#111113] px-6 py-16 sm:px-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-black tracking-[-0.04em] text-[#F2F1EC] sm:text-4xl">
              Klaar om je eigen cv te maken?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#9A9A92]">
              Kies je beroep, volg de stappen en download je cv als PDF. Gratis, zonder creditcard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/registreren"
                className="inline-flex items-center gap-2 rounded-lg bg-[#C6F24E] px-7 py-3.5 text-[15px] font-black text-[#111113] transition-colors hover:bg-[#DCF58A]"
              >
                Start gratis <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/cv-templates"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-7 py-3.5 text-[15px] font-semibold text-[#F2F1EC] transition-colors hover:bg-white/5"
              >
                Bekijk templates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
