import "server-only";
import { Resend } from "resend";

let _resend: Resend | null = null;

export function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY ?? "re_placeholder");
  }
  return _resend;
}

// Use a verified domain via FROM_EMAIL env var in production.
// Falls back to Resend's shared sender (works without domain verification).
export const FROM_EMAIL =
  process.env.FROM_EMAIL || "SolliciteerSlim <onboarding@resend.dev>";
