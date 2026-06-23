import { Star } from "lucide-react";
import { Marquee } from "./marquee";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  /** initials shown in avatar */
  initials: string;
  /** avatar accent: lime | coral | ink */
  accent?: "lime" | "coral" | "ink";
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sanne Bakker",
    role: "Marketing Manager",
    quote:
      "Binnen een half uur had ik een cv waar ik trots op was. De AI-suggesties maakten mijn werkervaring echt scherper.",
    initials: "SB",
    accent: "lime",
  },
  {
    name: "Daan de Wit",
    role: "Software Developer",
    quote:
      "De ATS-check liet zien welke zoekwoorden ik miste. Twee weken later had ik drie gesprekken staan.",
    initials: "DW",
    accent: "coral",
  },
  {
    name: "Fatima El Amrani",
    role: "HR Adviseur",
    quote:
      "Eindelijk een Nederlandse tool die snapt hoe onze arbeidsmarkt werkt. Geen rare Engelse vertalingen meer.",
    initials: "FA",
    accent: "ink",
  },
  {
    name: "Tom Visser",
    role: "Projectmanager",
    quote:
      "Ik kon mijn oude cv importeren en hoefde alleen nog bij te schaven. Dat scheelde me een hele avond werk.",
    initials: "TV",
    accent: "lime",
  },
  {
    name: "Lotte Jansen",
    role: "Verpleegkundige",
    quote:
      "De templates zien er professioneel uit zonder overdreven te zijn. Precies wat een recruiter wil zien.",
    initials: "LJ",
    accent: "coral",
  },
  {
    name: "Ravi Patel",
    role: "Data Analist",
    quote:
      "De sollicitatiebrief-generator gaf me een sterke basis die ik daarna persoonlijk kon maken. Aanrader.",
    initials: "RP",
    accent: "ink",
  },
];

const accentClasses: Record<NonNullable<Testimonial["accent"]>, string> = {
  lime: "bg-[#C6F24E] text-[#111113]",
  coral: "bg-[#FB5B36] text-white",
  ink: "bg-[#111113] text-[#C6F24E]",
};

function Card({ name, role, quote, initials, accent = "lime" }: Testimonial) {
  return (
    <figure className="flex w-[330px] shrink-0 flex-col rounded-2xl border border-[#E5E3DA] bg-white p-6 shadow-[0_1px_2px_rgba(17,17,19,0.04)]">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-[#FB5B36] text-[#FB5B36]" />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-6 text-[#2E2E2C]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          className={`flex size-9 items-center justify-center rounded-full text-xs font-black ${accentClasses[accent]}`}
        >
          {initials}
        </span>
        <span>
          <span className="block text-sm font-bold text-[#111113]">{name}</span>
          <span className="block text-xs text-[#9A9A92]">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

type TestimonialsProps = {
  /** dark = on ink background, light = on bone/white */
  variant?: "light" | "dark";
};

export function Testimonials({ variant = "light" }: TestimonialsProps) {
  const isDark = variant === "dark";
  const half = Math.ceil(TESTIMONIALS.length / 2);
  const rowA = TESTIMONIALS.slice(0, half);
  const rowB = TESTIMONIALS.slice(half);

  return (
    <section className={isDark ? "bg-[#111113] py-20 sm:py-24" : "py-20 sm:py-24"}>
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono-label text-xs text-[#9A9A92]">
            <span className="font-bold text-[#FB5B36]">Reviews</span> · Wat gebruikers zeggen
          </p>
          <h2
            className={`mt-3 text-3xl font-black tracking-[-0.03em] sm:text-4xl ${
              isDark ? "text-[#F2F1EC]" : "text-[#111113]"
            }`}
          >
            Sollicitanten die ons al voorgingen
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-[#FB5B36] text-[#FB5B36]" />
              ))}
            </div>
            <span className={`text-sm font-bold ${isDark ? "text-[#F2F1EC]" : "text-[#111113]"}`}>
              4,8/5
            </span>
            <span className="text-sm text-[#9A9A92]">gemiddelde waardering</span>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <Marquee>
          {rowA.map((t) => (
            <Card key={t.name} {...t} />
          ))}
        </Marquee>
        <Marquee reverse>
          {rowB.map((t) => (
            <Card key={t.name} {...t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
