"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" }
] as const;

const sections = [
  { href: "/#experience", label: "Experience" },
  { href: "/#insights", label: "Insights" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#reading", label: "Reading" },
  { href: "/#connect", label: "Let's connect" }
] as const;

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="site-nav">
      <div className="shell site-nav-inner">
        <Link className="wordmark" href="/">{profile.initials}<span>.</span></Link>
        <nav className="site-nav-links" aria-label="Primary">
          {links.slice(1).map((l) => <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : undefined}>{l.label}</Link>)}
        </nav>
        <button className="menu-btn" aria-expanded={open} aria-controls="site-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((v) => !v)}>
          <span /><span />
        </button>
      </div>
      {open && (
        <div id="site-menu" className="nav-overlay" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="shell nav-overlay-inner">
            <div className="nav-overlay-col">
              <span className="section-label">Pages</span>
              {links.map((l, i) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ animationDelay: `${i * 50}ms` }}>{l.label}</Link>)}
            </div>
            <div className="nav-overlay-col small">
              <span className="section-label">On the homepage</span>
              {sections.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
              <span className="section-label" style={{ marginTop: 28 }}>Elsewhere</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>LinkedIn ↗</a>
              <a onClick={() => setOpen(false)} href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
