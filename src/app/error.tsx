"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="max-w-md">
        <AlertTriangle className="mx-auto size-14 text-amber-400" />
        <h1 className="font-display mt-8 text-3xl font-bold text-slate-950">Er ging iets mis</h1>
        <p className="mt-4 text-slate-600">
          Er is een onverwachte fout opgetreden. Je kunt het opnieuw proberen of later terugkomen.
        </p>
        {error.digest && (
          <p className="mt-2 text-xs text-slate-400">Foutcode: {error.digest}</p>
        )}
        <Button className="mt-8" onClick={reset}>
          <RefreshCcw className="size-4" />
          Opnieuw proberen
        </Button>
      </div>
    </div>
  );
}
