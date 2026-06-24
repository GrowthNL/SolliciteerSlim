import { CvEditor } from "@/components/dashboard/cv-editor";
import { NewCvStart } from "@/components/dashboard/new-cv-start";
import { EXAMPLE_RESUME } from "@/features/resumes/example";

export const metadata = { title: "Nieuw cv" };

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ start?: string }>;
}) {
  const { start } = await searchParams;

  if (start === "blank") {
    return <CvEditor />;
  }

  if (start === "example") {
    return <CvEditor initialDoc={EXAMPLE_RESUME} />;
  }

  return <NewCvStart initialStep={start === "import" ? "import" : "choose"} />;
}
