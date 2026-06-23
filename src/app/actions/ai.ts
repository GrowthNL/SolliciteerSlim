"use server";

import { createClient } from "@/lib/supabase/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { openai, DEFAULT_MODEL } from "@/lib/openai/client";
import { z } from "zod";
import { PLAN_LIMITS, type Plan } from "@/lib/entitlements";

// ─── Service role client for logging ─────────────────────────────────────────

function getServiceClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}

// ─── Usage logging ────────────────────────────────────────────────────────────

async function logUsage(
  userId: string,
  actionType: string,
  inputTokens: number,
  outputTokens: number,
) {
  const costEstimate =
    (inputTokens / 1_000_000) * 0.15 + (outputTokens / 1_000_000) * 0.6;
  const serviceClient = getServiceClient();
  await serviceClient.from("ai_usage_logs").insert({
    user_id: userId,
    action_type: actionType,
    input_tokens: inputTokens,
    output_tokens: outputTokens,
    cost_estimate: costEstimate,
  });
}

// ─── Monthly usage guard ──────────────────────────────────────────────────────

export async function getMonthlyAiUsage(userId: string): Promise<number> {
  const supabase = await createClient();
  const start = new Date();
  start.setDate(1);
  start.setHours(0, 0, 0, 0);

  const { count } = await supabase
    .from("ai_usage_logs")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)
    .gte("created_at", start.toISOString());

  return count ?? 0;
}

async function guardAiUsage(
  userId: string,
  plan: Plan,
): Promise<{ error: string } | null> {
  if (!PLAN_LIMITS[plan].canUseAi) {
    return { error: "AI-functies zijn beschikbaar vanaf het Pro-abonnement. Upgrade via je account." };
  }
  const limit = PLAN_LIMITS[plan].aiCallsPerMonth as number;
  if (limit <= 0) return null;
  const used = await getMonthlyAiUsage(userId);
  if (used >= limit) {
    return { error: `Je hebt je ${limit} AI-credits voor deze maand gebruikt. Volgende maand worden ze vernieuwd.` };
  }
  return null;
}

// ─── Zod schemas ──────────────────────────────────────────────────────────────

const VacatureAnalysisSchema = z.object({
  required_skills: z.array(z.string()),
  nice_to_have: z.array(z.string()),
  keywords: z.array(z.string()),
  responsibilities: z.array(z.string()),
  culture_hints: z.array(z.string()),
});

const ImproveTextSchema = z.object({
  improved: z.string(),
  changes: z.array(z.string()),
});

const AtsCheckSchema = z.object({
  score: z.number().min(0).max(100),
  matched_keywords: z.array(z.string()),
  missing_keywords: z.array(z.string()),
  recommendations: z.array(z.string()),
});

const CoverLetterSchema = z.object({
  content: z.string(),
});

// ─── analyzeVacature ──────────────────────────────────────────────────────────

export type VacatureAnalysis = z.infer<typeof VacatureAnalysisSchema>;

export async function analyzeVacature(
  jobText: string,
  company: string,
  jobTitle: string,
): Promise<
  | { data: VacatureAnalysis; job_post_id: string }
  | { error: string }
> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Niet ingelogd." };

  const systemPrompt = `Je bent een vacature-analist die helpt Nederlandse werkzoekenden bij het analyseren van vacatureteksten.
Analyseer de gegeven vacaturetekst en retourneer uitsluitend een JSON-object met de volgende velden:
- required_skills: array van vereiste vaardigheden en kwalificaties
- nice_to_have: array van gewenste maar niet vereiste vaardigheden
- keywords: array van ATS-sleutelwoorden die relevant zijn voor de functie
- responsibilities: array van belangrijkste verantwoordelijkheden en taken
- culture_hints: array van aanwijzingen over de bedrijfscultuur

Retourneer alleen valide JSON, geen extra tekst.`;

  let completion;
  try {
    completion = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      temperature: 0.3,
      max_tokens: 1000,
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Bedrijf: ${company}\nFunctie: ${jobTitle}\n\nVacaturetekst:\n${jobText}`,
        },
      ],
    });
  } catch {
    return { error: "OpenAI-verzoek mislukt. Probeer het opnieuw." };
  }

  const raw = completion.choices[0]?.message?.content ?? "";
  let parsed: VacatureAnalysis;
  try {
    const jsonStr = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    parsed = VacatureAnalysisSchema.parse(JSON.parse(jsonStr));
  } catch {
    return { error: "Kon de AI-respons niet verwerken. Probeer het opnieuw." };
  }

  // Save to job_posts
  const { data: jobPost, error: insertError } = await supabase
    .from("job_posts")
    .insert({
      user_id: user.id,
      company,
      job_title: jobTitle,
      job_text: jobText,
      extracted_keywords_json: parsed,
    })
    .select("id")
    .single();

  if (insertError) {
    return { error: `Kon vacature niet opslaan: ${insertError.message}` };
  }

  const jobPostId = (jobPost as { id: string }).id;

  // Log usage
  await logUsage(
    user.id,
    "analyzeVacature",
    completion.usage?.prompt_tokens ?? 0,
    completion.usage?.completion_tokens ?? 0,
  ).catch(() => {});

  return { data: parsed, job_post_id: jobPostId };
}

// ─── improveText ──────────────────────────────────────────────────────────────

export type ImproveTextResult = z.infer<typeof ImproveTextSchema>;

export async function improveText(
  text: string,
  context: string,
): Promise<{ data: ImproveTextResult } | { error: string }> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Niet ingelogd." };

  const { data: userProfile } = await supabase.from("users").select("plan").eq("id", user.id).single();
  const guard = await guardAiUsage(user.id, (userProfile?.plan ?? "free") as Plan);
  if (guard) return guard;

  const systemPrompt = `Je bent een Nederlandse loopbaancoach die cv-teksten verbetert.
Verbeter de gegeven cv-tekst. Houd de tekst in het Nederlands. Maak de tekst krachtiger, specifieker en ATS-vriendelijker.
Retourneer uitsluitend een JSON-object met:
- improved: de verbeterde tekst
- changes: array van korte Nederlandse beschrijvingen van wat er is verbeterd

Retourneer alleen valide JSON, geen extra tekst.`;

  let completion;
  try {
    completion = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      temperature: 0.7,
      max_tokens: 500,
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Context: ${context}\n\nTe verbeteren tekst:\n${text}`,
        },
      ],
    });
  } catch {
    return { error: "OpenAI-verzoek mislukt. Probeer het opnieuw." };
  }

  const raw = completion.choices[0]?.message?.content ?? "";
  let parsed: ImproveTextResult;
  try {
    const jsonStr = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    parsed = ImproveTextSchema.parse(JSON.parse(jsonStr));
  } catch {
    return { error: "Kon de AI-respons niet verwerken. Probeer het opnieuw." };
  }

  await logUsage(
    user.id,
    "improveText",
    completion.usage?.prompt_tokens ?? 0,
    completion.usage?.completion_tokens ?? 0,
  ).catch(() => {});

  return { data: parsed };
}

// ─── generateAtsCheck ─────────────────────────────────────────────────────────

export type AtsCheckResult = z.infer<typeof AtsCheckSchema>;

