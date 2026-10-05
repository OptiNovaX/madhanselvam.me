import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { roles } from "@/content/experience";
import EduGrid from "@/components/EduGrid";
import { lab } from "@/content/extras";

export const metadata: Metadata = { title: "About", description: "Career history of Madhan Selvam — PepsiCo, State Street, Nike and a decade of enterprise ETL and Mainframe engineering." };

const principles = [
  "Own the target architecture end to end — Lakehouse, streaming and batch platforms designed for scale, cost and AI/ML readiness, not just the next release.",
  "Set the technical direction: architectural guardrails, reference patterns and enterprise data models that teams across the organization adopt and build on.",
  "Lead from the code: hands-on in design reviews, critical-path implementation and performance tuning, raising the engineering bar through mentorship.",
  "Turn business strategy into platform decisions — aligning executives, product, data science and engineering on what to build and why.",
  "De-risk modernization with evidence: technical due diligence, POCs and phased roadmaps that move production platforms forward without disruption.",
  "Govern by design — lineage, quality, observability and privacy (GDPR, CCPA, DPA, HIPAA) engineered into the platform from day one."
];

const trackRecord = [
  { org: "PepsiCo", line: "Architected A&M Hub — 50+ sources unified into governed Gold data products across 20 markets — and the data foundation for Integrated Business Planning across PBNA, PBUS and CAN." },
  { org: "State Street", line: "Moved a regulated AML and sanctions platform from on-prem Hadoop to an AWS Databricks Lakehouse: 70% faster, 40% lower storage cost." },
  { org: "Nike", line: "Built and led member and commerce platforms — 10+ PB from 30+ sources serving 350M+ members, with $4M+ in cloud savings." },
  { org: "Banking & healthcare", line: "A decade of Mainframe and Informatica integration at TCS, Cognizant and Aroghia for Citi, Bank of America, Union Bank, Anthem and Sutter Health." }
];

export default function About() {
  return <main className="page">
    <header className="page-hero shell">
      <span className="section-label">About</span>
      <h1>Building systems that endure.</h1>
      <p>I&apos;m {profile.name} — a principal engineer who architects the data platforms enterprises run on. For 20+ years I&apos;ve taken mission-critical systems from Mainframe to Hadoop to governed, AI-ready Lakehouses on AWS and Azure Databricks, across consumer goods, retail, finance and healthcare.</p>
      <ul className="track">{trackRecord.map((t) => <li key={t.org}><strong>{t.org}</strong><span>{t.line}</span></li>)}</ul>
    </header>

    <section className="section shell two-col">
      <div data-reveal>
        <span className="section-label">Architecture principles</span>
        <ul className="principles">{principles.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
      <div data-reveal>
        <span className="section-label">Beyond work</span>
        <p className="lab-intro">{lab.intro}</p>
        <div className="terminal" aria-label="Personal AI lab repositories">
          <div className="terminal-bar"><i /><i /><i /><span>~/ai-lab</span></div>
          <div className="terminal-body">
            <p className="prompt">ls ~/ai-lab</p>
            <ul>{lab.repos.map((r) => <li key={r.name}><a href={`${profile.github}/${r.name}`} target="_blank" rel="noopener noreferrer">{r.name}/</a><span>{r.note}</span></li>)}</ul>
            <p className="prompt">cat learning.log</p>
            <p className="terminal-out">{lab.learning}</p>
            <p className="prompt"><span className="cursor" /></p>
          </div>
        </div>
      </div>
    </section>

    <section className="section shell">
      <span className="section-label">Professional experience</span>
      <div className="timeline">{roles.map((r) => <article className="timeline-item" key={r.id} id={r.id} data-reveal>
        <div className={`timeline-node${Array.isArray(r.logo) ? " logo-stack" : ""}`}>{[r.logo].flat().map((src) => <Image key={src} src={src} alt={`${r.employer} logo`} width={48} height={30} unoptimized />)}</div>
        <div className="timeline-body">
          <div className="exp-top"><h2>{r.role}</h2><span className="exp-years">{r.years}</span></div>
          <p className="exp-meta">{r.employer}{r.location ? ` · ${r.location}` : ""}</p>
          <p className="exp-summary">{r.summary}</p>
          {r.highlights.length > 0 && <ul className="highlights">{r.highlights.map((h) => <li key={h}>{h}</li>)}</ul>}
          {r.chapters?.map((c) => <div className="chapter" key={c.name}>
            <h3>{c.name} <span>{c.years}</span></h3>
            <ul className="highlights">{c.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          </div>)}
          <div className="tag-row">{r.stack.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        </div>
      </article>)}</div>
    </section>

    <section className="section shell">
      <span className="section-label">Education</span>
      <EduGrid />
    </section>

    <section className="section shell page-footer-links"><Link href="/">← Back home</Link><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile ↗</a></section>
  </main>;
}
