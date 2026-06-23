"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { sendWelcomeEmail } from "@/lib/resend/emails";

export type AuthState = { error: string } | { success: string } | null;

function isRedirect(e: unknown): boolean {
  return (
    e instanceof Error &&
    typeof (e as Error & { digest?: string }).digest === "string" &&
    (e as Error & { digest: string }).digest.startsWith("NEXT_REDIRECT")
  );
}

export async function signIn(_: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) return { error: "Vul je e-mailadres en wachtwoord in." };

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      if (error.message.includes("Invalid login credentials")) {
        return { error: "E-mailadres of wachtwoord klopt niet." };
      }
      return { error: error.message };
    }

    redirect("/dashboard");
  } catch (e) {
    if (isRedirect(e)) throw e;
    return { error: "Er is een onverwachte fout opgetreden. Probeer het opnieuw." };
  }
}

export async function signUp(_: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = (formData.get("full_name") as string) || "";

  if (!email || !password) return { error: "Vul je e-mailadres en wachtwoord in." };
  if (password.length < 8) return { error: "Wachtwoord moet minimaal 8 tekens bevatten." };

  try {
    const supabase = await createClient();
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

    // fire-and-forget: don't block redirect on email failure
    sendWelcomeEmail(email, fullName).catch(() => {});

    redirect("/dashboard");
  } catch (e) {
    if (isRedirect(e)) throw e;
    return { error: "Er is een onverwachte fout opgetreden. Probeer het opnieuw." };
  }
}

export async function signOut() {
  try {
    const supabase = await createClient();
    await supabase.auth.signOut();
  } catch {
    // continue to redirect even if signOut fails
  }
  redirect("/login");
}

export async function resetPassword(_: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get("email") as string;
  if (!email) return { error: "Vul je e-mailadres in." };

  try {
    const supabase = await createClient();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${siteUrl}/auth/callback?type=recovery`,
    });

    if (error) return { error: error.message };
    return { success: "We hebben een herstellink gestuurd als dit adres bij ons bekend is." };
  } catch {
    return { error: "Er is een onverwachte fout opgetreden. Probeer het opnieuw." };
  }
}

export async function updateProfile(_: AuthState, formData: FormData): Promise<AuthState> {
  try {
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
  } catch {
    return { error: "Er is een onverwachte fout opgetreden. Probeer het opnieuw." };
  }
}
