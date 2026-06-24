export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "stats"; caption?: string; items: { value: string; label: string }[] }
  | { type: "compare"; title?: string; good: { label: string; items: string[] }; bad: { label: string; items: string[] } };

export type FaqItem = { q: string; a: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO "2025-06-03"
  dateLabel: string; // "3 juni 2025"
  readTime: string; // "8 min"
  author: string;
  categories: string[];
  keywords: string[];
  /** Short "In het kort" summary shown at the top of the article. */
  tldr?: string[];
  content: Block[];
  faq?: FaqItem[];
};

/** Slugify a heading into an anchor id (used for the table of contents). */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}
