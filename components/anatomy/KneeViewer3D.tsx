'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles, Activity, Eye, Info } from 'lucide-react';

export type KneeLayerKey = 'all' | 'cartilage' | 'subchondral' | 'meniscus' | 'trabecular';

interface KneeViewer3DProps {
  initialLayer?: KneeLayerKey;
  interactive?: boolean;
  className?: string;
}

export const KneeViewer3D: React.FC<KneeViewer3DProps> = ({
  initialLayer = 'all',
  interactive = true,
  className = '',
}) => {
  const [activeLayer, setActiveLayer] = useState<KneeLayerKey>(initialLayer);
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  const layersConfig = [
    {
      id: 'all' as KneeLayerKey,
      name: 'Complete Joint',
      desc: 'Whole tibiofemoral organ with all primary articulating tissues in situ.',
    },
    {
      id: 'cartilage' as KneeLayerKey,
      name: 'Articular Cartilage',
      desc: 'Translucent, frictionless hyaline cap (2.0–3.0 mm) covering femoral condyles and tibial plateau.',
    },
    {
      id: 'subchondral' as KneeLayerKey,
      name: 'Subchondral Bone',
      desc: 'Dense vascularized bone plate situated directly beneath the cartilage, absorbing dynamic load.',
    },
    {
      id: 'meniscus' as KneeLayerKey,
      name: 'Menisci',
      desc: 'Fibrocartilaginous crescents providing joint congruency and distributing 50–70% of contact stress.',
    },
    {
      id: 'trabecular' as KneeLayerKey,
      name: 'Trabecular Spongiosa',
      desc: 'Honeycomb cancellous architecture providing micro-elastic compliance and shock dispersion.',
    },
  ];

  return (
    <div className={`relative flex flex-col items-center select-none w-full ${className}`}>
      {/* 3D Viewport Frame - Apple Flagship Hardware Stage */}
      <motion.div
        layout
        className="relative w-full max-w-2xl aspect-[4/5] sm:aspect-square rounded-3xl border border-[#E5E5EA] bg-gradient-to-b from-[#F5F5F7] via-[#FAFAFC] to-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] group"
      >
        {/* Subtle Apple dot matrix / tech lines */}
        <div className="absolute inset-0 bg-apple-grid opacity-50 pointer-events-none" />

        {/* Ambient illumination spotlight */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
            activeLayer === 'subchondral'
              ? 'opacity-100 bg-[radial-gradient(circle_at_50%_45%,rgba(0,113,227,0.12)_0%,transparent_60%)]'
              : 'opacity-40 bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0.02)_0%,transparent_70%)]'
          }`}
        />

        {/* Photorealistic 3D Knee Anatomy Image */}
        <div className="relative w-full h-full p-6 sm:p-10 flex items-center justify-center">
          <motion.div
            key={activeLayer}
            initial={{ scale: 0.98, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full max-h-[580px] flex items-center justify-center"
          >
            <Image
              src="/images/knee-anatomy.png"
              alt="3D Anatomical model of human knee joint"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 640px"
              className={`object-contain transition-all duration-700 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.08)] ${
                activeLayer === 'subchondral'
                  ? 'brightness-105 contrast-110 saturate-110'
                  : 'brightness-100 contrast-100'
              }`}
            />

            {/* Precision Anatomical SVG Highlight Overlays */}
            <svg
              viewBox="0 0 600 600"
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
            >
              <defs>
                <filter id="appleGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <pattern id="bonePores" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M0 4L8 4 M4 0L4 8" stroke="#0071e3" strokeWidth="0.6" strokeOpacity="0.45" />
                </pattern>
              </defs>

              {/* LAYER: ARTICULAR CARTILAGE */}
              <g
                className={`transition-all duration-500 ${
                  activeLayer === 'cartilage' || activeLayer === 'all'
                    ? 'opacity-85'
                    : 'opacity-10'
                }`}
              >
                <path
                  d="M230 180 C245 150, 275 145, 300 155 C325 145, 355 150, 370 180 C395 240, 395 285, 365 305 C335 320, 310 280, 300 270 C290 280, 265 320, 235 305 C205 285, 205 240, 230 180 Z"
                  fill="none"
                  stroke="#0071e3"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  filter="url(#appleGlow)"
                />
              </g>

              {/* LAYER: SUBCHONDRAL BONE (Beneath Cartilage) */}
              <g
                className={`transition-all duration-500 ${
                  activeLayer === 'subchondral'
                    ? 'opacity-100'
                    : activeLayer === 'all'
                    ? 'opacity-40'
                    : 'opacity-10'
                }`}
              >
                <path
                  d="M245 195 C265 175, 285 172, 300 180 C315 172, 335 175, 355 195 C375 235, 375 270, 350 285 C330 295, 310 265, 300 258 C290 265, 270 295, 250 285 C225 270, 225 235, 245 195 Z"
                  fill="url(#bonePores)"
                  stroke="#0071e3"
                  strokeWidth="3.5"
                  filter="url(#appleGlow)"
                />
                
                <path
                  d="M205 348 C250 352, 350 352, 395 348 C390 375, 360 388, 300 390 C240 388, 210 375, 205 348 Z"
                  fill="url(#bonePores)"
                  stroke="#0071e3"
                  strokeWidth="3"
                  filter="url(#appleGlow)"
                />
              </g>

              {/* LAYER: MENISCI */}
              <g
                className={`transition-all duration-500 ${
                  activeLayer === 'meniscus' || activeLayer === 'all'
                    ? 'opacity-90'
                    : 'opacity-10'
                }`}
              >
                <path
                  d="M200 315 C215 305, 260 310, 265 325 C255 335, 220 338, 200 315 Z"
                  fill="none"
                  stroke="#30b0c7"
                  strokeWidth="2.5"
                />
                <path
                  d="M400 315 C385 305, 340 310, 335 325 C345 335, 380 338, 400 315 Z"
                  fill="none"
                  stroke="#30b0c7"
                  strokeWidth="2.5"
                />
              </g>

              {/* Apple Callout Pin 1: Femur */}
              <g className="cursor-pointer pointer-events-auto">
                <circle cx="300" cy="85" r="4" fill="#0071e3" />
                <circle cx="300" cy="85" r="9" fill="none" stroke="#0071e3" strokeOpacity="0.4" className="animate-ping" />
                <line x1="300" y1="85" x2="390" y2="85" stroke="#0071e3" strokeWidth="1" strokeDasharray="3 3" />
                <rect x="390" y="73" width="75" height="24" rx="12" fill="#ffffff" stroke="#d2d2d7" strokeWidth="1" />
                <text x="427" y="89" fill="#1d1d1f" fontSize="10" fontFamily="-apple-system, sans-serif" fontWeight="600" textAnchor="middle">FEMUR</text>
              </g>

              {/* Apple Callout Pin 2: Articular Cartilage */}
              <g className="cursor-pointer pointer-events-auto">
                <circle cx="345" cy="225" r="4" fill="#0071e3" />
                <line x1="345" y1="225" x2="435" y2="215" stroke="#0071e3" strokeWidth="1" strokeDasharray="3 3" />
                <rect x="435" y="203" width="138" height="24" rx="12" fill="#ffffff" stroke="#0071e3" strokeWidth="1" />
                <text x="504" y="219" fill="#0071e3" fontSize="10" fontFamily="-apple-system, sans-serif" fontWeight="600" textAnchor="middle">ARTICULAR CARTILAGE</text>
              </g>

              {/* Apple Callout Pin 3: Subchondral Bone Plate (UNDER cartilage) */}
              <g className="cursor-pointer pointer-events-auto">
                <circle cx="280" cy="245" r="5" fill="#0071e3" />
                <circle cx="280" cy="245" r="11" fill="none" stroke="#0071e3" strokeWidth="1.5" className="animate-pulse" />
                <line x1="280" y1="245" x2="115" y2="245" stroke="#0071e3" strokeWidth="1.2" strokeDasharray="3 3" />
                <rect x="15" y="233" width="148" height="24" rx="12" fill="#0071e3" />
                <text x="89" y="249" fill="#ffffff" fontSize="10" fontFamily="-apple-system, sans-serif" fontWeight="600" textAnchor="middle">SUBCHONDRAL BONE</text>
              </g>

              {/* Apple Callout Pin 4: Meniscus */}
              <g className="cursor-pointer pointer-events-auto">
                <circle cx="230" cy="320" r="4" fill="#30b0c7" />
                <line x1="230" y1="320" x2="125" y2="330" stroke="#30b0c7" strokeWidth="1" strokeDasharray="3 3" />
                <rect x="35" y="318" width="112" height="24" rx="12" fill="#ffffff" stroke="#d2d2d7" strokeWidth="1" />
                <text x="91" y="334" fill="#1d1d1f" fontSize="10" fontFamily="-apple-system, sans-serif" fontWeight="600" textAnchor="middle">MEDIAL MENISCUS</text>
              </g>

              {/* Apple Callout Pin 5: Tibia */}
              <g className="cursor-pointer pointer-events-auto">
                <circle cx="300" cy="460" r="4" fill="#86868b" />
                <line x1="300" y1="460" x2="395" y2="460" stroke="#86868b" strokeWidth="1" strokeDasharray="3 3" />
                <rect x="395" y="448" width="70" height="24" rx="12" fill="#ffffff" stroke="#d2d2d7" strokeWidth="1" />
                <text x="430" y="464" fill="#1d1d1f" fontSize="10" fontFamily="-apple-system, sans-serif" fontWeight="600" textAnchor="middle">TIBIA</text>
              </g>
            </svg>
          </motion.div>
        </div>

        {/* Active Layer Details Banner - Apple Frosted Floating Dock */}
        <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-black/[0.06] shadow-[0_8px_25px_rgba(0,0,0,0.05)] z-20">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#0071e3]" />
                <h4 className="text-sm font-semibold text-[#1d1d1f] tracking-tight">
                  {layersConfig.find((l) => l.id === activeLayer)?.name}
                </h4>
                {activeLayer === 'subchondral' && (
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#0071e3]/10 text-[#0071e3]">
                    PRIMARY TARGET
                  </span>
                )}
              </div>
              <p className="text-xs text-[#6e6e73] max-w-md leading-relaxed">
                {layersConfig.find((l) => l.id === activeLayer)?.desc}
              </p>
            </div>

            <div className="hidden sm:flex flex-col items-end text-right text-[11px] font-mono text-[#86868b]">
              <span>3D CORONAL</span>
              <span className="text-[#0071e3] font-semibold">SUBCHOND BIO-SPEC</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Layer Navigation Tabs - Apple Segmented Controller */}
      {interactive && (
        <div className="w-full max-w-2xl mt-4 flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto p-1.5 bg-[#f5f5f7] rounded-full border border-[#e5e5ea] scrollbar-none">
          {layersConfig.map((layer) => {
            const isActive = activeLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white text-[#0071e3] shadow-[0_2px_8px_rgba(0,0,0,0.08)] font-semibold'
                    : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                }`}
              >
                {layer.id === 'subchondral' ? (
                  <Sparkles className="w-3 h-3 text-[#0071e3]" />
                ) : (
                  <Layers className="w-3 h-3 opacity-60" />
                )}
                {layer.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
