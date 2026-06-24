import type { ResumeDocument } from "@/features/resumes/model";
import { toDesignData } from "./design-adapter";

const DEMO: ResumeDocument = {
  version: 1,
  personalDetails: {
    firstName: "Lisa",
    lastName: "Janssen",
    professionalTitle: "Marketing Manager",
    email: "l.janssen@voorbeeld.nl",
    phone: "06 22 33 44 55",
    city: "Den Haag",
    linkedinUrl: "linkedin.com/in/lisajanssen",
    websiteUrl: "",
    photoUrl: "",
  },
  profileSummary:
    "Creatieve Marketing Manager met 7 jaar ervaring in digitale campagnes en merkstrategie. Bewezen trackrecord in het verhogen van merkbekendheid en het genereren van leads via omnichannel-aanpak.",
  workExperience: [
    {
      id: "1",
      jobTitle: "Marketing Manager",
      company: "Philips",
      location: "Eindhoven",
      startDate: "mrt 2021",
      endDate: "",
      isCurrent: true,
      bullets: [
        "Coördineerde 6 productlanceringen met een gecombineerd budget van €3M",
        "Verhoogde social-media-engagement met 45% in één jaar",
      ],
    },
    {
      id: "2",
      jobTitle: "Online Marketeer",
      company: "Coolblue",
      location: "Rotterdam",
      startDate: "jun 2018",
      endDate: "feb 2021",
      isCurrent: false,
      bullets: [
        "Beheerde SEA-campagnes met een ROAS van gemiddeld 4,2",
        "Implementeerde A/B-testframework voor landingspagina's",
      ],
    },
  ],
  education: [
    {
      id: "1",
      degree: "MSc",
      fieldOfStudy: "Marketing Management",
      institution: "Tilburg University",
      location: "Tilburg",
      startDate: "2016",
      endDate: "2018",
      isCurrent: false,
      description: "",
    },
    {
      id: "2",
      degree: "BSc",
      fieldOfStudy: "Communicatie",
      institution: "Hogeschool Rotterdam",
      location: "Rotterdam",
      startDate: "2013",
      endDate: "2016",
      isCurrent: false,
      description: "",
    },
  ],
  skills: ["Google Ads", "HubSpot", "Contentmarketing", "SEO/SEA", "Data-analyse"],
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

export function HeaderBandPreview({
  doc,
  accentColor = "#6d5ae6",
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
          fontFamily: "'Source Sans 3', sans-serif",
          minHeight: 877,
        }}
      >
        {/* FULL-WIDTH ACCENT HEADER */}
        <div
          style={{
            backgroundColor: accentColor,
            padding: "30px 36px",
            display: "flex",
            alignItems: "center",
            gap: 22,
          }}
        >
          {/* Photo circle */}
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              border: "3px solid white",
              overflow: "hidden",
              backgroundColor: "rgba(255,255,255,0.2)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
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

          {/* Name + role + contact */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 29,
                fontWeight: 800,
                color: "white",
                lineHeight: 1.05,
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
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.8)",
                  marginTop: 5,
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                {d.role}
              </div>
            )}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2px 16px",
                marginTop: 9,
                fontSize: 10.5,
                color: "rgba(255,255,255,0.85)",
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
          </div>
        </div>

        {/* BODY */}
        <div style={{ padding: "20px 36px 32px" }}>
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
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: "#111113", fontFamily: "Manrope, sans-serif" }}>
                        {job.title}
                      </div>
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

          {/* 2-column bottom section */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px", marginTop: 4 }}>
            {/* Left: education + extras */}
            <div>
              {d.education.length > 0 && (
                <div>
                  <SectionHeading label="Opleiding" />
                  {d.education.map((edu, i) => (
                    <div key={i} style={{ marginBottom: 12 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#111113", fontFamily: "Manrope, sans-serif" }}>
                        {edu.title}
                      </div>
                      <div style={{ fontSize: 11, color: "#6B7280", marginTop: 1 }}>{edu.org}</div>
                      {edu.period && (
                        <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 1 }}>{edu.period}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {d.extras.map((extra, i) => (
                <div key={i}>
                  <SectionHeading label={extra.heading} />
                  {extra.items.map((item, j) => (
                    <div key={j} style={{ fontSize: 11.5, color: "#374151", marginBottom: 3 }}>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Right: skill bars + languages */}
            <div>
              {d.skills.length > 0 && (
                <div>
                  <SectionHeading label="Vaardigheden" />
                  {d.skills.map((sk, i) => (
                    <div key={i} style={{ marginBottom: 9 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 11.5,
                          color: "#374151",
                          marginBottom: 3,
                        }}
                      >
                        <span>{sk.name}</span>
                      </div>
                      {/* Progress bar */}
                      <div
                        style={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: "#E5E7EB",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            borderRadius: 3,
                            backgroundColor: accentColor,
                            width: `${(sk.level / 5) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {d.languages.length > 0 && (
                <div>
                  <SectionHeading label="Talen" />
                  {d.languages.map((lang, i) => (
                    <div key={i} style={{ marginBottom: 7 }}>
                      <div style={{ fontSize: 11.5, fontWeight: 600, color: "#374151", fontFamily: "Manrope, sans-serif" }}>
                        {lang.name}
                      </div>
                      {lang.level && (
                        <div style={{ fontSize: 10.5, color: "#9CA3AF" }}>{lang.level}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
