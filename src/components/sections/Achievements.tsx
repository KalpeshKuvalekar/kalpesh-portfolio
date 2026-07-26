import React from 'react';

import {
  Sparkles,
  Award,
  Code,
  Briefcase,
  Zap,
  Star
} from 'lucide-react';

import { portfolioData } from '../../data/portfolioData';

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-amber-500" />;
      case 'Code':
        return <Code className="w-6 h-6 text-indigo-500 dark:text-cyan-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-purple-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-500" />;
      default:
        return <Star className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Key Accomplishments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional <span className="text-indigo-600 dark:text-cyan-400">Highlights</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Notable milestones and academic achievements that set my candidate profile apart.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl hover:border-indigo-500/60 dark:hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getAchievementIcon(ach.icon)}
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400">
                    {ach.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span>{ach.date}</span>
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
