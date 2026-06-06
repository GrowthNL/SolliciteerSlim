import { CvEditorShell } from "@/components/dashboard/cv-editor-shell";
export default async function Page({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <CvEditorShell title={`CV ${id}`} />; }
