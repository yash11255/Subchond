'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-4 inset-x-4 z-40 animate-in fade-in slide-in-from-bottom duration-300"
    >
      <div className="bg-white/90 backdrop-blur-2xl border border-black/[0.08] p-2.5 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.15)] flex items-center justify-between gap-2.5">
        <a
          href="https://wa.me/?text=Hello%20SUBCHOND%20team,%20I%20would%20like%20to%20inquire%20about%20a%20knee%20assessment."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] text-[#1d1d1f] hover:bg-[#EAEAEA] flex items-center justify-center transition-colors"
          aria-label="WhatsApp Inquiry"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
        </a>

        <a
          href="#assessment"
          className="flex-1 py-3 px-5 rounded-full bg-[#0071e3] text-white text-xs font-semibold tracking-wide text-center flex items-center justify-center gap-1.5 shadow-sm shadow-[#0071e3]/25"
        >
          <span>GET MY KNEE ASSESSED</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>
      </div>
    </aside>
  );
};
