import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, ExternalLink, ShieldCheck, FileText } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { HandwrittenNote } from '../common/HandwrittenNote';

export const CertificationsArchive: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-300 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1A1A1A] uppercase leading-none">
              CERTIFICATION<br />
              <span className="text-orange-600">ARCHIVE.</span>
            </h2>
          </div>

          <div className="space-y-2">
            <HandwrittenNote rotate={-1} color="orange" className="text-lg">
              formal validations of core skills →
            </HandwrittenNote>
            <p className="text-xs font-mono-code text-neutral-500 uppercase tracking-wider">
              DOCUMENT WALL // INDUSTRY CREDENTIALS // VERIFIED EXAMS
            </p>
          </div>
        </div>

        {/* Paper Sheet Document Wall (Grid of angled parchment cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const rot = index % 2 === 0 ? '-1deg' : '1deg';

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ rotate: '0deg', scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl p-6 sm:p-8 border border-neutral-300 shadow-2xs hover:shadow-xl transition-all duration-300 space-y-5"
                style={{ transform: `rotate(${rot})` }}
              >
                {/* Washi tape strip at the top-left */}
                <div className="absolute -top-3 left-8 w-20 h-5 bg-orange-100/80 -rotate-2 border-x border-dashed border-orange-300/80 shadow-2xs" />

                {/* Header: Issuer & Year */}
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-orange-600" />
                    <span className="font-mono-code text-xs font-bold text-neutral-600 uppercase">
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-[#F5F3EE] border border-neutral-300 text-[#1A1A1A] font-bold">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Certificate Title */}
                <div>
                  <h3 className="font-serif-editorial italic text-xl sm:text-2xl text-[#1A1A1A] leading-snug">
                    {cert.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-xs font-mono-code text-neutral-500">
                    <span>CREDENTIAL ID:</span>
                    <span className="font-bold text-[#1A1A1A]">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Verified Skills */}
                <div className="space-y-2">
                  <span className="font-mono-code text-[11px] text-neutral-400 uppercase tracking-wider block">
                    TOPICS & VALIDATIONS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-[#F5F3EE] border border-neutral-300 text-xs font-mono-code text-neutral-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Handwritten Annotation & Link */}
                <div className="pt-3 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
                  <HandwrittenNote rotate={-1} color="orange" className="text-sm">
                    "{cert.annotation}"
                  </HandwrittenNote>
                  
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 hover:text-orange-900 border border-orange-200/80 text-xs font-mono-code font-bold transition-colors flex items-center gap-1.5 shadow-2xs shrink-0"
                    title={`View certificate for ${cert.title}`}
                  >
                    <FileText className="w-3.5 h-3.5 text-orange-600" />
                    <span>VIEW CERTIFICATE</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
