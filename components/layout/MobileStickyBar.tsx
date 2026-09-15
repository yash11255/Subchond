'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { CLINIC_CONTACT, getWhatsAppLink } from '@/data/contact';
import { WhatsAppMark } from '@/components/ui/ContactActions';

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
      <div className="bg-white/90 backdrop-blur-2xl border border-black/[0.08] p-2 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.15)] flex items-center justify-between gap-2">
        <a
          href={CLINIC_CONTACT.call.href}
          className="p-2.5 rounded-full bg-[#EAF4FF] border border-[#0071E3]/15 text-[#0067CB] hover:bg-[#DDEEFF] flex items-center justify-center transition-colors"
          aria-label={`Call an Ortho Expert at ${CLINIC_CONTACT.call.display}`}
          title="Call an Ortho Expert"
        >
          <Phone className="w-5 h-5" strokeWidth={2.25} />
        </a>
        <a
          href={getWhatsAppLink('Hello Dr. Manu Bora’s team, I would like to share my MRI or X-ray for an online opinion.')}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          aria-label={`WhatsApp your MRI or X-ray to ${CLINIC_CONTACT.whatsapp.display}`}
          title="WhatsApp Your MRI / X-Ray"
        >
          <WhatsAppMark className="w-7 h-7" />
        </a>

        <a
          href="#assessment"
          className="flex-1 py-3 px-4 rounded-full bg-[#0071e3] text-white text-[11px] font-semibold tracking-wide text-center flex items-center justify-center gap-1.5 shadow-sm shadow-[#0071e3]/25"
        >
          <span>ASSESS MY KNEE</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>
      </div>
    </aside>
  );
};
