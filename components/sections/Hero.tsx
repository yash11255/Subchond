'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ContactActions } from '@/components/ui/ContactActions';

export const Hero: React.FC = () => {
  // Cinematic scroll/interactive stages: 0: Full Joint, 1: Cartilage, 2: Subchondral Bone, 3: Meniscus & Joint Space
  const [activeStage, setActiveStage] = useState<number>(2); // Default to Subchondral Bone to instantly wow

  const stages = [
    {
      id: 'joint',
      label: 'The Whole Joint',
      shortLabel: 'Joint',
      badge: 'BIOMECHANICAL ORGAN',
      note: 'A complex multi-tissue organ where bones, cartilage, menisci and synovium function as a synchronized unit.',
    },
    {
      id: 'cartilage',
      label: 'Articular Cartilage',
      shortLabel: 'Cartilage',
      badge: '2.0–3.0 MM HYALINE CAP',
      note: 'The frictionless, aneural sliding surface. Lacks pain fibers and cannot perceive pain directly.',
    },
    {
      id: 'subchondral',
      label: 'Subchondral Bone',
      shortLabel: 'Subchondral',
      badge: 'RICHLY INNERVATED FOUNDATION',
      note: 'Positioned directly beneath the cartilage. Dense, vascularized, innervated with pain fibers, and vital to shock absorption.',
    },
    {
      id: 'meniscus',
      label: 'Menisci & Joint Space',
      shortLabel: 'Meniscus',
      badge: 'LOAD ABSORBERS',
      note: 'Crescent shock absorbers dissipating 50–70% of joint forces and maintaining synovial clearance.',
    },
  ];

  return (
    <section
      id="knee"
      className="relative h-[calc(100svh-4rem)] min-h-0 md:h-[calc(100dvh-4.25rem)] pt-10 pb-8 md:pt-12 md:pb-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-center bg-[#071A2B] text-white overflow-hidden"
    >
      {/* The knee video is the hero visual; UI stays on a deliberately darkened layer above it. */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-[1.03] object-cover object-center opacity-75"
      >
        <source src="/videos/hero-knee.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,17,29,0.96)_0%,rgba(4,17,29,0.91)_38%,rgba(4,17,29,0.58)_67%,rgba(4,17,29,0.42)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-canvas-navy-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle_at_50%_50%,rgba(0,113,227,0.16)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
        
        {/* Left Column: Huge Editorial Headline & Minimalist Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-center space-y-6"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#60a5fa]/30 bg-[#0b2941]/75 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-[#93c5fd] uppercase backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#60a5fa] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38bdf8]" />
            </span>
            <span>Whole-joint evaluation</span>
          </div>

          {/* Headline - Exact clamp(3.5rem, 8vw, 8rem) scale */}
          <h1 className="text-hero-headline text-white font-light tracking-tight">
            Your knee <br />
            is more than <br />
            <span className="text-[#0071E3] font-normal">cartilage.</span>
          </h1>

          {/* Subheadline & Supporting Copy */}
          <div className="space-y-4 max-w-lg">
            <p className="text-lg sm:text-xl text-white/90 font-normal leading-relaxed">
              Understanding what is happening across the whole joint can change how you think about knee pain.
            </p>
            <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
              SUBCHOND brings together clinical assessment, imaging and an understanding of the subchondral bone to help identify what may be contributing to knee pain and osteoarthritis.
            </p>
          </div>

          {/* The primary learning path remains, with a direct route to the clinical team alongside it. */}
          <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <a
              href="#oa-explanation"
              className="px-7 py-3.5 rounded-full bg-[#0071E3] text-white text-xs font-semibold tracking-wider hover:bg-[#0055B3] transition-all duration-200 shadow-lg shadow-[#0071E3]/25 flex items-center justify-center gap-2 text-center"
            >
              <span>UNDERSTAND MY KNEE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <ContactActions tone="dark" compact />
          </div>

          {/* Anatomical Telemetry Specifications */}
          <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-left sm:gap-6">
            <div className="min-w-0">
              <div className="text-[8px] font-mono tracking-wider text-white/40 uppercase sm:text-[10px]">ANATOMICAL VIEW</div>
              <div className="mt-1 text-[10px] font-medium text-white sm:text-sm">Coronal Multi-Plane</div>
            </div>
            <div className="min-w-0">
              <div className="text-[8px] font-mono tracking-wider text-[#38bdf8] uppercase sm:text-[10px]">PAIN GENERATOR</div>
              <div className="mt-1 text-[10px] font-semibold text-[#38bdf8] sm:text-sm">Subchondral Bone</div>
            </div>
            <div className="min-w-0">
              <div className="text-[8px] font-mono tracking-wider text-white/40 uppercase sm:text-[10px]">DIAGNOSTICS</div>
              <div className="mt-1 text-[10px] font-medium text-white sm:text-sm">Whole-Joint MRI</div>
            </div>
          </div>
        </motion.div>

        {/* Right column: a light clinical control layer over the moving knee. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 hidden lg:flex items-center justify-center relative"
        >
          <div className="relative w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#06192b]/55 p-6 shadow-2xl shadow-black/30 backdrop-blur-md xl:p-8">
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#38bdf8]/30"
            />
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 1.08, 1], opacity: [0.16, 0.32, 0.16] }}
              transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
              className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#0071E3] blur-3xl"
            />

            <div className="relative">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.16em] text-[#38bdf8] uppercase">
                  <span className="h-2 w-2 rounded-full bg-[#38bdf8] shadow-[0_0_14px_#38bdf8]" />
                  Live joint lens
                </div>
                <span className="text-[10px] font-mono tracking-widest text-white/40">0{activeStage + 1} / 04</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="min-h-32 py-7"
                >
                  <p className="text-[10px] font-mono tracking-[0.14em] text-[#38bdf8] uppercase">{stages[activeStage].badge}</p>
                  <h2 className="mt-3 max-w-sm text-3xl font-light tracking-tight text-white">{stages[activeStage].label}</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{stages[activeStage].note}</p>
                </motion.div>
              </AnimatePresence>

              <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                {stages.map((stage, idx) => {
                  const isSelected = activeStage === idx;
                  return (
                    <button
                      key={stage.id}
                      onClick={() => setActiveStage(idx)}
                      aria-pressed={isSelected}
                      className={`rounded-xl border px-3 py-3 text-left text-xs font-medium transition-all duration-200 ${
                        isSelected
                          ? 'border-[#38bdf8]/70 bg-[#0071E3] text-white shadow-lg shadow-[#0071E3]/20'
                          : 'border-white/10 bg-white/[0.04] text-white/70 hover:border-white/30 hover:bg-white/[0.09] hover:text-white'
                      }`}
                    >
                      <span className="mr-2 font-mono text-[10px] opacity-60">0{idx + 1}</span>
                      {stage.shortLabel}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
