"use client";

import { useRouter } from "next/navigation";
import { NewCvModal } from "./new-cv-modal";

export function NewCvStart() {
  const router = useRouter();
  return <NewCvModal onClose={() => router.push("/dashboard/cv")} />;
}
