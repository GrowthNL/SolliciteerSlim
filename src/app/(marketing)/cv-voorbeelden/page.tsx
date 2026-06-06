import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";
export const metadata: Metadata = { title: "Voorbeelden voor een sterke inhoud en opbouw" };
export default function Page() { return <PlaceholderPage eyebrow="CV inspiratie" title="Voorbeelden voor een sterke inhoud en opbouw" description="Bekijk hoe je ervaring helder formuleert en kies een structuur die past bij jouw loopbaan." bullets={["Nederlandse voorbeeldteksten", "Inspiratie per carrièrefase", "Nadruk op concrete resultaten"]} />; }
