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
    photoUrl: "",
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
      bullets: ["Ontwikkelde SEO-strategie die organisch verkeer verdubbelde"],
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

function AvatarFace({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#E8D0B8" />
      <ellipse cx="50" cy="112" rx="36" ry="30" fill="#1F2D45" />
      <rect x="43" y="72" width="14" height="12" rx="2" fill="#C8956C" />
      <ellipse cx="50" cy="55" rx="22" ry="24" fill="#C8956C" />
      <path d="M28 50 Q28 26 50 24 Q72 26 72 50 Q70 34 50 32 Q30 34 28 50Z" fill="#2C1810" />
      <path d="M28 50 Q26 62 30 74 Q28 60 30 50Z" fill="#2C1810" />
      <path d="M72 50 Q74 62 70 74 Q72 60 70 50Z" fill="#2C1810" />
      <ellipse cx="41" cy="53" rx="3" ry="3.5" fill="#1a1a1a" />
      <ellipse cx="59" cy="53" rx="3" ry="3.5" fill="#1a1a1a" />
      <circle cx="42.5" cy="51.5" r="1.2" fill="white" />
      <circle cx="60.5" cy="51.5" r="1.2" fill="white" />
      <path d="M38 46 Q41 43 45 45" stroke="#2C1810" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M55 45 Q59 43 62 46" stroke="#2C1810" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M41 63 Q50 70 59 63" stroke="#A07050" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function MinSection({ label }: { label: string }) {
  return (
    <div
      style={{
        fontSize: 9,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.22em",
        color: "#111113",
        borderBottom: "1px solid #E5E3DA",
        paddingBottom: 6,
        marginBottom: 10,
      }}
    >
      {label}
    </div>
  );
}

export function MinimaalPreview({ doc }: { doc?: ResumeDocument }) {
  const hasData = doc && (doc.personalDetails.firstName || doc.workExperience.length > 0);
  const d = hasData ? doc! : DEMO;
  const { personalDetails: p, profileSummary, workExperience, education, skills, languages } = d;
  const fullName = [p.firstName, p.lastName].filter(Boolean).join(" ") || "Naam";
  const contacts = [p.email, p.phone, p.city].filter(Boolean);
  const photoSrc = p.photoUrl || null;

  return (
    <div className="relative aspect-[0.707] overflow-hidden rounded-2xl border border-[#E5E3DA] bg-white shadow-xl">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "222%",
          transformOrigin: "top left",
          transform: "scale(0.45)",
          backgroundColor: "white",
          fontFamily: "inherit",
        }}
      >
        {/* Lime accent bar */}
        <div style={{ height: 4, backgroundColor: "#C6F24E" }} />

        {/* HEADER */}
        <div
          style={{
            padding: "26px 40px 18px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 44,
                fontWeight: 900,
                color: "#111113",
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
              }}
            >
              {fullName}
            </div>
            {p.professionalTitle && (
              <div style={{ fontSize: 14, color: "#56564F", marginTop: 10, fontWeight: 500 }}>
                {p.professionalTitle}
              </div>
            )}
            {contacts.length > 0 && (
              <div style={{ fontSize: 11, color: "#9A9A92", marginTop: 6 }}>
                {contacts.join("  ·  ")}
              </div>
            )}
          </div>

          {/* Small avatar */}
          <div
            style={{
              width: 66,
              height: 66,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid #E5E3DA",
              flexShrink: 0,
              backgroundColor: "#F0EBE3",
            }}
          >
            {photoSrc ? (
              <img src={photoSrc} alt={fullName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <AvatarFace size={66} />
            )}
          </div>
        </div>

        {/* BODY */}
        <div
          style={{
            borderTop: "1px solid #E5E3DA",
            padding: "18px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {profileSummary && (
            <div>
              <MinSection label="Profiel" />
              <div style={{ fontSize: 12.5, lineHeight: 1.65, color: "#374151" }}>{profileSummary}</div>
            </div>
          )}

          {workExperience.length > 0 && (
            <div>
              <MinSection label="Werkervaring" />
              {workExperience.slice(0, 2).map((job) => (
                <div key={job.id} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: "#111113" }}>{job.jobTitle}</div>
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>
                      {job.startDate}
                      {job.startDate && " – "}
                      {job.isCurrent ? "heden" : job.endDate}
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "#6B7280" }}>
                    {[job.company, job.location].filter(Boolean).join(", ")}
                  </div>
                  {job.bullets.slice(0, 2).map((b, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: 11.5,
                        color: "#4B5563",
                        paddingLeft: 12,
                        position: "relative",
                        marginTop: 4,
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ position: "absolute", left: 2 }}>•</span>
                      {b}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {education.length > 0 && (
            <div>
              <MinSection label="Opleiding" />
              {education.slice(0, 2).map((edu) => (
                <div
                  key={edu.id}
                  style={{ marginBottom: 12, display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: "#111113" }}>
                      {[edu.degree, edu.fieldOfStudy].filter(Boolean).join(" ")}
                    </div>
                    <div style={{ fontSize: 12, color: "#6B7280" }}>{edu.institution}</div>
                  </div>
                  <div style={{ fontSize: 11, color: "#9CA3AF" }}>
                    {edu.startDate}–{edu.isCurrent ? "heden" : edu.endDate}
                  </div>
                </div>
              ))}
            </div>
          )}

          {skills.length > 0 && (
            <div>
              <MinSection label="Vaardigheden" />
              <div style={{ fontSize: 12.5, color: "#374151" }}>{skills.slice(0, 7).join("  ·  ")}</div>
            </div>
          )}

          {languages.length > 0 && (
            <div>
              <MinSection label="Talen" />
              <div style={{ fontSize: 12.5, color: "#374151" }}>
                {languages
                  .slice(0, 3)
                  .map((l) => `${l.name} (${l.level})`)
                  .join("  ·  ")}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
