'use client';

import React from 'react';
import Image from 'next/image';
import {
  Upload,
  ArrowRight,
  Layers,
  Bone,
  Moon,
  Flame,
  Scale,
  Lightbulb,
  FileSearch,
  Share2,
  Compass,
} from 'lucide-react';

const CALLOUTS = [
  {
    title: 'Cartilage wear',
    body: 'Cartilage can thin and become irregular in OA, reducing the cushioning surface.',
    side: 'left' as const,
    top: '20%',
    dot: { top: '30%', left: '38%' },
  },
  {
    title: 'Meniscal changes',
    body: 'The meniscus may degenerate or fray, which can affect stability and load distribution.',
    side: 'left' as const,
    top: '52%',
    dot: { top: '58%', left: '35%' },
  },
  {
    title: 'Synovial inflammation',
    body: 'The synovium can become inflamed, which may contribute to pain, swelling and stiffness.',
    side: 'right' as const,
    top: '14%',
    dot: { top: '26%', left: '68%' },
  },
  {
    title: 'Narrowed joint space',
    body: 'As cartilage wears, the space between bones can narrow.',
    side: 'right' as const,
    top: '44%',
    dot: { top: '50%', left: '62%' },
  },
  {
    title: 'Subchondral bone',
    body: 'The bone beneath cartilage may undergo changes, including increased stiffness and bone remodelling.',
    side: 'right' as const,
    top: '72%',
    dot: { top: '70%', left: '42%' },
  },
];

const STRUCTURES = [
  { icon: Layers, title: 'Cartilage', body: 'Can thin, soften or become irregular, affecting the smooth gliding surface.' },
  { icon: Bone, title: 'Subchondral bone', body: 'May become thicker, stiffer and more active in OA.' },
  { icon: Moon, title: 'Meniscus', body: 'Can degenerate or tear, impacting stability and shock absorption.' },
  { icon: Flame, title: 'Inflammation', body: 'The synovium may become inflamed, contributing to pain and swelling.' },
  { icon: Scale, title: 'Alignment / load', body: 'How load is distributed across the knee can influence symptoms and progression.' },
];

const BENEFITS = [
  { icon: Lightbulb, title: 'Clarify the pain story', body: 'Bring together the different factors that may be contributing to your symptoms.' },
  { icon: FileSearch, title: 'See more than the X-ray', body: 'Look beyond a single image to get a fuller picture of your knee health.' },
  { icon: Share2, title: 'Match options to the joint', body: 'A more complete understanding helps identify the most appropriate next steps.' },
  { icon: Compass, title: 'Make a better decision', body: 'Feel more informed and confident about your knee care journey.' },
];

