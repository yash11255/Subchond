'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../../data/faqData';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-01');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-20 lg:py-[clamp(4.5rem,8vh,6rem)] px-4 sm:px-6 lg:px-8 bg-[#F7F8FA] relative overflow-hidden border-t border-black/[0.08]"
    >
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Editorial Headline */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2.5">
            <span className="font-mono text-xs font-semibold text-[#0071E3] tracking-wider px-2.5 py-0.5 rounded-full bg-[#0071E3]/10">
              10
            </span>
            <span className="text-xs font-semibold text-[#667085] tracking-widest uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-section-headline text-[#111827] font-light tracking-tight">
            Questions patients <br />
            <span className="text-[#0071E3] font-normal">usually ask.</span>
          </h2>
        </div>

        {/* Minimal Editorial Accordion (Clean 1px borders, generous padding, zero clutter) */}
        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-6 sm:py-8 transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full text-left flex items-start justify-between gap-6"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-xl sm:text-2xl font-light text-[#111827] tracking-tight leading-snug">
                    {item.question}
                  </h3>
                  <span
                    className={`w-7 h-7 rounded-full border border-black/[0.1] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#111827] text-white border-transparent' : 'bg-white text-[#667085]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="pt-4 pr-12 text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
