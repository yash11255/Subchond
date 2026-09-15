'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ContactActions } from '@/components/ui/ContactActions';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] py-32 px-4 sm:px-6 lg:px-8 bg-[#071A2B] text-white flex flex-col justify-center items-center overflow-hidden border-t border-white/10">
      
      {/* Large Knee Anatomy Slowly Moving in Background */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[700px] sm:w-[900px] aspect-square">
          <Image
            src="/images/knee-anatomy.png"
            alt="Cinematic knee anatomy background"
            fill
            sizes="900px"
            className="object-contain filter blur-[1px] brightness-110"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />

      {/* Foreground Content */}
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="reference-kicker justify-center text-[#60a5fa]">
          <span className="bg-[#071A2B] px-1">Subchond evaluation</span>
        </div>

        <h2 className="text-section-headline text-white font-light tracking-tight">
          Before you treat your knee, <br />
          <span className="text-slate-300 font-normal">understand it.</span>
        </h2>

        <p className="text-editorial-body text-white/70 max-w-2xl mx-auto">
          Start with a structured assessment of your symptoms, imaging and whole-joint health—or speak with the clinical team first.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3">
          <a
            href="#assessment"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#0071E3] text-white text-xs font-semibold tracking-wider hover:bg-[#0055B3] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#0071E3]/30 text-center"
          >
            <span>GET MY KNEE ASSESSED</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <ContactActions tone="dark" />
        </div>
      </div>
    </section>
  );
};
