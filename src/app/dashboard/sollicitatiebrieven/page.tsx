import { LetterText } from "lucide-react";
import { EmptyPage } from "@/components/dashboard/empty-page";
export default function Page() { return <EmptyPage title="Sollicitatiebrieven" description="Schrijf brieven vanuit jouw ervaring en een concrete vacature." emptyTitle="Nog geen sollicitatiebrieven" emptyText="Zodra de AI-functies beschikbaar zijn, maak je hier een gerichte en persoonlijke basisbrief." action="Nieuwe brief" href="/dashboard/sollicitatiebrieven" icon={LetterText} />; }
