import type { ResumeDocument } from "@/features/resumes/model";
import type { TemplateId } from "@/features/templates/index";

export type RichSection = { heading: string; body: string[] };

export type CvExample = {
  slug: string;
  profession: string;
  category: string;
  template: TemplateId;
  accentColor?: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whatToInclude: string[];
  tips: { title: string; text: string }[];
  keywords: string[];
  faq: { q: string; a: string }[];
  doc: ResumeDocument;
  /** Optional rich, SEO-oriented long-form sections. */
  tldr?: string[];
  sections?: RichSection[];
  /** 2-3 ready-to-use example profile texts for this profession. */
  profileExamples?: string[];
  /** Skills recruiters look for, for a keyword-rich block. */
  recruiterSkills?: string[];
  /** Related professions to interlink (slugs in this dataset where possible). */
  relatedRoles?: string[];
  /** Salary indication line, e.g. "EUR 2.800 - 3.800 bruto per maand". */
  salary?: { range: string; note: string };
};
