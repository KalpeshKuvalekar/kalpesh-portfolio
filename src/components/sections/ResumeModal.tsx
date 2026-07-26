import React from 'react';

import {
  FileText,
  Printer,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  GraduationCap,
  Briefcase,
  Code
} from 'lucide-react';

import { portfolioData } from '../../data/portfolioData';
import { Modal } from '../ui/Modal';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onShowToast
}) => {
  const { personal, education, experiences, projects, skillCategories } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
KALPESH BHANUDAS KUVALEKAR
${personal.location}
Email: ${personal.email} | Phone: ${personal.phone} | LinkedIn: https://in.linkedin.com/in/kalpeshkuvalekar-kk02

OBJECTIVE:
${personal.careerObjective}

INTERNSHIP & TRAINING:
${experiences
  .map(
    (e) => `* ${e.title} | ${e.company} (${e.period})\n  - ${e.responsibilities.join('\n  - ')}`
  )
  .join('\n\n')}

EDUCATION:
${education.map((ed) => `* ${ed.degree} | ${ed.institution} (${ed.period}) - ${ed.result}`).join('\n')}

PROJECTS:
${projects.map((p) => `* ${p.title} (${p.techStack.join(', ')})\n  - ${p.description}`).join('\n\n')}
`;
    navigator.clipboard.writeText(text);
    onShowToast('Resume text copied to clipboard!');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Resume - Kalpesh Kuvalekar" maxWidth="4xl">
      <div className="space-y-6">
        
        {/* Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Verified Candidate Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 shadow-sm"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Text</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>
          </div>
        </div>

        {/* Resume Printable Card */}
        <div className="p-8 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-sm space-y-6 print:p-0 print:border-none print:shadow-none">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 text-center space-y-2">
            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900">
              {personal.name}
            </h1>
            <p className="text-xs text-slate-600">{personal.location}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-indigo-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {personal.email}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> {personal.phone}
              </span>
              <span>|</span>
              <a
                href={portfolioData.socials.find((s) => s.platform === 'LinkedIn')?.url}
                target="_blank"
                rel="noreferrer"
                className="underline flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Objective
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {personal.careerObjective}
            </p>
          </div>

          {/* Internship & Training */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Internship & Training
            </h2>
            <div className="space-y-4 text-xs">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>
                      {exp.title} | {exp.company}
                    </span>
                    <span className="text-slate-600">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-700 mt-1 space-y-1">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Education
            </h2>
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-300 font-bold text-slate-900">
                  <th className="py-1">Qualification</th>
                  <th className="py-1">Institute</th>
                  <th className="py-1">Year</th>
                  <th className="py-1">Result</th>
                </tr>
              </thead>
              <tbody>
                {education.map((ed) => (
                  <tr key={ed.id} className="border-b border-slate-100">
                    <td className="py-2 font-semibold">{ed.degree}</td>
                    <td className="py-2">{ed.institution}</td>
                    <td className="py-2">{ed.period}</td>
                    <td className="py-2 font-bold text-indigo-700">{ed.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-700">
              {skillCategories.map((cat) => (
                <p key={cat.id}>
                  <strong className="text-slate-900">{cat.name}:</strong>{' '}
                  {cat.skills.map((s) => s.name).join(', ')}
                </p>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4 text-xs">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <p className="font-bold text-slate-900">
                    {proj.title} ({proj.techStack.join(', ')})
                  </p>
                  <ul className="list-disc list-inside text-slate-700 mt-1 space-y-1">
                    {proj.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </Modal>
  );
};
