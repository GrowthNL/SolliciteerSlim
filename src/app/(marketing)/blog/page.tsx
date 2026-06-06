import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";
export const metadata: Metadata = { title: "Nuchtere tips voor een betere sollicitatie" };
export default function Page() { return <PlaceholderPage eyebrow="Kennisbank" title="Nuchtere tips voor een betere sollicitatie" description="Praktische uitleg over cv’s, motivatiebrieven, vacatures en verantwoord gebruik van AI." bullets={["Concrete schrijftips", "Uitleg zonder vakjargon", "Gericht op de Nederlandse markt"]} />; }
