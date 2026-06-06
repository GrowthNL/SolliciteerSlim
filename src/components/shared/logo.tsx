import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5 font-bold tracking-tight text-slate-950", className)} aria-label="SolliciteerSlim homepage">
      <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-700 text-white shadow-sm"><Sparkles className="size-4.5" /></span>
      {!compact && <span className="text-lg">Solliciteer<span className="text-emerald-700">Slim</span></span>}
    </Link>
  );
}
