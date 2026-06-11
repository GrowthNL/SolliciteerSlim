import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="max-w-md">
        <Search className="mx-auto size-14 text-slate-300" />
        <h1 className="font-display mt-8 text-4xl font-bold text-slate-950">Pagina niet gevonden</h1>
        <p className="mt-4 text-lg text-slate-600">
          Deze pagina bestaat niet (meer). Misschien is de URL veranderd of heb je een typefout gemaakt.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="size-4" />
              Terug naar home
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/dashboard">Naar dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
