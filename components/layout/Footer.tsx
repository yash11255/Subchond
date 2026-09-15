import React from 'react';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#051320] text-white/60 text-xs py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Brand Line & Quick Anchors */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 text-white font-semibold text-lg sm:text-xl tracking-tight mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0071E3]" />
              <span className="font-mono tracking-widest font-bold">SUBCHOND</span>
            </div>
            <p className="text-xs text-white/50 font-light">
              Knee pain • Osteoarthritis • Whole-joint assessment
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-white/70 font-medium">
            <a href="#oa-explanation" className="hover:text-white transition-colors">Why Subchond</a>
            <a href="#subchondral-bone" className="hover:text-white transition-colors">The Joint</a>
            <a href="#treatment" className="hover:text-white transition-colors">Treatment</a>
            <a href="#candidate" className="hover:text-white transition-colors">Assessment</a>
            <a href="#doctor" className="hover:text-white transition-colors">Dr. Manu Bora</a>
            <a href="#science" className="hover:text-white transition-colors">Research</a>
          </div>
        </div>

        {/* Mandatory Medical Disclaimer */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white/60 space-y-2">
          <div className="flex items-center gap-2 text-white font-semibold text-xs">
            <ShieldAlert className="w-4 h-4 text-[#0071E3]" />
            <span className="uppercase tracking-wider">Clinical & Medical Disclaimer</span>
          </div>
          <p className="text-xs leading-relaxed text-white/60">
            SUBCHOND provides educational, radiological, and clinical assessment information regarding joint health, knee osteoarthritis, and the subchondral bone. Content on this website is for informational purposes only and does not constitute formal medical diagnosis or establish a binding doctor-patient relationship prior to direct clinical evaluation. Individual treatment suitability—including non-surgical modalities, biologic therapies, or surgical interventions—requires formal in-person or telemedicine evaluation by a registered medical specialist. Cartilage repair outcomes vary; no intervention promises 100% cure, guaranteed cartilage regeneration, or definitive avoidance of knee replacement surgery.
          </p>
        </div>

        {/* Copyright and Legal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-[11px] pt-2">
          <div>
            © {new Date().getFullYear()} SUBCHOND (subchond.com). All rights reserved.
          </div>

          <div className="flex items-center gap-6 font-medium">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Medical Ethics</span>
            <a href="mailto:clinical@subchond.com" className="hover:text-[#0071E3]">
              Contact: clinical@subchond.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
