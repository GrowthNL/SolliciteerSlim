"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { createPortalSession } from "@/app/actions/stripe";

export function PortalButton() {
  const [pending, startTransition] = useTransition();
  return (
    <Button
      variant="secondary"
      size="sm"
      disabled={pending}
      onClick={() => startTransition(async () => { await createPortalSession(); })}
    >
      {pending ? "Even geduld…" : "Abonnement beheren"}
    </Button>
  );
}
