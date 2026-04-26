import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  fullWidth = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl';

  const variants = {
    primary:
      'bg-[#1B3A6B] text-white hover:bg-[#15305a] hover:shadow-lg hover:shadow-[#1B3A6B]/25 hover:-translate-y-0.5 focus:ring-[#1B3A6B] border border-transparent active:translate-y-0',
    outline:
      'bg-transparent border-2 border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white hover:shadow-lg hover:shadow-[#1B3A6B]/20 hover:-translate-y-0.5 focus:ring-[#1B3A6B] active:translate-y-0',
    ghost:
      'bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover:border-white/60 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5 focus:ring-white active:translate-y-0',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
