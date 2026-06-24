import type { ResumeDocument } from "@/features/resumes/model";
import { toDesignData } from "./design-adapter";

const DEMO: ResumeDocument = {
  version: 1,
  personalDetails: {
    firstName: "Thomas",
    lastName: "Willemsen",
    professionalTitle: "Accountant",
    email: "t.willemsen@voorbeeld.nl",
    phone: "06 18 24 53 71",
    city: "Utrecht",
    linkedinUrl: "",
    websiteUrl: "",
    photoUrl: "",
  },
  profileSummary:
    "Nauwkeurige accountant met 8 jaar ervaring in de controlepraktijk. Sterk in financiële analyse en het adviseren van klanten over compliance.",
  workExperience: [
    {
      id: "1",
      jobTitle: "Senior Accountant",
      company: "KPMG",
      location: "Utrecht",
      startDate: "jan 2019",
      endDate: "",
      isCurrent: true,
      bullets: [
        "Leidde jaarlijkse audits voor 12 middelgrote ondernemingen",
        "Optimaliseerde rapportageprocessen waardoor doorlooptijd 20% daalde",
      ],
    },
    {
      id: "2",
      jobTitle: "Junior Accountant",
      company: "Deloitte",
      location: "Amsterdam",
      startDate: "sep 2015",
      endDate: "dec 2018",
      isCurrent: false,
      bullets: [
        "Ondersteunde controlewerkzaamheden voor beursgenoteerde klanten",
        "Stelde tussentijdse financiële overzichten op conform IFRS",
      ],
    },
  ],
  education: [
    {
      id: "1",
      degree: "MSc",
      fieldOfStudy: "Accountancy",
      institution: "Universiteit Utrecht",
      location: "Utrecht",
      startDate: "2013",
      endDate: "2015",
      isCurrent: false,
      description: "",
    },
    {
      id: "2",
      degree: "BSc",
      fieldOfStudy: "Bedrijfseconomie",
      institution: "Hogeschool Utrecht",
      location: "Utrecht",
      startDate: "2010",
      endDate: "2013",
      isCurrent: false,
      description: "",
    },
  ],
  skills: ["Financiële analyse", "IFRS/GAAP", "Excel & Power BI", "Auditing", "SAP"],
  languages: [
    { id: "1", name: "Nederlands", level: "Moedertaal" },
    { id: "2", name: "Engels", level: "Vloeiend" },
  ],
  certificates: [],
  courses: [],
  interests: [],
  references: [],
  customSections: [],
};

