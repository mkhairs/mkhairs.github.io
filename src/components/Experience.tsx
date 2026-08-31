import React from 'react';
import { Briefcase, Trophy, Users, Award, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="relative bg-slate-50/70 dark:bg-[#050505] text-slate-900 dark:text-white px-5 sm:px-8 md:px-14 py-20 sm:py-28 md:py-32 border-t border-slate-200 dark:border-white/10 transition-colors duration-300 overflow-hidden"
    >
      {/* Liquid Glow */}
      <div className="liquid-glow top-1/4 right-10 w-[500px] h-[500px] bg-[#e8702a]/15" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl flex flex-col items-start gap-4 mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-[#e8702a] font-semibold">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.06em] leading-tight text-slate-900 dark:text-white">
            Teaching, leadership & <span className="font-playfair italic font-normal">academic</span> honors.
          </h2>
          <p className="text-slate-600 dark:text-white/70 text-base leading-relaxed">
            Hands-on mentorship of 200+ students, organizational leadership in university coding clubs, and conference awards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work & Teaching Experience */}
          <div className="lg:col-span-7 space-y-6 reveal delay-100">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-2 mb-6">
              <Briefcase size={20} className="text-[#e8702a]" />
              <span>Teaching & Professional Experience</span>
            </h3>

            <div className="relative border-l border-slate-300 dark:border-white/15 ml-4 pl-6 space-y-8">
              
              {/* Item 1 */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#e8702a] ring-4 ring-slate-50 dark:ring-black shadow-sm" />
                <div className="flex items-center gap-2 text-xs font-mono text-[#e8702a]">
                  <Calendar size={13} />
                  <span>2024 – 2026</span>
                  <span>&bull;</span>
                  <MapPin size={13} />
                  <span>Mataram</span>
                </div>
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mt-1">
                  Practical Assistant (Algorithms, Linear Programming, OR & Databases)
                </h4>
                <p className="text-xs text-slate-500 dark:text-white/55 font-medium">Mathematics Study Program, FMIPA Universitas Mataram</p>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-white/65 mt-3 space-y-1.5 list-disc list-inside leading-relaxed">
                  <li>Collaborated directly with faculty lecturers to develop laboratory curriculum and code test cases.</li>
                  <li>Mentored 200+ undergraduate students in Python, SQL, Wolfram Mathematica, and Tora optimization suite.</li>
                </ul>
              </div>

              {/* Item 2 */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-400 dark:bg-white/40 group-hover:bg-[#e8702a] ring-4 ring-slate-50 dark:ring-black transition-colors" />
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-white/40">
                  <Calendar size={13} />
                  <span>Jan 2026 – Present</span>
                  <span>&bull;</span>
                  <MapPin size={13} />
                  <span>Mataram</span>
                </div>
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mt-1">
                  Private Coding Tutor
                </h4>
                <p className="text-xs text-slate-500 dark:text-white/55 font-medium">Prodigi Academy</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-white/65 mt-2 leading-relaxed">
                  Delivering 1-on-1 programming lessons teaching computational logic, algorithms, and modular reasoning via ScratchJr and Scratch 3.
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-400 dark:bg-white/40 group-hover:bg-[#e8702a] ring-4 ring-slate-50 dark:ring-black transition-colors" />
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-white/40">
                  <Calendar size={13} />
                  <span>Jun 2025 – Jul 2025</span>
                  <span>&bull;</span>
                  <MapPin size={13} />
                  <span>Gerung</span>
                </div>
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mt-1">
                  Operations Internship
                </h4>
                <p className="text-xs text-slate-500 dark:text-white/55 font-medium">PT. Bank Rakyat Indonesia (Persero) Tbk Unit Gerung</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-white/65 mt-2 leading-relaxed">
                  Supported daily operational data flows, financial reconciliation, and branch database workflows.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Leadership & Awards */}
          <div className="lg:col-span-5 space-y-8 reveal delay-200">
            
            {/* Leadership */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-2 mb-6">
                <Users size={20} className="text-[#e8702a]" />
                <span>Organizational Leadership</span>
              </h3>

              <div className="space-y-4">
                <div className="rounded-2xl liquid-glass p-5 shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Head of Human Resources (PPSDM)</h4>
                      <p className="text-xs text-[#e8702a]">GAMATIKA Coding Club (GCC) FMIPA UNRAM</p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-white/50">2024</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-white/65 mt-2 leading-relaxed">
                    Led technical workshops, peer programming clinics, and competitive coding preparation for 30+ club members.
                  </p>
                </div>

                <div className="rounded-2xl liquid-glass p-5 shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Secretary of Achievement Department</h4>
                      <p className="text-xs text-[#e8702a]">GAMATIKA FMIPA UNRAM</p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-white/50">2023</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-white/65 mt-2 leading-relaxed">
                    Administered academic documentation and student study groups for mathematical competitions.
                  </p>
                </div>
              </div>
            </div>

            {/* Honors & Awards */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-2 mb-6">
                <Trophy size={20} className="text-[#e8702a]" />
                <span>Honors & Conference Awards</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="p-4 rounded-2xl liquid-glass shadow-md">
                  <div className="flex items-center gap-2 text-amber-500 dark:text-amber-400 font-semibold mb-1">
                    <Award size={14} />
                    <span>Best Paper</span>
                  </div>
                  <div className="text-slate-900 dark:text-white font-medium">FORSTAT Int. Conf. UNRAM</div>
                  <div className="text-slate-500 dark:text-white/50 text-[11px] font-mono mt-0.5">2026</div>
                </div>

                <div className="p-4 rounded-2xl liquid-glass shadow-md">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-white/90 font-semibold mb-1">
                    <Award size={14} className="text-[#e8702a]" />
                    <span>Presenter</span>
                  </div>
                  <div className="text-slate-900 dark:text-white font-medium">ICST UNRAM</div>
                  <div className="text-slate-500 dark:text-white/50 text-[11px] font-mono mt-0.5">2025</div>
                </div>

                <div className="p-4 rounded-2xl liquid-glass shadow-md">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-white/90 font-semibold mb-1">
                    <Award size={14} className="text-[#e8702a]" />
                    <span>Presenter</span>
                  </div>
                  <div className="text-slate-900 dark:text-white font-medium">UNDIKSHA Bali Semnas</div>
                  <div className="text-slate-500 dark:text-white/50 text-[11px] font-mono mt-0.5">2025</div>
                </div>

                <div className="p-4 rounded-2xl liquid-glass shadow-md">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-white/90 font-semibold mb-1">
                    <Award size={14} className="text-[#e8702a]" />
                    <span>3rd Place PKM-AI</span>
                  </div>
                  <div className="text-slate-900 dark:text-white font-medium">Scientific Article UNRAM</div>
                  <div className="text-slate-500 dark:text-white/50 text-[11px] font-mono mt-0.5">2024</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
