import { trackRecord } from "@/content/experience";

export default function TrackRecord() {
  return <ul className="track">{trackRecord.map((t) => <li key={t.org} data-reveal><strong>{t.org}</strong><span>{t.line}</span></li>)}</ul>;
}
