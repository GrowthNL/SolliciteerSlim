import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";
export const metadata: Metadata = { title: "Een cv dat laat zien waarom jij past" };
export default function Page() { return <PlaceholderPage eyebrow="Professioneel cv" title="Een cv dat laat zien waarom jij past" description="Bouw stap voor stap een helder Nederlands cv en verbeter de inhoud met praktische AI-suggesties." bullets={["Overzichtelijke invoer per onderdeel", "AI-suggesties zonder verzonnen ervaring", "Direct zien hoe je cv eruitziet"]} />; }
