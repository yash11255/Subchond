'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

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
      className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Editorial Headline */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-semibold text-[#0071E3] tracking-wider px-2.5 py-0.5 rounded-full bg-[#0071E3]/10">
              03
            </span>
            <span className="text-xs font-semibold text-[#667085] tracking-widest uppercase">
              HIGH-RESOLUTION DISSECTION
            </span>
          </div>

          <h2 className="text-section-headline text-[#111827] font-light tracking-tight">
            Look beneath <br />
            <span className="text-[#0071E3] font-normal">the cartilage.</span>
          </h2>

          <p className="text-editorial-body text-[#4B5563]">
            Subchondral bone is the layer of bone directly beneath the articular cartilage. It is part of the joint environment that helps absorb and transmit load.
          </p>
        </div>

        {/* Anatomical Zoom Hierarchy Navigation - Apple Segmented Strip */}
        <div className="flex items-center gap-2 max-w-xl p-1.5 rounded-full bg-[#F5F5F7] border border-black/[0.06]">
          {zoomStages.map((stage, idx) => {
            const isSelected = zoomLevel === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setZoomLevel(idx)}
                className={`flex-1 py-2 px-3 rounded-full text-xs font-medium transition-all text-center truncate ${
                  isSelected
                    ? 'bg-[#111827] text-white shadow-sm'
                    : 'text-[#667085] hover:text-[#111827]'
                }`}
              >
                {stage.label}
              </button>
            );
          })}
        </div>

        {/* Large Cross-Section Canvas with Thin Connecting Lines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Micro-Section with Optical Zoom */}
          <div className="lg:col-span-8 relative">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-black/[0.08] bg-[#0A0D14] shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
              
              <Image
                src="/images/knee-cross-section.png"
                alt="Histological cross section of cartilage and subchondral bone"
                fill
                className={`object-cover transition-all duration-700 ${current.scale} ${
                  zoomLevel >= 2 ? 'translate-y-[-8%]' : 'translate-y-0'
                }`}
              />

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
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#0071E3] animate-ping shrink-0" />
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
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-[#0071E3] hover:bg-[#0071E3] hover:text-white transition-all shadow-md"
              >
                <Zap className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${loadActive ? 'animate-bounce' : ''}`} />
                <span>{loadActive ? 'TRANSDUCING...' : 'SIMULATE LOAD'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Refined Editorial Insight (No heavy cards) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-xs font-mono text-[#0071E3] uppercase tracking-widest">
              MICROSCOPIC DEPTH: {current.depth}
            </div>

            <h3 className="text-3xl font-light text-[#111827] tracking-tight">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal">
              {current.text}
            </p>

            <div className="pt-4 border-t border-black/[0.08] space-y-2">
              <span className="text-xs font-semibold text-[#111827] block">
                Why this matters for your symptoms:
              </span>
              <p className="text-xs text-[#667085] leading-relaxed">
                Cartilage wear without subchondral bone stress is often painless. Pain typically intensifies when the underlying subchondral bone begins taking unnatural load, developing micro-edema visible on MRI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
