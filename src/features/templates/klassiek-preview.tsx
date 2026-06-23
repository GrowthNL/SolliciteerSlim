import type { ResumeDocument } from "@/features/resumes/model";

const DEMO: ResumeDocument = {
  version: 1,
  personalDetails: {
    firstName: "Lisa",
    lastName: "van der Berg",
    professionalTitle: "Marketing Manager",
    email: "lisa@example.nl",
    phone: "06-12345678",
    city: "Amsterdam",
    linkedinUrl: "linkedin.com/in/lisavdberg",
    websiteUrl: "",
  },
  profileSummary:
    "Resultaatgerichte Marketing Manager met 6 jaar ervaring in digitale groei en merkstrategie. Gespecialiseerd in content marketing, SEO en data-gedreven campagnes die zichtbaar bijdragen aan omzetgroei.",
  workExperience: [
    {
      id: "1",
      jobTitle: "Marketing Manager",
      company: "Coolblue",
      location: "Rotterdam",
      startDate: "jan 2021",
      endDate: "",
      isCurrent: true,
      bullets: [
        "Leidde rebranding waarmee online conversie met 34% steeg",
        "Beheerde een marketingbudget van €1,2M per kwartaal",
        "Bouwde en coachte een team van 8 marketeers",
      ],
    },
    {
      id: "2",
      jobTitle: "Content Strateeg",
      company: "Bol.com",
      location: "Utrecht",
      startDate: "mrt 2018",
      endDate: "dec 2020",
      isCurrent: false,
      bullets: [
        "Ontwikkelde SEO-strategie die organisch verkeer verdubbelde",
        "Produceerde 40+ whitepapers en casestudies per jaar",
      ],
    },
  ],
  education: [
    {
      id: "1",
      degree: "MSc",
      fieldOfStudy: "Marketing",
      institution: "Universiteit van Amsterdam",
      location: "Amsterdam",
      startDate: "2016",
      endDate: "2018",
      isCurrent: false,
      description: "",
    },
    {
      id: "2",
      degree: "BSc",
      fieldOfStudy: "Bedrijfskunde",
      institution: "Erasmus Universiteit Rotterdam",
      location: "Rotterdam",
      startDate: "2013",
      endDate: "2016",
      isCurrent: false,
      description: "",
    },
  ],
  skills: ["SEO/SEA", "Google Analytics", "HubSpot", "Contentmarketing", "A/B-testen", "Teamleiding", "Photoshop"],
  languages: [
    { id: "1", name: "Nederlands", level: "Moedertaal" },
    { id: "2", name: "Engels", level: "Vloeiend" },
    { id: "3", name: "Duits", level: "Basis" },
  ],
  certificates: [],
  courses: [],
  interests: [],
  references: [],
  customSections: [],
};

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="mb-1 flex items-center gap-1.5">
      <div className="h-px flex-1 bg-slate-300" />
      <span
        className="font-bold uppercase tracking-widest text-slate-500"
        style={{ fontSize: "6px" }}
      >
        {label}
      </span>
      <div className="h-px flex-1 bg-slate-300" />
    </div>
  );
}

export function KlassiekPreview({ doc }: { doc?: ResumeDocument }) {
  const hasData = doc && (doc.personalDetails.firstName || doc.workExperience.length > 0);
  const d = hasData ? doc : DEMO;

  const { personalDetails: p, profileSummary, workExperience, education, skills, languages } = d;
  const fullName = [p.firstName, p.lastName].filter(Boolean).join(" ") || "Naam";
  const contacts = [p.email, p.phone, p.city, p.linkedinUrl].filter(Boolean);

  return (
    <div className="aspect-[0.707] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <div className="flex h-full flex-col text-[7px] leading-tight">
        {/* Header — centered, with avatar initials circle */}
        <div className="shrink-0 border-b border-slate-200 bg-white px-5 py-3 text-center">
          {/* Avatar circle with initials */}
          <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
            <span className="font-bold text-white" style={{ fontSize: "7px" }}>
              {[p.firstName?.[0], p.lastName?.[0]].filter(Boolean).join("") || "LB"}
            </span>
          </div>
          <h3
            className="font-bold text-slate-900"
            style={{ fontSize: "13px", fontFamily: "inherit" }}
          >
            {fullName}
          </h3>
          {p.professionalTitle && (
            <p className="mt-0.5 text-slate-500" style={{ fontSize: "7px" }}>
              {p.professionalTitle}
            </p>
          )}
          {contacts.length > 0 && (
            <p className="mt-1 text-slate-400" style={{ fontSize: "5.5px" }}>
              {contacts.join("  •  ")}
            </p>
          )}
        </div>

        {/* Body — single column */}
        <div className="flex-1 space-y-2 overflow-hidden px-5 py-2">
          {profileSummary && (
            <section>
              <SectionDivider label="Profiel" />
              <p className="line-clamp-3 leading-relaxed text-slate-600" style={{ fontSize: "6.5px" }}>
                {profileSummary}
              </p>
            </section>
          )}

          {workExperience.length > 0 && (
            <section>
              <SectionDivider label="Werkervaring" />
              {workExperience.slice(0, 2).map((job) => (
                <div key={job.id} className="mb-1.5 grid gap-x-2" style={{ gridTemplateColumns: "1fr auto" }}>
                  <p className="font-semibold text-slate-800" style={{ fontSize: "7px" }}>
                    {job.jobTitle}
                  </p>
                  <p className="text-right text-slate-400" style={{ fontSize: "6px" }}>
                    {job.startDate}
                    {job.startDate && "–"}
                    {job.isCurrent ? "heden" : job.endDate}
                  </p>
                  <p className="text-slate-500" style={{ fontSize: "6.5px" }}>
                    {[job.company, job.location].filter(Boolean).join(", ")}
                  </p>
                </div>
              ))}
            </section>
          )}

          {education.length > 0 && (
            <section>
              <SectionDivider label="Opleiding" />
              {education.slice(0, 2).map((edu) => (
                <div key={edu.id} className="mb-1.5 grid gap-x-2" style={{ gridTemplateColumns: "1fr auto" }}>
                  <p className="font-semibold text-slate-800" style={{ fontSize: "7px" }}>
                    {[edu.degree, edu.fieldOfStudy].filter(Boolean).join(" ")}
                  </p>
                  <p className="text-right text-slate-400" style={{ fontSize: "6px" }}>
                    {edu.startDate}
                    {edu.startDate && "–"}
                    {edu.isCurrent ? "heden" : edu.endDate}
                  </p>
                  <p className="text-slate-500" style={{ fontSize: "6.5px" }}>
                    {edu.institution}
                  </p>
                </div>
              ))}
            </section>
          )}

          {(skills.length > 0 || languages.length > 0) && (
            <section>
              <SectionDivider label="Vaardigheden & talen" />
              <div className="flex flex-wrap gap-1">
                {[
                  ...skills.slice(0, 5),
                  ...languages.slice(0, 3).map((l) => l.name),
                ].map((s, i) => (
                  <span
                    key={i}
                    className="rounded border border-slate-200 px-1 py-0.5 text-slate-600"
                    style={{ fontSize: "6px" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
