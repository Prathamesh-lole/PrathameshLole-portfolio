import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { playTactileClick } from '../../utils/audioSynthesizer';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'pill' | 'ghost';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  dataCursor?: string;
  soundEnabled?: boolean;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  size = 'md',
  dataCursor,
  soundEnabled = true,
  target,
  rel,
  disabled = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.22, y: middleY * 0.22 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = () => {
    if (disabled) return;
    playTactileClick(soundEnabled);
    if (onClick) onClick();
  };

  const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-colors select-none text-center cursor-pointer';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const variantStyles = {
    primary: 'bg-[#1A1A1A] text-[#F5F3EE] hover:bg-[#EA580C] rounded-full border border-neutral-900 shadow-sm transition-all',
    secondary: 'bg-[#EAE6DD] text-[#1A1A1A] hover:bg-[#E0DBD0] rounded-full border border-neutral-300',
    outline: 'bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F3EE] rounded-full border border-neutral-800',
    pill: 'bg-white/80 text-[#1A1A1A] hover:border-orange-500 hover:text-orange-600 rounded-full border border-neutral-300 shadow-2xs',
    ghost: 'bg-transparent text-[#1A1A1A] hover:bg-neutral-900/5 rounded-lg',
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20, mass: 0.5 }}
      whileTap={{ scale: 0.96 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`}
      data-cursor={dataCursor}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return content;
};
