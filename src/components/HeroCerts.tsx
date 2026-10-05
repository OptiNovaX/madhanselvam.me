import Image from "next/image";
import Link from "next/link";
import { certifications } from "@/content/credentials";

// Compact, newest-first certification card shown beside the name in the homepage hero.
export default function HeroCerts({ limit = 6 }: { limit?: number }) {
  return <aside className="hero-certs" aria-label="Certifications">
    <div className="hero-certs-head"><span className="section-label">Certified</span><span className="hero-certs-count">{certifications.length}</span></div>
    <ul>{certifications.slice(0, limit).map((c) => {
      const row = <>
        <span className="hero-certs-logo">{c.logo && <Image src={c.logo} alt="" width={18} height={18} unoptimized />}</span>
        <strong>{c.short}</strong>
        <small>{c.year}</small>
      </>;
      return <li key={c.title} title={c.title}>{c.href ? <a href={c.href} target="_blank" rel="noopener noreferrer">{row}</a> : <div>{row}</div>}</li>;
    })}</ul>
    <Link className="text-link" href="/certifications">All {certifications.length} certifications <span>→</span></Link>
  </aside>;
}
