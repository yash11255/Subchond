'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';

const CAROUSEL_STEP = 254;
const CAROUSEL_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
const AUTOPLAY_MS = 5800;

const treatmentTiers = [
  {
    id: 'activity-rehab',
    label: 'Activity & Rehabilitation',
    cardLabel: 'Rehabilitation',
    eyebrow: 'SPECTRUM TIER 01',
    tagline: 'Neuromuscular shock absorption & load management',
    description:
      'Targeted quadriceps and kinetic-chain conditioning, aerobic exercise and biomechanical offloading can reduce peak compressive impacts delivered to the subchondral bone.',
    indication: 'Foundational first-line strategy across stages of joint health.',
    keyNote: 'Exercise and conditioning can improve pain and function for many people.',
    image: '/images/treatment/rehabilitation.jpg',
    imageAlt: 'Guided knee rehabilitation in a physiotherapy clinic',
    imagePosition: 'object-center',
  },
  {
    id: 'medication',
    label: 'Medication / Symptom Management',
    cardLabel: 'Symptom management',
    eyebrow: 'SPECTRUM TIER 02',
    tagline: 'Topical & systemic inflammatory control',
    description:
      'Topical NSAIDs, oral anti-inflammatory agents or analgesics may be considered selectively to control flare-ups and support participation in rehabilitation.',
    indication: 'Short-to-intermediate management of inflammatory symptoms and effusion.',
    keyNote: 'Topical formulations may be preferred when appropriate to limit systemic exposure.',
    image: '/images/treatment/medication.jpg',
    imageAlt: 'Blister packs of medication on a clinical blue surface',
    imagePosition: 'object-center',
  },
  {
    id: 'injections',
    label: 'Injections where Appropriate',
    cardLabel: 'Targeted injections',
    eyebrow: 'SPECTRUM TIER 03',
    tagline: 'Image-guided intra-articular targeted modalities',
    description:
      'For selected patients, image-guided viscosupplementation or corticosteroid treatment may be used to manage symptoms and create room for rehabilitation.',
    indication: 'Persistent symptoms despite an appropriate conservative programme.',
    keyNote: 'Injections aim to reduce symptoms; they do not regenerate worn cartilage.',
    image: '/images/treatment/injections.jpg',
    imageAlt: 'Clinician preparing a knee injection in a medical setting',
    imagePosition: 'object-[58%_center]',
  },
  {
    id: 'biologics',
    label: 'Biologic & Orthobiologic Options',
    cardLabel: 'Orthobiologic review',
    eyebrow: 'SPECTRUM TIER 04',
    tagline: 'Autologous cellular & platelet signalling protocols',
    description:
      'Platelet-rich plasma and autologous cellular preparations may be evaluated under strict clinical protocols to support tissue homeostasis and modulate the joint environment.',
    indication: 'Carefully stratified candidates with mild-to-moderate structural disease.',
    keyNote: 'Evidence and outcomes vary by preparation method and patient phenotype.',
    image: '/images/treatment/biologics.jpg',
    imageAlt: 'Laboratory sample preparation representing orthobiologic evaluation',
    imagePosition: 'object-center',
  },
  {
    id: 'surgery',
    label: 'Surgical Options when Indicated',
    cardLabel: 'Surgical planning',
    eyebrow: 'SPECTRUM TIER 05',
    tagline: 'Corrective osteotomy to partial or total joint replacement',
    description:
      'Realignment osteotomy can shift mechanical load to healthier compartments. Partial or total arthroplasty may be considered for severe structural disease and loss of mobility.',
    indication: 'Advanced disease with refractory pain and meaningful functional limitation.',
    keyNote: 'Surgery is considered only after an individual clinical and imaging review.',
    image: '/images/treatment/surgery.jpg',
    imageAlt: 'Orthopaedic surgical team working in an operating theatre',
    imagePosition: 'object-center',
  },
] as const;

type NavigationSource = 'autoplay' | 'keyboard' | 'pointer';

const wrap = (value: number) =>
  ((value % treatmentTiers.length) + treatmentTiers.length) % treatmentTiers.length;

