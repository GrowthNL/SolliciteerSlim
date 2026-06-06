import type { Metadata } from "next";
import { AuthCard } from "@/components/shared/auth-card";
export const metadata: Metadata = { title: "Inloggen" };
export default function Page() { return <AuthCard mode="login" />; }
