import { Check, X, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { MatchScore, MatchTerm } from "@/lib/match-score";

function scoreColor(score: number): string {
  if (score >= 70) return "text-emerald-600";
  if (score >= 40) return "text-amber-500";
  return "text-red-500";
}

function TermList({ terms }: { terms: MatchTerm[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {terms.map((t, i) => (
        <span
          key={i}
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            t.present ? "bg-emerald-50 text-emerald-800" : "bg-slate-100 text-slate-500"
          }`}
        >
          {t.present ? <Check className="size-3" /> : <X className="size-3" />}
          {t.term}
        </span>
      ))}
    </div>
  );
}

export function MatchScoreCard({ match }: { match: MatchScore }) {
  return (
    <Card className="mt-6">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span className={`font-display text-4xl font-bold ${scoreColor(match.score)}`}>
              {match.score}%
            </span>
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-800">
              <Gauge className="size-4 text-emerald-700" />
              Keyword-match
            </p>
            <p className="mt-0.5 text-xs text-slate-500">
              Deterministisch en zonder AI: exacte overeenkomst van trefwoorden uit de vacature met
              je cv. Vereiste vaardigheden tellen zwaarder (70%) dan overige trefwoorden (30%).
            </p>
          </div>
        </div>

        {match.required.total > 0 && (
          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
              Vereiste vaardigheden · {match.required.matched}/{match.required.total}
            </p>
            <TermList terms={match.required.terms} />
          </div>
        )}

        {match.optional.total > 0 && (
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
              Overige trefwoorden · {match.optional.matched}/{match.optional.total}
            </p>
            <TermList terms={match.optional.terms} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
