import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "SolliciteerSlim — Slimmer solliciteren met AI", template: "%s | SolliciteerSlim" },
  description: "Maak met AI een professioneel cv en sollicitatiebrief die aansluiten op jouw vacature.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
