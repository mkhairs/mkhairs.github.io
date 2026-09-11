import { useEffect, useRef, useState } from 'react';

const hidden = { x: -999, y: -999 };

export function useHeroReveal() {
  const heroRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState(hidden);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let visible = hero.getBoundingClientRect().bottom > 0;
    let pointer: { x: number; y: number } | null = null;
    let smooth: { x: number; y: number } | null = null;
    const stop = () => { cancelAnimationFrame(frame); frame = 0; };
    const reset = () => { stop(); pointer = null; smooth = null; setCursor(hidden); };
    const tick = () => {
      frame = 0;
      if (!pointer || !visible || document.hidden || motion.matches) return;
      const rect = hero.getBoundingClientRect();
      const target = { x: pointer.x - rect.left, y: pointer.y - rect.top };
      if (target.x < 0 || target.x > rect.width || target.y < 0 || target.y > rect.height) { reset(); return; }
      if (!smooth) smooth = target;
      const dx = target.x - smooth.x;
      const dy = target.y - smooth.y;
      if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2) {
        smooth = target; setCursor({ ...target }); return;
      }
      smooth = { x: smooth.x + dx * 0.1, y: smooth.y + dy * 0.1 };
      setCursor({ ...smooth });
      frame = requestAnimationFrame(tick);
    };
    const schedule = () => {
      if (!frame && pointer && visible && !document.hidden && !motion.matches) frame = requestAnimationFrame(tick);
    };
    const move = (event: PointerEvent) => {
      if (motion.matches || document.hidden || !visible) return;
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    };
    const releaseTouch = (event: PointerEvent) => { if (event.pointerType !== 'mouse') reset(); };
    const visibility = () => { if (document.hidden) reset(); };
    const motionChanged = () => { if (motion.matches) reset(); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) reset();
    });
    observer.observe(hero);
    hero.addEventListener('pointermove', move, { passive: true });
    hero.addEventListener('pointerdown', move, { passive: true });
    hero.addEventListener('pointerup', releaseTouch, { passive: true });
    hero.addEventListener('pointerleave', reset);
    hero.addEventListener('pointercancel', reset);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    document.addEventListener('visibilitychange', visibility);
    motion.addEventListener('change', motionChanged);
    return () => {
      stop(); observer.disconnect();
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerdown', move);
      hero.removeEventListener('pointerup', releaseTouch);
      hero.removeEventListener('pointerleave', reset);
      hero.removeEventListener('pointercancel', reset);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.removeEventListener('visibilitychange', visibility);
      motion.removeEventListener('change', motionChanged);
    };
  }, []);
  return { heroRef, cursor };
}
