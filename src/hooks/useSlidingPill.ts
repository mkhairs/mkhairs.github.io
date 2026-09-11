import { useLayoutEffect, useRef, useState } from 'react';

export function useSlidingPill(activeKey: string) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let alive = true;
    const measure = () => {
      const active = container.querySelector<HTMLElement>('[aria-current="location"], [aria-pressed="true"]');
      if (active && container.getClientRects().length) setStyle({
        left: active.offsetLeft, top: active.offsetTop,
        width: active.offsetWidth, height: active.offsetHeight, opacity: 1,
      });
      else setStyle(previous => ({ ...previous, opacity: 0 }));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    container.querySelectorAll('a, button').forEach(element => observer.observe(element));
    document.fonts.ready.then(() => { if (alive) measure(); });
    return () => { alive = false; observer.disconnect(); };
  }, [activeKey]);
  return { containerRef, style };
}
