import type { ResumeDocument } from "@/features/resumes/model";
import type { TemplateId } from "@/features/templates/index";

export type CvExample = {
  slug: string;
  profession: string;
  category: string;
  template: TemplateId;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whatToInclude: string[];
  tips: { title: string; text: string }[];
  keywords: string[];
  faq: { q: string; a: string }[];
  doc: ResumeDocument;
};
