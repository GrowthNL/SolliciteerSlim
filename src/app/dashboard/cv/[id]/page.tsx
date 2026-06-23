import { notFound } from "next/navigation";
import { CvEditor } from "@/components/dashboard/cv-editor";
import { getResume } from "@/app/actions/resumes";
import { validateResumeDocument, createEmptyResumeDocument } from "@/features/resumes/model";
import { createClient } from "@/lib/supabase/server";
import type { Plan } from "@/lib/entitlements";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const [resume, supabase] = await Promise.all([
    getResume(id),
    createClient(),
  ]);

  if (!resume) notFound();

  const { data: { user } } = await supabase.auth.getUser();
  const { data: profile } = user
    ? await supabase.from("users").select("plan").eq("id", user.id).single()
    : { data: null };

  const plan = (profile?.plan ?? "free") as Plan;
  const validation = validateResumeDocument(resume.data_json);
  const doc = validation.success ? validation.data : createEmptyResumeDocument();

  return <CvEditor initialId={id} initialDoc={doc} plan={plan} />;
}
