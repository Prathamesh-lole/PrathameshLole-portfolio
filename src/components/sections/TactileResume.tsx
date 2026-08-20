import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, CheckCircle, GraduationCap, Briefcase, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HandwrittenNote } from '../common/HandwrittenNote';
import { MagneticButton } from '../common/MagneticButton';

interface TactileResumeProps {
  soundEnabled: boolean;
}

export const TactileResume: React.FC<TactileResumeProps> = ({ soundEnabled }) => {
  const handleDownload = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.8 }
      });
    } catch {}

    const link = document.createElement('a');
    link.href = '/Prathamesh_Lole_Resume (2).pdf';
    link.download = 'Prathamesh_Lole_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-300 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Typographic Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1A1A1A] uppercase leading-none">
              MY RESUME.<br />
              <span className="text-orange-600">THE FORMAL VERSION.</span>
            </h2>
          </div>

          <div className="space-y-2">
            <HandwrittenNote rotate={-2} color="orange" className="text-lg">
              "the structured version of everything above" →
            </HandwrittenNote>
            <p className="text-xs font-mono-code text-neutral-500 uppercase tracking-wider">
              PRATHAMESH LOLE // RESUME_2026.PDF
            </p>
          </div>
        </div>

        {/* Tactile Resume Document Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-neutral-300 shadow-2xs hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Quick Snapshot */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-editorial italic text-3xl text-[#1A1A1A]">
                    Prathamesh Lole
                  </h3>
                  <span className="text-xs font-mono-code text-neutral-500 uppercase tracking-wider">
                    B.Tech Computer Science • Software Developer
                  </span>
                </div>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-serif-editorial italic">
                Focused on backend architecture with Java/Spring Boot, real-time distributed pipelines, computer vision systems, and modern React interfaces.
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="space-y-4 pt-2">
              <span className="font-mono-code text-xs text-neutral-400 uppercase tracking-wider block">
                CORE STRENGTHS ON PAPER
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F5F3EE] border border-neutral-300 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono-code text-orange-600">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>BACKEND SYSTEMS</span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Java, Spring Boot, Node.js, REST APIs, Microservices, ACID Transactions & ORM.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F3EE] border border-neutral-300 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono-code text-rose-600">
                    <Award className="w-3.5 h-3.5" />
                    <span>AI & COMPUTER VISION</span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    OpenCV, Dlib facial landmarks, CNNs, LSTMs, TensorFlow & Flask inference.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F3EE] border border-neutral-300 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono-code text-[#2D6A4F]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>DISTRIBUTED & REAL-TIME</span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    WebSockets, Socket.io, WebRTC mesh communication, Docker containerization.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F3EE] border border-neutral-300 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono-code text-amber-700">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>ACADEMIC FOUNDATION</span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Data Structures & Algorithms, OS, Computer Networks, Database Internals.
                  </p>
                </div>
              </div>
            </div>

            {/* Tactile Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <MagneticButton
                onClick={handleDownload}
                variant="primary"
                size="lg"
                soundEnabled={soundEnabled}
                className="flex items-center gap-2.5 shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>SAVE / PRINT RESUME</span>
              </MagneticButton>

              <MagneticButton
                href={`mailto:${PERSONAL_INFO.email}?subject=Requesting%20Resume%20Copy%20-%20Prathamesh%20Lole`}
                variant="pill"
                size="lg"
                soundEnabled={soundEnabled}
                className="flex items-center gap-2"
              >
                <span>REQUEST VIA EMAIL</span>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Visual Sheet Replica Preview */}
          <div className="lg:col-span-5 relative bg-[#F5F3EE] p-6 sm:p-8 rounded-2xl border border-neutral-300 rotate-1 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-300 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono-code text-[11px] text-neutral-500 uppercase">
                PAGE 1 OF 1 // UPDATED 2026
              </span>
            </div>

            {/* Miniature structured text representation */}
            <div className="space-y-4 font-mono-code text-xs text-neutral-700">
              <div>
                <span className="font-bold text-[#1A1A1A] block">EDUCATION</span>
                <p className="text-[11px] text-neutral-600">B.Tech in Computer Science & Engineering • Mumbai</p>
              </div>

              <div>
                <span className="font-bold text-[#1A1A1A] block">KEY PROJECTS</span>
                <p className="text-[11px] text-neutral-600">
                  • Facial Recognition Attendance System (OpenCV, Dlib, Flask)<br />
                  • Real-Time Code Collaboration Tool (React, Socket.io, WebRTC)<br />
                  • Society Complaint Automation ERP (Spring Boot, React, MySQL)
                </p>
              </div>

              <div>
                <span className="font-bold text-[#1A1A1A] block">TECHNICAL SKILLS</span>
                <p className="text-[11px] text-neutral-600">
                  Java, Python, TypeScript, Spring Boot, React, Node.js, OpenCV, MySQL, MongoDB, Docker, Git
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-300">
              <HandwrittenNote rotate={-2} color="orange" className="text-sm">
                "verified & up to date for 2026"
              </HandwrittenNote>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
