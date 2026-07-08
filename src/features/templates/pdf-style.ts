// Shared styling options for the PDF templates: accent colour + font family.
// Uses only @react-pdf/renderer's built-in fonts (no external font loading).

export type PdfFont = "sans" | "serif";

export const DEFAULT_PDF_ACCENT = "#047857";
export const DEFAULT_PDF_FONT: PdfFont = "sans";

const FONTS: Record<PdfFont, { regular: string; bold: string }> = {
  sans: { regular: "Helvetica", bold: "Helvetica-Bold" },
  serif: { regular: "Times-Roman", bold: "Times-Bold" },
};

export function resolveFont(font: PdfFont | undefined) {
  return FONTS[font ?? DEFAULT_PDF_FONT];
}

/** Accepts a value only if it is a safe hex colour; otherwise the default. */
export function resolveAccent(accent: string | undefined): string {
  return typeof accent === "string" && /^#[0-9a-fA-F]{6}$/.test(accent)
    ? accent
    : DEFAULT_PDF_ACCENT;
}

export function normalizeFont(value: unknown): PdfFont {
  return value === "serif" ? "serif" : "sans";
}
