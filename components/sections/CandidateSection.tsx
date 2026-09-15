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
  const selectionProgress = Math.round((selected.length / criteria.length) * 100);

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
      className="py-16 md:py-20 lg:py-[clamp(4.5rem,8vh,6rem)] px-4 sm:px-6 lg:px-8 bg-[#F7F8FA] relative overflow-hidden border-t border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-8 lg:space-y-9 relative z-10">
        {/* Compact assessment header with a live, non-diagnostic selection indicator. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 lg:items-end">
          <div className="lg:col-span-8 max-w-4xl space-y-4">
            <div className="reference-kicker">
              <span>Candidate assessment</span>
              <span className="reference-kicker-index">06</span>
            </div>
            <h2 className="text-section-headline text-[#111827] font-light tracking-tight">
              Could a joint-preservation <span className="reference-title-muted">assessment be right for you?</span>
            </h2>
            <p className="text-editorial-body text-[#4B5563] max-w-[62ch]">
              Select the statements that reflect your current situation. This is a starting point for a clinical conversation, not a diagnosis.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex items-center gap-4 lg:justify-end"
          >
            <div className="h-14 w-14 rounded-full p-1.5 bg-white shadow-[0_10px_28px_rgba(14,37,54,0.10)]" style={{ background: `conic-gradient(#0071E3 ${selectionProgress}%, rgba(0,113,227,0.12) 0)` }}>
              <div className="h-full w-full rounded-full bg-[#F7F8FA] flex items-center justify-center text-[11px] font-mono font-semibold text-[#102A3B]">{selected.length}/6</div>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#111827]">Your current picture</p>
              <p className="mt-1 text-[11px] leading-relaxed text-[#667085]">Review selected criteria with a specialist.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Six concise, animated selection cards fit within a compact grid. */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {criteria.map((item, index) => {
              const isChecked = selected.includes(item.id);
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => toggleCriterion(item.id)}
                  aria-pressed={isChecked}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.42, delay: index * 0.055, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  className={`min-h-[94px] p-4 rounded-2xl text-left transition-colors border flex items-start gap-3 ${
                    isChecked ? 'bg-white border-[#0071E3] shadow-[0_8px_22px_rgba(0,113,227,0.09)]' : 'bg-white/55 border-transparent hover:bg-white hover:border-black/[0.07]'
                  }`}
                >
                  <motion.span animate={{ scale: isChecked ? 1 : 0.9 }} transition={{ duration: 0.2 }} className={`mt-0.5 h-5 w-5 rounded-full border flex items-center justify-center shrink-0 ${isChecked ? 'bg-[#0071E3] border-[#0071E3] text-white' : 'border-[#C7C7CC] bg-white'}`}>
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </motion.span>
                  <span>
                    <span className={`block text-sm font-semibold tracking-tight ${isChecked ? 'text-[#0071E3]' : 'text-[#111827]'}`}>{item.title}</span>
                    <span className="mt-1 block text-[11px] leading-relaxed text-[#667085] line-clamp-2">{item.description}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Responsive joint visual turns the selections into a composed clinical panel. */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative mx-auto h-[250px] sm:h-[280px] w-full max-w-[390px] overflow-hidden rounded-[1.8rem] bg-[#0C1922] shadow-[0_22px_50px_rgba(10,30,44,0.22)]">
              <motion.div className="absolute inset-[13%] rounded-full border border-[#54A7FF]/40" animate={{ scale: [0.94, 1.08, 0.94], opacity: [0.25, 0.65, 0.25] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.div className="absolute inset-[24%] rounded-full border border-[#54A7FF]/25" animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }} />
              <motion.div animate={{ y: selected.length >= 3 ? -4 : 2, scale: selected.length >= 3 ? 1.025 : 1 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0">
                <Image src="/images/knee-anatomy.png" alt="Candidate assessment joint visualization" fill sizes="(max-width: 640px) 100vw, 390px" className="object-contain p-3 filter contrast-105 drop-shadow-[0_20px_32px_rgba(0,0,0,0.55)]" />
              </motion.div>
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-mono font-semibold tracking-[0.12em] text-[#102A3B]">JOINT REVIEW</div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/70"><span>SELECTED CRITERIA</span><span className="text-[#54A7FF]">0{selected.length} / 06</span></div>
            </div>

            <div className="mt-3 grid grid-cols-[1fr_auto] gap-3 items-center rounded-2xl border border-black/[0.08] bg-white/80 px-4 py-3">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-[#111827] font-semibold text-[11px]"><ShieldAlert className="w-3.5 h-3.5 text-[#0071E3]" />Clinical triage notice</div>
                <p className="mt-1 text-[10px] leading-relaxed text-[#667085]">Assessment does not guarantee treatment suitability or outcomes.</p>
              </div>
              <a href="#assessment" className="shrink-0 rounded-full bg-[#0071E3] px-4 py-2.5 text-[10px] font-semibold tracking-wide text-white transition-all hover:bg-[#0055B3] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"><span>START</span><ArrowRight className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
