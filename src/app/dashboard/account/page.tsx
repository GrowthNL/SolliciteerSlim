import Link from "next/link";
import { ArrowRight, CreditCard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { getPlanLabel, getPlanColor, type Plan } from "@/lib/entitlements";
import { getMonthlyAiUsage } from "@/lib/ai/usage";
import { ProfileForm } from "./profile-form";
import { PortalButton } from "./portal-button";
import { PlanUsage } from "./plan-usage";

export default async function Page({ searchParams }: { searchParams: Promise<{ upgraded?: string }> }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("users")
    .select("full_name, plan, stripe_customer_id")
    .eq("id", user!.id)
    .single();

  const plan = (profile?.plan ?? "free") as Plan;
  const hasSubscription = !!profile?.stripe_customer_id;
  const params = await searchParams;
  const justUpgraded = params.upgraded === "1";

  const [{ count: resumeCount }, aiUsedThisMonth] = await Promise.all([
    supabase.from("resumes").select("*", { count: "exact", head: true }).eq("user_id", user!.id),
    getMonthlyAiUsage(user!.id),
  ]);

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-3xl font-bold text-slate-950">Account</h1>
      <p className="mt-2 text-slate-600">Beheer je profiel, abonnement en privacykeuzes.</p>

      {justUpgraded && (
        <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-4 flex items-center gap-3">
          <Sparkles className="size-5 shrink-0 text-emerald-600" />
          <p className="text-sm font-semibold text-emerald-800">Welkom bij {getPlanLabel(plan)}! Je account is bijgewerkt.</p>
        </div>
      )}

      {/* Plan card */}
      <Card className="mt-8">
        <CardHeader>
          <CreditCard className="size-5 text-emerald-700" />
          <CardTitle className="mt-2">Abonnement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-sm font-semibold ${getPlanColor(plan)}`}>
              {getPlanLabel(plan)}
            </span>
            {plan === "free" && (
              <span className="text-sm text-slate-500">Gratis plan, beperkte functies</span>
            )}
          </div>

          {plan === "free" && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">Upgrade voor meer mogelijkheden</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>✓ PDF download (Starter & Pro)</li>
                <li>✓ AI-verbeteringen & sollicitatiebrieven (Pro)</li>
                <li>✓ Meerdere cv&apos;s opslaan</li>
              </ul>
              <Button asChild className="mt-4" size="sm">
                <Link href="/prijzen">Bekijk plannen <ArrowRight className="size-3.5" /></Link>
              </Button>
            </div>
          )}

          {plan !== "free" && hasSubscription && (
            <PortalButton />
          )}

          {plan !== "free" && !hasSubscription && (
            <p className="text-sm text-slate-500">
              Je plan is handmatig ingesteld. Neem contact op voor wijzigingen.
            </p>
          )}
        </CardContent>
      </Card>

      <PlanUsage plan={plan} resumeCount={resumeCount ?? 0} aiUsedThisMonth={aiUsedThisMonth} />

      <ProfileForm defaultName={profile?.full_name ?? ""} />
    </div>
  );
}
