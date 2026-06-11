export type TemplateId = "modern" | "klassiek" | "minimaal";

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
];
