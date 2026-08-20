import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Mail, Github, Linkedin, Code2, MapPin } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../data/portfolioData';
import { HandwrittenNote } from '../common/HandwrittenNote';

interface EditorialMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

const MENU_ITEMS = [
  { id: 'desk', label: 'Desk & Intro', number: '01', note: 'the starting workspace' },
  { id: 'about', label: 'Who is Prathamesh?', number: '02', note: 'story, mindset & education' },
  { id: 'projects', label: 'Selected Works', number: '03', note: '6 featured systems & apps' },
  { id: 'toolbox', label: 'Toolbox & Ecosystem', number: '04', note: 'tech stack & honest notes' },
  { id: 'journey', label: 'The Journey So Far', number: '05', note: 'milestones from 2023 → 2026+' },
  { id: 'certifications', label: 'Certifications Archive', number: '06', note: 'verified credentials & exams' },
  { id: 'resume', label: 'Formal Resume', number: '07', note: 'the structured summary' },
  { id: 'contact', label: 'Get in Touch', number: '08', note: "let's build together" },
];

export const EditorialMenu: React.FC<EditorialMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-[#1A1A1A] text-[#F5F3EE] flex flex-col justify-between overflow-y-auto"
        >
          {/* Top Bar inside Menu */}
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono-code text-xs text-neutral-400 uppercase tracking-widest">
                [ INDEX OF CONTENTS ]
              </span>
              <span className="text-xs font-serif-editorial italic text-orange-400 rotate-1">
                feel free to jump anywhere ↗
              </span>
            </div>

            <button
              onClick={onClose}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-orange-400 bg-white/5 hover:bg-white/10 transition-all font-mono-code text-xs tracking-wider"
              aria-label="Close menu"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Main Grid Content */}
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left navigation column */}
            <div className="lg:col-span-8 space-y-2">
              {MENU_ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      onClose();
                    }}
                    className="group w-full flex items-baseline justify-between py-2.5 sm:py-3 border-b border-white/10 hover:border-orange-500 text-left transition-all"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono-code text-xs text-neutral-500 group-hover:text-orange-400 transition-colors">
                        {item.number}
                      </span>
                      <span className="font-serif-editorial italic text-2xl sm:text-3xl md:text-4xl text-neutral-200 group-hover:text-white group-hover:translate-x-2 transition-all">
                        {item.label}
                      </span>
                    </div>

                    <div className="hidden sm:flex items-center gap-3">
                      <span className="font-serif-editorial italic text-sm text-neutral-400 group-hover:text-orange-300 transition-colors">
                        {item.note}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Right sidebar inside menu */}
            <div className="lg:col-span-4 space-y-8 bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
              {/* Location & Status */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-400 uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>LOCATION & AVAILABILITY</span>
                </div>
                <p className="text-base text-neutral-200 font-medium">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-xs text-neutral-400 mt-1 font-mono-code">
                  Open for Software Engineering internships & full-time roles
                </p>
              </div>

              {/* Quick Contact & Socials */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
                  DIRECT CHANNELS
                </span>
                <div className="space-y-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center justify-between text-sm text-neutral-300 hover:text-orange-400 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-neutral-400" />
                      <span className="truncate">{PERSONAL_INFO.email}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm text-neutral-300 hover:text-orange-400 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        {link.platform === 'GitHub' && <Github className="w-4 h-4 text-neutral-400" />}
                        {link.platform === 'LinkedIn' && <Linkedin className="w-4 h-4 text-neutral-400" />}
                        {link.platform === 'LeetCode' && <Code2 className="w-4 h-4 text-neutral-400" />}
                        <span>{link.platform}</span>
                      </div>
                      <span className="font-mono-code text-xs text-neutral-500">{link.handle}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Hand-scrawled note */}
              <div className="pt-4 border-t border-white/10">
                <HandwrittenNote color="orange" rotate={-1} className="text-sm">
                  "I like building things that solve actual problems and leave a memorable impression."
                </HandwrittenNote>
              </div>
            </div>
          </div>

          {/* Bottom Footer bar inside Menu */}
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono-code gap-2">
            <span>© 2026 PRATHAMESH LOLE — ALL RIGHTS RESERVED</span>
            <span className="text-neutral-400 uppercase">DESIGNED WITH AN EDITORIAL SCRAPBOOK MINDSET</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
