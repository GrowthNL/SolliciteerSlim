"use client";

import { CONSENT_EVENT } from "@/lib/consent";

/** Re-opens the cookie banner so users can change their choice later. */
export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: "reset" }))}
      className="text-sm text-[#9A9A92] transition-colors hover:text-[#C6F24E]"
    >
      Cookievoorkeuren
    </button>
  );
}
