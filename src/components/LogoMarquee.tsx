import Image from "next/image";

export function LogoMarquee({ items, reverse = false }: { items: { name: string; href: string; logo: string }[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className={`marquee-track${reverse ? " reverse" : ""}`}>
        {doubled.map((item, index) => (
          <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name}`} key={`${item.name}-${index}`}>
            <Image src={item.logo} alt={`${item.name} logo`} width={110} height={26} unoptimized />
          </a>
        ))}
      </div>
    </div>
  );
}
