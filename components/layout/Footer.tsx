import React from 'react';
import { Mail, MapPin, ShieldAlert } from 'lucide-react';
import { CLINIC_CONTACT } from '@/data/contact';
import { ContactActions } from '@/components/ui/ContactActions';
import { BrandMark } from '@/components/ui/BrandMark';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#051320] text-white/60 text-xs py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-9 sm:space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 pb-9 border-b border-white/10">
          <div className="lg:col-span-5 flex flex-col justify-between gap-7">
            <div>
              <BrandMark className="mb-3 w-[154px]" />
              <p className="max-w-sm text-sm leading-relaxed text-white/55">
                A whole-joint view of knee pain, osteoarthritis and the structures beneath the cartilage.
              </p>
            </div>

            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/70 font-medium">
              <a href="#oa-explanation" className="hover:text-white transition-colors">Why Subchond</a>
              <a href="#subchondral-bone" className="hover:text-white transition-colors">The joint</a>
              <a href="#treatment" className="hover:text-white transition-colors">Treatment</a>
              <a href="#candidate" className="hover:text-white transition-colors">Assessment</a>
              <a href="#doctor" className="hover:text-white transition-colors">Dr. Manu Bora</a>
              <a href="#science" className="hover:text-white transition-colors">Research</a>
            </nav>
          </div>

          <aside className="lg:col-span-7 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,113,227,0.18),rgba(255,255,255,0.045)_58%,rgba(37,211,102,0.07))] px-5 py-5 sm:px-7 sm:py-6 shadow-[0_18px_48px_rgba(0,0,0,0.16)]">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-[#78B9FF]">SPEAK WITH THE CLINICAL TEAM</p>
                <h2 className="mt-2 text-xl sm:text-2xl font-medium tracking-tight text-white">Questions, scans or a next step?</h2>
                <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/60">Call the clinic, or share an MRI or X-ray on WhatsApp for an initial conversation.</p>
              </div>
              <span className="shrink-0 rounded-full border border-[#25D366]/25 bg-[#25D366]/10 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.1em] text-[#9AE8B7]">MRI / X-RAY WELCOME</span>
            </div>

            <ContactActions tone="dark" showNumbers className="mt-5" />

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-white/10 pt-4 text-[11px] leading-relaxed text-white/55">
              <a href={`mailto:${CLINIC_CONTACT.email}`} className="group flex items-start gap-2.5 hover:text-white transition-colors">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#78B9FF]" />
                <span><span className="block font-semibold text-white/80">Email the team</span>{CLINIC_CONTACT.email}</span>
              </a>
              <a href="https://maps.google.com/?q=F%2010%2F4%2C%20Golf%20Course%20Road%2C%20DLF%20Phase%201%2C%20Sector%2027%2C%20Gurugram%2C%20Haryana%20122001" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2.5 hover:text-white transition-colors">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#78B9FF]" />
                <span><span className="block font-semibold text-white/80">Clinic location</span>{CLINIC_CONTACT.address}</span>
              </a>
            </div>
          </aside>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-white">
            <ShieldAlert className="h-4 w-4 text-[#78B9FF]" />
            <span>Clinical & medical disclaimer</span>
          </div>
          <p className="mt-2 max-w-6xl text-[11px] leading-relaxed text-white/55">
            SUBCHOND provides educational and clinical assessment information about knee health. Content on this website does not constitute a diagnosis or establish a doctor-patient relationship before a direct clinical evaluation. Treatment suitability and outcomes require an individualized assessment by a registered medical specialist.
          </p>
        </div>

        {/* Copyright and clinical contact */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-[11px] pt-2">
          <div>
            © {new Date().getFullYear()} SUBCHOND (subchond.com). All rights reserved.
          </div>

          <div className="flex items-center gap-6 font-medium">
            <a href={`mailto:${CLINIC_CONTACT.email}?subject=Privacy%20or%20terms%20request`} className="hover:text-white transition-colors">Privacy & terms</a>
            <a href={`mailto:${CLINIC_CONTACT.email}?subject=Medical%20ethics%20enquiry`} className="hover:text-white transition-colors">Medical ethics</a>
            <a href={`mailto:${CLINIC_CONTACT.email}`} className="hover:text-[#78B9FF] transition-colors">
              Contact: {CLINIC_CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
