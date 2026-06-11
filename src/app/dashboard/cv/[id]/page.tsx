import { notFound } from "next/navigation";
import { CvEditor } from "@/components/dashboard/cv-editor";
import { getResume } from "@/app/actions/resumes";
import { validateResumeDocument, createEmptyResumeDocument } from "@/features/resumes/model";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const resume = await getResume(id);
  if (!resume) notFound();

  const validation = validateResumeDocument(resume.data_json);
  const doc = validation.success ? validation.data : createEmptyResumeDocument();

  return <CvEditor initialId={id} initialDoc={doc} />;
}
