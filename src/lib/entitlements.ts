export type Plan = "free" | "starter" | "pro";

export const PLAN_LIMITS = {
  free:    { maxResumes: 1,   aiCallsPerMonth: 0,  canDownloadPdf: false, canUseAi: false },
  starter: { maxResumes: 3,   aiCallsPerMonth: 0,  canDownloadPdf: true,  canUseAi: false },
  pro:     { maxResumes: 999, aiCallsPerMonth: 10, canDownloadPdf: true,  canUseAi: true  },
} as const;

export function canDownloadPdf(plan: Plan): boolean {
  return PLAN_LIMITS[plan].canDownloadPdf;
}

export function canUseAi(plan: Plan): boolean {
  return PLAN_LIMITS[plan].canUseAi;
}

export function canCreateResume(plan: Plan, currentCount: number): boolean {
  return currentCount < PLAN_LIMITS[plan].maxResumes;
}

export function getPlanLabel(plan: Plan): string {
  return { free: "Gratis", starter: "Starter", pro: "Pro" }[plan];
}

export function getPlanColor(plan: Plan): string {
  return { free: "bg-slate-100 text-slate-700", starter: "bg-blue-100 text-blue-700", pro: "bg-emerald-100 text-emerald-700" }[plan];
}
