"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type AuthState = { error: string } | { success: string } | null;

export async function signIn(_: AuthState, formData: FormData): Promise<AuthState> {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) return { error: "Vul je e-mailadres en wachtwoord in." };

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    if (error.message.includes("Invalid login credentials")) {
      return { error: "E-mailadres of wachtwoord klopt niet." };
    }
    return { error: error.message };
  }

  redirect("/dashboard");
}

export async function signUp(_: AuthState, formData: FormData): Promise<AuthState> {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = (formData.get("full_name") as string) || "";

  if (!email || !password) return { error: "Vul je e-mailadres en wachtwoord in." };
  if (password.length < 8) return { error: "Wachtwoord moet minimaal 8 tekens bevatten." };

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  });

  if (error) {
    if (error.message.includes("already registered")) {
      return { error: "Dit e-mailadres is al in gebruik. Probeer in te loggen." };
    }
    return { error: error.message };
  }

  redirect("/dashboard");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export async function resetPassword(_: AuthState, formData: FormData): Promise<AuthState> {
  const supabase = await createClient();
  const email = formData.get("email") as string;

  if (!email) return { error: "Vul je e-mailadres in." };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${siteUrl}/auth/callback?type=recovery`,
  });

  if (error) return { error: error.message };
  return { success: "We hebben een herstellink gestuurd als dit adres bij ons bekend is." };
}

export async function updateProfile(_: AuthState, formData: FormData): Promise<AuthState> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Niet ingelogd." };

  const fullName = formData.get("full_name") as string;

  const { error } = await supabase
    .from("users")
    .update({ full_name: fullName, updated_at: new Date().toISOString() })
    .eq("id", user.id);

  if (error) return { error: error.message };
  return { success: "Profiel opgeslagen." };
}
