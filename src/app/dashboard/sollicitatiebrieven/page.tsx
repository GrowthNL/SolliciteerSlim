"use client";

import { useEffect, useState, useTransition } from "react";
import { LetterText, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  generateCoverLetter,
  updateCoverLetter,
  getCoverLetters,
  getJobPosts,
  type CoverLetterRow,
  type JobPostRow,
} from "@/app/actions/ai";
import { getResumes, type ResumeRow } from "@/app/actions/resumes";

type Tone = "professioneel" | "enthousiast" | "informeel";

const TONES: { value: Tone; label: string; description: string }[] = [
  { value: "professioneel", label: "Professioneel", description: "Formeel en zakelijk" },
  { value: "enthousiast", label: "Enthousiast", description: "Energiek en gedreven" },
  { value: "informeel", label: "Informeel", description: "Toegankelijk en menselijk" },
];

export default function Page() {
  const [resumes, setResumes] = useState<ResumeRow[]>([]);
  const [jobPosts, setJobPosts] = useState<JobPostRow[]>([]);
  const [coverLetters, setCoverLetters] = useState<CoverLetterRow[]>([]);

  const [selectedResumeId, setSelectedResumeId] = useState("");
  const [selectedJobPostId, setSelectedJobPostId] = useState("");
  const [tone, setTone] = useState<Tone>("professioneel");

  const [generatedContent, setGeneratedContent] = useState("");
  const [generatedLetterId, setGeneratedLetterId] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [generateError, setGenerateError] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  const [isGenerating, startGenerating] = useTransition();
  const [isSaving, startSaving] = useTransition();

  useEffect(() => {
    Promise.all([getResumes(), getJobPosts(), getCoverLetters()]).then(
      ([r, j, c]) => {
        setResumes(r);
        setJobPosts(j);
        setCoverLetters(c);
      },
    );
  }, []);

  function buildCvSummary(resume: ResumeRow): string {
    const doc = resume.data_json;
    const name = [doc.personalDetails.firstName, doc.personalDetails.lastName]
      .filter(Boolean)
      .join(" ");
    const title = doc.personalDetails.professionalTitle;
    const profile = doc.profileSummary;
    const skills = doc.skills.slice(0, 8).join(", ");
    const recentJobs = doc.workExperience
      .slice(0, 2)
      .map((j) => `${j.jobTitle} bij ${j.company}`)
      .join("; ");

    return [
      name && `Naam: ${name}`,
      title && `Functie: ${title}`,
      profile && `Profiel: ${profile}`,
      skills && `Vaardigheden: ${skills}`,
      recentJobs && `Werkervaring: ${recentJobs}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setGenerateError(null);
    setSaveSuccess(false);

    if (!selectedResumeId) {
      setGenerateError("Selecteer een cv.");
      return;
    }
    if (!selectedJobPostId) {
      setGenerateError("Selecteer een vacature.");
      return;
    }

    const resume = resumes.find((r) => r.id === selectedResumeId);
    if (!resume) {
      setGenerateError("CV niet gevonden.");
      return;
    }

    const cvSummary = buildCvSummary(resume);

    startGenerating(async () => {
      const result = await generateCoverLetter(cvSummary, selectedJobPostId, tone);
      if ("error" in result) {
        setGenerateError(result.error);
      } else {
        setGeneratedContent(result.data.content);
        setGeneratedLetterId(result.data.cover_letter_id);
        // Refresh list
        const updated = await getCoverLetters();
        setCoverLetters(updated);
      }
    });
  }

  function handleSave() {
    if (!generatedLetterId || !generatedContent) return;
    setSaveError(null);
    setSaveSuccess(false);

    startSaving(async () => {
      const result = await updateCoverLetter(generatedLetterId, generatedContent);
      if (result.error) {
        setSaveError(result.error);
      } else {
        setSaveSuccess(true);
        const updated = await getCoverLetters();
        setCoverLetters(updated);
      }
    });
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100">
          <LetterText className="size-5 text-emerald-700" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-950">Sollicitatiebrieven</h1>
          <p className="text-slate-600">Genereer gerichte brieven op basis van jouw cv en de vacature.</p>
        </div>
      </div>

      {/* Generator form */}
      <Card>
        <CardHeader>
          <CardTitle>Brief genereren</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGenerate} className="space-y-5">
            {/* CV selector */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Selecteer een cv
              </label>
              <select
                value={selectedResumeId}
                onChange={(e) => setSelectedResumeId(e.target.value)}
                disabled={isGenerating}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              >
                <option value="">— Kies een cv —</option>
                {resumes.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.title}
                  </option>
                ))}
              </select>
              {resumes.length === 0 && (
                <p className="mt-1.5 text-xs text-slate-400">
                  Je hebt nog geen cv&apos;s. Maak er eerst een aan.
                </p>
              )}
            </div>

            {/* Job post selector */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Selecteer een vacature
              </label>
              <select
                value={selectedJobPostId}
                onChange={(e) => setSelectedJobPostId(e.target.value)}
                disabled={isGenerating}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              >
                <option value="">— Kies een vacature —</option>
                {jobPosts.map((j) => (
                  <option key={j.id} value={j.id}>
                    {j.job_title} — {j.company}
                  </option>
                ))}
              </select>
              {jobPosts.length === 0 && (
                <p className="mt-1.5 text-xs text-slate-400">
                  Je hebt nog geen vacatures geanalyseerd. Ga naar Vacatures om te beginnen.
                </p>
              )}
            </div>

            {/* Tone selector */}
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">Toon</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {TONES.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => setTone(t.value)}
                    disabled={isGenerating}
                    className={`rounded-xl border p-3 text-left transition ${
                      tone === t.value
                        ? "border-emerald-400 bg-emerald-50 ring-2 ring-emerald-200"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <p className="text-sm font-semibold text-slate-800">{t.label}</p>
                    <p className="text-xs text-slate-500">{t.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {generateError && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {generateError}
              </p>
            )}

            <Button type="submit" disabled={isGenerating} className="w-full sm:w-auto">
              {isGenerating ? "Even geduld…" : "Genereer sollicitatiebrief"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Generated letter */}
      {generatedContent && (
        <Card>
          <CardHeader>
            <CardTitle>Gegenereerde sollicitatiebrief</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              rows={16}
              value={generatedContent}
              onChange={(e) => {
                setGeneratedContent(e.target.value);
                setSaveSuccess(false);
              }}
            />
            {saveError && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {saveError}
              </p>
            )}
            <div className="flex items-center gap-3">
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Opslaan…" : "Opslaan"}
              </Button>
              {saveSuccess && (
                <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                  <Check className="size-4" />
                  Opgeslagen
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Previously saved cover letters */}
      {coverLetters.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-display text-xl font-bold text-slate-950">
            Opgeslagen brieven ({coverLetters.length})
          </h2>
          <div className="space-y-3">
            {coverLetters.map((letter) => (
              <Card key={letter.id}>
                <CardContent className="p-5">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">
                        {letter.job_posts?.job_title ?? "Onbekende functie"}
                      </p>
                      <p className="text-sm text-slate-500">
                        {letter.job_posts?.company ?? "Onbekend bedrijf"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium capitalize text-emerald-700">
                        {letter.tone}
                      </span>
                      <span className="text-xs text-slate-400">
                        {new Date(letter.created_at).toLocaleDateString("nl-NL")}
                      </span>
                    </div>
                  </div>
                  <p className="line-clamp-3 text-sm text-slate-600">{letter.content}</p>
                  <button
                    type="button"
                    className="mt-3 text-sm font-medium text-emerald-700 hover:text-emerald-900"
                    onClick={() => {
                      setGeneratedContent(letter.content);
                      setGeneratedLetterId(letter.id);
                      setSaveSuccess(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Bewerken →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
