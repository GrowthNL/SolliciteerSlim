"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ResumeDocument } from "@/features/resumes/model";
import { canDownloadPdf, type Plan } from "@/lib/entitlements";

interface PdfDownloadButtonProps {
  doc: ResumeDocument;
  plan: Plan;
  filename?: string;
}

type TemplateOption = "modern" | "klassiek" | "minimaal";

const templateLabels: Record<TemplateOption, string> = {
  modern: "Modern",
  klassiek: "Klassiek",
  minimaal: "Minimaal",
};

export function PdfDownloadButton({ doc, plan, filename = "cv.pdf" }: PdfDownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [template, setTemplate] = useState<TemplateOption>("modern");
  const [error, setError] = useState<string | null>(null);

  if (!canDownloadPdf(plan)) {
    return (
      <Button variant="secondary" asChild>
        <Link href="/prijzen">
          <Lock className="size-4" />
          PDF (upgrade)
        </Link>
      </Button>
    );
  }

  const handleDownload = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doc, template, filename }),
      });

      if (!res.ok) {
        let message = "PDF genereren mislukt. Probeer het opnieuw.";
        try {
          const data = await res.json();
          if (data?.error) message = data.error;
        } catch {
          // response was not JSON; keep the default message
        }
        setError(message);
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setError("PDF genereren mislukt. Controleer je verbinding en probeer het opnieuw.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div>
        <span className="text-xs text-slate-500 font-medium">Template</span>
        <div className="flex gap-2 flex-wrap mt-1">
          {(Object.keys(templateLabels) as TemplateOption[]).map((t) => (
            <span
              key={t}
              onClick={() => setTemplate(t)}
              className={
                template === t
                  ? "px-3 py-1 rounded-full text-xs cursor-pointer bg-emerald-100 text-emerald-800 font-semibold"
                  : "px-3 py-1 rounded-full text-xs cursor-pointer bg-slate-100 text-slate-600 hover:bg-slate-200"
              }
            >
              {templateLabels[t]}
            </span>
          ))}
        </div>
      </div>
      <Button variant="secondary" onClick={handleDownload} disabled={loading}>
        <Download className="size-4" />
        {loading ? "PDF maken…" : "Download PDF"}
      </Button>
      {error && <p className="text-xs text-red-700">{error}</p>}
    </div>
  );
}