export const KneePainDrivers: React.FC = () => {
  return (
    <section
      id="knee-pain-drivers"
      className="relative overflow-hidden border-t border-black/[0.08] bg-[#f8f7f4] px-4 py-20 text-[#111827] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl space-y-16">
        {/* Header */}
        <div className="max-w-2xl space-y-5">
          <div className="reference-kicker">
            <span>Understanding your pain</span>
            <span className="reference-kicker-index">03</span>
          </div>

          <h2 className="text-section-headline font-light tracking-tight text-[#111827]">
            Understand what may be driving{' '}
            <span className="reference-title-muted">your knee pain</span>
          </h2>

          <p className="text-editorial-body text-[#4B5563]">
            OA is a whole-joint condition. Symptoms can involve cartilage, subchondral bone,
            meniscus, synovium, movement mechanics and load distribution.
          </p>
          <p className="text-sm text-[#667085] sm:text-base">
            Understanding the knee more completely helps guide the right next step.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href="#assessment"
              className="flex items-center justify-center gap-2 rounded-full bg-[#3BA7A0] px-7 py-3.5 text-xs font-semibold tracking-wider text-[#04201d] transition-all hover:bg-[#2f8f89]"
            >
              <Upload className="h-4 w-4" />
              <span>UPLOAD MRI / X-RAY</span>
            </a>
            <a
              href="#assessment"
              className="flex items-center justify-center gap-2 rounded-full border border-black/[0.15] px-7 py-3.5 text-xs font-semibold tracking-wider text-[#111827] transition-all hover:bg-black/[0.04]"
            >
              <span>GET MY KNEE ASSESSED</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Diagram with callouts */}
        <div className="mx-auto w-full max-w-4xl">
          <div className="relative aspect-square sm:aspect-[16/10] w-full">
            <div className="absolute inset-x-[18%] inset-y-0 overflow-hidden rounded-[2rem] shadow-[0_18px_42px_rgba(10,30,44,0.12)]">
              <Image
                src="/images/knee-anatomy.png"
                alt="Knee anatomy diagram showing structures that may contribute to osteoarthritis pain"
                fill
                sizes="(max-width: 1024px) 60vw, 40rem"
                className="object-cover"
              />
            </div>

            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
              {CALLOUTS.map((c) => (
                <line
                  key={c.title}
                  x1={parseFloat(c.dot.left)}
                  y1={parseFloat(c.dot.top)}
                  x2={c.side === 'left' ? 24 : 76}
                  y2={parseFloat(c.top) + 4}
                  stroke="#111827"
                  strokeOpacity={0.35}
                  strokeWidth={0.25}
                />
              ))}
            </svg>
            {CALLOUTS.map((c) => (
              <span
                key={c.title}
                style={{ top: c.dot.top, left: c.dot.left }}
                className="absolute size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_2px_rgba(17,24,39,0.35)]"
              />
            ))}

            {CALLOUTS.filter((c) => c.side === 'left').map((c) => (
              <div
                key={c.title}
                style={{ top: c.top }}
                className="absolute left-0 hidden w-56 -translate-y-1/2 rounded-xl border border-black/[0.08] bg-white p-3.5 shadow-[0_10px_28px_rgba(10,30,44,0.08)] lg:block"
              >
                <p className="text-sm font-semibold text-[#111827]">{c.title}</p>
                <p className="mt-1 text-xs leading-snug text-[#667085]">{c.body}</p>
              </div>
            ))}
            {CALLOUTS.filter((c) => c.side === 'right').map((c) => (
              <div
                key={c.title}
                style={{ top: c.top }}
                className="absolute right-0 hidden w-56 -translate-y-1/2 rounded-xl border border-black/[0.08] bg-white p-3.5 shadow-[0_10px_28px_rgba(10,30,44,0.08)] lg:block"
              >
                <p className="text-sm font-semibold text-[#111827]">{c.title}</p>
                <p className="mt-1 text-xs leading-snug text-[#667085]">{c.body}</p>
              </div>
            ))}
          </div>

          {/* Compact list for narrower screens where the floating cards are hidden */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
            {CALLOUTS.map((c) => (
              <div key={c.title} className="rounded-xl border border-black/[0.08] bg-white p-3.5">
                <p className="text-sm font-semibold text-[#111827]">{c.title}</p>
                <p className="mt-1 text-xs leading-snug text-[#667085]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Structures row */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-black/[0.08] pt-10 sm:grid-cols-3 lg:grid-cols-5">
          {STRUCTURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col items-start gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-[#F7F8FA] text-[#0071E3]">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <p className="text-sm font-semibold text-[#111827]">{title}</p>
              <p className="text-xs leading-relaxed text-[#667085]">{body}</p>
            </div>
          ))}
        </div>

        {/* Benefits row */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 border-t border-black/[0.08] pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col items-start gap-3">
              <span className="grid size-11 place-items-center rounded-full border border-black/[0.12] text-[#0071E3]">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <p className="text-sm font-semibold text-[#111827]">{title}</p>
              <p className="text-xs leading-relaxed text-[#667085]">{body}</p>
            </div>
          ))}

          <p className="reference-title-muted col-span-full mt-2 text-right text-lg">
            Knowledge moves you forward.
          </p>
        </div>
      </div>
    </section>
  );
};
