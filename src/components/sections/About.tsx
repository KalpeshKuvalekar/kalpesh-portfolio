import React, { useState } from 'react';

import {
  User,
  Target,
  Zap,
  CheckCircle2,
  Award,
  Code2,
  FileText,
  Sparkles
} from 'lucide-react';

import { portfolioData } from '../../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;
  const [activeTab, setActiveTab] = useState<'overview' | 'strengths' | 'objective'>('overview');

  return (
    <section id="about" className="py-16 sm:py-20 scroll-mt-[72px] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-cyan-400 text-xs font-semibold">
            <User className="w-3.5 h-3.5" />
            <span>Candidate Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-indigo-600 dark:text-cyan-400">Kalpesh Kuvalekar</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Full-Stack Software Engineer with strong analytical foundations, hands-on industrial training, and an 8.1 CGPI Computer Engineering degree.
          </p>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Summary Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xl relative overflow-hidden group">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[2px] shadow-lg shadow-indigo-500/20">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {personal.name}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-cyan-400">
                    Computer Engineering Graduate (2025)
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Mumbai, Maharashtra • 8.1 CGPI
                  </p>
                </div>
              </div>

              {/* Bio paragraphs */}
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {personal.aboutBio.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Status</p>
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Ready for Immediate Onboarding
                  </p>
                </div>
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/20 transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Interactive Tabbed Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tabs Selector */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'overview'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>Who I Am & What I Do</span>
              </button>

              <button
                onClick={() => setActiveTab('strengths')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'strengths'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>Core Strengths</span>
              </button>

              <button
                onClick={() => setActiveTab('objective')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'objective'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Target className="w-4 h-4" />
                <span>Career Objective</span>
              </button>
            </div>

            {/* Tab Panel Content */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xl min-h-[320px] flex flex-col justify-between">
              
              {activeTab === 'overview' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-3 text-indigo-600 dark:text-cyan-400">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Full-Stack Software Engineering Expertise
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-1">
                        Java & Spring Boot
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Proficient in building RESTful APIs, Spring Data JPA mappings, MVC architectures, and MySQL integration.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-1">
                        ASP.NET Core & C#
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Experience creating enterprise Web APIs, Entity Framework Core ORM models, and SQL Server databases.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-1">
                        Modern React & Frontend
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Building responsive, accessible web interfaces using React Hooks, JavaScript (ES6+), Bootstrap, and Tailwind CSS.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-1">
                        Databases & CRUD Logic
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Writing optimized SQL queries, stored procedures, joins, and indexing across SQL Server, MySQL, and MongoDB.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'strengths' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-3 text-indigo-600 dark:text-cyan-400">
                    <Zap className="w-5 h-5" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Core Technical Strengths
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {personal.strengths.map((strength, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {strength}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'objective' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-3 text-indigo-600 dark:text-cyan-400">
                    <Target className="w-5 h-5" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Career Vision & Recruiter Commitment
                    </h3>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-slate-50 to-cyan-500/10 dark:from-indigo-950/40 dark:via-slate-900 dark:to-cyan-950/40 border border-indigo-200/50 dark:border-indigo-800/50">
                    <p className="text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed italic">
                      "{personal.careerObjective}"
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>Dedicated Problem Solver</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                      <Zap className="w-4 h-4 text-indigo-500" />
                      <span>Rapid Technology Learner</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
