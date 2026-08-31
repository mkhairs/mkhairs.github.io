import React from 'react';
import { ShieldCheck, BookOpen, ExternalLink } from 'lucide-react';

export const Publications: React.FC = () => {
  return (
    <section 
      id="publications" 
      className="relative bg-slate-50/70 dark:bg-[#050505] text-slate-900 dark:text-white px-5 sm:px-8 md:px-14 py-20 sm:py-28 md:py-32 border-t border-slate-200 dark:border-white/10 transition-colors duration-300 overflow-hidden"
    >
      {/* Liquid Glow */}
      <div className="liquid-glow top-1/3 left-10 w-[450px] h-[450px] bg-[#e8702a]/15" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl flex flex-col items-start gap-4 mb-12 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-[#e8702a] font-semibold">
            Scholarly Work & IP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.06em] leading-tight text-slate-900 dark:text-white">
            Intellectual property & <span className="font-playfair italic font-normal">peer-reviewed</span> articles.
          </h2>
          <p className="text-slate-600 dark:text-white/70 text-base leading-relaxed">
            Registered legal copyrights and research papers bridging computer algorithms, graph theory, and education.
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          
          {/* Card 1: Copyright (Liquid Glass) */}
          <div className="group rounded-[2.2rem] liquid-glass p-7 sm:p-9 hover:border-[#e8702a]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl reveal delay-100">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <ShieldCheck size={14} />
                  <span>Hak Cipta / Registered Copyright</span>
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-white/50">Reg. No. 000903055 &bull; 2025</span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-[#e8702a] transition-colors">
                Aplikasi Perhitungan Indeks Hyper-Wiener dan Indeks Padmakar Ivan dari Graf Koprima Grup Dihedral Menggunakan Python
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-white/65 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Syawaludin, M. K.</strong> &amp; Wardhana, I. G. A. W. &bull; Directorate General of Intellectual Property, Ministry of Law and Human Rights of the Republic of Indonesia.
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-mono shadow-sm">
                <ShieldCheck size={14} />
                <span>Legally Certified</span>
              </span>
            </div>
          </div>

          {/* Card 2: Journal Publication (Liquid Glass) */}
          <div className="group rounded-[2.2rem] liquid-glass p-7 sm:p-9 hover:border-[#e8702a]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl reveal delay-200">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                  <BookOpen size={14} />
                  <span>Journal Publication</span>
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-white/50">SINONIM &bull; Vol. 2, No. 1, 2025</span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-[#e8702a] transition-colors">
                Pengenalan Algoritma Dengan Menggunakan Aplikasi Scratch Jr Di SMAN 1 Pemenang Lombok Utara
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-white/65 leading-relaxed">
                Abdullah, U., <strong className="text-slate-900 dark:text-white">Syawaludin, M. K.</strong>, Hisan, K., et al. &bull; Jurnal Pengabdian Masyarakat FMIPA UNRAM
              </p>
            </div>

            <div className="shrink-0">
              <a 
                href="https://doi.org/10.29303/sinonim.v2i1.7808" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white/10 hover:bg-[#e8702a] text-white text-xs font-semibold transition-all duration-200 border border-slate-700 dark:border-white/15 hover:border-transparent shadow-md"
              >
                <span>Read DOI</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
