import React, { useState } from 'react';

import {
  Award,
  Calendar,
  CheckCircle,
  FileCheck,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

import { portfolioData } from '../../data/portfolioData';
import { CertificateItem } from '../../types';
import { Modal } from '../ui/Modal';

export const Certificates: React.FC = () => {
  const { certificates } = portfolioData;
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-16 sm:py-20 scroll-mt-[72px] relative z-10 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-cyan-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional <span className="text-indigo-600 dark:text-cyan-400">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Industry certifications and course completions verifying my technical skills in Java full stack, web development, and database architecture.
          </p>
        </div>

        {/* Certificates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl hover:border-indigo-500/60 dark:hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    {cert.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 mt-0.5">
                    Issuer: {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Skills verified */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((sk, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  ID: {cert.credentialId}
                </span>

                <button
                  onClick={() => setActiveCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-cyan-400 hover:underline"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify Credential</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Verification Modal */}
        {activeCert && (
          <Modal
            isOpen={!!activeCert}
            onClose={() => setActiveCert(null)}
            title="Credential Verification Details"
            maxWidth="lg"
          >
            <div className="space-y-6 text-slate-800 dark:text-slate-200">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-slate-50 to-cyan-500/10 dark:from-indigo-950/40 dark:via-slate-900 dark:to-cyan-950/40 border border-indigo-200/50 dark:border-indigo-800/50 text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {activeCert.title}
                </h4>
                <p className="text-xs text-indigo-600 dark:text-cyan-400 font-semibold">
                  Issued by {activeCert.issuer}
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold text-slate-500">Date Issued:</span>
                  <span className="font-bold">{activeCert.date}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold text-slate-500">Credential ID:</span>
                  <span className="font-mono font-bold text-indigo-600 dark:text-cyan-400">
                    {activeCert.credentialId}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold text-slate-500">Candidate:</span>
                  <span className="font-bold">Kalpesh Bhanudas Kuvalekar</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeCert.description}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setActiveCert(null)}
                  className="w-full py-3 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all"
                >
                  Close Verification Window
                </button>
              </div>
            </div>
          </Modal>
        )}

      </div>
    </section>
  );
};
