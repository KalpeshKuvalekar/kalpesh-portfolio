import React from 'react';

import {
  FileText,
  Briefcase,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  MapPin,
  GraduationCap
} from 'lucide-react';

import { portfolioData } from '../../data/portfolioData';
import { TypingEffect } from '../ui/TypingEffect';
import { Counter } from '../ui/Counter';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal, heroTitles, socials, stats } = portfolioData;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-12 sm:pt-24 sm:pb-16 scroll-mt-[72px] overflow-hidden"
    >
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-cyan-300 text-xs font-semibold shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Full-Time Roles & Internships</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>

              {/* Dynamic typing title */}
              <div className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-200 h-9 flex items-center justify-center lg:justify-start">
                <TypingEffect titles={heroTitles} />
              </div>
            </div>

            {/* Recruiter Elevator Pitch */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personal.subHeadline}
            </p>

            {/* Location & College Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
                {personal.location}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
                Rajendra Mane College of Engineering and Technology, Ambav (8.1 CGPI)
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
                <Sparkles className="w-3.5 h-3.5 opacity-80 group-hover:rotate-12 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <Briefcase className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">
                Connect:
              </span>
              <a
                href={socials.find((s) => s.platform === 'LinkedIn')?.url}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500 transition-all shadow-sm"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={socials.find((s) => s.platform === 'GitHub')?.url}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500 transition-all shadow-sm"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500 transition-all shadow-sm"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500 transition-all shadow-sm"
                title="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Profile Photo Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Decorative background glass card */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-3xl p-3 bg-gradient-to-b from-indigo-500/20 via-cyan-500/10 to-transparent dark:from-indigo-500/30 dark:via-cyan-400/15 border border-slate-200/80 dark:border-slate-800 backdrop-blur-2xl shadow-2xl shadow-indigo-500/10">
              
              {/* Photo wrapper */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                {/* Name tag over photo */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold leading-tight">{personal.name}</p>
                    <p className="text-[10px] text-cyan-400 font-medium">Full Stack Software Engineer</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    B.E. Comp
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: CGPI */}
              <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-2.5 animate-bounce-slow">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-xs">
                  🏆
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900 dark:text-white">8.1 CGPI</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">First Class Distinction</p>
                </div>
              </div>

              {/* Floating Badge 2: Java & Spring */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-cyan-400 flex items-center justify-center font-bold text-xs">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900 dark:text-white">Java & .NET</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">AI Tools Enthusiast</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Key Stats Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md shadow-sm hover:border-indigo-500/50 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
