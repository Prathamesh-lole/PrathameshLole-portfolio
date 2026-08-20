import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenMenu: () => void;
  isMenuOpen: boolean;
  onOpenCommandPalette?: () => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  isMenuOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#F5F3EE]/90 backdrop-blur-md border-b border-neutral-200/90 shadow-2xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand signature */}
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="group flex flex-col focus:outline-none"
            aria-label="Prathamesh Lole Homepage"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A1A1A] group-hover:text-orange-600 transition-colors">
              Prathamesh / Lole
            </span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-0.5">
              B.Tech CSE — 2026
            </span>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
          <a href="#about" className="hover:text-black cursor-pointer transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-black cursor-pointer transition-colors">
            Work
          </a>
          <a href="#toolbox" className="hover:text-black cursor-pointer transition-colors">
            Toolbox
          </a>
          <a href="#journey" className="hover:text-black cursor-pointer transition-colors">
            Journal
          </a>
          <a href="#certifications" className="hover:text-black cursor-pointer transition-colors">
            Certs
          </a>
          <a href="#resume" className="hover:text-black cursor-pointer transition-colors">
            Resume
          </a>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Menu Pill Button */}
          <button
            onClick={onOpenMenu}
            className="border border-neutral-300 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold bg-white/50 cursor-pointer hover:bg-neutral-900 hover:text-white transition-all flex items-center gap-2 shadow-2xs"
            aria-label="Toggle Navigation Menu"
          >
            <span>{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
            <div className="w-3 h-3 flex flex-col justify-center gap-0.5 items-end">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'w-3 rotate-45 translate-y-1' : 'w-3'
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'w-3 -rotate-45 -translate-y-0.5' : 'w-2'
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
