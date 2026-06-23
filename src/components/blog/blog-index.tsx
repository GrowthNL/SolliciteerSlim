"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Search, X } from "lucide-react";
import type { BlogPost } from "@/features/blog/types";
import { CategoryBadge } from "./category-badge";

function ArticleMeta({ date, readTime }: { date: string; readTime: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#9A9A92]">
      <span>{date}</span>
      <span className="text-[#DDDBD1]">·</span>
      <span className="flex items-center gap-1">
        <Clock className="size-3.5" />
        {readTime} leestijd
      </span>
    </div>
  );
}

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.categories.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCategory = !activeCategory || p.categories.includes(activeCategory);
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = [
        p.title,
        p.excerpt,
        p.description,
        ...p.categories,
        ...p.keywords,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, query, activeCategory]);

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
            placeholder="Zoek een artikel…"
            className="flex-1 bg-transparent text-sm text-[#111113] placeholder:text-[#9A9A92] focus:outline-none"
            aria-label="Zoek een artikel"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-[#9A9A92] transition-colors hover:text-[#111113]"
              aria-label="Zoekopdracht wissen"
            >
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
          Alle onderwerpen
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

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-[#DDDBD1] bg-[#F8F8F6] py-16 text-center">
          <p className="text-sm font-semibold text-[#56564F]">Geen artikelen gevonden</p>
          <p className="mt-1 text-xs text-[#9A9A92]">
            Probeer een andere zoekterm of kies een ander onderwerp.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col rounded-2xl border border-[#E5E3DA] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#C6F24E] hover:shadow-lg hover:shadow-[#111113]/5"
            >
              <div className="flex flex-wrap gap-1.5">
                {article.categories.map((cat) => (
                  <CategoryBadge key={cat} category={cat} />
                ))}
              </div>
              <h3 className="mt-3 text-lg font-bold leading-snug text-[#111113]">
                <Link href={`/blog/${article.slug}`} className="transition-colors hover:text-[#FB5B36]">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-[#56564F]">
                {article.excerpt}
              </p>
              <div className="mt-4">
                <ArticleMeta date={article.dateLabel} readTime={article.readTime} />
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-4 flex items-center gap-1 text-sm font-bold text-[#111113] transition-colors hover:text-[#FB5B36]"
                >
                  Lees meer <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
