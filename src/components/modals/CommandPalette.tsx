import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Terminal, ArrowRight, Sparkles, Volume2, Code, Mail, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Actions' | 'Social' | 'Easter Eggs';
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  soundEnabled,
  onToggleSound,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open via parent
          const btn = document.querySelector('[data-action="open-palette"]');
          if (btn) (btn as HTMLButtonElement).click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'nav-desk',
      category: 'Navigation',
      title: 'Go to Workspace Desk',
      subtitle: 'Starting editorial hero & scrapbook desk',
      icon: <Terminal className="w-4 h-4 text-orange-600" />,
      action: () => onNavigate('desk'),
    },
    {
      id: 'nav-about',
      category: 'Navigation',
      title: 'Who is Prathamesh? (About)',
      subtitle: 'Background, B.Tech CS, philosophies & mindset',
      icon: <Terminal className="w-4 h-4 text-orange-600" />,
      action: () => onNavigate('about'),
    },
    {
      id: 'nav-work',
      category: 'Navigation',
      title: 'View Projects & Case Studies',
      subtitle: 'Facial recognition, AI captioning, real-time collab & more',
      icon: <Code className="w-4 h-4 text-[#2D6A4F]" />,
      action: () => onNavigate('projects'),
    },
    {
      id: 'nav-toolbox',
      category: 'Navigation',
      title: 'Explore Tech Toolbox & Ecosystem',
      subtitle: 'Languages, frameworks, databases, and candid notes',
      icon: <Terminal className="w-4 h-4 text-amber-600" />,
      action: () => onNavigate('toolbox'),
    },
    {
      id: 'nav-journey',
      category: 'Navigation',
      title: 'The Journey So Far (2023 - 2026)',
      subtitle: 'Timeline milestones, turning points & code evolution',
      icon: <Terminal className="w-4 h-4 text-rose-600" />,
      action: () => onNavigate('journey'),
    },
    {
      id: 'nav-certifications',
      category: 'Navigation',
      title: 'View Certifications Archive',
      subtitle: 'Verified credentials & exams',
      icon: <Terminal className="w-4 h-4 text-orange-600" />,
      action: () => onNavigate('certifications'),
    },
    {
      id: 'nav-resume',
      category: 'Navigation',
      title: 'View Formal Resume',
      subtitle: 'Structured dossier and competencies',
      icon: <Terminal className="w-4 h-4 text-orange-600" />,
      action: () => onNavigate('resume'),
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      title: 'Contact / Let’s Build Something',
      subtitle: 'Direct email, form & social channels',
      icon: <Mail className="w-4 h-4 text-orange-600" />,
      action: () => onNavigate('contact'),
    },

    // Actions & Easter Eggs
    {
      id: 'act-confetti',
      category: 'Easter Eggs',
      title: 'Launch Celebration Confetti 🎊',
      subtitle: 'Burst digital fireworks across the screen',
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      action: () => {
        try {
          confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 } });
        } catch {}
      },
    },
    {
      id: 'act-sound',
      category: 'Actions',
      title: soundEnabled ? 'Mute Interface Sound FX' : 'Enable Interface Sound FX',
      subtitle: 'Subtle tactile clicks and Web Audio oscillators',
      icon: <Volume2 className="w-4 h-4 text-orange-600" />,
      action: onToggleSound,
    },
    {
      id: 'act-email',
      category: 'Actions',
      title: `Copy Email (${PERSONAL_INFO.email})`,
      subtitle: 'Copy direct email address to clipboard',
      icon: <Mail className="w-4 h-4 text-[#2D6A4F]" />,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        try {
          confetti({ particleCount: 30, spread: 50 });
        } catch {}
      },
    },
    {
      id: 'soc-github',
      category: 'Social',
      title: 'Open GitHub Profile',
      subtitle: '@prathameshlole repositories & experiments',
      icon: <ExternalLink className="w-4 h-4 text-neutral-400" />,
      action: () => window.open('https://github.com/prathameshlole', '_blank'),
    },
    {
      id: 'soc-linkedin',
      category: 'Social',
      title: 'Open LinkedIn Profile',
      subtitle: 'Connect with Prathamesh Lole',
      icon: <ExternalLink className="w-4 h-4 text-orange-600" />,
      action: () => window.open('https://linkedin.com/in/prathamesh-lole', '_blank'),
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd: CommandItem) => {
    cmd.action();
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        handleSelect(filteredCommands[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-start justify-center p-4 sm:p-6 md:p-20 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A1A]/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-2xl bg-[#1A1A1A] text-[#F5F3EE] rounded-2xl shadow-2xl border border-neutral-700 overflow-hidden z-10"
        >
          {/* Input Header */}
          <div className="p-4 border-b border-neutral-700/80 flex items-center gap-3">
            <Search className="w-5 h-5 text-neutral-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command or jump to section (e.g. 'work', 'sound', 'confetti')..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-neutral-500 focus:outline-none font-sans"
            />
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono-code bg-neutral-800 text-neutral-400 rounded border border-neutral-700">
              ESC
            </kbd>
          </div>

          {/* Command List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredCommands.length === 0 ? (
              <div className="p-6 text-center text-neutral-400 text-xs font-mono-code">
                No matching commands found for "{query}".
              </div>
            ) : (
              filteredCommands.map((cmd, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelect(cmd)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors text-left ${
                      isSelected
                        ? 'bg-orange-600/20 border border-orange-500/40 text-white'
                        : 'hover:bg-neutral-800/60 text-neutral-300 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-neutral-800 border border-neutral-700">
                        {cmd.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          <span>{cmd.title}</span>
                          <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400">
                            {cmd.category}
                          </span>
                        </div>
                        <div className="text-xs text-neutral-400 mt-0.5">
                          {cmd.subtitle}
                        </div>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-orange-400 translate-x-1' : 'text-neutral-600'
                      }`}
                    />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 py-2.5 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono-code text-neutral-500">
            <div className="flex items-center gap-3">
              <span>↑↓ to navigate</span>
              <span>↵ to select</span>
            </div>
            <span className="text-orange-400 font-serif-editorial italic text-sm">
              developer command palette
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
