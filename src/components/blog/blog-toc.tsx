"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ScanSearch, FileText } from "lucide-react";

type Heading = { id: string; text: string };

export function BlogToc({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-90px 0px -70% 0px", threshold: 0 },
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-5">
        {/* Table of contents */}
        {headings.length > 0 && (
          <nav className="rounded-2xl border border-[#E5E3DA] bg-white p-5">
            <p className="font-mono-label text-[10px] text-[#9A9A92]">Inhoudsopgave</p>
            <ul className="mt-3 space-y-1.5">
              {headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className={`block border-l-2 py-1 pl-3 text-sm leading-snug transition-colors ${
                      active === h.id
                        ? "border-[#FB5B36] font-semibold text-[#111113]"
                        : "border-[#E5E3DA] text-[#56564F] hover:border-[#111113] hover:text-[#111113]"
                    }`}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* CTA widget: build CV */}
        <div className="rounded-2xl bg-[#111113] p-5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#C6F24E]">
            <FileText className="size-5 text-[#111113]" />
          </span>
          <p className="mt-3 font-bold text-[#F2F1EC]">Maak direct je cv</p>
          <p className="mt-1 text-sm leading-6 text-[#9A9A92]">
            Zet deze tips meteen om in een ATS-proof cv. Gratis, met AI-hulp bij elke sectie.
          </p>
          <Link
            href="/registreren"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C6F24E] px-4 py-2.5 text-sm font-black text-[#111113] transition-colors hover:bg-[#DCF58A]"
          >
            Gratis starten <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* CTA widget: ATS check */}
        <div className="rounded-2xl border border-[#E5E3DA] bg-[#F8F8F6] p-5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#FFE3DA]">
            <ScanSearch className="size-5 text-[#FB5B36]" />
          </span>
          <p className="mt-3 font-bold text-[#111113]">Is jouw cv ATS-proof?</p>
          <p className="mt-1 text-sm leading-6 text-[#56564F]">
            Check of je cv door de automatische filters komt voordat je solliciteert.
          </p>
          <Link
            href="/ats-check"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#111113] transition-colors hover:text-[#FB5B36]"
          >
            Naar de ATS-check <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
