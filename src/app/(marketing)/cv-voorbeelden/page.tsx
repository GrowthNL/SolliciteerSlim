import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  BookOpen,
  Briefcase,
  Code2,
  Heart,
  Package,
  Pencil,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CV-voorbeelden per beroep",
  description:
    "Bekijk cv-voorbeelden voor tientallen beroepen: van software engineer tot verpleegkundige. Gebruik ze als inspiratie en maak jouw eigen cv in CVmaken.nu.",
};

const professions = [
  {
    icon: Code2,
    title: "Software Engineer",
    sector: "Tech",
    sections: ["Profiel", "Werkervaring", "Projecten", "Vaardigheden", "Opleiding"],
    tip: "Zet vaardigheden en programmeertalen hoog — recruiters scannen hier als eerste op.",
  },
  {
    icon: BarChart2,
    title: "Marketing Manager",
    sector: "Marketing",
    sections: ["Profiel", "Werkervaring", "Vaardigheden", "Certificaten", "Opleiding"],
    tip: "Kwantificeer alles: '€200k budget beheerd', 'CTR verhoogd met 40%'.",
  },
  {
    icon: Heart,
    title: "Verpleegkundige",
    sector: "Zorg",
    sections: ["Profiel", "Werkervaring", "Opleiding", "Certificaten", "Talen"],
    tip: "Vermeld je BIG-registratienummer en relevante bijscholingen prominent.",
  },
  {
    icon: BookOpen,
    title: "Leraar",
    sector: "Onderwijs",
    sections: ["Profiel", "Werkervaring", "Opleiding", "Bevoegdheden", "Interesses"],
    tip: "Vermeld je lesbevoegdheid per vak en de onderwijsniveaus (vmbo, havo, vwo).",
  },
  {
    icon: Briefcase,
    title: "Accountant",
    sector: "Finance",
    sections: ["Profiel", "Werkervaring", "Opleiding", "Vaardigheden", "Lidmaatschappen"],
    tip: "Noem de fiscale en boekhoudpakketten die je beheerst (SAP, Exact, Twinfield).",
  },
  {
    icon: Users,
    title: "Projectmanager",
    sector: "Consultancy",
    sections: ["Profiel", "Werkervaring", "Certificaten", "Vaardigheden", "Opleiding"],
    tip: "Noem je PRINCE2/PMP-certificering en geef projectomvang (budget, teamgrootte).",
  },
  {
    icon: Pencil,
    title: "Grafisch Designer",
    sector: "Creatief",
    sections: ["Profiel", "Werkervaring", "Vaardigheden", "Portfolio", "Opleiding"],
    tip: "Link naar je online portfolio. Houd het cv clean — laat het werk spreken.",
  },
  {
    icon: Package,
    title: "Logistiek Medewerker",
    sector: "Logistiek",
    sections: ["Profiel", "Werkervaring", "Vaardigheden", "Certificaten", "Opleiding"],
    tip: "Vermeld certificaten (VCA, heftruckcertificaat) en WMS-systemen bovenaan.",
  },
];

export default function CvVoorbeeldenPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#E5E3DA] py-20 sm:py-28">
        <div className="container-shell text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
            <span className="size-2 rounded-full bg-[#FB5B36]" />
            CV-voorbeelden per beroep
          </div>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.04em] text-[#111113] sm:text-5xl">
            Het juiste cv voor{" "}
            <span className="bg-[#C6F24E] px-[0.1em] rounded-[4px]">jouw beroep</span>
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

      <section className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {professions.map(({ icon: Icon, title, sector, sections, tip }) => (
              <div key={title} className="flex flex-col rounded-2xl border border-[#E5E3DA] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#111113]/5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#EDF7C6] text-[#111113]">
                  <Icon className="size-5" />
                </span>
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-[#F2F1EC] px-2.5 py-0.5 text-[10px] font-semibold text-[#56564F]">
                    {sector}
                  </span>
                  <div className="mt-2 text-lg font-black text-[#111113]">{title}</div>
                </div>
                <div className="mt-4 flex-1">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#9A9A92]">Secties in dit cv</p>
                  <div className="flex flex-wrap gap-1.5">
                    {sections.map((s) => (
                      <span key={s} className="rounded-full border border-[#E5E3DA] px-2.5 py-0.5 text-xs font-medium text-[#56564F]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 rounded-xl border-l-2 border-[#FB5B36] bg-[#FFE3DA] px-3 py-2.5">
                  <p className="text-xs font-bold text-[#111113]">Recruiter-tip</p>
                  <p className="mt-1 text-xs leading-5 text-[#56564F]">{tip}</p>
                </div>
                <Link
                  href="/registreren"
                  className="mt-4 flex items-center justify-center gap-1.5 rounded-lg border border-[#E5E3DA] px-4 py-2 text-xs font-bold text-[#111113] transition-all hover:bg-[#111113] hover:text-[#F2F1EC]"
                >
                  Gebruik als basis <ArrowRight className="size-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111113] py-20 sm:py-24">
        <div className="container-shell max-w-4xl text-center">
          <p className="font-mono-label text-xs text-[#9A9A92]">
            <span className="font-bold text-[#C6F24E]">Recruiter-inzichten</span> — Wat elke recruiter wil zien
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#F2F1EC]">
            De drie regels van een sterk cv
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              { num: "01", title: "Maximaal 2 pagina's", desc: "Meer dan 2 pagina's wordt zelden volledig gelezen. Wees selectief en to the point." },
              { num: "02", title: "Concrete resultaten", desc: "Niet 'verantwoordelijk voor marketing', maar 'omzet verhoogd met 23% via gerichte campagne'." },
              { num: "03", title: "Afgestemd op de vacature", desc: "Een generiek cv verliest het van een specifiek cv. Pas taal en prioriteiten aan per functie." },
            ].map(({ num, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[.04] p-6 text-left">
                <span className="font-mono-label text-2xl font-black text-[#C6F24E]">{num}</span>
                <p className="mt-3 font-bold text-[#F2F1EC]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[#9A9A92]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
