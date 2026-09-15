'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
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
      className="relative h-[100svh] min-h-0 md:h-[100dvh] pt-20 pb-14 md:pt-24 md:pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center bg-[#071A2B] text-white overflow-hidden"
    >
      {/* Cinematic Studio Lighting & Fine Mesh Grid */}
      <div className="absolute inset-0 bg-canvas-navy-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle_at_50%_50%,rgba(0,113,227,0.18)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
        
        {/* Left Column: Huge Editorial Headline & Minimalist Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-center space-y-6"
        >
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#0071E3] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#0071E3] animate-pulse" />
            <span>SUBCHOND CLINICAL INITIATIVE</span>
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
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-white/10 text-left">
            <div>
              <div className="text-[10px] font-mono text-white/40 tracking-wider uppercase">ANATOMICAL VIEW</div>
              <div className="text-xs sm:text-sm text-white font-medium mt-1">Coronal Multi-Plane</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#0071E3] tracking-wider uppercase">PAIN GENERATOR</div>
              <div className="text-xs sm:text-sm text-[#0071E3] font-semibold mt-1">Subchondral Bone</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-white/40 tracking-wider uppercase">DIAGNOSTICS</div>
              <div className="text-xs sm:text-sm text-white font-medium mt-1">Whole-Joint MRI</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 2x More Dominant Hero Knee Anatomy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-center relative"
        >
          {/* Main Visual Container - Full Scale */}
          <div className="relative w-full max-w-2xl aspect-[4/5] sm:aspect-square lg:max-h-[calc(100dvh-11rem)] flex items-center justify-center">
            
            {/* The 3D Anatomical Knee Render */}
            <motion.div
              animate={{
                scale: activeStage === 2 ? 1.04 : activeStage === 1 ? 1.02 : 1.0,
                y: [0, -6, 0],
              }}
              transition={{
                y: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
                scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              }}
              className="relative w-full h-full max-h-[640px] flex items-center justify-center"
            >
              <Image
                src="/images/knee-anatomy.png"
                alt="3D Anatomical render of human knee joint"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-contain filter brightness-105 contrast-110 drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
              />

              {/* Scientifically Positioned SVG Highlights (Subchondral bone strictly beneath cartilage!) */}
              <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <defs>
                  <filter id="heroBlueGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feFlood floodColor="#0071E3" floodOpacity="0.8" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <pattern id="boneHatch" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M0 4L8 4 M4 0L4 8" stroke="#0071E3" strokeWidth="0.6" strokeOpacity="0.5" />
                  </pattern>
                </defs>

                {/* STAGE 1: CARTILAGE HIGHLIGHT */}
                {(activeStage === 1 || activeStage === 0) && (
                  <path
                    d="M230 180 C245 150, 275 145, 300 155 C325 145, 355 150, 370 180 C395 240, 395 285, 365 305 C335 320, 310 280, 300 270 C290 280, 265 320, 235 305 C205 285, 205 240, 230 180 Z"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                    opacity={activeStage === 1 ? 0.9 : 0.3}
                    className="transition-opacity duration-500"
                  />
                )}

                {/* STAGE 2: SUBCHONDRAL BONE PLATE (UNDER CARTILAGE) */}
                {(activeStage === 2 || activeStage === 0) && (
                  <g opacity={activeStage === 2 ? 1 : 0.4} className="transition-opacity duration-500">
                    <path
                      d="M245 195 C265 175, 285 172, 300 180 C315 172, 335 175, 355 195 C375 235, 375 270, 350 285 C330 295, 310 265, 300 258 C290 265, 270 295, 250 285 C225 270, 225 235, 245 195 Z"
                      fill="url(#boneHatch)"
                      stroke="#0071E3"
                      strokeWidth="3.5"
                      filter="url(#heroBlueGlow)"
                    />
                    <path
                      d="M205 348 C250 352, 350 352, 395 348 C390 375, 360 388, 300 390 C240 388, 210 375, 205 348 Z"
                      fill="url(#boneHatch)"
                      stroke="#0071E3"
                      strokeWidth="3"
                      filter="url(#heroBlueGlow)"
                    />
                  </g>
                )}

                {/* STAGE 3: MENISCUS HIGHLIGHT */}
                {(activeStage === 3 || activeStage === 0) && (
                  <g opacity={activeStage === 3 ? 0.95 : 0.3} className="transition-opacity duration-500">
                    <path d="M200 315 C215 305, 260 310, 265 325 C255 335, 220 338, 200 315 Z" fill="none" stroke="#3BA7A0" strokeWidth="2.5" />
                    <path d="M400 315 C385 305, 340 310, 335 325 C345 335, 380 338, 400 315 Z" fill="none" stroke="#3BA7A0" strokeWidth="2.5" />
                  </g>
                )}

                {/* Precision Floating Pinpoints */}
                {/* Pin 1: Subchondral Bone (Under Cartilage) */}
                <g className="cursor-pointer pointer-events-auto" onClick={() => setActiveStage(2)}>
                  <circle cx="280" cy="245" r="5" fill="#0071E3" />
                  <circle cx="280" cy="245" r="12" fill="none" stroke="#0071E3" strokeWidth="1.5" className="animate-ping" />
                  <line x1="280" y1="245" x2="135" y2="245" stroke="#0071E3" strokeWidth="1.2" strokeDasharray="3 3" />
                  <rect x="15" y="232" width="120" height="26" rx="13" fill="#0071E3" />
                  <text x="75" y="249" fill="#ffffff" fontSize="10" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
                    SUBCHONDRAL BONE
                  </text>
                </g>

                {/* Pin 2: Articular Cartilage */}
                <g className="cursor-pointer pointer-events-auto" onClick={() => setActiveStage(1)}>
                  <circle cx="345" cy="225" r="4" fill="#38bdf8" />
                  <line x1="345" y1="225" x2="455" y2="215" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
                  <rect x="455" y="202" width="130" height="26" rx="13" fill="#0B2640" stroke="#38bdf8" strokeWidth="1" />
                  <text x="520" y="219" fill="#38bdf8" fontSize="10" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
                    ARTICULAR CARTILAGE
                  </text>
                </g>

                {/* Pin 3: Meniscus */}
                <g className="cursor-pointer pointer-events-auto" onClick={() => setActiveStage(3)}>
                  <circle cx="230" cy="320" r="4" fill="#3BA7A0" />
                  <line x1="230" y1="320" x2="135" y2="330" stroke="#3BA7A0" strokeWidth="1" strokeDasharray="3 3" />
                  <rect x="35" y="317" width="100" height="26" rx="13" fill="#0B2640" stroke="#3BA7A0" strokeWidth="1" />
                  <text x="85" y="334" fill="#3BA7A0" fontSize="10" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
                    MENISCUS
                  </text>
                </g>
              </svg>
            </motion.div>
          </div>

          {/* Progressive Stage Disclosures - Minimalist Apple Segmented Selector */}
          <div className="w-full max-w-xl mt-4 flex items-center justify-between gap-1.5 sm:gap-2 p-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            {stages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`flex-1 py-2 px-2 sm:px-3 rounded-full text-xs font-medium transition-all text-center truncate ${
                    isSelected
                      ? 'bg-[#0071E3] text-white shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span className="sm:hidden">{stage.shortLabel}</span>
                  <span className="hidden sm:inline">{stage.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Scientific Note for Active Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="mt-3 text-center max-w-md text-xs text-white/60 font-light"
            >
              <span className="text-[#0071E3] font-medium mr-1.5">{stages[activeStage].badge}:</span>
              {stages[activeStage].note}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center items-center pointer-events-none lg:hidden">
        <div className="flex flex-col items-center text-[10px] font-mono tracking-widest text-white/40 uppercase">
          <span>SCROLL TO EXPLORE THE JOINT</span>
          <ChevronDown className="w-4 h-4 mt-1 text-[#0071E3] animate-pulse" />
        </div>
      </div>
    </section>
  );
};
