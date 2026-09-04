import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Madhan Selvam | Expert Engineer — Data, AI, Cloud, Architecture, Platform",
  description: "Madhan Selvam is an expert engineer and technical leader building enterprise data platforms, data warehouses, intelligent systems, cloud architectures, AI/ML and GenAI solutions, and Mainframe modernization at scale.",
  metadataBase: new URL("https://madhanselvam.tech")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <ScrollProgress />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
