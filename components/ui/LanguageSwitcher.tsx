'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Globe, Check } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
] as const;

type LangCode = (typeof LANGUAGES)[number]['code'];

function readCurrentLanguage(): LangCode {
  const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
  return match?.[1] === 'hi' ? 'hi' : 'en';
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/`;
  document.cookie = `${name}=${value}; path=/; domain=${window.location.hostname}`;
}

function clearCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
}

/**
 * Drives the hidden Google Website Translator widget (see GoogleTranslate.tsx)
 * via its cookie plus a reload, rather than poking its hidden <select>. That
 * avoids a race with the widget script's own load time, and keeps our own
 * displayed language code (read from the same cookie) reliably in sync.
 */
function applyLanguage(lang: LangCode) {
  if (lang === 'en') {
    clearCookie('googtrans');
  } else {
    setCookie('googtrans', `/en/${lang}`);
  }
  window.location.reload();
}

type LanguageSwitcherProps = {
  tone?: 'light' | 'dark';
};

function subscribeToNothing() {
  // The cookie only ever changes via this component's own reload-driven
  // flow, so there's nothing external to subscribe to; this just gives
  // useSyncExternalStore an SSR-safe way to read it without a state-in-effect.
  return () => {};
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ tone = 'light' }) => {
  const [open, setOpen] = useState(false);
  const selected = useSyncExternalStore(
    subscribeToNothing,
    readCurrentLanguage,
    () => 'en' as LangCode,
  );
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isDark = tone === 'dark';

  return (
    <div ref={rootRef} className="relative notranslate" translate="no">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex h-9 items-center gap-1.5 rounded-full border px-3 text-[10px] font-bold tracking-[0.1em] transition-colors ${
          isDark
            ? 'border-white/20 text-white hover:bg-white/10'
            : 'border-[#35383b]/40 text-[#25282d] hover:bg-black/[0.04]'
        }`}
      >
        <Globe className="h-3.5 w-3.5" strokeWidth={1.8} />
        <span>{selected.toUpperCase()}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-black/[0.08] bg-white py-1.5 shadow-[0_16px_40px_rgba(10,30,44,0.14)]"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="option"
                aria-selected={selected === lang.code}
                onClick={() => {
                  setOpen(false);
                  if (lang.code === selected) return;
                  applyLanguage(lang.code);
                }}
                className="flex w-full items-center justify-between px-3.5 py-2 text-left text-sm text-[#111827] hover:bg-[#F7F8FA]"
              >
                <span>{lang.label}</span>
                {selected === lang.code && <Check className="h-3.5 w-3.5 text-[#0071E3]" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
