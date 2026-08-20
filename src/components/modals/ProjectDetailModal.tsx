import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Cpu, CheckCircle2, AlertTriangle, Layers, Tag } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { HandwrittenNote } from '../common/HandwrittenNote';
import { MagneticButton } from '../common/MagneticButton';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  soundEnabled: boolean;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  soundEnabled,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A1A]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#F5F3EE] text-[#1A1A1A] rounded-3xl shadow-2xl border border-neutral-300 overflow-hidden my-auto max-h-[90vh] flex flex-col z-10"
        >
          {/* Top Bar / Header */}
          <div className="px-6 py-4 border-b border-neutral-300 bg-white/70 flex items-center justify-between sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="font-mono-code text-xs font-bold px-2.5 py-1 rounded bg-[#1A1A1A] text-[#F5F3EE] uppercase tracking-wider">
                PROJECT {project.number}
              </span>
              <span className="font-mono-code text-xs text-neutral-500 uppercase tracking-wider">
                {project.category} • {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/10 transition-colors text-[#1A1A1A]"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-10">
            {/* Title Section */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif-editorial italic text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A]">
                    {project.title}
                  </h2>
                  <p className="text-base sm:text-lg text-neutral-600 mt-1 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <MagneticButton
                      href={project.githubUrl}
                      target="_blank"
                      variant="primary"
                      size="sm"
                      soundEnabled={soundEnabled}
                      dataCursor="link"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>GITHUB REPO</span>
                    </MagneticButton>
                  )}

                  {(project.liveUrl || project.githubUrl) && (
                    <MagneticButton
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      variant="pill"
                      size="sm"
                      soundEnabled={soundEnabled}
                      dataCursor="link"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>DEMO / DOCS</span>
                    </MagneticButton>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <HandwrittenNote rotate={-1} color="orange" className="text-base">
                  "{project.annotation}"
                </HandwrittenNote>
              </div>
            </div>

            {/* Visual Banner / Polaroid Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-300 bg-[#E8E4D8] shadow-inner">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#1A1A1A]/85 backdrop-blur-md text-white p-3 sm:p-4 rounded-xl border border-white/20">
                <span className="font-mono-code text-xs uppercase tracking-wider block text-orange-400 font-bold">
                  SYSTEM OVERVIEW
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 mt-1 max-w-xl font-serif-editorial italic">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono-code text-xs text-neutral-500 uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 text-orange-600" />
                <span>TECHNOLOGIES & TOOLING</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white border border-neutral-300 text-xs font-mono-code font-semibold text-[#1A1A1A] shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Two Column Breakdown: Architecture & Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Architecture */}
              <div className="bg-white p-6 rounded-2xl border border-neutral-300 space-y-4 shadow-2xs">
                <div className="flex items-center gap-2 text-sm font-bold font-display uppercase tracking-wide text-[#1A1A1A]">
                  <Layers className="w-4 h-4 text-orange-600" />
                  <span>Architecture & Pipeline</span>
                </div>
                <ul className="space-y-3">
                  {project.architecture.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2.5">
                      <span className="font-mono-code text-xs text-orange-600 font-bold mt-0.5">
                        0{i + 1}.
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div className="bg-white p-6 rounded-2xl border border-neutral-300 space-y-4 shadow-2xs">
                <div className="flex items-center gap-2 text-sm font-bold font-display uppercase tracking-wide text-[#1A1A1A]">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Engineering Challenges Solved</span>
                </div>
                <ul className="space-y-3">
                  {project.challenges.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Features List */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-300 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-sm font-bold font-display uppercase tracking-wide text-[#1A1A1A]">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
                <span>Key Features & Outcomes</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-800">
                    <span className="text-[#2D6A4F] font-bold">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-white/70 border-t border-neutral-300 flex items-center justify-between text-xs font-mono-code text-neutral-500">
            <span>Press ESC or click outside to dismiss</span>
            <button
              onClick={onClose}
              className="font-bold text-[#1A1A1A] hover:text-orange-600 transition-colors uppercase tracking-wider"
            >
              CLOSE WINDOW ✕
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
