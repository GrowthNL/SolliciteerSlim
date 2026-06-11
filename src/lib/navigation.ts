import type { NavigationItem } from "@/types";

export const marketingNavigation: NavigationItem[] = [
  { label: "CV maken", href: "/cv-maken" },
  { label: "Sollicitatiebrief", href: "/sollicitatiebrief-maken" },
  { label: "ATS-check", href: "/ats-check" },
  { label: "Templates", href: "/cv-templates" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Blog", href: "/blog" },
];

export const dashboardNavigation: NavigationItem[] = [
  { label: "Overzicht", href: "/dashboard" },
  { label: "Mijn cv's", href: "/dashboard/cv" },
  { label: "Sollicitatiebrieven", href: "/dashboard/sollicitatiebrieven" },
  { label: "Vacatures", href: "/dashboard/vacatures" },
];
