import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200);
          return 100;
        }
        return prev + 25;
      });
    }, 180);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onComplete}
      className="fixed inset-0 z-[200] bg-[#1A1A1A] text-[#F5F3EE] flex flex-col items-center justify-center p-6 select-none cursor-pointer"
    >
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* Name Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-1"
        >
          <span className="font-mono-code text-[11px] text-neutral-400 uppercase tracking-widest block">
            PORTFOLIO // DIGITAL SCRAPBOOK
          </span>
          <h1 className="font-serif-editorial italic text-3xl sm:text-4xl text-white">
            Prathamesh Lole
          </h1>
        </motion.div>

        {/* Loading message & handwritten annotation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-center gap-2 font-serif-editorial italic text-xl text-orange-400">
            <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
            <span>"crafting thoughtful software..."</span>
          </div>

          {/* Minimal Progress Bar */}
          <div className="w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-orange-500"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* Skip hint */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4 }}
          className="font-mono-code text-[10px] text-neutral-400 block uppercase tracking-wider"
        >
          CLICK TO SKIP INTRO →
        </motion.span>

      </div>
    </motion.div>
  );
};
