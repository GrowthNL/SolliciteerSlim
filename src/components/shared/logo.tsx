import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)} aria-label="CVmaken.nu homepage">
      {/* Symbol */}
      <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#111113" />
        <rect x="15" y="11" width="30" height="40" rx="5" fill="#C6F24E" />
        <rect x="20" y="19" width="20" height="3" rx="1.5" fill="#111113" />
        <rect x="20" y="26" width="20" height="3" rx="1.5" fill="#111113" />
        <rect x="20" y="33" width="13" height="3" rx="1.5" fill="#111113" />
        <circle cx="45" cy="46" r="11" fill="#FB5B36" stroke="#111113" strokeWidth="3" />
        <path d="M40.5 46 L44 49.5 L50 43" stroke="#fff" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Wordmark */}
      {!compact && (
        <span className="text-[19px] font-extrabold tracking-[-0.035em] leading-none text-[#111113]">
          CVmaken<span className="text-[#9A9A92]">.nu</span>
        </span>
      )}
    </Link>
  );
}

export function LogoDark({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)} aria-label="CVmaken.nu homepage">
      <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#C6F24E" />
        <rect x="15" y="11" width="30" height="40" rx="5" fill="#111113" />
        <rect x="20" y="19" width="20" height="3" rx="1.5" fill="#C6F24E" />
        <rect x="20" y="26" width="20" height="3" rx="1.5" fill="#C6F24E" />
        <rect x="20" y="33" width="13" height="3" rx="1.5" fill="#C6F24E" />
        <circle cx="45" cy="46" r="11" fill="#FB5B36" stroke="#C6F24E" strokeWidth="3" />
        <path d="M40.5 46 L44 49.5 L50 43" stroke="#fff" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {!compact && (
        <span className="text-[19px] font-extrabold tracking-[-0.035em] leading-none text-[#F2F1EC]">
          CVmaken<span className="text-[#C6F24E]">.nu</span>
        </span>
      )}
    </Link>
  );
}
