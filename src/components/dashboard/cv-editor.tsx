"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Camera,
  Check,
  ChevronRight,
  Loader2,
  Plus,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ModernPreview } from "@/features/templates/modern-preview";
import { KlassiekPreview } from "@/features/templates/klassiek-preview";
import { MinimaalPreview } from "@/features/templates/minimaal-preview";
import { ClassicSidebarPreview } from "@/features/templates/classic-sidebar-preview";
import { ModernLinksPreview } from "@/features/templates/modern-links-preview";
import { HeaderBandPreview } from "@/features/templates/header-band-preview";
import { SchoonPreview } from "@/features/templates/schoon-preview";
import { SerifPreview } from "@/features/templates/serif-preview";
import { PdfDownloadButton } from "@/components/dashboard/pdf-download-button";
import { TEMPLATES, type TemplateId } from "@/features/templates/index";
import { saveResume } from "@/app/actions/resumes";
import { improveText, type ImproveTextResult } from "@/app/actions/ai";
import { type Plan } from "@/lib/entitlements";
import {
  createEmptyResumeDocument,
  type Education,
  type LanguageSkill,
  type NamedResumeItem,
  type ResumeDocument,
  type WorkExperience,
} from "@/features/resumes/model";

// ─── Section definitions ──────────────────────────────────────────────────────

type SectionKey = "personal" | "profile" | "work" | "education" | "skills" | "languages" | "other";

const SECTIONS: { key: SectionKey; label: string }[] = [
  { key: "personal", label: "Persoonlijke gegevens" },
  { key: "profile", label: "Profiel" },
  { key: "work", label: "Werkervaring" },
  { key: "education", label: "Opleiding" },
  { key: "skills", label: "Vaardigheden" },
  { key: "languages", label: "Talen" },
  { key: "other", label: "Overige onderdelen" },
];

const LANGUAGE_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2", "Moedertaal"];

function uid() {
  return crypto.randomUUID();
}

// ─── Section forms ────────────────────────────────────────────────────────────

