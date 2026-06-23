"use server";

import OpenAI from "openai";
import { createClient } from "@/lib/supabase/server";
import { createEmptyResumeDocument, validateResumeDocument, type ResumeDocument } from "@/features/resumes/model";
import { saveResume } from "./resumes";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY ?? "" });

const PARSE_PROMPT = `Je bent een cv-parser voor de Nederlandse arbeidsmarkt.
Analyseer de gegeven cv-tekst en extraheer alle gegevens in het volgende JSON-formaat.
Retourneer ALLEEN valide JSON, geen Markdown-blokken of extra tekst.

Formaat:
{
  "version": 1,
  "personalDetails": {
    "firstName": "",
    "lastName": "",
    "professionalTitle": "",
    "email": "",
    "phone": "",
    "city": "",
    "linkedinUrl": "",
    "websiteUrl": ""
  },
  "profileSummary": "",
  "workExperience": [
    {
      "id": "we-1",
      "jobTitle": "",
      "company": "",
      "location": "",
      "startDate": "",
      "endDate": "",
      "isCurrent": false,
      "bullets": []
    }
  ],
  "education": [
    {
      "id": "edu-1",
      "institution": "",
      "degree": "",
      "fieldOfStudy": "",
      "location": "",
      "startDate": "",
      "endDate": "",
      "isCurrent": false,
      "description": ""
    }
  ],
  "skills": [],
  "languages": [
    { "id": "lang-1", "name": "", "level": "" }
  ],
  "certificates": [],
  "courses": [],
  "interests": [],
  "references": [],
  "customSections": []
}

Regels:
- Gebruik id's als "we-1", "we-2" voor werkervaring; "edu-1" voor opleiding; "lang-1" voor talen
- Datums als "jan 2020" of "2020" (niet als ISO-datums)
- isCurrent = true als de persoon er nog werkt/studeert
- bullets = een array van korte beschrijvende zinnen per baan
- skills = een array van vaardigheidsnamen (strings)
- Als iets ontbreekt in het cv, laat het veld leeg`;

export async function importCvFromText(
  text: string,
): Promise<{ resumeId: string } | { error: string }> {
  if (!text || text.trim().length < 50) {
    return { error: "De cv-tekst is te kort. Plak meer inhoud." };
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Niet ingelogd." };

  let completion;
  try {
    completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.1,
      max_tokens: 3000,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: PARSE_PROMPT },
        { role: "user", content: `CV-tekst:\n\n${text.slice(0, 8000)}` },
      ],
    });
  } catch {
    return { error: "AI-verzoek mislukt. Probeer het opnieuw." };
  }

  const raw = completion.choices[0]?.message?.content ?? "{}";
  let parsed: ResumeDocument;
  try {
    const json = JSON.parse(raw);
    const validation = validateResumeDocument(json);
    if (validation.success) {
      parsed = validation.data;
    } else {
      // Merge with empty doc to fill in missing required fields
      const empty = createEmptyResumeDocument();
      const merged = { ...empty, ...json, personalDetails: { ...empty.personalDetails, ...json.personalDetails } };
      const v2 = validateResumeDocument(merged);
      if (!v2.success) return { error: "Kon de cv-gegevens niet verwerken. Probeer het opnieuw." };
      parsed = v2.data;
    }
  } catch {
    return { error: "AI-respons ongeldig. Probeer het opnieuw." };
  }

  const result = await saveResume(null, parsed);
  if ("error" in result) return { error: result.error };
  return { resumeId: result.id };
}

export async function importCvFromFile(
  formData: FormData,
): Promise<{ resumeId: string } | { error: string }> {
  const file = formData.get("file") as File | null;
  if (!file) return { error: "Geen bestand geselecteerd." };
  if (file.size > 5 * 1024 * 1024) return { error: "Bestand mag maximaal 5 MB zijn." };

  let text: string;
  try {
    if (file.type === "application/pdf") {
      // Dynamic import to avoid build issues; cast needed for ESM type mismatch
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pdfParse = ((await import("pdf-parse")) as any).default ?? (await import("pdf-parse"));
      const buffer = Buffer.from(await file.arrayBuffer());
      const result = await pdfParse(buffer);
      text = result.text;
    } else {
      text = await file.text();
    }
  } catch {
    return { error: "Bestand kon niet worden gelezen. Probeer een .txt bestand of plak je cv-tekst." };
  }

  if (!text || text.trim().length < 50) {
    return { error: "Het bestand bevat te weinig tekst. Probeer een ander bestand of plak je cv-tekst." };
  }

  return importCvFromText(text);
}
