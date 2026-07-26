import React from 'react';

import {
  GraduationCap,
  Calendar,
  Building,
  Award,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

import { portfolioData } from '../../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-20 scroll-mt-[72px] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-cyan-400 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education <span className="text-indigo-600 dark:text-cyan-400">Timeline</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Verified academic qualifications in Computer Science & Engineering with strong academic performance.
          </p>
        </div>

        {/* Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              className="flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl hover:border-indigo-500/60 dark:hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                {/* Year Pill & Score Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    {edu.period}
                  </span>

                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-md shadow-indigo-500/20">
                    {edu.result}
                  </span>
                </div>

                {/* Degree Name */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>{edu.institution}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
                    {edu.location}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-cyan-400">
                <Award className="w-4 h-4" />
                <span>Verified Academic Credentials</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
