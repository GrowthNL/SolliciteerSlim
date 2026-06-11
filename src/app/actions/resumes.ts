"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { type ResumeDocument, validateResumeDocument } from "@/features/resumes/model";

export type ResumeRow = {
  id: string;
  title: string;
  updated_at: string;
  data_json: ResumeDocument;
};

function buildTitle(doc: ResumeDocument): string {
  const name = [doc.personalDetails.firstName, doc.personalDetails.lastName]
    .filter(Boolean)
    .join(" ");
  return name ? `CV ${name}` : "Naamloos cv";
}

export async function saveResume(
  id: string | null,
  doc: ResumeDocument,
): Promise<{ id: string } | { error: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Niet ingelogd." };

  const validation = validateResumeDocument(doc);
  if (!validation.success) return { error: "Ongeldig cv-document." };

  const title = buildTitle(doc);
  const now = new Date().toISOString();

  if (id) {
    const { error } = await supabase
      .from("resumes")
      .update({ title, data_json: doc as unknown as Record<string, unknown>, updated_at: now })
      .eq("id", id)
      .eq("user_id", user.id);
    if (error) return { error: error.message };
    revalidatePath("/dashboard/cv");
    revalidatePath("/dashboard");
    return { id };
  }

  const { data, error } = await supabase
    .from("resumes")
    .insert({ user_id: user.id, title, data_json: doc as unknown as Record<string, unknown>, language: "nl" })
    .select("id")
    .single();

  if (error) return { error: error.message };
  revalidatePath("/dashboard/cv");
  revalidatePath("/dashboard");
  return { id: (data as { id: string }).id };
}

export async function getResumes(): Promise<ResumeRow[]> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data } = await supabase
    .from("resumes")
    .select("id, title, updated_at, data_json")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  return (data ?? []) as ResumeRow[];
}

export async function getResume(id: string): Promise<ResumeRow | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data } = await supabase
    .from("resumes")
    .select("id, title, updated_at, data_json")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  return data ? (data as ResumeRow) : null;
}

export async function deleteResume(id: string): Promise<{ error?: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Niet ingelogd." };

  const { error } = await supabase
    .from("resumes")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return { error: error.message };
  revalidatePath("/dashboard/cv");
  revalidatePath("/dashboard");
  return {};
}

export async function duplicateResume(id: string): Promise<{ id: string } | { error: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Niet ingelogd." };

  const { data: source } = await supabase
    .from("resumes")
    .select("title, data_json, language, template_id")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (!source) return { error: "CV niet gevonden." };

  const { data, error } = await supabase
    .from("resumes")
    .insert({
      user_id: user.id,
      title: `${(source as { title: string }).title} (kopie)`,
      data_json: (source as { data_json: unknown }).data_json,
      language: (source as { language: string }).language,
      template_id: (source as { template_id: string }).template_id,
    })
    .select("id")
    .single();

  if (error) return { error: error.message };
  revalidatePath("/dashboard/cv");
  return { id: (data as { id: string }).id };
}
