import type { ResumeDocument } from "@/features/resumes/model";
import { toDesignData } from "./design-adapter";

const DEMO: ResumeDocument = {
  version: 1,
  personalDetails: {
    firstName: "Daan",
    lastName: "Hendriks",
    professionalTitle: "Financieel Analist",
    email: "d.hendriks@voorbeeld.nl",
    phone: "06 34 56 78 90",
    city: "Rotterdam",
    linkedinUrl: "linkedin.com/in/daanhendriks",
    websiteUrl: "",
    photoUrl: "",
  },
  profileSummary:
    "Analytisch ingestelde financieel analist met ruime ervaring in financiële modellering en strategische besluitvorming. Gedreven om complexe data om te zetten in heldere inzichten.",
  workExperience: [
    {
      id: "1",
      jobTitle: "Financieel Analist",
      company: "ING Bank",
      location: "Amsterdam",
      startDate: "feb 2020",
      endDate: "",
      isCurrent: true,
      bullets: [
        "Ontwikkelde DCF-modellen voor overnamekandidaten (€50M+)",
        "Presenteerde kwartaalrapportages aan het management",
      ],
    },
    {
      id: "2",
      jobTitle: "Junior Analist",
      company: "ABN AMRO",
      location: "Amsterdam",
      startDate: "aug 2017",
      endDate: "jan 2020",
      isCurrent: false,
      bullets: [
        "Analyseerde markttrends en concurrentiepositionering",
        "Ondersteunde M&A-transacties ter waarde van €200M",
      ],
    },
  ],
  education: [
    {
      id: "1",
      degree: "MSc",
      fieldOfStudy: "Finance",
      institution: "Erasmus Universiteit Rotterdam",
      location: "Rotterdam",
      startDate: "2015",
      endDate: "2017",
      isCurrent: false,
      description: "",
    },
    {
      id: "2",
      degree: "BSc",
      fieldOfStudy: "Economie",
      institution: "Universiteit van Tilburg",
      location: "Tilburg",
      startDate: "2012",
      endDate: "2015",
      isCurrent: false,
      description: "",
    },
  ],
  skills: ["Financiële modellering", "Bloomberg Terminal", "Python & R", "Excel (gevorderd)", "Valutarisico"],
  languages: [
    { id: "1", name: "Nederlands", level: "Moedertaal" },
    { id: "2", name: "Engels", level: "Vloeiend" },
    { id: "3", name: "Frans", level: "Conversationeel" },
  ],
  certificates: [],
  courses: [],
  interests: [],
  references: [],
  customSections: [],
};

