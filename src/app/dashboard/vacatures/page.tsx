import { Target } from "lucide-react";
import { EmptyPage } from "@/components/dashboard/empty-page";
export default function Page() { return <EmptyPage title="Vacatures" description="Bewaar vacatureteksten als basis voor je cv-match en brief." emptyTitle="Voeg een vacature toe" emptyText="Plak straks de volledige tekst en laat SolliciteerSlim de belangrijkste eisen en woorden analyseren." action="Vacature toevoegen" href="/dashboard/vacatures" icon={Target} />; }
