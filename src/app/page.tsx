import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { roles, impact, insights, education } from "@/content/experience";
import { certifications } from "@/content/credentials";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { books, publications, posts } from "@/content/extras";
import { techLogos } from "@/content/techLogos";
import { LogoMarquee } from "@/components/LogoMarquee";
import Placeholder from "@/components/Placeholder";
import SectionHead from "@/components/SectionHead";
import ProjectCard from "@/components/ProjectCard";

const delay = (i: number, step = 70) => ({ transitionDelay: `${Math.min(i * step, 420)}ms` });

export default function Home() {
  return <main>
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> Principal Engineer · Technical Leader</div>
          <h1>{profile.name}</h1>
          <p className="role-line">{profile.tagline}</p>
          <p className="intro">20+ years designing and modernizing enterprise data platforms — Lakehouses, data warehouses and hybrid cloud — for PepsiCo, State Street and Nike. I turn business problems into reliable, governed, AI-ready data products, and I lead the engineers who build them.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/projects">View my projects <span>→</span></Link>
            {profile.coffeeChat
              ? <a className="btn btn-ghost" href={profile.coffeeChat} target="_blank" rel="noopener noreferrer">Schedule a coffee chat <span>↗</span></a>
              : <a className="btn btn-ghost" href="#connect" title="Placeholder: set profile.coffeeChat">Schedule a coffee chat <span className="ph-dot" /></a>}
          </div>
        </div>
        <div className="hero-photo" data-reveal>
          {profile.headshot
            ? <Image src={profile.headshot} alt={profile.name} width={320} height={320} priority />
            : <div className="photo-placeholder"><span>{profile.initials}</span><small>Placeholder — add a headshot<br />(profile.headshot)</small></div>}
        </div>
      </div>
    </section>

    <section className="section shell">
      <div className="impact-grid">{impact.map((item, i) => <div className="impact" key={item.label} data-reveal style={delay(i)}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
    </section>

    <section id="experience" className="section shell">
      <SectionHead label="Professional Experience" title="Work and background" intro="Two decades across retail, finance, healthcare and banking — from Mainframe ETL to cloud Lakehouses and AI-ready platforms." />
      <div className="exp-list">{roles.map((r, i) => <article className="exp-card" key={r.id} data-reveal style={delay(i)}>
        <div className={`exp-logo${Array.isArray(r.logo) ? " logo-stack" : ""}`}>{[r.logo].flat().map((src) => <Image key={src} src={src} alt={`${r.employer} logo`} width={56} height={34} unoptimized />)}</div>
        <div className="exp-body">
          <div className="exp-top"><h3>{r.role}</h3><span className="exp-years">{r.years}</span></div>
          <p className="exp-meta">{r.employer} · {r.location}</p>
          <p className="exp-summary">{r.summary}</p>
          <div className="tag-row">{r.stack.slice(0, 6).map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        </div>
      </article>)}</div>
      <Link className="text-link" href="/about">Read the full experience <span>→</span></Link>
    </section>

    <section id="insights" className="section band">
      <div className="shell">
        <SectionHead label="Insights" title="What twenty years of platforms taught me" intro="The patterns that repeat across every role — each backed by outcomes, not adjectives." />
        <div className="insight-grid">{insights.map((ins, i) => <div className="insight" key={ins.title} data-reveal style={delay(i)}>
          <span className="insight-num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{ins.title}</h3>
          <p>{ins.body}</p>
          <p className="insight-proof">{ins.proof}</p>
        </div>)}</div>
      </div>
    </section>

    <section id="skills" className="section shell">
      <SectionHead label="What I work with" title="Skills that fuel the work" intro="A broad, hands-on stack spanning data engineering, cloud, AI and legacy modernization." />
      <div className="pill-row" data-reveal>{skillGroups.map((g) => <span className="pill" key={g.label}>{g.label}</span>)}</div>
      <div className="marquee-block" data-reveal><LogoMarquee items={techLogos} /></div>
      <Link className="text-link" href="/skills">Explore the full toolkit <span>→</span></Link>
    </section>

    <section id="projects" className="section shell">
      <SectionHead label="Selected work" title="Data platforms & applied AI" intro="Selected work is written up on the projects page." />
      <div className="project-grid">{projects.filter((p) => p.featured).map((p, i) => <ProjectCard key={p.slug} project={p} style={delay(i)} />)}</div>
      <Link className="text-link" href="/projects">More projects <span>→</span></Link>
    </section>

    <section id="certifications" className="section shell">
      <SectionHead label="Certifications" title="Always learning, always applying" />
      <div className="cert-grid">{certifications.map((c, i) => {
        const inner = <>
          <div className="cert-logo">{c.logo ? <Image src={c.logo} alt="" width={36} height={24} unoptimized /> : <span>{c.issuer[0]}</span>}</div>
          <div><h3>{c.title}</h3><p>{c.issuer}{c.year ? ` · ${c.year}` : ""}{c.meta ? ` · ${c.meta}` : ""}</p></div>
        </>;
        return c.href
          ? <a className="cert" key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" data-reveal style={delay(i, 40)}>{inner}</a>
          : <div className="cert" key={c.title} data-reveal style={delay(i, 40)}>{inner}</div>;
      })}</div>
    </section>

    <section id="education" className="section shell">
      <SectionHead label="Education" title="Foundations" />
      <div className="edu-grid">{education.map((e) => <div className="edu" key={e.degree} data-reveal>
        <h3>{e.degree}</h3>
        <p>{e.href ? <a href={e.href} target="_blank" rel="noopener noreferrer">{e.school}</a> : e.school || <span className="ph-inline">Placeholder — institution name</span>}{e.years ? ` · ${e.years}` : ""}</p>
      </div>)}</div>
    </section>

    <section id="reading" className="section shell">
      <SectionHead label="Reading" title="Books that shape my thinking" />
      {books.length
        ? <div className="book-grid">{books.map((b) => <blockquote className="book" key={b.title} data-reveal><p>“{b.quote}”</p><footer><strong>{b.title}</strong> — {b.author}</footer></blockquote>)}</div>
        : <div className="ph-grid">{[1, 2, 3].map((n) => <Placeholder key={n} compact title="Book title — Author" hint="A favourite quote and one line on why it matters. Add to books in src/content/extras.ts." />)}</div>}
    </section>

    <section id="publications" className="section shell two-col">
      <div>
        <SectionHead label="Publications" title="Talks & papers" />
        {publications.length
          ? <ul className="link-list">{publications.map((p) => <li key={p.title}><a href={p.href}>{p.title}</a><span>{p.venue} · {p.year}</span></li>)}</ul>
          : <Placeholder compact title="Talks, papers or patents" hint="Add to publications in src/content/extras.ts." />}
      </div>
      <div id="blogs">
        <SectionHead label="Blogs" title="Writing" />
        {posts.length
          ? <ul className="link-list">{posts.map((p) => <li key={p.title}><a href={p.href}>{p.title}</a><span>{p.date}</span></li>)}</ul>
          : <Placeholder compact title="Articles & posts" hint="Link Medium / LinkedIn articles via posts in src/content/extras.ts." />}
      </div>
    </section>

    <section id="connect" className="section shell connect" data-reveal>
      <span className="section-label">Let&apos;s connect</span>
      <h2>Good systems make room for better ideas.</h2>
      <p>Open to conversations on data platforms, Lakehouse architecture, platform modernization and applied AI.</p>
      <div className="hero-actions center">
        <a className="btn btn-primary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a>
        <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a>
        {profile.email ? <a className="btn btn-ghost" href={`mailto:${profile.email}`}>Email <span>↗</span></a> : <span className="btn btn-ghost is-placeholder" title="Placeholder: set profile.email">Email — placeholder</span>}
        {profile.resume ? <a className="btn btn-ghost" href={profile.resume}>Résumé <span>↓</span></a> : <span className="btn btn-ghost is-placeholder" title="Placeholder: set profile.resume">Résumé — placeholder</span>}
      </div>
    </section>
  </main>;
}
