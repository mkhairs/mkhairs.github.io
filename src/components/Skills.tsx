import React from 'react';
import { Database, LineChart, Sigma, Languages } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Machine Learning & Data Science",
      icon: <LineChart size={20} className="text-[#e8702a]" />,
      skills: [
        "Python",
        "PyTorch",
        "XGBoost",
        "Scikit-Learn",
        "Optuna (TPE)",
        "Time-Series Forecasting",
        "Regression Analysis",
        "Data Preprocessing",
        "SMOTE / Imbalance",
        "GRU / Neural Networks"
      ]
    },
    {
      title: "Data, SQL & Infrastructure",
      icon: <Database size={20} className="text-[#e8702a]" />,
      skills: [
        "SQL (MySQL)",
        "Pandas & NumPy",
        "Microsoft Excel",
        "Relational Databases",
        "Docker",
        "Git / GitHub",
        "FastAPI",
        "LaTeX"
      ]
    },
    {
      title: "Quantitative & Mathematical Analysis",
      icon: <Sigma size={20} className="text-[#e8702a]" />,
      skills: [
        "Operations Research",
        "Linear Programming",
        "Mathematical Modeling",
        "Numerical Methods",
        "Graph Theory",
        "SPSS",
        "Wolfram Mathematica",
        "Tora Software"
      ]
    },
    {
      title: "Communication & Languages",
      icon: <Languages size={20} className="text-[#e8702a]" />,
      skills: [
        "English (Professional Working)",
        "Indonesian (Native)",
        "Microsoft PowerPoint",
        "KPI & Metric Reporting",
        "Technical Documentation"
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="relative bg-white dark:bg-black text-slate-900 dark:text-white px-5 sm:px-8 md:px-14 py-20 sm:py-28 md:py-32 border-t border-slate-200 dark:border-white/10 transition-colors duration-300 overflow-hidden"
    >
      {/* Liquid Glow */}
      <div className="liquid-glow top-1/3 left-1/4 w-[500px] h-[500px] bg-[#e8702a]/15" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl flex flex-col items-start gap-4 mb-14 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-[#e8702a] font-semibold">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.06em] leading-tight text-slate-900 dark:text-white">
            Core analytical & <span className="font-playfair italic font-normal">data science</span> stack.
          </h2>
          <p className="text-slate-600 dark:text-white/70 text-base leading-relaxed">
            Technologies, statistical frameworks, and data modeling tools utilized in quantitative analysis, predictive modeling, and applied research.
          </p>
        </div>

        {/* 4 Toolkit Cards in 2x2 Grid (Liquid Glass) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className={`group rounded-[2.4rem] liquid-glass p-7 sm:p-8 hover:border-[#e8702a]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xl reveal delay-${(idx + 1) * 100}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#e8702a]/20 to-slate-900/40 border border-[#e8702a]/30 text-[#e8702a] flex items-center justify-center shadow-md">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-xs font-mono text-slate-800 dark:text-white/85 bg-white/70 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/10 hover:border-[#e8702a]/50 hover:text-[#e8702a] dark:hover:text-white px-3.5 py-1.5 rounded-xl transition-all duration-200 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
