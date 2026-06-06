import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";
export const metadata: Metadata = { title: "Een sollicitatiebrief die verder gaat dan standaardzinnen" };
export default function Page() { return <PlaceholderPage eyebrow="Persoonlijke motivatie" title="Een sollicitatiebrief die verder gaat dan standaardzinnen" description="Combineer jouw ervaring met de vacature en schrijf een overtuigende brief in een toon die bij je past." bullets={["Gebaseerd op jouw eigen cv", "Aansluiting op de vacature", "Altijd zelf controleren en aanpassen"]} />; }
