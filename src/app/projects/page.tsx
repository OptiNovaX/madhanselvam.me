import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = { title: "Projects", description: "Data platform, Lakehouse and applied AI projects by Madhan Selvam." };

export default function Projects() {
  return <main className="page">
    <header className="page-hero shell">
      <span className="section-label">Projects</span>
      <h1>Selected work</h1>
      <p>Lakehouse patterns, Spark performance and applied AI for data engineering. Write-ups are in progress.</p>
    </header>
    <section className="section shell">
      <div className="project-grid">{projects.map((p, i) => <ProjectCard key={p.slug} project={p} style={{ transitionDelay: `${Math.min(i * 60, 360)}ms` }} />)}</div>
    </section>
    <section className="section shell">
      <span className="section-label">Notebooks and datasets</span>
      <Placeholder title="Notebooks, datasets & demos" hint="Link Databricks notebooks, Kaggle datasets or demo videos here (src/app/projects/page.tsx)." />
    </section>
    <section className="section shell page-footer-links"><Link href="/">← Back home</Link><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub profile ↗</a></section>
  </main>;
}
