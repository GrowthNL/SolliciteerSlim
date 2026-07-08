import "server-only";
import { createClient } from "@/lib/supabase/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { PLAN_LIMITS, type Plan } from "@/lib/entitlements";

/** Action type used for CV-import calls; excluded from the generative AI budget. */
export const CV_IMPORT_ACTION = "importCv";

/** Max AI operations (any type) per user per rolling minute — abuse protection. */
const MINUTE_LIMIT = 5;

/** Monthly CV-imports allowed for non-Pro plans. Pro is effectively unlimited. */
const CV_IMPORT_MONTHLY_CAP = 3;

// ─── Service role client for writing usage logs ──────────────────────────────

function getServiceClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}

// ─── Usage logging ────────────────────────────────────────────────────────────

export async function logUsage(
  userId: string,
  actionType: string,
  inputTokens: number,
  outputTokens: number,
) {
  const costEstimate =
    (inputTokens / 1_000_000) * 0.15 + (outputTokens / 1_000_000) * 0.6;
  const serviceClient = getServiceClient();
  await serviceClient.from("ai_usage_logs").insert({
    user_id: userId,
    action_type: actionType,
    input_tokens: inputTokens,
    output_tokens: outputTokens,
    cost_estimate: costEstimate,
  });
}

// ─── Counting helpers ────────────────────────────────────────────────────────

function startOfMonth(): string {
  const start = new Date();
  start.setDate(1);
  start.setHours(0, 0, 0, 0);
  return start.toISOString();
}

/** Count of generative AI calls this month (excludes CV-import). */
export async function getMonthlyAiUsage(userId: string): Promise<number> {
  const supabase = await createClient();
  const { count } = await supabase
    .from("ai_usage_logs")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)
    .neq("action_type", CV_IMPORT_ACTION)
    .gte("created_at", startOfMonth());
  return count ?? 0;
}

/** Count of a specific action type this month. */
async function getMonthlyActionCount(
  userId: string,
  actionType: string,
): Promise<number> {
  const supabase = await createClient();
  const { count } = await supabase
    .from("ai_usage_logs")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("action_type", actionType)
    .gte("created_at", startOfMonth());
  return count ?? 0;
}

/** True while the user is under the per-minute limit across all AI operations. */
async function withinMinuteRateLimit(userId: string): Promise<boolean> {
  const supabase = await createClient();
  const since = new Date(Date.now() - 60_000).toISOString();
  const { count } = await supabase
    .from("ai_usage_logs")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)
    .gte("created_at", since);
  return (count ?? 0) < MINUTE_LIMIT;
}

// ─── Guards ──────────────────────────────────────────────────────────────────

/** Guard for generative AI actions (analyse, improve, ATS-check, cover letter). */
export async function guardAiUsage(
  userId: string,
  plan: Plan,
): Promise<{ error: string } | null> {
  if (!PLAN_LIMITS[plan].canUseAi) {
    return { error: "AI-functies zijn beschikbaar vanaf het Pro-abonnement. Upgrade via je account." };
  }
  const limit = PLAN_LIMITS[plan].aiCallsPerMonth as number;
  const [used, withinRateLimit] = await Promise.all([
    getMonthlyAiUsage(userId),
    withinMinuteRateLimit(userId),
  ]);
  if (!withinRateLimit) {
    return { error: "Je verstuurt te snel aanvragen. Wacht even en probeer het opnieuw." };
  }
  if (limit > 0 && used >= limit) {
    return { error: `Je hebt je ${limit} AI-credits voor deze maand gebruikt. Volgende maand worden ze vernieuwd.` };
  }
  return null;
}

/**
 * Guard for CV-import. Available on every plan (low-friction onboarding), but
 * rate-limited per minute for everyone and capped monthly for non-Pro plans.
 */
export async function guardCvImport(
  userId: string,
  plan: Plan,
): Promise<{ error: string } | null> {
  if (!(await withinMinuteRateLimit(userId))) {
    return { error: "Je verstuurt te snel aanvragen. Wacht even en probeer het opnieuw." };
  }
  if (plan !== "pro") {
    const used = await getMonthlyActionCount(userId, CV_IMPORT_ACTION);
    if (used >= CV_IMPORT_MONTHLY_CAP) {
      return { error: `Je hebt deze maand ${CV_IMPORT_MONTHLY_CAP} cv-imports gebruikt. Upgrade naar Pro voor onbeperkt importeren.` };
    }
  }
  return null;
}
