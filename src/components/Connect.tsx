import { profile } from "@/content/profile";

export default function Connect() {
  return (
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
  );
}
