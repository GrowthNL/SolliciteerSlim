import Link from "next/link";
import { ArrowLeft, Check, ChevronRight, Eye, Save, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const sections = ["Persoonlijke gegevens", "Profiel", "Werkervaring", "Opleiding", "Vaardigheden", "Talen", "Overige onderdelen"];

export function CvEditorShell({ title = "Naamloos cv" }: { title?: string }) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon" aria-label="Terug naar cv-overzicht"><Link href="/dashboard/cv"><ArrowLeft className="size-5" /></Link></Button>
          <div><h1 className="font-display text-2xl font-bold text-slate-950">{title}</h1><p className="text-xs text-slate-500">Concept • Phase 1 preview</p></div>
        </div>
        <div className="flex gap-2"><Button variant="secondary"><Eye className="size-4" />Preview</Button><Button disabled><Save className="size-4" />Opslaan</Button></div>
      </div>

      <div className="mt-7 grid gap-5 xl:grid-cols-[220px_1fr_420px]">
        <Card className="h-fit p-3">
          <p className="px-3 pb-3 pt-2 text-xs font-bold uppercase tracking-[.12em] text-slate-400">Onderdelen</p>
          <nav>{sections.map((section, index) => (
            <button key={section} className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm ${index === 0 ? "bg-emerald-50 font-semibold text-emerald-800" : "text-slate-600"}`}>
              <span className="flex items-center gap-2"><span className={`flex size-5 items-center justify-center rounded-full text-[10px] ${index === 0 ? "bg-emerald-700 text-white" : "bg-slate-100"}`}>{index === 0 ? <Check className="size-3" /> : index + 1}</span>{section}</span><ChevronRight className="size-3.5" />
            </button>
          ))}</nav>
        </Card>

        <Card className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4"><div><h2 className="font-display text-xl font-bold text-slate-950">Persoonlijke gegevens</h2><p className="mt-1 text-sm text-slate-500">De basis bovenaan je cv.</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">Stap 1 van 7</span></div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label><span className="mb-2 block text-sm font-semibold">Voornaam</span><Input placeholder="Sophie" /></label>
            <label><span className="mb-2 block text-sm font-semibold">Achternaam</span><Input placeholder="de Vries" /></label>
            <label className="sm:col-span-2"><span className="mb-2 block text-sm font-semibold">Professionele titel</span><Input placeholder="Bijv. Marketing specialist" /></label>
            <label><span className="mb-2 block text-sm font-semibold">E-mailadres</span><Input type="email" placeholder="sophie@voorbeeld.nl" /></label>
            <label><span className="mb-2 block text-sm font-semibold">Telefoonnummer</span><Input placeholder="06 12 34 56 78" /></label>
            <label><span className="mb-2 block text-sm font-semibold">Woonplaats</span><Input placeholder="Utrecht" /></label>
            <label><span className="mb-2 block text-sm font-semibold">LinkedIn (optioneel)</span><Input placeholder="linkedin.com/in/..." /></label>
          </div>
          <div className="mt-8 flex justify-end"><Button>Volgende stap <ChevronRight className="size-4" /></Button></div>
        </Card>

        <div className="hidden xl:block">
          <div className="mb-3 flex items-center justify-between"><p className="text-sm font-semibold text-slate-700">Live voorbeeld</p><span className="text-xs text-slate-400">Modern</span></div>
          <div className="aspect-[.707] rounded-2xl border border-slate-200 bg-white p-9 shadow-lg">
            <div className="border-b-2 border-emerald-700 pb-5"><h3 className="font-display text-2xl font-bold text-slate-900">Jouw naam</h3><p className="mt-1 text-xs font-bold uppercase tracking-[.16em] text-emerald-700">Professionele titel</p></div>
            <div className="mt-7 grid grid-cols-[1fr_90px] gap-6"><div><div className="h-2 w-20 rounded bg-slate-800" /><div className="mt-4 space-y-2"><div className="h-1.5 rounded bg-slate-100" /><div className="h-1.5 rounded bg-slate-100" /><div className="h-1.5 w-4/5 rounded bg-slate-100" /></div><div className="mt-8 h-2 w-28 rounded bg-slate-800" /><div className="mt-4 h-12 rounded bg-slate-50" /></div><div><div className="h-2 w-12 rounded bg-slate-800" /><div className="mt-4 space-y-2"><div className="h-1.5 rounded bg-slate-100" /><div className="h-1.5 rounded bg-slate-100" /></div></div></div>
          </div>
          <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-xs leading-5 text-emerald-900/70"><Sparkles className="mr-1 inline size-3.5" />AI-verbeteringen worden in Phase 4 toegevoegd.</div>
        </div>
      </div>
    </div>
  );
}