export const TreatmentSpectrum = () => {
  const [activeTier, setActiveTier] = useState(0);
  const [dragDx, setDragDx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);
  const [isPageHidden, setIsPageHidden] = useState(false);
  const [instantTransition, setInstantTransition] = useState(false);
  const reducedMotion = useReducedMotion() ?? false;
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const drag = useRef({ startX: 0, dx: 0, active: false, moved: false });

  const current = treatmentTiers[activeTier];

  const pauseTemporarily = useCallback(() => {
    setIsInteractionPaused(true);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsInteractionPaused(false), 6500);
  }, []);

  const selectTier = useCallback(
    (tier: number, source: NavigationSource = 'pointer') => {
      if (source === 'keyboard') {
        setInstantTransition(true);
        window.setTimeout(() => setInstantTransition(false), 90);
      } else if (source === 'pointer') {
        pauseTemporarily();
      }

      setActiveTier(wrap(tier));
    },
    [pauseTemporarily],
  );

  const move = useCallback(
    (direction: -1 | 1, source: NavigationSource = 'pointer') => {
      selectTier(activeTier + direction, source);
    },
    [activeTier, selectTier],
  );

  useEffect(() => {
    if (reducedMotion || isManuallyPaused || isInteractionPaused || isPageHidden) return;

    const interval = window.setInterval(
      () => selectTier(activeTier + 1, 'autoplay'),
      AUTOPLAY_MS,
    );

    return () => window.clearInterval(interval);
  }, [activeTier, isInteractionPaused, isManuallyPaused, isPageHidden, reducedMotion, selectTier]);

  useEffect(() => {
    const syncVisibility = () => setIsPageHidden(document.hidden);
    syncVisibility();
    document.addEventListener('visibilitychange', syncVisibility);
    return () => document.removeEventListener('visibilitychange', syncVisibility);
  }, []);

  useEffect(
    () => () => clearTimeout(resumeTimer.current),
    [],
  );

  const beginDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { startX: event.clientX, dx: 0, active: true, moved: false };
    setIsDragging(true);
    pauseTemporarily();
  };

  const dragCards = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;

    const dx = event.clientX - drag.current.startX;
    drag.current.dx = dx;
    if (Math.abs(dx) > 5) drag.current.moved = true;
    setDragDx(dx);
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const steps = Math.round(drag.current.dx / CAROUSEL_STEP);
    drag.current.active = false;
    setIsDragging(false);
    setDragDx(0);

    if (steps !== 0) {
      setActiveTier((tier) => wrap(tier - steps));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1, 'keyboard');
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1, 'keyboard');
    }
  };

  const distanceFromActive = (index: number) => {
    let distance = index - activeTier + dragDx / CAROUSEL_STEP;

    if (distance > treatmentTiers.length / 2) distance -= treatmentTiers.length;
    if (distance < -treatmentTiers.length / 2) distance += treatmentTiers.length;

    return distance;
  };

  return (
    <section
      id="treatment"
      className="relative overflow-hidden border-t border-black/[0.08] bg-[#FBFCFD] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-[clamp(4.5rem,8vh,6rem)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_78%_4%,rgba(0,113,227,0.10),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-8 lg:space-y-9">
        <header className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="rounded-full bg-[#0071E3]/10 px-2.5 py-0.5 font-mono text-xs font-semibold tracking-wider text-[#0071E3]">
                05
              </span>
              <span className="text-xs font-semibold tracking-[0.14em] text-[#667085]">
                TREATMENT CONTINUUM
              </span>
            </div>

            <h2 className="text-section-headline font-light tracking-tight text-[#111827]">
              Different knees. <br />
              <span className="font-normal text-[#0071E3]">Different decisions.</span>
            </h2>

            <p className="max-w-2xl text-editorial-body text-[#4B5563]">
              Treatment should depend on the individual patient, the structures involved, the severity of disease, symptoms and goals.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-end">
            <span className="mr-1 font-mono text-xs tracking-[0.16em] text-[#667085]">
              {String(activeTier + 1).padStart(2, '0')} / 05
            </span>
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous treatment option"
              className="grid size-10 place-items-center rounded-full border border-[#111827]/10 bg-white text-[#111827] transition-[background-color,color,transform] duration-200 hover:bg-[#111827] hover:text-white active:scale-[0.97]"
            >
              <ArrowLeft size={16} strokeWidth={1.8} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next treatment option"
              className="grid size-10 place-items-center rounded-full border border-[#111827]/10 bg-white text-[#111827] transition-[background-color,color,transform] duration-200 hover:bg-[#111827] hover:text-white active:scale-[0.97]"
            >
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setIsManuallyPaused((paused) => !paused)}
              aria-label={isManuallyPaused ? 'Resume treatment carousel' : 'Pause treatment carousel'}
              aria-pressed={isManuallyPaused}
              className="grid size-10 place-items-center rounded-full border border-[#111827]/10 bg-white text-[#667085] transition-[background-color,color,transform] duration-200 hover:bg-[#F1F5F9] hover:text-[#111827] active:scale-[0.97]"
            >
              {isManuallyPaused ? (
                <Play size={15} strokeWidth={1.8} aria-hidden="true" />
              ) : (
                <Pause size={15} strokeWidth={1.8} aria-hidden="true" />
              )}
            </button>
          </div>
        </header>

        <div
          role="tablist"
          aria-label="Treatment options"
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto border-b border-black/[0.08] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {treatmentTiers.map((tier, index) => {
            const isSelected = index === activeTier;

            return (
              <button
                key={tier.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => selectTier(index)}
                className={`shrink-0 snap-start rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition-[background-color,color,box-shadow,transform] duration-200 active:scale-[0.98] sm:px-5 ${
                  isSelected
                    ? 'bg-[#111827] text-white shadow-[0_8px_18px_rgba(17,24,39,0.14)]'
                    : 'bg-white text-[#667085] hover:bg-[#EEF4FA] hover:text-[#111827]'
                }`}
              >
                {tier.label}
              </button>
            );
          })}
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(31rem,1.18fr)] lg:gap-12">
          <div className="space-y-6 lg:py-2">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={current.id}
                initial={{
                  opacity: 0,
                  transform: reducedMotion || instantTransition ? 'translateY(0)' : 'translateY(10px)',
                }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                exit={{
                  opacity: 0,
                  transform: reducedMotion || instantTransition ? 'translateY(0)' : 'translateY(-6px)',
                }}
                transition={{
                  duration: instantTransition ? 0 : reducedMotion ? 0.14 : 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="space-y-5"
              >
                <p className="font-mono text-xs tracking-[0.14em] text-[#0071E3]">{current.eyebrow}</p>
                <h3 className="max-w-xl text-3xl font-light tracking-tight text-[#111827] sm:text-[2.25rem] sm:leading-[1.04]">
                  {current.tagline}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="grid gap-5 border-t border-black/[0.08] pt-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#111827]">
                  Clinical indication
                </p>
                <p className="text-xs leading-relaxed text-[#667085]">{current.indication}</p>
              </div>
              <div className="space-y-1.5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#0071E3]">
                  Evidence note
                </p>
                <p className="text-xs leading-relaxed text-[#667085]">{current.keyNote}</p>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <div
              role="group"
              aria-roledescription="carousel"
              aria-label="Treatment pathway visualizer"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onPointerDown={beginDrag}
              onPointerMove={dragCards}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              onMouseEnter={() => setIsInteractionPaused(true)}
              onMouseLeave={() => setIsInteractionPaused(false)}
              onFocus={() => setIsInteractionPaused(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsInteractionPaused(false);
              }}
              className="relative h-[290px] w-full touch-pan-y select-none overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#EEF5FA_0%,#F9FBFD_52%,#ECF3F8_100%)] outline-none [perspective:1400px] focus-visible:ring-2 focus-visible:ring-[#0071E3] focus-visible:ring-offset-4 sm:h-[326px]"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0071E3]/30 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 [transform-style:preserve-3d]"
                style={{
                  maskImage: 'linear-gradient(90deg, transparent, #000 11%, #000 89%, transparent)',
                  WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 11%, #000 89%, transparent)',
                }}
              >
                {treatmentTiers.map((tier, index) => {
                  const distance = distanceFromActive(index);
                  const absoluteDistance = Math.min(Math.abs(distance), 3.25);
                  const isActive = index === activeTier;
                  const isHidden = absoluteDistance > 2.55;
                  const rotate = Math.max(-1.35, Math.min(1.35, distance)) * -13;
                  const cardStyle: CSSProperties = reducedMotion
                    ? {
                        transform: 'translate(-50%, -50%)',
                        opacity: isActive ? 1 : 0,
                        zIndex: isActive ? 10 : 0,
                        pointerEvents: isActive ? 'auto' : 'none',
                        transition: instantTransition ? 'none' : `opacity 160ms ${CAROUSEL_EASE}`,
                      }
                    : {
                        transform: `translate(-50%, -50%) translateX(${distance * CAROUSEL_STEP}px) rotateY(${rotate}deg) rotateZ(${Math.max(-1.8, Math.min(1.8, distance)) * -0.9}deg) scale(${Math.max(0.74, 1 - absoluteDistance * 0.1)}) translateZ(${-absoluteDistance * 64}px)`,
                        opacity: isHidden ? 0 : 1 - absoluteDistance * 0.24,
                        zIndex: 20 - Math.round(absoluteDistance * 5),
                        pointerEvents: isHidden ? 'none' : 'auto',
                        transition:
                          isDragging || instantTransition
                            ? 'none'
                            : `transform 550ms ${CAROUSEL_EASE}, opacity 380ms ${CAROUSEL_EASE}`,
                      };

                  return (
                    <article
                      key={tier.id}
                      aria-hidden={!isActive}
                      onClick={() => {
                        if (!drag.current.moved && !isActive) selectTier(index);
                      }}
                      className={`group absolute left-1/2 top-1/2 h-[244px] w-[236px] overflow-hidden rounded-[1.55rem] border border-white/70 bg-white will-change-transform sm:h-[276px] sm:w-[268px] ${
                        isActive
                          ? 'shadow-[0_24px_48px_rgba(24,65,92,0.22)]'
                          : 'cursor-pointer shadow-[0_14px_30px_rgba(24,65,92,0.12)]'
                      }`}
                      style={cardStyle}
                    >
                      <div className="relative h-[158px] overflow-hidden sm:h-[180px]">
                        <Image
                          src={tier.image}
                          alt={isActive ? tier.imageAlt : ''}
                          fill
                          sizes="(max-width: 640px) 236px, 268px"
                          draggable={false}
                          className={`object-cover ${tier.imagePosition}`}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,20,33,0.06)_22%,rgba(5,20,33,0.42)_100%)]" />
                        <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-[#0E2030]/75 px-2.5 py-1 font-mono text-[0.61rem] tracking-[0.12em] text-white backdrop-blur-sm">
                          {String(index + 1).padStart(2, '0')} / 05
                        </span>
                      </div>

                      <div className="flex h-[86px] flex-col justify-between p-4 sm:h-[96px] sm:p-4.5">
                        <p className="font-mono text-[0.61rem] tracking-[0.13em] text-[#0071E3]">TREATMENT PATHWAY</p>
                        <h4 className="text-sm font-medium tracking-tight text-[#111827] sm:text-[0.95rem]">
                          {tier.cardLabel}
                        </h4>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute inset-x-8 bottom-4 flex items-center gap-3 text-[0.62rem] font-mono tracking-[0.13em] text-[#52606D] sm:inset-x-10">
                <span>DRAG TO EXPLORE</span>
                <div className="h-px flex-1 overflow-hidden bg-[#52606D]/20">
                  <div
                    className="h-full origin-left bg-[#0071E3] transition-transform duration-300"
                    style={{ transform: `scaleX(${(activeTier + 1) / treatmentTiers.length})` }}
                  />
                </div>
                <span>{isManuallyPaused || reducedMotion ? 'PAUSED' : 'AUTO'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
