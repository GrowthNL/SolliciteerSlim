"use client";

import { useTransition } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createCheckoutSession, type PriceKey } from "@/app/actions/stripe";

export function CheckoutButton({
  priceKey,
  children,
  variant = "default",
}: {
  priceKey: PriceKey;
  children: React.ReactNode;
  variant?: "default" | "secondary";
}) {
  const [pending, startTransition] = useTransition();

  return (
    <Button
      variant={variant}
      className="w-full"
      disabled={pending}
      onClick={() => startTransition(async () => { await createCheckoutSession(priceKey); })}
    >
      {pending ? "Even geduld…" : children}
      {!pending && <ArrowRight className="size-4" />}
    </Button>
  );
}

export function FreeButton() {
  return (
    <Button asChild variant="secondary" className="w-full">
      <Link href="/registreren">
        Gratis starten <ArrowRight className="size-4" />
      </Link>
    </Button>
  );
}
