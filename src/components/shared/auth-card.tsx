import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AuthCard({ mode }: { mode: "login" | "register" | "forgot" }) {
  const copy = {
    login: { title: "Welkom terug", text: "Log in om verder te werken aan je sollicitatie.", action: "Inloggen" },
    register: { title: "Maak je gratis account", text: "Start met je cv. Een creditcard is niet nodig.", action: "Account aanmaken" },
    forgot: { title: "Wachtwoord vergeten?", text: "Vul je e-mailadres in. We sturen je straks een veilige herstellink.", action: "Stuur herstellink" },
  }[mode];
  return <div className="w-full max-w-md"><Logo /><div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(24,55,43,.08)] sm:p-9"><h1 className="font-display text-3xl font-bold text-slate-950">{copy.title}</h1><p className="mt-3 text-sm leading-6 text-slate-600">{copy.text}</p><form className="mt-8 space-y-5"><label className="block"><span className="mb-2 block text-sm font-semibold text-slate-800">E-mailadres</span><Input type="email" placeholder="naam@voorbeeld.nl" disabled /></label>{mode !== "forgot" && <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-800">Wachtwoord</span><Input type="password" placeholder="Minimaal 8 tekens" disabled /></label>}<Button className="w-full" size="lg" disabled>{copy.action}</Button></form><div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500"><LockKeyhole className="size-3.5" />Authenticatie wordt toegevoegd in Phase 2.</div>{mode === "login" && <p className="mt-6 text-center text-sm text-slate-600">Nog geen account? <Link href="/registreren" className="font-semibold text-emerald-700">Registreer gratis</Link></p>}{mode === "register" && <p className="mt-6 text-center text-sm text-slate-600">Al een account? <Link href="/login" className="font-semibold text-emerald-700">Log in</Link></p>}</div><Link href="/" className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-800"><ArrowLeft className="size-4" />Terug naar home</Link></div>;
}
