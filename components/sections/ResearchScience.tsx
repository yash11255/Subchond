'use client';

import {
  useCallback,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { RESEARCH_TOPICS } from '../../data/researchPapers';

const SLIDE_EASE = 'cubic-bezier(0.23, 1, 0.32, 1)';
const SWIPE_THRESHOLD = 64;

type NavigationSource = 'keyboard' | 'pointer';

const wrap = (value: number) =>
  ((value % RESEARCH_TOPICS.length) + RESEARCH_TOPICS.length) % RESEARCH_TOPICS.length;

export const ResearchScience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [instantTransition, setInstantTransition] = useState(false);
  const drag = useRef({ startX: 0, offset: 0, startedAt: 0, active: false });

  const move = useCallback((direction: -1 | 1, source: NavigationSource = 'pointer') => {
    if (source === 'keyboard') {
      setInstantTransition(true);
      window.setTimeout(() => setInstantTransition(false), 90);
    }

    setActiveIndex((index) => wrap(index + direction));
  }, []);

  const goTo = useCallback((index: number, source: NavigationSource = 'pointer') => {
    if (source === 'keyboard') {
      setInstantTransition(true);
      window.setTimeout(() => setInstantTransition(false), 90);
    }

    setActiveIndex(wrap(index));
  }, []);

  const beginDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      startX: event.clientX,
      offset: 0,
      startedAt: Date.now(),
      active: true,
    };
    setIsDragging(true);
  };

  const dragSlides = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;

    const offset = event.clientX - drag.current.startX;
    drag.current.offset = offset;
    setDragOffset(offset);
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const elapsed = Math.max(1, Date.now() - drag.current.startedAt);
    const velocity = Math.abs(drag.current.offset) / elapsed;
    const shouldAdvance =
      Math.abs(drag.current.offset) >= SWIPE_THRESHOLD || velocity > 0.11;

    if (shouldAdvance) {
      setActiveIndex((index) =>
        wrap(index + (drag.current.offset < 0 ? 1 : -1)),
      );
    }

    drag.current.active = false;
    setDragOffset(0);
    setIsDragging(false);
  };

  const selectFromClick = (index: number, event: ReactMouseEvent<HTMLButtonElement>) => {
    goTo(index, event.detail === 0 ? 'keyboard' : 'pointer');
  };

  const slides = RESEARCH_TOPICS.map((topic, index) => ({
    ...topic,
    index,
    label: String(index + 1).padStart(2, '0'),
  }));

  return (
    <section
      id="science"
      className="relative overflow-hidden border-t border-black/[0.08] bg-[#F7F8FA] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-[clamp(4.5rem,8vh,6rem)]"
    >
      <div className="pointer-events-none absolute right-[-12%] top-[12%] size-[32rem] rounded-full bg-[#0071E3]/[0.035] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-8 lg:space-y-9">
        <header className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="rounded-full bg-[#0071E3]/10 px-2.5 py-0.5 font-mono text-xs font-semibold tracking-wider text-[#0071E3]">
                08
              </span>
              <span className="text-xs font-semibold tracking-[0.14em] text-[#667085]">
                SCIENTIFIC LITERATURE
              </span>
            </div>

            <h2 className="text-section-headline font-light tracking-tight text-[#111827]">
              Medicine should be <br />
              <span className="font-normal text-[#0071E3]">grounded in evidence.</span>
            </h2>

            <p className="text-editorial-body text-[#4B5563]">
              Peer-reviewed investigations into subchondral bone, whole-joint dynamics, and emerging therapeutics. Evidence evolves — clinical decisions must evolve alongside it.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-end">
            <span className="mr-1 font-mono text-xs tracking-[0.16em] text-[#667085]">
              {String(activeIndex + 1).padStart(2, '0')} / {String(RESEARCH_TOPICS.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              aria-label="Previous research topic"
              onClick={(event) => move(-1, event.detail === 0 ? 'keyboard' : 'pointer')}
              className="grid size-10 place-items-center rounded-full border border-[#111827]/10 bg-white text-[#111827] transition-[background-color,color,transform] duration-200 hover:bg-[#111827] hover:text-white active:scale-[0.97]"
            >
              <ArrowLeft size={16} strokeWidth={1.8} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next research topic"
              onClick={(event) => move(1, event.detail === 0 ? 'keyboard' : 'pointer')}
              className="grid size-10 place-items-center rounded-full border border-[#111827]/10 bg-white text-[#111827] transition-[background-color,color,transform] duration-200 hover:bg-[#111827] hover:text-white active:scale-[0.97]"
            >
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
        </header>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Research topics"
          onPointerDown={beginDrag}
          onPointerMove={dragSlides}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          className="touch-pan-y select-none overflow-hidden rounded-[2rem] border border-black/[0.09] bg-white shadow-[0_18px_46px_rgba(35,62,88,0.06)]"
        >
          <div
            className="flex will-change-transform"
            style={{
              transform: `translateX(calc(${-activeIndex * 100}% + ${dragOffset}px))`,
              transition:
                isDragging || instantTransition
                  ? 'none'
                  : `transform 260ms ${SLIDE_EASE}`,
            }}
          >
            {slides.map((topic) => (
              <article
                key={topic.id}
                aria-hidden={topic.index !== activeIndex}
                className="grid min-h-[290px] w-full shrink-0 grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(15rem,0.48fr)]"
              >
                <div className="flex flex-col justify-between p-7 sm:p-9 md:p-10">
                  <div className="max-w-2xl space-y-5">
                    <div className="flex items-center gap-3 font-mono text-[0.68rem] font-semibold tracking-[0.14em]">
                      <span className="text-[#0071E3]">{topic.category}</span>
                      <span className="h-px w-8 bg-[#0071E3]/35" />
                      <span className="text-[#667085]">{topic.label}</span>
                    </div>

                    <h3 className="max-w-xl text-2xl font-medium tracking-[-0.035em] text-[#111827] sm:text-3xl">
                      {topic.title}
                    </h3>

                    <p className="max-w-[60ch] text-sm leading-relaxed text-[#667085] sm:text-base">
                      {topic.summary}
                    </p>
                  </div>

                  <p className="mt-8 font-mono text-[0.65rem] tracking-[0.13em] text-[#111827]/45">
                    CLINICAL READING TOPIC
                  </p>
                </div>

                <aside className="relative flex min-h-40 flex-col justify-between overflow-hidden border-t border-black/[0.08] bg-[#F2F7FA] p-7 md:min-h-0 md:border-l md:border-t-0 md:p-9">
                  <span className="relative z-10 font-mono text-[0.68rem] font-semibold tracking-[0.14em] text-[#0071E3]">
                    EVIDENCE CONTEXT
                  </span>
                  <div className="relative z-10 space-y-2">
                    <p className="text-sm font-medium tracking-tight text-[#111827]">Read the whole joint.</p>
                    <p className="max-w-[24ch] text-xs leading-relaxed text-[#667085]">
                      A concise topic for a more informed clinical conversation.
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-12 -right-1 font-mono text-[11rem] font-medium leading-none tracking-[-0.16em] text-[#0071E3]/[0.08]"
                  >
                    {topic.label}
                  </span>
                </aside>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-5">
          <p className="hidden font-mono text-[0.66rem] tracking-[0.13em] text-[#667085] sm:block">
            SWIPE OR USE THE CONTROLS TO EXPLORE
          </p>
          <div
            role="tablist"
            aria-label="Select a research topic"
            className="flex items-center gap-1 rounded-xl border border-[#111827]/10 bg-white p-1 shadow-[0_6px_16px_rgba(35,62,88,0.05)]"
          >
            {slides.map((topic) => {
              const isActive = topic.index === activeIndex;

              return (
                <button
                  key={topic.id}
                  type="button"
                  role="tab"
                  onClick={(event) => selectFromClick(topic.index, event)}
                  aria-label={`Show ${topic.title}`}
                  aria-selected={isActive}
                  className={`grid size-8 place-items-center rounded-lg font-mono text-[0.64rem] font-semibold tracking-[0.08em] transition-[background-color,color,transform] duration-200 active:scale-[0.96] ${
                    isActive
                      ? 'bg-[#0071E3] text-white shadow-[0_4px_10px_rgba(0,113,227,0.22)]'
                      : 'text-[#667085] hover:bg-[#F1F5F9] hover:text-[#111827]'
                  }`}
                >
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
