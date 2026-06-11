import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Search, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog | SolliciteerSlim — Tips voor je sollicitatie",
  description:
    "Praktische tips over cv's schrijven, ATS-systemen, sollicitatiegesprekken en AI in je sollicitatie. Voor Nederlandse werkzoekenden.",
};

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  categories: string[];
}

const featuredArticle: Article = {
  slug: "meest-gemaakte-fouten-op-een-cv",
  title: "De 7 meest gemaakte fouten op een cv (en hoe je ze voorkomt)",
  excerpt:
    "Van een generiek profiel tot ontbrekende contactgegevens: de meeste cv-fouten zijn eenvoudig te vermijden als je weet waar je op moet letten. In dit artikel zetten we de zeven meest voorkomende fouten op een rij, inclusief concrete voorbeelden van hoe je het wél schrijft.",
  author: "SolliciteerSlim Team",
  date: "3 juni 2025",
  readTime: "5 min",
  categories: ["CV Tips", "ATS"],
};

const articles: Article[] = [
  {
    slug: "profiel-dat-recruiters-bijblijft",
    title: "Hoe schrijf je een profiel dat recruiters bijblijft?",
    excerpt:
      "Het profileringsvak bovenaan je cv is de enige plek waar je volledig in de ik-vorm mag spreken — en veel mensen verspillen die kans met clichés als 'resultaatgericht' en 'teamspeler'. Wij laten je zien hoe je in drie zinnen vertelt wie je bent, wat je kunt en waarom juist jij past bij de functie.",
    author: "SolliciteerSlim Team",
    date: "20 mei 2025",
    readTime: "4 min",
    categories: ["Profiel schrijven"],
  },
  {
    slug: "ats-uitgelegd-automatische-cv-filtering",
    title: "ATS uitgelegd: zo werkt automatische cv-filtering",
    excerpt:
      "Meer dan 70 procent van de grote werkgevers in Nederland filtert sollicitaties eerst via een Applicant Tracking System voordat een recruiter ernaar kijkt. Begrijpen hoe zo'n systeem werkt, is tegenwoordig net zo belangrijk als het schrijven van een goed cv.",
    author: "SolliciteerSlim Team",
    date: "12 mei 2025",
    readTime: "6 min",
    categories: ["ATS"],
  },
  {
    slug: "cv-zonder-werkervaring",
    title: "Van stage naar eerste baan: een cv zonder werkervaring",
    excerpt:
      "Geen werkervaring hebben betekent niet dat je niets te vertellen hebt. Bijbanen, studieopdrachten, vrijwilligerswerk en extracurriculaire activiteiten zijn allemaal bewijs van vaardigheden en inzet — je hoeft ze alleen op de juiste manier te presenteren.",
    author: "SolliciteerSlim Team",
    date: "5 mei 2025",
    readTime: "5 min",
    categories: ["Starters"],
  },
  {
    slug: "sollicitatiegesprek-10-vragen",
    title: "Sollicitatiegesprek: 10 vragen die je moet voorbereiden",
    excerpt:
      "De meeste sollicitatiegesprekken draaien om een handvol terugkerende vragen — maar toch komen kandidaten keer op keer onvoorbereid aan. Met deze tien vragen, inclusief uitleg over wat de interviewer écht wil weten, stap je een stuk zelfverzekerder de kamer in.",
    author: "SolliciteerSlim Team",
    date: "28 april 2025",
    readTime: "8 min",
    categories: ["Interview"],
  },
  {
    slug: "linkedin-vs-cv",
    title: "LinkedIn vs cv: wat schrijf je waar?",
    excerpt:
      "Veel sollicitanten kopiëren hun cv één-op-één naar LinkedIn — een gemiste kans. Je LinkedIn-profiel en je cv hebben elk een andere lezer en een ander doel, en de inhoud moet daarop worden afgestemd. We laten zien hoe je beide optimaal benut zonder jezelf te herhalen.",
    author: "SolliciteerSlim Team",
    date: "18 april 2025",
    readTime: "4 min",
    categories: ["LinkedIn"],
  },
];

const categoryColors: Record<string, string> = {
  "CV Tips": "bg-emerald-50 text-emerald-700 border-emerald-200",
  ATS: "bg-blue-50 text-blue-700 border-blue-200",
  "Profiel schrijven": "bg-violet-50 text-violet-700 border-violet-200",
  Starters: "bg-amber-50 text-amber-700 border-amber-200",
  Interview: "bg-rose-50 text-rose-700 border-rose-200",
  LinkedIn: "bg-sky-50 text-sky-700 border-sky-200",
};