export function ClassicSidebarPreview({
  doc,
  accentColor = "#2b6cb0",
}: {
  doc?: ResumeDocument;
  accentColor?: string;
}) {
  const hasData = doc && (doc.personalDetails.firstName || doc.workExperience.length > 0);
  const source = hasData ? doc! : DEMO;
  const d = toDesignData(source, accentColor);

  const SectionHeading = ({ label }: { label: string }) => (
    <div
      style={{
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase" as const,
        letterSpacing: "0.13em",
        color: accentColor,
        borderBottom: `2px solid ${accentColor}`,
        paddingBottom: 4,
        marginBottom: 10,
        marginTop: 18,
      }}
    >
      {label}
    </div>
  );

  return (
    <div className="relative aspect-[620/877] overflow-hidden rounded-2xl border border-[#E5E3DA] bg-white shadow-xl">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "222%",
          transformOrigin: "top left",
          transform: "scale(0.45)",
          backgroundColor: "white",
          fontFamily: "'Source Sans 3', sans-serif",
          display: "flex",
          minHeight: 877,
        }}
      >
        {/* RIGHT SIDEBAR */}
        <div
          style={{
            width: 210,
            flexShrink: 0,
            backgroundColor: accentColor,
            padding: "32px 20px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {/* Photo circle */}
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              border: "3px solid rgba(255,255,255,0.6)",
              overflow: "hidden",
              backgroundColor: "rgba(255,255,255,0.2)",
              alignSelf: "center",
              marginBottom: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
              color: "white",
            }}
          >
            {d.hasPhoto ? (
              <img src={d.photo!} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              d.initials
            )}
          </div>

          {/* Personalia */}
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                fontSize: 8.5,
                fontWeight: 700,
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.7)",
                marginBottom: 8,
              }}
            >
              Contact
            </div>
            {d.address && (
              <div style={{ fontSize: 11, color: "white", marginBottom: 5 }}>
                {d.address}
              </div>
            )}
            {d.phone && (
              <div style={{ fontSize: 11, color: "white", marginBottom: 5 }}>
                {d.phone}
              </div>
            )}
            {(d.emailUser || d.emailDomain) && (
              <div style={{ fontSize: 11, color: "white", marginBottom: 5 }}>
                {d.emailUser}
                {d.emailDomain ? `@${d.emailDomain}` : ""}
              </div>
            )}
          </div>

          {/* Skills */}
          {d.skills.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  fontSize: 8.5,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: 8,
                }}
              >
                Vaardigheden
              </div>
              {d.skills.map((sk, i) => (
                <div key={i} style={{ marginBottom: 7 }}>
                  <div style={{ fontSize: 11, color: "white", marginBottom: 3 }}>{sk.name}</div>
                  <div style={{ display: "flex", gap: 3 }}>
                    {sk.on.map((_, j) => (
                      <span key={j} style={{ fontSize: 9, color: "white" }}>●</span>
                    ))}
                    {sk.off.map((_, j) => (
                      <span key={j} style={{ fontSize: 9, color: "white", opacity: 0.3 }}>●</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Languages */}
          {d.languages.length > 0 && (
            <div>
              <div
                style={{
                  fontSize: 8.5,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: 8,
                }}
              >
                Talen
              </div>
              {d.languages.map((lang, i) => (
                <div key={i} style={{ marginBottom: 7 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "white" }}>{lang.name}</div>
                  {lang.level && (
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>{lang.level}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* MAIN COLUMN */}
        <div style={{ flex: 1, padding: "32px 30px 32px" }}>
          {/* Name + role */}
          <div style={{ marginBottom: 16 }}>
            <div
              style={{
                fontSize: 29,
                fontWeight: 700,
                color: accentColor,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              {d.name}
            </div>
            {d.role && (
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.12em",
                  color: "#6B7280",
                  marginTop: 5,
                }}
              >
                {d.role}
              </div>
            )}
          </div>

          {/* Profile */}
          {d.profile && (
            <div>
              <SectionHeading label="Profiel" />
              <div style={{ fontSize: 12.5, lineHeight: 1.65, color: "#374151" }}>{d.profile}</div>
            </div>
          )}

          {/* Work experience */}
          {d.experience.length > 0 && (
            <div>
              <SectionHeading label="Werkervaring" />
              {d.experience.map((job, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: "#111113" }}>{job.title}</div>
                      <div style={{ fontSize: 11.5, color: "#6B7280", marginTop: 1 }}>{job.org}</div>
                    </div>
                    {job.period && (
                      <div style={{ fontSize: 10.5, color: "#9CA3AF", whiteSpace: "nowrap", marginLeft: 10 }}>
                        {job.period}
                      </div>
                    )}
                  </div>
                  {job.bullets.length > 0 && (
                    <div style={{ marginTop: 6 }}>
                      {job.bullets.map((b, j) => (
                        <div
                          key={j}
                          style={{
                            fontSize: 11.5,
                            color: "#4B5563",
                            paddingLeft: 14,
                            position: "relative",
                            lineHeight: 1.55,
                            marginBottom: 3,
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 2,
                              color: accentColor,
                              fontSize: 14,
                              lineHeight: 1.1,
                            }}
                          >
                            •
                          </span>
                          {b}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {d.education.length > 0 && (
            <div>
              <SectionHeading label="Opleiding" />
              {d.education.map((edu, i) => (
                <div key={i} style={{ marginBottom: 12, display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#111113" }}>{edu.title}</div>
                    <div style={{ fontSize: 11.5, color: "#6B7280", marginTop: 1 }}>{edu.org}</div>
                  </div>
                  {edu.period && (
                    <div style={{ fontSize: 10.5, color: "#9CA3AF", whiteSpace: "nowrap", marginLeft: 10 }}>
                      {edu.period}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Extras */}
          {d.extras.map((extra, i) => (
            <div key={i}>
              <SectionHeading label={extra.heading} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px" }}>
                {extra.items.map((item, j) => (
                  <div key={j} style={{ fontSize: 11.5, color: "#374151" }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
