'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VideoPlayer } from '../ui/VideoPlayer';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Approach: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stages = [
    {
      number: '01',
      title: 'Listen',
      subtitle: 'Understand symptoms, activity and goals.',
      description:
        'We begin with your daily reality. When does pain emerge? Is it walking, climbing stairs, or resting at night? What physical activities are you seeking to preserve or return to?',
      videoTitle: 'Phase 01: Symptom & Activity Mapping',
      videoSrc: '/videos/oa-whole-joint.mp4',
      poster: '/images/knee-anatomy.png',
    },
    {
      number: '02',
      title: 'Investigate',
      subtitle: 'Review examination and imaging.',
      description:
        'Detailed correlation of weight-bearing X-rays (bony joint space, axis alignment) with high-field MRI sequences (subchondral bone marrow lesions, meniscal root tears, synovial thickening).',
      videoTitle: 'Phase 02: Radiological Joint Correlation',
      videoSrc: '/videos/subchondral-bone.mp4',
      poster: '/images/mri-knee.jpg',
    },
    {
      number: '03',
      title: 'Understand',
      subtitle: 'Look at the whole joint — not one structure alone.',
      description:
        'Synthesizing how the osteochondral junction, subchondral plate remodeling, meniscal load dampening, and mechanical axis interact to produce your specific symptoms.',
      videoTitle: 'Phase 03: Multi-Tissue Synthesis',
      videoSrc: '/videos/hero-knee.mp4',
      poster: '/images/knee-cross-section.png',
    },
    {
      number: '04',
      title: 'Plan',
      subtitle: 'Discuss treatment options appropriate for the individual patient.',
      description:
        'Formulating an individualized, transparent pathway spanning targeted rehabilitation, load modification, medical therapies, injection modalities, or timely surgical referral.',
      videoTitle: 'Phase 04: Individualized Roadmap',
      videoSrc: '/videos/dr-manu.mp4',
      poster: '/images/dr-manu-bora.jpg',
    },
  ];

  return (
    <section
      id="approach"
      className="py-16 md:py-20 lg:py-[clamp(4.5rem,8vh,6rem)] px-4 sm:px-6 lg:px-8 bg-[#F7F8FA] relative overflow-hidden border-t border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-8 lg:space-y-10 relative z-10">
        
        {/* Editorial Headline */}
        <div className="max-w-5xl space-y-4">
          <div className="reference-kicker">
            <span>The Subchond approach</span>
            <span className="reference-kicker-index">04</span>
          </div>

          <h2 className="text-section-headline text-[#111827] font-light tracking-tight">
            Start with the joint. <br />
            <span className="reference-title-muted">Then decide on treatment.</span>
          </h2>
        </div>

        {/* Horizontal Storytelling Sequence (01 → 02 → 03 → 04) with Large Numbers & Video Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: 4 Horizontal Storytelling Steps */}
          <div className="lg:col-span-7 flex flex-col space-y-2">
            {stages.map((stage, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={stage.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-white border-[#0071E3] shadow-[0_12px_32px_rgba(0,113,227,0.08)]'
                      : 'bg-transparent border-transparent hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-2xl sm:text-3xl font-light tracking-tight transition-colors ${
                        isActive ? 'text-[#0071E3]' : 'text-[#9CA3AF]'
                      }`}
                    >
                      {stage.number}
                    </span>

                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-medium text-[#111827] tracking-tight">
                          {stage.title}
                        </h3>
                        {isActive && (
                          <span className="text-xs font-mono text-[#0071E3] uppercase tracking-wider hidden sm:inline">
                            STAGE {stage.number}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm font-medium text-[#4B5563]">
                        {stage.subtitle}
                      </p>

                      {isActive && (
                        <p className="text-xs text-[#667085] pt-2.5 leading-relaxed border-t border-black/[0.06] mt-2.5">
                          {stage.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Video in The Subchond Approach */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[460px] space-y-2.5">
              {/* Step indicator tag above video */}
              <div className="flex items-center justify-between text-xs font-semibold px-1">
                <span className="text-[#111827]">
                  STAGE {stages[activeStep].number}: {stages[activeStep].title.toUpperCase()}
                </span>
                <span className="text-[#0071E3] font-mono">CINEMATIC REVEAL</span>
              </div>

              {/* Video Player Component with Apple styling */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.1)] border border-black/[0.08]">
                <VideoPlayer
                  key={stages[activeStep].number}
                  src={stages[activeStep].videoSrc}
                  poster={stages[activeStep].poster}
                  title={stages[activeStep].videoTitle}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  className="aspect-[16/10] w-full"
                />
              </div>

              <div className="text-center pt-1">
                <div className="text-sm font-medium text-[#111827] tracking-tight">
                  One knee. One complete picture.
                </div>
                <div className="text-xs text-[#667085] mt-0.5">
                  Diagnostics precede interventions. Always.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
