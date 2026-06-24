export type TemplateId = "modern" | "klassiek" | "minimaal" | "classic-sidebar" | "modern-links" | "header-band" | "schoon" | "serif";

export const TEMPLATES: { id: TemplateId; label: string; description: string }[] = [
  {
    id: "modern",
    label: "Modern",
    description: "Tweekolomsopmaak met groene accenten. Scoort goed bij moderne bedrijven en tech.",
  },
  {
    id: "klassiek",
    label: "Klassiek",
    description: "Traditioneel eenkoloms-ontwerp. Tijdloos en geschikt voor elke sector.",
  },
  {
    id: "minimaal",
    label: "Minimaal",
    description: "Strak en wit. Ideaal voor creatieve functies en wanneer minder meer is.",
  },
  {
    id: "classic-sidebar",
    label: "Zakelijk",
    description: "Gekleurde zijbalk rechts met contactgegevens. Professioneel en overzichtelijk.",
  },
  {
    id: "modern-links",
    label: "Timeline",
    description: "Zijbalk links met tijdlijn-werkervaring. Sterk voor functies met duidelijke carrièregroei.",
  },
  {
    id: "header-band",
    label: "Executive",
    description: "Brede gekleurde header met foto en contactgegevens. Valt direct op.",
  },
  {
    id: "schoon",
    label: "Schoon",
    description: "Volledig wit, enkelvoudige kolom. Ideaal als de inhoud voor zichzelf spreekt.",
  },
  {
    id: "serif",
    label: "Elegant",
    description: "Sierlijk schreeflettertype, gecentreerde kop. Perfect voor juridische en academische functies.",
  },
];
