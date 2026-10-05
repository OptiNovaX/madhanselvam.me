import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import CertGrid from "@/components/CertGrid";

export const metadata: Metadata = { title: "Certifications", description: "Verified certifications across Databricks, Azure, AWS, Cloudera, Informatica, Teradata and IBM." };

export default function Certifications() {
  return <main className="page">
    <header className="page-hero shell">
      <span className="section-label">Certifications</span>
      <h1>Always learning, always applying</h1>
      <p>Credentials earned across every era of the data stack — from DB2 and Teradata to Hadoop, cloud and the Databricks Lakehouse. Each card links to its verification page where one exists.</p>
    </header>
    <section className="section shell"><CertGrid /></section>
    <section className="section shell page-footer-links"><Link href="/">← Back home</Link><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile ↗</a></section>
  </main>;
}
