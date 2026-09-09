import React from 'react';
import { Brain, Calculator, MapPin } from 'lucide-react';
import profileImg from '../assets/images/profile-transparent.png';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative bg-white dark:bg-black text-slate-900 dark:text-white px-5 sm:px-8 md:px-14 py-20 sm:py-28 md:py-32 overflow-hidden border-t border-slate-200 dark:border-white/10 transition-colors duration-300"
    >
      {/* Liquid Ambient Glowing Orbs */}
      <div className="liquid-glow top-0 right-1/4 w-[500px] h-[500px] bg-[#e8702a]/20 dark:bg-[#e8702a]/25" />
      <div className="liquid-glow bottom-10 left-10 w-[450px] h-[450px] bg-blue-500/10 dark:bg-blue-600/15" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40 pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Header Label */}
        <div className="mb-12 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-[#e8702a] font-semibold">
            About Muhammad Khair Syawaludin
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.06em] leading-[1.08] text-slate-900 dark:text-white mt-3 max-w-3xl">
            Bridging pure mathematics with <span className="font-playfair italic font-normal">data science</span> and analytics.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Liquid Glass Portrait Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start reveal delay-100">
            <div className="group relative w-full max-w-sm rounded-[2.5rem] liquid-glass p-4 hover:border-[#e8702a]/50 transition-all duration-500 hover:-translate-y-1">
              
              {/* Subtle ambient lighting behind head */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#e8702a]/25 blur-3xl rounded-full pointer-events-none" />

              {/* Photo Display Container */}
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-slate-100 via-slate-200/50 to-slate-100 dark:from-white/[0.08] dark:via-white/[0.02] dark:to-transparent border border-slate-200/60 dark:border-white/10 flex flex-col items-center justify-end h-[360px] sm:h-[400px]">
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 dark:bg-emerald-500/25 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono shadow-sm backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Data Science / Analytics</span>
                </div>

                {/* Full-bleed Photo */}
                <img 
                  src={profileImg} 
                  alt="Muhammad Khair Syawaludin" 
                  className="relative z-10 w-full h-full object-cover object-top drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom gradient blend */}
                <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-slate-100/90 dark:from-[#0a0a0a]/90 to-transparent z-15 pointer-events-none" />
              </div>

              {/* Card Footer Info */}
              <div className="mt-4 px-2 pb-1 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    Muhammad Khair Syawaludin
                  </h3>
                  <span className="text-xs font-mono text-[#e8702a] font-semibold">GPA 3.61</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-white/60 font-mono">
                  <MapPin size={13} className="text-[#e8702a]" />
                  <span>Mataram, West Nusa Tenggara</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-8 flex flex-col items-start gap-8">
            <div className="space-y-4 text-slate-600 dark:text-white/75 text-base sm:text-lg leading-relaxed reveal delay-200">
              <p>
                Mathematics graduate (GPA 3.61/4.00) with proven expertise in Python-based data processing, statistical analysis, quantitative model evaluation, and machine learning architectures.
              </p>
              <p className="text-sm sm:text-base text-slate-500 dark:text-white/65">
                Guided more than 200 students in programming, relational databases, and mathematical modeling, supported credit data processing during a banking internship, and engineered high-precision predictive models (XGBoost, GRU) to extract actionable intelligence and support data-driven business decisions.
              </p>
            </div>

            {/* Liquid Glass Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full">
              
              {/* Stat Card 1 */}
              <div className="rounded-3xl liquid-glass p-4 sm:p-5 hover:border-[#e8702a]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm reveal delay-100">
                <span className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white font-sans tracking-tight">
                  3.61<span className="text-xs text-slate-400 dark:text-white/40 font-normal">/4.00</span>
                </span>
                <p className="text-xs text-slate-500 dark:text-white/60 mt-1 font-medium">
                  Mathematics GPA
                </p>
              </div>

              {/* Stat Card 2 */}
              <div className="rounded-3xl liquid-glass p-4 sm:p-5 hover:border-[#e8702a]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm reveal delay-200">
                <span className="text-2xl sm:text-3xl font-semibold text-[#e8702a] font-sans tracking-tight">
                  98.27%
                </span>
                <p className="text-xs text-slate-500 dark:text-white/60 mt-1 font-medium">
                  Bitcoin GRU Accuracy
                </p>
              </div>

              {/* Stat Card 3 */}
              <div className="rounded-3xl liquid-glass p-4 sm:p-5 hover:border-[#e8702a]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm reveal delay-300">
                <span className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white font-sans tracking-tight">
                  200+
                </span>
                <p className="text-xs text-slate-500 dark:text-white/60 mt-1 font-medium">
                  Students Mentored
                </p>
              </div>

              {/* Stat Card 4 */}
              <div className="rounded-3xl liquid-glass p-4 sm:p-5 hover:border-[#e8702a]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm reveal delay-400">
                <span className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white font-sans tracking-tight">
                  1 IPR
                </span>
                <p className="text-xs text-slate-500 dark:text-white/60 mt-1 font-medium">
                  Copyright & Best Paper
                </p>
              </div>

            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-1">
              <div className="flex items-start gap-3 p-4 rounded-2xl liquid-glass shadow-sm reveal delay-200">
                <div className="w-8 h-8 rounded-full bg-[#e8702a]/20 text-[#e8702a] border border-[#e8702a]/30 flex items-center justify-center shrink-0 shadow-sm">
                  <Brain size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Predictive Modeling & ML</h4>
                  <p className="text-xs text-slate-500 dark:text-white/60 mt-0.5">XGBoost classification, time-series forecasting, regression analysis, Optuna tuning.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl liquid-glass shadow-sm reveal delay-300">
                <div className="w-8 h-8 rounded-full bg-[#e8702a]/20 text-[#e8702a] border border-[#e8702a]/30 flex items-center justify-center shrink-0 shadow-sm">
                  <Calculator size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Quantitative Analysis & SQL</h4>
                  <p className="text-xs text-slate-500 dark:text-white/60 mt-0.5">Operations research, relational databases, statistical testing, KPI dashboards.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
