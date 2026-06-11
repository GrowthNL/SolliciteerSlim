"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ResumeDocument } from "@/features/resumes/model";

interface PdfDownloadButtonProps {
  doc: ResumeDocument;
  filename?: string;
}

export function PdfDownloadButton({ doc, filename = "cv.pdf" }: PdfDownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      // Dynamic import keeps @react-pdf/renderer out of the initial bundle
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
