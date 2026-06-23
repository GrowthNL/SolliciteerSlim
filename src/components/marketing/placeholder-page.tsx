import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PlaceholderPage({ eyebrow, title, description, bullets }: { eyebrow: string; title: string; description: string; bullets: string[] }) {
  return (
    <section className="min-h-[70vh] py-20 sm:py-28"><div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_.8fr]"><div><Badge>{eyebrow}</Badge><h1 className="font-display mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><Link href="/registreren">Start gratis <ArrowRight className="size-4" /></Link></Button><Button asChild size="lg" variant="secondary"><Link href="/prijzen">Bekijk prijzen</Link></Button></div></div><div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7 sm:p-9"><p className="text-sm font-semibold uppercase tracking-[.14em] text-emerald-800">In CVmaken.nu</p><ul className="mt-6 space-y-5">{bullets.map((bullet) => <li key={bullet} className="flex gap-3 font-medium leading-6 text-slate-800"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-700" />{bullet}</li>)}</ul><p className="mt-8 border-t border-emerald-200 pt-5 text-sm text-emerald-900/70">Deze pagina is onderdeel van de Phase 1 UI-shell. De interactieve functie volgt in een volgende fase.</p></div></div></section>
  );
}
