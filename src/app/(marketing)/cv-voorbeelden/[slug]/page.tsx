import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Lightbulb } from "lucide-react";
import { getAllExamples, getExampleBySlug, getRelatedExamples } from "@/features/cv-examples/examples";
import { getEnrichment } from "@/features/cv-examples/enrichment";
import { ModernPreview } from "@/features/templates/modern-preview";
import { KlassiekPreview } from "@/features/templates/klassiek-preview";
import { MinimaalPreview } from "@/features/templates/minimaal-preview";
import { ClassicSidebarPreview } from "@/features/templates/classic-sidebar-preview";
import { ModernLinksPreview } from "@/features/templates/modern-links-preview";
import { HeaderBandPreview } from "@/features/templates/header-band-preview";
import { SchoonPreview } from "@/features/templates/schoon-preview";
import { SerifPreview } from "@/features/templates/serif-preview";
import { JsonLd } from "@/components/seo/json-ld";
import type { ResumeDocument } from "@/features/resumes/model";
import type { CvExample } from "@/features/cv-examples/types";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cvmaken.nu";

function Preview({ template, doc, accentColor }: { template: CvExample["template"]; doc: ResumeDocument; accentColor?: string }) {
  if (template === "klassiek") return <KlassiekPreview doc={doc} />;
  if (template === "minimaal") return <MinimaalPreview doc={doc} />;
  if (template === "classic-sidebar") return <ClassicSidebarPreview doc={doc} accentColor={accentColor} />;
  if (template === "modern-links") return <ModernLinksPreview doc={doc} accentColor={accentColor} />;
  if (template === "header-band") return <HeaderBandPreview doc={doc} accentColor={accentColor} />;
  if (template === "schoon") return <SchoonPreview doc={doc} accentColor={accentColor} />;
  if (template === "serif") return <SerifPreview doc={doc} accentColor={accentColor} />;
  return <ModernPreview doc={doc} />;
}

export function generateStaticParams() {
  return getAllExamples().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ex = getExampleBySlug(slug);
  if (!ex) return { title: "Voorbeeld niet gevonden" };
  return {
    title: ex.metaTitle,
    description: ex.metaDescription,
    keywords: ex.keywords,
    alternates: { canonical: `/cv-voorbeelden/${ex.slug}` },
    openGraph: {
      type: "article",
      title: ex.metaTitle,
      description: ex.metaDescription,
      url: `${BASE}/cv-voorbeelden/${ex.slug}`,
      locale: "nl_NL",
      siteName: "CVmaken.nu",
    },
  };
}

