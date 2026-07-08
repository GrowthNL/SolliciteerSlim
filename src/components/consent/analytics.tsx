"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getConsent, CONSENT_EVENT } from "@/lib/consent";

/**
 * Loads privacy-friendly, cookieless Plausible analytics — but only after the
 * user grants consent and only when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is configured.
 * Without the env var this renders nothing, so it is safe in every environment.
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    setGranted(getConsent() === "granted");
    function onChange(e: Event) {
      setGranted((e as CustomEvent).detail === "granted");
    }
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!domain || !granted) return null;

  return (
    <Script
      src="https://plausible.io/js/script.js"
      data-domain={domain}
      strategy="afterInteractive"
    />
  );
}
