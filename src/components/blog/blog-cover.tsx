import {
  FileText,
  ScanSearch,
  GraduationCap,
  MessagesSquare,
  Linkedin,
  PenLine,
  Sparkles,
} from "lucide-react";

type Variant = {
  bg: string;
  panel: string;
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
};

// Branded, on-brand cover graphics per category (no stock photos needed).
const VARIANTS: Record<string, Variant> = {
  "CV Tips": { bg: "bg-[#111113]", panel: "bg-[#C6F24E]", accent: "text-[#111113]", icon: FileText },
  ATS: { bg: "bg-[#111113]", panel: "bg-[#FB5B36]", accent: "text-white", icon: ScanSearch },
  "Profiel schrijven": { bg: "bg-[#1d3a1a]", panel: "bg-[#C6F24E]", accent: "text-[#111113]", icon: PenLine },
  Starters: { bg: "bg-[#111113]", panel: "bg-[#C6F24E]", accent: "text-[#111113]", icon: GraduationCap },
  Interview: { bg: "bg-[#3a1a14]", panel: "bg-[#FB5B36]", accent: "text-white", icon: MessagesSquare },
  LinkedIn: { bg: "bg-[#111113]", panel: "bg-[#C6F24E]", accent: "text-[#111113]", icon: Linkedin },
};

const FALLBACK: Variant = { bg: "bg-[#111113]", panel: "bg-[#C6F24E]", accent: "text-[#111113]", icon: Sparkles };

export function BlogCover({
  category,
  title,
  className = "",
  size = "card",
}: {
  category: string;
  title: string;
  className?: string;
  size?: "card" | "hero";
}) {
  const v = VARIANTS[category] ?? FALLBACK;
  const Icon = v.icon;
  const iconBox = size === "hero" ? "size-16" : "size-12";
  const iconSize = size === "hero" ? "size-8" : "size-6";

  return (
    <div className={`relative overflow-hidden ${v.bg} ${className}`} aria-hidden="true">
      {/* dotted texture */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      {/* floating accent panel */}
      <div className="absolute -right-6 -top-8 size-32 rotate-12 rounded-3xl bg-white/[0.06]" />
      <div className="absolute -bottom-10 -left-6 size-28 -rotate-6 rounded-3xl bg-white/[0.05]" />

      <div className="relative flex h-full flex-col justify-between p-5">
        <div className={`flex ${iconBox} items-center justify-center rounded-2xl ${v.panel}`}>
          <Icon className={`${iconSize} ${v.accent}`} />
        </div>
        <div>
          <span className="font-mono-label text-[10px] text-white/60">{category}</span>
          {size === "hero" && (
            <p className="mt-1 line-clamp-2 max-w-xs text-sm font-bold leading-snug text-[#F2F1EC]">
              {title}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
