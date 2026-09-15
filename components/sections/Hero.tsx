'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Upload } from 'lucide-react';
import { getWhatsAppLink } from '@/data/contact';
import { VideoLightbox } from '@/components/ui/VideoLightbox';

export const Hero: React.FC = () => {
  const uploadMriLink = getWhatsAppLink(
    'Hello Dr. Manu Bora’s team, I would like to share my MRI or X-ray for an online opinion.',
  );

  return (
    <section
      id="knee"
      className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-[#f8f7f4] text-[#11141a] md:min-h-[calc(100dvh-5.25rem)]"
    >
      {/* The supplied anatomical render is intentionally the only visual focal point.
          Desktop only: this absolutely-positioned version sits behind the text
          column, which only works with a lot of room to its right. Mobile gets
          its own in-flow copy of the same image further down (not this one),
          since absolutely positioning it at low opacity across the whole
          section previously ghosted its baked-in labels through the body copy. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden overflow-hidden md:block md:w-[58vw]">
        <Image
          src="/hero.png"
          alt="Detailed knee anatomy highlighting cartilage and subchondral bone"
          fill
          priority
          sizes="58vw"
          className="object-cover object-[center_42%]"
        />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[1600px] px-5 py-9 sm:px-8 md:min-h-[calc(100dvh-5.25rem)] md:px-12 md:py-2 lg:px-20">
        <div className="flex w-full flex-col justify-center pb-4 md:w-[52%] md:max-w-[720px] md:justify-start md:pb-8">
          <div className="mb-6 md:mb-7">
            <p className="whitespace-pre-line text-[9px] font-semibold leading-[1.9] tracking-[0.43em] text-[#686a6d] sm:text-[10px]">
              A HEALTHIER TOMORROW{`\n`}MOVES DEEPER
            </p>
            <span className="mt-4 block h-px w-9 bg-[#44474a]" />
          </div>

          <h1 className="max-w-[740px] text-[clamp(2.35rem,3.3vw,3.5rem)] font-bold leading-[0.985] tracking-[-0.04em] text-[#101319] text-balance">
            YOUR KNEE PAIN IS NOT JUST ABOUT WORN-OUT CARTILAGE.
          </h1>

          {/* Mobile-only: the same anatomical render, shown as its own block in
              normal flow (not behind the text) so it can't ghost through body
              copy the way it did when it sat absolutely positioned at low
              opacity across the whole section. Full opacity, fully legible. */}
          <div className="relative mt-5 aspect-[4/5] w-full overflow-hidden rounded-2xl md:hidden">
            <Image
              src="/hero.png"
              alt="Detailed knee anatomy highlighting cartilage and subchondral bone"
              fill
              sizes="100vw"
              className="object-cover object-[center_38%]"
            />
          </div>

          <div className="mt-4 max-w-[620px] space-y-4 text-[clamp(0.96rem,1.25vw,1.25rem)] leading-[1.38] tracking-[-0.018em] text-[#5b5d61] md:mt-4">
            <p>
              Osteoarthritis affects the whole joint, and the bone beneath your cartilage may be an important part of the pain story.
            </p>
            <p className="max-w-[590px] text-[clamp(0.9rem,1.08vw,1.1rem)] leading-[1.45]">
              An X-ray may show reduced joint space, but it does not always tell the full story of why your knee hurts.
            </p>
          </div>

          <div className="mt-5 max-w-[620px] md:mt-6">
            <p className="text-[clamp(0.95rem,1.18vw,1.2rem)] font-bold leading-[1.28] tracking-[-0.01em] text-[#25282d]">
              WHAT IS ACTUALLY CAUSING YOUR PAIN, AND WHAT CAN STILL BE PRESERVED?
            </p>
            <p className="mt-2 text-[clamp(0.92rem,1.05vw,1.08rem)] leading-snug text-[#66686c]">
              Understand your knee before deciding your next treatment.
            </p>
          </div>

          <div className="mt-5 w-full max-w-[355px] sm:mt-6">
            <a
              href="#assessment"
              className="group flex h-12 w-full items-center justify-center gap-5 rounded-full bg-[#20262b] px-6 text-[11px] font-bold tracking-[0.13em] text-white transition-colors duration-200 hover:bg-black active:translate-y-px"
            >
              GET MY KNEE ASSESSED
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.7} />
            </a>
            <p className="mt-1.5 text-[10px] tracking-wide text-[#77797b]">Takes about 60 seconds</p>
          </div>

          <div className="mt-4 w-full max-w-[355px] border-t border-[#d7d5d0] pt-3">
            <p className="text-xs text-[#686a6d]">Already have an MRI or X-ray?</p>
            <a
              href={uploadMriLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex h-12 w-full items-center justify-center gap-4 rounded-full border border-[#35383b] px-5 text-[11px] font-bold tracking-[0.1em] text-[#25282d] transition-colors duration-200 hover:bg-[#20262b] hover:text-white active:translate-y-px"
            >
              UPLOAD MY MRI / X-RAY
              <Upload className="h-[18px] w-[18px]" strokeWidth={1.65} />
            </a>
          </div>

          <div className="mt-5">
            <VideoLightbox
              videoSrc="/videos/whole-joint-explainer.mp4"
              poster="/images/explainer-poster.jpg"
              title="Treat the whole joint, not just the surface"
              label="WATCH: TREAT THE WHOLE JOINT"
              duration="0:09"
            />
          </div>

          <div className="mt-6 flex max-w-[580px] items-start gap-3 text-[11px] leading-relaxed text-[#6a6c70] md:mt-7 md:text-xs">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 fill-[#6f7274] text-[#f8f7f4]" strokeWidth={1.8} />
            <p>
              We don&apos;t start with an injection. We start with your joint.
              <span className="mt-1 block font-semibold tracking-[0.09em] text-[#25282d]">SUBCHOND: Look beneath the cartilage.</span>
            </p>
          </div>
        </div>

        <aside className="pointer-events-none absolute right-[4.7%] top-[11%] hidden w-28 text-[9px] font-semibold leading-[1.95] tracking-[0.42em] text-[#76787b] lg:block">
          HEALTHIER{`\n`}JOINTS{`\n`}BRIGHTER{`\n`}TOMORROWS
          <span className="mt-4 block h-px w-7 bg-[#55575a]" />
        </aside>
        <aside className="pointer-events-none absolute bottom-[11%] right-[4.7%] hidden w-28 text-[9px] font-semibold leading-[1.95] tracking-[0.42em] text-[#76787b] lg:block">
          SCIENCE{`\n`}FOR A MORE{`\n`}ACTIVE LIFE
          <span className="mt-4 block h-px w-7 bg-[#55575a]" />
        </aside>
      </div>
    </section>
  );
};
