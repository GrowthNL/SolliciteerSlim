"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cvmaken.nu";

// Labels for top-level marketing routes. Deep/dynamic routes (e.g. /blog/[slug])
// render their own breadcrumbs in-page, so they are intentionally not listed here.
const LABELS: Record<string, string> = {
  "cv-maken": "CV maken",
  "ai-cv-maker": "AI CV Maker",
  "sollicitatiebrief-maken": "Sollicitatiebrief maken",
  "ats-check": "ATS-check",
  "cv-templates": "CV templates",
  "cv-voorbeelden": "CV-voorbeelden",
  "over-ons": "Over ons",
  prijzen: "Prijzen",
  blog: "Blog",
  contact: "Contact",
  privacy: "Privacy",
  voorwaarden: "Voorwaarden",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname) return null;

  const segments = pathname.split("/").filter(Boolean);
  // Only render for single-segment top-level pages that have a known label.
  if (segments.length !== 1) return null;
  const label = LABELS[segments[0]];
  if (!label) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: label, item: `${BASE}/${segments[0]}` },
    ],
  };

  return (
    <div className="border-b border-[#E5E3DA] bg-white/60">
      <nav className="container-shell flex items-center gap-1.5 py-3 text-xs text-[#9A9A92]" aria-label="Kruimelpad">
        <Link href="/" className="transition-colors hover:text-[#111113]">Home</Link>
        <ChevronRight className="size-3.5" />
        <span className="font-semibold text-[#56564F]">{label}</span>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
