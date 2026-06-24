import { Mail, MapPin, Phone, Globe, Linkedin } from "lucide-react";
import type { ResumeDocument } from "@/features/resumes/model";

export function CvTemplatePreview({ doc }: { doc: ResumeDocument }) {
  const { personalDetails: p, profileSummary, workExperience, education, skills, languages } = doc;
  const fullName = [p.firstName, p.lastName].filter(Boolean).join(" ") || "Jouw naam";
  const hasContent =
    profileSummary || workExperience.length > 0 || education.length > 0 || skills.length > 0;

  return (
    <div className="aspect-[0.707] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <div className="flex h-full flex-col text-[8px] leading-tight">
        {/* Header */}
        <div className="shrink-0 border-b-2 border-emerald-700 bg-white px-6 py-5">
          <h3 className="font-display text-[14px] font-bold text-slate-900">{fullName}</h3>
          {p.professionalTitle && (
            <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[.14em] text-emerald-700">
              {p.professionalTitle}
            </p>
          )}
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-[7px] text-slate-500">
            {p.email && (
              <span className="flex items-center gap-0.5">
                <Mail className="size-2 shrink-0" />
                {p.email}
              </span>
            )}
            {p.phone && (
              <span className="flex items-center gap-0.5">
                <Phone className="size-2 shrink-0" />
                {p.phone}
              </span>
            )}
            {p.city && (
              <span className="flex items-center gap-0.5">
                <MapPin className="size-2 shrink-0" />
                {p.city}
              </span>
            )}
            {p.linkedinUrl && (
              <span className="flex items-center gap-0.5">
                <Linkedin className="size-2 shrink-0" />
                {p.linkedinUrl.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "")}
              </span>
            )}
            {p.websiteUrl && (
              <span className="flex items-center gap-0.5">
                <Globe className="size-2 shrink-0" />
                {p.websiteUrl.replace(/^https?:\/\//, "")}
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="grid min-h-0 flex-1 grid-cols-[1fr_56px] gap-0 overflow-hidden">
          {/* Main column */}
          <div className="overflow-hidden border-r border-slate-100 px-4 py-3 space-y-3">
            {!hasContent && (
              <div className="space-y-1.5">
                <div className="h-1.5 w-16 rounded bg-slate-800" />
                <div className="space-y-0.5">
                  <div className="h-1 rounded bg-slate-100" />
                  <div className="h-1 rounded bg-slate-100" />
                  <div className="h-1 w-4/5 rounded bg-slate-100" />
                </div>
                <div className="mt-2 h-1.5 w-20 rounded bg-slate-800" />
                <div className="h-6 rounded bg-slate-50" />
              </div>
            )}

            {profileSummary && (
              <section>
                <div className="mb-0.5 border-b border-emerald-700 pb-0.5 text-[7px] font-bold uppercase tracking-widest text-emerald-800">
                  Profiel
                </div>
                <p className="line-clamp-3 text-[7px] leading-relaxed text-slate-600">
                  {profileSummary}
                </p>
              </section>
            )}

            {workExperience.length > 0 && (
              <section>
                <div className="mb-1 border-b border-emerald-700 pb-0.5 text-[7px] font-bold uppercase tracking-widest text-emerald-800">
                  Werkervaring
                </div>
                <div className="space-y-1.5">
                  {workExperience.slice(0, 3).map((job) => (
                    <div key={job.id}>
                      <p className="font-semibold text-slate-800">{job.jobTitle || "Functietitel"}</p>
                      <p className="text-slate-500">
                        {[job.company, job.location].filter(Boolean).join(" · ")}
                      </p>
                      <p className="text-slate-400">
                        {job.startDate}
                        {job.startDate && (job.endDate || job.isCurrent) && " - "}
                        {job.isCurrent ? "heden" : job.endDate}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {education.length > 0 && (
              <section>
                <div className="mb-1 border-b border-emerald-700 pb-0.5 text-[7px] font-bold uppercase tracking-widest text-emerald-800">
                  Opleiding
                </div>
                <div className="space-y-1">
                  {education.slice(0, 2).map((edu) => (
                    <div key={edu.id}>
                      <p className="font-semibold text-slate-800">
                        {[edu.degree, edu.fieldOfStudy].filter(Boolean).join(", ") || "Opleiding"}
                      </p>
                      <p className="text-slate-500">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Side column */}
          <div className="overflow-hidden bg-slate-50 px-2 py-3 space-y-2">
            {skills.length > 0 && (
              <section>
                <div className="mb-0.5 text-[6px] font-bold uppercase tracking-widest text-emerald-800">
                  Skills
                </div>
                <div className="space-y-0.5">
                  {skills.slice(0, 6).map((skill, i) => (
                    <div key={i} className="truncate text-[7px] text-slate-600">
                      {skill}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {languages.length > 0 && (
              <section>
                <div className="mb-0.5 text-[6px] font-bold uppercase tracking-widest text-emerald-800">
                  Talen
                </div>
                <div className="space-y-0.5">
                  {languages.slice(0, 4).map((lang) => (
                    <div key={lang.id} className="text-[7px] text-slate-600">
                      <span className="font-medium">{lang.name}</span>
                      {lang.level && <span className="text-slate-400"> · {lang.level}</span>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {!skills.length && !languages.length && (
              <div className="space-y-1">
                <div className="h-1.5 w-8 rounded bg-slate-300" />
                <div className="h-1 rounded bg-slate-200" />
                <div className="h-1 rounded bg-slate-200" />
                <div className="mt-2 h-1.5 w-8 rounded bg-slate-300" />
                <div className="h-1 rounded bg-slate-200" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
