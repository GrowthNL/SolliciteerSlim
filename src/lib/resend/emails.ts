import "server-only";
import { getResend, FROM_EMAIL } from "./client";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solliciteer-slim.vercel.app";

function baseTemplate(content: string): string {
  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08);">
        <!-- header -->
        <tr>
          <td style="background:#064e3b;padding:28px 40px;">
            <span style="font-size:20px;font-weight:700;color:#fff;letter-spacing:-.3px;">CVmaken.nu</span>
          </td>
        </tr>
        <!-- body -->
        <tr><td style="padding:36px 40px 32px;">
          ${content}
        </td></tr>
        <!-- footer -->
        <tr>
          <td style="padding:20px 40px 28px;border-top:1px solid #f1f5f9;">
            <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.6;">
              Je ontvangt deze e-mail omdat je een account hebt bij CVmaken.nu.<br />
              <a href="${SITE_URL}" style="color:#059669;text-decoration:none;">cvmaken.nu</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function sendWelcomeEmail(email: string, name?: string) {
  const displayName = name?.trim() || "daar";

  const html = baseTemplate(`
    <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#0f172a;">Welkom, ${displayName}! 🎉</h1>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#475569;">
      Je account is aangemaakt en je kunt direct aan de slag met je eerste cv.
    </p>
    <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td style="background:#f0fdf4;border-radius:12px;padding:20px 24px;">
          <p style="margin:0 0 12px;font-size:13px;font-weight:600;color:#064e3b;">Wat kun je doen?</p>
          <p style="margin:0 0 6px;font-size:14px;color:#334155;">✓ Maak een professioneel cv in minuten</p>
          <p style="margin:0 0 6px;font-size:14px;color:#334155;">✓ Analyseer vacatures op trefwoorden</p>
          <p style="margin:0;font-size:14px;color:#334155;">✓ Schrijf gerichte sollicitatiebrieven met AI</p>
        </td>
      </tr>
    </table>
    <a href="${SITE_URL}/dashboard"
       style="display:inline-block;background:#059669;color:#fff;font-weight:600;font-size:14px;padding:12px 28px;border-radius:10px;text-decoration:none;">
      Ga naar mijn dashboard →
    </a>
    <p style="margin:28px 0 0;font-size:14px;color:#64748b;line-height:1.7;">
      Heb je vragen? Stuur een e-mail naar
      <a href="mailto:info@cvmaken.nu" style="color:#059669;text-decoration:none;">info@cvmaken.nu</a>.
    </p>
  `);

  return getResend().emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "Welkom bij CVmaken.nu 👋",
    html,
  });
}

export async function sendPaymentConfirmationEmail(
  email: string,
  name: string | undefined,
  plan: "starter" | "pro",
) {
  const displayName = name?.trim() || "daar";
  const planLabel = plan === "pro" ? "Pro" : "Starter";
  const planFeatures =
    plan === "pro"
      ? [
          "Onbeperkt cv&apos;s opslaan",
          "PDF downloaden",
          "10 AI-credits per maand (verbeteringen, ATS-check, sollicitatiebrieven)",
        ]
      : ["Tot 3 cv&apos;s opslaan", "PDF downloaden"];

  const featureRows = planFeatures
    .map((f) => `<p style="margin:0 0 6px;font-size:14px;color:#334155;">✓ ${f}</p>`)
    .join("");

  const html = baseTemplate(`
    <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#0f172a;">Betaling bevestigd!</h1>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#475569;">
      Bedankt, ${displayName}. Je <strong>${planLabel}</strong>-abonnement is actief.
    </p>
    <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;width:100%;">
      <tr>
        <td style="background:#f0fdf4;border-radius:12px;padding:20px 24px;">
          <p style="margin:0 0 12px;font-size:13px;font-weight:600;color:#064e3b;">Jouw ${planLabel}-voordelen</p>
          ${featureRows}
        </td>
      </tr>
    </table>
    <a href="${SITE_URL}/dashboard"
       style="display:inline-block;background:#059669;color:#fff;font-weight:600;font-size:14px;padding:12px 28px;border-radius:10px;text-decoration:none;">
      Ga naar mijn dashboard →
    </a>
    <p style="margin:28px 0 0;font-size:14px;color:#64748b;line-height:1.7;">
      Je kunt je abonnement beheren via
      <a href="${SITE_URL}/dashboard/account" style="color:#059669;text-decoration:none;">Account</a>.
    </p>
  `);

  return getResend().emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: `Je ${planLabel}-abonnement is actief ✅`,
    html,
  });
}
