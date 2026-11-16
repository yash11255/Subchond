'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const SURGICAL_PHOTOS = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { src: `/images/surgical/surgical-${n}.jpg`, alt: `Operating theatre, procedure photo ${i + 1}` };
});

export const SurgicalPrecision: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="surgical-precision"
      className="relative overflow-hidden border-t border-black/[0.08] bg-[#F7F8FA] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-2xl space-y-3">
          <div className="reference-kicker">
            <span>Inside the operating theatre</span>
            <span className="reference-kicker-index">06</span>
          </div>
          <h2 className="text-section-headline font-light tracking-tight text-[#111827]">
            Surgical <span className="reference-title-muted !text-[#0071E3] !not-italic">Precision &amp; Setup</span>
          </h2>
          <p className="text-editorial-body text-[#4B5563]">
            Photographs directly from our operating theatre, demonstrating sterile
            preparation, imaging-assisted delivery and surgical rigor.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {SURGICAL_PHOTOS.map((photo, idx) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActive(idx)}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-black/5"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        <p className="text-[0.7rem] leading-snug text-[#9CA3AF]">
          Procedural photographs from Dr. Manu Bora&apos;s operating theatre. Patient-identifying
          details are not shown.
        </p>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-[80vh] w-full max-w-2xl">
            <Image
              src={SURGICAL_PHOTOS[active].src}
              alt={SURGICAL_PHOTOS[active].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
