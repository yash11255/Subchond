'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Info } from 'lucide-react';

const DIAGRAM_LABELS = [
  { label: 'Femur', top: '9%', left: '46%', lineTo: { top: '16%', left: '50%' } },
  { label: 'Cartilage', top: '34%', left: '18%', lineTo: { top: '34%', left: '42%' } },
  { label: 'Meniscus', top: '58%', left: '78%', lineTo: { top: '56%', left: '63%' } },
  { label: 'Subchondral bone', top: '78%', left: '20%', lineTo: { top: '70%', left: '40%' } },
];

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#071A2B] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/3 size-96 rounded-full bg-[#0071E3]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left: why it matters + CTA */}
        <div className="space-y-8">
          <div className="reference-kicker text-[#60a5fa]">
            <span>Final assessment</span>
            <span className="reference-kicker-index text-white/40">07</span>
          </div>

          <h2 className="text-section-headline font-light tracking-tight text-white">
            Take the next step <br />
            for <span className="reference-title-muted !text-[#60a5fa] !not-italic">your knee.</span>
          </h2>

          <div className="max-w-xl space-y-4 text-white/70">
            <p className="text-editorial-body !text-white/70">
              Osteoarthritis can involve more than cartilage. Pain and stiffness may relate to
              cartilage wear, subchondral bone changes, meniscus degeneration, inflammation,
              alignment and load. A careful assessment helps identify which structures may be
              contributing, and what treatment options may be appropriate.
            </p>
          </div>

          <a
            href="#assessment"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0071E3] px-9 py-4 text-xs font-semibold tracking-wider text-white shadow-xl shadow-[#0071E3]/30 transition-all hover:bg-[#0055B3] sm:w-fit"
          >
            <span>GET MY KNEE ASSESSED</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <p className="flex items-start gap-2 text-xs leading-relaxed text-white/50">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Assessment does not mean a procedure is indicated.
          </p>
        </div>

        {/* Right: labeled anatomy diagram */}
        <div className="relative mx-auto aspect-square w-full max-w-lg">
          <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/images/knee-anatomy.png"
              alt="Labeled knee anatomy diagram showing the femur, cartilage, meniscus, and subchondral bone"
              fill
              sizes="(max-width: 1024px) 80vw, 32rem"
              className="object-cover"
            />
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {DIAGRAM_LABELS.map(({ label, top, left, lineTo }) => (
                <line
                  key={label}
                  x1={parseFloat(left)}
                  y1={parseFloat(top)}
                  x2={parseFloat(lineTo.left)}
                  y2={parseFloat(lineTo.top)}
                  stroke="white"
                  strokeOpacity={0.6}
                  strokeWidth={0.3}
                />
              ))}
            </svg>

            {DIAGRAM_LABELS.map(({ label, top, left }) => (
              <span
                key={label}
                style={{ top, left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#071A2B]/80 px-2.5 py-1 text-[0.65rem] font-medium text-white backdrop-blur-sm"
              >
                {label}
              </span>
            ))}
          </div>

          <p className="reference-title-muted !mt-4 text-right text-base !text-white/60">
            Informed decisions. Brighter tomorrows.
          </p>
        </div>
      </div>
    </section>
  );
};
