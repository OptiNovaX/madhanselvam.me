import type { ReactNode } from "react";

export default function SectionHead({ label, title, intro }: { label: string; title: ReactNode; intro?: string }) {
  return (
    <div className="section-head" data-reveal>
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}
