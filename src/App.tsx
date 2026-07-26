import React, { useState } from 'react';

import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

import { ParticleBackground } from './components/ui/ParticleBackground';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Toast } from './components/ui/Toast';
import { Loader } from './components/ui/Loader';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certificates } from './components/sections/Certificates';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { ResumeModal } from './components/sections/ResumeModal';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const sectionIds = [
    'hero',
    'about',
    'skills',
    'projects',
    'experience',
    'education',
    'certificates',
    'contact'
  ];

  const activeSection = useActiveSection(sectionIds);

  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Toast notification state
  const [toastState, setToastState] = useState<{
    isOpen: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    isOpen: false,
    message: '',
    type: 'success'
  });

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToastState({
      isOpen: true,
      message,
      type
    });
  };

  const closeToast = () => {
    setToastState((prev) => ({ ...prev, isOpen: false }));
  };

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative selection:bg-indigo-500 selection:text-white">
      {/* Scroll Progress line at very top */}
      <ScrollProgress />

      {/* Interactive Particle canvas */}
      <ParticleBackground />

      {/* Subtle cursor ring follower for desktop */}
      <CustomCursor />

      {/* Main Sticky Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About onOpenResume={() => setResumeModalOpen(true)} />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Achievements />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Notification Toast */}
      <Toast
        isOpen={toastState.isOpen}
        message={toastState.message}
        type={toastState.type}
        onClose={closeToast}
      />
    </div>
  );
}
