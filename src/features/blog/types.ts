export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string };

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
  content: Block[];
  faq?: FaqItem[];
};
