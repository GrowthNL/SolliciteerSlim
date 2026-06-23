"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, LayoutDashboard, LetterText, LogOut, ScanSearch, Settings, Sparkles, Target } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { signOut } from "@/app/actions/auth";

const items = [
  { label: "Overzicht", href: "/dashboard", icon: LayoutDashboard, exact: true },
  { label: "Mijn cv's", href: "/dashboard/cv", icon: FileText, exact: false },
  { label: "Sollicitatiebrieven", href: "/dashboard/sollicitatiebrieven", icon: LetterText, exact: false },
  { label: "Vacatures", href: "/dashboard/vacatures", icon: Target, exact: false },
  { label: "ATS-check", href: "/dashboard/ats-check", icon: ScanSearch, exact: false },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + "/");

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-white p-5 lg:flex">
      <Logo />
      <nav className="mt-10 space-y-1">
        {items.map(({ label, href, icon: Icon, exact }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-emerald-50 text-emerald-800"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              <Icon className="size-4.5" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl bg-slate-950 p-4 text-white">
        <Sparkles className="size-5 text-emerald-300" />
        <p className="mt-3 text-sm font-semibold">Je gebruikt Gratis</p>
        <p className="mt-1 text-xs leading-5 text-slate-400">
          Ontdek straks meer AI-acties en PDF-export.
        </p>
        <Link href="/prijzen" className="mt-3 inline-block text-xs font-semibold text-emerald-300">
          Bekijk plannen →
        </Link>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Link
          href="/dashboard/account"
          className={`flex flex-1 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 ${
            pathname === "/dashboard/account" ? "bg-emerald-50 text-emerald-800" : ""
          }`}
        >
          <Settings className="size-4.5" />
          Account
        </Link>
        <form action={signOut}>
          <button
            type="submit"
            className="rounded-xl p-2.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            title="Uitloggen"
          >
            <LogOut className="size-4.5" />
          </button>
        </form>
      </div>
    </aside>
  );
}
