import Link from "next/link";
import { profile } from "@/content/profile";
import { LogoMarquee } from "@/components/LogoMarquee";
import { techLogos } from "@/content/techLogos";

const skills = [
  { label: "Programming", tags: ["Python", "Scala", "Java", "Shell Scripting", "PowerShell", "SQL / PL-SQL / T-SQL"] },
  { label: "Big Data", tags: ["Hadoop (HDFS, MapReduce, YARN)", "Spark", "PySpark", "Hive", "Pig", "Impala", "Tez"] },
  { label: "Streaming", tags: ["Kafka", "Kinesis", "Azure Event Hubs"] },
  { label: "Cloud", tags: ["AWS — S3, EC2, EMR, RDS, Lambda, Redshift", "Azure — ADLS, Data Factory, Synapse, DevOps", "GCP — Dataproc, Pub/Sub, BigQuery"] },
  { label: "Lakehouse", tags: ["Databricks", "Delta Live Tables", "Unity Catalog", "Genie"] },
  { label: "Orchestration", tags: ["Apache Airflow", "Oozie", "Autosys", "Control-M", "Cron"] },
  { label: "Data Integration", tags: ["Informatica PowerCenter & IDQ", "Matillion", "dbt"] },
  { label: "Databases", tags: ["Snowflake", "Oracle", "SQL Server", "Teradata", "DB2", "MySQL", "HBase", "DynamoDB"] },
  { label: "Modeling & Viz", tags: ["ER-Studio", "Tableau", "Power BI"] },
  { label: "DevOps & IaC", tags: ["GitHub", "Bitbucket", "Jenkins", "Terraform"] },
  { label: "AI / GenAI", tags: ["Microsoft Copilot", "Claude", "OpenAI", "LLMs & Prompt Engineering", "RAG & Embeddings", "AI Agents / Agentic AI", "Model Context Protocol (MCP)"] },
  { label: "Legacy Systems", tags: ["Mainframe — COBOL, JCL, VSAM, CICS"] }
];

export default function Skills() {
  return <main className="experience-page">
    <div className="nav-bar"><nav className="nav shell"><Link className="wordmark" href="/">MS<span>.</span></Link><div className="nav-links"><Link href="/experience">Experience</Link><Link href="/#credentials">Credentials</Link><a className="nav-cta" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></div></nav></div>
    <header className="experience-hero shell"><span className="section-label">SKILLSETS</span><h1>What I work with.</h1><p>The full stack behind 20+ years of enterprise engineering — languages, platforms, and practices drawn directly from my resume and LinkedIn.</p></header>
    <section className="experience-detail shell">
      <div className="skills-grid">
        {skills.map((group, index) => <div className="skill-row" key={group.label} data-reveal style={{ transitionDelay: `${Math.min(index * 40, 320)}ms` }}>
          <span className="skill-label">{group.label}</span>
          <div className="skill-tags">{group.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>)}
      </div>
      <div className="marquee-block" data-reveal>
        <div className="marquee-label">TOOLS &amp; PLATFORMS</div>
        <LogoMarquee items={techLogos} />
      </div>
    </section>
    <section className="experience-footer shell"><Link href="/">← Back to profile</Link><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile ↗</a></section>
  </main>;
}
