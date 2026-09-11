import { ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
export function Footer() {
  return <footer className="site-footer section-shell"><div><a className="brand-link" href="#hero"><BrandLogo showSubtitle /></a><p>© {new Date().getFullYear()} Muhammad Khair Syawaludin.</p></div><p className="footer-location">Mataram, West Nusa Tenggara · Indonesia</p><a className="back-top" href="#hero">Back to top<ArrowUp size={16} /></a></footer>;
}
