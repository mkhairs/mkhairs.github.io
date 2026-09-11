import type { CSSProperties } from 'react';

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
}

const SPOTLIGHT_R = 260;

export function RevealLayer({ image, cursorX, cursorY }: RevealLayerProps) {
  const mask = `radial-gradient(circle ${SPOTLIGHT_R}px at ${cursorX}px ${cursorY}px, #fff 0%, #fff 40%, rgba(255,255,255,.75) 60%, rgba(255,255,255,.4) 75%, rgba(255,255,255,.12) 88%, transparent 100%)`;
  const style: CSSProperties = {
    backgroundImage: `url("${image}")`,
    maskImage: mask,
    WebkitMaskImage: mask,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%',
  };
  return <div className="hero-reveal-layer" style={style} aria-hidden="true" />;
}
