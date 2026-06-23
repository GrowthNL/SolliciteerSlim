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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <section className="border-b border-slate-100 bg-[linear-gradient(135deg,#fbfcfa_50%,#edf8f1)] py-20 sm:py-28">
        <div className="container-shell text-center">
          <Badge>CV-voorbeelden</Badge>
          <h1 className="font-display mt-5 text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Het juiste cv voor jouw beroep
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Elke functie heeft andere accenten. Bekijk wat recruiters in jouw vakgebied verwachten en
            gebruik onze voorbeelden als startpunt voor je eigen cv.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/registreren">
              Maak mijn cv <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {professions.map(({ icon: Icon, title, sector, sections, tip }) => (
              <Card key={title} className="flex flex-col">
                <CardHeader>
                  <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon className="size-5" />
                  </span>
                  <div className="mt-3">
                    <Badge className="mb-2 text-[10px]">{sector}</Badge>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Secties in dit cv</p>
                    <div className="flex flex-wrap gap-1.5">
                      {sections.map((s) => (
                        <span key={s} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-3">
                    <p className="text-xs font-semibold text-emerald-800">Recruiter-tip</p>
                    <p className="mt-1 text-xs leading-5 text-emerald-900/80">{tip}</p>
                  </div>
                  <Button asChild variant="secondary" size="sm" className="mt-auto">
                    <Link href="/registreren">
                      Gebruik als basis <ArrowRight className="size-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="container-shell max-w-4xl text-center text-white">
          <h2 className="font-display text-3xl font-bold">Wat elke recruiter wil zien</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              { title: "Maximaal 2 pagina's", desc: "Meer dan 2 pagina's wordt zelden volledig gelezen. Wees selectief." },
              { title: "Concrete resultaten", desc: "Niet 'verantwoordelijk voor marketing', maar 'omzet verhoogd met 23% via gerichte campagne'." },
              { title: "Afgestemd op de vacature", desc: "Een generiek cv verliest het van een specifiek cv. Pas aan per functie." },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-2xl bg-white/5 p-6 text-left">
                <p className="font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-20 sm:py-24">
        <div className="container-shell text-center">
          <h2 className="font-display text-3xl font-bold text-slate-950">
            Klaar om je eigen cv te maken?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Kies je beroep, volg de stappen en download je cv als PDF. Gratis, zonder creditcard.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/registreren">Start gratis <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/cv-templates">Bekijk templates</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
