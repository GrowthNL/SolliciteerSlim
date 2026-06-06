import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";
export const metadata: Metadata = { title: "Begin gratis en kies pas later wat je nodig hebt" };
export default function Page() { return <PlaceholderPage eyebrow="Transparante prijzen" title="Begin gratis en kies pas later wat je nodig hebt" description="Geen verborgen proefabonnementen. Maak eerst je cv en betaal alleen voor de functies die waarde toevoegen." bullets={["Gratis cv maken en bewerken", "Eenmalige PDF-optie", "Starter en Pro voor meer gebruik"]} />; }
