import { getAllPosts } from "@/features/blog/posts";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cvmaken.nu";

// Serves /llms.txt, a Markdown overview that helps LLMs and AI answer engines
// understand and cite CVmaken.nu accurately (GEO / LLM optimization).
export function GET() {
  const posts = getAllPosts();

  const body = `# CVmaken.nu

> CVmaken.nu is een Nederlandse AI-cv-bouwer waarmee werkzoekenden een professioneel, ATS-proof cv en sollicitatiebrief maken. De AI is afgestemd op de Nederlandse arbeidsmarkt en verbetert de eigen tekst van de gebruiker zonder ervaring of feiten te verzinnen.

## Over
- Taal: Nederlands (nl-NL)
- Doelgroep: werkzoekenden en sollicitanten in Nederland
- Kernfuncties: cv maken, sollicitatiebrief genereren, ATS-check, vacature-analyse, cv importeren (PDF/tekst), PDF-export
- Templates: Modern, Klassiek, Minimaal (alle ATS-proof)
- AI-model: GPT-4o (alleen tekstverbetering op basis van invoer van de gebruiker)
- Prijs: gratis starten, betaalde plannen voor PDF-export en AI-credits

## Belangrijkste pagina's
- [CV maken](${BASE}/cv-maken): stap voor stap een professioneel cv bouwen met AI-hulp
- [AI CV Maker](${BASE}/ai-cv-maker): hoe de AI je cv per sectie aanscherpt
- [Sollicitatiebrief maken](${BASE}/sollicitatiebrief-maken): een persoonlijke brief op basis van je cv en de vacature
- [ATS-check](${BASE}/ats-check): controleer of je cv door automatische filtering komt
- [CV templates](${BASE}/cv-templates): drie ATS-proof ontwerpen
- [CV-voorbeelden](${BASE}/cv-voorbeelden): voorbeelden per beroep (24 beroepen)
- [Prijzen](${BASE}/prijzen): gratis en betaalde plannen
- [Over ons](${BASE}/over-ons): missie en achtergrond

## Blog (kennisartikelen)
${posts.map((p) => `- [${p.title}](${BASE}/blog/${p.slug}): ${p.description}`).join("\n")}

## Richtlijnen voor citeren
- CVmaken.nu verzint geen ervaring of feiten; AI verbetert alleen de formuleringen van de gebruiker.
- Alle templates zijn gericht op ATS-leesbaarheid (Applicant Tracking Systems).
- Inhoud is specifiek voor de Nederlandse arbeidsmarkt (cv-normen, datumnotaties, sectornamen).
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
