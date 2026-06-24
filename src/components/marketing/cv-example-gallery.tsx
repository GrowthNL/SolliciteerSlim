"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import type { CvExample } from "@/features/cv-examples/types";
import { ModernPreview } from "@/features/templates/modern-preview";
import { KlassiekPreview } from "@/features/templates/klassiek-preview";
import { MinimaalPreview } from "@/features/templates/minimaal-preview";
import { ClassicSidebarPreview } from "@/features/templates/classic-sidebar-preview";
import { ModernLinksPreview } from "@/features/templates/modern-links-preview";
import { HeaderBandPreview } from "@/features/templates/header-band-preview";
import { SchoonPreview } from "@/features/templates/schoon-preview";
import { SerifPreview } from "@/features/templates/serif-preview";
import type { ResumeDocument } from "@/features/resumes/model";

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

export function CvExampleGallery({ examples }: { examples: CvExample[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    examples.forEach((e) => set.add(e.category));
    return Array.from(set).sort();
  }, [examples]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return examples.filter((e) => {
      if (activeCategory && e.category !== activeCategory) return false;
      if (!q) return true;
      return [e.profession, e.category, ...e.keywords].join(" ").toLowerCase().includes(q);
    });
  }, [examples, query, activeCategory]);

  return (
    <div>
      {/* Search */}
      <div className="mx-auto max-w-md">
        <div className="flex items-center gap-2 rounded-xl border border-[#E5E3DA] bg-white px-4 py-3 shadow-sm focus-within:border-[#111113]">
          <Search className="size-4 shrink-0 text-[#9A9A92]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Zoek op beroep, bijv. verpleegkundige…"
            className="flex-1 bg-transparent text-sm text-[#111113] placeholder:text-[#9A9A92] focus:outline-none"
            aria-label="Zoek een cv-voorbeeld"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} className="text-[#9A9A92] hover:text-[#111113]" aria-label="Wissen">
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category filter */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={
            activeCategory === null
              ? "rounded-full bg-[#C6F24E] px-4 py-1.5 text-xs font-bold text-[#111113]"
              : "rounded-full border border-[#E5E3DA] bg-white px-4 py-1.5 text-xs font-medium text-[#56564F] transition-colors hover:border-[#111113] hover:text-[#111113]"
          }
        >
          Alle beroepen
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={
              activeCategory === cat
                ? "rounded-full bg-[#C6F24E] px-4 py-1.5 text-xs font-bold text-[#111113]"
                : "rounded-full border border-[#E5E3DA] bg-white px-4 py-1.5 text-xs font-medium text-[#56564F] transition-colors hover:border-[#111113] hover:text-[#111113]"
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery */}
      {filtered.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-[#DDDBD1] bg-[#F8F8F6] py-16 text-center">
          <p className="text-sm font-semibold text-[#56564F]">Geen voorbeelden gevonden</p>
          <p className="mt-1 text-xs text-[#9A9A92]">Probeer een andere zoekterm of categorie.</p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((ex) => (
            <Link key={ex.slug} href={`/cv-voorbeelden/${ex.slug}`} className="group flex flex-col">
              {/* Preview thumbnail */}
              <div className="relative overflow-hidden rounded-2xl border border-[#E5E3DA] bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#C6F24E] group-hover:shadow-2xl group-hover:shadow-[#111113]/10">
                <div className="pointer-events-none h-[300px] overflow-hidden">
                  <Preview template={ex.template} doc={ex.doc} accentColor={ex.accentColor} />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-[#111113]/70 to-transparent pb-4 pt-10 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#C6F24E] px-4 py-2 text-xs font-black text-[#111113]">
                    Bekijk voorbeeld <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </div>
              {/* Meta */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <div className="font-bold text-[#111113]">{ex.profession}</div>
                  <div className="text-xs text-[#9A9A92]">{ex.category}</div>
                </div>
                <span className="rounded-full border border-[#E5E3DA] bg-white px-2.5 py-0.5 text-[10px] font-semibold capitalize text-[#56564F]">
                  {ex.template}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
