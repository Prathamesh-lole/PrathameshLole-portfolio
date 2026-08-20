import React from 'react';
import { motion } from 'motion/react';

interface HandwrittenNoteProps {
  children: React.ReactNode;
  variant?: 'sticky' | 'scribble' | 'stamp' | 'arrow' | 'tape';
  className?: string;
  rotate?: number;
  color?: 'amber' | 'orange' | 'clay' | 'rose' | 'emerald' | 'gray' | 'purple' | 'blue';
  arrowDirection?: 'left' | 'right' | 'up' | 'down' | 'curved-down' | 'curved-up';
  interactive?: boolean;
}

export const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({
  children,
  variant = 'scribble',
  className = '',
  rotate = -2,
  color = 'orange',
  arrowDirection,
  interactive = false,
}) => {
  const colorMap = {
    orange: 'text-orange-700 bg-orange-50/95 border-orange-200 shadow-orange-950/5',
    clay: 'text-[#C2410C] bg-[#FFF7ED]/95 border-orange-200/80 shadow-stone-900/5',
    amber: 'text-amber-800 bg-amber-50/90 border-amber-300 shadow-amber-900/5',
    blue: 'text-stone-700 bg-stone-100/90 border-stone-300 shadow-stone-900/5',
    rose: 'text-stone-700 bg-orange-50/90 border-orange-200 shadow-orange-900/5',
    emerald: 'text-[#2D6A4F] bg-[#F0FDF4]/90 border-emerald-300 shadow-emerald-900/5',
    gray: 'text-stone-700 bg-stone-100/90 border-stone-300 shadow-stone-900/5',
    purple: 'text-stone-800 bg-[#F5F3EE] border-stone-300 shadow-stone-900/5',
  };

  const arrowSvg = (
    <svg
      className="inline-block w-4 h-4 ml-1 stroke-current stroke-[2.5] fill-none"
      viewBox="0 0 24 24"
    >
      {arrowDirection === 'curved-down' ? (
        <path d="M4 4c0 8 6 14 14 14m0 0l-5-5m5 5l-5 5" strokeLinecap="round" strokeLinejoin="round" />
      ) : arrowDirection === 'curved-up' ? (
        <path d="M4 20c0-8 6-14 14-14m0 0l-5-5m5 5l-5 5" strokeLinecap="round" strokeLinejoin="round" />
      ) : arrowDirection === 'down' ? (
        <path d="M12 4v16m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
      ) : arrowDirection === 'up' ? (
        <path d="M12 20V4m0 0l-4 4m4-4l4 4" strokeLinecap="round" strokeLinejoin="round" />
      ) : arrowDirection === 'left' ? (
        <path d="M20 12H4m0 0l4-4m-4 4l4 4" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4 12h16m0 0l-4-4m4 4l-4 4" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );

  if (variant === 'stamp') {
    return (
      <motion.span
        style={{ rotate: `${rotate}deg` }}
        whileHover={interactive ? { scale: 1.05, rotate: `${rotate + 2}deg` } : undefined}
        className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono-code font-bold uppercase tracking-wider rounded border border-dashed ${colorMap[color]} select-none shadow-sm ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
        {children}
      </motion.span>
    );
  }

  if (variant === 'sticky') {
    return (
      <motion.div
        style={{ rotate: `${rotate}deg` }}
        whileHover={interactive ? { scale: 1.03, y: -2 } : undefined}
        className={`relative p-3.5 rounded shadow-md border font-hand text-lg leading-snug select-none ${colorMap[color]} ${className}`}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-stone-300/60 rotate-1 border-x border-stone-400/40" />
        {children}
        {arrowDirection && arrowSvg}
      </motion.div>
    );
  }

  if (variant === 'tape') {
    return (
      <span
        style={{ transform: `rotate(${rotate}deg)` }}
        className={`relative inline-block px-3 py-1 font-note text-base bg-amber-100/90 text-amber-950 shadow-sm border-x-2 border-dashed border-amber-300/80 ${className}`}
      >
        {children}
      </span>
    );
  }

  // Default scribble marginalia
  return (
    <motion.span
      style={{ rotate: `${rotate}deg` }}
      whileHover={interactive ? { scale: 1.04 } : undefined}
      className={`inline-flex items-center font-hand text-base sm:text-lg leading-none tracking-wide select-none ${
        color === 'blue'
          ? 'text-blue-600'
          : color === 'rose'
          ? 'text-rose-600'
          : color === 'emerald'
          ? 'text-emerald-700'
          : color === 'purple'
          ? 'text-purple-700'
          : 'text-[#57564F]'
      } ${className}`}
    >
      {children}
      {arrowDirection && arrowSvg}
    </motion.span>
  );
};
