import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Sparkles } from "lucide-react";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/features/blog/posts";
import { headingId } from "@/features/blog/types";
import { ArticleContent } from "@/components/blog/article-content";
import { CategoryBadge } from "@/components/blog/category-badge";
import { BlogCover } from "@/components/blog/blog-cover";
import { BlogToc } from "@/components/blog/blog-toc";
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
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
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
  const headings = post.content
    .filter((b): b is { type: "h2"; text: string } => b.type === "h2")
    .map((b) => ({ id: headingId(b.text), text: b.text }));

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

      <article className="py-12 sm:py-16">
        <div className="container-shell">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-[#9A9A92]" aria-label="Kruimelpad">
            <Link href="/" className="transition-colors hover:text-[#111113]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="transition-colors hover:text-[#111113]">Blog</Link>
          </nav>

          {/* Header */}
          <header className="mx-auto mt-6 max-w-3xl text-center">
            <div className="flex flex-wrap justify-center gap-2">
              {post.categories.map((cat) => (
                <CategoryBadge key={cat} category={cat} />
              ))}
            </div>
            <h1 className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-[-0.03em] text-[#111113] sm:text-[42px]">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-[#9A9A92]">
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

          {/* Featured cover, aligned with the content + sidebar width below */}
          <div className="mx-auto mt-8 max-w-5xl">
            <BlogCover category={post.categories[0]} title={post.title} size="hero" className="h-60 rounded-3xl sm:h-80" />
          </div>

          {/* Two-column: content + sidebar */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="min-w-0 max-w-2xl">
              {/* Lead */}
              <p className="border-l-[3px] border-[#FB5B36] pl-4 text-lg font-medium leading-7 text-[#111113]">
                {post.excerpt}
              </p>

              {/* TL;DR */}
              {post.tldr && post.tldr.length > 0 && (
                <div className="mt-7 rounded-2xl border border-[#C6F24E] bg-[#F8FCE8] p-5">
                  <p className="flex items-center gap-2 font-mono-label text-[11px] text-[#111113]">
                    <Sparkles className="size-3.5 text-[#FB5B36]" /> In het kort
                  </p>
                  <ul className="mt-3 space-y-2">
                    {post.tldr.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-6 text-[#2E2E2C]">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#FB5B36]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Body */}
              <div className="mt-8">
                <ArticleContent blocks={post.content} />
              </div>

              {/* FAQ */}
              {post.faq && post.faq.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-2xl font-black tracking-[-0.02em] text-[#111113]">Veelgestelde vragen</h2>
                  <div className="mt-5 divide-y divide-[#E5E3DA] border-y border-[#E5E3DA]">
                    {post.faq.map(({ q, a }) => (
                      <details key={q} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#111113]">
                          {q}
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#E5E3DA] text-xl font-light text-[#FB5B36] transition-transform group-open:rotate-45">+</span>
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
                <Link href="/registreren" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#C6F24E] px-6 py-3 text-sm font-black text-[#111113] transition-colors hover:bg-[#DCF58A]">
                  Gratis cv maken <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-10">
                <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#56564F] transition-colors hover:text-[#111113]">
                  <ArrowLeft className="size-4" /> Terug naar alle artikelen
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <BlogToc headings={headings} />
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
                <article key={r.slug} className="flex flex-col overflow-hidden rounded-2xl border border-[#E5E3DA] bg-white transition-all hover:-translate-y-0.5 hover:border-[#C6F24E] hover:shadow-lg hover:shadow-[#111113]/5">
                  <BlogCover category={r.categories[0]} title={r.title} className="h-32" />
                  <div className="flex flex-1 flex-col p-6">
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
                    <Link href={`/blog/${r.slug}`} className="mt-4 flex items-center gap-1 text-sm font-bold text-[#111113] transition-colors hover:text-[#FB5B36]">
                      Lees meer <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
