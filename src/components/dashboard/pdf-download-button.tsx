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
    try {
      const [{ pdf }, templateModule] = await Promise.all([
        import("@react-pdf/renderer"),
        template === "klassiek"
          ? import("@/features/templates/klassiek-pdf")
          : template === "minimaal"
          ? import("@/features/templates/minimaal-pdf")
          : import("@/features/templates/modern-pdf"),
      ]);

      let blob: Blob;
      if (template === "klassiek") {
        const { KlassiekPdf } = templateModule as typeof import("@/features/templates/klassiek-pdf");
        blob = await pdf(<KlassiekPdf doc={doc} />).toBlob();
      } else if (template === "minimaal") {
        const { MinimaalPdf } = templateModule as typeof import("@/features/templates/minimaal-pdf");
        blob = await pdf(<MinimaalPdf doc={doc} />).toBlob();
      } else {
        const { ModernPdf } = templateModule as typeof import("@/features/templates/modern-pdf");
        blob = await pdf(<ModernPdf doc={doc} />).toBlob();
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF genereren mislukt:", err);
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
    </div>
  );
}
