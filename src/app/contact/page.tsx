import type { Metadata } from "next";
import Connect from "@/components/Connect";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Madhan Selvam about data platforms, Lakehouse architecture, platform modernization and applied AI." };

export default function Contact() {
  return <main className="page">
    <Connect />
  </main>;
}
