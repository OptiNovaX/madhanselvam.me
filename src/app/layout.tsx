import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-mono", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Madhan Selvam | Principal Engineer — Data, AI, Cloud", template: "%s — Madhan Selvam" },
  description: "Madhan Selvam is a principal engineer and technical leader with 20+ years building enterprise data platforms, Lakehouses, cloud architectures and AI-ready infrastructure at PepsiCo, State Street and Nike.",
  metadataBase: new URL("https://madhanselvam.me")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body>
        <ScrollProgress />
        <SiteNav />
        {children}
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
