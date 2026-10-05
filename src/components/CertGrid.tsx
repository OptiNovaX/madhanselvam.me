import Image from "next/image";
import type { CSSProperties } from "react";
import { certifications } from "@/content/credentials";

export const certCount = certifications.length;

const delay = (i: number): CSSProperties => ({ transitionDelay: `${Math.min(i * 40, 180)}ms` });

export default function CertGrid({ limit }: { limit?: number }) {
  return <div className="cert-grid">{certifications.slice(0, limit).map((c, i) => {
    const inner = <>
      <div className="cert-logo">{c.logo ? <Image src={c.logo} alt="" width={36} height={24} unoptimized /> : <span>{c.issuer[0]}</span>}</div>
      <div><h3>{c.title}</h3><p>{c.issuer}{c.year ? ` · ${c.year}` : ""}{c.meta ? ` · ${c.meta}` : ""}</p></div>
    </>;
    return c.href
      ? <a className="cert" key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" data-reveal style={delay(i)}>{inner}</a>
      : <div className="cert" key={c.title} data-reveal style={delay(i)}>{inner}</div>;
  })}</div>;
}
