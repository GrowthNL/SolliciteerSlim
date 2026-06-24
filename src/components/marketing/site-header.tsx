import Link from "next/link";
import { marketingNavigation } from "@/lib/navigation";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/marketing/mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E3DA]/70 bg-bone/90 backdrop-blur-xl">
      <div className="container-shell flex h-17 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hoofdnavigatie">
          {marketingNavigation.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-ink-600 transition-colors hover:text-ink">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm"><Link href="/login">Inloggen</Link></Button>
          <Button asChild size="sm"><Link href="/registreren">Start gratis</Link></Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
