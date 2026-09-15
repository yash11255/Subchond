import React from 'react';
import { Phone } from 'lucide-react';
import { CLINIC_CONTACT, getWhatsAppLink } from '@/data/contact';
import { WhatsAppMark } from '@/components/ui/ContactActions';

export const FloatingContact: React.FC = () => {
  return (
    <aside aria-label="Quick contact options" className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 md:flex">
      <a
        href={CLINIC_CONTACT.call.href}
        aria-label={`Call an Ortho Expert at ${CLINIC_CONTACT.call.display}`}
        className="group relative grid h-12 w-12 place-items-center rounded-[1.05rem] border border-white/10 bg-[#071A2B] text-white shadow-[0_12px_28px_rgba(5,19,32,0.24)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(5,19,32,0.3)] active:translate-y-0"
      >
        <Phone className="h-5 w-5" strokeWidth={2.15} />
        <span className="pointer-events-none absolute right-[calc(100%+0.7rem)] whitespace-nowrap rounded-lg bg-[#071A2B] px-3 py-2 text-[10px] font-semibold tracking-wide text-white opacity-0 shadow-[0_10px_24px_rgba(5,19,32,0.18)] transition-all duration-200 translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
          Call an Ortho Expert
        </span>
      </a>

      <a
        href={getWhatsAppLink('Hello Dr. Manu Bora’s team, I would like to share my MRI or X-ray for an online opinion.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp your MRI or X-ray to ${CLINIC_CONTACT.whatsapp.display}`}
        className="group relative grid h-12 w-12 place-items-center rounded-[1.05rem] border border-white/10 bg-[#071A2B] shadow-[0_12px_28px_rgba(5,19,32,0.24)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(5,19,32,0.3)] active:translate-y-0"
      >
        <WhatsAppMark className="h-7 w-7" />
        <span className="pointer-events-none absolute right-[calc(100%+0.7rem)] whitespace-nowrap rounded-lg bg-[#071A2B] px-3 py-2 text-[10px] font-semibold tracking-wide text-white opacity-0 shadow-[0_10px_24px_rgba(5,19,32,0.18)] transition-all duration-200 translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
          WhatsApp Your MRI / X-Ray
        </span>
      </a>
    </aside>
  );
};