export async function generateAtsCheck(
  cvText: string,
  jobPostId: string,
): Promise<{ data: AtsCheckResult } | { error: string }> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Niet ingelogd." };

  const { data: userProfile } = await supabase.from("users").select("plan").eq("id", user.id).single();
  const guard = await guardAiUsage(user.id, (userProfile?.plan ?? "free") as Plan);
  if (guard) return guard;

  // Fetch job post keywords
  const { data: jobPost } = await supabase
    .from("job_posts")
    .select("extracted_keywords_json, company, job_title")
    .eq("id", jobPostId)
    .eq("user_id", user.id)
    .single();

  if (!jobPost) return { error: "Vacature niet gevonden." };

  const keywords = (jobPost as { extracted_keywords_json: VacatureAnalysis }).extracted_keywords_json;
  const allKeywords = [
    ...(keywords?.required_skills ?? []),
    ...(keywords?.keywords ?? []),
  ].join(", ");

  const systemPrompt = `Je bent een ATS (Applicant Tracking System) expert die cv's analyseert.
Analyseer het gegeven cv ten opzichte van de vacature-keywords en retourneer uitsluitend een JSON-object met:
- score: een getal van 0 tot 100 dat aangeeft hoe goed het cv aansluit bij de vacature
- matched_keywords: array van keywords die aanwezig zijn in het cv
- missing_keywords: array van keywords die ontbreken in het cv
- recommendations: array van concrete Nederlandse aanbevelingen om de score te verbeteren

Retourneer alleen valide JSON, geen extra tekst.`;

  let completion;
  try {
    completion = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      temperature: 0.3,
      max_tokens: 1000,
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Vacature keywords: ${allKeywords}\n\nCV tekst:\n${cvText}`,
        },
      ],
    });
  } catch {
    return { error: "OpenAI-verzoek mislukt. Probeer het opnieuw." };
  }

  const raw = completion.choices[0]?.message?.content ?? "";
  let parsed: AtsCheckResult;
  try {
    const jsonStr = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    parsed = AtsCheckSchema.parse(JSON.parse(jsonStr));
  } catch {
    return { error: "Kon de AI-respons niet verwerken. Probeer het opnieuw." };
  }

  await logUsage(
    user.id,
    "generateAtsCheck",
    completion.usage?.prompt_tokens ?? 0,
    completion.usage?.completion_tokens ?? 0,
  ).catch(() => {});

  return { data: parsed };
}

// ─── generateCoverLetter ──────────────────────────────────────────────────────

export type CoverLetterResult = { content: string; cover_letter_id: string };

export async function generateCoverLetter(
  cvSummary: string,
  jobPostId: string,
  tone: "professioneel" | "enthousiast" | "informeel",
): Promise<{ data: CoverLetterResult } | { error: string }> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Niet ingelogd." };

  const { data: userProfile } = await supabase.from("users").select("plan").eq("id", user.id).single();
  const guard = await guardAiUsage(user.id, (userProfile?.plan ?? "free") as Plan);
  if (guard) return guard;

  // Fetch job post
  const { data: jobPost } = await supabase
    .from("job_posts")
    .select("company, job_title, extracted_keywords_json")
    .eq("id", jobPostId)
    .eq("user_id", user.id)
    .single();

  if (!jobPost) return { error: "Vacature niet gevonden." };

  const jp = jobPost as { company: string; job_title: string; extracted_keywords_json: VacatureAnalysis };

  const toneDescriptions: Record<typeof tone, string> = {
    professioneel: "formeel en professioneel, zakelijke toon",
    enthousiast: "enthousiast en gedreven, energieke toon",
    informeel: "informeel en toegankelijk, menselijke toon",
  };

  const systemPrompt = `Je bent een professionele sollicitatiebrief-schrijver voor de Nederlandse arbeidsmarkt.
Schrijf een complete Nederlandse sollicitatiebrief op basis van de gegeven informatie.
Toon: ${toneDescriptions[tone]}
De brief moet:
- Beginnen met een pakkende aanhef
- De motivatie en relevante ervaring belichten
- Aansluiten bij de bedrijfscultuur en functie-eisen
- Eindigen met een professionele afsluiting
- Tussen 250 en 400 woorden zijn

Retourneer uitsluitend een JSON-object met:
- content: de volledige sollicitatiebrief als tekst

Retourneer alleen valide JSON, geen extra tekst.`;

  const responsibilities = (jp.extracted_keywords_json?.responsibilities ?? []).slice(0, 3).join("; ");
  const requiredSkills = (jp.extracted_keywords_json?.required_skills ?? []).slice(0, 5).join(", ");

  let completion;
  try {
    completion = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      temperature: 0.7,
      max_tokens: 1500,
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Bedrijf: ${jp.company}
Functie: ${jp.job_title}
Vereiste vaardigheden: ${requiredSkills}
Verantwoordelijkheden: ${responsibilities}

CV samenvatting van de sollicitant:
${cvSummary}`,
        },
      ],
    });
  } catch {
    return { error: "OpenAI-verzoek mislukt. Probeer het opnieuw." };
  }

  const raw = completion.choices[0]?.message?.content ?? "";
  let parsed: z.infer<typeof CoverLetterSchema>;
  try {
    const jsonStr = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    parsed = CoverLetterSchema.parse(JSON.parse(jsonStr));
  } catch {
    return { error: "Kon de AI-respons niet verwerken. Probeer het opnieuw." };
  }

  // Save to cover_letters
  const { data: coverLetter, error: insertError } = await supabase
    .from("cover_letters")
    .insert({
      user_id: user.id,
      job_post_id: jobPostId,
      content: parsed.content,
      tone,
    })
    .select("id")
    .single();

  if (insertError) {
    return { error: `Kon sollicitatiebrief niet opslaan: ${insertError.message}` };
  }

  const coverLetterId = (coverLetter as { id: string }).id;

  await logUsage(
    user.id,
    "generateCoverLetter",
    completion.usage?.prompt_tokens ?? 0,
    completion.usage?.completion_tokens ?? 0,
  ).catch(() => {});

  return { data: { content: parsed.content, cover_letter_id: coverLetterId } };
}

// ─── updateCoverLetter ────────────────────────────────────────────────────────

export async function updateCoverLetter(
  id: string,
  content: string,
): Promise<{ error?: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Niet ingelogd." };

  const { error } = await supabase
    .from("cover_letters")
    .update({ content })
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return { error: error.message };
  return {};
}

// ─── getCoverLetters ──────────────────────────────────────────────────────────

export type CoverLetterRow = {
  id: string;
  content: string;
  tone: string;
  created_at: string;
  job_posts: { company: string; job_title: string } | null;
};

export async function getCoverLetters(): Promise<CoverLetterRow[]> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data } = await supabase
    .from("cover_letters")
    .select("id, content, tone, created_at, job_posts(company, job_title)")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (data ?? []) as unknown as CoverLetterRow[];
}

// ─── getJobPosts ──────────────────────────────────────────────────────────────

export type JobPostRow = {
  id: string;
  company: string;
  job_title: string;
  created_at: string;
  extracted_keywords_json: VacatureAnalysis | null;
};

export async function getJobPosts(): Promise<JobPostRow[]> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data } = await supabase
    .from("job_posts")
    .select("id, company, job_title, created_at, extracted_keywords_json")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (data ?? []) as JobPostRow[];
}
