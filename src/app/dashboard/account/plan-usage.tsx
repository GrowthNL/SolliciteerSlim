import { FileText, Sparkles, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PLAN_LIMITS, type Plan } from "@/lib/entitlements";

interface PlanUsageProps {
  plan: Plan;
  resumeCount: number;
  aiUsedThisMonth: number;
}

function Meter({ used, limit }: { used: number; limit: number }) {
  const pct = limit > 0 ? Math.min(100, Math.round((used / limit) * 100)) : 0;
  const full = used >= limit;
  return (
    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div
        className={`h-full rounded-full ${full ? "bg-amber-500" : "bg-emerald-600"}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function PlanUsage({ plan, resumeCount, aiUsedThisMonth }: PlanUsageProps) {
  const limits = PLAN_LIMITS[plan];
  const resumesUnlimited = limits.maxResumes >= 999;
  const aiLimit = limits.aiCallsPerMonth;

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Gebruik</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Resumes */}
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 font-medium text-slate-800">
              <FileText className="size-4 text-emerald-700" />
              Opgeslagen cv&apos;s
            </span>
            <span className="text-slate-600">
              {resumesUnlimited ? `${resumeCount} · onbeperkt` : `${resumeCount} / ${limits.maxResumes}`}
            </span>
          </div>
          {!resumesUnlimited && <Meter used={resumeCount} limit={limits.maxResumes} />}
        </div>

        {/* AI credits */}
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 font-medium text-slate-800">
              <Sparkles className="size-4 text-emerald-700" />
              AI-credits deze maand
            </span>
            <span className="text-slate-600">
              {limits.canUseAi ? `${aiUsedThisMonth} / ${aiLimit}` : "Alleen met Pro"}
            </span>
          </div>
          {limits.canUseAi && <Meter used={aiUsedThisMonth} limit={aiLimit} />}
        </div>

        {/* PDF download */}
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 font-medium text-slate-800">
            <Download className="size-4 text-emerald-700" />
            PDF-download
          </span>
          <span className={limits.canDownloadPdf ? "font-medium text-emerald-700" : "text-slate-500"}>
            {limits.canDownloadPdf ? "Inbegrepen" : "Alleen met Starter of Pro"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
