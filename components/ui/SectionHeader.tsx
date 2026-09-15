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
    <div className={`mb-12 md:mb-16 ${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <div className={`reference-kicker mb-5 ${isCenter ? 'justify-center' : ''}`}>
        <span>{badge}</span>
        <span className="reference-kicker-index">{index}</span>
      </div>

      <h2 className="text-section-headline mb-4 text-[#111827]">
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
