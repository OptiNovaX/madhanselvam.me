import type { Metadata } from "next";
import Connect from "@/components/Connect";
import CoffeeChatForm from "@/components/CoffeeChatForm";
import SectionHead from "@/components/SectionHead";

export const metadata: Metadata = { title: "Contact", description: "Book a coffee chat with Madhan Selvam about data platforms, Lakehouse architecture, platform modernization and applied AI." };

export default function Contact() {
  return <main className="page">
    <Connect />
    <section id="coffee-chat" className="section shell chat-section">
      <SectionHead label="Coffee chat" title="Book a 30-minute conversation" intro="Tell me a little about you and when suits you — I'll confirm a time by email." />
      <CoffeeChatForm />
    </section>
  </main>;
}
