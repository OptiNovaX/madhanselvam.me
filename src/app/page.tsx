import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { LogoMarquee } from "@/components/LogoMarquee";
import { techLogos } from "@/content/techLogos";

const impact = [
  { value: "20+", label: "years architecting enterprise data, AI, and cloud platforms" },
  { value: "10+ PB", label: "of enterprise data platforms designed and modernized" },
  { value: "350M+", label: "users and members served across global platforms" },
  { value: "$4M+", label: "in cloud cost savings delivered through platform optimization" },
  { value: "99%", label: "reconciliation accuracy achieved across enterprise systems" },
  { value: "Zero-downtime", label: "track record migrating large-scale enterprise data platforms" }
];

const skillCategories = ["Programming", "Big Data", "Streaming", "Cloud", "Lakehouse", "Orchestration", "Data Integration", "Databases", "Modeling & Viz", "DevOps & IaC", "AI / GenAI", "Legacy Systems"];

const associations = [
  { name: "PepsiCo", logo: "/logos/pepsico.png", href: "https://www.pepsico.com/" },
  { name: "State Street", logo: "/logos/statestreet.png", href: "https://www.statestreet.com/" },
  { name: "Nike", logo: "/logos/nike.svg", href: "https://www.nike.com/" },
  { name: "Sutter Health", logo: "/logos/sutterhealth.png", href: "https://www.sutterhealth.org/" },
  { name: "TCS", logo: "/logos/tcs.svg", href: "https://www.tcs.com/" },
  { name: "Cognizant", logo: "/logos/cognizant.png", href: "https://www.cognizant.com/" },
  { name: "Union Bank", logo: "/logos/union-bank.png", href: "https://www.unionbank.com/" },
  { name: "Citi", logo: "/logos/citi.png", href: "https://www.citigroup.com/" },
  { name: "Bank of America", logo: "/logos/bank-of-america.png", href: "https://www.bankofamerica.com/" },
  { name: "Anthem", logo: "/logos/anthem.png", href: "https://www.anthem.com/" },
  { name: "Databricks", logo: "/logos/databricks.svg", href: "https://www.databricks.com/learn/certification" },
  { name: "Microsoft Azure", logo: "/logos/microsoft.png", href: "https://learn.microsoft.com/credentials/certifications/" },
  { name: "AWS", logo: "/logos/amazonaws.png", href: "https://aws.amazon.com/certification/" },
  { name: "Cloudera", logo: "/logos/cloudera.svg", href: "https://www.cloudera.com/services-and-support/training/certification.html" },
  { name: "Informatica", logo: "/logos/informatica.png", href: "https://now.informatica.com/Certified-Professional-Program.html" },
  { name: "Teradata", logo: "/logos/teradata.svg", href: "https://www.teradata.com/university" }
];

type Certification = { name: string; href: string; logo: string | null; initials: string | null };

const certifications: Certification[] = [
  { name: "Databricks Data Engineer Associate", href: "https://www.databricks.com/learn/certification/data-engineer-associate", logo: "/logos/databricks.svg", initials: null },
  { name: "Databricks Developer for Apache Spark 3.0", href: "https://www.databricks.com/learn/certification", logo: "/logos/databricks.svg", initials: null },
  { name: "Databricks Platform Architect", href: "https://www.databricks.com/learn/certification", logo: "/logos/databricks.svg", initials: null },
  { name: "Databricks Generative AI", href: "https://www.databricks.com/learn/certification", logo: "/logos/databricks.svg", initials: null },
  { name: "Microsoft Azure Fundamentals", href: "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/", logo: "/logos/microsoft.png", initials: null },
  { name: "AWS Certified Solutions Architect – Associate", href: "https://aws.amazon.com/certification/certified-solutions-architect-associate/", logo: "/logos/amazonaws.png", initials: null },
  { name: "Cloudera Spark and Hadoop Developer (CCA 175)", href: "https://www.cloudera.com/services-and-support/training/certification.html", logo: "/logos/cloudera.svg", initials: null },
  { name: "Cloudera Developer for Apache Hadoop (CCDH)", href: "https://www.cloudera.com/services-and-support/training/certification.html", logo: "/logos/cloudera.svg", initials: null },
  { name: "Informatica PowerCenter Data Integration: Developer Specialist", href: "https://now.informatica.com/Certified-Professional-Program.html", logo: "/logos/informatica.png", initials: null },
  { name: "Teradata Basics V2R5", href: "https://www.teradata.com/university", logo: "/logos/teradata.svg", initials: null },
  { name: "IBM DB2 Universal Database (DB2 UDB) V8.1 Family", href: "https://www.ibm.com/training/", logo: null, initials: "IBM" }
];

type EducationItem = { title: string; org: string; period: string; monogram: string; accent?: boolean; href?: string };

const education: EducationItem[] = [
  { title: "Specialization in Leadership and Management", org: "Harvard Business School Online", period: "2022 – 2024", monogram: "H", accent: true, href: "https://online.hbs.edu/verify-certificate?dvid=6PCMSXA8" },
  { title: "Strategy Execution", org: "Harvard Business School Online", period: "2024", monogram: "H", accent: true, href: "https://online.hbs.edu/verify-certificate?dvid=F542AKT7" },
  { title: "Leadership Principles", org: "Harvard Business School Online", period: "2022 – 2023", monogram: "H", accent: true, href: "https://online.hbs.edu/verify-certificate?dvid=XNQZVP4L" },
  { title: "Management Essentials", org: "Harvard Business School Online", period: "2022", monogram: "H", accent: true, href: "https://online.hbs.edu/verify-certificate?dvid=BXWKO8LQ" },
  { title: "Bachelor's Degree, Information Technology", org: "Engineering", period: "2004", monogram: "IT" }
];

