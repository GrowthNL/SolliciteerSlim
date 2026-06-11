"use client";

import Link from "next/link";
import { useActionState } from "react";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn, signUp, resetPassword, type AuthState } from "@/app/actions/auth";

export function AuthCard({ mode }: { mode: "login" | "register" | "forgot" }) {
  const copy = {
    login: { title: "Welkom terug", text: "Log in om verder te werken aan je sollicitatie.", action: "Inloggen" },
    register: { title: "Maak je gratis account", text: "Start met je cv. Een creditcard is niet nodig.", action: "Account aanmaken" },
    forgot: { title: "Wachtwoord vergeten?", text: "Vul je e-mailadres in. We sturen je straks een veilige herstellink.", action: "Stuur herstellink" },
  }[mode];

  const action = mode === "login" ? signIn : mode === "register" ? signUp : resetPassword;
  const [state, formAction, pending] = useActionState<AuthState, FormData>(action, null);

  return (
    <div className="w-full max-w-md">
      <Logo />
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(24,55,43,.08)] sm:p-9">
        <h1 className="font-display text-3xl font-bold text-slate-950">{copy.title}</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">{copy.text}</p>

        <form action={formAction} className="mt-8 space-y-5">
          {mode === "register" && (
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">Volledige naam (optioneel)</span>
              <Input name="full_name" type="text" placeholder="Sophie de Vries" autoComplete="name" />
            </label>
          )}
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-800">E-mailadres</span>
            <Input
              name="email"
              type="email"
              placeholder="naam@voorbeeld.nl"
              autoComplete={mode === "register" ? "email" : "username"}
              required
            />
          </label>
          {mode !== "forgot" && (
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">Wachtwoord</span>
              <Input
                name="password"
                type="password"
                placeholder="Minimaal 8 tekens"
                autoComplete={mode === "register" ? "new-password" : "current-password"}
                required
              />
            </label>
          )}

          {state && "error" in state && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{state.error}</p>
          )}
          {state && "success" in state && (
            <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{state.success}</p>
          )}

          <Button className="w-full" size="lg" type="submit" disabled={pending}>
            {pending ? "Even geduld…" : copy.action}
          </Button>
        </form>

        {mode === "login" && (
          <div className="mt-4 text-right">
            <Link href="/wachtwoord-vergeten" className="text-xs font-medium text-slate-500 hover:text-emerald-700">
              Wachtwoord vergeten?
            </Link>
          </div>
        )}

        {mode === "login" && (
          <p className="mt-6 text-center text-sm text-slate-600">
            Nog geen account?{" "}
            <Link href="/registreren" className="font-semibold text-emerald-700">
              Registreer gratis
            </Link>
          </p>
        )}
        {mode === "register" && (
          <p className="mt-6 text-center text-sm text-slate-600">
            Al een account?{" "}
            <Link href="/login" className="font-semibold text-emerald-700">
              Log in
            </Link>
          </p>
        )}
        {mode === "forgot" && (
          <p className="mt-6 text-center text-sm text-slate-600">
            Toch nog wachtwoord?{" "}
            <Link href="/login" className="font-semibold text-emerald-700">
              Terug naar inloggen
            </Link>
          </p>
        )}
      </div>
      <Link
        href="/"
        className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-800"
      >
        <ArrowLeft className="size-4" />
        Terug naar home
      </Link>
    </div>
  );
}
