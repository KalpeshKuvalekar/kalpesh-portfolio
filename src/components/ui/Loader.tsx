import React, { useEffect, useState } from 'react';

import { Sparkles } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 15;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white p-4">
      <div className="relative flex flex-col items-center space-y-6">
        
        {/* Logo Badge */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[2px] shadow-2xl shadow-indigo-500/40 animate-pulse">
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-extrabold text-2xl text-cyan-300">
            KK
          </div>
        </div>

        <div className="text-center space-y-1">
          <h2 className="text-xl font-extrabold tracking-tight">
            Kalpesh Kuvalekar
          </h2>
          <p className="text-xs text-indigo-400 font-medium tracking-widest uppercase">
            Full-Stack Developer Portfolio
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1.5 rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-500 transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-400 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
          <span>Loading portfolio assets ({progress}%)...</span>
        </div>

      </div>
    </div>
  );
};
