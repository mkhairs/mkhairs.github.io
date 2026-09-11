import type { ReactNode } from 'react';
export function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading reveal"><div><p className="eyebrow"><span className="section-number">{number}</span>{label}</p><h2>{title.slice(0, title.lastIndexOf(' ') + 1)}<em className="font-playfair">{title.slice(title.lastIndexOf(' ') + 1)}</em></h2></div>{children && <div className="section-intro">{children}</div>}</div>;
}
