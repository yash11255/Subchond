'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Phone } from 'lucide-react';
import { CLINIC_CONTACT, getWhatsAppLink } from '@/data/contact';
import { WhatsAppMark } from '@/components/ui/ContactActions';

const TABS = [
  {
    id: 'philosophy',
    label: 'Patient Philosophy',
    title: 'A Whole-Joint Approach',
    body: 'Dr. Manu Bora is an orthopaedic surgeon focused on sports medicine, arthroscopy, ACL care and joint preservation. His approach combines evidence-based orthopaedics, minimally invasive techniques and careful patient selection.',
  },
  {
    id: 'experience',
    label: 'Clinical Experience',
    title: 'Trained Across Leading Centres',
    body: 'Clinical training at the Sports Injury Centre, Safdarjung Hospital in New Delhi, Hospital Ambroise Paré in Paris, Istituto Clinico Humanitas in Milan, and the Hospital for Special Surgery in New York.',
  },
  {
    id: 'focus',
    label: 'Areas of Focus',
    title: 'Sports Injury, ACL & Joint Preservation',
    body: 'Sports injury and arthroscopy, ACL and PCL treatment, joint preservation, and care across the knee, shoulder and ankle.',
  },
  {
    id: 'education',
    label: 'Education & Affiliations',
    title: 'Qualifications & Fellowships',
    body: 'MBBS and MS in Orthopaedics, with fellowship training at Safdarjung Hospital, Hospital Ambroise Paré, Istituto Clinico Humanitas and the Hospital for Special Surgery. Master Instructor with Arthrex.',
  },
  {
    id: 'practice',
    label: 'Practice & Leadership',
    title: 'Leading Clinical Practice',
    body: 'Director at Orthosport, Reverse Clinics and Threads Physio.',
  },
] as const;

export const DoctorProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]['id']>('philosophy');
  const [videoNoticeOpen, setVideoNoticeOpen] = useState(false);
  const current = TABS.find((t) => t.id === activeTab)!;

  const uploadMriLink = getWhatsAppLink(
    'Hello Dr. Manu Bora’s team, I would like to share my MRI or X-ray for an online opinion.',
  );

  return (
    <section
      id="dr-manu-bora"
      className="relative overflow-hidden border-t border-black/[0.08] bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-2xl space-y-3">
          <div className="reference-kicker">
            <span>Editorial profile</span>
            <span className="reference-kicker-index">05</span>
          </div>
          <h2 className="text-section-headline font-light tracking-tight text-[#111827]">
            Meet <span className="reference-title-muted !text-[#0071E3] !not-italic">Dr. Manu Bora</span>
          </h2>
          <p className="text-editorial-body text-[#4B5563]">
            Orthopaedic surgeon. A whole-joint approach to knee care.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start lg:gap-16">
          {/* Photo */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-[#F7F8FA] lg:mx-0">
            <Image
              src="/images/dr-manu-bora.webp"
              alt="Dr. Manu Bora, Orthopaedic Surgeon"
              fill
              sizes="(max-width: 1024px) 80vw, 22rem"
              className="object-cover"
              priority
            />
            <button
              type="button"
              onClick={() => setVideoNoticeOpen((v) => !v)}
              className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#111827] shadow-md backdrop-blur-sm transition-colors hover:bg-white"
            >
              <Play className="h-3.5 w-3.5 fill-[#0071E3] text-[#0071E3]" />
              Clinical Perspective
            </button>
            {videoNoticeOpen && (
              <div className="absolute inset-x-4 bottom-16 rounded-xl bg-[#111827] px-3.5 py-2.5 text-xs text-white shadow-lg">
                Video introduction coming soon.
              </div>
            )}
          </div>

          {/* Tabs + content */}
          <div className="space-y-6">
            <div
              role="tablist"
              aria-label="Dr. Manu Bora profile sections"
              className="flex flex-wrap gap-2 border-b border-black/[0.08] pb-5"
            >
              {TABS.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#111827] text-white'
                        : 'bg-[#F7F8FA] text-[#667085] hover:text-[#111827]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0071E3]">
                {current.label}
              </p>
              <h3 className="text-2xl font-medium tracking-tight text-[#111827] sm:text-3xl">
                {current.title}
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
                {current.body}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-black/[0.08] pt-5">
              <div>
                <p className="text-xs uppercase tracking-wide text-[#9CA3AF]">Specialty</p>
                <p className="mt-1 text-sm font-semibold text-[#111827]">MS Orthopaedics, MBBS</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[#9CA3AF]">Focus</p>
                <p className="mt-1 text-sm font-semibold text-[#111827]">
                  Joint Preservation &amp; Arthroscopy
                </p>
              </div>
            </div>

            <div className="space-y-3 border-t border-black/[0.08] pt-5">
              <p className="text-xs text-[#667085] sm:text-sm">
                Speak with Dr. Bora&apos;s clinical team, or share your existing MRI or X-ray
                before deciding on a next step.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CLINIC_CONTACT.call.href}
                  className="flex items-center gap-2 rounded-full border border-black/[0.12] px-5 py-2.5 text-xs font-semibold text-[#111827] transition-colors hover:bg-black/[0.04]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#0071E3]" />
                  Call an Ortho Expert
                </a>
                <a
                  href={uploadMriLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#20bd5a]"
                >
                  <WhatsAppMark className="h-3.5 w-3.5" />
                  WhatsApp Your MRI / X-ray
                </a>
              </div>
              <a
                href="#assessment"
                className="inline-block text-xs font-semibold text-[#0071E3] hover:underline"
              >
                Or start an individualized assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
