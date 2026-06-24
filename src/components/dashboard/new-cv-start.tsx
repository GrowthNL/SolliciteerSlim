"use client";

import { useRouter } from "next/navigation";
import { NewCvModal } from "./new-cv-modal";

export function NewCvStart({ initialStep = "choose" }: { initialStep?: "choose" | "import" }) {
  const router = useRouter();
  return <NewCvModal initialStep={initialStep} onClose={() => router.push("/dashboard/cv")} />;
}
