'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { VideoPlayer } from '../ui/VideoPlayer';

export type OAStructureKey = 'cartilage' | 'subchondral' | 'meniscus' | 'synovium' | 'alignment';

export const WholeJointOA: React.FC = () => {
  const [activeStructure, setActiveStructure] = useState<OAStructureKey>('subchondral');

  const structures = [
    {
      id: 'cartilage' as OAStructureKey,
      label: '01 Cartilage',
      title: 'Articular Cartilage',
      role: 'Reduces joint friction and distributes compressive forces.',
      inOA: 'Undergoes fibrillations, vertical fissuring, and gradual thinning. Significantly: cartilage lacks sensory nerves and cannot generate pain on its own.',
      color: '#38bdf8',
    },
    {
      id: 'subchondral' as OAStructureKey,
      label: '02 Subchondral Bone',
      title: 'Subchondral Bone Plate',
      role: 'Dense mineralized foundation directly beneath cartilage providing structural support.',
      inOA: 'Experiences microfractures, bone marrow lesions (BMLs), and sclerosis. Richly supplied with nociceptive pain fibers — making it a primary symptom generator.',
      color: '#0071E3',
    },
    {
      id: 'meniscus' as OAStructureKey,
      label: '03 Meniscus',
      title: 'Meniscal Shock Absorbers',
      role: 'Fibrocartilaginous crescents distributing up to 70% of contact stress across the tibia.',
      inOA: 'Degenerative tears and meniscal extrusion cause rapid loss of hoop tension, focusing massive focal stress onto subchondral bone.',
      color: '#3BA7A0',
    },
    {
      id: 'synovium' as OAStructureKey,
      label: '04 Synovium',
      title: 'Synovial Membrane',
      role: 'Produces lubricating hyaluronic-acid-rich synovial fluid for the joint.',
      inOA: 'Synovitis triggers inflammatory cytokine cascades (IL-1β, TNF-α), causing joint effusion, warmth, and capsular stretch pain.',
      color: '#8b5cf6',
    },
    {
      id: 'alignment' as OAStructureKey,
      label: '05 Mechanics',
      title: 'Biomechanical Alignment',
      role: 'Maintains uniform contact stress across the mechanical axis of the lower limb.',
      inOA: 'Varus (bow-legged) or valgus malalignment concentrates weight onto one compartment, accelerating subchondral fatigue.',
      color: '#f59e0b',
    },
  ];

  const current = structures.find((s) => s.id === activeStructure)!;

  return (
    <section
      id="oa-explanation"
      className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#F7F8FA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Sticky/Cinematic Split Canvas: Left Typography + Right Animated Anatomy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Screen-as-Canvas Large Typography (No card clutter!) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-semibold text-[#0071E3] tracking-wider px-2.5 py-0.5 rounded-full bg-[#0071E3]/10">
                02
              </span>
              <span className="text-xs font-semibold text-[#667085] tracking-widest uppercase">
                PATHOPHYSIOLOGY OF THE JOINT
              </span>
            </div>

            <h2 className="text-section-headline text-[#111827] font-light tracking-tight">
              Osteoarthritis is not just <br />
              <span className="text-[#0071E3] font-normal">cartilage wear.</span>
            </h2>

            <p className="text-editorial-body text-[#4B5563] max-w-xl">
              OA can involve multiple structures of the joint — including cartilage, subchondral bone, meniscus, synovium and the surrounding biomechanics.
            </p>

            {/* Structure Progression Strip - Minimalist Segmented Line */}
            <div className="pt-2 flex flex-wrap gap-2">
              {structures.map((s) => {
                const isSelected = activeStructure === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveStructure(s.id)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-[#111827] text-white shadow-md'
                        : 'bg-white text-[#667085] hover:text-[#111827] border border-black/[0.06]'
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>

            {/* Progressive Disclosure of Active Structure */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="pt-4 space-y-3 border-t border-black/[0.08]"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: current.color }} />
                  <h3 className="text-xl font-medium text-[#111827] tracking-tight">{current.title}</h3>
                </div>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  <span className="font-semibold text-[#111827]">In Osteoarthritis: </span>
                  {current.inOA}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Dominant Knee Anatomy Visualizer */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[540px] flex items-center justify-center p-4">
              
              <Image
                src="/images/knee-anatomy.png"
                alt="Whole joint knee model showing multi-structural interaction"
                fill
                className="object-contain filter contrast-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              />

              {/* Dynamic SVG Highlights synced with selected structure */}
              <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full pointer-events-none">
                {activeStructure === 'cartilage' && (
                  <path
                    d="M220 200 Q300 160 380 200 Q380 290 300 270 Q220 290 220 200 Z"
                    fill="#38bdf8"
                    fillOpacity="0.25"
                    stroke="#38bdf8"
                    strokeWidth="3.5"
                    className="animate-pulse"
                  />
                )}

                {activeStructure === 'subchondral' && (
                  <g className="animate-pulse">
                    <path
                      d="M240 200 Q300 180 360 200 Q360 280 300 255 Q240 280 240 200 Z"
                      fill="#0071E3"
                      fillOpacity="0.3"
                      stroke="#0071E3"
                      strokeWidth="4"
                    />
                    <path
                      d="M220 350 Q300 355 380 350 Q370 380 300 385 Q230 380 220 350 Z"
                      fill="#0071E3"
                      fillOpacity="0.3"
                      stroke="#0071E3"
                      strokeWidth="4"
                    />
                  </g>
                )}

                {activeStructure === 'meniscus' && (
                  <g className="animate-pulse">
                    <path d="M190 310 Q240 315 250 325 Q230 338 190 310 Z" fill="#3BA7A0" fillOpacity="0.4" stroke="#3BA7A0" strokeWidth="3" />
                    <path d="M410 310 Q360 315 350 325 Q370 338 410 310 Z" fill="#3BA7A0" fillOpacity="0.4" stroke="#3BA7A0" strokeWidth="3" />
                  </g>
                )}

                {activeStructure === 'synovium' && (
                  <ellipse cx="300" cy="300" rx="200" ry="220" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="8 6" className="animate-pulse" />
                )}

                {activeStructure === 'alignment' && (
                  <g>
                    <line x1="300" y1="30" x2="300" y2="570" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" />
                    <circle cx="250" cy="320" r="32" fill="#f59e0b" fillOpacity="0.25" stroke="#f59e0b" strokeWidth="2" />
                  </g>
                )}
              </svg>

              {/* Floating Structure Identifier */}
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.08] text-xs font-semibold text-[#111827] shadow-sm">
                TARGET: {current.title.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Video Featurette - Clean Editorial Embed */}
        <div className="pt-12 border-t border-black/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-[#0071E3] tracking-widest uppercase">
              RADIOLOGICAL CORRELATION
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-[#111827] tracking-tight">
              Why OA is a whole-joint disease
            </h3>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              In this high-resolution sequence, examine how subchondral bone marrow edema patterns, meniscal extrusion, and synovial effusion co-exist in an articulating joint.
            </p>
          </div>

          <div className="lg:col-span-7">
            <VideoPlayer
              src="/videos/oa-whole-joint.mp4"
              poster="/images/mri-knee.jpg"
              title="Why OA is a whole-joint disease"
              autoPlay={false}
              loop={true}
              muted={true}
              className="aspect-video w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
