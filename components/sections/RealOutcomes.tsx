'use client';

import React from 'react';
import Image from 'next/image';
import {
  TrendingDown,
  Footprints,
  Dumbbell,
  CalendarClock,
  Video,
} from 'lucide-react';

const VALUE_BADGES = [
  { icon: TrendingDown, label: 'Less Pain' },
  { icon: Footprints, label: 'Better Function' },
  { icon: Dumbbell, label: 'More Active Life' },
  { icon: CalendarClock, label: 'Longer Benefit' },
];

// No real patient-story footage exists yet for this section, and stock
// searches for these four activities kept surfacing either irrelevant
// results or real, identifiable people from unrelated contexts (e.g. named
// attendees at a specific charity golf tournament) — worse to use here than
// an empty slot. These render as clearly marked pending slots; swap in
// real, consented patient material before this goes live. See
// subchond-project-scope memory and public/images/SOURCES.md.
const PATIENT_STORIES = ['Back to Walking', 'Back to the Gym', 'Back to Cycling', 'Back to Golf'];

const CLOSING_BADGES = [
  { icon: TrendingDown, title: 'Less Pain', subtitle: 'Move freely' },
  { icon: Footprints, title: 'Better Function', subtitle: 'Do more' },
  { icon: CalendarClock, title: 'Longer Active Life', subtitle: 'Stay independent' },
];

export const RealOutcomes: React.FC = () => {
  return (
    <section
      id="real-outcomes"
      className="relative overflow-hidden border-t border-white/10 bg-[#071A2B] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl space-y-10">
        <div className="grid gap-14 lg:grid-cols-1">
          <div className="max-w-2xl space-y-6">
            <div className="reference-kicker text-[#60a5fa]">
              <span>Real outcomes</span>
              <span className="reference-kicker-index text-white/40">04</span>
            </div>

            <h2 className="text-section-headline font-light tracking-tight text-white">
              Real Patients. <br />
              <span className="reference-title-muted !text-white/70 !not-italic">Real Outcomes.</span>
            </h2>

            <p className="text-editorial-body !text-white/70">
              Less pain. Better function. A more active life.
            </p>

            <p className="text-sm text-white/60 sm:text-base">
              By treating the whole joint, including the subchondral bone, we aim for
              meaningful, lasting improvement.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {VALUE_BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <span className="grid size-12 place-items-center rounded-full bg-white/[0.06] text-[#60a5fa]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="text-xs font-medium text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual: CC0 stock photo, see public/images/SOURCES.md */}
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <Image
              src="/images/outcomes-lifestyle.jpg"
              alt="A person hiking on a mountain trail"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/70 via-transparent to-transparent" />
            <p className="reference-title-muted absolute bottom-6 right-7 max-w-[14rem] text-right text-lg !text-white/90">
              Back to what you love.
            </p>
          </div>
        </div>

        {/* MRI comparison + patient stories */}
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:p-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              MRI comparison
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                {
                  label: 'Before',
                  caption: 'Bone changes, cartilage wear and inflammation',
                  src: '/images/outcomes-xray-before.jpg',
                  alt: 'X-ray showing knee osteoarthritis with narrowed joint space',
                },
                {
                  label: 'After',
                  caption: 'Improved joint environment and reduced bone stress',
                  src: '/images/outcomes-xray-after.jpg',
                  alt: 'Weight-bearing knee X-ray with preserved joint space',
                },
              ].map(({ label, caption, src, alt }) => (
                <div key={label} className="space-y-2">
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-black">
                    <Image src={src} alt={alt} fill sizes="220px" className="object-contain" />
                  </div>
                  <p className="text-xs font-semibold text-white">{label}</p>
                  <p className="text-[0.7rem] leading-snug text-white/50">{caption}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[0.65rem] leading-snug text-white/30">
              Representative radiographs, not the same patient. Before: James Heilman, MD
              (CC BY-SA 4.0). After: Ptrump16 (CC BY-SA 4.0), via Wikimedia Commons.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Patient stories
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {PATIENT_STORIES.map((label) => (
                <div key={label} className="space-y-2">
                  <div className="flex aspect-[3/4] flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-white/30">
                    <Video className="h-6 w-6" strokeWidth={1.5} />
                    <span className="text-[0.65rem] uppercase tracking-wide">Pending</span>
                  </div>
                  <p className="text-xs font-medium text-white/80">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Closing band */}
      <div className="relative mx-auto mt-14 max-w-7xl border-t border-white/10 pt-10">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {CLOSING_BADGES.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="flex flex-col items-center gap-1.5 lg:items-start">
                <Icon className="h-5 w-5 text-[#60a5fa]" strokeWidth={1.7} />
                <span className="text-sm font-semibold text-white">{title}</span>
                <span className="text-xs text-white/50">{subtitle}</span>
              </div>
            ))}
          </div>

          <blockquote className="max-w-sm">
            <p className="reference-title-muted text-lg !text-white/70">
              &ldquo;It&apos;s not just about pain relief. It&apos;s about getting your life back.&rdquo;
            </p>
            <cite className="mt-2 block text-xs not-italic text-white/40">Subchond.com</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
