import Link from "next/link";
import { LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { signOut } from "@/app/actions/auth";

function getInitials(name: string, email: string) {
  if (name) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].slice(0, 2).toUpperCase();
  }
  return email.slice(0, 2).toUpperCase();
}

interface TopbarProps {
  userName?: string;
  userEmail?: string;
}

export function Topbar({ userName = "", userEmail = "" }: TopbarProps) {
  const initials = getInitials(userName, userEmail);
  const greeting = userName ? `Hallo, ${userName.split(" ")[0]}` : "Goedemorgen";

  return (
    <header className="flex h-17 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-7">
      <div className="lg:hidden">
        <Logo compact />
      </div>
      <div className="hidden lg:block">
        <p className="text-sm font-semibold text-slate-900">{greeting} 👋</p>
        <p className="text-xs text-slate-500">Klaar voor je volgende sollicitatie?</p>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href="/dashboard/account"
          className="flex size-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800 hover:bg-emerald-200 transition"
          title="Account"
        >
          {initials}
        </Link>
        <form action={signOut} className="lg:hidden">
          <Button variant="ghost" size="icon" type="submit" aria-label="Uitloggen">
            <LogOut className="size-4.5" />
          </Button>
        </form>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Navigatie">
          <Menu className="size-5" />
        </Button>
      </div>
    </header>
  );
}
