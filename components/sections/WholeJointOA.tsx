'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { VideoPlayer } from '../ui/VideoPlayer';

export type OAStructureKey = 'cartilage' | 'subchondral' | 'meniscus' | 'synovium' | 'alignment';

const CAROUSEL_STEP = 264;
const CAROUSEL_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
const CAROUSEL_INTERVAL = 5000;

export const WholeJointOA: React.FC = () => {
  const [activeStructure, setActiveStructure] = useState<OAStructureKey>('subchondral');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [dragDx, setDragDx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const drag = useRef({ startX: 0, active: false, moved: false });

  const structures = useMemo(() => [
    {
      id: 'cartilage' as OAStructureKey,
      label: '01 Cartilage',
      title: 'Articular Cartilage',
      role: 'Reduces joint friction and distributes compressive forces.',
      inOA: 'Undergoes fibrillations, vertical fissuring, and gradual thinning. Significantly: cartilage lacks sensory nerves and cannot generate pain on its own.',
      color: '#38bdf8',
    },
    {
      id: 'subchondral' as OAStructureKey,
      label: '02 Subchondral Bone',
      title: 'Subchondral Bone Plate',
      role: 'Dense mineralized foundation directly beneath cartilage providing structural support.',
      inOA: 'Experiences microfractures, bone marrow lesions (BMLs), and sclerosis. Richly supplied with nociceptive pain fibers — making it a primary symptom generator.',
      color: '#0071E3',
    },
    {
      id: 'meniscus' as OAStructureKey,
      label: '03 Meniscus',
      title: 'Meniscal Shock Absorbers',
      role: 'Fibrocartilaginous crescents distributing up to 70% of contact stress across the tibia.',
      inOA: 'Degenerative tears and meniscal extrusion cause rapid loss of hoop tension, focusing massive focal stress onto subchondral bone.',
      color: '#3BA7A0',
    },
    {
      id: 'synovium' as OAStructureKey,
      label: '04 Synovium',
      title: 'Synovial Membrane',
      role: 'Produces lubricating hyaluronic-acid-rich synovial fluid for the joint.',
      inOA: 'Synovitis triggers inflammatory cytokine cascades (IL-1β, TNF-α), causing joint effusion, warmth, and capsular stretch pain.',
      color: '#8b5cf6',
    },
    {
      id: 'alignment' as OAStructureKey,
      label: '05 Mechanics',
      title: 'Biomechanical Alignment',
      role: 'Maintains uniform contact stress across the mechanical axis of the lower limb.',
      inOA: 'Varus (bow-legged) or valgus malalignment concentrates weight onto one compartment, accelerating subchondral fatigue.',
      color: '#f59e0b',
    },
  ], []);

  const current = structures.find((s) => s.id === activeStructure)!;
  const activeIndex = structures.findIndex((s) => s.id === activeStructure);
  const wrap = useCallback((index: number) => (index + structures.length) % structures.length, [structures.length]);

  const pauseTemporarily = useCallback(() => {
    setPaused(true);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), 7000);
  }, []);

  const selectStructure = useCallback((id: OAStructureKey, userInitiated = true) => {
    if (userInitiated) pauseTemporarily();
    setActiveStructure(id);
  }, [pauseTemporarily]);

  const go = useCallback((direction: -1 | 1) => {
    const next = wrap(activeIndex + direction);
    selectStructure(structures[next].id);
  }, [activeIndex, selectStructure, structures, wrap]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const autoplay = setInterval(() => {
      setActiveStructure((currentId) => {
        const index = structures.findIndex((structure) => structure.id === currentId);
        return structures[wrap(index + 1)].id;
      });
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(autoplay);
  }, [paused, reducedMotion, structures, wrap]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const onPointerDown = (event: PointerEvent) => {
      drag.current = { startX: event.clientX, active: true, moved: false };
      setIsDragging(true);
      viewport.setPointerCapture?.(event.pointerId);
      pauseTemporarily();
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!drag.current.active) return;
      const distance = event.clientX - drag.current.startX;
      if (Math.abs(distance) > 5) drag.current.moved = true;
      setDragDx(distance);
    };
    const onPointerUp = () => {
      if (!drag.current.active) return;
      drag.current.active = false;
      setIsDragging(false);
      setActiveStructure((currentId) => {
        const index = structures.findIndex((structure) => structure.id === currentId);
        return structures[wrap(index - Math.round(dragDx / CAROUSEL_STEP))].id;
      });
      setDragDx(0);
    };
    viewport.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    return () => {
      viewport.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [dragDx, pauseTemporarily, structures, wrap]);

  const onCarouselKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); go(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); go(-1); }
  };

  const distanceFromActive = (index: number) => {
    let distance = index - activeIndex + dragDx / CAROUSEL_STEP;
    if (distance > structures.length / 2) distance -= structures.length;
    if (distance < -structures.length / 2) distance += structures.length;
    return distance;
  };

  return (
    <section
      id="oa-explanation"
      className="py-16 md:py-20 lg:py-[clamp(4.5rem,8vh,6rem)] px-4 sm:px-6 lg:px-8 bg-[#F7F8FA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Sticky/Cinematic Split Canvas: Left Typography + Right Animated Anatomy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Screen-as-Canvas Large Typography (No card clutter!) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-semibold text-[#0071E3] tracking-wider px-2.5 py-0.5 rounded-full bg-[#0071E3]/10">
                02
              </span>
              <span className="text-xs font-semibold text-[#667085] tracking-widest uppercase">
                PATHOPHYSIOLOGY OF THE JOINT
              </span>
            </div>

            <h2 className="text-section-headline text-[#111827] font-light tracking-tight">
              Osteoarthritis is not just <br />
              <span className="text-[#0071E3] font-normal">cartilage wear.</span>
            </h2>

            <p className="text-editorial-body text-[#4B5563] max-w-xl">
              OA can involve multiple structures of the joint — including cartilage, subchondral bone, meniscus, synovium and the surrounding biomechanics.
            </p>

            {/* Structure Progression Strip - Minimalist Segmented Line */}
            <div className="pt-2 flex flex-nowrap gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {structures.map((s) => {
                const isSelected = activeStructure === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => selectStructure(s.id)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-[#111827] text-white shadow-md'
                        : 'bg-white text-[#667085] hover:text-[#111827] border border-black/[0.06]'
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>

            {/* Progressive Disclosure of Active Structure */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="pt-4 space-y-3 border-t border-black/[0.08]"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: current.color }} />
                  <h3 className="text-xl font-medium text-[#111827] tracking-tight">{current.title}</h3>
                </div>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  <span className="font-semibold text-[#111827]">In Osteoarthritis: </span>
                  {current.inOA}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Same perspective carousel behavior as imediver, using one anatomy image with five overlays. */}
          <div className="lg:col-span-6 flex flex-col items-center min-w-0">
            <div
              ref={viewportRef}
              role="group"
              aria-roledescription="carousel"
              aria-label="Interactive knee anatomy layers"
              tabIndex={0}
              onKeyDown={onCarouselKeyDown}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setPaused(false); }}
              className="relative h-[390px] sm:h-[470px] w-full max-w-[600px] cursor-grab touch-pan-y select-none outline-none active:cursor-grabbing [perspective:1400px]"
              style={{ maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)' }}
            >
              <div className="absolute inset-0 [transform-style:preserve-3d]">
                {structures.map((structure, index) => {
                  const distance = distanceFromActive(index);
                  const absoluteDistance = Math.min(Math.abs(distance), 4);
                  const hidden = absoluteDistance > 2.3;
                  const rotation = Math.max(-1.3, Math.min(1.3, distance)) * -13;
                  const isActive = Math.round(distance) === 0;
                  const cardStyle: React.CSSProperties = reducedMotion
                    ? {
                        transform: `translate(-50%, -50%) translateX(${distance * CAROUSEL_STEP}px)`,
                        opacity: hidden ? 0 : absoluteDistance > 1 ? 0.42 : 1,
                        zIndex: 100 - Math.round(absoluteDistance * 10),
                        transition: isDragging ? 'none' : `transform .42s ${CAROUSEL_EASE}, opacity .42s ${CAROUSEL_EASE}`,
                        pointerEvents: absoluteDistance > 1 ? 'none' : 'auto',
                      }
                    : {
                        transform: `translate(-50%, -50%) translateX(${distance * CAROUSEL_STEP}px) rotateY(${rotation}deg) scale(${Math.max(0.68, 1 - absoluteDistance * 0.1)}) translateZ(${-absoluteDistance * 55}px)`,
                        opacity: hidden ? 0 : 1 - absoluteDistance * 0.28,
                        zIndex: 100 - Math.round(absoluteDistance * 10),
                        transition: isDragging ? 'none' : `transform .55s ${CAROUSEL_EASE}, opacity .45s ${CAROUSEL_EASE}`,
                        pointerEvents: hidden ? 'none' : 'auto',
                      };
                  return (
                    <article
                      key={structure.id}
                      onClick={() => { if (!drag.current.moved && !isActive) selectStructure(structure.id); }}
                      aria-hidden={!isActive}
                      className={`group absolute left-1/2 top-1/2 h-[340px] w-[250px] sm:h-[410px] sm:w-[300px] overflow-hidden rounded-[1.65rem] border border-white/30 bg-[#0A1520] will-change-transform ${isActive ? 'shadow-[0_24px_55px_rgba(10,28,44,0.26)]' : 'cursor-pointer shadow-lg'}`}
                      style={cardStyle}
                    >
                      <Image src="/images/knee-anatomy.png" alt={`${structure.title} highlighted on a knee anatomy model`} fill className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]" draggable={false} />
                      <AnatomyHighlight id={structure.id} />
                      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 to-transparent pointer-events-none" />
                      <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2 text-[9px] font-mono tracking-[0.12em] text-white">
                        <span className="rounded-full bg-white/90 px-2.5 py-1 text-[#102A3B] font-semibold">{structure.label.toUpperCase()}</span>
                        <span className="rounded-full bg-white/15 px-2 py-1 backdrop-blur-sm">{String(index + 1).padStart(2, '0')}/05</span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-4 pt-12 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/75 to-transparent text-white">
                        <p className="text-xs font-medium tracking-tight">{structure.title}</p>
                        <p className="mt-1 text-[10px] leading-relaxed text-white/65 line-clamp-2">{structure.role}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2" aria-label="Anatomy carousel pagination">
              {structures.map((structure, index) => (
                <button key={structure.id} onClick={() => selectStructure(structure.id)} aria-label={`Show ${structure.title}`} aria-current={index === activeIndex} className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-7 bg-[#0071E3]' : 'w-1.5 bg-[#111827]/20 hover:bg-[#111827]/45'}`} />
              ))}
            </div>
            <p className="mt-4 text-[10px] font-mono tracking-[0.14em] text-[#667085]">DRAG OR USE ARROW KEYS TO EXPLORE</p>
          </div>
        </div>

        {/* Video Featurette - Clean Editorial Embed */}
        <div className="pt-12 border-t border-black/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-[#0071E3] tracking-widest uppercase">
              RADIOLOGICAL CORRELATION
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-[#111827] tracking-tight">
              Why OA is a whole-joint disease
            </h3>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              In this high-resolution sequence, examine how subchondral bone marrow edema patterns, meniscal extrusion, and synovial effusion co-exist in an articulating joint.
            </p>
          </div>

          <div className="lg:col-span-7">
            <VideoPlayer
              src="/videos/oa-whole-joint.mp4"
              poster="/images/mri-knee.jpg"
              title="Why OA is a whole-joint disease"
              autoPlay={false}
              loop={true}
              muted={true}
              className="aspect-video w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function AnatomyHighlight({ id }: { id: OAStructureKey }) {
  return (
    <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full pointer-events-none">
      {id === 'cartilage' && (
        <path d="M220 200 Q300 160 380 200 Q380 290 300 270 Q220 290 220 200 Z" fill="#38bdf8" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="3.5" className="animate-pulse" />
      )}
      {id === 'subchondral' && (
        <g className="animate-pulse">
          <path d="M240 200 Q300 180 360 200 Q360 280 300 255 Q240 280 240 200 Z" fill="#0071E3" fillOpacity="0.3" stroke="#0071E3" strokeWidth="4" />
          <path d="M220 350 Q300 355 380 350 Q370 380 300 385 Q230 380 220 350 Z" fill="#0071E3" fillOpacity="0.3" stroke="#0071E3" strokeWidth="4" />
        </g>
      )}
      {id === 'meniscus' && (
        <g className="animate-pulse">
          <path d="M190 310 Q240 315 250 325 Q230 338 190 310 Z" fill="#3BA7A0" fillOpacity="0.4" stroke="#3BA7A0" strokeWidth="3" />
          <path d="M410 310 Q360 315 350 325 Q370 338 410 310 Z" fill="#3BA7A0" fillOpacity="0.4" stroke="#3BA7A0" strokeWidth="3" />
        </g>
      )}
      {id === 'synovium' && (
        <ellipse cx="300" cy="300" rx="200" ry="220" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="8 6" className="animate-pulse" />
      )}
      {id === 'alignment' && (
        <g>
          <line x1="300" y1="30" x2="300" y2="570" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" />
          <circle cx="250" cy="320" r="32" fill="#f59e0b" fillOpacity="0.25" stroke="#f59e0b" strokeWidth="2" />
        </g>
      )}
    </svg>
  );
}
