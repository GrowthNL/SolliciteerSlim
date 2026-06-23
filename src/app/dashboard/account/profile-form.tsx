"use client";

import { useActionState } from "react";
import { LockKeyhole, Trash2, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { updateProfile, type AuthState } from "@/app/actions/auth";

export function ProfileForm({ defaultName }: { defaultName: string }) {
  const [state, formAction, pending] = useActionState<AuthState, FormData>(updateProfile, null);

  return (
    <>
      <form action={formAction}>
        <Card className="mt-8">
          <CardHeader>
            <UserRound className="size-5 text-emerald-700" />
            <CardTitle className="mt-2">Profielgegevens</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold">Volledige naam</span>
              <Input name="full_name" defaultValue={defaultName} placeholder="Sophie de Vries" autoComplete="name" />
            </label>

            {state && "error" in state && (
              <p className="sm:col-span-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{state.error}</p>
            )}
            {state && "success" in state && (
              <p className="sm:col-span-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{state.success}</p>
            )}

            <div className="sm:col-span-2">
              <Button type="submit" disabled={pending}>
                {pending ? "Opslaan…" : "Wijzigingen opslaan"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>

      <Card className="mt-5">
        <CardHeader>
          <LockKeyhole className="size-5 text-emerald-700" />
          <CardTitle className="mt-2">Privacy en gegevens</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-6 text-slate-600">
            Je kunt hier binnenkort je gegevens exporteren en je account verwijderen.
          </p>
          <Button variant="ghost" disabled className="gap-2 text-red-500 hover:bg-red-50 hover:text-red-600">
            <Trash2 className="size-4" />
            Account verwijderen (binnenkort beschikbaar)
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
