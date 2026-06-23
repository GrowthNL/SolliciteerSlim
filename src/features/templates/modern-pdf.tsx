// PDF template — server/client compatible via dynamic import
// Uses @react-pdf/renderer components (not HTML/CSS)
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { ResumeDocument } from "@/features/resumes/model";

const s = StyleSheet.create({
  page: { padding: "40px 48px", fontFamily: "Helvetica", fontSize: 9.5, color: "#1e293b", lineHeight: 1.4 },
  header: { borderBottomWidth: 2, borderBottomColor: "#047857", paddingBottom: 10, marginBottom: 14 },
  name: { fontSize: 22, fontFamily: "Helvetica-Bold", color: "#0f172a" },
  jobTitle: { fontSize: 8, fontFamily: "Helvetica-Bold", color: "#047857", letterSpacing: 1.4, marginTop: 2 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginTop: 5 },
  contactItem: { fontSize: 7.5, color: "#64748b" },
  body: { flexDirection: "row", gap: 18 },
  mainCol: { flex: 1 },
  sideCol: { width: 120 },
  section: { marginBottom: 12 },
  sectionTitle: {
    fontSize: 7, fontFamily: "Helvetica-Bold", color: "#047857",
    letterSpacing: 1.4, borderBottomWidth: 1, borderBottomColor: "#047857",
    paddingBottom: 2, marginBottom: 6,
  },
  entryTitle: { fontSize: 9.5, fontFamily: "Helvetica-Bold", color: "#0f172a" },
  entryMeta: { fontSize: 8, color: "#475569" },
  entryDate: { fontSize: 7.5, color: "#94a3b8", marginTop: 1 },
  bullet: { fontSize: 8.5, color: "#334155", marginLeft: 6, marginTop: 2 },
  summary: { fontSize: 8.5, color: "#334155", lineHeight: 1.5 },
  skillItem: { fontSize: 8.5, color: "#334155", marginBottom: 2 },
});

function SectionTitle({ children }: { children: string }) {
  return <Text style={s.sectionTitle}>{children.toUpperCase()}</Text>;
}

export function ModernPdf({ doc }: { doc: ResumeDocument }) {
  const { personalDetails: p } = doc;
  const fullName = [p.firstName, p.lastName].filter(Boolean).join(" ") || "Naam";
  const contacts = [p.email, p.phone, p.city, p.linkedinUrl, p.websiteUrl].filter(Boolean);

  return (
    <Document title={fullName} author="CVmaken.nu">
      <Page size="A4" style={s.page}>
        {/* Header */}
        <View style={s.header}>
          <Text style={s.name}>{fullName}</Text>
          {p.professionalTitle ? <Text style={s.jobTitle}>{p.professionalTitle.toUpperCase()}</Text> : null}
          <View style={s.contactRow}>
            {contacts.map((c, i) => (
              <Text key={i} style={s.contactItem}>{c}</Text>
            ))}
          </View>
        </View>

        {/* Two-column body */}
        <View style={s.body}>
          {/* Main column */}
          <View style={s.mainCol}>
            {doc.profileSummary ? (
              <View style={s.section}>
                <SectionTitle>Profiel</SectionTitle>
                <Text style={s.summary}>{doc.profileSummary}</Text>
              </View>
            ) : null}

            {doc.workExperience.length > 0 ? (
              <View style={s.section}>
                <SectionTitle>Werkervaring</SectionTitle>
                {doc.workExperience.map((job) => (
                  <View key={job.id} style={{ marginBottom: 8 }}>
                    <Text style={s.entryTitle}>{job.jobTitle}</Text>
                    <Text style={s.entryMeta}>{[job.company, job.location].filter(Boolean).join(" · ")}</Text>
                    <Text style={s.entryDate}>
                      {[job.startDate, job.isCurrent ? "heden" : job.endDate].filter(Boolean).join(" – ")}
                    </Text>
                    {job.bullets.filter(Boolean).map((b, i) => (
                      <Text key={i} style={s.bullet}>• {b}</Text>
                    ))}
                  </View>
                ))}
              </View>
            ) : null}

            {doc.education.length > 0 ? (
              <View style={s.section}>
                <SectionTitle>Opleiding</SectionTitle>
                {doc.education.map((edu) => (
                  <View key={edu.id} style={{ marginBottom: 7 }}>
                    <Text style={s.entryTitle}>{[edu.degree, edu.fieldOfStudy].filter(Boolean).join(", ")}</Text>
                    <Text style={s.entryMeta}>{edu.institution}{edu.location ? ` · ${edu.location}` : ""}</Text>
                    <Text style={s.entryDate}>
                      {[edu.startDate, edu.isCurrent ? "heden" : edu.endDate].filter(Boolean).join(" – ")}
                    </Text>
                    {edu.description ? <Text style={s.bullet}>{edu.description}</Text> : null}
                  </View>
                ))}
              </View>
            ) : null}

            {doc.certificates.length > 0 ? (
              <View style={s.section}>
                <SectionTitle>Certificaten</SectionTitle>
                {doc.certificates.map((c) => (
                  <View key={c.id} style={{ marginBottom: 4 }}>
                    <Text style={s.entryTitle}>{c.name}</Text>
                    {c.description ? <Text style={s.entryMeta}>{c.description}</Text> : null}
                  </View>
                ))}
              </View>
            ) : null}
          </View>

          {/* Side column */}
          <View style={s.sideCol}>
            {doc.skills.length > 0 ? (
              <View style={s.section}>
                <SectionTitle>Vaardigheden</SectionTitle>
                {doc.skills.map((skill, i) => (
                  <Text key={i} style={s.skillItem}>{skill}</Text>
                ))}
              </View>
            ) : null}

            {doc.languages.length > 0 ? (
              <View style={s.section}>
                <SectionTitle>Talen</SectionTitle>
                {doc.languages.map((lang) => (
                  <View key={lang.id} style={{ marginBottom: 4 }}>
                    <Text style={{ ...s.skillItem, fontFamily: "Helvetica-Bold" }}>{lang.name}</Text>
                    {lang.level ? <Text style={{ ...s.skillItem, color: "#94a3b8", fontSize: 8 }}>{lang.level}</Text> : null}
                  </View>
                ))}
              </View>
            ) : null}

            {doc.interests.length > 0 ? (
              <View style={s.section}>
                <SectionTitle>Interesses</SectionTitle>
                {doc.interests.map((interest, i) => (
                  <Text key={i} style={s.skillItem}>{interest}</Text>
                ))}
              </View>
            ) : null}
          </View>
        </View>
      </Page>
    </Document>
  );
}
