import Link from "next/link";
import { Menu } from "lucide-react";
import { marketingNavigation } from "@/lib/navigation";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#fbfcfa]/90 backdrop-blur-xl">
      <div className="container-shell flex h-17 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hoofdnavigatie">
          {marketingNavigation.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-800">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <Button asChild variant="ghost" size="sm"><Link href="/login">Inloggen</Link></Button>
          <Button asChild size="sm"><Link href="/registreren">Start gratis</Link></Button>
        </div>
        <Button className="sm:hidden" variant="ghost" size="icon" aria-label="Menu openen"><Menu className="size-5" /></Button>
      </div>
    </header>
  );
}
