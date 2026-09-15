'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';

type VideoLightboxProps = {
  videoSrc: string;
  poster: string;
  title: string;
  label: string;
  duration?: string;
  className?: string;
};

export const VideoLightbox: React.FC<VideoLightboxProps> = ({
  videoSrc,
  poster,
  title,
  label,
  duration,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ??
          'flex items-center gap-2.5 text-[11px] font-bold tracking-[0.1em] text-[#25282d] transition-colors hover:text-[#0071E3]'
        }
      >
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#20262b] text-white">
          <Play className="ml-0.5 h-3 w-3 fill-white" />
        </span>
        <span>
          {label}
          {duration && <span className="ml-1.5 font-normal text-[#77797b]">{duration}</span>}
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
            >
              <X className="h-4 w-4" />
            </button>
            <video
              src={videoSrc}
              poster={poster}
              controls
              autoPlay
              playsInline
              className="block h-auto w-full"
            >
              <track kind="captions" />
            </video>
          </div>
        </div>
      )}
    </>
  );
};
