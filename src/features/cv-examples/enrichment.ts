import type { RichSection } from "./types";

export type Enrichment = {
  salary?: { range: string; note: string };
  recruiterSkills?: string[];
  sections?: RichSection[];
  profileExamples?: string[];
  relatedRoles?: string[];
  faq?: { q: string; a: string }[];
};

/**
 * Rich, search-query-oriented content per cv-example slug. Merged into the
 * detail page at render time so examples.ts stays focused on the CV data.
 * Populated below; empty entries fall back gracefully.
 */
export const CV_ENRICHMENT: Record<string, Enrichment> = {};

export function getEnrichment(slug: string): Enrichment {
  return CV_ENRICHMENT[slug] ?? {};
}
