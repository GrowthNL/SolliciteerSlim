import type { ResumeDocument } from "@/features/resumes/model";
import { toDesignData } from "./design-adapter";

const DEMO: ResumeDocument = {
  version: 1,
  personalDetails: {
    firstName: "Hugo",
    lastName: "Smits",
    professionalTitle: "Fiscalist",
    email: "h.smits@voorbeeld.nl",
    phone: "06 45 67 89 01",
    city: "Breda",
    linkedinUrl: "",
    websiteUrl: "",
    photoUrl: "",
  },
  profileSummary:
    "Gespecialiseerde fiscalist met 10 jaar ervaring in vennootschapsbelasting en internationale belastingplanning. Adviseer MKB en multinationals over fiscale structurering en compliancevraagstukken.",
  workExperience: [
    {
      id: "1",
      jobTitle: "Senior Fiscalist",
      company: "PwC",
      location: "Breda",
      startDate: "jan 2018",
      endDate: "",
      isCurrent: true,
      bullets: [
        "Adviseerde 20+ klanten over BEPS-gerelateerde regelgeving",
        "Leidde implementatie van Pillar Two-regels voor vijf multinationals",
      ],
    },
    {
      id: "2",
      jobTitle: "Belastingadviseur",
      company: "Ernst & Young",
      location: "Tilburg",
      startDate: "sep 2013",
      endDate: "dec 2017",
      isCurrent: false,
      bullets: [
        "Begeleidde fiscale due diligence bij overnames tot €80M",
        "Stelde aangifte vennootschapsbelasting op voor 30+ klanten",
      ],
    },
  ],
  education: [
    {
      id: "1",
      degree: "MSc",
      fieldOfStudy: "Fiscaal Recht",
      institution: "Tilburg University",
      location: "Tilburg",
      startDate: "2011",
      endDate: "2013",
      isCurrent: false,
      description: "",
    },
    {
      id: "2",
      degree: "LLB",
      fieldOfStudy: "Rechtsgeleerdheid",
      institution: "Universiteit van Amsterdam",
      location: "Amsterdam",
      startDate: "2008",
      endDate: "2011",
      isCurrent: false,
      description: "",
    },
  ],
  skills: ["Vennootschapsbelasting", "Transfer Pricing", "BEPS/Pillar Two", "BTW-recht", "Tax compliance"],
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

export function SchoonPreview({
  doc,
  accentColor = "#16335c",
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
        letterSpacing: "0.1em",
        color: accentColor,
        borderTop: `1.5px solid ${accentColor}`,
        paddingTop: 7,
        marginBottom: 12,
        marginTop: 22,
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
          padding: "42px 48px",
          minHeight: 877,
        }}
      >
        {/* Name + role */}
        <div style={{ marginBottom: 10 }}>
          <div
            style={{
              fontSize: 27,
              fontWeight: 700,
              color: accentColor,
              lineHeight: 1.1,
            }}
          >
            {d.name}
          </div>
          {d.role && (
            <div style={{ fontSize: 12.5, color: "#6B7280", marginTop: 4 }}>{d.role}</div>
          )}
        </div>

        {/* Contact line */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2px 18px",
            fontSize: 11,
            color: "#6B7280",
            borderBottom: "1px solid #E5E7EB",
            paddingBottom: 12,
            marginBottom: 2,
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

        {/* Skills — 2-column grid with dots */}
        {d.skills.length > 0 && (
          <div>
            <SectionHeading label="Vaardigheden" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "6px 20px",
              }}
            >
              {d.skills.map((sk, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ display: "flex", gap: 3, flexShrink: 0 }}>
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
                <div key={i}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>{lang.name}</span>
                  {lang.level && (
                    <span style={{ fontSize: 11, color: "#9CA3AF", marginLeft: 5 }}>{lang.level}</span>
                  )}
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
  );
}
