import React from 'react';
import { Award, TrendingUp, Layers, Sliders } from 'lucide-react';

export const Thesis: React.FC = () => {
  return (
    <section 
      id="thesis" 
      className="relative bg-slate-50/70 dark:bg-[#050505] text-slate-900 dark:text-white px-5 sm:px-8 md:px-14 py-20 sm:py-28 md:py-32 border-t border-slate-200 dark:border-white/10 transition-colors duration-300 overflow-hidden"
    >
      {/* Liquid Ambient Backlight */}
      <div className="liquid-glow -bottom-20 right-10 w-[550px] h-[550px] bg-[#e8702a]/15 dark:bg-[#e8702a]/20" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col items-start gap-4 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#e8702a]/15 text-[#e8702a] border border-[#e8702a]/30 shadow-sm backdrop-blur-md">
            <Award size={14} />
            <span>Featured Undergraduate Thesis Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.06em] leading-tight text-slate-900 dark:text-white">
            Bitcoin price prediction using <span className="font-playfair italic font-normal">GRU & NADAM</span> optimizer.
          </h2>
          <p className="text-slate-600 dark:text-white/70 text-base sm:text-lg leading-relaxed mt-2">
            Engineered a deep learning sequential pipeline for cryptocurrency forecasting across 4,000+ data points (2014–2025). Optimized architecture using Optuna TPE (100 trials) and NADAM optimizer with Huber Loss to mitigate severe market volatility spikes.
          </p>
        </div>

        {/* 3 Technical Architecture Breakdown Cards (Liquid Glass) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          {/* Card 1 */}
          <div className="rounded-[2.2rem] liquid-glass p-7 hover:border-[#e8702a]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-sm reveal delay-100">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#e8702a]/25 to-slate-900/40 border border-[#e8702a]/30 text-[#e8702a] flex items-center justify-center mb-6 font-mono text-sm font-bold shadow-sm">
              01
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Layers size={18} className="text-[#e8702a]" />
              Data Pipeline & ACF
            </h3>
            <p className="text-sm text-slate-600 dark:text-white/65 leading-relaxed mt-3">
              4,000+ closing prices transformed into 7-day lag windows structured by Autocorrelation Function (ACF) to capture autoregressive temporal dependencies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[2.2rem] liquid-glass p-7 hover:border-[#e8702a]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-sm reveal delay-200">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#e8702a]/25 to-slate-900/40 border border-[#e8702a]/30 text-[#e8702a] flex items-center justify-center mb-6 font-mono text-sm font-bold shadow-sm">
              02
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Sliders size={18} className="text-[#e8702a]" />
              Optuna TPE Tuning
            </h3>
            <p className="text-sm text-slate-600 dark:text-white/65 leading-relaxed mt-3">
              Optuna Tree-Structured Parzen Estimator (TPE) algorithm hyperparameter search over 100 trials, optimizing hidden unit counts, batch sizes, and learning rates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[2.2rem] liquid-glass p-7 hover:border-[#e8702a]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-sm reveal delay-300">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#e8702a]/25 to-slate-900/40 border border-[#e8702a]/30 text-[#e8702a] flex items-center justify-center mb-6 font-mono text-sm font-bold shadow-sm">
              03
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <TrendingUp size={18} className="text-[#e8702a]" />
              NADAM & Huber Loss
            </h3>
            <p className="text-sm text-slate-600 dark:text-white/65 leading-relaxed mt-3">
              Nesterov-accelerated Adaptive Moment Estimation (NADAM) with Huber Loss for quadratic penalization on small errors and linear penalization on outliers.
            </p>
          </div>

        </div>

        {/* Highlighted Results Banner (Liquid Glass) */}
        <div className="mt-8 rounded-[2.2rem] liquid-glass p-7 sm:p-9 border-[#e8702a]/40 shadow-xl reveal delay-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-white/50">Model Accuracy</span>
              <div className="text-3xl sm:text-4xl font-bold text-[#e8702a] font-sans mt-1">98.27%</div>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-white/50">Mean Absolute % Error</span>
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-sans mt-1">1.73%</div>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-white/50">Root Mean Squared Error</span>
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-sans mt-1">$1,803.47</div>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-white/50">Validated Horizon</span>
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-sans mt-1">2014–2025</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
