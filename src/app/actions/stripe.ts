"use server";

import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe/client";
import { createClient } from "@/lib/supabase/server";

const PRICES = {
  starter_monthly: process.env.STRIPE_PRICE_STARTER_MONTHLY ?? "",
  starter_yearly:  process.env.STRIPE_PRICE_STARTER_YEARLY  ?? "",
  pro_monthly:     process.env.STRIPE_PRICE_PRO_MONTHLY     ?? "",
  pro_yearly:      process.env.STRIPE_PRICE_PRO_YEARLY      ?? "",
} as const;

export type PriceKey = keyof typeof PRICES;

function isRedirect(e: unknown): boolean {
  return (
    e instanceof Error &&
    typeof (e as Error & { digest?: string }).digest === "string" &&
    (e as Error & { digest: string }).digest.startsWith("NEXT_REDIRECT")
  );
}

export async function createCheckoutSession(priceKey: PriceKey): Promise<{ error: string } | void> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const priceId = PRICES[priceKey];
  if (!priceId) return { error: "Ongeldige plan-configuratie. Neem contact op." };

  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const { data: profile } = await supabase
      .from("users")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single();

    let customerId = profile?.stripe_customer_id as string | undefined;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email!,
        metadata: { supabase_user_id: user.id },
      });
      customerId = customer.id;
      await supabase.from("users").update({ stripe_customer_id: customerId }).eq("id", user.id);
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/dashboard/account?upgraded=1`,
      cancel_url: `${siteUrl}/prijzen`,
      allow_promotion_codes: true,
      subscription_data: { metadata: { supabase_user_id: user.id } },
    });

    redirect(session.url!);
  } catch (e) {
    if (isRedirect(e)) throw e;
    console.error("Stripe checkout error:", e);
    return { error: "Betaling kon niet worden gestart. Probeer het opnieuw." };
  }
}

export async function createPortalSession(): Promise<{ error: string } | void> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  try {
    const { data: profile } = await supabase
      .from("users")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single();

    if (!profile?.stripe_customer_id) redirect("/prijzen");

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const session = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id as string,
      return_url: `${siteUrl}/dashboard/account`,
    });

    redirect(session.url);
  } catch (e) {
    if (isRedirect(e)) throw e;
    return { error: "Kan portaal niet openen. Probeer het opnieuw." };
  }
}