export function ModernLinksPreview({
  doc,
  accentColor = "#373d49",
}: {
  doc?: ResumeDocument;
  accentColor?: string;
}) {
  const hasData = doc && (doc.personalDetails.firstName || doc.workExperience.length > 0);
  const source = hasData ? doc! : DEMO;
  const d = toDesignData(source, accentColor);

  const SidebarLabel = ({ label }: { label: string }) => (
    <div
      style={{
        fontSize: 8,
        fontWeight: 700,
        textTransform: "uppercase" as const,
        letterSpacing: "0.14em",
        color: "rgba(255,255,255,0.65)",
        marginBottom: 7,
        marginTop: 18,
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {label}
    </div>
  );

  const SectionHeading = ({ label }: { label: string }) => (
    <div
      style={{
        fontSize: 9.5,
        fontWeight: 800,
        textTransform: "uppercase" as const,
        letterSpacing: "0.13em",
        color: accentColor,
        marginBottom: 10,
        marginTop: 20,
        fontFamily: "Manrope, sans-serif",
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
          display: "flex",
          minHeight: 877,
        }}
      >
        {/* LEFT SIDEBAR */}
        <div
          style={{
            width: 206,
            flexShrink: 0,
            backgroundColor: accentColor,
            padding: "32px 18px 32px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Photo circle */}
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              border: "3px solid rgba(255,255,255,0.5)",
              overflow: "hidden",
              backgroundColor: "rgba(255,255,255,0.15)",
              alignSelf: "center",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
              color: "white",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            {d.hasPhoto ? (
              <img src={d.photo!} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              d.initials
            )}
          </div>

          <SidebarLabel label="Contact" />
          {d.address && (
            <div style={{ fontSize: 10.5, color: "white", marginBottom: 4, fontFamily: "'Source Sans 3', sans-serif" }}>
              {d.address}
            </div>
          )}
          {d.phone && (
            <div style={{ fontSize: 10.5, color: "white", marginBottom: 4, fontFamily: "'Source Sans 3', sans-serif" }}>
              {d.phone}
            </div>
          )}
          {(d.emailUser || d.emailDomain) && (
            <div style={{ fontSize: 10.5, color: "white", marginBottom: 4, fontFamily: "'Source Sans 3', sans-serif" }}>
              {d.emailUser}
              {d.emailDomain ? `@${d.emailDomain}` : ""}
            </div>
          )}

          {d.skills.length > 0 && (
            <>
              <SidebarLabel label="Vaardigheden" />
              {d.skills.map((sk, i) => (
                <div key={i} style={{ marginBottom: 6 }}>
                  <div style={{ fontSize: 10.5, color: "white", marginBottom: 3, fontFamily: "'Source Sans 3', sans-serif" }}>
                    {sk.name}
                  </div>
                  <div style={{ display: "flex", gap: 3 }}>
                    {sk.on.map((_, j) => (
                      <span key={j} style={{ fontSize: 8, color: "white" }}>●</span>
                    ))}
                    {sk.off.map((_, j) => (
                      <span key={j} style={{ fontSize: 8, color: "white", opacity: 0.3 }}>●</span>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          {d.languages.length > 0 && (
            <>
              <SidebarLabel label="Talen" />
              {d.languages.map((lang, i) => (
                <div key={i} style={{ marginBottom: 7 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "white", fontFamily: "Manrope, sans-serif" }}>
                    {lang.name}
                  </div>
                  {lang.level && (
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}>
                      {lang.level}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>

        {/* MAIN COLUMN */}
        <div style={{ flex: 1, padding: "32px 28px 32px", fontFamily: "'Source Sans 3', sans-serif" }}>
          {/* Name + role */}
          <div style={{ marginBottom: 14 }}>
            <div
              style={{
                fontSize: 25,
                fontWeight: 800,
                color: "#1a1f2e",
                lineHeight: 1.1,
                fontFamily: "Manrope, sans-serif",
              }}
            >
              {d.name}
            </div>
            {d.role && (
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.12em",
                  color: accentColor,
                  marginTop: 5,
                  fontFamily: "Manrope, sans-serif",
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
              <div style={{ fontSize: 12, lineHeight: 1.65, color: "#374151" }}>{d.profile}</div>
            </div>
          )}

          {/* Work experience — timeline */}
          {d.experience.length > 0 && (
            <div>
              <SectionHeading label="Werkervaring" />
              {d.experience.map((job, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 16 }}>
                  {/* Date column */}
                  <div
                    style={{
                      width: 74,
                      flexShrink: 0,
                      fontSize: 10,
                      color: "#9CA3AF",
                      paddingTop: 2,
                      lineHeight: 1.4,
                    }}
                  >
                    {job.period}
                  </div>
                  {/* Content with accent border + dot */}
                  <div
                    style={{
                      flex: 1,
                      borderLeft: "2px solid #E5E7EB",
                      paddingLeft: 12,
                      position: "relative",
                    }}
                  >
                    {/* Accent dot */}
                    <div
                      style={{
                        position: "absolute",
                        left: -5,
                        top: 4,
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: accentColor,
                      }}
                    />
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#111113", fontFamily: "Manrope, sans-serif" }}>
                      {job.title}
                    </div>
                    <div style={{ fontSize: 11, color: "#6B7280", marginTop: 1 }}>{job.org}</div>
                    {job.bullets.length > 0 && (
                      <div style={{ marginTop: 5 }}>
                        {job.bullets.map((b, j) => (
                          <div
                            key={j}
                            style={{
                              fontSize: 11,
                              color: "#4B5563",
                              paddingLeft: 12,
                              position: "relative",
                              lineHeight: 1.55,
                              marginBottom: 3,
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: 1,
                                color: accentColor,
                                fontSize: 13,
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
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {d.education.length > 0 && (
            <div>
              <SectionHeading label="Opleiding" />
              {d.education.map((edu, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 74, flexShrink: 0, fontSize: 10, color: "#9CA3AF", paddingTop: 2 }}>
                    {edu.period}
                  </div>
                  <div style={{ flex: 1, borderLeft: "2px solid #E5E7EB", paddingLeft: 12, position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: -5,
                        top: 4,
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: accentColor,
                      }}
                    />
                    <div style={{ fontSize: 12.5, fontWeight: 700, color: "#111113", fontFamily: "Manrope, sans-serif" }}>
                      {edu.title}
                    </div>
                    <div style={{ fontSize: 11, color: "#6B7280", marginTop: 1 }}>{edu.org}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Extras */}
          {d.extras.map((extra, i) => (
            <div key={i}>
              <SectionHeading label={extra.heading} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 14px" }}>
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
