// Visible "to be filled in" block. Every instance names the file/field that removes it.
export default function Placeholder({ title, hint, compact = false }: { title: string; hint: string; compact?: boolean }) {
  return (
    <div className={`placeholder${compact ? " compact" : ""}`}>
      <span className="placeholder-tag">Placeholder</span>
      <strong>{title}</strong>
      <p>{hint}</p>
    </div>
  );
}
