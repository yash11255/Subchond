import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';
import { FloatingContact } from '@/components/layout/FloatingContact';

import { Hero } from '@/components/sections/Hero';
import { WholeJointAssessment } from '@/components/sections/WholeJointAssessment';
import { KneePainDrivers } from '@/components/sections/KneePainDrivers';
import { RealOutcomes } from '@/components/sections/RealOutcomes';
import { DoctorProfile } from '@/components/sections/DoctorProfile';
import { AssessmentForm } from '@/components/sections/AssessmentForm';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 relative">
      {/* Minimal Fixed Navigation */}
      <Navbar />

      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: WHY A WHOLE-JOINT ASSESSMENT MATTERS */}
      <WholeJointAssessment />

      {/* SECTION 3: WHAT MAY BE DRIVING YOUR KNEE PAIN */}
      <KneePainDrivers />

      {/* SECTION 4: REAL PATIENTS, REAL OUTCOMES */}
      <RealOutcomes />

      {/* SECTION 5: MEET DR MANU BORA */}
      <DoctorProfile />

      {/* SECTION 6: JOINT ASSESSMENT FORM */}
      <AssessmentForm />

      {/* SECTION 7: FINAL CTA */}
      <FinalCTA />

      {/* FOOTER */}
      <Footer />

      {/* DEDICATED MOBILE BOTTOM CTA DOCK */}
      <MobileStickyBar />

      {/* DESKTOP HOVER-REVEAL CONTACT DOCK */}
      <FloatingContact />
    </main>
  );
}
