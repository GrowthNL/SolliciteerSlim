"use client";

import { useState, useTransition } from "react";
import { ScanSearch, CheckCircle, XCircle, AlertCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateAtsCheck, getJobPosts, type AtsCheckResult, type JobPostRow } from "@/app/actions/ai";
import { getResumes } from "@/app/actions/resumes";
import type { ResumeDocument } from "@/features/resumes/model";

function serializeCvToText(doc: ResumeDocument): string {
  const p = doc.personalDetails;
  const parts: string[] = [];
  if (p.firstName || p.lastName) parts.push(`${p.firstName} ${p.lastName}`.trim());
  if (p.professionalTitle) parts.push(p.professionalTitle);
  if (doc.profileSummary) parts.push(doc.profileSummary);
  doc.workExperience.forEach((w) => {
    parts.push(`${w.jobTitle} bij ${w.company}`);
    if (w.bullets.length) parts.push(w.bullets.join(" "));
  });
  doc.education.forEach((e) => {
    parts.push(`${e.degree} ${e.fieldOfStudy} - ${e.institution}`);
  });
  if (doc.skills.length) parts.push("Vaardigheden: " + doc.skills.join(", "));
  if (doc.languages.length) parts.push("Talen: " + doc.languages.map((l) => l.name).join(", "));
  return parts.join("\n");
}

function ScoreRing({ score }: { score: number }) {
  const color = score >= 70 ? "text-emerald-600" : score >= 40 ? "text-amber-500" : "text-red-500";
  const bg = score >= 70 ? "bg-emerald-50" : score >= 40 ? "bg-amber-50" : "bg-red-50";
  return (
    <div className={`flex flex-col items-center justify-center rounded-2xl ${bg} p-6`}>
      <span className={`font-display text-6xl font-bold ${color}`}>{score}</span>
      <span className="mt-1 text-sm font-semibold text-slate-600">ATS-score</span>
      <span className="mt-0.5 text-xs text-slate-400">van de 100</span>
    </div>
  );
}

export default function AtsCheckPage() {
  const [resumes, setResumes] = useState<{ id: string; title: string; data_json: ResumeDocument }[] | null>(null);
  const [jobPosts, setJobPosts] = useState<JobPostRow[] | null>(null);
  const [selectedCv, setSelectedCv] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [result, setResult] = useState<AtsCheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, startTransition] = useTransition();
  const [dataLoading, startDataLoad] = useTransition();

  // Load data on first render
  useState(() => {
    startDataLoad(async () => {
      const [r, j] = await Promise.all([getResumes(), getJobPosts()]);
      setResumes(r as { id: string; title: string; data_json: ResumeDocument }[]);
      setJobPosts(j);
    });
  });

  const handleCheck = () => {
    if (!selectedCv || !selectedJob) return;
    setError(null);
    setResult(null);

    startTransition(async () => {
      const cv = resumes?.find((r) => r.id === selectedCv);
      if (!cv) return;
      const cvText = serializeCvToText(cv.data_json);
      const res = await generateAtsCheck(cvText, selectedJob);
      if ("error" in res) {
        setError(res.error);
      } else {
        setResult(res.data);
      }
    });
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center gap-3">
        <ScanSearch className="size-7 text-emerald-700" />
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-950">ATS-check</h1>
          <p className="mt-1 text-slate-600">Vergelijk je cv met een vacature en zie hoe goed je scoort.</p>
        </div>
      </div>

      <Card className="mt-8">
        <CardContent className="pt-6 space-y-5">
          {/* CV selector */}
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-800">Selecteer cv</span>
            <div className="relative">
              <select
                value={selectedCv}
                onChange={(e) => setSelectedCv(e.target.value)}
                disabled={dataLoading}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">— Kies een cv —</option>
                {resumes?.map((r) => (
                  <option key={r.id} value={r.id}>{r.title}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-3 size-4 text-slate-400" />
            </div>
          </label>

          {/* Vacature selector */}
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-800">Selecteer vacature</span>
            <div className="relative">
              <select
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                disabled={dataLoading}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">— Kies een vacature —</option>
                {jobPosts?.map((j) => (
                  <option key={j.id} value={j.id}>{j.job_title} — {j.company}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-3 size-4 text-slate-400" />
            </div>
            {jobPosts?.length === 0 && (
              <p className="mt-1.5 text-xs text-slate-500">
                Nog geen vacatures opgeslagen. Ga naar{" "}
                <a href="/dashboard/vacatures" className="text-emerald-700 underline">Vacatures</a>{" "}
                om er een te analyseren.
              </p>
            )}
          </label>

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
          )}

          <Button
            onClick={handleCheck}
            disabled={!selectedCv || !selectedJob || loading}
            className="w-full"
          >
            <ScanSearch className="size-4" />
            {loading ? "ATS-check uitvoeren…" : "Start ATS-check"}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <div className="mt-8 space-y-5">
          {/* Score */}
          <div className="grid grid-cols-[auto_1fr] gap-5">
            <ScoreRing score={result.score} />
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Wat betekent dit?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 leading-6">
                {result.score >= 70
                  ? "Je cv sluit goed aan bij deze vacature. De recruiter-software zal je cv waarschijnlijk doorlaten."
                  : result.score >= 40
                  ? "Je cv heeft potentie maar mist nog een aantal sleutelwoorden. Voeg de ontbrekende keywords toe."
                  : "Je cv sluit nog niet goed aan bij deze vacature. Pas je cv aan op basis van de aanbevelingen."}
              </CardContent>
            </Card>
          </div>

          {/* Matched */}
          {result.matched_keywords.length > 0 && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-emerald-600" />
                  <CardTitle className="text-base">Aanwezige keywords ({result.matched_keywords.length})</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {result.matched_keywords.map((k) => (
                    <span key={k} className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">{k}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Missing */}
          {result.missing_keywords.length > 0 && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <XCircle className="size-4 text-red-500" />
                  <CardTitle className="text-base">Ontbrekende keywords ({result.missing_keywords.length})</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {result.missing_keywords.map((k) => (
                    <span key={k} className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">{k}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="size-4 text-amber-500" />
                  <CardTitle className="text-base">Aanbevelingen</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendations.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-0.5 size-5 shrink-0 rounded-full bg-amber-100 text-center text-xs font-bold leading-5 text-amber-700">{i + 1}</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
