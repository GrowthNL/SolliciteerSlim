import { FileText } from "lucide-react";
import { EmptyPage } from "@/components/dashboard/empty-page";
export default function Page() { return <EmptyPage title="Mijn cv’s" description="Beheer verschillende versies voor verschillende vacatures." emptyTitle="Maak je eerste cv" emptyText="Begin met een rustige basis. In Phase 2 voegen we de volledige editor en opslag toe." action="Nieuw cv" href="/dashboard/cv/new" icon={FileText} />; }
