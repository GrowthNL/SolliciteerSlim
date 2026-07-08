import "server-only";
import OpenAI from "openai";

/** Max wait per OpenAI request before the SDK aborts it. */
export const AI_TIMEOUT_MS = 30_000;

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: AI_TIMEOUT_MS,
  maxRetries: 1,
});

export const DEFAULT_MODEL = "gpt-4o-mini";

/** User-friendly Dutch message for an OpenAI failure, distinguishing timeouts. */
export function aiErrorMessage(err: unknown): string {
  if (
    err instanceof OpenAI.APIConnectionTimeoutError ||
    (err instanceof Error && err.name === "AbortError")
  ) {
    return "De AI-service reageerde niet op tijd. Probeer het over een moment opnieuw.";
  }
  return "OpenAI-verzoek mislukt. Probeer het opnieuw.";
}
