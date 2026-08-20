import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const SECTIONS = [
  { id: 'desk', label: 'Desk' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'toolbox', label: 'Toolbox' },
  { id: 'journey', label: 'Journey' },
  { id: 'certifications', label: 'Certs' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('desk');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scroll);

      // Determine active section
      const scrollPosition = window.scrollY + 250;
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro progress line */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[80] pointer-events-none">
        <motion.div
          className="h-full bg-[#EA580C]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating vertical quick-jump pill (visible on md+ screens) */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2.5 pointer-events-auto">
        <div className="bg-[#F5F3EE]/90 backdrop-blur-md border border-neutral-300 p-2 rounded-full shadow-md flex flex-col items-center gap-2">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className="group relative flex items-center justify-center p-1 focus:outline-none"
                title={sec.label}
                aria-label={`Jump to ${sec.label}`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2.5 h-6 bg-[#EA580C]'
                      : 'w-2 h-2 bg-neutral-400 group-hover:bg-[#1A1A1A] group-hover:scale-125'
                  }`}
                />
                <span className="absolute right-7 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#1A1A1A] text-[#F5F3EE] text-[11px] font-mono-code px-2 py-0.5 rounded shadow whitespace-nowrap">
                  {sec.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
