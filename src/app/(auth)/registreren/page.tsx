import type { Metadata } from "next";
import { AuthCard } from "@/components/shared/auth-card";
export const metadata: Metadata = { title: "Registreren" };
export default function Page() { return <AuthCard mode="register" />; }
