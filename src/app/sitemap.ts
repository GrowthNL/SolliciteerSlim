import type { MetadataRoute } from "next";
import { getAllPosts } from "@/features/blog/posts";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cvmaken.nu";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/cv-maken", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ai-cv-maker", priority: 0.9, changeFrequency: "monthly" },
    { path: "/sollicitatiebrief-maken", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ats-check", priority: 0.8, changeFrequency: "monthly" },
    { path: "/cv-templates", priority: 0.8, changeFrequency: "weekly" },
    { path: "/cv-voorbeelden", priority: 0.8, changeFrequency: "monthly" },
    { path: "/over-ons", priority: 0.6, changeFrequency: "monthly" },
    { path: "/prijzen", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.4, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/voorwaarden", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
