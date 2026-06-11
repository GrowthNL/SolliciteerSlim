import * as React from "react";
import { cn } from "@/lib/utils";

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    type="checkbox"
    ref={ref}
    className={cn(
      "size-4 cursor-pointer rounded border-slate-300 accent-emerald-600 focus:ring-2 focus:ring-emerald-200",
      className,
    )}
    {...props}
  />
));
Checkbox.displayName = "Checkbox";
