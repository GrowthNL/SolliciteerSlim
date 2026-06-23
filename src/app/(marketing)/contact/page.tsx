"use client";

import { useActionState } from "react";
import { Mail, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";

export default function ContactPage() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContactMessage, null);

  return (
    <div className="container-shell py-20">
      <div className="mx-auto max-w-xl">
        <div className="flex items-center gap-3">
          <MessageSquare className="size-7 text-emerald-700" />
          <div>
            <h1 className="font-display text-3xl font-bold text-slate-950">Contact</h1>
            <p className="mt-1 text-slate-600">We reageren doorgaans binnen één werkdag.</p>
          </div>
        </div>

        <Card className="mt-8">
          <CardContent className="pt-6">
            {state && "success" in state ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle className="size-12 text-emerald-600" />
                <div>
                  <p className="text-lg font-semibold text-slate-900">Bericht verzonden!</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Je ontvangt een bevestiging per e-mail. We nemen zo snel mogelijk contact op.
                  </p>
                </div>
              </div>
            ) : (
              <form action={action} className="space-y-5">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-800">Naam</span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Je naam"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-800">E-mailadres</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jij@voorbeeld.nl"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-800">Bericht</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Stel je vraag of beschrijf je probleem…"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </label>

                {state && "error" in state && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{state.error}</p>
                )}

                <Button type="submit" disabled={pending} className="w-full">
                  <Mail className="size-4" />
                  {pending ? "Versturen…" : "Verstuur bericht"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-sm text-slate-500">
          Of stuur direct een e-mail naar{" "}
          <a href="mailto:info@cvmaken.nu" className="text-emerald-700 underline underline-offset-2">
            info@cvmaken.nu
          </a>
        </p>
      </div>
    </div>
  );
}
