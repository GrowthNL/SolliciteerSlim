import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";
export const metadata: Metadata = { title: "Professionele cv-templates met de inhoud voorop" };
export default function Page() { return <PlaceholderPage eyebrow="Rustige ontwerpen" title="Professionele cv-templates met de inhoud voorop" description="Kies een verzorgd, leesbaar ontwerp dat goed werkt op scherm én als PDF." bullets={["Professioneel en overzichtelijk", "Mobiele preview", "Betrouwbare PDF-opmaak"]} />; }
