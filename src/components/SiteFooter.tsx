import Link from "next/link";
import { profile } from "@/content/profile";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
