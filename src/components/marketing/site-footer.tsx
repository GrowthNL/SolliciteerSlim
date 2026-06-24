import Link from "next/link";
import { LogoDark } from "@/components/shared/logo";

const groups = [
  { title: "Product", links: [["CV maken", "/cv-maken"], ["AI CV Maker", "/ai-cv-maker"], ["Sollicitatiebrief", "/sollicitatiebrief-maken"], ["ATS-check", "/ats-check"], ["Prijzen", "/prijzen"]] },
  { title: "Inspiratie", links: [["CV voorbeelden", "/cv-voorbeelden"], ["CV templates", "/cv-templates"], ["Blog", "/blog"]] },
  { title: "Bedrijf", links: [["Over ons", "/over-ons"], ["Privacy", "/privacy"], ["Voorwaarden", "/voorwaarden"], ["Contact", "/contact"]] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#E5E3DA] bg-[#111113] py-14">
      <div className="container-shell grid gap-10 md:grid-cols-[1.4fr_2fr]">
        <div className="max-w-sm">
          <LogoDark />
          <p className="mt-4 text-sm leading-6 text-[#9A9A92]">
            Jouw nuchtere AI-assistent voor een cv en sollicitatiebrief die echt bij de vacature passen.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-[#F2F1EC]">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-[#9A9A92] transition-colors hover:text-[#C6F24E]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container-shell mt-12 border-t border-white/10 pt-6 text-xs text-[#9A9A92]">
        © 2026 CVmaken.nu. Gemaakt voor Nederlandse sollicitaties.
      </div>
    </footer>
  );
}
