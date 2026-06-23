const categoryColors: Record<string, string> = {
  "CV Tips": "bg-[#EDF7C6] text-[#111113] border-[#C6F24E]",
  ATS: "bg-[#FFE3DA] text-[#111113] border-[#FB5B36]",
  "Profiel schrijven": "bg-[#F2F1EC] text-[#111113] border-[#DDDBD1]",
  Starters: "bg-[#EDF7C6] text-[#111113] border-[#C6F24E]",
  Interview: "bg-[#FFE3DA] text-[#111113] border-[#FB5B36]",
  LinkedIn: "bg-[#F2F1EC] text-[#111113] border-[#DDDBD1]",
};

export function CategoryBadge({ category }: { category: string }) {
  const colorClass = categoryColors[category] ?? "bg-[#F2F1EC] text-[#56564F] border-[#E5E3DA]";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${colorClass}`}
    >
      {category}
    </span>
  );
}
