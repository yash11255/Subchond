'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, Zap } from 'lucide-react';

export const SubchondralBone: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(2); // 0: Femur, 1: Cartilage, 2: Subchondral Bone, 3: Trabecular Bone
  const [loadActive, setLoadActive] = useState(false);

  const zoomStages = [
    {
      id: 'femur',
      label: 'Femur',
      depth: 'Gross Anatomy',
      title: 'Distal Femoral Epiphysis',
      text: 'The structural bone shaft transferring axial skeletal load into the articulating joint condyles.',
      scale: 'scale-100',
    },
    {
      id: 'cartilage',
      label: 'Cartilage',
      depth: '0.0 – 2.5 mm',
      title: 'Articular Cartilage',
      text: 'Avascular, aneural gliding surface of Type II collagen. Absorbs shear forces but cannot sense pain.',
      scale: 'scale-110',
    },
    {
      id: 'subchondral',
      label: 'Subchondral Bone',
      depth: '2.5 – 4.0 mm',
      title: 'Subchondral Bone Plate',
      text: 'The dense mineralized layer situated directly beneath cartilage. Heavily innervated with sensory pain fibers and key to dynamic shock absorption.',
      scale: 'scale-125',
    },
    {
      id: 'trabecular',
      label: 'Trabecular Bone',
      depth: '> 4.0 mm',
      title: 'Trabecular Spongiosa',
      text: 'A dynamic honeycomb lattice of bone struts that dampens and dissipates walking impact loads through the marrow.',
      scale: 'scale-140',
    },
  ];

  const current = zoomStages[zoomLevel];

  const triggerLoad = () => {
    setLoadActive(true);
    setTimeout(() => setLoadActive(false), 2000);
  };

  return (
    <section
      id="subchondral-bone"
      className="py-16 md:py-20 lg:py-[clamp(4.5rem,8vh,6rem)] px-4 sm:px-6 lg:px-8 bg-[#F1F3F0] relative overflow-hidden border-t border-black/[0.08]"
    >
      <div className="absolute inset-0 clinical-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-48 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#0071E3]/[0.08] blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto space-y-8 lg:space-y-10 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(31rem,0.85fr)] gap-6 lg:gap-10 lg:items-end">
          {/* Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4"
          >
            <div className="reference-kicker">
              <span>High-resolution dissection</span>
              <span className="reference-kicker-index">03</span>
            </div>

            <h2 className="text-section-headline text-[#111827] font-light tracking-tight">
              Look beneath <br />
              <span className="reference-title-muted">the cartilage.</span>
            </h2>

            <p className="text-editorial-body text-[#4B5563] max-w-[60ch]">
              Subchondral bone is the layer of bone directly beneath the articular cartilage. It is part of the joint environment that helps absorb and transmit load.
            </p>
          </motion.div>

          {/* Depth selector shares the header row on desktop rather than creating a separate section row. */}
          <div role="tablist" aria-label="Anatomical depth" className="flex w-full items-center gap-1 p-1.5 rounded-2xl bg-white/70 border border-black/[0.08] shadow-[0_14px_30px_rgba(14,29,36,0.05)] overflow-x-auto">
            {zoomStages.map((stage, idx) => {
              const isSelected = zoomLevel === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setZoomLevel(idx)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`relative flex-1 min-w-max py-3 px-4 rounded-xl text-[11px] font-semibold tracking-wide transition-colors text-center ${
                    isSelected
                      ? 'text-white'
                      : 'text-[#667085] hover:text-[#111827] hover:bg-black/[0.035]'
                  }`}
                >
                  {isSelected && <motion.span layoutId="active-depth" className="absolute inset-0 rounded-xl bg-[#102A3B] shadow-sm" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                  <span className="relative z-10">{stage.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Cross-Section Canvas with Thin Connecting Lines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Visual Micro-Section with Optical Zoom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 relative"
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/20 bg-[#0C1922] shadow-[0_28px_70px_rgba(15,35,47,0.22)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/knee-cross-section.png"
                    alt="Histological cross section of cartilage and subchondral bone"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className={`object-cover ${current.scale} ${zoomLevel >= 2 ? 'translate-y-[-8%]' : 'translate-y-0'}`}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,17,26,0.56),transparent_55%,rgba(5,17,26,0.18))] pointer-events-none" />

              {/* Load wave animation */}
              {loadActive && (
                <div className="absolute inset-0 bg-gradient-to-b from-[#0071E3]/35 via-[#0071E3]/15 to-transparent animate-pulse pointer-events-none" />
              )}

              {/* Thin Connecting Scientific Labels */}
              <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#38bdf8] shrink-0" />
                  <div className="h-[1px] w-8 sm:w-16 bg-white/40 shrink-0" />
                  <span className="text-[9px] sm:text-[11px] font-mono text-white/90 bg-black/70 px-2 sm:px-2.5 py-0.5 rounded-full backdrop-blur-md truncate">
                    01 CARTILAGE (SURFACE)
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#54A7FF] animate-pulse shrink-0" />
                  <div className="h-[1.5px] w-10 sm:w-24 bg-[#0071E3] shrink-0" />
                  <span className="text-[9px] sm:text-[11px] font-mono text-white bg-[#0071E3] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md font-semibold truncate">
                    02 SUBCHONDRAL BONE PLATE (UNDER CARTILAGE)
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#3BA7A0] shrink-0" />
                  <div className="h-[1px] w-8 sm:w-20 bg-white/40 shrink-0" />
                  <span className="text-[9px] sm:text-[11px] font-mono text-white/90 bg-black/70 px-2 sm:px-2.5 py-0.5 rounded-full backdrop-blur-md truncate">
                    03 TRABECULAR SPONGIOSA
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white shrink-0" />
                  <div className="h-[1px] w-6 sm:w-12 bg-white/40 shrink-0" />
                  <span className="text-[9px] sm:text-[11px] font-mono text-white/90 bg-black/70 px-2 sm:px-2.5 py-0.5 rounded-full backdrop-blur-md truncate">
                    04 BONE MARROW CAVITY
                  </span>
                </div>
              </div>

              {/* Simulate Load Action */}
              <button
                onClick={triggerLoad}
                disabled={loadActive}
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-[#0071E3] hover:bg-[#0071E3] hover:text-white transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-wait"
              >
                <Zap className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${loadActive ? 'animate-pulse' : ''}`} />
                <span>{loadActive ? 'TRANSDUCING...' : 'SIMULATE LOAD'}</span>
              </button>
              <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 flex items-center gap-2 text-white/70 text-[10px] font-mono tracking-[0.16em]">
                <span className="h-px w-8 bg-white/50" />
                LIVE DEPTH VIEW
              </div>
            </div>
          </motion.div>

          {/* Right Column: Refined Editorial Insight (No heavy cards) */}
          <div className="lg:col-span-4 self-stretch flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-7 border-l border-[#102A3B]/15 pl-6 sm:pl-8"
              >
                <div className="flex items-center gap-3 text-xs font-mono text-[#0071E3] uppercase tracking-widest">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0071E3]/10"><ArrowDownRight className="w-3.5 h-3.5" /></span>
                  DEPTH: {current.depth}
                </div>

                <h3 className="text-3xl sm:text-4xl font-medium text-[#111827] tracking-[-0.04em] text-balance">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal max-w-[38ch]">
                  {current.text}
                </p>

                <div className="pt-5 border-t border-black/[0.10] space-y-2">
                  <span className="text-xs font-semibold text-[#111827] block">Why this matters for your symptoms</span>
                  <p className="text-xs text-[#667085] leading-relaxed max-w-[42ch]">
                    Cartilage wear without subchondral bone stress is often painless. Pain can increase when the underlying bone is exposed to abnormal load and develops marrow changes visible on MRI.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
