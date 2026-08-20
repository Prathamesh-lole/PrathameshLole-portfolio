import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Code2, Cpu, Sparkles, BookOpen, Compass, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HandwrittenNote } from '../common/HandwrittenNote';

export const AboutEditorial: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-300 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1A1A1A] uppercase leading-none">
              WHO IS<br />
              <span className="text-orange-600">PRATHAMESH?</span>
            </h2>
          </div>

          <div className="space-y-1">
            <HandwrittenNote rotate={-2} color="orange" className="text-lg">
              an engineer who loves solving hard problems →
            </HandwrittenNote>
            <p className="text-xs font-mono-code text-neutral-500 uppercase tracking-wider">
              MUMBAI // B.TECH COMPUTER SCIENCE // SOFTWARE DEV
            </p>
          </div>
        </div>

        {/* Two-Column Editorial Narrative & Persona Polaroid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Persona Polaroid with Tape & Margin Notes */}
          <div className="lg:col-span-5 relative space-y-6">
            <div className="relative bg-white p-5 pb-10 rounded-2xl shadow-md border border-neutral-300 rotate-[-1.5deg] max-w-md mx-auto lg:mx-0">
              {/* Top Washi Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-orange-100/80 -rotate-1 border-x border-dashed border-orange-300/80 shadow-2xs" />

              {/* Photo Frame */}
              <div className="relative overflow-hidden rounded-xl aspect-square bg-[#E8E4D8]">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt="Prathamesh Lole"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono-code px-2.5 py-1 rounded uppercase tracking-wider">
                  PRATHAMESH LOLE // 2026
                </div>
              </div>

              {/* Handwritten notes underneath */}
              <div className="mt-4 space-y-1 px-1">
                <span className="font-hand text-xl text-[#1A1A1A] block">
                  "code is just thought made executable."
                </span>
                <span className="font-mono-code text-xs text-neutral-400 block uppercase tracking-wider">
                  CS Student • System Architect • Builder
                </span>
              </div>
            </div>

            {/* Quick Education Card */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-300 shadow-2xs space-y-3 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#1A1A1A]">
                    B.Tech in Computer Science & Engineering
                  </h4>
                  <span className="text-xs font-mono-code text-neutral-500">
                    Expected 2026 • Mumbai, India
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Core coursework: Data Structures & Algorithms, Object-Oriented Analysis, Database Management Systems, Computer Networks, Operating Systems, Machine Learning.
              </p>
            </div>
          </div>

          {/* Right Column: Progressive Long-form Editorial Story */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Story Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-neutral-800 leading-relaxed font-serif-editorial italic">
              <p>
                My fascination with software didn't begin with enterprise blueprints; it began with the simple, electric curiosity of discovering how a few lines of logic could coordinate machines, process video frames in real time, and bring ideas to life on a screen.
              </p>

              <p>
                As a Computer Science student, I don't confine myself to textbook syntax. I love diving into the gears—learning why <span className="font-semibold text-[#1A1A1A] bg-amber-100/80 px-1.5 py-0.5 rounded not-italic">relational databases optimize query execution plans</span>, how <span className="font-semibold text-[#1A1A1A] bg-orange-100/80 px-1.5 py-0.5 rounded not-italic">computer vision extracts facial landmark embeddings</span>, and how <span className="font-semibold text-[#1A1A1A] bg-emerald-100/80 px-1.5 py-0.5 rounded not-italic">WebSocket pipelines synchronize multi-cursor states</span> without race conditions.
              </p>

              <p>
                I believe great software is a blend of uncompromising engineering discipline and human empathy. Clean APIs, zero-warning builds, and interfaces that feel effortless to touch.
              </p>
            </div>

            {/* Core Pillars / Mindset Grid */}
            <div className="pt-4 border-t border-neutral-300 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-code text-xs text-neutral-500 uppercase tracking-wider">
                  ENGINEERING PHILOSOPHIES
                </span>
                <HandwrittenNote rotate={2} color="emerald" className="text-sm">
                  my daily standard 📌
                </HandwrittenNote>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-neutral-300 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-orange-600">
                    <Code2 className="w-4 h-4" />
                    <span className="font-display font-bold text-sm text-[#1A1A1A]">
                      Crafted, Not Generated
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Writing intentional, well-typed code with clear domain boundaries rather than piling up unmaintainable boilerplates.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-300 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600">
                    <Cpu className="w-4 h-4" />
                    <span className="font-display font-bold text-sm text-[#1A1A1A]">
                      Systems Over Hype
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Mastering core principles—concurrency, network protocols, caching strategies, and data structures—before chasing fleeting trends.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-300 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700">
                    <Compass className="w-4 h-4" />
                    <span className="font-display font-bold text-sm text-[#1A1A1A]">
                      Relentless Curiosity
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Continuously asking "why did this work?" and "how will this behave under 10,000 concurrent requests?".
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-300 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-[#2D6A4F]">
                    <Heart className="w-4 h-4" />
                    <span className="font-display font-bold text-sm text-[#1A1A1A]">
                      User-First Outcomes
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Building tools that solve tangible problems for human beings—from automated residential complaints to campus book exchanges.
                  </p>
                </div>
              </div>
            </div>

            {/* Handwritten marginal note */}
            <div className="pt-2">
              <HandwrittenNote rotate={-1} color="orange" className="text-base">
                "always happy to collaborate on open-source, hackathons, and innovative products."
              </HandwrittenNote>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
