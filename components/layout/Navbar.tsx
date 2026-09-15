'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { CLINIC_CONTACT, getWhatsAppLink } from '@/data/contact';
import { ContactActions, WhatsAppMark } from '@/components/ui/ContactActions';

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
    { label: 'Why Subchond', href: '#oa-explanation' },
    { label: 'The Joint', href: '#subchondral-bone' },
    { label: 'Treatment', href: '#treatment' },
    { label: 'Assessment', href: '#candidate' },
    { label: 'Dr. Manu Bora', href: '#doctor' },
    { label: 'Research', href: '#science' },
  ];

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 py-2.5 border-b border-[#D8E0E6] shadow-[0_4px_18px_rgba(10,30,44,0.06)]'
          : 'bg-white py-3 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand lockup */}
        <Link
          href="/"
          className="group block w-[126px] sm:w-[148px] transition-transform duration-200 hover:scale-[1.015]"
        >
          <Image src="/logo.png" alt="Subchond Joint Preservation" width={2170} height={725} priority className="h-auto w-full" />
        </Link>

        {/* Center/Right Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] font-semibold tracking-[0.08em] text-[#4F6372]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors duration-200 hover:text-[#0071E3]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* A direct clinical contact route is always available beside navigation. */}
        <div className="flex items-center gap-3">
          <a
            href={CLINIC_CONTACT.call.href}
            aria-label={`Call an Ortho Expert at ${CLINIC_CONTACT.call.display}`}
            title="Call an Ortho Expert"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0D2A3A]/20 bg-white text-[#0D2A3A] text-[10px] font-semibold tracking-[0.08em] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0071E3] hover:bg-[#0071E3] hover:text-white active:translate-y-0 sm:w-auto sm:px-4 sm:py-2 sm:gap-1.5"
          >
            <Phone className="w-4 h-4" strokeWidth={2.3} />
            <span className="hidden sm:inline">CALL AN ORTHO EXPERT</span>
          </a>
          <a
            href={getWhatsAppLink('Hello Dr. Manu Bora’s team, I would like to share my MRI or X-ray for an online opinion.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp your MRI or X-ray to ${CLINIC_CONTACT.whatsapp.display}`}
            title="WhatsApp Your MRI / X-Ray"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110 active:translate-y-0"
          >
            <WhatsAppMark className="h-7 w-7" />
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
          <div className="border-b border-[#D8E0E6] pb-2 font-mono text-[11px] uppercase tracking-widest text-[#667085]">
            Navigation Index
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
