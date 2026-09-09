import React, { useState, useEffect, useRef } from 'react';
import { Bot, Gamepad2, TrendingUp, ExternalLink, CreditCard } from 'lucide-react';

interface ProjectItem {
  label: string;
  text: string;
}

interface Project {
  title: string;
  category: 'ml' | 'game';
  categoryLabel: string;
  githubUrl: string;
  summary: string;
  items: ProjectItem[];
  tags: string[];
  icon: React.ReactNode;
  bgPattern: React.ReactNode;
}

type FilterType = 'all' | 'ml' | 'game';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<{ [key in FilterType]?: HTMLButtonElement | null }>({});

  const filterTabs: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'game', label: 'Game Dev' }
  ];

  const projects: Project[] = [
    {
      title: "Credit Card Fraud Detection with Hybrid Imbalance Handling",
      category: 'ml',
      categoryLabel: "Machine Learning & Imbalanced Classification",
      githubUrl: "https://github.com/mkhairs/Credit-Card-Fraud-Detection-with-Hybrid-Imbalance-Handling",
      summary: "Leakage-safe XGBoost fraud detection pipeline combining Mutual Information feature selection, SMOTE, and class-weighted cost optimization.",
      items: [
        {
          label: "Model Development",
          text: "Developed an XGBoost-based credit card fraud detection model for a highly imbalanced dataset containing approximately 0.17% fraudulent transactions."
        },
        {
          label: "Imbalance Handling",
          text: "Implemented a leakage-safe pipeline combining Mutual Information feature selection, IQR-based outlier capping, Random Undersampling, SMOTE, and cost-sensitive XGBoost with class weighting."
        },
        {
          label: "Evaluation",
          text: "Applied stratified 5-fold cross-validation and achieved 84.44% precision, 80.00% recall, 82.16% F1-score, and 80.91% PR-AUC on the untouched test set."
        }
      ],
      tags: ["Python", "XGBoost", "SMOTE", "Imbalanced Learning", "Feature Selection", "PR-AUC"],
      icon: <CreditCard size={22} />,
      bgPattern: (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-6 left-6 w-16 h-10 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-200/50 dark:bg-white/5 backdrop-blur-[2px]" />
          <div className="absolute top-8 left-10 w-4 h-3 rounded-sm bg-[#e8702a]/30" />
          <div className="absolute bottom-4 right-6 w-20 h-20 rounded-full bg-[#e8702a]/15 blur-lg" />
        </div>
      )
    },
    {
      title: "Direct Multi-Horizon IHSG Forecasting",
      category: 'ml',
      categoryLabel: "Deep Learning & Time Series",
      githubUrl: "https://github.com/mkhairs/IHSG-GRU-Prediction",
      summary: "Gated Temporal GRU model for simultaneous multi-step stock market index forecasting with adaptive feature fusion.",
      items: [
        {
          label: "Model Development",
          text: "Developed a direct multi-horizon Gated Temporal GRU to forecast IHSG closing prices for the next five trading days simultaneously using a 20-day historical look-back window."
        },
        {
          label: "Architecture",
          text: "Designed a single-layer GRU for sequential closing prices with an auxiliary SMA/EMA branch using SMA₂₀, SMA₄₀, EMA₂₀, and EMA₄₀, combined through a learnable sigmoid gate for adaptive feature fusion."
        },
        {
          label: "Evaluation",
          text: "Implemented a leakage-safe chronological train/validation/test split and achieved a test MAE of 100.08, RMSE of 147.97, and MAPE of 1.396%, with a one-day-ahead MAPE of 0.808%."
        }
      ],
      tags: ["Python", "PyTorch", "GRU", "Time Series", "Feature Fusion", "IHSG"],
      icon: <TrendingUp size={22} />,
      bgPattern: (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-6 left-6 w-12 h-12 rounded-full border border-slate-300 dark:border-white/10 bg-slate-200/50 dark:bg-white/5 backdrop-blur-[2px]" />
          <div className="absolute top-1/2 -translate-y-1/2 left-20 w-32 h-[1px] bg-gradient-to-r from-[#e8702a]/40 to-transparent" />
          <div className="absolute bottom-4 right-6 w-16 h-16 rounded-full bg-[#e8702a]/15 blur-md" />
        </div>
      )
    },
    {
      title: "Resume Screening and Candidate Selection Prediction",
      category: 'ml',
      categoryLabel: "Machine Learning & Deep Learning",
      githubUrl: "https://github.com/mkhairs/Resume-Screening-and-Candidate-Selection-Prediction",
      summary: "Custom Residual Neural Network vs. XGBoost benchmark for binary candidate-selection prediction using resume-related features.",
      items: [
        {
          label: "Model Development",
          text: "Developed and compared XGBoost and a custom Residual Neural Network for binary candidate-selection prediction using resume-related features."
        },
        {
          label: "Architecture & Training",
          text: "Implemented dynamic feature-wise gating, residual connections, DropPath, AdamW, class-weighted BCE loss, Early Stopping, and ReduceLROnPlateau."
        },
        {
          label: "Evaluation",
          text: "Applied leakage-safe stratified 5-fold cross-validation, learnable threshold optimization with Soft-F1, and evaluation using Accuracy, Precision, Recall, F1-Score, and ROC-AUC."
        }
      ],
      tags: ["Python", "PyTorch", "XGBoost", "Deep Learning", "NLP", "Residual NN"],
      icon: <Bot size={22} />,
      bgPattern: (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-6 right-8 w-16 h-16 rounded-full border border-dashed border-slate-300 dark:border-white/10" />
          <div className="absolute top-1/2 left-8 -translate-y-1/2 w-8 h-8 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rotate-45" />
          <div className="absolute bottom-4 right-12 w-20 h-4 bg-gradient-to-l from-[#e8702a]/20 to-transparent rounded-full" />
        </div>
      )
    },
    {
      title: "Alien Space Invader",
      category: 'game',
      categoryLabel: "Game Development & OOP",
      githubUrl: "https://github.com/mkhairs/alien-space-invader",
      summary: "Classic 2D arcade shooter built with Python and Object-Oriented Programming to manage player ships, aliens, and projectiles.",
      items: [
        {
          label: "Development",
          text: "Developed a classic 2D shooter game using Python and Object-Oriented Programming to manage game entities such as the player ship, aliens, and projectiles."
        },
        {
          label: "Mechanics",
          text: "Implemented collision detection, dynamic enemy movement, score tracking, projectile handling, and keyboard-based player controls."
        }
      ],
      tags: ["Python", "Pygame", "OOP", "Collision Detection", "Game Dev"],
      icon: <Gamepad2 size={22} />,
      bgPattern: (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 right-6 w-14 h-14 border border-slate-300 dark:border-white/10 rounded-2xl rotate-45 bg-slate-200/30 dark:bg-white/[0.02]" />
          <div className="absolute bottom-6 left-8 w-10 h-10 rounded-full border border-[#e8702a]/30" />
        </div>
      )
    }
  ];

  const filteredProjects = projects.filter(
    p => filter === 'all' || p.category === filter
  );

  // Update sliding pill position when filter tab changes
  useEffect(() => {
    const updatePill = () => {
      const activeBtn = tabRefs.current[filter];
      const container = containerRef.current;

      if (activeBtn && container) {
        setPillStyle({
          left: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
          opacity: 1
        });
      }
    };

    updatePill();
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [filter]);

  return (
    <section 
      id="projects" 
      className="relative bg-white dark:bg-black text-slate-900 dark:text-white px-5 sm:px-8 md:px-14 py-20 sm:py-28 md:py-32 border-t border-slate-200 dark:border-white/10 transition-colors duration-300 overflow-hidden"
    >
      {/* Liquid Ambient Glowing Orbs */}
      <div className="liquid-glow top-1/4 left-1/3 w-[500px] h-[500px] bg-[#e8702a]/15 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 reveal">
          <div className="max-w-2xl flex flex-col items-start gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#e8702a] font-semibold">
              Data Science & Analytics Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.06em] leading-tight text-slate-900 dark:text-white">
              Featured machine learning & <span className="font-playfair italic font-normal">quantitative</span> projects.
            </h2>
            <p className="text-slate-600 dark:text-white/70 text-base leading-relaxed">
              Predictive classification pipelines, multi-horizon time-series forecasting, and data analysis algorithms.
            </p>
          </div>

          {/* Liquid Glass Filter Capsule with Sliding Active Pill */}
          <div 
            ref={containerRef}
            className="relative flex items-center p-1.5 rounded-full liquid-nav shadow-lg"
          >
            {/* Sliding Pill Indicator */}
            <div 
              className="absolute top-1.5 bottom-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full transition-all duration-300 ease-out shadow-md pointer-events-none"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`,
                opacity: pillStyle.opacity,
                transform: 'translateZ(0)'
              }}
            />

            {filterTabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => { tabRefs.current[tab.id] = el; }}
                  onClick={() => setFilter(tab.id)}
                  className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 active:scale-95 ${
                    isActive
                      ? 'text-white dark:text-slate-900 font-semibold'
                      : 'text-slate-600 dark:text-white/75 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2x2 Projects Grid with Staggered Cascading Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj, idx) => (
            <div 
              key={`${filter}-${proj.title}`}
              style={{ animationDelay: `${idx * 80}ms` }}
              className="group rounded-[2.4rem] liquid-glass p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#e8702a]/50 hover:-translate-y-2 shadow-xl project-card-anim"
            >
              <div>
                {/* Abstract Visual Header */}
                <div className="h-32 rounded-[1.8rem] bg-gradient-to-br from-slate-200/60 dark:from-white/[0.08] via-slate-100/40 dark:via-white/[0.02] to-[#e8702a]/20 border border-slate-200/80 dark:border-white/10 mb-6 relative overflow-hidden flex items-center justify-between px-6 shadow-inner">
                  {proj.bgPattern}
                  <div className="relative z-10 w-11 h-11 rounded-2xl liquid-glass text-[#e8702a] flex items-center justify-center shadow-md">
                    {proj.icon}
                  </div>
                  <span className="relative z-10 text-[11px] font-mono px-3 py-1 rounded-full liquid-glass text-slate-800 dark:text-white/90 shadow-sm font-medium">
                    {proj.categoryLabel}
                  </span>
                </div>

                {/* Title with Link */}
                <a 
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title flex items-start justify-between gap-2 text-xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white transition-colors hover:text-[#e8702a]"
                >
                  <span>{proj.title}</span>
                  <ExternalLink size={18} className="shrink-0 text-slate-400 group-hover/title:text-[#e8702a] transition-colors mt-1" />
                </a>
                
                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-white/70 leading-relaxed mt-2.5 mb-5 font-medium">
                  {proj.summary}
                </p>

                {/* Detailed LaTeX Bullet Points */}
                <div className="space-y-3 pt-3 border-t border-slate-200/80 dark:border-white/10 text-xs">
                  {proj.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex flex-col gap-0.5">
                      <span className="font-semibold text-slate-900 dark:text-white font-mono text-[11px] text-[#e8702a]">
                        &bull; {item.label}:
                      </span>
                      <p className="text-slate-600 dark:text-white/65 leading-relaxed pl-3">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer: Tags & GitHub Button Link */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/10 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] text-slate-700 dark:text-white/75 border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] rounded-lg px-2.5 py-1 font-mono transition-colors group-hover:border-[#e8702a]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={proj.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 text-xs font-semibold hover:bg-[#e8702a] dark:hover:bg-[#e8702a] dark:hover:text-white transition-all shadow-md active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>View Project on GitHub &rarr;</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
