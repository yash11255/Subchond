import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, ShieldAlert } from 'lucide-react';
import { CLINIC_CONTACT } from '@/data/contact';
import { ContactActions } from '@/components/ui/ContactActions';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#D8E0E6] bg-[#F2F6F8] px-4 py-14 text-[#4F6372] sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-9 sm:space-y-10">
        <div className="grid grid-cols-1 gap-8 border-b border-[#D8E0E6] pb-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between gap-7 lg:col-span-5">
            <div>
              <Link href="/" className="inline-block transition-transform duration-200 hover:scale-[1.015]">
                <Image src="/logo.png" alt="Subchond Joint Preservation" width={2170} height={725} className="mb-4 h-auto w-[172px]" />
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-[#5A6D7B]">
                A whole-joint view of knee pain, osteoarthritis and the structures beneath the cartilage.
              </p>
            </div>

            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-5 gap-y-3 border-t border-[#D8E0E6] pt-5 text-xs font-semibold text-[#405463]">
              <a href="#whole-joint-assessment" className="transition-colors hover:text-[#0071E3]">Why Subchond</a>
              <a href="#knee-pain-drivers" className="transition-colors hover:text-[#0071E3]">Understand Your Pain</a>
              <a href="#real-outcomes" className="transition-colors hover:text-[#0071E3]">Real Outcomes</a>
              <a href="#assessment" className="transition-colors hover:text-[#0071E3]">Get Assessed</a>
            </nav>
          </div>

          <aside className="border border-[#D8E0E6] bg-white p-5 shadow-[0_18px_42px_rgba(10,30,44,0.05)] sm:p-7 lg:col-span-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[0.16em] text-[#0071E3]">CLINICAL CONTACT</p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#102A3B] sm:text-2xl">Questions, scans or a next step?</h2>
                <p className="mt-2 max-w-xl text-xs leading-relaxed text-[#5A6D7B]">Call the clinic, or share an MRI or X-ray on WhatsApp for an initial conversation.</p>
              </div>
              <span className="shrink-0 border border-[#BCD4E8] bg-[#F2F8FD] px-3 py-1.5 text-[10px] font-semibold tracking-[0.1em] text-[#0E5F9E]">MRI / X-RAY WELCOME</span>
            </div>

            <ContactActions showNumbers className="mt-5" />

            <div className="mt-5 grid grid-cols-1 gap-3 border-t border-[#D8E0E6] pt-4 text-[11px] leading-relaxed text-[#5A6D7B] sm:grid-cols-2">
              <a href={`mailto:${CLINIC_CONTACT.email}`} className="group flex items-start gap-2.5 transition-colors hover:text-[#102A3B]">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0071E3]" />
                <span><span className="block font-semibold text-[#102A3B]">Email the team</span>{CLINIC_CONTACT.email}</span>
              </a>
              <a href="https://maps.google.com/?q=F%2010%2F4%2C%20Golf%20Course%20Road%2C%20DLF%20Phase%201%2C%20Sector%2027%2C%20Gurugram%2C%20Haryana%20122001" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2.5 transition-colors hover:text-[#102A3B]">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0071E3]" />
                <span><span className="block font-semibold text-[#102A3B]">Clinic location</span>{CLINIC_CONTACT.address}</span>
              </a>
            </div>
          </aside>
        </div>

        <div className="border border-[#D8E0E6] bg-white p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#102A3B]">
            <ShieldAlert className="h-4 w-4 text-[#0071E3]" />
            <span>Clinical & medical disclaimer</span>
          </div>
          <p className="mt-2 max-w-6xl text-[11px] leading-relaxed text-[#5A6D7B]">
            SUBCHOND provides educational and clinical assessment information about knee health. Content on this website does not constitute a diagnosis or establish a doctor-patient relationship before a direct clinical evaluation. Treatment suitability and outcomes require an individualized assessment by a registered medical specialist.
          </p>
        </div>

        {/* Copyright and clinical contact */}
        <div className="flex flex-col items-center justify-between gap-4 pt-2 text-[11px] text-[#6B7F8E] sm:flex-row">
          <div>
            © {new Date().getFullYear()} SUBCHOND (subchond.com). All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-semibold">
            <a href={`mailto:${CLINIC_CONTACT.email}?subject=Privacy%20or%20terms%20request`} className="transition-colors hover:text-[#0071E3]">Privacy & terms</a>
            <a href={`mailto:${CLINIC_CONTACT.email}?subject=Medical%20ethics%20enquiry`} className="transition-colors hover:text-[#0071E3]">Medical ethics</a>
            <a href={`mailto:${CLINIC_CONTACT.email}`} className="transition-colors hover:text-[#0071E3]">
              Contact: {CLINIC_CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
