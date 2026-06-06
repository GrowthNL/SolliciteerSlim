import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return <input type={type} className={cn("flex h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-950 shadow-sm outline-none placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/15", className)} {...props} />;
}
