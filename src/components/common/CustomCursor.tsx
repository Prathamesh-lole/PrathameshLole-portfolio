import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

interface CustomCursorProps {
  enabled: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ enabled }) => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'explore' | 'link' | 'play' | 'copy'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring for the outer follower
  const smoothX = useSpring(mouseX, { damping: 28, stiffness: 320 });
  const smoothY = useSpring(mouseY, { damping: 28, stiffness: 320 });

  useEffect(() => {
    // Detect touch-only devices
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');

      if (cursorAttr === 'project') {
        setCursorVariant('project');
        setCursorText('VIEW PROJECT →');
      } else if (cursorAttr === 'explore') {
        setCursorVariant('explore');
        setCursorText('EXPLORE');
      } else if (cursorAttr === 'link') {
        setCursorVariant('link');
        setCursorText('OPEN ↗');
      } else if (cursorAttr === 'play') {
        setCursorVariant('play');
        setCursorText('PLAY 🎵');
      } else if (cursorAttr === 'copy') {
        setCursorVariant('copy');
        setCursorText('CLICK TO COPY');
      } else if (isInteractive) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    if (enabled) {
      document.body.classList.add('custom-cursor-active');
    } else {
      document.body.classList.remove('custom-cursor-active');
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [mouseX, mouseY, isVisible, enabled]);

  if (!enabled || isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision inner center dot */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-[#EA580C] -translate-x-1/2 -translate-y-1/2 shadow-sm"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      {/* Trailing reactive ring / badge */}
      <motion.div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-mono-code font-bold tracking-wider transition-colors duration-200 ${
          cursorVariant === 'default'
            ? 'h-8 w-8 rounded-full border border-[#1A1A1A]/30 bg-white/20 backdrop-blur-[1px]'
            : cursorVariant === 'hover'
            ? 'h-11 w-11 rounded-full border-2 border-[#EA580C] bg-[#EA580C]/10 backdrop-blur-[2px]'
            : 'h-auto min-w-28 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] text-white text-[11px] border border-white/20 shadow-xl'
        }`}
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: cursorVariant === 'default' ? 1 : cursorVariant === 'hover' ? 1.25 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
      >
        {cursorText && (
          <span className="whitespace-nowrap text-[10px] tracking-widest text-[#F6F4EE] uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
