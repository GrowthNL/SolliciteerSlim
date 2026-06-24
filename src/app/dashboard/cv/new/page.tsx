import { CvEditor } from "@/components/dashboard/cv-editor";
import { NewCvStart } from "@/components/dashboard/new-cv-start";
import { EXAMPLE_RESUME } from "@/features/resumes/example";
import { getExampleBySlug } from "@/features/cv-examples/examples";

export const metadata = { title: "Nieuw cv" };

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ start?: string; example?: string }>;
}) {
  const { start, example } = await searchParams;

  // Deep-link from cv-voorbeelden gallery: ?example=<slug>
  if (example) {
    const ex = getExampleBySlug(example);
    if (ex) {
      return <CvEditor initialDoc={ex.doc} initialTemplate={ex.template} initialAccentColor={ex.accentColor} />;
    }
  }

  if (start === "blank") {
    return <CvEditor />;
  }

  if (start === "example") {
    return <CvEditor initialDoc={EXAMPLE_RESUME} />;
  }

  return <NewCvStart initialStep={start === "import" ? "import" : "choose"} />;
}
