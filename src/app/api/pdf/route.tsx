import { NextResponse, type NextRequest } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { createClient } from "@/lib/supabase/server";
import { canDownloadPdf, type Plan } from "@/lib/entitlements";
import { validateResumeDocument } from "@/features/resumes/model";
import { ModernPdf } from "@/features/templates/modern-pdf";
import { KlassiekPdf } from "@/features/templates/klassiek-pdf";
import { MinimaalPdf } from "@/features/templates/minimaal-pdf";

// @react-pdf/renderer needs the Node runtime (not edge).
export const runtime = "nodejs";

type TemplateOption = "modern" | "klassiek" | "minimaal";

function pickTemplate(value: unknown): TemplateOption {
  return value === "klassiek" || value === "minimaal" ? value : "modern";
}

/** Strip characters that could break the Content-Disposition header. */
function safeFilename(value: unknown): string {
  if (typeof value !== "string" || !value.trim()) return "cv.pdf";
  const cleaned = value.replace(/[^a-zA-Z0-9._-]/g, "-").slice(0, 100);
  return cleaned.toLowerCase().endsWith(".pdf") ? cleaned : `${cleaned}.pdf`;
}

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Niet ingelogd." }, { status: 401 });
  }

  // Server-side paywall: this is the real enforcement point.
  const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single();
  const plan = (profile?.plan ?? "free") as Plan;
  if (!canDownloadPdf(plan)) {
    return NextResponse.json(
      { error: "PDF-download is beschikbaar vanaf het Starter-abonnement. Upgrade via je account." },
      { status: 403 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  const payload = (body ?? {}) as { doc?: unknown; template?: unknown; filename?: unknown };
  const validation = validateResumeDocument(payload.doc);
  if (!validation.success) {
    return NextResponse.json({ error: "Ongeldig cv-document." }, { status: 400 });
  }

  const doc = validation.data;
  const template = pickTemplate(payload.template);
  const element =
    template === "klassiek" ? (
      <KlassiekPdf doc={doc} />
    ) : template === "minimaal" ? (
      <MinimaalPdf doc={doc} />
    ) : (
      <ModernPdf doc={doc} />
    );

  let buffer: Buffer;
  try {
    buffer = await renderToBuffer(element);
  } catch {
    return NextResponse.json({ error: "PDF genereren mislukt. Probeer het opnieuw." }, { status: 500 });
  }

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${safeFilename(payload.filename)}"`,
      "Cache-Control": "no-store",
    },
  });
}
