"use client";

import { useEffect, useState, useTransition } from "react";
import { Target, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { analyzeVacature, getJobPosts, type VacatureAnalysis, type JobPostRow } from "@/app/actions/ai";

export default function Page() {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobText, setJobText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<VacatureAnalysis | null>(null);
  const [jobPosts, setJobPosts] = useState<JobPostRow[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    getJobPosts().then(setJobPosts);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setAnalysis(null);

    if (!company.trim() || !jobTitle.trim() || !jobText.trim()) {
      setError("Vul alle velden in.");
      return;
    }

    startTransition(async () => {
      const result = await analyzeVacature(jobText, company, jobTitle);
      if ("error" in result) {
        setError(result.error);
      } else {
        setAnalysis(result.data);
        // Refresh list
        const updated = await getJobPosts();
        setJobPosts(updated);
        // Reset form
        setCompany("");
        setJobTitle("");
        setJobText("");
      }
    });
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100">
          <Target className="size-5 text-emerald-700" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-950">Vacatures</h1>
          <p className="text-slate-600">Analyseer vacatureteksten en ontdek de sleutelwoorden.</p>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>Vacature analyseren</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-700">Bedrijf</span>
                <Input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Bedrijfsnaam BV"
                  disabled={isPending}
                />
              </label>
              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-700">Functietitel</span>
                <Input
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Software Engineer"
                  disabled={isPending}
                />
              </label>
            </div>
            <label>
              <span className="mb-2 block text-sm font-semibold text-slate-700">Vacaturetekst</span>
              <Textarea
                rows={10}
                value={jobText}
                onChange={(e) => setJobText(e.target.value)}
                placeholder="Plak hier de volledige vacaturetekst..."
                disabled={isPending}
              />
            </label>
            {error && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </p>
            )}
            <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
              {isPending ? "Even geduld…" : "Analyseer vacature"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Analysis results */}
      {analysis && (
        <div className="space-y-4">
          <h2 className="font-display text-xl font-bold text-slate-950">Analyseresultaten</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Required skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Vereiste vaardigheden</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {analysis.required_skills.length > 0 ? (
                    analysis.required_skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400">Geen gevonden.</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Nice to have */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Nice to have</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {analysis.nice_to_have.length > 0 ? (
                    analysis.nice_to_have.map((skill) => (
                      <Badge
                        key={skill}
                        className="border-blue-200 bg-blue-50 text-blue-800"
                      >
                        {skill}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400">Geen gevonden.</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* ATS keywords */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">ATS-keywords</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {analysis.keywords.length > 0 ? (
                    analysis.keywords.map((kw) => (
                      <Badge
                        key={kw}
                        className="border-slate-200 bg-slate-100 text-slate-700"
                      >
                        {kw}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400">Geen gevonden.</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Verantwoordelijkheden</CardTitle>
              </CardHeader>
              <CardContent>
                {analysis.responsibilities.length > 0 ? (
                  <ul className="space-y-1.5">
                    {analysis.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700">
                        <span className="mt-0.5 shrink-0 text-emerald-500">•</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-400">Geen gevonden.</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Culture hints */}
          {analysis.culture_hints.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Bedrijfscultuur</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {analysis.culture_hints.map((hint) => (
                    <Badge
                      key={hint}
                      className="border-amber-200 bg-amber-50 text-amber-800"
                    >
                      {hint}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Previously saved vacatures */}
      {jobPosts.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-display text-xl font-bold text-slate-950">
            Opgeslagen vacatures ({jobPosts.length})
          </h2>
          <div className="space-y-3">
            {jobPosts.map((post) => (
              <Card key={post.id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between p-5 text-left"
                  onClick={() =>
                    setExpandedId(expandedId === post.id ? null : post.id)
                  }
                >
                  <div>
                    <p className="font-semibold text-slate-900">{post.job_title}</p>
                    <p className="text-sm text-slate-500">{post.company}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">
                      {new Date(post.created_at).toLocaleDateString("nl-NL")}
                    </span>
                    {expandedId === post.id ? (
                      <ChevronUp className="size-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="size-4 text-slate-400" />
                    )}
                  </div>
                </button>
                {expandedId === post.id && post.extracted_keywords_json && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                          Vereiste vaardigheden
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {post.extracted_keywords_json.required_skills.map((s) => (
                            <Badge key={s} className="text-xs">{s}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                          ATS-keywords
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {post.extracted_keywords_json.keywords.map((k) => (
                            <Badge key={k} className="border-slate-200 bg-slate-100 text-xs text-slate-700">
                              {k}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
