import Link from "next/link";
import { Logo } from "@/components/shared/logo";

const groups = [
  { title: "Product", links: [["CV maken", "/cv-maken"], ["Sollicitatiebrief", "/sollicitatiebrief-maken"], ["ATS-check", "/ats-check"], ["Prijzen", "/prijzen"]] },
  { title: "Inspiratie", links: [["CV voorbeelden", "/cv-voorbeelden"], ["CV templates", "/cv-templates"], ["Blog", "/blog"]] },
  { title: "Bedrijf", links: [["Privacy", "#"], ["Voorwaarden", "#"], ["Contact", "/contact"]] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <div className="container-shell grid gap-10 md:grid-cols-[1.4fr_2fr]">
        <div className="max-w-sm"><Logo /><p className="mt-4 text-sm leading-6 text-slate-600">Jouw nuchtere AI-assistent voor een cv en sollicitatiebrief die echt bij de vacature passen.</p></div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {groups.map((group) => <div key={group.title}><h3 className="text-sm font-semibold text-slate-950">{group.title}</h3><ul className="mt-4 space-y-3">{group.links.map(([label, href]) => <li key={label}><Link href={href} className="text-sm text-slate-600 hover:text-emerald-800">{label}</Link></li>)}</ul></div>)}
        </div>
      </div>
      <div className="container-shell mt-12 border-t border-slate-100 pt-6 text-xs text-slate-500">© 2026 SolliciteerSlim. Gemaakt voor Nederlandse sollicitaties.</div>
    </footer>
  );
}
