// Maps a blog category to a relevant stock photo (self-hosted, license-free).
const CATEGORY_IMAGE: Record<string, string> = {
  "CV Tips": "/blog/cv-tips.jpg",
  ATS: "/blog/ats.jpg",
  "Profiel schrijven": "/blog/profiel-schrijven.jpg",
  Starters: "/blog/starters.jpg",
  Interview: "/blog/interview.jpg",
  LinkedIn: "/blog/linkedin.jpg",
};

const FALLBACK = "/blog/cv-tips.jpg";

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
  const src = CATEGORY_IMAGE[category] ?? FALLBACK;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 size-full object-cover" />
      {/* Brand overlay so colours stay consistent with the dark/lime palette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/55 to-[#111113]/25" />
      <div className="absolute inset-0 bg-[#111113]/10" />

      <div className="relative flex h-full flex-col justify-between p-5">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#C6F24E] px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-[#111113]">
          {category}
        </span>
        {size === "hero" && (
          <p className="max-w-2xl text-lg font-black leading-snug tracking-[-0.01em] text-[#F2F1EC] sm:text-2xl">
            {title}
          </p>
        )}
      </div>
    </div>
  );
}
