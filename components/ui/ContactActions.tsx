import React from 'react';
import { Phone } from 'lucide-react';
import { CLINIC_CONTACT, getWhatsAppLink } from '@/data/contact';

interface WhatsAppMarkProps {
  className?: string;
}

export const WhatsAppMark: React.FC<WhatsAppMarkProps> = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      fill="#fff"
      d="M24.7 7.2A11.95 11.95 0 0 0 16.1 3.7c-6.62 0-12 5.38-12 12 0 2.1.55 4.16 1.59 5.97L4 28.3l6.8-1.78a11.96 11.96 0 0 0 5.29 1.23h.01c6.61 0 12-5.38 12-12 0-3.2-1.25-6.2-3.4-8.55ZM16.1 25.74a9.93 9.93 0 0 1-5.07-1.39l-.36-.21-4.04 1.06 1.08-3.94-.24-.4a9.94 9.94 0 1 1 8.63 4.88Zm5.44-7.45c-.3-.15-1.77-.88-2.04-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.07-1.8-.9-2.98-1.6-4.17-3.62-.32-.55.32-.5.9-1.66.1-.2.05-.37-.03-.52-.07-.15-.68-1.63-.93-2.24-.24-.58-.5-.5-.68-.5l-.58-.01c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.49s1.06 2.89 1.2 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35Z"
    />
  </svg>
);

interface ContactActionsProps {
  className?: string;
  tone?: 'light' | 'dark';
  showNumbers?: boolean;
  compact?: boolean;
  callLabel?: string;
  whatsappLabel?: string;
  whatsappMessage?: string;
}

export const ContactActions: React.FC<ContactActionsProps> = ({
  className = '',
  tone = 'light',
  showNumbers = false,
  compact = false,
  callLabel = 'Call an Ortho Expert',
  whatsappLabel = 'WhatsApp Your MRI / X-Ray',
  whatsappMessage = 'Hello Dr. Manu Bora’s team, I would like to share my knee concern and understand the next steps.',
}) => {
  const callClass = tone === 'dark'
    ? 'border-white/20 bg-white/[0.08] text-white hover:border-white/40 hover:bg-white/[0.14]'
    : 'border-[#0D2A3A]/10 bg-white text-[#102A3B] hover:border-[#0071E3]/45 hover:bg-[#F5FAFF]';
  const whatsappClass = tone === 'dark'
    ? 'border-white/20 bg-white text-[#102A3B] hover:bg-[#E8FFF0]'
    : 'border-[#0D2A3A]/10 bg-white text-[#102A3B] hover:border-[#0071E3]/45 hover:bg-[#F5FAFF]';
  const padding = compact ? 'px-3 py-2.5 text-[10px]' : 'px-4 py-3 text-xs';

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      <a
        href={CLINIC_CONTACT.call.href}
        aria-label={`${callLabel} at ${CLINIC_CONTACT.call.display}`}
        className={`inline-flex items-center justify-center gap-2 rounded-full border font-semibold tracking-[0.08em] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${padding} ${callClass}`}
      >
        <Phone className={compact ? 'h-3.5 w-3.5' : 'h-4 w-4'} strokeWidth={2.2} />
        <span>{callLabel}{showNumbers ? ` · ${CLINIC_CONTACT.call.display}` : ''}</span>
      </a>
      <a
        href={getWhatsAppLink(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${whatsappLabel} to ${CLINIC_CONTACT.whatsapp.display}`}
        className={`inline-flex items-center justify-center gap-2 rounded-full border font-semibold tracking-[0.06em] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${padding} ${whatsappClass}`}
      >
        <WhatsAppMark className={compact ? 'h-4 w-4' : 'h-5 w-5'} />
        <span>{whatsappLabel}{showNumbers ? ` · ${CLINIC_CONTACT.whatsapp.display}` : ''}</span>
      </a>
    </div>
  );
};
