import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madhan Selvam | Data, AI & Platform Engineering",
  description: "Madhan Selvam builds data platforms, intelligent systems, and cloud architectures that scale.",
  metadataBase: new URL("https://madhanselvam.tech")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
