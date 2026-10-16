import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useModal } from '../hooks/useModal';
import { useSlidingPill } from '../hooks/useSlidingPill';
import { BrandLogo } from './BrandLogo';

const links = [['hero', 'Introduction'], ['about', 'Overview'], ['projects', 'Projects'], ['thesis', 'Thesis'], ['experience', 'Experience'], ['publications', 'Publications'], ['skills', 'Skills'], ['contact', 'Contact']] as const;

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const dialog = useModal(menuOpen);
  const navActive = active === 'hero' ? 'about' : active;
  const { containerRef, style: pillStyle } = useSlidingPill(navActive);
  useEffect(() => {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const observer = new ResizeObserver(() => document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`));
    observer.observe(header);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = (document.querySelector('.site-header')?.getBoundingClientRect().height ?? 80) + 80;
      let current = 'hero';
      for (const [id] of links) if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= offset) current = id;
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = 'contact';
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, []);
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1170px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);
  return <header className="site-header">
    <div className="nav-shell">
      <a className="brand-link" href="#hero" aria-label="Muhammad Khair Syawaludin — back to introduction"><BrandLogo showSubtitle /></a>
      <nav className="desktop-nav" aria-label="Main navigation"><div className="nav-capsule liquid-nav" ref={containerRef}><span className="sliding-pill" style={pillStyle} aria-hidden="true" />{links.slice(1, 7).map(([id, label]) => <a key={id} href={`#${id}`} aria-current={navActive === id ? 'location' : undefined}>{label}</a>)}</div></nav>
      <div className="nav-actions">
        <button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}</button>
        <a className="nav-contact button primary" href="mailto:mkhairs10@gmail.com">Hire Me <ArrowUpRight size={16} /></a>
        <button className="icon-button menu-toggle" onClick={() => setMenuOpen(true)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label="Open navigation menu"><Menu size={22} /></button>
      </div>
    </div>
    <dialog id="mobile-navigation" ref={dialog} className="mobile-dialog" aria-labelledby="menu-title" onCancel={(e) => { e.preventDefault(); setMenuOpen(false); }}>
      <div className="mobile-dialog-heading"><h2 id="menu-title" className="eyebrow">EXPLORE</h2><button autoFocus className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Close navigation menu"><X /></button></div>
      <nav aria-label="Mobile navigation">{links.map(([id, label], i) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}><span className="mono">0{i + 1}</span><span>{label}</span><ArrowUpRight size={20} /></a>)}</nav>
      <BrandLogo showSubtitle />
    </dialog>
  </header>;
}
