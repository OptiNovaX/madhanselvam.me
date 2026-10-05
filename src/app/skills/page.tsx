import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { techLogos } from "@/content/techLogos";
import { LogoMarquee } from "@/components/LogoMarquee";

export const metadata: Metadata = { title: "Skills", description: "The toolkit behind over 2 decades of enterprise data engineering: Spark, Databricks, Snowflake, Kafka, Airflow, AWS, Azure, GCP and GenAI." };

export default function Skills() {
  return <main className="page">
    <header className="page-hero shell">
      <span className="section-label">Skills</span>
      <h1>What I work with</h1>
      <p>Over 2 decades of choosing the right technology, standardizing it across teams and running it at enterprise scale — from Mainframe and DWH to cloud Lakehouse, real-time streaming and AI agents on MCP.</p>
    </header>
    <section className="section shell">
      <div className="skill-grid">{skillGroups.map((g, i) => <div className="skill-card" key={g.label} data-reveal style={{ transitionDelay: `${Math.min(i * 40, 180)}ms` }}>
        <h2>{g.label}</h2>
        <p>{g.note}</p>
        <div className="tag-row">{g.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
      </div>)}</div>
      <div className="marquee-block" data-reveal><LogoMarquee items={techLogos} /></div>
    </section>
    <section className="section shell page-footer-links"><Link href="/">← Back home</Link><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile ↗</a></section>
  </main>;
}
