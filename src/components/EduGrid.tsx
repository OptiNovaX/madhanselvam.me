import { education } from "@/content/experience";

export default function EduGrid() {
  return <div className="edu-grid">{education.map((e) => <div className="edu" key={e.degree} data-reveal>
    <h3>{e.href ? <a href={e.href} target="_blank" rel="noopener noreferrer">{e.degree} ↗</a> : e.degree}</h3>
    {e.field && <p className="edu-field">{e.field}</p>}
    <p>{e.school || <span className="ph-inline">Placeholder — institution name</span>}{!e.location && e.years ? ` · ${e.years}` : ""}</p>
    {e.location && <p>{e.location}{e.years ? ` · ${e.years}` : ""}</p>}
    {e.courses && <ul className="edu-courses">{e.courses.map((c) => <li key={c.title}><a href={c.href} target="_blank" rel="noopener noreferrer">{c.title} ↗</a><span>{c.year}</span></li>)}</ul>}
  </div>)}</div>;
}
