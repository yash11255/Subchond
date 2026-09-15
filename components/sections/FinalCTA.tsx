'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
            className="object-contain filter blur-[1px] brightness-110"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />

      {/* Foreground Content */}
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#0071E3] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#0071E3] animate-pulse" />
          <span>SUBCHOND EVALUATION</span>
        </div>

        <h2 className="text-section-headline text-white font-light tracking-tight">
          Before you treat your knee, <br />
          <span className="text-[#0071E3] font-normal">understand it.</span>
        </h2>

        <p className="text-editorial-body text-white/70 max-w-2xl mx-auto">
          Start with a structured assessment of your symptoms, imaging and whole-joint health.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#assessment"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#0071E3] text-white text-xs font-semibold tracking-wider hover:bg-[#0055B3] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#0071E3]/30 text-center"
          >
            <span>GET MY KNEE ASSESSED</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#science"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white/90 hover:text-white border border-white/15 text-xs font-medium tracking-wider transition-all flex items-center justify-center gap-2 text-center"
          >
            <span>EXPLORE THE SCIENCE</span>
          </a>
        </div>
      </div>
    </section>
  );
};
