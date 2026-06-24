import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cvmaken.nu";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CVmaken.nu",
  url: BASE,
  logo: `${BASE}/logo-dark.svg`,
  description:
    "Nederlandse AI-cv-bouwer waarmee je een professioneel, ATS-proof cv en sollicitatiebrief maakt.",
  sameAs: [],
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CVmaken.nu",
  url: BASE,
  inLanguage: "nl-NL",
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[orgJsonLd, siteJsonLd]} />
      <SiteHeader />
      <Breadcrumbs />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
