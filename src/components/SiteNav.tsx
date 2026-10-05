"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { profile } from "@/content/profile";
import Logo from "@/components/Logo";

const links = [
  { href: "/", label: "Home", note: "Overview & highlights" },
  { href: "/about", label: "About", note: "Who I am and how I lead" },
  { href: "/experience", label: "Experience", note: "Career timeline" },
  { href: "/skills", label: "Skills", note: "Platforms, tools and practices" },
  { href: "/certifications", label: "Certifications", note: "Verified credentials" },
  { href: "/projects", label: "Projects", note: "Selected work" },
  { href: "/contact", label: "Contact", note: "Get in touch or book a coffee chat" }
] as const;

const sections = [
  { href: "/#insights", label: "Insights" },
  { href: "/#education", label: "Education" },
  { href: "/#reading", label: "Reading" }
] as const;

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="site-nav">
      <div className="shell site-nav-inner">
        <Link className="wordmark" href="/" aria-label={`${profile.name} — home`}><Logo /></Link>
        <nav className="site-nav-links" aria-label="Primary">
          {links.map((l) => <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : undefined}>{l.label}</Link>)}
        </nav>
        <button className="menu-btn" aria-expanded={open} aria-controls="site-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((v) => !v)}>
          <span /><span />
        </button>
      </div>
      {open && createPortal(
        <div className="drawer-root">
          <div className="drawer-backdrop" onClick={close} />
          <aside id="site-menu" className="drawer" role="dialog" aria-modal="true" aria-label="Site navigation">
            <div className="drawer-head">
              <Link href="/" onClick={close} className="drawer-id"><Logo size={36} /><span><strong>{profile.name}</strong><small>Principal Engineer · Data &amp; AI</small></span></Link>
              <button ref={closeRef} className="drawer-close" onClick={close} aria-label="Close navigation"><span /><span /></button>
            </div>

            <nav className="drawer-nav" aria-label="Pages">
              {links.map((l, i) => (
                <Link key={l.href} href={l.href} onClick={close} className={pathname === l.href ? "is-active" : undefined} style={{ animationDelay: `${60 + i * 40}ms` }}>
                  <span className="drawer-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="drawer-text"><strong>{l.label}</strong><small>{l.note}</small></span>
                  <span className="drawer-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </nav>

            <div className="drawer-jump">
              <span className="section-label">Jump to</span>
              <div>{sections.map((l) => <Link key={l.href} href={l.href} onClick={close}>{l.label}</Link>)}</div>
            </div>

            <div className="drawer-cta">
              <strong>Let&apos;s talk data platforms</strong>
              <p>30 minutes on architecture, modernization or applied AI.</p>
              <Link className="btn btn-primary" href="/contact#coffee-chat" onClick={close}>Book a coffee chat <span>→</span></Link>
              <div className="drawer-social">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" onClick={close}>LinkedIn ↗</a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" onClick={close}>GitHub ↗</a>
              </div>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </header>
  );
}
