import type { Metadata } from "next";
import { IBM_Plex_Mono, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-mono", display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Madhan Selvam | Principal Engineer — Data, AI, Cloud", template: "%s — Madhan Selvam" },
  description: "Madhan Selvam is a principal engineer and technical leader with over 2 decades building enterprise data platforms, Lakehouses, cloud architectures and AI-ready infrastructure at PepsiCo, State Street and Nike.",
  metadataBase: new URL("https://madhanselvam.me")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable} ${display.variable}`}>
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
