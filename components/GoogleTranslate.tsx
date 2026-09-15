'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            autoDisplay?: boolean;
            layout?: number;
          },
          elementId: string,
        ) => void;
      };
    };
  }
}

/**
 * Google's Website Translator widget, driven entirely by our own
 * LanguageSwitcher UI. The widget's own default dropdown/banner is hidden
 * via globals.css; we only use the hidden <select> it injects as a
 * programmatic trigger (see setSiteLanguage in LanguageSwitcher.tsx).
 */
export function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'hi',
          autoDisplay: false,
          layout: 0,
        },
        'google_translate_element',
      );
    };
  }, []);

  return (
    <>
      <div id="google_translate_element" className="goog-te-hidden-host" />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
