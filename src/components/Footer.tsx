import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400 dark:text-white/55 px-5 sm:px-8 md:px-14 py-12 border-t border-slate-800 dark:border-white/10 relative z-40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800 dark:border-white/10">
          
          {/* Left Side: Brand Logo and Description */}
          <div className="flex flex-col items-start gap-4 max-w-md">
            <a href="#hero">
              <BrandLogo showSubtitle={true} />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-white/55 leading-relaxed">
              Mathematics graduate & Data Analyst / Data Scientist specializing in statistical modeling, machine learning pipelines, time-series forecasting, and quantitative analytics.
            </p>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-mono">
            <a 
              href="https://github.com/mkhairs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 dark:text-white/55 hover:text-[#e8702a] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-khair-syawaludin-a31739279/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 dark:text-white/55 hover:text-[#e8702a] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://wa.me/6281809426000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 dark:text-white/55 hover:text-[#e8702a] transition-colors flex items-center gap-1.5"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
            <a 
              href="mailto:mkhairs10@gmail.com" 
              className="text-slate-400 dark:text-white/55 hover:text-[#e8702a] transition-colors flex items-center gap-1.5"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-center sm:text-left">
          <p className="text-xs text-slate-400 dark:text-white/40">
            &copy; 2026 Muhammad Khair Syawaludin.
          </p>
          <p className="text-xs font-mono text-slate-500 dark:text-white/30">
            Mataram, West Nusa Tenggara &bull; Indonesia
          </p>
        </div>

      </div>
    </footer>
  );
};
