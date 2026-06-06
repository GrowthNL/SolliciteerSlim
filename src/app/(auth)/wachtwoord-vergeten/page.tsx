import type { Metadata } from "next";
import { AuthCard } from "@/components/shared/auth-card";
export const metadata: Metadata = { title: "Wachtwoord vergeten" };
export default function Page() { return <AuthCard mode="forgot" />; }
