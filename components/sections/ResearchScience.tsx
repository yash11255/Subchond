'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RESEARCH_PAPERS } from '../../data/researchPapers';
import { ArrowUpRight } from 'lucide-react';

export const ResearchScience: React.FC = () => {
  return (
    <section
      id="science"
      className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#F7F8FA] relative overflow-hidden border-t border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Editorial Headline */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-semibold text-[#0071E3] tracking-wider px-2.5 py-0.5 rounded-full bg-[#0071E3]/10">
              08
            </span>
            <span className="text-xs font-semibold text-[#667085] tracking-widest uppercase">
              SCIENTIFIC LITERATURE
            </span>
          </div>

          <h2 className="text-section-headline text-[#111827] font-light tracking-tight">
            Medicine should be <br />
            <span className="text-[#0071E3] font-normal">grounded in evidence.</span>
          </h2>

          <p className="text-editorial-body text-[#4B5563]">
            Peer-reviewed investigations into subchondral bone, whole-joint dynamics, and emerging therapeutics. Evidence evolves — clinical decisions must evolve alongside it.
          </p>
        </div>

        {/* Elegant Horizontal Research Cards */}
        <div className="space-y-4">
          {RESEARCH_PAPERS.map((paper) => (
            <motion.div
              key={paper.id}
              whileHover={{ y: -2 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] hover:border-[#0071E3]/50 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xs"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-[#0071E3] font-semibold">{paper.category}</span>
                  <span className="text-[#9CA3AF]">•</span>
                  <span className="text-[#667085]">{paper.journal} ({paper.year})</span>
                </div>

                <h3 className="text-lg sm:text-xl font-medium text-[#111827] tracking-tight">
                  {paper.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {paper.summary}
                </p>
              </div>

              <div className="flex items-center justify-between lg:justify-end gap-6 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-black/[0.06]">
                <span className="text-[11px] font-mono text-[#9CA3AF]">DOI: {paper.doi}</span>
                <a
                  href={paper.pubmedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#F7F8FA] hover:bg-[#111827] text-[#111827] hover:text-white text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span>READ RESEARCH</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
