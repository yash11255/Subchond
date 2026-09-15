import React from 'react';

interface SectionHeaderProps {
  index: string;
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  badge,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      <div className={`flex items-center gap-2.5 mb-3.5 ${isCenter ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs font-semibold text-[#0071e3] tracking-wider px-2.5 py-0.5 rounded-full bg-[#0071e3]/10">
          {index}
        </span>
        <span className="text-xs font-semibold text-[#6e6e73] tracking-widest uppercase">
          {badge}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-[1.12] mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
