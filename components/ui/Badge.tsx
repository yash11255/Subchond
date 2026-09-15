import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'teal' | 'gray' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  className = '',
}) => {
  const variantStyles = {
    blue: 'bg-[#0071e3]/10 text-[#0071e3] border-[#0071e3]/20',
    teal: 'bg-[#30b0c7]/10 text-[#0284c7] border-[#30b0c7]/30',
    gray: 'bg-[#f5f5f7] text-[#6e6e73] border-[#e5e5ea]',
    outline: 'bg-transparent text-[#6e6e73] border-[#d1d1d6]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wide rounded-full border transition-colors ${variantStyles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {children}
    </span>
  );
};
