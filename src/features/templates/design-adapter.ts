import type { ResumeDocument } from "@/features/resumes/model";

export interface DesignData {
  name: string;
  role: string;
  profile: string;
  address: string;
  phone: string;
  emailUser: string;
  emailDomain: string;
  photo: string | null;
  hasPhoto: boolean;
  initials: string;
  experience: Array<{ title: string; org: string; period: string; bullets: string[] }>;
  education: Array<{ title: string; org: string; period: string }>;
  skills: Array<{ name: string; level: number; on: null[]; off: null[]; fillStyle: string }>;
  languages: Array<{ name: string; level: string }>;
  extras: Array<{ heading: string; items: string[] }>;
}

export function toDesignData(doc: ResumeDocument, accentColor = "#2b6cb0"): DesignData {
  const p = doc.personalDetails;
  const fullName = [p.firstName, p.lastName].filter(Boolean).join(" ") || "Naam";
  const email = p.email || "";
  const atIdx = email.indexOf("@");
  const emailUser = atIdx >= 0 ? email.slice(0, atIdx) : email;
  const emailDomain = atIdx >= 0 ? email.slice(atIdx + 1) : "";
  const photo = p.photoUrl || null;

  function formatPeriod(startDate: string, endDate: string, isCurrent: boolean) {
    if (isCurrent) return startDate ? `${startDate} – heden` : "heden";
    if (startDate && endDate) return `${startDate} – ${endDate}`;
    return startDate || endDate || "";
  }

  const extras: Array<{ heading: string; items: string[] }> = [];
  if (doc.certificates.length > 0)
    extras.push({ heading: "Certificaten", items: doc.certificates.map((c) => c.name) });
  if (doc.courses.length > 0)
    extras.push({ heading: "Cursussen", items: doc.courses.map((c) => c.name) });
  if (doc.customSections.length > 0)
    doc.customSections.forEach((s) =>
      extras.push({ heading: s.title, items: s.items.map((i) => i.name) })
    );
  if (doc.interests.length > 0)
    extras.push({ heading: "Interesses", items: doc.interests });

  return {
    name: fullName,
    role: p.professionalTitle || "",
    profile: doc.profileSummary || "",
    address: p.city || "",
    phone: p.phone || "",
    emailUser,
    emailDomain,
    photo,
    hasPhoto: !!photo,
    initials: fullName
      .split(" ")
      .filter(Boolean)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase(),
    experience: doc.workExperience.map((w) => ({
      title: w.jobTitle,
      org: [w.company, w.location].filter(Boolean).join(", "),
      period: formatPeriod(w.startDate, w.endDate, w.isCurrent),
      bullets: w.bullets,
    })),
    education: doc.education.map((e) => ({
      title: [e.degree, e.fieldOfStudy].filter(Boolean).join(" "),
      org: e.institution,
      period: formatPeriod(e.startDate, e.endDate, e.isCurrent),
    })),
    skills: doc.skills.map((s) => {
      const lvl = 4;
      return {
        name: s,
        level: lvl,
        on: Array.from({ length: lvl }, () => null) as null[],
        off: Array.from({ length: 5 - lvl }, () => null) as null[],
        fillStyle: `width:${(lvl / 5) * 100}%; height:100%; border-radius:3px; background:${accentColor}`,
      };
    }),
    languages: doc.languages.map((l) => ({ name: l.name, level: l.level })),
    extras,
  };
}
