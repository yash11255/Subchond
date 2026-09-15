'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Info } from 'lucide-react';

export const TreatmentSpectrum: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number>(0);

  const treatmentTiers = [
    {
      id: 'activity-rehab',
      label: 'Activity & Rehabilitation',
      tagline: 'Neuromuscular shock absorption & load management',
      description:
        'Targeted quadriceps and kinetic chain conditioning, aerobic exercise, and biomechanical offloading. Strong muscles act as active shock absorbers, reducing peak compressive impacts delivered to the subchondral bone.',
      indication: 'Foundational first-line strategy across all stages of joint health.',
      keyNote: 'Level 1 clinical trial evidence demonstrates pain reduction and functional benefits comparable to standard pharmacotherapy.',
    },
    {
      id: 'medication',
      label: 'Medication / Symptom Management',
      tagline: 'Topical & systemic inflammatory control',
      description:
        'Judicious, intermittent use of topical NSAIDs, oral anti-inflammatory agents, or analgesics to control acute flare-ups and enable pain-free participation in physical rehabilitation.',
      indication: 'Short-to-intermediate management of inflammatory symptoms and effusion.',
      keyNote: 'Guidelines recommend topical formulations first to minimize systemic exposure, especially in older adults.',
    },
    {
      id: 'injections',
      label: 'Injections where Appropriate',
      tagline: 'Image-guided intra-articular targeted modalities',
      description:
        'Ultrasound-guided delivery of viscosupplementation (hyaluronic acid) to replenish fluid lubrication, or corticosteroids for rapid modulation of acute inflammatory effusion.',
      indication: 'For selected patients experiencing persistent symptoms unresponsive to oral conservative measures.',
      keyNote: 'Intra-articular injections aim to reduce symptoms to permit rehabilitation; they do not regenerate worn cartilage.',
    },
    {
      id: 'biologics',
      label: 'Biologic & Orthobiologic Options',
      tagline: 'Autologous cellular & platelet signaling protocols',
      description:
        'Platelet-rich plasma (PRP) or autologous cellular preparations evaluated under strict clinical protocols to modulate the intra-articular inflammatory environment and support tissue homeostasis.',
      indication: 'Discussed for carefully stratified candidates with mild-to-moderate structural disease.',
      keyNote: 'Clinical evidence and outcomes vary by preparation method and patient phenotype. Requires specialist counseling without unsupported claims.',
    },
    {
      id: 'surgery',
      label: 'Surgical Options when Indicated',
      tagline: 'Corrective osteotomy to unicompartmental / total joint replacement',
      description:
        'Realignment osteotomy to shift mechanical load to healthy bone compartments, or partial/total knee arthroplasty to replace severely destroyed articulating surfaces and collapsed subchondral bone.',
      indication: 'For advanced end-stage joint disease, refractory bone-on-bone pain, and significant loss of mobility.',
      keyNote: 'Arthroplasty is a highly proven, life-enhancing intervention when non-surgical pathways have been exhausted.',
    },
  ];

  const current = treatmentTiers[activeTier];

  return (
    <section
      id="treatment"
      className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Editorial Headline */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-semibold text-[#0071E3] tracking-wider px-2.5 py-0.5 rounded-full bg-[#0071E3]/10">
              05
            </span>
            <span className="text-xs font-semibold text-[#667085] tracking-widest uppercase">
              TREATMENT CONTINUUM
            </span>
          </div>

          <h2 className="text-section-headline text-[#111827] font-light tracking-tight">
            Different knees. <br />
            <span className="text-[#0071E3] font-normal">Different decisions.</span>
          </h2>

          <p className="text-editorial-body text-[#4B5563]">
            Treatment should depend on the individual patient, the structures involved, the severity of disease, symptoms and goals.
          </p>
        </div>

        {/* Treatment Spectrum Selector - Clean Editorial Buttons */}
        <div className="flex flex-wrap gap-2 pt-2 border-b border-black/[0.08] pb-6">
          {treatmentTiers.map((tier, idx) => {
            const isSelected = activeTier === idx;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTier(idx)}
                className={`px-5 py-3 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isSelected
                    ? 'bg-[#111827] text-white shadow-sm'
                    : 'bg-[#F7F8FA] text-[#667085] hover:text-[#111827] hover:bg-[#EAEAEA]'
                }`}
              >
                {tier.label}
              </button>
            );
          })}
        </div>

        {/* Large Editorial Panel for Active Treatment Option */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="text-xs font-mono text-[#0071E3] uppercase tracking-wider">
              SPECTRUM TIER 0{activeTier + 1}
            </div>

            <h3 className="text-3xl sm:text-4xl font-light text-[#111827] tracking-tight">
              {current.tagline}
            </h3>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
              {current.description}
            </p>

            <div className="pt-4 border-t border-black/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#111827] uppercase tracking-wider block">
                  Clinical Indication:
                </span>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {current.indication}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider block">
                  Scientific Evidence Note:
                </span>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {current.keyNote}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[340px] flex items-center justify-center p-4">
              <Image
                src="/images/knee-anatomy.png"
                alt="Target knee zone for treatment"
                fill
                className="object-contain filter contrast-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
              />
            </div>
            <div className="text-center text-xs font-mono text-[#667085] mt-2">
              Individualized assessment determines suitability.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
