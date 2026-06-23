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

export function PdfDownloadButton({ doc, plan, filename = "cv.pdf" }: PdfDownloadButtonProps) {
  const [loading, setLoading] = useState(false);

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
      const [{ pdf }, { ModernPdf }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/features/templates/modern-pdf"),
      ]);
      const blob = await pdf(<ModernPdf doc={doc} />).toBlob();
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
    <Button variant="secondary" onClick={handleDownload} disabled={loading}>
      <Download className="size-4" />
      {loading ? "PDF maken…" : "Download PDF"}
    </Button>
  );
}