function CategoryBadge({ category }: { category: string }) {
  const colorClass = categoryColors[category] ?? "bg-slate-50 text-slate-600 border-slate-200";
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${colorClass}`}>
      {category}
    </span>
  );
}

function ArticleMeta({ author, date, readTime }: { author: string; date: string; readTime: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
      <span>{author}</span>
      <span className="text-slate-300">·</span>
      <span>{date}</span>
      <span className="text-slate-300">·</span>
      <span className="flex items-center gap-1">
        <Clock className="size-3.5" />
        {readTime} leestijd
      </span>
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(135deg,#fbfcfa_45%,#edf8f1)] py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <Badge>Sollicitatietips</Badge>
            <h1 className="font-display mt-6 text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Tips voor een slimmere sollicitatie
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Praktische artikelen over cv&apos;s schrijven, ATS-systemen, sollicitatiegesprekken en
              verantwoord gebruik van AI. Gericht op de Nederlandse arbeidsmarkt.
            </p>
            {/* Static search bar */}
            <div className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <Search className="size-4 shrink-0 text-slate-400" />
              <span className="flex-1 text-sm text-slate-400">Zoek een artikel…</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-14 sm:py-16">
        <div className="container-shell">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-slate-500">Uitgelicht artikel</p>
          <Card className="overflow-hidden lg:grid lg:grid-cols-[3fr_2fr]">
            {/* Content */}
            <CardHeader className="p-7 sm:p-9">
              <div className="flex flex-wrap gap-2">
                {featuredArticle.categories.map((cat) => (
                  <CategoryBadge key={cat} category={cat} />
                ))}
              </div>
              <CardTitle className="mt-4 text-2xl leading-snug sm:text-3xl">
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="hover:text-emerald-700 transition-colors"
                >
                  {featuredArticle.title}
                </Link>
              </CardTitle>
              <CardDescription className="mt-3 text-base leading-7">
                {featuredArticle.excerpt}
              </CardDescription>
              <div className="mt-5">
                <ArticleMeta
                  author={featuredArticle.author}
                  date={featuredArticle.date}
                  readTime={featuredArticle.readTime}
                />
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link href={`/blog/${featuredArticle.slug}`}>
                    Lees artikel <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            {/* Decorative panel */}
            <div className="hidden items-center justify-center bg-emerald-700 p-8 lg:flex">
              <div className="w-full max-w-xs space-y-3 rounded-2xl bg-white/10 p-6">
                <div className="h-2 w-3/4 rounded bg-white/60" />
                <div className="h-1.5 w-full rounded bg-white/30" />
                <div className="h-1.5 w-5/6 rounded bg-white/30" />
                <div className="h-1.5 w-11/12 rounded bg-white/30" />
                <div className="my-3 h-px w-full bg-white/20" />
                {["Fout 1", "Fout 2", "Fout 3"].map((label, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-400/70 text-[10px] font-bold text-white">
                      ✕
                    </div>
                    <div className="h-1.5 rounded bg-white/40" style={{ width: `${60 + i * 12}%` }} />
                  </div>
                ))}
                <div className="my-1 h-px w-full bg-white/20" />
                {["Oplossing 1", "Oplossing 2", "Oplossing 3"].map((label, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-300/70 text-[10px] font-bold text-white">
                      ✓
                    </div>
                    <div className="h-1.5 rounded bg-white/50" style={{ width: `${55 + i * 14}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Article grid */}
      <section className="pb-16 sm:pb-20">
        <div className="container-shell">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-slate-500">Meer artikelen</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.slug} className="flex flex-col hover:border-emerald-200 transition-colors">
                <CardHeader className="flex-1 pb-3">
                  <div className="flex flex-wrap gap-1.5">
                    {article.categories.map((cat) => (
                      <CategoryBadge key={cat} category={cat} />
                    ))}
                  </div>
                  <CardTitle className="mt-3 text-lg leading-snug">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="hover:text-emerald-700 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm leading-6 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ArticleMeta
                    author={article.author}
                    date={article.date}
                    readTime={article.readTime}
                  />
                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-4 flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    Lees meer <ArrowRight className="size-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
            {/* Placeholder card: more coming */}
            <Card className="flex flex-col items-center justify-center border-dashed border-slate-200 bg-slate-50 py-10 text-center">
              <p className="text-sm font-semibold text-slate-500">Meer artikelen verschijnen binnenkort</p>
              <p className="mt-1 text-xs text-slate-400">
                Schrijf je in voor de nieuwsbrief om als eerste op de hoogte te zijn.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-xl text-center">
            <div className="inline-flex size-12 items-center justify-center rounded-xl bg-emerald-100">
              <Mail className="size-5 text-emerald-700" />
            </div>
            <h2 className="font-display mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Nieuwe artikelen direct in je inbox
            </h2>
            <p className="mt-3 text-slate-600">
              Maximaal twee e-mails per maand. Geen spam, geen reclame — alleen praktische tips voor
              je sollicitatie. Je kunt op elk moment uitschrijven.
            </p>
            {/* Static form — not functional yet */}
            <form
              action="#"
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="naam@email.nl"
                className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                aria-label="E-mailadres"
              />
              <Button type="submit" className="shrink-0">
                Inschrijven <ArrowRight className="size-4" />
              </Button>
            </form>
            <p className="mt-3 text-xs text-slate-400">
              Door je in te schrijven ga je akkoord met onze{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-slate-600">
                privacyverklaring
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:py-20">
        <div className="container-shell overflow-hidden rounded-3xl bg-emerald-800 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="font-display mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Klaar om theorie in praktijk te brengen?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-emerald-100">
            Bouw vandaag nog een cv dat ATS-proof is én recruiters aanspreekt. Gratis, geen creditcard.
          </p>
          <Button asChild className="mt-7 bg-white text-emerald-900 hover:bg-emerald-50" size="lg">
            <Link href="/registreren">
              Gratis cv maken <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