export default async function CvExamplePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ex = getExampleBySlug(slug);
  if (!ex) notFound();

  const related = getRelatedExamples(slug);
  const enrich = getEnrichment(slug);
  const allFaq = [...ex.faq, ...(enrich.faq ?? [])];
  const url = `${BASE}/cv-voorbeelden/${ex.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "CV-voorbeelden", item: `${BASE}/cv-voorbeelden` },
      { "@type": "ListItem", position: 3, name: ex.profession, item: url },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ex.metaTitle,
    description: ex.metaDescription,
    inLanguage: "nl-NL",
    keywords: ex.keywords.join(", "),
    author: { "@type": "Organization", name: "CVmaken.nu", url: BASE },
    publisher: { "@type": "Organization", name: "CVmaken.nu", url: BASE, logo: { "@type": "ImageObject", url: `${BASE}/logo-dark.svg` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };

  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd, faqJsonLd]} />

      <section className="border-b border-[#E5E3DA] py-12 sm:py-16">
        <div className="container-shell">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-[#9A9A92]" aria-label="Kruimelpad">
            <Link href="/" className="transition-colors hover:text-[#111113]">Home</Link>
            <span>/</span>
            <Link href="/cv-voorbeelden" className="transition-colors hover:text-[#111113]">CV-voorbeelden</Link>
            <span>/</span>
            <span className="text-[#56564F]">{ex.profession}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_minmax(320px,420px)] lg:items-start">
            {/* Intro + text */}
            <div>
              <span className="inline-block rounded-full bg-[#EDF7C6] px-3 py-1 text-xs font-bold text-[#111113]">
                {ex.category}
              </span>
              <h1 className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-[-0.03em] text-[#111113] sm:text-4xl">
                CV-voorbeeld {ex.profession}
              </h1>
              <p className="mt-5 text-lg leading-7 text-[#56564F]">{ex.intro}</p>
              {enrich.salary && (
                <div className="mt-5 inline-flex flex-col rounded-2xl border border-[#E5E3DA] bg-[#F8F8F6] px-5 py-3">
                  <span className="font-mono-label text-[10px] text-[#9A9A92]">Salarisindicatie</span>
                  <span className="text-lg font-black text-[#111113]">{enrich.salary.range}</span>
                  <span className="mt-0.5 text-xs text-[#56564F]">{enrich.salary.note}</span>
                </div>
              )}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href={`/dashboard/cv/new?example=${ex.slug}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#111113] px-6 py-3.5 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C]">
                  Maak dit cv <ArrowRight className="size-4" />
                </Link>
                <Link href="/cv-templates" className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E5E3DA] bg-white px-6 py-3.5 text-sm font-semibold text-[#111113] transition-colors hover:bg-[#F2F1EC]">
                  Bekijk alle templates
                </Link>
              </div>
            </div>

            {/* The rendered example CV */}
            <div className="overflow-hidden rounded-2xl border-2 border-[#E5E3DA] shadow-2xl shadow-[#111113]/10">
              <Preview template={ex.template} doc={ex.doc} accentColor={ex.accentColor} />
            </div>
          </div>
        </div>
      </section>

      {/* What to include + tips */}
      <section className="py-16 sm:py-20">
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black tracking-[-0.02em] text-[#111113]">
              Wat zet je op een cv als {ex.profession.toLowerCase()}?
            </h2>
            <ul className="mt-6 space-y-3">
              {ex.whatToInclude.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-7 text-[#2E2E2C]">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#C6F24E]">
                    <Check className="size-3.5 text-[#111113]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-[-0.02em] text-[#111113]">
              Tips voor jouw {ex.profession.toLowerCase()}-cv
            </h2>
            <div className="mt-6 space-y-4">
              {ex.tips.map((tip) => (
                <div key={tip.title} className="flex gap-4 rounded-2xl border border-[#E5E3DA] bg-[#F8F8F6] p-5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#C6F24E] text-[#111113]">
                    <Lightbulb className="size-5" />
                  </span>
                  <div>
                    <p className="font-bold text-[#111113]">{tip.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#56564F]">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter skills */}
      {enrich.recruiterSkills && enrich.recruiterSkills.length > 0 && (
        <section className="border-t border-[#E5E3DA] py-16">
          <div className="container-shell max-w-3xl">
            <h2 className="text-2xl font-black tracking-[-0.02em] text-[#111113]">
              Vaardigheden die recruiters zoeken bij een {ex.profession.toLowerCase()}
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-[#56564F]">
              Verwerk de voor jou kloppende termen letterlijk in je cv. Veel werkgevers gebruiken een ATS dat hierop filtert.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {enrich.recruiterSkills.map((s) => (
                <span key={s} className="rounded-full border border-[#E5E3DA] bg-white px-3 py-1.5 text-sm font-medium text-[#111113]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rich SEO sections */}
      {enrich.sections && enrich.sections.length > 0 && (
        <section className="border-t border-[#E5E3DA] py-16 sm:py-20">
          <div className="container-shell max-w-3xl space-y-12">
            {enrich.sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="text-2xl font-black tracking-[-0.02em] text-[#111113]">{sec.heading}</h2>
                <div className="mt-4 space-y-4">
                  {sec.body.map((para, i) => (
                    <p key={i} className="text-[15px] leading-7 text-[#2E2E2C]">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Profile examples */}
      {enrich.profileExamples && enrich.profileExamples.length > 0 && (
        <section className="border-t border-[#E5E3DA] bg-[#F8F8F6] py-16 sm:py-20">
          <div className="container-shell max-w-3xl">
            <h2 className="text-2xl font-black tracking-[-0.02em] text-[#111113]">
              Voorbeeld profielteksten voor een {ex.profession.toLowerCase()}
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-[#56564F]">
              Gebruik een van deze profielteksten als basis en pas hem aan met jouw eigen cijfers en ervaring.
            </p>
            <div className="mt-6 space-y-4">
              {enrich.profileExamples.map((p, i) => (
                <div key={i} className="rounded-2xl border-l-[3px] border-[#C6F24E] bg-white p-5 text-[15px] italic leading-7 text-[#111113] shadow-sm">
                  &ldquo;{p}&rdquo;
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t border-[#E5E3DA] bg-[#F8F8F6] py-16 sm:py-20">
        <div className="container-shell max-w-3xl">
          <h2 className="text-2xl font-black tracking-[-0.02em] text-[#111113]">Veelgestelde vragen</h2>
          <div className="mt-6 divide-y divide-[#E5E3DA] border-y border-[#E5E3DA]">
            {allFaq.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#111113]">
                  {q}
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#E5E3DA] bg-white text-xl font-light text-[#FB5B36] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 pr-8 text-sm leading-6 text-[#56564F]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="container-shell">
            <h2 className="text-2xl font-black tracking-[-0.02em] text-[#111113]">Andere cv-voorbeelden</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/cv-voorbeelden/${r.slug}`} className="group flex flex-col">
                  <div className="h-[220px] overflow-hidden rounded-2xl border border-[#E5E3DA] bg-white transition-all group-hover:-translate-y-1 group-hover:border-[#C6F24E] group-hover:shadow-xl">
                    <div className="pointer-events-none">
                      <Preview template={r.template} doc={r.doc} accentColor={r.accentColor} />
                    </div>
                  </div>
                  <div className="mt-3 px-1">
                    <div className="font-bold text-[#111113]">{r.profession}</div>
                    <div className="text-xs text-[#9A9A92]">{r.category}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="container-shell overflow-hidden rounded-3xl bg-[#111113] px-6 py-14 text-center sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black tracking-[-0.03em] text-[#F2F1EC]">
            Maak jouw {ex.profession.toLowerCase()}-cv in een paar minuten
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[#9A9A92]">
            Begin met dit voorbeeld als basis, vul je eigen ervaring in en download een ATS-proof PDF.
          </p>
          <Link href={`/dashboard/cv/new?example=${ex.slug}`} className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#C6F24E] px-7 py-3.5 text-[15px] font-black text-[#111113] transition-colors hover:bg-[#DCF58A]">
            Gratis starten <ArrowRight className="size-4" />
          </Link>
          <div className="mt-8">
            <Link href="/cv-voorbeelden" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9A9A92] transition-colors hover:text-[#F2F1EC]">
              <ArrowLeft className="size-4" /> Terug naar alle cv-voorbeelden
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
