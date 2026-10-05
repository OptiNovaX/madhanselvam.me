import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { roles } from "@/content/experience";

export const metadata: Metadata = { title: "Experience", description: "Career history of Madhan Selvam — PepsiCo, State Street, Nike and a decade of enterprise ETL and Mainframe engineering for banking and healthcare." };

export default function Experience() {
  return <main className="page">
    <header className="page-hero shell">
      <span className="section-label">Experience</span>
      <h1>Two decades, every era of the data stack.</h1>
      <p>From Mainframe and Informatica to Hadoop, Spark and governed cloud Lakehouses — across consumer goods, retail, finance and healthcare.</p>
    </header>

    <section className="section shell">
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

    <section className="section shell page-footer-links"><Link href="/">← Back home</Link><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile ↗</a></section>
  </main>;
}
