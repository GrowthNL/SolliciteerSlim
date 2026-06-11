import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solliciteerslim.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/cv-maken", priority: 0.9, changeFrequency: "monthly" },
    { path: "/sollicitatiebrief-maken", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ats-check", priority: 0.8, changeFrequency: "monthly" },
    { path: "/cv-templates", priority: 0.8, changeFrequency: "weekly" },
    { path: "/cv-voorbeelden", priority: 0.8, changeFrequency: "monthly" },
    { path: "/prijzen", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
