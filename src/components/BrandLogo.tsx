interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function BrandLogo({ className = '', showSubtitle = false }: BrandLogoProps) {
  return (
    <div className={`brand-logo ${className}`}>
      <svg width="32" height="18" viewBox="0 0 28 16" fill="none" aria-hidden="true">
        <path d="M 8 2.5 C 4.41 2.5 1.5 5.41 1.5 8 C 1.5 10.59 4.41 13.5 8 13.5 C 12.2 13.5 15.8 2.5 20 2.5 C 23.59 2.5 26.5 5.41 26.5 8 C 26.5 10.59 23.59 13.5 20 13.5 C 15.8 13.5 12.2 2.5 8 2.5 Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="brand-text">
        <span className="brand-name">Muhammad Khair Syawaludin</span>
        {showSubtitle && <span className="brand-subtitle">Data Science · Analytics</span>}
      </div>
    </div>
  );
}