const linkedinCertifications = "https://www.linkedin.com/in/madhanselvam/details/certifications/";

const experienceSummary = "Across 20+ years, I have designed, modernized, and led enterprise data platforms, data warehouses, Lakehouse architectures, and hybrid cloud solutions. As a Principal Engineer at PepsiCo, I lead forecasting platforms across Commerce, Finance, and Supply Chain; at State Street, I led AML and sanctions modernization from an on-premises data lake to AWS Databricks; and at Nike, I guided global commerce and consumer analytics platforms serving 5,000+ users and 350M+ members. Earlier in my career with Sutter Health, Tata Consultancy Services, Cognizant Technology Solutions, and Sukraa Software Solutions, I delivered ETL, data integration, reporting, data warehousing, and Mainframe solutions for clients including Union Bank, Citi, Bank of America, and Anthem Wellpoint.";

export default function Home() {
  return <main>
    <div className="nav-bar"><nav className="nav shell"><a className="wordmark" href="#top">MS<span>.</span></a><div className="nav-links"><Link href="/skills">Skills</Link><a href="#experience">Experience</a><a href="#credentials">Credentials</a><a className="nav-cta" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></div></nav></div>

    <section id="top" className="hero shell">
      <div className="eyebrow"><span className="pulse" /> EXPERT ENGINEER · TECHNICAL LEADERSHIP</div>
      <h1>{profile.name}</h1>
      <p className="role-line">Data<i>·</i>AI<i>·</i>Cloud<i>·</i>Architecture<i>·</i>Platform</p>
      <p className="intro">I&apos;m an expert engineer and hands-on technical leader building enterprise data platforms, data warehouses, intelligent systems, and cloud architectures that scale — with deep experience across AI/ML, GenAI enablement, and Mainframe modernization.</p>
      <div className="hero-actions">
        <Link className="btn btn-primary" href="/experience">Explore Experience <span>→</span></Link>
        <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a>
        <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a>
      </div>
    </section>

    <section className="section shell">
      <div className="section-head" data-reveal>
        <span className="section-label">HIGHLIGHTS</span>
        <h2>Impact at scale.</h2>
        <p>A high-level view of the scale, savings, and reliability behind two decades of enterprise engineering.</p>
      </div>
      <div className="impact-grid">{impact.map((item, index) => <div className="impact" key={item.value} data-reveal style={{ transitionDelay: `${index * 80}ms` }}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
    </section>

    <section id="skills" className="section shell">
      <div className="section-head" data-reveal>
        <span className="section-label">SKILLSETS</span>
        <h2>What I work with.</h2>
        <p>A broad, hands-on stack spanning data engineering, cloud, AI, and legacy systems — drawn from my resume and LinkedIn.</p>
      </div>
      <div className="skill-pills" data-reveal>{skillCategories.map((label) => <span key={label}>{label}</span>)}</div>
      <Link className="experience-link" href="/skills">Explore full skillset <span>→</span></Link>
      <div className="marquee-block" data-reveal>
        <div className="marquee-label">TOOLS &amp; PLATFORMS</div>
        <LogoMarquee items={techLogos} />
      </div>
    </section>

    <section id="experience" className="section shell">
      <div className="section-head" data-reveal>
        <span className="section-label">EXPERIENCE</span>
        <h2>A career in systems thinking.</h2>
        <p>A concise view of the employers, clients, and technical domains that shaped my practice.</p>
      </div>
      <p className="experience-summary" data-reveal>{experienceSummary}</p>
      <Link className="experience-link" href="/experience">Explore detailed experience <span>→</span></Link>
      <div className="marquee-block" data-reveal>
        <div className="marquee-label">EMPLOYERS · CLIENTS · CERTIFICATIONS</div>
        <LogoMarquee items={associations} reverse />
      </div>
    </section>

    <section id="credentials" className="section shell">
      <div className="section-head" data-reveal>
        <span className="section-label">CREDENTIALS</span>
        <h2>Always learning. Always applying.</h2>
        <p>Formal study and continuous certification keep the work practical, current, and ready for what comes next.</p>
      </div>

      <div className="timeline-group" data-reveal>
        <h3 className="timeline-heading">Education</h3>
        <div className="timeline">{education.map((item, index) => <div className="timeline-item" key={item.title} data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
          <div className={`timeline-node${item.accent ? " accent" : ""}`}><span>{item.monogram}</span></div>
          <div className="timeline-body">
            <h4>{item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title} <span aria-hidden="true">↗</span></a> : item.title}</h4>
            <p className="timeline-meta">{item.org} · {item.period}</p>
          </div>
        </div>)}</div>
      </div>

      <div className="timeline-group" data-reveal>
        <h3 className="timeline-heading">Certifications</h3>
        <div className="timeline">{certifications.map((item, index) => <div className="timeline-item" key={item.name} data-reveal style={{ transitionDelay: `${index * 40}ms` }}>
          <div className="timeline-node">{item.logo ? <Image src={item.logo} alt="" width={40} height={28} unoptimized /> : <span>{item.initials}</span>}</div>
          <div className="timeline-body">
            <h4><a href={linkedinCertifications} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.name} on LinkedIn`}>{item.name} <span aria-hidden="true">↗</span></a></h4>
          </div>
        </div>)}</div>
      </div>
    </section>

    <section className="section shell closing">
      <div data-reveal>
        <span className="section-label">LET&apos;S CONNECT</span>
        <h2>Good systems make room for better ideas.</h2>
        <p>Open to conversations on data platforms, Lakehouse architecture, and applied AI.</p>
        <div className="closing-actions">
          <a className="btn btn-primary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a>
        </div>
      </div>
    </section>

    <footer className="footer shell"><span>© 2026 {profile.name.toUpperCase()}</span><div><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></div></footer>
  </main>;
}
