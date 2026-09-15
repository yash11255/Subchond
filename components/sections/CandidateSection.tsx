'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldAlert } from 'lucide-react';

export const CandidateSection: React.FC = () => {
  const criteria = [
    {
      id: 'crit-1',
      title: 'Persistent knee pain',
      description: 'Pain lasting longer than 3 months with walking, climbing stairs, or weight-bearing activities.',
    },
    {
      id: 'crit-2',
      title: 'Known or suspected osteoarthritis',
      description: 'Prior clinical evaluation, progressive stiffness, or radiographic signs of joint space narrowing.',
    },
    {
      id: 'crit-3',
      title: 'Swelling or stiffness',
      description: 'Recurrent joint effusion or morning stiffness indicating synovial inflammation or load stress.',
    },
    {
      id: 'crit-4',
      title: 'MRI or X-ray available',
      description: 'Existing scans ready for detailed multi-planar review and clinical correlation with your pain.',
    },
    {
      id: 'crit-5',
      title: 'Knee symptoms limiting activity',
      description: 'Discomfort interfering with daily walking distance, occupational tasks, sports, or recreational hobbies.',
    },
    {
      id: 'crit-6',
      title: 'Wanting clarity before deciding on surgery',
      description: 'Seeking an objective, whole-joint second opinion on non-surgical avenues, surgery timing, and limitations.',
    },
  ];

  const [selected, setSelected] = useState<string[]>(['crit-1', 'crit-4', 'crit-6']);

  const toggleCriterion = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <section
      id="candidate"
      className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#F7F8FA] relative overflow-hidden border-t border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Editorial Headline */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-semibold text-[#0071E3] tracking-wider px-2.5 py-0.5 rounded-full bg-[#0071E3]/10">
              06
            </span>
            <span className="text-xs font-semibold text-[#667085] tracking-widest uppercase">
              CANDIDATE ASSESSMENT
            </span>
          </div>

          <h2 className="text-section-headline text-[#111827] font-light tracking-tight">
            Could a joint-preservation <br />
            <span className="text-[#0071E3] font-normal">assessment be right for you?</span>
          </h2>

          <p className="text-editorial-body text-[#4B5563]">
            A structured evaluation can help clarify what may be contributing to your symptoms and which treatment options may be appropriate.
          </p>
        </div>

        {/* Vertical Checklist with Knee Anatomy in Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 6 Animated Criteria */}
          <div className="lg:col-span-7 space-y-3">
            {criteria.map((item) => {
              const isChecked = selected.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCriterion(item.id)}
                  className={`p-5 rounded-2xl transition-all cursor-pointer border flex items-start gap-4 ${
                    isChecked
                      ? 'bg-white border-[#0071E3] shadow-[0_4px_20px_rgba(0,113,227,0.08)]'
                      : 'bg-white/60 border-transparent hover:bg-white'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 transition-colors shrink-0 ${
                      isChecked
                        ? 'bg-[#0071E3] border-[#0071E3] text-white'
                        : 'border-[#C7C7CC] bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>

                  <div>
                    <h3 className={`text-base font-medium tracking-tight ${isChecked ? 'text-[#0071E3]' : 'text-[#111827]'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#667085] mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Prominent Knee Anatomy Visual and Clear Disclaimer */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[420px] flex items-center justify-center p-4">
              <Image
                src="/images/knee-anatomy.png"
                alt="Candidate assessment joint visualization"
                fill
                className="object-contain filter contrast-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* Assessment Disclaimer Notice */}
            <div className="p-5 rounded-2xl bg-white border border-black/[0.08] text-xs text-[#667085] space-y-2 mt-4 shadow-sm w-full">
              <div className="flex items-center gap-1.5 text-[#111827] font-semibold text-[11px]">
                <ShieldAlert className="w-3.5 h-3.5 text-[#0071E3]" />
                <span>Clinical Triage Notice</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Assessment does not guarantee symptom improvement, cartilage regeneration or avoidance of surgery. Treatment suitability is individualized after specialist evaluation.
              </p>
            </div>

            {/* CTA */}
            <div className="w-full mt-5">
              <a
                href="#assessment"
                className="w-full py-4 rounded-full bg-[#0071E3] text-white text-xs font-semibold tracking-wider hover:bg-[#0055B3] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#0071E3]/25 text-center"
              >
                <span>GET MY KNEE ASSESSED</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
