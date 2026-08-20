import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Terminal, Code2, Sparkles, CheckCircle2, Github, Linkedin, Mail, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../../data/portfolioData';
import { HandwrittenNote } from '../common/HandwrittenNote';
import { MagneticButton } from '../common/MagneticButton';
import { playTactileClick } from '../../utils/audioSynthesizer';

interface HeroDeskProps {
  soundEnabled: boolean;
  onExploreProjects: () => void;
}

export const HeroDesk: React.FC<HeroDeskProps> = ({ soundEnabled, onExploreProjects }) => {
  const [clickCount, setClickCount] = useState(0);
  const [activeTab, setActiveTab] = useState<'blueprint' | 'specs'>('blueprint');
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [noteMessage, setNoteMessage] = useState("thinking about system architectures & clean code");

  const handleNoteClick = () => {
    playTactileClick(soundEnabled);
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount === 1) setNoteMessage("exploring where code meets curiosity ✨");
    else if (newCount === 2) setNoteMessage("zero compiler warnings, high caffeine 🚀");
    else if (newCount >= 3) setNoteMessage("you unlocked the secret builder spirit 🎉");
  };

  const handleCopySnippet = () => {
    playTactileClick(soundEnabled);
    const code = `const engineer = {\n  name: "Prathamesh Lole",\n  role: "Software Developer",\n  degree: "B.Tech CSE (2026)",\n  location: "Mumbai, India",\n  focus: ["Backend Architecture", "Real-Time Systems", "Applied AI"]\n};`;
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-12 flex flex-col justify-between overflow-hidden bg-[#F5F3EE] text-[#1A1A1A] paper-texture"
    >
      {/* Background Subtle Grid Accent Lines */}
      <div className="absolute inset-0 paper-grid opacity-50 pointer-events-none" />

      {/* Ambient Warm Orange Glow */}
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-orange-100 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-amber-100/50 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      {/* Vertical Edge Badges (Natural Tones editorial stamp) */}
      <div className="hidden 2xl:block absolute bottom-24 left-8 transform rotate-[-90deg] origin-left pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
          Creative Studio — 2026
        </span>
      </div>
      <div className="hidden 2xl:block absolute top-1/2 right-8 transform -translate-y-1/2 rotate-90 origin-right pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
          Scroll to navigate
        </span>
      </div>


      {/* Main 12-Column Natural Tones Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column (4 cols): Interactive Developer Dossier & Code Blueprint (Replaced stock photo) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          
          {/* Tactile Developer Dossier & Code Card */}
          <div className="relative group max-w-sm">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.01 }}
              className="bg-white relative rotate-[-1.5deg] shadow-lg p-4 sm:p-5 border border-neutral-300 rounded-2xl transition-all duration-300"
            >
              {/* Card Header with tabs */}
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  <span className="font-mono-code text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]">
                    DEV_BLUEPRINT.TS
                  </span>
                </div>
                
                <div className="flex items-center gap-1 bg-neutral-100 p-0.5 rounded-lg border border-neutral-200">
                  <button
                    onClick={() => {
                      playTactileClick(soundEnabled);
                      setActiveTab('blueprint');
                    }}
                    className={`px-2.5 py-1 rounded-md text-[9px] font-mono-code transition-all ${
                      activeTab === 'blueprint'
                        ? 'bg-white text-[#1A1A1A] font-bold shadow-xs border border-neutral-200'
                        : 'text-neutral-500 hover:text-black'
                    }`}
                  >
                    CODE
                  </button>
                  <button
                    onClick={() => {
                      playTactileClick(soundEnabled);
                      setActiveTab('specs');
                    }}
                    className={`px-2.5 py-1 rounded-md text-[9px] font-mono-code transition-all ${
                      activeTab === 'specs'
                        ? 'bg-white text-[#1A1A1A] font-bold shadow-xs border border-neutral-200'
                        : 'text-neutral-500 hover:text-black'
                    }`}
                  >
                    SPECS
                  </button>
                </div>
              </div>

              {/* Code Snippet Tab View (White Background) */}
              {activeTab === 'blueprint' ? (
                <div className="relative bg-white border border-neutral-200 text-[#1A1A1A] p-3.5 rounded-xl font-mono-code text-[11px] leading-relaxed overflow-hidden shadow-xs">
                  <div className="text-neutral-400 text-[10px] mb-1 font-sans italic">
                    // Identity & Core Philosophy
                  </div>
                  <div>
                    <span className="text-orange-600 font-semibold">const</span>{' '}
                    <span className="text-indigo-600 font-bold">engineer</span> = &#123;
                  </div>
                  <div className="pl-3 text-neutral-800">
                    name: <span className="text-emerald-700 font-medium">"Prathamesh Lole"</span>,
                  </div>
                  <div className="pl-3 text-neutral-800">
                    degree: <span className="text-emerald-700 font-medium">"B.Tech CSE '26"</span>,
                  </div>
                  <div className="pl-3 text-neutral-800">
                    focus: [<span className="text-amber-700 font-medium">"Backend"</span>, <span className="text-amber-700 font-medium">"Real-Time"</span>, <span className="text-amber-700 font-medium">"AI"</span>],
                  </div>
                  <div className="pl-3 text-neutral-800">
                    status: <span className="text-orange-600 font-medium">"Ready to build"</span>
                  </div>
                  <div>&#125;;</div>

                  {/* Copy snippet button */}
                  <button
                    onClick={handleCopySnippet}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-black border border-neutral-200 transition-colors"
                    title="Copy Code"
                  >
                    {copiedSnippet ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              ) : (
                /* Specs Tab View (White Background) */
                <div className="bg-white border border-neutral-200 p-3.5 rounded-xl space-y-2.5 font-mono-code text-[11px] text-neutral-700 shadow-xs">
                  <div className="flex justify-between border-b border-neutral-100 pb-1.5">
                    <span className="text-neutral-400">CORE SPECIALTY</span>
                    <span className="font-bold text-[#1A1A1A]">Java / Spring & React</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-100 pb-1.5">
                    <span className="text-neutral-400">ARCHITECTURE</span>
                    <span className="font-bold text-orange-600">Microservices & APIs</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-100 pb-1.5">
                    <span className="text-neutral-400">COMMUNICATION</span>
                    <span className="font-bold text-[#1A1A1A]">WebSockets / WebRTC</span>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <span className="text-neutral-400">GRADUATION</span>
                    <span className="font-bold text-emerald-600">Batch of 2026</span>
                  </div>
                </div>
              )}

              {/* Verified Seal Stamp in Burnt Orange */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-orange-600 rounded-full flex items-center gap-1 text-white shadow-md text-[9px] font-bold uppercase tracking-wider select-none">
                <CheckCircle2 className="w-3 h-3" />
                <span>VERIFIED '26</span>
              </div>
            </motion.div>

            {/* Rotated Personal Note */}
            <div
              onClick={handleNoteClick}
              className="mt-5 cursor-pointer transform rotate-[-2deg] hover:rotate-0 transition-transform select-none"
            >
              <p className="font-serif-editorial italic text-xs leading-relaxed text-neutral-600 border-l-2 border-orange-500/50 pl-3.5 bg-white/40 py-1.5 rounded-r-lg">
                "{noteMessage}"
              </p>
              <span className="block mt-1 text-[9px] uppercase font-mono-code text-neutral-400 tracking-wider">
                → click to flip thought (0{clickCount % 4 + 1}/04)
              </span>
            </div>
          </div>

          {/* The Essence Narrative */}
          <div className="space-y-3 pt-1">
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-black border-b border-neutral-300 pb-1.5 inline-block text-[#1A1A1A]">
              The Essence
            </h2>
            <p className="text-base sm:text-lg font-serif-editorial italic text-neutral-700 leading-snug pr-4">
              I build practical applications where code meets curiosity. Based in Mumbai, exploring the intersection of Software Engineering, Backend Architecture and AI.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['React', 'Spring Boot', 'Python', 'TensorFlow', 'TypeScript', 'MySQL'].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] bg-white border border-neutral-300 px-3 py-1 rounded-full uppercase tracking-wider text-neutral-700 font-mono-code shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Center Column (5 cols): Watermark "PL", Giant Typography & Scribble Arrow */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center relative text-center py-4">
          
          {/* Subtle Giant Background Watermark "PL" */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.035] overflow-hidden pointer-events-none select-none">
            <span className="text-[320px] sm:text-[420px] font-black uppercase tracking-tighter leading-none text-black">
              PL
            </span>
          </div>

          <div className="relative text-center">
            {/* Hand-drawn Arrow & "yes, I built this" doodle */}
            <div className="absolute -top-10 sm:-top-14 right-2 sm:-right-8 transform rotate-[10deg] flex flex-col items-center pointer-events-none select-none">
              <span className="text-xs sm:text-sm font-serif-editorial italic font-bold text-orange-600 mb-0.5">
                yes, I built this
              </span>
              <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-600 opacity-70">
                <path d="M2 2C2 2 15 25 58 20M58 20L50 12M58 20L48 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>

            <h1 className="text-[64px] sm:text-[90px] md:text-[105px] lg:text-[110px] font-black tracking-[-0.04em] leading-[0.86] uppercase text-[#1A1A1A]">
              Prathamesh<br />
              <span className="text-[#1A1A1A] hover:text-orange-600 transition-colors">
                Lole
              </span>
            </h1>

            <p className="mt-6 text-xs uppercase tracking-[0.45em] text-neutral-400 font-mono-code">
              Software Developer / Creative Builder
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onExploreProjects}
                className="px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-orange-600 text-white text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Selected Works</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>

              <a
                href="#about"
                className="px-5 py-3 rounded-full border border-neutral-300 bg-white/60 hover:bg-white text-[#1A1A1A] hover:border-orange-500 hover:text-orange-600 text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
              >
                Read Journal
              </a>
            </div>
          </div>

          {/* Scroll to explore indicator */}
          <div className="mt-12 flex flex-col items-center text-[10px] uppercase tracking-widest text-neutral-400 animate-pulse">
            <span>Scroll to explore</span>
            <div className="h-6 w-[1px] bg-neutral-300 mt-2" />
          </div>

        </div>

        {/* Right Column (3 cols): Selected Works Quick List & Social Links */}
        <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end h-full py-4 text-left lg:text-right space-y-8">
          
          <div className="w-full">
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-black mb-6 text-neutral-400">
              Selected Works / 01-06
            </h3>

            <ul className="space-y-5">
              {PROJECTS.slice(0, 4).map((p) => (
                <li
                  key={p.id}
                  onClick={onExploreProjects}
                  className="group cursor-pointer"
                >
                  <span className="block text-[10px] font-mono-code text-neutral-400 mb-0.5">
                    {p.number} / {p.technologies.slice(0, 2).join(' + ')}
                  </span>
                  <span className="text-lg sm:text-xl font-serif-editorial italic text-[#1A1A1A] group-hover:text-orange-600 transition-colors block leading-snug">
                    {p.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Quick Contact Pills */}
          <div className="flex flex-col items-start lg:items-end gap-2 w-full pt-4 border-t border-neutral-200">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono-code text-neutral-400">
              Mumbai, IN / 18:42 IST
            </span>
            <div className="flex gap-2.5 mt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-300 bg-white/50 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all shadow-2xs"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-300 bg-white/50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all font-bold text-[10px] shadow-2xs"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                In
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Collaboration%20Inquiry`}
                className="px-4 h-8 rounded-full border border-neutral-900 bg-neutral-900 hover:bg-orange-600 text-white flex items-center justify-center text-[9px] uppercase tracking-widest font-bold transition-all shadow-2xs"
              >
                Hire Me
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Ticker / Currently Building Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-neutral-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono-code text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <span className="font-bold text-[#1A1A1A] uppercase tracking-wider">CURRENT LAB FOCUS:</span>
          <span>Microservices with Spring Boot, Real-time WebSockets & Applied Vision</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-serif-editorial italic text-neutral-600 text-sm">
            "where code meets curiosity."
          </span>
        </div>
      </div>
    </section>
  );
};
