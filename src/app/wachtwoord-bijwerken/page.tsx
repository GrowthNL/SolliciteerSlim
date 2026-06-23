"use client";

import { useActionState } from "react";
import { KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { updatePassword, type AuthState } from "@/app/actions/auth";

export default function WachtwoordBijwerkenPage() {
  const [state, formAction, pending] = useActionState<AuthState, FormData>(updatePassword, null);

  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top_right,#dcfce7,transparent_38%),#f8faf9] px-4 py-12">
      <div className="w-full max-w-md">
        <Card className="rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(24,55,43,.08)]">
          <CardHeader className="p-7 pb-0 sm:p-9 sm:pb-0">
            <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-emerald-100">
              <KeyRound className="size-6 text-emerald-700" />
            </div>
            <CardTitle className="font-display text-3xl font-bold text-slate-950">
              Nieuw wachtwoord instellen
            </CardTitle>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Kies een nieuw wachtwoord van minimaal 8 tekens.
            </p>
          </CardHeader>
          <CardContent className="p-7 sm:p-9">
            <form action={formAction} className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-800">Nieuw wachtwoord</span>
                <Input
                  name="password"
                  type="password"
                  placeholder="Minimaal 8 tekens"
                  autoComplete="new-password"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-800">Bevestig wachtwoord</span>
                <Input
                  name="confirm"
                  type="password"
                  placeholder="Herhaal je nieuwe wachtwoord"
                  autoComplete="new-password"
                  required
                />
              </label>

              {state && "error" in state && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{state.error}</p>
              )}
              {state && "success" in state && (
                <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{state.success}</p>
              )}

              <Button className="w-full" size="lg" type="submit" disabled={pending}>
                {pending ? "Even geduld…" : "Wachtwoord opslaan"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
