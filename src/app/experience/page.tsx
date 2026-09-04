import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";

const roles = [
  { years: "2025 — now", employer: "PepsiCo", logo: "/logos/pepsico.png", role: "Principal Engineer — IBP PBNA", summary: "Architecting a centralized forecasting platform across Commerce, Finance, and Supply Chain on Azure Databricks. Led a zero-downtime Unity Catalog migration for 200+ ETL jobs and 80+ Delta tables, improved reconciliation accuracy from 80% to 99%, reduced batch runtime by 30%, and cut development time 35% with AI-assisted engineering.", tags: ["Azure", "Databricks", "PySpark", "Unity Catalog", "GitHub Copilot"] },
  { years: "2024 — 2025", employer: "State Street", logo: "/logos/statestreet.png", role: "Principal Consultant — AML Sanctions", summary: "Led the migration from an on-premises CDH/HBase data lake to AWS Databricks. Defined the Medallion Lakehouse architecture, built quality and reconciliation frameworks, and improved platform performance by 70% while reducing storage costs by 40%.", tags: ["AWS", "Databricks", "Kafka", "Delta Lake", "Airflow"] },
  { years: "2018 — 2024", employer: "Nike", logo: "/logos/nike.svg", role: "Engineering Manager — Commerce Foundation & Consumer Analytics", summary: "Directed global commerce and consumer analytics platforms serving 5,000+ users and 350M+ members across 10+ PB of data. Delivered enterprise KPIs powering visibility into a $53B revenue stream, improved reporting accuracy 25%, and drove $4M+ in cloud cost savings.", tags: ["AWS", "Snowflake", "Spark", "Data Governance"] },
  { years: "2014 — 2018", employer: "Nike", logo: "/logos/nike.svg", role: "Lead Data Engineer / Sr. Data Engineer", summary: "Designed batch and real-time pipelines across Spark, PySpark, Structured Streaming, Hive, Kafka, and Kinesis. Modernized Pig and Hive workloads, built anomaly detection and streaming dashboards, and established governance practices with Okera and Ranger.", tags: ["Spark", "Kafka", "Kinesis", "Hive", "Okera"] },
  { years: "2004 — 2013", employer: "Sutter Health · TCS · Cognizant · Sukraa", logo: "/logos/tcs.svg", role: "Data Engineering and ETL", summary: "Delivered enterprise ETL, data integration, reporting, and data warehousing solutions using Informatica, Mainframe, and SQL Server. Client work included Union Bank, Citi, Bank of America, and Anthem Wellpoint.", tags: ["Informatica", "Mainframe", "SQL Server"] }
];

export default function Experience() {
  return <main className="experience-page">
    <div className="nav-bar"><nav className="nav shell"><Link className="wordmark" href="/">MS<span>.</span></Link><div className="nav-links"><Link href="/skills">Skills</Link><Link href="/#credentials">Credentials</Link><a className="nav-cta" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></div></nav></div>
    <header className="experience-hero shell"><span className="section-label">DETAILED EXPERIENCE</span><h1>Building systems that endure.</h1><p>Selected chapters from a 20+ year career across enterprise data engineering, cloud architecture, data warehousing, Mainframe modernization, AI enablement, and technical leadership.</p></header>
    <section className="experience-detail shell">
      <div className="timeline timeline-experience">{roles.map((role, index) => <article className="timeline-item" key={`${role.years}-${role.employer}`} data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
        <div className="timeline-node"><Image src={role.logo} alt={`${role.employer} logo`} width={52} height={32} unoptimized /></div>
        <div className="timeline-body">
          <h2>{role.role}</h2>
          <p className="timeline-meta">{role.employer} · {role.years}</p>
          <p className="timeline-desc">{role.summary}</p>
          <div className="role-tags">{role.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
      </article>)}</div>
    </section>
    <section className="experience-footer shell"><Link href="/">← Back to profile</Link><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile ↗</a></section>
  </main>;
}
