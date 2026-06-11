"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <AlertTriangle className="mx-auto size-12 text-amber-400" />
        <h2 className="font-display mt-6 text-2xl font-bold text-slate-950">Er ging iets mis</h2>
        <p className="mt-3 text-slate-600">
          Er is een fout opgetreden. Probeer het opnieuw of ga terug naar het overzicht.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button onClick={reset}>
            <RefreshCcw className="size-4" />
            Opnieuw proberen
          </Button>
          <Button asChild variant="secondary">
            <Link href="/dashboard">Terug naar overzicht</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
