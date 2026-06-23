import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/features/blog/posts";
import { ArticleContent } from "@/components/blog/article-content";
import { CategoryBadge } from "@/components/blog/category-badge";
import { JsonLd } from "@/components/seo/json-ld";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cvmaken.nu";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artikel niet gevonden" };

  const url = `${BASE}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: [post.author],
      locale: "nl_NL",
      siteName: "CVmaken.nu",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const url = `${BASE}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "nl-NL",
    keywords: post.keywords.join(", "),
    articleSection: post.categories,
    author: { "@type": "Organization", name: post.author, url: BASE },
    publisher: {
      "@type": "Organization",
      name: "CVmaken.nu",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/logo-dark.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqJsonLd = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={faqJsonLd ? [articleJsonLd, breadcrumbJsonLd, faqJsonLd] : [articleJsonLd, breadcrumbJsonLd]} />

      <article className="py-14 sm:py-16">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-[#9A9A92]" aria-label="Kruimelpad">
              <Link href="/" className="transition-colors hover:text-[#111113]">Home</Link>
              <span>/</span>
              <Link href="/blog" className="transition-colors hover:text-[#111113]">Blog</Link>
            </nav>

            {/* Header */}
            <header className="mt-5">
              <div className="flex flex-wrap gap-2">
                {post.categories.map((cat) => (
                  <CategoryBadge key={cat} category={cat} />
                ))}
              </div>
              <h1 className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-[-0.03em] text-[#111113] sm:text-4xl">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#9A9A92]">
                <span className="font-semibold text-[#56564F]">{post.author}</span>
                <span className="text-[#DDDBD1]">·</span>
                <span>{post.dateLabel}</span>
                <span className="text-[#DDDBD1]">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {post.readTime} leestijd
                </span>
              </div>
            </header>

            {/* Lead / description */}
            <p className="mt-7 border-l-[3px] border-[#FB5B36] pl-4 text-lg font-medium leading-7 text-[#111113]">
              {post.excerpt}
            </p>

            {/* Body */}
            <div className="mt-8">
              <ArticleContent blocks={post.content} />
            </div>

            {/* FAQ */}
            {post.faq && post.faq.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-black tracking-[-0.02em] text-[#111113]">
                  Veelgestelde vragen
                </h2>
                <div className="mt-5 divide-y divide-[#E5E3DA] border-y border-[#E5E3DA]">
                  {post.faq.map(({ q, a }) => (
                    <details key={q} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#111113]">
                        {q}
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#E5E3DA] text-xl font-light text-[#FB5B36] transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 pr-8 text-sm leading-6 text-[#56564F]">{a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Inline CTA */}
            <div className="mt-12 overflow-hidden rounded-3xl bg-[#111113] p-8 text-center sm:p-10">
              <h2 className="text-balance text-2xl font-black tracking-[-0.02em] text-[#F2F1EC]">
                Zet deze tips meteen in de praktijk
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#9A9A92]">
                Bouw gratis een ATS-proof cv met CVmaken.nu. AI helpt je bij elke sectie, jij houdt de controle.
              </p>
              <Link
                href="/registreren"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#C6F24E] px-6 py-3 text-sm font-black text-[#111113] transition-colors hover:bg-[#DCF58A]"
              >
                Gratis cv maken <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Back link */}
            <div className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#56564F] transition-colors hover:text-[#111113]"
              >
                <ArrowLeft className="size-4" /> Terug naar alle artikelen
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-t border-[#E5E3DA] bg-[#F8F8F6] py-16">
          <div className="container-shell">
            <h2 className="text-2xl font-black tracking-[-0.02em] text-[#111113]">Lees ook</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <article
                  key={r.slug}
                  className="flex flex-col rounded-2xl border border-[#E5E3DA] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#C6F24E] hover:shadow-lg hover:shadow-[#111113]/5"
                >
                  <div className="flex flex-wrap gap-1.5">
                    {r.categories.map((cat) => (
                      <CategoryBadge key={cat} category={cat} />
                    ))}
                  </div>
                  <h3 className="mt-3 text-base font-bold leading-snug text-[#111113]">
                    <Link href={`/blog/${r.slug}`} className="transition-colors hover:text-[#FB5B36]">
                      {r.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-[#56564F]">{r.excerpt}</p>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="mt-4 flex items-center gap-1 text-sm font-bold text-[#111113] transition-colors hover:text-[#FB5B36]"
                  >
                    Lees meer <ArrowRight className="size-3.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
