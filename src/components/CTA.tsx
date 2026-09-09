import React, { useState } from 'react';
import { Mail, MessageCircle, Check, Copy } from 'lucide-react';

export const CTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mkhairs10@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="relative bg-slate-50/70 dark:bg-[#050505] text-slate-900 dark:text-white px-5 sm:px-8 md:px-14 py-20 sm:py-28 border-t border-slate-200 dark:border-white/10 transition-colors duration-300 overflow-hidden"
    >
      {/* Liquid Glow Centerpiece */}
      <div className="liquid-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e8702a]/15" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Glassmorphism CTA Box (Liquid Glass) */}
        <div className="relative overflow-hidden rounded-[2.8rem] liquid-glass px-6 sm:px-10 md:px-14 py-14 sm:py-16 text-center shadow-2xl reveal">
          
          {/* Subtle Orange Radial Glow */}
          <div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,112,42,0.18),transparent_70%)] pointer-events-none" 
          />

          {/* Small Label */}
          <span className="relative z-10 text-xs uppercase tracking-[0.3em] text-[#e8702a] font-semibold">
            Let's Collaborate
          </span>

          {/* Heading */}
          <h2 className="relative z-10 mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.06em] leading-[1.08] text-slate-900 dark:text-white">
            Ready to deploy <span className="font-playfair italic font-normal">rigorous</span> AI models.
          </h2>

          {/* Paragraph */}
          <p className="relative z-10 mt-6 text-slate-600 dark:text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Currently open to full-time Data Analyst, Data Science & AI/ML positions, research opportunities, and quantitative modeling initiatives.
          </p>

          {/* Button & Link Group */}
          <div className="relative z-10 mt-9 flex flex-wrap items-center justify-center gap-3">
            
            {/* Primary Email Action */}
            <a 
              href="mailto:mkhairs10@gmail.com"
              className="inline-flex items-center gap-2 bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold px-6 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-[#e8702a]/35"
            >
              <Mail size={16} />
              <span>Email: mkhairs10@gmail.com</span>
            </a>

            {/* Copy Email Button */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 liquid-nav text-slate-800 dark:text-white text-xs font-semibold px-5 py-3 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              {copied ? <Check size={16} className="text-emerald-500 dark:text-emerald-400" /> : <Copy size={16} />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
            </button>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/6281809426000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 liquid-nav hover:bg-emerald-600 hover:text-white text-slate-800 dark:text-white text-xs font-semibold px-5 py-3 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/muhammad-khair-syawaludin-a31739279/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 liquid-nav hover:bg-blue-600 hover:text-white text-slate-800 dark:text-white text-xs font-semibold px-5 py-3 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/mkhairs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 liquid-nav hover:bg-slate-900 hover:text-white dark:hover:bg-white/30 text-slate-800 dark:text-white text-xs font-semibold px-5 py-3 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
