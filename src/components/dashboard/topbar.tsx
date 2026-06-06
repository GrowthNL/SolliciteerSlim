import Link from "next/link";
import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
export function Topbar() { return <header className="flex h-17 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-7"><div className="lg:hidden"><Logo compact /></div><div className="hidden lg:block"><p className="text-sm font-semibold text-slate-900">Goedemorgen 👋</p><p className="text-xs text-slate-500">Klaar voor je volgende sollicitatie?</p></div><div className="flex items-center gap-2"><Button variant="ghost" size="icon" aria-label="Meldingen"><Bell className="size-4.5" /></Button><Link href="/dashboard/account" className="flex size-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">SD</Link><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Navigatie"><Menu className="size-5" /></Button></div></header>; }
