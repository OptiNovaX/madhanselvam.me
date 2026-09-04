const projects = [
  { number: "01", title: "Data Engineering Copilot", description: "AI-assisted workflows for building, operating, and explaining reliable data pipelines.", repo: "data-engineering-copilot" },
  { number: "02", title: "Spark Performance Lab", description: "Measured experiments that turn Spark tuning from folklore into repeatable engineering.", repo: "spark-performance-lab" },
  { number: "03", title: "Modern Lakehouse Patterns", description: "Open, governed architecture patterns for analytics, machine learning, and real-time data.", repo: "modern-lakehouse-patterns" }
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell"><a className="wordmark" href="#top">MS<span>.</span></a><div className="nav-links"><a href="#work">Work</a><a href="#lab">Lab</a><a href="#about">About</a><a className="nav-cta" href="mailto:hello@madhanselvam.tech">Let&apos;s talk <span>↗</span></a></div></nav>
      <section id="top" className="hero shell"><div className="eyebrow"><span className="pulse" /> ENGINEER / BUILDER / EXPLORER</div><h1>Systems that turn<br /><em>data into momentum.</em></h1><div className="hero-bottom"><p className="intro">I&apos;m Madhan Selvam, an expert engineer building data platforms, intelligent systems, and cloud architectures that scale.</p><a className="circle-link" href="#work" aria-label="Scroll to selected work">↓</a></div></section>
      <section className="signal"><div className="shell signal-inner"><span>THE THROUGHLINE</span><strong>Data</strong><i>→</i><strong>Platforms</strong><i>→</i><strong>Intelligence</strong><i>→</i><strong>AI</strong></div></section>
      <section id="work" className="work shell"><div className="section-head"><span className="section-label">SELECTED WORK / 01</span><h2>Building for the<br /><em>next layer.</em></h2><p>Practical systems, open blueprints, and experiments from the intersection of data engineering and AI.</p></div><div className="project-list">{projects.map((project) => <article className="project" key={project.repo}><span className="project-number">{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p></div><a href={`https://github.com/OptiNovaX/${project.repo}`} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>↗</a></article>)}</div></section>
      <section id="lab" className="lab"><div className="shell lab-grid"><div><span className="section-label">ENGINEERING LAB / 02</span><h2>Build.<br />Learn.<br /><em>Share.</em></h2></div><div className="lab-copy"><p>My lab is a public record of questions I&apos;m working through: how agents operate data platforms, how lakehouses stay governed at scale, and how architecture becomes a durable advantage.</p><a className="text-link" href="https://github.com/OptiNovaX" target="_blank" rel="noreferrer">Explore the GitHub lab <span>↗</span></a></div></div></section>
      <section id="about" className="about shell"><div><span className="section-label">A LITTLE CONTEXT / 03</span><h2>Curious by nature.<br /><em>Rigorous by practice.</em></h2></div><div className="about-copy"><p>My work spans Data Engineering, AI and GenAI, lakehouse architecture, cloud platforms, and agentic systems. I care about the useful middle: where ambitious ideas become reliable products.</p><a className="resume-link" href="/resume/madhan-selvam-resume.pdf">Download resume <span>↓</span></a></div></section>
      <footer className="footer shell"><span>© 2026 MADHAN SELVAM</span><div><a href="https://www.linkedin.com/in/madhanselvam/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/OptiNovaX" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
    </main>
  );
}
