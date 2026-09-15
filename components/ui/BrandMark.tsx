import React from 'react';

interface BrandMarkProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const BrandMark: React.FC<BrandMarkProps> = ({
  className = 'w-[136px]',
  variant = 'light',
}) => {
  const main = variant === 'light' ? '#FFFFFF' : '#071A2B';
  const sub = variant === 'light' ? '#B9D0E2' : '#758DA3';

  return (
    <svg
      viewBox="0 0 220 60"
      role="img"
      aria-label="Subchond Joint Preservation"
      className={`h-auto ${className}`}
    >
      <text
        x="4"
        y="32"
        fill={main}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="34"
        fontWeight="800"
        letterSpacing="0.35"
        textLength="212"
        lengthAdjust="spacingAndGlyphs"
      >
        SUBCHOND
      </text>
      <text
        x="4"
        y="53"
        fill={sub}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="12"
        fontWeight="700"
        letterSpacing="2.1"
        textLength="212"
        lengthAdjust="spacing"
      >
        JOINT PRESERVATION
      </text>
    </svg>
  );
};
