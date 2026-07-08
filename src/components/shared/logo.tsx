import Link from "next/link";
import { cn } from "@/lib/utils";

/** Rising-arrow mark — "carrière omhoog". Tile + arrow colours are passed in
 *  so the same shape works on light and dark grounds. */
function ArrowMark({ tile, arrow, size = 40 }: { tile: string; arrow: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="14" fill={tile} />
      <path d="M19 45 L41 23" stroke={arrow} strokeWidth="7" strokeLinecap="round" />
      <path
        d="M30 22 L42 22 L42 34"
        fill="none"
        stroke={arrow}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)} aria-label="CVmaken.nu homepage">
      <ArrowMark tile="#111113" arrow="#C6F24E" />
      {!compact && (
        <span className="text-[24px] font-extrabold tracking-[-0.045em] leading-none text-[#111113]">
          cvmaken<span className="text-[#9A9A92]">.nu</span>
        </span>
      )}
    </Link>
  );
}

export function LogoDark({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)} aria-label="CVmaken.nu homepage">
      <ArrowMark tile="#C6F24E" arrow="#111113" />
      {!compact && (
        <span className="text-[24px] font-extrabold tracking-[-0.045em] leading-none text-[#F2F1EC]">
          cvmaken<span className="text-[#9A9A92]">.nu</span>
        </span>
      )}
    </Link>
  );
}
