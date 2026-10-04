export default function SectionHead({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <div className="section-head" data-reveal>
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}
