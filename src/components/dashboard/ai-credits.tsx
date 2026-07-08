"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { getAiCreditStatus, type AiCreditStatus } from "@/app/actions/ai";

/**
 * Compact AI-credit indicator shown next to AI actions. Pass a `refreshSignal`
 * that changes after each successful AI call so the count updates in place.
 */
export function AiCredits({ refreshSignal = 0 }: { refreshSignal?: number }) {
  const [status, setStatus] = useState<AiCreditStatus | null>(null);

  useEffect(() => {
    let active = true;
    getAiCreditStatus().then((s) => {
      if (active) setStatus(s);
    });
    return () => {
      active = false;
    };
  }, [refreshSignal]);

  if (!status) return null;

  if (!status.canUseAi) {
    return (
      <p className="flex items-center gap-1.5 text-xs text-slate-500">
        <Sparkles className="size-3.5 text-slate-400" />
        AI-functies horen bij Pro.{" "}
        <Link href="/prijzen" className="font-semibold text-emerald-700 hover:underline">
          Upgrade
        </Link>
      </p>
    );
  }

  const depleted = status.remaining <= 0;
  return (
    <p className={`flex items-center gap-1.5 text-xs ${depleted ? "text-amber-600" : "text-slate-500"}`}>
      <Sparkles className={`size-3.5 ${depleted ? "text-amber-500" : "text-emerald-600"}`} />
      {depleted ? (
        <>
          Geen AI-credits meer deze maand. Ze worden volgende maand vernieuwd.
        </>
      ) : (
        <>
          Nog <span className="font-semibold text-slate-700">{status.remaining}</span> van {status.limit} AI-credits deze maand
        </>
      )}
    </p>
  );
}