function PersonalSection({
  doc,
  update,
}: {
  doc: ResumeDocument;
  update: (d: ResumeDocument) => void;
}) {
  const p = doc.personalDetails;
  const set = (key: keyof typeof p) => (e: React.ChangeEvent<HTMLInputElement>) =>
    update({ ...doc, personalDetails: { ...p, [key]: e.target.value } });

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert("Foto mag maximaal 2MB zijn.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      update({ ...doc, personalDetails: { ...p, photoUrl: ev.target?.result as string } });
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {/* Photo upload */}
      <div className="sm:col-span-2 flex items-center gap-5 rounded-xl border border-[#E5E3DA] bg-[#F8F8F6] p-4">
        <div className="relative shrink-0">
          <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-[#DDDBD1] bg-[#F2F1EC]">
            {p.photoUrl ? (
              <img src={p.photoUrl} alt="Foto" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Camera className="size-7 text-[#9A9A92]" />
              </div>
            )}
          </div>
          <label
            htmlFor="photo-upload"
            className="absolute -bottom-1 -right-1 flex size-7 cursor-pointer items-center justify-center rounded-full bg-[#111113] text-white shadow-md hover:bg-[#2E2E2C] transition-colors"
          >
            <Plus className="size-3.5" />
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={handlePhoto}
          />
        </div>
        <div>
          <div className="text-sm font-semibold text-[#111113]">Profielfoto (optioneel)</div>
          <div className="mt-0.5 text-xs text-[#9A9A92]">JPG, PNG of WebP · max 2 MB</div>
          <div className="mt-0.5 text-xs text-[#9A9A92]">Wordt getoond in Modern en Minimaal template</div>
          {p.photoUrl && (
            <button
              type="button"
              onClick={() => update({ ...doc, personalDetails: { ...p, photoUrl: "" } })}
              className="mt-2 text-xs font-medium text-[#FB5B36] hover:text-[#C0432E] transition-colors"
            >
              Foto verwijderen
            </button>
          )}
        </div>
      </div>

      <label>
        <span className="mb-2 block text-sm font-semibold">Voornaam</span>
        <Input value={p.firstName} onChange={set("firstName")} placeholder="Sophie" />
      </label>
      <label>
        <span className="mb-2 block text-sm font-semibold">Achternaam</span>
        <Input value={p.lastName} onChange={set("lastName")} placeholder="de Vries" />
      </label>
      <label className="sm:col-span-2">
        <span className="mb-2 block text-sm font-semibold">Professionele titel</span>
        <Input
          value={p.professionalTitle}
          onChange={set("professionalTitle")}
          placeholder="Bijv. Marketing specialist"
        />
      </label>
      <label>
        <span className="mb-2 block text-sm font-semibold">E-mailadres</span>
        <Input type="email" value={p.email} onChange={set("email")} placeholder="sophie@voorbeeld.nl" />
      </label>
      <label>
        <span className="mb-2 block text-sm font-semibold">Telefoonnummer</span>
        <Input value={p.phone} onChange={set("phone")} placeholder="06 12 34 56 78" />
      </label>
      <label>
        <span className="mb-2 block text-sm font-semibold">Woonplaats</span>
        <Input value={p.city} onChange={set("city")} placeholder="Utrecht" />
      </label>
      <label>
        <span className="mb-2 block text-sm font-semibold">LinkedIn (optioneel)</span>
        <Input
          value={p.linkedinUrl}
          onChange={set("linkedinUrl")}
          placeholder="linkedin.com/in/..."
        />
      </label>
      <label>
        <span className="mb-2 block text-sm font-semibold">Website (optioneel)</span>
        <Input value={p.websiteUrl} onChange={set("websiteUrl")} placeholder="mijnwebsite.nl" />
      </label>
    </div>
  );
}

function ProfileSection({
  doc,
  update,
}: {
  doc: ResumeDocument;
  update: (d: ResumeDocument) => void;
}) {
  const [isPending, startTransition] = useTransition();
  const [suggestion, setSuggestion] = useState<ImproveTextResult | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  function handleImprove() {
    if (!doc.profileSummary.trim()) return;
    setAiError(null);
    startTransition(async () => {
      const result = await improveText(doc.profileSummary, "Profiel/samenvatting sectie van een Nederlands cv");
      if ("error" in result) {
        setAiError(result.error);
      } else {
        setSuggestion(result.data);
        setShowModal(true);
      }
    });
  }

  function handleAccept() {
    if (suggestion) {
      update({ ...doc, profileSummary: suggestion.improved });
    }
    setShowModal(false);
    setSuggestion(null);
  }

  function handleIgnore() {
    setShowModal(false);
    setSuggestion(null);
  }

  return (
    <div className="grid gap-3">
      <div>
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-sm font-semibold">Profiel / samenvatting</span>
          <button
            type="button"
            onClick={handleImprove}
            disabled={isPending || !doc.profileSummary.trim()}
            className="flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? (
              <Loader2 className="size-3 animate-spin" />
            ) : (
              <Sparkles className="size-3" />
            )}
            {isPending ? "Even geduld…" : "Verbeter met AI"}
          </button>
        </div>
        <Textarea
          rows={6}
          value={doc.profileSummary}
          onChange={(e) => update({ ...doc, profileSummary: e.target.value })}
          placeholder="Een korte krachtige introductie over wie je bent, wat je kunt en wat je zoekt. Houd het bij 3-5 zinnen."
        />
      </div>
      {aiError && (
        <p className="rounded-xl bg-red-50 px-3 py-2 text-xs font-medium text-red-700">
          {aiError}
        </p>
      )}
      <p className="text-xs text-slate-400">
        Tip: schrijf in de eerste persoon en stem het af op elke vacature.
      </p>

      {/* AI suggestion modal */}
      {showModal && suggestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="size-5 text-emerald-600" />
              <h3 className="font-display text-lg font-bold text-slate-950">
                AI-suggestie
              </h3>
            </div>

            <div className="mb-4 rounded-xl bg-emerald-50 p-4">
              <p className="text-sm leading-relaxed text-slate-800">
                {suggestion.improved}
              </p>
            </div>

            {suggestion.changes.length > 0 && (
              <div className="mb-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                  Verbeteringen
                </p>
                <ul className="space-y-1">
                  {suggestion.changes.map((change, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-600">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleAccept}
                className="flex-1 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
              >
                Accepteren
              </button>
              <button
                type="button"
                onClick={handleIgnore}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Negeren
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function WorkSection({
  doc,
  update,
}: {
  doc: ResumeDocument;
  update: (d: ResumeDocument) => void;
}) {
  const jobs = doc.workExperience;

  const addJob = () =>
    update({
      ...doc,
      workExperience: [
        ...jobs,
        {
          id: uid(),
          jobTitle: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          isCurrent: false,
          bullets: [""],
        },
      ],
    });

  const removeJob = (id: string) =>
    update({ ...doc, workExperience: jobs.filter((j) => j.id !== id) });

  const setJob = (id: string, patch: Partial<WorkExperience>) =>
    update({
      ...doc,
      workExperience: jobs.map((j) => (j.id === id ? { ...j, ...patch } : j)),
    });

  const addBullet = (id: string) =>
    setJob(id, { bullets: [...(jobs.find((j) => j.id === id)?.bullets ?? []), ""] });

  const setBullet = (id: string, index: number, value: string) => {
    const job = jobs.find((j) => j.id === id);
    if (!job) return;
    const bullets = [...job.bullets];
    bullets[index] = value;
    setJob(id, { bullets });
  };

  const removeBullet = (id: string, index: number) => {
    const job = jobs.find((j) => j.id === id);
    if (!job) return;
    setJob(id, { bullets: job.bullets.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-6">
      {jobs.map((job, jobIdx) => (
        <div key={job.id} className="rounded-xl border border-slate-200 p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-semibold text-slate-700">Ervaring {jobIdx + 1}</p>
            <button
              type="button"
              onClick={() => removeJob(job.id)}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 className="size-4" />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span className="mb-1.5 block text-sm font-semibold">Functietitel</span>
              <Input
                value={job.jobTitle}
                onChange={(e) => setJob(job.id, { jobTitle: e.target.value })}
                placeholder="Software engineer"
              />
            </label>
            <label>
              <span className="mb-1.5 block text-sm font-semibold">Bedrijf</span>
              <Input
                value={job.company}
                onChange={(e) => setJob(job.id, { company: e.target.value })}
                placeholder="Bedrijfsnaam BV"
              />
            </label>
            <label>
              <span className="mb-1.5 block text-sm font-semibold">Locatie</span>
              <Input
                value={job.location}
                onChange={(e) => setJob(job.id, { location: e.target.value })}
                placeholder="Amsterdam"
              />
            </label>
            <label>
              <span className="mb-1.5 block text-sm font-semibold">Startdatum</span>
              <Input
                type="month"
                value={job.startDate}
                onChange={(e) => setJob(job.id, { startDate: e.target.value })}
              />
            </label>
            {!job.isCurrent && (
              <label>
                <span className="mb-1.5 block text-sm font-semibold">Einddatum</span>
                <Input
                  type="month"
                  value={job.endDate}
                  onChange={(e) => setJob(job.id, { endDate: e.target.value })}
                />
              </label>
            )}
            <label className="flex items-center gap-2 self-end pb-1">
              <Checkbox
                checked={job.isCurrent}
                onChange={(e) =>
                  setJob(job.id, { isCurrent: e.target.checked, endDate: e.target.checked ? "" : job.endDate })
                }
              />
              <span className="text-sm font-medium text-slate-700">Huidige functie</span>
            </label>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-sm font-semibold">Taakomschrijvingen</p>
            <div className="space-y-2">
              {job.bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Input
                    value={bullet}
                    onChange={(e) => setBullet(job.id, i, e.target.value)}
                    placeholder="Beschrijf een verantwoordelijkheid of prestatie..."
                  />
                  <button
                    type="button"
                    onClick={() => removeBullet(job.id, i)}
                    className="shrink-0 rounded-lg p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
                  >
                    <X className="size-3.5" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addBullet(job.id)}
                className="flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-900"
              >
                <Plus className="size-3.5" />
                Punt toevoegen
              </button>
            </div>
          </div>
        </div>
      ))}

      <Button type="button" variant="secondary" onClick={addJob}>
        <Plus className="size-4" />
        Werkervaring toevoegen
      </Button>
    </div>
  );
}

function EducationSection({
  doc,
  update,
}: {
  doc: ResumeDocument;
  update: (d: ResumeDocument) => void;
}) {
  const edus = doc.education;

  const addEdu = () =>
    update({
      ...doc,
      education: [
        ...edus,
        {
          id: uid(),
          institution: "",
          degree: "",
          fieldOfStudy: "",
          location: "",
          startDate: "",
          endDate: "",
          isCurrent: false,
          description: "",
        },
      ],
    });

  const removeEdu = (id: string) =>
    update({ ...doc, education: edus.filter((e) => e.id !== id) });

  const setEdu = (id: string, patch: Partial<Education>) =>
    update({ ...doc, education: edus.map((e) => (e.id === id ? { ...e, ...patch } : e)) });

  return (
    <div className="space-y-6">
      {edus.map((edu, idx) => (
        <div key={edu.id} className="rounded-xl border border-slate-200 p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-semibold text-slate-700">Opleiding {idx + 1}</p>
            <button
              type="button"
              onClick={() => removeEdu(edu.id)}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 className="size-4" />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="mb-1.5 block text-sm font-semibold">Onderwijsinstelling</span>
              <Input
                value={edu.institution}
                onChange={(e) => setEdu(edu.id, { institution: e.target.value })}
                placeholder="Universiteit van Amsterdam"
              />
            </label>
            <label>
              <span className="mb-1.5 block text-sm font-semibold">Diploma / niveau</span>
              <Input
                value={edu.degree}
                onChange={(e) => setEdu(edu.id, { degree: e.target.value })}
                placeholder="Bachelor"
              />
            </label>
            <label>
              <span className="mb-1.5 block text-sm font-semibold">Studierichting</span>
              <Input
                value={edu.fieldOfStudy}
                onChange={(e) => setEdu(edu.id, { fieldOfStudy: e.target.value })}
                placeholder="Bedrijfskunde"
              />
            </label>
            <label>
              <span className="mb-1.5 block text-sm font-semibold">Locatie</span>
              <Input
                value={edu.location}
                onChange={(e) => setEdu(edu.id, { location: e.target.value })}
                placeholder="Amsterdam"
              />
            </label>
            <label>
              <span className="mb-1.5 block text-sm font-semibold">Startdatum</span>
              <Input
                type="month"
                value={edu.startDate}
                onChange={(e) => setEdu(edu.id, { startDate: e.target.value })}
              />
            </label>
            {!edu.isCurrent && (
              <label>
                <span className="mb-1.5 block text-sm font-semibold">Einddatum</span>
                <Input
                  type="month"
                  value={edu.endDate}
                  onChange={(e) => setEdu(edu.id, { endDate: e.target.value })}
                />
              </label>
            )}
            <label className="flex items-center gap-2 self-end pb-1">
              <Checkbox
                checked={edu.isCurrent}
                onChange={(e) =>
                  setEdu(edu.id, { isCurrent: e.target.checked, endDate: e.target.checked ? "" : edu.endDate })
                }
              />
              <span className="text-sm font-medium text-slate-700">Nog bezig</span>
            </label>
            <label className="sm:col-span-2">
              <span className="mb-1.5 block text-sm font-semibold">
                Omschrijving (optioneel)
              </span>
              <Textarea
                rows={2}
                value={edu.description}
                onChange={(e) => setEdu(edu.id, { description: e.target.value })}
                placeholder="Scriptie, specialisatie of bijzondere prestaties..."
              />
            </label>
          </div>
        </div>
      ))}

      <Button type="button" variant="secondary" onClick={addEdu}>
        <Plus className="size-4" />
        Opleiding toevoegen
      </Button>
    </div>
  );
}

function SkillsSection({
  doc,
  update,
}: {
  doc: ResumeDocument;
  update: (d: ResumeDocument) => void;
}) {
  const [input, setInput] = useState("");

  const addSkill = () => {
    const trimmed = input.trim();
    if (!trimmed || doc.skills.includes(trimmed)) return;
    update({ ...doc, skills: [...doc.skills, trimmed] });
    setInput("");
  };

  const removeSkill = (skill: string) =>
    update({ ...doc, skills: doc.skills.filter((s) => s !== skill) });

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addSkill();
            }
          }}
          placeholder="Vaardigheid toevoegen (bijv. Python, Projectmanagement)"
        />
        <Button type="button" onClick={addSkill} variant="secondary">
          <Plus className="size-4" />
          Toevoegen
        </Button>
      </div>

      {doc.skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {doc.skills.map((skill) => (
            <span
              key={skill}
              className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="text-emerald-600 hover:text-emerald-900"
              >
                <X className="size-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {doc.skills.length === 0 && (
        <p className="text-sm text-slate-400">
          Voeg vaardigheden toe zoals programmeertalen, tools of soft skills.
        </p>
      )}
    </div>
  );
}

function LanguagesSection({
  doc,
  update,
}: {
  doc: ResumeDocument;
  update: (d: ResumeDocument) => void;
}) {
  const langs = doc.languages;

  const addLang = () =>
    update({
      ...doc,
      languages: [...langs, { id: uid(), name: "", level: "B2" }],
    });

  const removeLang = (id: string) =>
    update({ ...doc, languages: langs.filter((l) => l.id !== id) });

  const setLang = (id: string, patch: Partial<LanguageSkill>) =>
    update({ ...doc, languages: langs.map((l) => (l.id === id ? { ...l, ...patch } : l)) });

  return (
    <div className="space-y-4">
      {langs.map((lang) => (
        <div key={lang.id} className="flex items-end gap-3">
          <label className="flex-1">
            <span className="mb-1.5 block text-sm font-semibold">Taal</span>
            <Input
              value={lang.name}
              onChange={(e) => setLang(lang.id, { name: e.target.value })}
              placeholder="Nederlands"
            />
          </label>
          <label className="w-36">
            <span className="mb-1.5 block text-sm font-semibold">Niveau</span>
            <select
              value={lang.level}
              onChange={(e) => setLang(lang.id, { level: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            >
              {LANGUAGE_LEVELS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={() => removeLang(lang.id)}
            className="mb-1 rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      ))}

      <Button type="button" variant="secondary" onClick={addLang}>
        <Plus className="size-4" />
        Taal toevoegen
      </Button>
    </div>
  );
}

function NamedItemList({
  title,
  items,
  onChange,
  placeholder,
  withDescription = true,
}: {
  title: string;
  items: NamedResumeItem[];
  onChange: (items: NamedResumeItem[]) => void;
  placeholder: string;
  withDescription?: boolean;
}) {
  const add = () => onChange([...items, { id: uid(), name: "", description: "" }]);
  const remove = (id: string) => onChange(items.filter((i) => i.id !== id));
  const set = (id: string, patch: Partial<NamedResumeItem>) =>
    onChange(items.map((i) => (i.id === id ? { ...i, ...patch } : i)));

  return (
    <div className="space-y-3">
      <p className="text-sm font-bold text-slate-700">{title}</p>
      {items.map((item) => (
        <div key={item.id} className="flex items-start gap-2">
          <div className="flex-1 space-y-2">
            <Input
              value={item.name}
              onChange={(e) => set(item.id, { name: e.target.value })}
              placeholder={placeholder}
            />
            {withDescription && (
              <Input
                value={item.description}
                onChange={(e) => set(item.id, { description: e.target.value })}
                placeholder="Omschrijving (optioneel)"
              />
            )}
          </div>
          <button
            type="button"
            onClick={() => remove(item.id)}
            className="mt-1.5 rounded-lg p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
          >
            <X className="size-4" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={add}
        className="flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-900"
      >
        <Plus className="size-3.5" />
        {title} toevoegen
      </button>
    </div>
  );
}

function OtherSection({
  doc,
  update,
}: {
  doc: ResumeDocument;
  update: (d: ResumeDocument) => void;
}) {
  const [interestInput, setInterestInput] = useState("");

  const addInterest = () => {
    const trimmed = interestInput.trim();
    if (!trimmed || doc.interests.includes(trimmed)) return;
    update({ ...doc, interests: [...doc.interests, trimmed] });
    setInterestInput("");
  };

  return (
    <div className="space-y-8">
      <NamedItemList
        title="Certificaten"
        items={doc.certificates}
        onChange={(certificates) => update({ ...doc, certificates })}
        placeholder="Bijv. AWS Certified Developer"
      />
      <NamedItemList
        title="Cursussen"
        items={doc.courses}
        onChange={(courses) => update({ ...doc, courses })}
        placeholder="Bijv. UX Design Fundamentals"
      />

      <div className="space-y-3">
        <p className="text-sm font-bold text-slate-700">Interesses</p>
        <div className="flex gap-2">
          <Input
            value={interestInput}
            onChange={(e) => setInterestInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addInterest();
              }
            }}
            placeholder="Bijv. Fietsen, Fotografie"
          />
          <Button type="button" variant="secondary" onClick={addInterest}>
            <Plus className="size-4" />
            Toevoegen
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {doc.interests.map((interest) => (
            <span
              key={interest}
              className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
            >
              {interest}
              <button
                type="button"
                onClick={() =>
                  update({ ...doc, interests: doc.interests.filter((i) => i !== interest) })
                }
              >
                <X className="size-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      <NamedItemList
        title="Referenties"
        items={doc.references}
        onChange={(references) => update({ ...doc, references })}
        placeholder="Naam referentie"
        withDescription
      />
    </div>
  );
}

// ─── Save status indicator ────────────────────────────────────────────────────

function SaveStatus({ status }: { status: "idle" | "saving" | "saved" | "error" }) {
  if (status === "idle") return null;
  return (
    <span
      className={`text-xs font-medium ${
        status === "saving"
          ? "text-slate-400"
          : status === "saved"
            ? "text-emerald-600"
            : "text-red-500"
      }`}
    >
      {status === "saving" && "Opslaan…"}
      {status === "saved" && "Opgeslagen ✓"}
      {status === "error" && "Opslaan mislukt"}
    </span>
  );
}

// ─── Main editor ──────────────────────────────────────────────────────────────

interface CvEditorProps {
  initialId?: string;
  initialDoc?: ResumeDocument;
  initialTemplate?: TemplateId;
  initialAccentColor?: string;
  plan?: Plan;
}

export function CvEditor({ initialId, initialDoc, initialTemplate, initialAccentColor, plan = "free" }: CvEditorProps) {
  const [resumeId, setResumeId] = useState<string | null>(initialId ?? null);
  const [doc, setDoc] = useState<ResumeDocument>(initialDoc ?? createEmptyResumeDocument());
  const [activeSection, setActiveSection] = useState<SectionKey>("personal");
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [isDirty, setIsDirty] = useState(false);
  const [templateId, setTemplateId] = useState<TemplateId>(initialTemplate ?? "modern");
  const [accentColor, setAccentColor] = useState<string>(initialAccentColor ?? "#111113");
  const [, startTransition] = useTransition();
  const router = useRouter();
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const update = (next: ResumeDocument) => {
    setDoc(next);
    setIsDirty(true);
  };

  // Debounced autosave, fires 1.5 s after the last change
  useEffect(() => {
    if (!isDirty) return;
    setSaveStatus("saving");
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      startTransition(async () => {
        const result = await saveResume(resumeId, doc);
        if ("error" in result) {
          setSaveStatus("error");
        } else {
          if (!resumeId) {
            setResumeId(result.id);
            router.replace(`/dashboard/cv/${result.id}`);
          }
          setSaveStatus("saved");
          setIsDirty(false);
        }
      });
    }, 1500);

    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [doc, isDirty]); // eslint-disable-line react-hooks/exhaustive-deps

  const sectionIndex = SECTIONS.findIndex((s) => s.key === activeSection);
  const title =
    [doc.personalDetails.firstName, doc.personalDetails.lastName].filter(Boolean).join(" ") ||
    "Naamloos cv";

  return (
    <div className="mx-auto max-w-7xl">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon">
            <Link href="/dashboard/cv">
              <ArrowLeft className="size-5" />
            </Link>
          </Button>
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-950">{title}</h1>
            <p className="text-xs text-slate-500">
              {resumeId ? "Automatisch opslaan actief" : "Nog niet opgeslagen"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <SaveStatus status={saveStatus} />
          <PdfDownloadButton
            doc={doc}
            plan={plan}
            filename={`${title.replace(/\s+/g, "-").toLowerCase()}.pdf`}
          />
        </div>
      </div>

      {/* Three-column layout */}
      <div className="mt-7 grid gap-5 xl:grid-cols-[220px_1fr_380px]">
        {/* Section nav */}
        <Card className="h-fit p-3">
          <p className="px-3 pb-3 pt-2 text-xs font-bold uppercase tracking-[.12em] text-slate-400">
            Onderdelen
          </p>
          <nav>
            {SECTIONS.map(({ key, label }, i) => {
              const isActive = key === activeSection;
              const isDone = i < sectionIndex;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveSection(key)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                    isActive
                      ? "bg-emerald-50 font-semibold text-emerald-800"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] ${
                        isActive
                          ? "bg-emerald-700 text-white"
                          : isDone
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isDone ? <Check className="size-3" /> : i + 1}
                    </span>
                    {label}
                  </span>
                  <ChevronRight className="size-3.5 opacity-40" />
                </button>
              );
            })}
          </nav>
        </Card>

        {/* Editor panel */}
        <Card className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-bold text-slate-950">
                {SECTIONS[sectionIndex].label}
              </h2>
            </div>
            <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
              Stap {sectionIndex + 1} van {SECTIONS.length}
            </span>
          </div>

          <div className="mt-8">
            {activeSection === "personal" && <PersonalSection doc={doc} update={update} />}
            {activeSection === "profile" && <ProfileSection doc={doc} update={update} />}
            {activeSection === "work" && <WorkSection doc={doc} update={update} />}
            {activeSection === "education" && <EducationSection doc={doc} update={update} />}
            {activeSection === "skills" && <SkillsSection doc={doc} update={update} />}
            {activeSection === "languages" && <LanguagesSection doc={doc} update={update} />}
            {activeSection === "other" && <OtherSection doc={doc} update={update} />}
          </div>

          <div className="mt-8 flex justify-between">
            {sectionIndex > 0 ? (
              <Button
                type="button"
                variant="secondary"
                onClick={() => setActiveSection(SECTIONS[sectionIndex - 1].key)}
              >
                ← Vorige
              </Button>
            ) : (
              <div />
            )}
            {sectionIndex < SECTIONS.length - 1 && (
              <Button
                type="button"
                onClick={() => setActiveSection(SECTIONS[sectionIndex + 1].key)}
              >
                Volgende stap <ChevronRight className="size-4" />
              </Button>
            )}
          </div>
        </Card>

        {/* Preview panel */}
        <div id="cv-preview-panel" className="hidden xl:block">
          <div className="mb-3">
            <p className="mb-2 text-sm font-semibold text-slate-700">Live voorbeeld</p>
            <div className="flex flex-wrap gap-1.5">
              {TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTemplateId(t.id)}
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition ${
                    templateId === t.id
                      ? "bg-emerald-700 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            {["classic-sidebar", "modern-links", "header-band", "schoon", "serif"].includes(templateId) && (
              <div className="mt-2 flex items-center gap-1.5">
                <span className="text-[10px] text-slate-500">Kleur:</span>
                {["#111113","#1b5e7a","#1f3a5f","#16335c","#7a2e3f","#6d5ae6","#1f8a6d","#c9802b","#d9694e","#3a4a7a"].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setAccentColor(c)}
                    title={c}
                    style={{ backgroundColor: c }}
                    className={`size-4 rounded-full transition-transform hover:scale-125 ${accentColor === c ? "ring-2 ring-offset-1 ring-slate-400" : ""}`}
                  />
                ))}
              </div>
            )}
          </div>
          {templateId === "modern" && <ModernPreview doc={doc} />}
          {templateId === "klassiek" && <KlassiekPreview doc={doc} />}
          {templateId === "minimaal" && <MinimaalPreview doc={doc} />}
          {templateId === "classic-sidebar" && <ClassicSidebarPreview doc={doc} accentColor={accentColor} />}
          {templateId === "modern-links" && <ModernLinksPreview doc={doc} accentColor={accentColor} />}
          {templateId === "header-band" && <HeaderBandPreview doc={doc} accentColor={accentColor} />}
          {templateId === "schoon" && <SchoonPreview doc={doc} accentColor={accentColor} />}
          {templateId === "serif" && <SerifPreview doc={doc} accentColor={accentColor} />}
          <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-xs leading-5 text-emerald-900/70">
            <Sparkles className="mr-1 inline size-3.5" />
            Gebruik &ldquo;Verbeter met AI&rdquo; in het Profiel-onderdeel om je samenvatting te versterken.
          </div>
        </div>
      </div>
    </div>
  );
}
