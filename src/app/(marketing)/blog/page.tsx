import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Mail } from "lucide-react";
import { getAllPosts, getFeaturedPost } from "@/features/blog/posts";
import { BlogIndex } from "@/components/blog/blog-index";
import { CategoryBadge } from "@/components/blog/category-badge";
import { JsonLd } from "@/components/seo/json-ld";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cvmaken.nu";

export const metadata: Metadata = {
  title: "Blog | CVmaken.nu, tips voor je sollicitatie",
  description:
    "Praktische tips over cv's schrijven, ATS-systemen, sollicitatiegesprekken en AI in je sollicitatie. Voor Nederlandse werkzoekenden.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = getFeaturedPost();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CVmaken.nu Blog",
    description:
      "Praktische tips over cv's schrijven, ATS-systemen, sollicitatiegesprekken en AI in je sollicitatie.",
    url: `${BASE}/blog`,
    inLanguage: "nl-NL",
    publisher: {
      "@type": "Organization",
      name: "CVmaken.nu",
      url: BASE,
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `${BASE}/blog/${p.slug}`,
      author: { "@type": "Organization", name: p.author },
    })),
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E5E3DA] py-20 sm:py-24">
        <div className="dot-fade absolute inset-0" />
        <div className="container-shell relative">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
              <span className="size-2 rounded-full bg-[#FB5B36]" />
              Sollicitatietips
            </div>
            <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.04em] text-[#111113] sm:text-5xl">
              Tips voor een{" "}
              <span className="rounded-[4px] bg-[#C6F24E] px-[0.1em]">slimmere</span> sollicitatie
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#56564F]">
              Praktische artikelen over cv&apos;s schrijven, ATS-systemen, sollicitatiegesprekken en
              verantwoord gebruik van AI. Gericht op de Nederlandse arbeidsmarkt.
            </p>
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-14 sm:py-16">
        <div className="container-shell">
          <p className="mb-6 font-mono-label text-xs text-[#9A9A92]">
            <span className="font-bold text-[#FB5B36]">Uitgelicht</span> · Meest gelezen
          </p>
          <article className="overflow-hidden rounded-3xl border border-[#E5E3DA] bg-white lg:grid lg:grid-cols-[3fr_2fr]">
            <div className="p-7 sm:p-10">
              <div className="flex flex-wrap gap-2">
                {featured.categories.map((cat) => (
                  <CategoryBadge key={cat} category={cat} />
                ))}
              </div>
              <h2 className="mt-4 text-2xl font-black leading-snug tracking-[-0.02em] text-[#111113] sm:text-3xl">
                <Link href={`/blog/${featured.slug}`} className="transition-colors hover:text-[#FB5B36]">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-3 text-base leading-7 text-[#56564F]">{featured.excerpt}</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#9A9A92]">
                <span>{featured.dateLabel}</span>
                <span className="text-[#DDDBD1]">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {featured.readTime} leestijd
                </span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#111113] px-5 py-3 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C]"
              >
                Lees artikel <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="hidden items-center justify-center bg-[#111113] p-8 lg:flex">
              <div className="w-full max-w-xs space-y-3 rounded-2xl bg-white/[.06] p-6">
                <div className="h-2 w-3/4 rounded bg-[#C6F24E]/70" />
                <div className="h-1.5 w-full rounded bg-white/20" />
                <div className="h-1.5 w-5/6 rounded bg-white/20" />
                <div className="my-3 h-px w-full bg-white/10" />
                {[0, 1, 2].map((i) => (
                  <div key={`x-${i}`} className="flex items-center gap-2">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FB5B36]/80 text-[10px] font-bold text-white">
                      ✕
                    </div>
                    <div className="h-1.5 rounded bg-white/25" style={{ width: `${60 + i * 12}%` }} />
                  </div>
                ))}
                <div className="my-1 h-px w-full bg-white/10" />
                {[0, 1, 2].map((i) => (
                  <div key={`v-${i}`} className="flex items-center gap-2">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#C6F24E] text-[10px] font-bold text-[#111113]">
                      ✓
                    </div>
                    <div className="h-1.5 rounded bg-white/35" style={{ width: `${55 + i * 14}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Searchable article grid */}
      <section className="pb-16 sm:pb-20">
        <div className="container-shell">
          <p className="mb-6 font-mono-label text-xs text-[#9A9A92]">
            <span className="font-bold text-[#FB5B36]">Alle artikelen</span> · Zoek en filter
          </p>
          <BlogIndex posts={posts} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-[#E5E3DA] bg-[#F8F8F6] py-16 sm:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-xl text-center">
            <div className="inline-flex size-12 items-center justify-center rounded-xl bg-[#EDF7C6]">
              <Mail className="size-5 text-[#111113]" />
            </div>
            <h2 className="mt-5 text-2xl font-black tracking-[-0.02em] text-[#111113] sm:text-3xl">
              Nieuwe artikelen direct in je inbox
            </h2>
            <p className="mt-3 text-[#56564F]">
              Maximaal twee e-mails per maand. Geen spam, geen reclame, alleen praktische tips voor
              je sollicitatie. Je kunt op elk moment uitschrijven.
            </p>
            <form action="/contact" className="mt-7 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="naam@email.nl"
                className="flex-1 rounded-xl border border-[#E5E3DA] bg-white px-4 py-3 text-sm text-[#111113] placeholder:text-[#9A9A92] focus:border-[#111113] focus:outline-none"
                aria-label="E-mailadres"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#111113] px-5 py-3 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C]"
              >
                Inschrijven <ArrowRight className="size-4" />
              </button>
            </form>
            <p className="mt-3 text-xs text-[#9A9A92]">
              Door je in te schrijven ga je akkoord met onze{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-[#56564F]">
                privacyverklaring
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:py-20">
        <div className="container-shell overflow-hidden rounded-3xl bg-[#111113] px-6 py-14 text-center sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black tracking-[-0.03em] text-[#F2F1EC] sm:text-4xl">
            Klaar om theorie in praktijk te brengen?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[#9A9A92]">
            Bouw vandaag nog een cv dat ATS-proof is én recruiters aanspreekt. Gratis, geen creditcard.
          </p>
          <Link
            href="/registreren"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#C6F24E] px-7 py-3.5 text-[15px] font-black text-[#111113] transition-colors hover:bg-[#DCF58A]"
          >
            Gratis cv maken <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
