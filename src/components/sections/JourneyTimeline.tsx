import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Milestone, Compass, CheckCircle2 } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../../data/portfolioData';
import { HandwrittenNote } from '../common/HandwrittenNote';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-300 bg-[#F5F3EE] paper-texture">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1A1A1A] uppercase leading-none">
              THE JOURNEY<br />
              <span className="text-orange-600">SO FAR.</span>
            </h2>
          </div>

          <div className="space-y-2">
            <HandwrittenNote rotate={2} color="orange" className="text-lg">
              and this is only the beginning... →
            </HandwrittenNote>
            <p className="text-xs font-mono-code text-neutral-500 uppercase tracking-wider">
              EVOLUTION FROM STUDENT EXPLORER TO PRODUCTION ENGINEER
            </p>
          </div>
        </div>

        {/* Vertical Timeline Scrapbook Path */}
        <div className="relative border-l-2 border-dashed border-neutral-300 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 md:pl-14 space-y-16">
          
          {JOURNEY_MILESTONES.map((milestone, index) => {
            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Node pin marker on timeline line */}
                <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[63px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-150 transition-transform" />
                </div>

                {/* Milestone Container Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-neutral-300 hover:border-orange-500 shadow-2xs hover:shadow-md transition-all space-y-6">
                  
                  {/* Top row: Year & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-3xl sm:text-4xl font-black text-[#1A1A1A]">
                        {milestone.year}
                      </span>
                      {milestone.badge && (
                        <span className="px-3 py-1 rounded-full bg-[#F5F3EE] border border-neutral-300 font-mono-code text-xs font-bold text-neutral-600">
                          {milestone.badge}
                        </span>
                      )}
                    </div>

                    <HandwrittenNote rotate={-1} color="orange" className="text-base">
                      {milestone.handwrittenNote}
                    </HandwrittenNote>
                  </div>

                  {/* Title & Subtitle with Natural Tones serif */}
                  <div className="space-y-1">
                    <h3 className="font-serif-editorial italic text-2xl sm:text-3xl text-[#1A1A1A]">
                      {milestone.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-neutral-600">
                      {milestone.subtitle}
                    </p>
                  </div>

                  {/* Description Narrative */}
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Quote Banner */}
                  {milestone.quote && (
                    <div className="p-4 rounded-xl bg-[#F5F3EE] border-l-4 border-orange-500 text-sm text-neutral-800 font-serif-editorial italic">
                      "{milestone.quote}"
                    </div>
                  )}

                  {/* Tags Pill Row */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#F5F3EE] border border-neutral-300 text-xs font-mono-code text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
