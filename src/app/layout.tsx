import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "SolliciteerSlim — Slimmer solliciteren met AI",
    template: "%s | SolliciteerSlim",
  },
  description:
    "Maak met AI een professioneel cv en sollicitatiebrief die aansluiten op jouw vacature. ATS-proof, 3 templates, automatisch opslaan.",
  keywords: ["cv maken", "sollicitatiebrief", "ATS check", "cv template", "solliciteren", "cv builder"],
  authors: [{ name: "SolliciteerSlim" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "SolliciteerSlim",
    title: "SolliciteerSlim — Slimmer solliciteren met AI",
    description:
      "Maak met AI een professioneel cv en sollicitatiebrief die aansluiten op jouw vacature.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolliciteerSlim — Slimmer solliciteren met AI",
    description:
      "Maak met AI een professioneel cv en sollicitatiebrief die aansluiten op jouw vacature.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
