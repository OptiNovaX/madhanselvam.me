import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import EduGrid from "@/components/EduGrid";
import { principalRoles } from "@/content/experience";
import { lab } from "@/content/extras";

export const metadata: Metadata = { title: "About", description: "Madhan Selvam — principal engineer and data architect: track record, architecture principles, education and an after-hours AI lab." };

const principles = [
  "Own the target architecture end to end — Lakehouse, streaming and batch platforms designed for scale, cost and AI/ML readiness, not just the next release.",
  "Set the technical direction: architectural guardrails, reference patterns and enterprise data models that teams across the organization adopt and build on.",
  "Lead from the code: hands-on in design reviews, critical-path implementation and performance tuning, raising the engineering bar through mentorship.",
  "Turn business strategy into platform decisions — aligning executives, product, data science and engineering on what to build and why.",
  "De-risk modernization with evidence: technical due diligence, POCs and phased roadmaps that move production platforms forward without disruption.",
  "Govern by design — lineage, quality, observability and privacy (GDPR, CCPA, DPA, HIPAA) engineered into the platform from day one."
];

export default function About() {
  return <main className="page">
    <header className="page-hero shell">
      <span className="section-label">About</span>
      <h1>Building systems that endure.</h1>
      <p>I&apos;m {profile.name} — a principal engineer who sets the technical direction for the data platforms enterprises run on. For over 2 decades I&apos;ve led the shift from Mainframe to DWH to Data Lake to cloud Lakehouse and AI-ready platforms — owning the architecture, raising the engineering bar, aligning business and technology leaders, and growing the engineers who build what comes next.</p>
      <ul className="track roles">{principalRoles.map((r) => <li key={r.title} data-reveal><strong>{r.title}</strong><span>{r.line}</span></li>)}</ul>
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
      <Link className="text-link" href="/experience">See the full career timeline <span>→</span></Link>
    </section>

    <section className="section shell">
      <span className="section-label">Education</span>
      <EduGrid />
    </section>

    <section className="section shell page-footer-links"><Link href="/">← Back home</Link><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile ↗</a></section>
  </main>;
}
