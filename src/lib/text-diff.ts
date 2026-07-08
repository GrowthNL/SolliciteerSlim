export type DiffSegment = { type: "equal" | "added" | "removed"; value: string };

/**
 * Word-level diff via a longest-common-subsequence table. Tokenises on words
 * and whitespace so spacing is preserved. Fine for short texts like a CV
 * profile summary (O(n*m), a few hundred tokens at most).
 */
export function wordDiff(oldText: string, newText: string): DiffSegment[] {
  const tokenize = (t: string) => t.match(/\s+|\S+/g) ?? [];
  const a = tokenize(oldText);
  const b = tokenize(newText);
  const m = a.length;
  const n = b.length;

  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const segments: DiffSegment[] = [];
  const push = (type: DiffSegment["type"], value: string) => {
    const last = segments[segments.length - 1];
    if (last && last.type === type) last.value += value;
    else segments.push({ type, value });
  };

  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (a[i] === b[j]) {
      push("equal", a[i]);
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      push("removed", a[i]);
      i++;
    } else {
      push("added", b[j]);
      j++;
    }
  }
  while (i < m) push("removed", a[i++]);
  while (j < n) push("added", b[j++]);

  return segments;
}
