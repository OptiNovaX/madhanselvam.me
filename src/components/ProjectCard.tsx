import type { CSSProperties } from "react";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project: p, style }: { project: Project; style?: CSSProperties }) {
  const placeholder = !p.description;
  const body = <>
    <div className="project-visual" aria-hidden="true"><span>{placeholder ? "Image placeholder" : p.category}</span></div>
    <div className="project-body">
      <span className="project-cat">{p.category}</span>
      <h3>{p.title}</h3>
      <p>{p.description || "Description to follow."}</p>
      {p.stack.length > 0 && <div className="tag-row">{p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}</div>}
    </div>
  </>;
  const cls = `project-card${placeholder ? " is-placeholder" : ""}`;
  return p.href
    ? <a className={cls} href={p.href} target="_blank" rel="noopener noreferrer" data-reveal style={style}>{body}</a>
    : <article className={cls} data-reveal style={style}>{body}</article>;
}
