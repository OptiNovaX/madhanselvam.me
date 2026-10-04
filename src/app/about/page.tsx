import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { roles, education } from "@/content/experience";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = { title: "About", description: "Career history of Madhan Selvam — PepsiCo, State Street, Nike and a decade of enterprise ETL and Mainframe engineering." };

const principles = [
  "Translate business requirements into reliable, high-performance data solutions — batch, streaming, governed and AI/ML-ready.",
  "Stay hands-on: architecture design, code reviews and mentoring, promoting software and data engineering best practices.",
  "Work across Business, Product, Architecture, Data Science and AI/ML to deliver compliant, high-value platforms.",
  "Lead technical due diligence, POCs and architecture assessments to bring in emerging technology with evidence.",
  "Build privacy and compliance in from the start — GDPR, CCPA, DPA and HIPAA."
];

export default function About() {
  return <main className="page">
    <header className="page-hero shell">
      <span className="section-label">About</span>
      <h1>Building systems that endure.</h1>
      <p>I&apos;m {profile.name}, a principal engineer and hands-on technical leader. Across 20+ years I have designed, modernized and led enterprise data platforms — from Mainframe and Informatica through Hadoop and Spark to cloud Lakehouses on AWS and Azure Databricks.</p>
    </header>

    <section className="section shell two-col">
      <div data-reveal>
        <span className="section-label">How I work</span>
        <ul className="principles">{principles.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
      <div data-reveal>
        <span className="section-label">Beyond work</span>
        <Placeholder title="A personal note" hint="Interests outside work, what drives you, where you're based. Edit src/app/about/page.tsx." />
      </div>
    </section>

    <section className="section shell">
      <span className="section-label">Professional experience</span>
      <div className="timeline">{roles.map((r) => <article className="timeline-item" key={r.id} id={r.id} data-reveal>
        <div className={`timeline-node${Array.isArray(r.logo) ? " logo-stack" : ""}`}>{[r.logo].flat().map((src) => <Image key={src} src={src} alt={`${r.employer} logo`} width={48} height={30} unoptimized />)}</div>
        <div className="timeline-body">
          <div className="exp-top"><h2>{r.role}</h2><span className="exp-years">{r.years}</span></div>
          <p className="exp-meta">{r.employer} · {r.location}</p>
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
      <div className="edu-grid">{education.map((e) => <div className="edu" key={e.degree} data-reveal>
        <h3>{e.degree}</h3>
        <p>{e.school || <span className="ph-inline">Placeholder — institution name</span>}{e.years ? ` · ${e.years}` : ""}</p>
      </div>)}</div>
    </section>

    <section className="section shell page-footer-links"><Link href="/">← Back home</Link><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile ↗</a></section>
  </main>;
}
