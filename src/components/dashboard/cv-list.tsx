"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { Clock, Copy, FileText, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { deleteResume, duplicateResume } from "@/app/actions/resumes";
import type { ResumeRow } from "@/app/actions/resumes";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("nl-NL", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(iso),
  );
}

function CvCard({ resume }: { resume: ResumeRow }) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = () => {
    if (!confirm(`Weet je zeker dat je "${resume.title}" wilt verwijderen?`)) return;
    startTransition(async () => {
      await deleteResume(resume.id);
      router.refresh();
    });
  };

  const handleDuplicate = () => {
    startTransition(async () => {
      const result = await duplicateResume(resume.id);
      if ("id" in result) router.push(`/dashboard/cv/${result.id}`);
      router.refresh();
    });
  };

  return (
    <Card className="relative flex flex-col gap-3 p-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <FileText className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-semibold text-slate-900">{resume.title}</p>
            <p className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="size-3" />
              {formatDate(resume.updated_at)}
            </p>
          </div>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen((v) => !v)}
            aria-label="Opties"
          >
            <MoreHorizontal className="size-4" />
          </Button>
          {open && (
            <div
              className="absolute right-0 top-full z-20 mt-1 w-44 rounded-xl border border-slate-200 bg-white py-1 shadow-xl"
              onMouseLeave={() => setOpen(false)}
            >
              <Link
                href={`/dashboard/cv/${resume.id}`}
                className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                <Pencil className="size-3.5" />
                Bewerken
              </Link>
              <button
                onClick={handleDuplicate}
                disabled={isPending}
                className="flex w-full items-center gap-2.5 px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              >
                <Copy className="size-3.5" />
                Dupliceren
              </button>
              <button
                onClick={handleDelete}
                disabled={isPending}
                className="flex w-full items-center gap-2.5 px-3.5 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-50"
              >
                <Trash2 className="size-3.5" />
                Verwijderen
              </button>
            </div>
          )}
        </div>
      </div>

      <Link
        href={`/dashboard/cv/${resume.id}`}
        className="absolute inset-0 rounded-[inherit]"
        aria-label={`CV bewerken: ${resume.title}`}
      />
    </Card>
  );
}

export function CvList({ resumes }: { resumes: ResumeRow[] }) {
  if (resumes.length === 0) return null;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {resumes.map((r) => (
        <CvCard key={r.id} resume={r} />
      ))}
    </div>
  );
}
