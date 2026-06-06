export type Plan = "free" | "one_time" | "starter" | "pro";

export type ResumeSection =
  | "personalDetails"
  | "profileSummary"
  | "workExperience"
  | "education"
  | "skills"
  | "languages"
  | "certificates"
  | "courses"
  | "interests"
  | "references"
  | "customSections";

export interface NavigationItem {
  label: string;
  href: string;
}
