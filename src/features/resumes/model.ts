export const RESUME_DOCUMENT_VERSION = 1 as const;

export interface PersonalDetails {
  firstName: string;
  lastName: string;
  professionalTitle: string;
  email: string;
  phone: string;
  city: string;
  linkedinUrl: string;
  websiteUrl: string;
}

export interface WorkExperience {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  bullets: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
}

export interface LanguageSkill {
  id: string;
  name: string;
  level: string;
}

export interface NamedResumeItem {
  id: string;
  name: string;
  description: string;
}

export interface CustomSection {
  id: string;
  title: string;
  items: NamedResumeItem[];
}

export interface ResumeDocument {
  version: typeof RESUME_DOCUMENT_VERSION;
  personalDetails: PersonalDetails;
  profileSummary: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
  languages: LanguageSkill[];
  certificates: NamedResumeItem[];
  courses: NamedResumeItem[];
  interests: string[];
  references: NamedResumeItem[];
  customSections: CustomSection[];
}

export interface ResumeValidationIssue {
  path: string;
  message: string;
}

export type ResumeValidationResult =
  | { success: true; data: ResumeDocument }
  | { success: false; issues: ResumeValidationIssue[] };

const personalDetailKeys = [
  "firstName",
  "lastName",
  "professionalTitle",
  "email",
  "phone",
  "city",
  "linkedinUrl",
  "websiteUrl",
] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function hasString(record: Record<string, unknown>, key: string, path: string, issues: ResumeValidationIssue[]): boolean {
  if (typeof record[key] === "string") return true;
  issues.push({ path: `${path}.${key}`, message: "Moet tekst zijn." });
  return false;
}

function validateStringArray(value: unknown, path: string, issues: ResumeValidationIssue[]): boolean {
  if (!Array.isArray(value)) {
    issues.push({ path, message: "Moet een lijst zijn." });
    return false;
  }

  value.forEach((item, index) => {
    if (typeof item !== "string") issues.push({ path: `${path}.${index}`, message: "Moet tekst zijn." });
  });
  return value.every((item) => typeof item === "string");
}

function validateObjectArray(
  value: unknown,
  path: string,
  issues: ResumeValidationIssue[],
  validateItem: (record: Record<string, unknown>, itemPath: string, issues: ResumeValidationIssue[]) => void,
): boolean {
  if (!Array.isArray(value)) {
    issues.push({ path, message: "Moet een lijst zijn." });
    return false;
  }

  value.forEach((item, index) => {
    const itemPath = `${path}.${index}`;
    if (!isRecord(item)) {
      issues.push({ path: itemPath, message: "Moet een object zijn." });
      return;
    }
    validateItem(item, itemPath, issues);
  });
  return true;
}

function validateNamedItem(record: Record<string, unknown>, path: string, issues: ResumeValidationIssue[]) {
  ["id", "name", "description"].forEach((key) => hasString(record, key, path, issues));
}

export function createEmptyResumeDocument(): ResumeDocument {
  return {
    version: RESUME_DOCUMENT_VERSION,
    personalDetails: {
      firstName: "",
      lastName: "",
      professionalTitle: "",
      email: "",
      phone: "",
      city: "",
      linkedinUrl: "",
      websiteUrl: "",
    },
    profileSummary: "",
    workExperience: [],
    education: [],
    skills: [],
    languages: [],
    certificates: [],
    courses: [],
    interests: [],
    references: [],
    customSections: [],
  };
}

export function validateResumeDocument(value: unknown): ResumeValidationResult {
  const issues: ResumeValidationIssue[] = [];
  if (!isRecord(value)) return { success: false, issues: [{ path: "$", message: "Moet een object zijn." }] };

  if (value.version !== RESUME_DOCUMENT_VERSION) {
    issues.push({ path: "version", message: `Alleen CV-modelversie ${RESUME_DOCUMENT_VERSION} wordt ondersteund.` });
  }

  if (!isRecord(value.personalDetails)) {
    issues.push({ path: "personalDetails", message: "Moet een object zijn." });
  } else {
    personalDetailKeys.forEach((key) => hasString(value.personalDetails as Record<string, unknown>, key, "personalDetails", issues));
  }

  hasString(value, "profileSummary", "$", issues);
  validateStringArray(value.skills, "skills", issues);
  validateStringArray(value.interests, "interests", issues);

  validateObjectArray(value.workExperience, "workExperience", issues, (item, path, itemIssues) => {
    ["id", "jobTitle", "company", "location", "startDate", "endDate"].forEach((key) => hasString(item, key, path, itemIssues));
    if (typeof item.isCurrent !== "boolean") itemIssues.push({ path: `${path}.isCurrent`, message: "Moet true of false zijn." });
    validateStringArray(item.bullets, `${path}.bullets`, itemIssues);
  });

  validateObjectArray(value.education, "education", issues, (item, path, itemIssues) => {
    ["id", "institution", "degree", "fieldOfStudy", "location", "startDate", "endDate", "description"].forEach((key) =>
      hasString(item, key, path, itemIssues),
    );
    if (typeof item.isCurrent !== "boolean") itemIssues.push({ path: `${path}.isCurrent`, message: "Moet true of false zijn." });
  });

  validateObjectArray(value.languages, "languages", issues, (item, path, itemIssues) => {
    ["id", "name", "level"].forEach((key) => hasString(item, key, path, itemIssues));
  });

  ["certificates", "courses", "references"].forEach((key) =>
    validateObjectArray(value[key], key, issues, validateNamedItem),
  );

  validateObjectArray(value.customSections, "customSections", issues, (item, path, itemIssues) => {
    hasString(item, "id", path, itemIssues);
    hasString(item, "title", path, itemIssues);
    validateObjectArray(item.items, `${path}.items`, itemIssues, validateNamedItem);
  });

  return issues.length === 0
    ? { success: true, data: value as unknown as ResumeDocument }
    : { success: false, issues };
}
