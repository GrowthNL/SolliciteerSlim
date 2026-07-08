export const CONSENT_KEY = "cvmaken_cookie_consent";
export const CONSENT_EVENT = "cvmaken:consent-change";

export type ConsentValue = "granted" | "denied";

/** Reads the stored analytics-cookie choice, or null if not decided yet. */
export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

/** Persists the choice and notifies listeners in the same tab. */
export function setConsent(value: ConsentValue) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
