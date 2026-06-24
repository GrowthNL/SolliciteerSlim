"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { marketingNavigation } from "@/lib/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the menu is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Menu openen"
        aria-expanded={open}
        className="flex size-10 items-center justify-center rounded-lg text-[#111113] transition-colors hover:bg-[#F2F1EC]"
      >
        <Menu className="size-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#111113]/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto bg-[#F2F1EC] p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-lg font-black tracking-[-0.03em] text-[#111113]">
                CVmaken<span className="text-[#9A9A92]">.nu</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Menu sluiten"
                className="flex size-10 items-center justify-center rounded-lg text-[#111113] transition-colors hover:bg-white"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col" aria-label="Mobiele navigatie">
              {marketingNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-[#E5E3DA] py-3.5 text-base font-semibold text-[#111113]"
                >
                  {item.label}
                  <ArrowRight className="size-4 text-[#9A9A92]" />
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-lg border border-[#DDDBD1] bg-white px-6 py-3 text-sm font-semibold text-[#111113] transition-colors hover:bg-[#F2F1EC]"
              >
                Inloggen
              </Link>
              <Link
                href="/registreren"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#111113] px-6 py-3 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C]"
              >
                Start gratis <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
