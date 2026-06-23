import { Marquee } from "./marquee";
import {
  ShieldCheck,
  Sparkles,
  FileCheck2,
  Lock,
  Zap,
  CheckCircle2,
  FileText,
  ScanSearch,
} from "lucide-react";

const SIGNALS: { icon: React.ComponentType<{ className?: string }>; label: string }[] = [
  { icon: ShieldCheck, label: "ATS-proof templates" },
  { icon: Sparkles, label: "Aangedreven door GPT-4o" },
  { icon: Lock, label: "Privacy-first · AVG-proof" },
  { icon: FileCheck2, label: "Direct als PDF exporteren" },
  { icon: Zap, label: "Klaar in minuten" },
  { icon: CheckCircle2, label: "Geen creditcard nodig" },
  { icon: FileText, label: "3 professionele templates" },
  { icon: ScanSearch, label: "Ingebouwde ATS-check" },
];

/**
 * A subtle scrolling row of trust signals. Place under a hero for instant credibility.
 */
export function TrustBar({ className = "" }: { className?: string }) {
  return (
    <div className={`border-y border-[#E5E3DA] bg-white py-5 ${className}`}>
      <Marquee speed="slow">
        {SIGNALS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 whitespace-nowrap px-5 text-sm font-semibold text-[#56564F]"
          >
            <Icon className="size-4 text-[#FB5B36]" />
            {label}
            <span className="ml-3 text-[#DDDBD1]">•</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
