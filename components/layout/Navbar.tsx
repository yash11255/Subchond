'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { ContactActions } from '@/components/ui/ContactActions';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Bigger Picture', href: '#whole-joint-assessment' },
    { label: 'Understand Your Pain', href: '#knee-pain-drivers' },
    { label: 'Real Outcomes', href: '#real-outcomes' },
    { label: 'Dr. Bora', href: '#dr-manu-bora' },
    { label: 'Get Assessed', href: '#assessment' },
  ];

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#dddcd8] bg-[#f8f7f4]/95 py-2 shadow-[0_3px_12px_rgba(30,31,32,0.04)] backdrop-blur-md'
          : 'border-b border-transparent bg-[#f8f7f4] py-2.5'
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20">
        
        {/* Brand lockup */}
        <Link
          href="/"
          className="group block w-[158px] transition-transform duration-200 hover:scale-[1.015] sm:w-[202px]"
        >
          <Image src="/logo.png" alt="Subchond Joint Preservation" width={2170} height={725} priority className="h-auto w-full" />
        </Link>

        {/* The compact navigation intentionally mirrors the reference hero's quiet hierarchy. */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#505257] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors duration-200 hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          <a
            href="#assessment"
            className="hidden h-10 items-center justify-center rounded-full border border-[#35383b] px-7 text-[10px] font-bold tracking-[0.15em] text-[#25282d] transition-colors duration-200 hover:bg-[#25282d] hover:text-white lg:flex"
          >
            GET STARTED
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-[#102A3B] transition-colors hover:bg-[#EEF4F8]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full border-b border-[#D8E0E6] bg-[#F7F9FA] p-6 flex flex-col gap-4 shadow-[0_16px_30px_rgba(10,30,44,0.08)] animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between border-b border-[#D8E0E6] pb-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#667085]">
              Navigation Index
            </span>
            <LanguageSwitcher />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between border-b border-[#D8E0E6] py-2 text-sm font-medium text-[#304454] transition-colors hover:text-[#0071E3]"
            >
              <span>{link.label}</span>
              <span className="text-[#9BAAB5] text-xs">→</span>
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full rounded-full bg-[#102A3B] py-3 text-center text-xs font-semibold tracking-wider text-white shadow-lg shadow-[#102A3B]/15"
            >
              ASSESS MY KNEE →
            </a>
          </div>
          <ContactActions
            tone="light"
            compact
            className="pt-1"
            whatsappMessage="Hello Dr. Manu Bora’s team, I would like to share my MRI or X-ray for an online opinion."
          />
        </div>
      )}
    </header>
  );
};
