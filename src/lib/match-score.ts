export type MatchInput = {
  required_skills?: string[];
  nice_to_have?: string[];
  keywords?: string[];
};

export type MatchTerm = { term: string; present: boolean };

export type MatchScore = {
  /** Weighted overall percentage, 0-100. */
  score: number;
  required: { matched: number; total: number; terms: MatchTerm[] };
  optional: { matched: number; total: number; terms: MatchTerm[] };
};

/** Weight of required skills vs. optional keywords in the overall score. */
const REQUIRED_WEIGHT = 0.7;

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

function dedupe(arr: string[] | undefined): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of arr ?? []) {
    const term = raw.trim();
    const key = normalize(term);
    if (term && !seen.has(key)) {
      seen.add(key);
      out.push(term);
    }
  }
  return out;
}

/**
 * Deterministic, explainable keyword match between a CV and a job posting.
 * A term counts as present when it appears literally (accent- and
 * case-insensitive) in the CV text. No AI, so the result is fully
 * reproducible and every point is traceable to a specific term.
 */
export function computeMatchScore(cvText: string, input: MatchInput): MatchScore {
  const haystack = normalize(cvText);

  const required = dedupe(input.required_skills);
  const requiredKeys = new Set(required.map(normalize));
  const optional = dedupe([...(input.nice_to_have ?? []), ...(input.keywords ?? [])]).filter(
    (t) => !requiredKeys.has(normalize(t)),
  );

  const evaluate = (terms: string[]): MatchTerm[] =>
    terms.map((term) => ({ term, present: normalize(term).length > 0 && haystack.includes(normalize(term)) }));

  const reqTerms = evaluate(required);
  const optTerms = evaluate(optional);
  const reqMatched = reqTerms.filter((t) => t.present).length;
  const optMatched = optTerms.filter((t) => t.present).length;

  const reqRatio = required.length ? reqMatched / required.length : null;
  const optRatio = optional.length ? optMatched / optional.length : null;

  let score: number;
  if (reqRatio !== null && optRatio !== null) {
    score = reqRatio * REQUIRED_WEIGHT * 100 + optRatio * (1 - REQUIRED_WEIGHT) * 100;
  } else if (reqRatio !== null) {
    score = reqRatio * 100;
  } else if (optRatio !== null) {
    score = optRatio * 100;
  } else {
    score = 0;
  }

  return {
    score: Math.round(score),
    required: { matched: reqMatched, total: required.length, terms: reqTerms },
    optional: { matched: optMatched, total: optional.length, terms: optTerms },
  };
}
