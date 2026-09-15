import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';

import { Hero } from '@/components/sections/Hero';
import { WholeJointOA } from '@/components/sections/WholeJointOA';
import { SubchondralBone } from '@/components/sections/SubchondralBone';
import { Approach } from '@/components/sections/Approach';
import { TreatmentSpectrum } from '@/components/sections/TreatmentSpectrum';
import { CandidateSection } from '@/components/sections/CandidateSection';
import { DoctorSection } from '@/components/sections/DoctorSection';
import { ResearchScience } from '@/components/sections/ResearchScience';
import { AssessmentForm } from '@/components/sections/AssessmentForm';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 relative">
      {/* Minimal Fixed Navigation */}
      <Navbar />

      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: OA IS MORE THAN CARTILAGE */}
      <WholeJointOA />

      {/* SECTION 3: WHAT IS SUBCHONDRAL BONE? */}
      <SubchondralBone />

      {/* SECTION 4: THE SUBCHOND APPROACH */}
      <Approach />

      {/* SECTION 5: TREATMENT OPTIONS */}
      <TreatmentSpectrum />

      {/* SECTION 6: WHO IS A CANDIDATE? */}
      <CandidateSection />

      {/* SECTION 7: DR MANU BORA */}
      <DoctorSection />

      {/* SECTION 8: RESEARCH / SCIENCE */}
      <ResearchScience />

      {/* SECTION 9: JOINT ASSESSMENT FORM */}
      <AssessmentForm />

      {/* SECTION 10: FAQ */}
      <FAQSection />

      {/* SECTION 11: FINAL CTA */}
      <FinalCTA />

      {/* FOOTER */}
      <Footer />

      {/* DEDICATED MOBILE BOTTOM CTA DOCK */}
      <MobileStickyBar />
    </main>
  );
}
