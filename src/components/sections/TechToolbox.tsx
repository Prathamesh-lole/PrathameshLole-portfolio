import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Sparkles, Layers, CheckCircle } from 'lucide-react';
import { SKILLS } from '../../data/portfolioData';
import { SkillItem } from '../../types/portfolio';
import { HandwrittenNote } from '../common/HandwrittenNote';
import { playTactileClick } from '../../utils/audioSynthesizer';

interface TechToolboxProps {
  soundEnabled: boolean;
}

export const TechToolbox: React.FC<TechToolboxProps> = ({ soundEnabled }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const categories = ['All', 'Languages', 'Backend', 'Frontend', 'AI / ML', 'Databases', 'DevOps & Tools'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  const handleCategoryClick = (cat: string) => {
    playTactileClick(soundEnabled);
    setActiveCategory(cat);
  };

  return (
    <section id="toolbox" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-300 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1A1A1A] uppercase leading-none">
              TOOLBOX &<br />
              <span className="text-orange-600">ECOSYSTEM.</span>
            </h2>
          </div>

          <div className="space-y-2">
            <HandwrittenNote rotate={-2} color="orange" className="text-lg">
              hover over any technology for honest notes →
            </HandwrittenNote>
            <p className="text-xs font-mono-code text-neutral-500 uppercase tracking-wider">
              NO ARBITRARY PERCENTAGE BARS // PURE ARCHITECTURAL UTILITY
            </p>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono-code transition-all select-none ${
                  isActive
                    ? 'bg-[#1A1A1A] text-white font-bold shadow-xs'
                    : 'bg-white hover:bg-neutral-100 text-neutral-600 border border-neutral-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Contextual Tooltip Callout Box */}
        <div className="min-h-20 p-5 rounded-2xl bg-white border border-neutral-300 shadow-2xs flex items-center justify-between gap-4 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-orange-50 text-orange-600 shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono-code text-[10px] text-neutral-400 block uppercase tracking-wider">
                {hoveredSkill ? `INSIGHT // ${hoveredSkill.name} (${hoveredSkill.experienceLevel})` : 'HOVER OR TAP A TECH BADGE'}
              </span>
              <p className="font-serif-editorial italic text-lg sm:text-xl text-[#1A1A1A] mt-0.5">
                {hoveredSkill ? `"${hoveredSkill.wittyNote}"` : '"every technology in this list has been battle-tested in actual codebases."'}
              </p>
            </div>
          </div>

          {hoveredSkill && (
            <span className="hidden sm:inline-block px-3 py-1 rounded bg-[#F5F3EE] border border-neutral-300 text-xs font-mono-code text-neutral-600 uppercase">
              {hoveredSkill.category}
            </span>
          )}
        </div>

        {/* Interactive Floating Words / Tech Stamps Grid */}
        <motion.div
          layout
          className="flex flex-wrap gap-3.5 sm:gap-4 p-6 sm:p-10 rounded-3xl bg-neutral-100/70 border border-neutral-300 paper-grid"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const isHovered = hoveredSkill?.name === skill.name;
              const isHighlighted = skill.highlight;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, delay: index * 0.02 }}
                  onMouseEnter={() => {
                    setHoveredSkill(skill);
                    playTactileClick(soundEnabled);
                  }}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className={`relative px-4 py-2.5 rounded-xl border text-sm font-mono-code select-none transition-all duration-200 cursor-pointer shadow-2xs ${
                    isHovered
                      ? 'bg-[#1A1A1A] text-white border-neutral-900 shadow-md'
                      : isHighlighted
                      ? 'bg-white text-[#1A1A1A] border-orange-400 font-semibold ring-2 ring-orange-500/10'
                      : 'bg-white/90 text-neutral-700 border-neutral-300 hover:border-[#1A1A1A]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isHighlighted && (
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Editorial Highlight Note */}
        <div className="p-6 rounded-2xl bg-white border border-neutral-300 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs sm:text-sm font-mono-code text-neutral-700">
              <strong>Primary Stack for Heavy Lifting:</strong> Java + Spring Boot, React + TypeScript, Python for AI/Vision, MySQL/MongoDB for storage.
            </span>
          </div>
          <HandwrittenNote rotate={1} color="orange" className="text-sm shrink-0">
            ready for production systems 🚀
          </HandwrittenNote>
        </div>

      </div>
    </section>
  );
};
