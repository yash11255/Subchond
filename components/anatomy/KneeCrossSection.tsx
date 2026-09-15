'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Zap, Layers } from 'lucide-react';

export const KneeCrossSection: React.FC = () => {
  const [activeDepth, setActiveDepth] = useState<number>(1);
  const [loadSimulated, setLoadSimulated] = useState<boolean>(false);

  const strata = [
    {
      depth: '0.0 – 2.5 mm',
      name: 'Articular Cartilage',
      subtitle: 'Superficial & Deep Hyaline Zones',
      description:
        'A smooth, avascular and aneural tissue composed of Type II collagen and proteoglycans. Provides an almost frictionless gliding surface, but lacks sensory pain receptors and possesses limited self-repair capacity.',
      highlightColor: '#0071e3',
    },
    {
      depth: '2.5 – 4.0 mm',
      name: 'Subchondral Bone Plate',
      subtitle: 'Mineralized Cortical Foundation',
      description:
        'The specialized, dense layer of bone positioned directly beneath the calcified cartilage. Richly vascularized and innervated with pain fibers. In osteoarthritis, this layer can thicken (sclerosis) and undergo altered bone remodeling.',
      highlightColor: '#0071e3',
    },
    {
      depth: '4.0 – 8.0 mm',
      name: 'Trabecular Cancellous Bone',
      subtitle: 'Porous Biomechanical Shock Absorber',
      description:
        'A dynamic, three-dimensional honeycomb lattice of bone struts (trabeculae). It dampens and disperses walking and running impact loads throughout the joint.',
      highlightColor: '#30b0c7',
    },
    {
      depth: '> 8.0 mm',
      name: 'Subchondral Bone Marrow',
      subtitle: 'Vascular & Cellular Compartment',
      description:
        'Contains blood vessels, mesenchymal cells, and sensory nerve endings. Magnetic resonance imaging (MRI) can identify areas of localized stress and edema known as bone marrow lesions (BMLs) here.',
      highlightColor: '#0071e3',
    },
  ];

  const triggerLoadSimulation = () => {
    setLoadSimulated(true);
    setTimeout(() => setLoadSimulated(false), 2400);
  };

  return (
    <div className="w-full rounded-3xl border border-[#E5E5EA] bg-[#FBFBFD] overflow-hidden p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Visual Micro-Section & Interactive Zoom */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#D2D2D7] bg-white shadow-md group">
            
            {/* Histological / Cross-Section Image */}
            <Image
              src="/images/knee-cross-section.png"
              alt="Histological cross section of articular cartilage transitioning into subchondral bone plate and trabecular marrow"
              fill
              className={`object-cover transition-all duration-700 ${
                activeDepth === 1
                  ? 'scale-110 translate-y-[-4%]'
                  : activeDepth === 2
                  ? 'scale-120 translate-y-[-10%]'
                  : activeDepth === 3
                  ? 'scale-125 translate-y-[-16%]'
                  : 'scale-100 translate-y-0'
              }`}
            />

            {/* Scientific Stratification Overlay Lines */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 bg-gradient-to-r from-black/50 via-transparent to-black/20">
              
              {/* Load wave animation when simulated */}
              {loadSimulated && (
                <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[#0071e3]/30 via-[#0071e3]/10 to-transparent animate-pulse pointer-events-none" />
              )}

              {/* Depth Markers Overlay */}
              <div className="flex flex-col gap-6 justify-around h-full font-mono text-[10px] text-white font-medium">
                <div className={`flex items-center gap-2 transition-all ${activeDepth === 0 ? 'text-[#38bdf8] font-bold scale-105' : 'opacity-70'}`}>
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md">ZONE 1: ARTICULAR CARTILAGE</span>
                </div>
                <div className={`flex items-center gap-2 transition-all ${activeDepth === 1 ? 'text-[#00d2ff] font-bold scale-105' : 'opacity-70'}`}>
                  <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
                  <span className="px-2.5 py-1 rounded-full bg-[#0071e3] text-white">ZONE 2: SUBCHONDRAL BONE PLATE (UNDER CARTILAGE)</span>
                </div>
                <div className={`flex items-center gap-2 transition-all ${activeDepth === 2 ? 'text-[#2dd4bf] font-bold scale-105' : 'opacity-70'}`}>
                  <span className="w-2 h-2 rounded-full bg-[#2dd4bf]" />
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md">ZONE 3: TRABECULAR SPONGIOSA</span>
                </div>
                <div className={`flex items-center gap-2 transition-all ${activeDepth === 3 ? 'text-white font-bold scale-105' : 'opacity-70'}`}>
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md">ZONE 4: BONE MARROW SPACE</span>
                </div>
              </div>
            </div>

            {/* Live Load Simulation Trigger */}
            <button
              onClick={triggerLoadSimulation}
              disabled={loadSimulated}
              className="absolute bottom-3 right-3 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#0071e3]/40 text-xs font-semibold text-[#0071e3] hover:bg-[#0071e3] hover:text-white transition-all shadow-md"
            >
              <Zap className={`w-3.5 h-3.5 ${loadSimulated ? 'animate-bounce' : ''}`} />
              <span>{loadSimulated ? 'TRANSDUCING LOAD...' : 'SIMULATE JOINT LOAD'}</span>
            </button>
          </div>

          {/* Depth Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-4">
            {strata.map((s, idx) => (
              <button
                key={s.name}
                onClick={() => setActiveDepth(idx)}
                className={`px-3 py-2 rounded-xl text-left border transition-all ${
                  activeDepth === idx
                    ? 'bg-white border-[#0071e3] shadow-[0_2px_10px_rgba(0,113,227,0.12)]'
                    : 'bg-[#F5F5F7] border-transparent text-[#6e6e73] hover:bg-[#EAEAEA]'
                }`}
              >
                <div className="text-[10px] font-mono text-[#86868b]">{s.depth}</div>
                <div className="text-xs font-semibold text-[#1d1d1f] truncate mt-0.5">{s.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Scientific Micro-Layer Details */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0071e3] px-3 py-1 rounded-full bg-[#0071e3]/10 w-fit">
            <Layers className="w-3.5 h-3.5" />
            <span>DEPTH STRATUM: {strata[activeDepth].depth}</span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight mb-1">
              {strata[activeDepth].name}
            </h3>
            <div className="text-xs font-medium text-[#0071e3] mb-4">
              {strata[activeDepth].subtitle}
            </div>
            <p className="text-sm text-[#424245] leading-relaxed">
              {strata[activeDepth].description}
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-[#E5E5EA] bg-white space-y-2 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1d1d1f]">
              <Shield className="w-4 h-4 text-[#0071e3]" />
              <span>Biomechanical Relationship</span>
            </div>
            <p className="text-xs text-[#6e6e73] leading-relaxed">
              Subchondral bone plate and articular cartilage function as an integrated biomechanical unit (the osteochondral junction). Stiffness changes in the subchondral bone alter stress distribution across the overlying cartilage.
            </p>
          </div>

          {/* Scientific Clinical Note */}
          <div className="text-[11px] text-[#86868b] font-mono border-l-2 border-[#0071e3]/30 pl-3">
            *Note: Subchondral bone remodeling in osteoarthritis is an active clinical area. Bone structural changes are individualized and evaluated in concert with full diagnostic imaging.
          </div>
        </div>
      </div>
    </div>
  );
};
