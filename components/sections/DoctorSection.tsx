'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { VideoPlayer } from '../ui/VideoPlayer';
import { Play, X } from 'lucide-react';
import { ContactActions } from '@/components/ui/ContactActions';

export const DoctorSection: React.FC = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'philosophy' | 'experience' | 'focus' | 'education' | 'research'>('philosophy');

  const profileTabs = [
    {
      id: 'philosophy' as const,
      label: 'Patient Philosophy',
      title: 'Looking Beyond a Single Scan',
      content:
        'Dr. Manu Bora approaches knee pain by looking beyond a single structure or a single scan. His clinical approach focuses on understanding the patient’s symptoms, imaging, functional goals and the condition of the entire joint before discussing treatment.',
    },
    {
      id: 'experience' as const,
      label: 'Clinical Experience',
      title: '15+ Years in Joint Preservation',
      content:
        'Extensive volume of arthroscopic joint preservation, sports medicine, and cartilage/subchondral assessments. Regular participant in international surgical symposiums and knee preservation forums.',
    },
    {
      id: 'focus' as const,
      label: 'Areas of Focus',
      title: 'Diagnostic & Arthroscopic Specialization',
      content:
        'Focuses on whole-joint knee mechanics, subchondral bone marrow lesion correlation on MRI, individualized osteoarthritis staging, and joint-preservation decision making.',
    },
    {
      id: 'education' as const,
      label: 'Education & Affiliations',
      title: 'Verified Qualifications',
      content:
        'MBBS, MS (Orthopaedics). Professional affiliations include the Indian Orthopaedic Association (IOA), International Society of Arthroscopy, Knee Surgery and Orthopaedic Sports Medicine (ISAKOS), and APKASS.',
    },
    {
      id: 'research' as const,
      label: 'Research',
      title: 'Evidence-Based Orthopedics',
      content:
        'Dedicated to integrating verified clinical literature on the osteochondral junction and subchondral bone pathophysiology directly into patient diagnostic pathways.',
    },
  ];

  const currentTab = profileTabs.find((t) => t.id === activeTab)!;

  return (
    <section
      id="doctor"
      className="py-16 md:py-20 lg:py-[clamp(4.5rem,8vh,6rem)] px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Editorial Headline */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-semibold text-[#0071E3] tracking-wider px-2.5 py-0.5 rounded-full bg-[#0071E3]/10">
              07
            </span>
            <span className="text-xs font-semibold text-[#667085] tracking-widest uppercase">
              EDITORIAL PROFILE
            </span>
          </div>

          <h2 className="text-section-headline text-[#111827] font-light tracking-tight">
            Meet <span className="text-[#0071E3] font-normal">Dr. Manu Bora</span>
          </h2>

          <p className="text-editorial-body text-[#4B5563]">
            Clinical expertise. A whole-joint perspective.
          </p>
        </div>

        {/* Editorial Layout: Large Portrait + Horizontal Feature Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[3/4] max-w-md rounded-3xl overflow-hidden border border-black/[0.08] bg-[#F5F5F7] shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/dr-manu-bora.webp"
                alt="Dr. Manu Bora, Orthopedic Surgeon"
                fill
                priority
                className="object-cover object-top"
              />

              {/* Minimal Floating Video Action */}
              <button
                onClick={() => setVideoOpen(true)}
                className="absolute bottom-5 right-5 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-xs font-semibold text-[#111827] shadow-lg hover:bg-white transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-[#0071E3] text-[#0071E3]" />
                <span>CLINICAL PERSPECTIVE</span>
              </button>
            </div>

            {/* Video Modal */}
            {videoOpen && (
              <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
                <div className="relative w-full max-w-2xl bg-white rounded-3xl p-5 shadow-2xl border border-black/[0.08]">
                  <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                    <span className="text-xs font-semibold text-[#111827]">
                      Dr. Manu Bora // Why I look beyond cartilage
                    </span>
                    <button onClick={() => setVideoOpen(false)} className="p-1 text-[#667085] hover:text-[#111827]">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="pt-3">
                    <VideoPlayer
                      src="/videos/dr-manu.mp4"
                      poster="/images/dr-manu-bora.webp"
                      title="Why I look beyond cartilage"
                      autoPlay={true}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Horizontal Scroll of Clinical Pillars */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Horizontal Pillar Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-black/[0.08]">
              {profileTabs.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      isSelected
                        ? 'bg-[#111827] text-white shadow-sm'
                        : 'text-[#667085] hover:text-[#111827] bg-[#F7F8FA]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Pillar Content */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-mono text-[#0071E3] uppercase tracking-wider">
                {currentTab.label.toUpperCase()}
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-[#111827] tracking-tight">
                {currentTab.title}
              </h3>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
                {currentTab.content}
              </p>
            </div>

            {/* Credentials Callout */}
            <div className="pt-6 border-t border-black/[0.08] grid grid-cols-2 gap-6">
              <div>
                <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider block">Specialty</span>
                <span className="text-xs sm:text-sm font-semibold text-[#111827] mt-0.5 block">MS Orthopaedics, MBBS</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider block">Focus</span>
                <span className="text-xs sm:text-sm font-semibold text-[#111827] mt-0.5 block">Joint Preservation & Arthroscopy</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <p className="mb-2 text-[11px] leading-relaxed text-[#667085]">Speak with Dr. Bora&apos;s clinical team or share your existing MRI/X-ray before deciding on a next step.</p>
                <ContactActions
                  compact
                  whatsappMessage="Hello Dr. Manu Bora’s team, I would like to share my MRI or X-ray for a knee consultation."
                />
              </div>
              <a
                href="#assessment"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0071E3] hover:underline"
              >
                <span>Or start an individualized assessment</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
