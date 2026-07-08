export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe/client";
import { createClient } from "@supabase/supabase-js";
import { sendPaymentConfirmationEmail } from "@/lib/resend/emails";

function getPlanFromPriceId(priceId: string): "starter" | "pro" | null {
  if (
    priceId === process.env.STRIPE_PRICE_STARTER_MONTHLY ||
    priceId === process.env.STRIPE_PRICE_STARTER_YEARLY
  ) return "starter";
  if (
    priceId === process.env.STRIPE_PRICE_PRO_MONTHLY ||
    priceId === process.env.STRIPE_PRICE_PRO_YEARLY
  ) return "pro";
  return null;
}

function serviceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const db = serviceClient();

  // Idempotency: reserve the event id before processing. A duplicate delivery
  // hits the primary-key constraint and is skipped, so side effects (e.g. the
  // confirmation email) never run twice.
  const { error: reserveError } = await db
    .from("stripe_events")
    .insert({ id: event.id, type: event.type });
  if (reserveError) {
    if (reserveError.code === "23505") {
      return NextResponse.json({ received: true, duplicate: true });
    }
    console.error("Webhook idempotency reservation failed:", reserveError);
    return NextResponse.json({ error: "Idempotency check failed" }, { status: 500 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode !== "subscription" || !session.subscription) break;

        const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
        const priceId = subscription.items.data[0]?.price.id;
        const plan = priceId ? getPlanFromPriceId(priceId) : null;
        if (!plan || !session.customer) break;

        await db
          .from("users")
          .update({
            plan,
            stripe_customer_id: session.customer as string,
            stripe_subscription_id: subscription.id,
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", session.customer as string);

        // send payment confirmation email (fire-and-forget)
        if (session.customer_email || session.customer_details?.email) {
          const toEmail = (session.customer_email || session.customer_details?.email) as string;
          const toName = session.customer_details?.name ?? undefined;
          sendPaymentConfirmationEmail(toEmail, toName, plan).catch(() => {});
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const priceId = subscription.items.data[0]?.price.id;
        const plan = priceId ? getPlanFromPriceId(priceId) : null;
        if (!plan) break;

        const expiresAt = subscription.cancel_at
          ? new Date(subscription.cancel_at * 1000).toISOString()
          : null;

        await db
          .from("users")
          .update({
            plan,
            stripe_subscription_id: subscription.id,
            plan_expires_at: expiresAt,
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", subscription.customer as string);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await db
          .from("users")
          .update({
            plan: "free",
            stripe_subscription_id: null,
            plan_expires_at: null,
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", subscription.customer as string);
        break;
      }
    }
  } catch (err) {
    console.error("Webhook handler error:", err);
    // Roll back the reservation so Stripe's retry can reprocess this event.
    await db.from("stripe_events").delete().eq("id", event.id);
    return NextResponse.json({ error: "Handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
