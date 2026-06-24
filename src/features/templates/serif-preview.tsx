import type { ResumeDocument } from "@/features/resumes/model";
import { toDesignData } from "./design-adapter";

const DEMO: ResumeDocument = {
  version: 1,
  personalDetails: {
    firstName: "Eva",
    lastName: "Bakker",
    professionalTitle: "Advocaat Arbeidsrecht",
    email: "e.bakker@voorbeeld.nl",
    phone: "06 56 78 90 12",
    city: "Amsterdam",
    linkedinUrl: "linkedin.com/in/evabakker",
    websiteUrl: "",
    photoUrl: "",
  },
  profileSummary:
    "Ervaren advocaat arbeidsrecht met 9 jaar proceservaring bij rechtbanken en Hof van Beroep. Gespecialiseerd in ontslagrecht, collectieve arbeidsovereenkomsten en medezeggenschap.",
  workExperience: [
    {
      id: "1",
      jobTitle: "Advocaat Arbeidsrecht",
      company: "Van Doorne N.V.",
      location: "Amsterdam",
      startDate: "feb 2019",
      endDate: "",
      isCurrent: true,
      bullets: [
        "Begeleidt jaarlijks 30+ ontslagprocedures bij UWV en kantonrechter",
        "Adviseerde de OR bij twee grootschalige reorganisaties",
      ],
    },
    {
      id: "2",
      jobTitle: "Junior Advocaat",
      company: "Houthoff",
      location: "Rotterdam",
      startDate: "sep 2015",
      endDate: "jan 2019",
      isCurrent: false,
      bullets: [
        "Voerde cassatieprocedures bij de Hoge Raad",
        "Stelde collectieve arbeidsovereenkomsten op voor drie sectoren",
      ],
    },
  ],
  education: [
    {
      id: "1",
      degree: "Master",
      fieldOfStudy: "Arbeidsrecht",
      institution: "Universiteit van Amsterdam",
      location: "Amsterdam",
      startDate: "2013",
      endDate: "2015",
      isCurrent: false,
      description: "",
    },
    {
      id: "2",
      degree: "Bachelor",
      fieldOfStudy: "Rechtsgeleerdheid",
      institution: "Vrije Universiteit Amsterdam",
      location: "Amsterdam",
      startDate: "2010",
      endDate: "2013",
      isCurrent: false,
      description: "",
    },
  ],
  skills: ["Ontslagrecht", "Collectief arbeidsrecht", "Medezeggenschap", "Onderhandelingen", "Procesrecht"],
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

export function SerifPreview({
  doc,
  accentColor = "#7a2e3f",
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
        fontSize: 12,
        fontWeight: 700,
        textTransform: "uppercase" as const,
        letterSpacing: "0.16em",
        color: accentColor,
        fontFamily: "'Source Serif 4', serif",
        marginBottom: 10,
        marginTop: 20,
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
          minHeight: 877,
        }}
      >
        {/* CENTERED HEADER */}
        <div
          style={{
            textAlign: "center",
            padding: "36px 48px 0",
          }}
        >
          {/* Curriculum Vitae label */}
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.34em",
              textTransform: "uppercase" as const,
              color: "#9CA3AF",
              fontFamily: "'Source Serif 4', serif",
              marginBottom: 8,
            }}
          >
            Curriculum Vitae
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 31,
              fontWeight: 700,
              color: accentColor,
              fontFamily: "'Source Serif 4', serif",
              lineHeight: 1.1,
            }}
          >
            {d.name}
          </div>

          {/* Role */}
          {d.role && (
            <div
              style={{
                fontSize: 12,
                fontStyle: "italic",
                color: "#6B7280",
                marginTop: 6,
                fontFamily: "'Source Serif 4', serif",
              }}
            >
              {d.role}
            </div>
          )}

          {/* Contact */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2px 16px",
              fontSize: 10.5,
              color: "#6B7280",
              marginTop: 8,
            }}
          >
            {d.address && <span>{d.address}</span>}
            {d.phone && <span>{d.phone}</span>}
            {(d.emailUser || d.emailDomain) && (
              <span>
                {d.emailUser}
                {d.emailDomain ? `@${d.emailDomain}` : ""}
              </span>
            )}
          </div>

          {/* Decorative divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginTop: 18,
              marginBottom: 4,
            }}
          >
            <div style={{ flex: 1, height: 1, backgroundColor: "#D1D5DB" }} />
            <div
              style={{
                width: 7,
                height: 7,
                backgroundColor: accentColor,
                transform: "rotate(45deg)",
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, height: 1, backgroundColor: "#D1D5DB" }} />
          </div>
        </div>

        {/* BODY */}
        <div style={{ padding: "0 48px 36px", textAlign: "left" }}>
          {/* Profile */}
          {d.profile && (
            <div>
              <SectionHeading label="Profiel" />
              <div
                style={{
                  fontSize: 12.5,
                  lineHeight: 1.7,
                  color: "#374151",
                  fontStyle: "italic",
                }}
              >
                {d.profile}
              </div>
            </div>
          )}

          {/* Work experience — left date col + right content */}
          {d.experience.length > 0 && (
            <div>
              <SectionHeading label="Werkervaring" />
              {d.experience.map((job, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                  {/* Date column */}
                  <div
                    style={{
                      width: 84,
                      flexShrink: 0,
                      fontSize: 10.5,
                      color: "#9CA3AF",
                      paddingTop: 2,
                      lineHeight: 1.4,
                      fontFamily: "'Source Serif 4', serif",
                    }}
                  >
                    {job.period}
                  </div>
                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 13.5,
                        fontWeight: 700,
                        color: "#111113",
                        fontFamily: "'Source Serif 4', serif",
                      }}
                    >
                      {job.title}
                    </div>
                    <div style={{ fontSize: 11.5, color: "#6B7280", marginTop: 1 }}>{job.org}</div>
                    {job.bullets.length > 0 && (
                      <div style={{ marginTop: 5 }}>
                        {job.bullets.map((b, j) => (
                          <div
                            key={j}
                            style={{
                              fontSize: 11.5,
                              color: "#4B5563",
                              paddingLeft: 14,
                              position: "relative",
                              lineHeight: 1.6,
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
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {d.education.length > 0 && (
            <div>
              <SectionHeading label="Opleiding" />
              {d.education.map((edu, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 84,
                      flexShrink: 0,
                      fontSize: 10.5,
                      color: "#9CA3AF",
                      paddingTop: 2,
                      fontFamily: "'Source Serif 4', serif",
                    }}
                  >
                    {edu.period}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#111113",
                        fontFamily: "'Source Serif 4', serif",
                      }}
                    >
                      {edu.title}
                    </div>
                    <div style={{ fontSize: 11.5, color: "#6B7280", marginTop: 1 }}>{edu.org}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {d.skills.length > 0 && (
            <div>
              <SectionHeading label="Vaardigheden" />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 28px" }}>
                {d.skills.map((sk, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ display: "flex", gap: 2 }}>
                      {sk.on.map((_, j) => (
                        <span key={j} style={{ fontSize: 8, color: accentColor }}>●</span>
                      ))}
                      {sk.off.map((_, j) => (
                        <span key={j} style={{ fontSize: 8, color: accentColor, opacity: 0.25 }}>●</span>
                      ))}
                    </div>
                    <div style={{ fontSize: 11.5, color: "#374151" }}>{sk.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {d.languages.length > 0 && (
            <div>
              <SectionHeading label="Talen" />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 32px" }}>
                {d.languages.map((lang, i) => (
                  <div key={i} style={{ display: "flex", gap: 16 }}>
                    <div
                      style={{
                        width: 84,
                        flexShrink: 0,
                        fontSize: 11,
                        color: "#9CA3AF",
                        fontFamily: "'Source Serif 4', serif",
                      }}
                    >
                      {lang.level}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#374151",
                        fontFamily: "'Source Serif 4', serif",
                      }}
                    >
                      {lang.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Extras */}
          {d.extras.map((extra, i) => (
            <div key={i}>
              <SectionHeading label={extra.heading} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 20px" }}>
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
