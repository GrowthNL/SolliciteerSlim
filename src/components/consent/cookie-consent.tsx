"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsent, setConsent, CONSENT_EVENT } from "@/lib/consent";

/**
 * Privacy-friendly cookie banner. Analytics only load after "Accepteren";
 * "Weigeren" stores an explicit denial so the banner does not reappear.
 * Re-openable from anywhere by dispatching CONSENT_EVENT with detail "reset".
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
    function onChange(e: Event) {
      if ((e as CustomEvent).detail === "reset") setVisible(true);
    }
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!visible) return null;

  function choose(value: "granted" | "denied") {
    setConsent(value);
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie-toestemming"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white/95 p-4 shadow-[0_-8px_30px_rgba(17,17,19,0.08)] backdrop-blur sm:p-5"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          We gebruiken alleen analytische cookies om de site te verbeteren. Je gegevens worden
          niet verkocht. Lees meer in ons{" "}
          <Link href="/privacy" className="font-semibold text-emerald-700 hover:underline">
            privacybeleid
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Weigeren
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
