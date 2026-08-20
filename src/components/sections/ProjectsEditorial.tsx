import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Filter, Layers } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { HandwrittenNote } from '../common/HandwrittenNote';
import { MagneticButton } from '../common/MagneticButton';
import { playTactileClick } from '../../utils/audioSynthesizer';

interface ProjectsEditorialProps {
  onSelectProject: (project: Project) => void;
  soundEnabled: boolean;
}

export const ProjectsEditorial: React.FC<ProjectsEditorialProps> = ({
  onSelectProject,
  soundEnabled,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    playTactileClick(soundEnabled);
    setActiveCategory(cat);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-300 bg-[#F5F3EE] paper-texture">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-neutral-300 pb-8">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1A1A1A] uppercase leading-none">
              FEATURED<br />
              <span className="text-orange-600">PROJECTS.</span>
            </h2>
          </div>

          <div className="space-y-3">
            <HandwrittenNote rotate={2} color="amber" className="text-lg">
              click any project for architecture & breakdown →
            </HandwrittenNote>
            <p className="text-xs font-mono-code text-neutral-500 uppercase tracking-wider">
              REAL-WORLD CODEBASES // ZERO MOCK DATA // DETAILED CASE STUDIES
            </p>
          </div>
        </div>

        {/* Category Filters Pill Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono-code transition-all select-none ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white font-bold shadow-xs'
                      : 'bg-white/80 hover:bg-white text-neutral-600 border border-neutral-300'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <span className="font-mono-code text-xs text-neutral-400 uppercase tracking-wider">
            Showing {filteredProjects.length} of {PROJECTS.length} systems
          </span>
        </div>

        {/* Editorial Project Showcase List (Story-driven, expansive rows) */}
        <div className="space-y-12 pt-4">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => {
                  playTactileClick(soundEnabled);
                  onSelectProject(project);
                }}
                data-cursor="project"
                className="group relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-neutral-300 hover:border-orange-500 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Background Accent Pill on Hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-100/60 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Visual Frame */}
                  <div className={`lg:col-span-6 relative ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative overflow-hidden rounded-2xl border border-neutral-300 bg-[#E8E4D8] aspect-[16/10] shadow-2xs group-hover:shadow-md transition-all duration-500">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />

                      {/* Overlaid Project Badge */}
                      <div className="absolute top-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-md text-white font-mono-code text-[10px] px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider">
                        {project.category}
                      </div>

                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[#1A1A1A] font-mono-code text-xs px-3 py-1 rounded-full border border-neutral-300 font-bold">
                        {project.year}
                      </div>
                    </div>

                    {/* Handwritten annotation under image */}
                    <div className="mt-3 flex items-center justify-between px-1">
                      <HandwrittenNote rotate={-1} color="orange" className="text-sm">
                        "{project.annotation}"
                      </HandwrittenNote>
                      <span className="font-mono-code text-[10px] text-neutral-400 uppercase tracking-widest">
                        CLICK FOR ARCHITECTURE ↗
                      </span>
                    </div>
                  </div>

                  {/* Project Narrative & Specs */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    
                    {/* Project Number & Status */}
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                      <span className="font-mono-code text-2xl sm:text-3xl font-black text-neutral-300 group-hover:text-orange-600 transition-colors">
                        {project.number}
                      </span>
                      <span className="font-mono-code text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-[#F5F3EE] border border-neutral-300 text-neutral-600 font-bold">
                        {project.status}
                      </span>
                    </div>

                    {/* Titles with Natural Tones serif touch */}
                    <div className="space-y-1">
                      <h3 className="font-serif-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#F5F3EE] border border-neutral-300 text-[11px] font-mono-code text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-md bg-neutral-100 text-[10px] font-mono-code text-neutral-500">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Bottom Action Row */}
                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-orange-600 group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                        <span>EXPLORE ARCHITECTURE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>

                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2"
                      >
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-neutral-200/70 text-neutral-600 hover:text-[#1A1A1A] transition-colors"
                            title="GitHub Repository"
                            aria-label={`GitHub repo for ${project.title}`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {(project.liveUrl || project.githubUrl) && (
                          <a
                            href={project.liveUrl || project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 hover:text-orange-900 border border-orange-200/80 text-[11px] font-mono-code font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
                            title="Demo / Docs"
                            aria-label={`Demo or documentation for ${project.title}`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Demo / Docs</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="pt-8 text-center">
          <HandwrittenNote rotate={-1} color="orange" className="text-lg">
            "more open-source repositories and experimental repos on GitHub @prathameshlole"
          </HandwrittenNote>
        </div>

      </div>
    </section>
  );
};
