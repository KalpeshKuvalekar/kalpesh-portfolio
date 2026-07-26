import React from 'react';

import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';

import { portfolioData } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  const getRoleBadge = (roleType: string) => {
    switch (roleType) {
      case 'Training':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      case 'Internship':
        return 'bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 border-indigo-500/20';
      default:
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-20 scroll-mt-[72px] relative z-10 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-cyan-400 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Industry <span className="text-indigo-600 dark:text-cyan-400">Training & Internships</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Hands-on software development experience gained through real-world corporate training, engineering internships, and capstone software implementations.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-cyan-400 flex items-center justify-center shadow-md z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-cyan-400" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all duration-200 space-y-4">
                      
                      {/* Top Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${getRoleBadge(exp.roleType)}`}>
                          {exp.roleType}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-indigo-600 dark:text-cyan-400 mt-1">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5" />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Bullet Responsibilities */}
                      <div className="space-y-2 pt-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key Achievements */}
                      {exp.achievements.length > 0 && (
                        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500">
                            <Award className="w-3.5 h-3.5" />
                            <span>Outcome & Key Recognition</span>
                          </div>
                          {exp.achievements.map((ach, idx) => (
                            <p key={idx} className="text-[11px] text-slate-600 dark:text-slate-300">
                              • {ach}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Tech Pills */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
