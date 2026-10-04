import Link from "next/link";

export default function NotFound() {
  return <main className="page">
    <header className="page-hero shell">
      <span className="section-label">404</span>
      <h1>This page doesn&apos;t exist.</h1>
      <p>The link may be out of date, or the address mistyped. Everything else is still where you left it.</p>
      <div className="hero-actions"><Link className="btn btn-primary" href="/">Back home <span>→</span></Link><Link className="btn btn-ghost" href="/projects">View projects</Link></div>
    </header>
  </main>;
}
