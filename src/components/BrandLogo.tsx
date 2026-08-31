import React from 'react';

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  showSubtitle = false 
}) => {
  return (
    <div className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
      
      {/* Pure Standalone Minimalist Infinity Loop (Enlarged) */}
      <div className="flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
        <svg 
          width="32" 
          height="18" 
          viewBox="0 0 28 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-slate-900 dark:text-white group-hover:text-[#e8702a] transition-colors duration-300"
        >
          {/* Continuous Precision Mathematical Infinity Curve */}
          <path 
            d="M 8 2.5 C 4.41 2.5 1.5 5.41 1.5 8 C 1.5 10.59 4.41 13.5 8 13.5 C 12.2 13.5 15.8 2.5 20 2.5 C 23.59 2.5 26.5 5.41 26.5 8 C 26.5 10.59 23.59 13.5 20 13.5 C 15.8 13.5 12.2 2.5 8 2.5 Z" 
            stroke="currentColor" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      {/* Modern Clean Typography (Enlarged) */}
      <div className="flex flex-col text-left">
        <span className="text-slate-900 dark:text-white text-base sm:text-lg font-bold tracking-tight group-hover:text-[#e8702a] transition-colors whitespace-nowrap">
          Muhammad Khair Syawaludin
        </span>
        {showSubtitle && (
          <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-white/50 font-mono uppercase tracking-[0.22em] mt-0.5">
            AI Engineer &bull; Math
          </span>
        )}
      </div>

    </div>
  );
};
