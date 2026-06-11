import Link from "next/link";
import { ArrowRight, Clock, FilePlus2, FileText, LetterText, Plus, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getResumes } from "@/app/actions/resumes";

const quickActions = [
  { title: "Nieuw cv", text: "Bouw stap voor stap je cv op.", href: "/dashboard/cv/new", icon: FilePlus2 },
  { title: "Vacature toevoegen", text: "Bereid een gerichte match voor.", href: "/dashboard/vacatures", icon: Target },
  { title: "Brief maken", text: "Start vanuit je cv en vacature.", href: "/dashboard/sollicitatiebrieven", icon: LetterText },
];

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("nl-NL", { day: "numeric", month: "short" }).format(new Date(iso));
}

export default async function DashboardPage() {
  const resumes = await getResumes();
  const recent = resumes.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold text-emerald-700">Jouw werkplek</p>
          <h1 className="font-display mt-1 text-3xl font-bold text-slate-950">Overzicht</h1>
          <p className="mt-2 text-slate-600">Maak je documenten en houd alles overzichtelijk bij.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/cv/new">
            <Plus className="size-4" />
            Nieuw cv
          </Link>
        </Button>
      </div>

      {/* Quick actions */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {quickActions.map(({ title, text, href, icon: Icon }) => (
          <Link href={href} key={title}>
            <Card className="h-full transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md">
              <CardHeader>
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon className="size-5" />
                </span>
                <CardTitle className="mt-3">{title}</CardTitle>
                <CardDescription>{text}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_.6fr]">
        {/* Recent documents */}
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle>Recente documenten</CardTitle>
              <CardDescription>Je laatst bijgewerkte cv&apos;s en brieven.</CardDescription>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link href="/dashboard/cv">
                Alles bekijken <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {recent.length === 0 ? (
              <div className="grid min-h-52 place-items-center rounded-xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                <div>
                  <FilePlus2 className="mx-auto size-8 text-slate-300" />
                  <p className="mt-4 font-semibold text-slate-800">Nog geen documenten</p>
                  <p className="mt-1 text-sm text-slate-500">Maak je eerste cv om hier te beginnen.</p>
                  <Button asChild className="mt-5" size="sm">
                    <Link href="/dashboard/cv/new">Maak een cv</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {recent.map((resume) => (
                  <Link
                    key={resume.id}
                    href={`/dashboard/cv/${resume.id}`}
                    className="flex items-center gap-4 py-3.5 hover:bg-slate-50 -mx-2 px-2 rounded-xl transition"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <FileText className="size-4.5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-slate-900">{resume.title}</p>
                      <p className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="size-3" />
                        {formatDate(resume.updated_at)}
                      </p>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-slate-300" />
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tip card */}
        <Card className="border-emerald-100 bg-emerald-50">
          <CardHeader>
            <Sparkles className="size-6 text-emerald-700" />
            <CardTitle className="mt-3">Slimme tip</CardTitle>
            <CardDescription className="text-emerald-900/70">
              Voeg straks eerst een vacature toe. Zo kan AI veel gerichter voorstellen doen voor je
              profiel en werkervaring.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl bg-white/70 p-4 text-xs leading-5 text-emerald-900/70">
              <strong>Privacy voorop:</strong> je cv-inhoud wordt niet opgenomen in AI-gebruikslogs.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
