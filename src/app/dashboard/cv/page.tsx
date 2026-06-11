import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CvList } from "@/components/dashboard/cv-list";
import { EmptyPage } from "@/components/dashboard/empty-page";
import { getResumes } from "@/app/actions/resumes";
import { FileText } from "lucide-react";

export default async function Page() {
  const resumes = await getResumes();

  if (resumes.length === 0) {
    return (
      <EmptyPage
        title="Mijn cv's"
        description="Beheer verschillende versies voor verschillende vacatures."
        emptyTitle="Maak je eerste cv"
        emptyText="Begin met een rustige basis en bouw het op. Automatisch opslaan staat aan."
        action="Nieuw cv"
        href="/dashboard/cv/new"
        icon={FileText}
      />
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-950">Mijn cv&apos;s</h1>
          <p className="mt-2 text-slate-600">
            {resumes.length} {resumes.length === 1 ? "cv" : "cv's"} opgeslagen.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/cv/new">
            <Plus className="size-4" />
            Nieuw cv
          </Link>
        </Button>
      </div>

      <div className="mt-8">
        <CvList resumes={resumes} />
      </div>
    </div>
  );
}
