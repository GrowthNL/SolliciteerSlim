import type { Metadata } from "next";
import { Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.svg",
  },
  title: {
    default: "CVmaken.nu, Jouw beste cv, in een paar klikken",
    template: "%s | CVmaken.nu",
  },
  description:
    "Maak met AI een professioneel cv en sollicitatiebrief die aansluiten op jouw vacature. ATS-proof, 3 templates, automatisch opslaan.",
  keywords: ["cv maken", "sollicitatiebrief", "ATS check", "cv template", "solliciteren", "cv builder"],
  authors: [{ name: "CVmaken.nu" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "CVmaken.nu",
    title: "CVmaken.nu, Jouw beste cv, in een paar klikken",
    description:
      "Maak met AI een professioneel cv en sollicitatiebrief die aansluiten op jouw vacature.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CVmaken.nu, Jouw beste cv, in een paar klikken",
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
    <html lang="nl" className={`${schibsted.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
