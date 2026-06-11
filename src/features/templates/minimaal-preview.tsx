import type { ResumeDocument } from "@/features/resumes/model";

export function MinimaalPreview({ doc }: { doc: ResumeDocument }) {
  const { personalDetails: p, profileSummary, workExperience, education, skills } = doc;
  const fullName = [p.firstName, p.lastName].filter(Boolean).join(" ") || "Jouw naam";
  const contacts = [p.email, p.phone, p.city].filter(Boolean);
  const hasContent = profileSummary || workExperience.length > 0 || education.length > 0;

  return (
    <div className="aspect-[0.707] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <div className="flex h-full flex-col text-[8px] leading-tight">
        {/* Header — minimal, left-aligned */}
        <div className="shrink-0 bg-white px-6 pt-5 pb-3">
          <h3 className="font-display text-[16px] font-black tracking-tight text-slate-900">{fullName}</h3>
          {p.professionalTitle && (
            <p className="mt-0.5 text-[8px] font-medium text-slate-500">{p.professionalTitle}</p>
          )}
          {contacts.length > 0 && (
            <p className="mt-1 text-[6.5px] text-slate-400">{contacts.join(" · ")}</p>
          )}
        </div>

        {/* Body — single wide column, no sidebar */}
        <div className="flex-1 overflow-hidden border-t border-slate-100 px-6 py-3 space-y-3">
          {!hasContent && (
            <div className="space-y-2">
              <div className="h-0.5 w-8 rounded bg-slate-900" />
              <div className="space-y-0.5">
                <div className="h-1 rounded bg-slate-100" />
                <div className="h-1 rounded bg-slate-100" />
                <div className="h-1 w-3/5 rounded bg-slate-100" />
              </div>
              <div className="h-0.5 w-16 rounded bg-slate-900" />
              <div className="space-y-0.5">
                <div className="h-1 rounded bg-slate-100" />
                <div className="h-1 w-4/5 rounded bg-slate-100" />
              </div>
            </div>
          )}

          {profileSummary && (
            <section>
              <p className="mb-0.5 text-[6.5px] font-bold uppercase tracking-[.2em] text-slate-800">Profiel</p>
              <p className="line-clamp-3 text-[7px] leading-relaxed text-slate-600">{profileSummary}</p>
            </section>
          )}

          {workExperience.length > 0 && (
            <section>
              <p className="mb-1 text-[6.5px] font-bold uppercase tracking-[.2em] text-slate-800">Werkervaring</p>
              {workExperience.slice(0, 2).map((job) => (
                <div key={job.id} className="mb-1.5">
                  <div className="flex items-baseline justify-between">
                    <p className="font-semibold text-slate-900">{job.jobTitle}</p>
                    <p className="text-[6.5px] text-slate-400">
                      {job.startDate}{job.startDate && " – "}{job.isCurrent ? "heden" : job.endDate}
                    </p>
                  </div>
                  <p className="text-[7px] text-slate-500">{job.company}</p>
                </div>
              ))}
            </section>
          )}

          {education.length > 0 && (
            <section>
              <p className="mb-1 text-[6.5px] font-bold uppercase tracking-[.2em] text-slate-800">Opleiding</p>
              {education.slice(0, 2).map((edu) => (
                <div key={edu.id} className="mb-1.5">
                  <div className="flex items-baseline justify-between">
                    <p className="font-semibold text-slate-900">{[edu.degree, edu.fieldOfStudy].filter(Boolean).join(", ")}</p>
                    <p className="text-[6.5px] text-slate-400">
                      {edu.startDate}{edu.startDate && " – "}{edu.isCurrent ? "heden" : edu.endDate}
                    </p>
                  </div>
                  <p className="text-[7px] text-slate-500">{edu.institution}</p>
                </div>
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <p className="mb-1 text-[6.5px] font-bold uppercase tracking-[.2em] text-slate-800">Vaardigheden</p>
              <p className="text-[7px] text-slate-600">{skills.slice(0, 8).join("  ·  ")}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
