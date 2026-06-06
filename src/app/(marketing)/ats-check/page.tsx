import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";
export const metadata: Metadata = { title: "Maak je cv makkelijker vindbaar én leesbaar" };
export default function Page() { return <PlaceholderPage eyebrow="ATS-check light" title="Maak je cv makkelijker vindbaar én leesbaar" description="Controleer de belangrijkste zoekwoorden, structuur en aandachtspunten voordat je solliciteert." bullets={["Dekking van vacaturetermen", "Praktische leesbaarheidstips", "Geen misleidende garanties"]} />; }
