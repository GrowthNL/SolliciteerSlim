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

function AvatarSvg() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 rounded-full">
      <circle cx="32" cy="32" r="32" fill="#F0EBE3" />
      <ellipse cx="32" cy="68" rx="22" ry="18" fill="#2E2E2C" />
      <rect x="27" y="46" width="10" height="10" rx="2" fill="#D4A574" />
      <circle cx="32" cy="38" r="14" fill="#D4A574" />
      <path d="M18 36 Q18 22 32 20 Q46 22 46 36 Q44 28 32 27 Q20 28 18 36Z" fill="#2E2E2C" />
      <path d="M18 36 Q17 42 20 46 Q18 40 19 36Z" fill="#2E2E2C" />
      <path d="M46 36 Q47 42 44 46 Q46 40 45 36Z" fill="#2E2E2C" />
      <ellipse cx="27" cy="37" rx="2" ry="2.2" fill="#1a1a1a" />
      <ellipse cx="37" cy="37" rx="2" ry="2.2" fill="#1a1a1a" />
      <path d="M27 43 Q32 47 37 43" stroke="#C0856A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function ModernPreview({ doc }: { doc?: ResumeDocument }) {
  const hasData = doc && (doc.personalDetails.firstName || doc.workExperience.length > 0);
  const d = hasData ? doc : DEMO;

  const { personalDetails: p, profileSummary, workExperience, education, skills, languages } = d;
  const fullName = [p.firstName, p.lastName].filter(Boolean).join(" ") || "Naam";

  return (
    <div className="aspect-[0.707] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <div className="flex h-full flex-col text-[7px] leading-tight">
        {/* Header — dark ink background with lime accent bottom border */}
        <div className="shrink-0 border-b-2 px-4 py-3" style={{ borderColor: "#C6F24E", backgroundColor: "#0f172a" }}>
          <p
            className="font-black tracking-tight text-white"
            style={{ fontSize: "13px" }}
          >
            {fullName}
          </p>
          {p.professionalTitle && (
            <p
              className="mt-0.5 font-bold uppercase tracking-[.15em]"
              style={{ fontSize: "6.5px", color: "#C6F24E" }}
            >
              {p.professionalTitle}
            </p>
          )}
          <div className="mt-1 flex flex-wrap gap-x-2 gap-y-0.5 text-slate-300" style={{ fontSize: "6px" }}>
            {p.email && <span>{p.email}</span>}
            {p.phone && <span>{p.phone}</span>}
            {p.city && <span>{p.city}</span>}
            {p.linkedinUrl && <span>{p.linkedinUrl}</span>}
          </div>
        </div>

        {/* Body — two columns */}
        <div className="grid min-h-0 flex-1 overflow-hidden" style={{ gridTemplateColumns: "1fr 42px" }}>
          {/* Main column */}
          <div className="space-y-2 overflow-hidden border-r border-slate-100 px-3 py-2">
            {profileSummary && (
              <section>
                <div
                  className="mb-0.5 border-b pb-0.5 font-bold uppercase tracking-widest"
                  style={{ fontSize: "5.5px", borderColor: "#C6F24E", color: "#047857" }}
                >
                  Profiel
                </div>
                <p className="line-clamp-3 leading-relaxed text-slate-600" style={{ fontSize: "6.5px" }}>
                  {profileSummary}
                </p>
              </section>
            )}

            {workExperience.length > 0 && (
              <section>
                <div
                  className="mb-0.5 border-b pb-0.5 font-bold uppercase tracking-widest"
                  style={{ fontSize: "5.5px", borderColor: "#C6F24E", color: "#047857" }}
                >
                  Werkervaring
                </div>
                <div className="space-y-1.5">
                  {workExperience.slice(0, 2).map((job) => (
                    <div key={job.id}>
                      <p className="font-semibold text-slate-800" style={{ fontSize: "7px" }}>{job.jobTitle}</p>
                      <p className="text-slate-500" style={{ fontSize: "6.5px" }}>
                        {[job.company, job.location].filter(Boolean).join(" · ")}
                      </p>
                      <p className="text-slate-400" style={{ fontSize: "6px" }}>
                        {job.startDate}
                        {job.startDate && " – "}
                        {job.isCurrent ? "heden" : job.endDate}
                      </p>
                      {job.bullets.slice(0, 2).map((b, i) => (
                        <p key={i} className="text-slate-500 pl-1.5" style={{ fontSize: "6px" }}>
                          • {b}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {education.length > 0 && (
              <section>
                <div
                  className="mb-0.5 border-b pb-0.5 font-bold uppercase tracking-widest"
                  style={{ fontSize: "5.5px", borderColor: "#C6F24E", color: "#047857" }}
                >
                  Opleiding
                </div>
                <div className="space-y-1">
                  {education.slice(0, 2).map((edu) => (
                    <div key={edu.id}>
                      <p className="font-semibold text-slate-800" style={{ fontSize: "7px" }}>
                        {[edu.degree, edu.fieldOfStudy].filter(Boolean).join(" ")}
                      </p>
                      <p className="text-slate-500" style={{ fontSize: "6.5px" }}>{edu.institution}</p>
                      <p className="text-slate-400" style={{ fontSize: "6px" }}>
                        {[edu.startDate, edu.isCurrent ? "heden" : edu.endDate].filter(Boolean).join(" – ")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col items-center space-y-2 overflow-hidden bg-slate-50 px-1.5 py-2">
            <AvatarSvg />

            {skills.length > 0 && (
              <section className="w-full">
                <div
                  className="mb-0.5 font-bold uppercase tracking-widest"
                  style={{ fontSize: "5px", color: "#047857" }}
                >
                  Skills
                </div>
                <div className="space-y-0.5">
                  {skills.slice(0, 6).map((skill, i) => (
                    <div key={i} className="truncate text-slate-600" style={{ fontSize: "6px" }}>
                      {skill}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {languages.length > 0 && (
              <section className="w-full">
                <div
                  className="mb-0.5 font-bold uppercase tracking-widest"
                  style={{ fontSize: "5px", color: "#047857" }}
                >
                  Talen
                </div>
                <div className="space-y-0.5">
                  {languages.slice(0, 3).map((lang) => (
                    <div key={lang.id} className="text-slate-600" style={{ fontSize: "6px" }}>
                      <span className="font-medium">{lang.name}</span>
                      {lang.level && (
                        <span className="block text-slate-400" style={{ fontSize: "5.5px" }}>{lang.level}</span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
