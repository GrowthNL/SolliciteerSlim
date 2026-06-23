"use server";

import { getResend, FROM_EMAIL } from "@/lib/resend/client";

export type ContactState = { success: true } | { error: string } | null;

const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL || "info@growthmedia.nl";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solliciteer-slim.vercel.app";

export async function sendContactMessage(
  _: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { error: "Vul alle velden in." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Vul een geldig e-mailadres in." };
  }
  if (message.length < 10) {
    return { error: "Je bericht is te kort." };
  }

  const resend = getResend();

  // Send notification to inbox, this is the critical one
  const notifyResult = await resend.emails.send({
    from: FROM_EMAIL,
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject: `Nieuw contactbericht van ${name}`,
    html: `
      <p><strong>Naam:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Bericht:</strong></p>
      <p style="white-space:pre-wrap;">${message.replace(/</g, "&lt;")}</p>
    `,
  });

  if (notifyResult.error) {
    console.error("[contact] Resend notification error:", JSON.stringify(notifyResult.error));
    return { error: `Verzenden mislukt (${notifyResult.error.message}). Stuur je bericht direct naar info@cvmaken.nu.` };
  }

  // Confirmation to sender, fire-and-forget, don't fail the action if this bounces
  resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "We hebben je bericht ontvangen ✅",
    html: `
      <!DOCTYPE html>
      <html lang="nl">
      <head><meta charset="UTF-8" /></head>
      <body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1e293b;">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
          <tr><td align="center">
            <table width="100%" style="max-width:560px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08);">
              <tr><td style="background:#064e3b;padding:28px 40px;">
                <span style="font-size:20px;font-weight:700;color:#fff;">CVmaken.nu</span>
              </td></tr>
              <tr><td style="padding:36px 40px 32px;">
                <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#0f172a;">Bedankt, ${name}!</h1>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#475569;">
                  We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op, doorgaans binnen één werkdag.
                </p>
                <a href="${SITE_URL}/dashboard"
                   style="display:inline-block;background:#059669;color:#fff;font-weight:600;font-size:14px;padding:12px 28px;border-radius:10px;text-decoration:none;">
                  Ga naar dashboard →
                </a>
              </td></tr>
              <tr><td style="padding:20px 40px 28px;border-top:1px solid #f1f5f9;">
                <p style="margin:0;font-size:12px;color:#94a3b8;">
                  <a href="${SITE_URL}" style="color:#059669;text-decoration:none;">cvmaken.nu</a>
                </p>
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body>
      </html>
    `,
  }).catch((err) => console.error("[contact] Resend confirmation error:", err));

  return { success: true };
}
