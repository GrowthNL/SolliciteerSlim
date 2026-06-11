import type { ResumeDocument } from "@/features/resumes/model";

export function KlassiekPreview({ doc }: { doc: ResumeDocument }) {
  const { personalDetails: p, profileSummary, workExperience, education, skills, languages } = doc;
  const fullName = [p.firstName, p.lastName].filter(Boolean).join(" ") || "Jouw naam";
  const contacts = [p.email, p.phone, p.city, p.linkedinUrl].filter(Boolean);
  const hasContent = profileSummary || workExperience.length > 0 || education.length > 0;

  return (
    <div className="aspect-[0.707] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <div className="flex h-full flex-col text-[8px] leading-tight">
        {/* Header — centered */}
        <div className="shrink-0 border-b border-slate-300 bg-white px-6 py-4 text-center">
          <h3 className="font-display text-[15px] font-bold text-slate-900">{fullName}</h3>
          {p.professionalTitle && (
            <p className="mt-0.5 text-[8px] text-slate-600">{p.professionalTitle}</p>
          )}
          {contacts.length > 0 && (
            <p className="mt-1 text-[6.5px] text-slate-400">{contacts.join("  •  ")}</p>
          )}
        </div>

        {/* Body — single column */}
        <div className="flex-1 overflow-hidden px-5 py-3 space-y-3">
          {!hasContent && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-0.5 flex-1 bg-slate-200" />
                <div className="h-1.5 w-12 rounded bg-slate-300" />
                <div className="h-0.5 flex-1 bg-slate-200" />
              </div>
              <div className="space-y-0.5">
                <div className="h-1 rounded bg-slate-100" />
                <div className="h-1 rounded bg-slate-100" />
                <div className="h-1 w-3/4 rounded bg-slate-100" />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-0.5 flex-1 bg-slate-200" />
                <div className="h-1.5 w-16 rounded bg-slate-300" />
                <div className="h-0.5 flex-1 bg-slate-200" />
              </div>
              <div className="space-y-1">
                <div className="h-1 w-20 rounded bg-slate-200" />
                <div className="h-0.5 rounded bg-slate-100" />
                <div className="h-0.5 rounded bg-slate-100" />
              </div>
            </div>
          )}

          {profileSummary && (
            <section>
              <div className="mb-1 flex items-center gap-1.5">
                <div className="h-px flex-1 bg-slate-300" />
                <span className="text-[6.5px] font-bold uppercase tracking-widest text-slate-500">Profiel</span>
                <div className="h-px flex-1 bg-slate-300" />
              </div>
              <p className="line-clamp-3 text-[7px] leading-relaxed text-slate-600">{profileSummary}</p>
            </section>
          )}

          {workExperience.length > 0 && (
            <section>
              <div className="mb-1 flex items-center gap-1.5">
                <div className="h-px flex-1 bg-slate-300" />
                <span className="text-[6.5px] font-bold uppercase tracking-widest text-slate-500">Werkervaring</span>
                <div className="h-px flex-1 bg-slate-300" />
              </div>
              {workExperience.slice(0, 2).map((job) => (
                <div key={job.id} className="mb-1.5 grid grid-cols-[1fr_auto] gap-x-2">
                  <p className="font-semibold text-slate-800">{job.jobTitle}</p>
                  <p className="text-right text-slate-400">{job.startDate}{job.startDate && "–"}{job.isCurrent ? "heden" : job.endDate}</p>
                  <p className="text-slate-500">{job.company}</p>
                </div>
              ))}
            </section>
          )}

          {education.length > 0 && (
            <section>
              <div className="mb-1 flex items-center gap-1.5">
                <div className="h-px flex-1 bg-slate-300" />
                <span className="text-[6.5px] font-bold uppercase tracking-widest text-slate-500">Opleiding</span>
                <div className="h-px flex-1 bg-slate-300" />
              </div>
              {education.slice(0, 2).map((edu) => (
                <div key={edu.id} className="mb-1.5 grid grid-cols-[1fr_auto] gap-x-2">
                  <p className="font-semibold text-slate-800">{[edu.degree, edu.fieldOfStudy].filter(Boolean).join(", ")}</p>
                  <p className="text-right text-slate-400">{edu.startDate}{edu.startDate && "–"}{edu.isCurrent ? "heden" : edu.endDate}</p>
                  <p className="text-slate-500">{edu.institution}</p>
                </div>
              ))}
            </section>
          )}

          {(skills.length > 0 || languages.length > 0) && (
            <section>
              <div className="mb-1 flex items-center gap-1.5">
                <div className="h-px flex-1 bg-slate-300" />
                <span className="text-[6.5px] font-bold uppercase tracking-widest text-slate-500">Vaardigheden & talen</span>
                <div className="h-px flex-1 bg-slate-300" />
              </div>
              <div className="flex flex-wrap gap-1">
                {[...skills.slice(0, 5), ...languages.slice(0, 3).map((l) => l.name)].map((s, i) => (
                  <span key={i} className="rounded border border-slate-200 px-1 py-0.5 text-[6.5px] text-slate-600">{s}</span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
