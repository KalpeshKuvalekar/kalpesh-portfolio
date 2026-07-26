import React, { useState } from 'react';

import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Coffee,
  FileCode,
  Terminal,
  Boxes,
  Atom,
  Palette,
  Sparkles,
  Eye,
  Layers,
  Cpu,
  DatabaseZap,
  Globe,
  Table,
  Leaf,
  HardDrive,
  GitBranch,
  Monitor,
  FileText
} from 'lucide-react';

import { portfolioData } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code className="w-4 h-4" />;
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  const getSkillIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-4 h-4 text-amber-500" />;
      case 'FileCode':
        return <FileCode className="w-4 h-4 text-purple-500" />;
      case 'Js':
        return <FileCode className="w-4 h-4 text-yellow-500" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-blue-500" />;
      case 'Boxes':
        return <Boxes className="w-4 h-4 text-emerald-500" />;
      case 'Atom':
        return <Atom className="w-4 h-4 text-cyan-400" />;
      case 'FileHtml':
        return <FileCode className="w-4 h-4 text-orange-500" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-teal-400" />;
      case 'Eye':
        return <Eye className="w-4 h-4 text-pink-400" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-green-500" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-violet-500" />;
      case 'DatabaseZap':
        return <DatabaseZap className="w-4 h-4 text-rose-500" />;
      case 'Globe':
        return <Globe className="w-4 h-4 text-blue-400" />;
      case 'Table':
        return <Table className="w-4 h-4 text-sky-500" />;
      case 'Leaf':
        return <Leaf className="w-4 h-4 text-emerald-400" />;
      case 'HardDrive':
        return <HardDrive className="w-4 h-4 text-amber-600" />;
      case 'GitBranch':
        return <GitBranch className="w-4 h-4 text-orange-600" />;
      case 'Monitor':
        return <Monitor className="w-4 h-4 text-blue-600" />;
      case 'FileText':
        return <FileText className="w-4 h-4 text-slate-400" />;
      default:
        return <Code className="w-4 h-4 text-indigo-500" />;
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-20 scroll-mt-[72px] relative z-10 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-cyan-400 text-xs font-semibold">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Categorized <span className="text-indigo-600 dark:text-cyan-400">Skills & Tools</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive breakdown of my technical stack across full-stack engineering, databases, and developer tooling.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500'
            }`}
          >
            All Skills
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500'
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/60 dark:hover:border-cyan-500/60 shadow-sm hover:shadow-md transition-all group duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                          {getSkillIcon(skill.iconName)}
                        </div>
                        <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                          {skill.name}
                        </span>
                      </div>
                      {/* <span className="text-xs font-extrabold text-indigo-600 dark:text-cyan-400">
                        {skill.level}%
                      </span> */}
                    </div>

                    {skill.description && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 leading-tight">
                        {skill.description}
                      </p>
                    )}

                    {/* Progress Bar */}
                    {/* <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
