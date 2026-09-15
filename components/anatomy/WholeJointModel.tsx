'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Activity, ShieldAlert, ArrowDownUp, Disc, Eye } from 'lucide-react';

export type OAStructureKey = 'cartilage' | 'subchondral' | 'meniscus' | 'synovium' | 'alignment';

interface StructureInfo {
  id: OAStructureKey;
  label: string;
  badge: string;
  role: string;
  inOA: string;
  color: string;
}

export const WholeJointModel: React.FC = () => {
  const [selectedStructure, setSelectedStructure] = useState<OAStructureKey>('subchondral');

  const structures: StructureInfo[] = [
    {
      id: 'cartilage',
      label: 'Articular Cartilage',
      badge: 'SURFACE LAYER',
      role: 'Reduces joint friction and distributes compressive forces.',
      inOA: 'Undergoes fibrillations, vertical fissuring, and gradual thinning; lacks intrinsic pain receptors.',
      color: '#0071e3',
    },
    {
      id: 'subchondral',
      label: 'Subchondral Bone',
      badge: 'SUPPORTING BASE',
      role: 'Dense bone layer beneath cartilage providing dynamic mechanical support.',
      inOA: 'Subject to micro-fractures, bone marrow lesions (BMLs), and subchondral sclerosis; richly innervated by pain fibers.',
      color: '#0071e3',
    },
    {
      id: 'meniscus',
      label: 'Meniscus',
      badge: 'FIBROCARTILAGE',
      role: 'Crescent cushions that stabilize the joint and distribute 50% to 70% of contact stress.',
      inOA: 'Radial tears, degenerative fraying, and meniscal extrusion can accelerate compartment overload.',
      color: '#30b0c7',
    },
    {
      id: 'synovium',
      label: 'Synovial Membrane',
      badge: 'LINING & FLUID',
      role: 'Produces nourishing hyaluronic-acid-rich synovial fluid for the joint.',
      inOA: 'Inflammation (synovitis) releases inflammatory cytokines, stimulating joint effusion and pain sensors.',
      color: '#af52de',
    },
    {
      id: 'alignment',
      label: 'Mechanical Alignment',
      badge: 'LOAD AXIS',
      role: 'Maintains equal weight transmission through the mechanical axis (Mikulicz line).',
      inOA: 'Varus (bow-legged) or valgus (knock-kneed) malalignment disproportionately overloads one compartment.',
      color: '#ff9500',
    },
  ];

  const current = structures.find((s) => s.id === selectedStructure)!;

  return (
    <div className="w-full rounded-3xl border border-[#E5E5EA] bg-[#FBFBFD] p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Visual Knee Container */}
        <div className="lg:col-span-6 relative aspect-square rounded-2xl bg-white border border-[#E5E5EA] overflow-hidden flex items-center justify-center p-6 shadow-sm">
          <div className="relative w-full h-full">
            <Image
              src="/images/knee-anatomy.png"
              alt="Whole joint knee model showing multi-structural interaction"
              fill
              className="object-contain filter contrast-105 drop-shadow-md"
            />

            {/* Interactive SVG Highlights for Each Specific Structure */}
            <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Cartilage Highlight */}
              {selectedStructure === 'cartilage' && (
                <g className="animate-pulse">
                  <path
                    d="M220 200 Q300 160 380 200 Q380 290 300 270 Q220 290 220 200 Z"
                    fill="#0071e3"
                    fillOpacity="0.18"
                    stroke="#0071e3"
                    strokeWidth="3"
                  />
                  <line x1="300" y1="230" x2="450" y2="150" stroke="#0071e3" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="450" cy="150" r="4" fill="#0071e3" />
                </g>
              )}

              {/* Subchondral Bone Highlight (UNDER Cartilage) */}
              {selectedStructure === 'subchondral' && (
                <g>
                  <path
                    d="M240 200 Q300 180 360 200 Q360 280 300 255 Q240 280 240 200 Z"
                    fill="#0071e3"
                    fillOpacity="0.25"
                    stroke="#0071e3"
                    strokeWidth="3.5"
                    className="animate-pulse"
                  />
                  <path
                    d="M220 350 Q300 355 380 350 Q370 380 300 385 Q230 380 220 350 Z"
                    fill="#0071e3"
                    fillOpacity="0.25"
                    stroke="#0071e3"
                    strokeWidth="3.5"
                    className="animate-pulse"
                  />
                  <line x1="300" y1="365" x2="120" y2="400" stroke="#0071e3" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="120" cy="400" r="4" fill="#0071e3" />
                </g>
              )}

              {/* Meniscus Highlight */}
              {selectedStructure === 'meniscus' && (
                <g className="animate-pulse">
                  <path d="M190 310 Q240 315 250 325 Q230 338 190 310 Z" fill="#30b0c7" fillOpacity="0.3" stroke="#30b0c7" strokeWidth="3" />
                  <path d="M410 310 Q360 315 350 325 Q370 338 410 310 Z" fill="#30b0c7" fillOpacity="0.3" stroke="#30b0c7" strokeWidth="3" />
                </g>
              )}

              {/* Synovium Highlight */}
              {selectedStructure === 'synovium' && (
                <g className="animate-pulse">
                  <ellipse cx="300" cy="300" rx="190" ry="210" fill="none" stroke="#af52de" strokeWidth="2.5" strokeDasharray="8 6" />
                </g>
              )}

              {/* Alignment / Load Axis Vector */}
              {selectedStructure === 'alignment' && (
                <g>
                  <line x1="300" y1="30" x2="300" y2="570" stroke="#ff9500" strokeWidth="2.5" strokeDasharray="6 4" />
                  <polygon points="300,580 293,565 307,565" fill="#ff9500" />
                  <circle cx="250" cy="320" r="30" fill="#ff9500" fillOpacity="0.2" stroke="#ff9500" strokeWidth="2" />
                </g>
              )}
            </svg>
          </div>

          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E5E5EA] text-[11px] font-medium text-[#1d1d1f] shadow-sm">
            STRUCTURE // {current.label.toUpperCase()}
          </div>
        </div>

        {/* Interactive Selector & Clinical Explanation */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">
            Select Joint Structure to Inspect:
          </div>

          {/* Buttons for 5 structures */}
          <div className="flex flex-wrap gap-2">
            {structures.map((s) => {
              const isSelected = selectedStructure === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedStructure(s.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all border flex items-center gap-2 ${
                    isSelected
                      ? 'bg-white border-[#0071e3] text-[#0071e3] shadow-[0_2px_8px_rgba(0,113,227,0.15)] font-semibold'
                      : 'bg-[#F5F5F7] border-transparent text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#EAEAEA]'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Structural Card */}
          <div className="p-6 rounded-2xl border border-[#E5E5EA] bg-white transition-all duration-300 mt-2 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">
                {current.label}
              </h4>
              <span
                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                style={{
                  color: current.color,
                  backgroundColor: `${current.color}15`,
                }}
              >
                {current.badge}
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="font-semibold text-[#86868b] text-[11px] block uppercase">
                  Normal Physiological Role:
                </span>
                <p className="text-[#1d1d1f] mt-0.5">{current.role}</p>
              </div>

              <div>
                <span className="font-semibold text-[#86868b] text-[11px] block uppercase">
                  In Osteoarthritis / Joint Pain:
                </span>
                <p className="text-[#424245] mt-0.5">{current.inOA}</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#6e6e73] leading-relaxed font-normal pt-2">
            Osteoarthritis manifests as biological and mechanical dysregulation across the entire joint organ. Assessing solely one tissue while overlooking the subchondral bone, menisci, or alignment yields an incomplete diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
};
