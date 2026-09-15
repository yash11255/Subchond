'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { CLINIC_CONTACT, getWhatsAppLink } from '@/data/contact';
import { ContactActions, WhatsAppMark } from '@/components/ui/ContactActions';
import { BrandMark } from '@/components/ui/BrandMark';

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#071A2B]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20 text-white'
          : 'py-3.5 bg-[#071A2B]/40 backdrop-blur-md text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand lockup */}
        <Link
          href="/"
          className="group block w-[122px] sm:w-[136px] transition-transform duration-200 hover:scale-[1.015]"
        >
          <BrandMark className="w-full" />
        </Link>

        {/* Center/Right Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-200 relative py-1"
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
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0071E3] text-white text-[11px] font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0055B3] active:translate-y-0 sm:w-auto sm:px-4 sm:py-2 sm:gap-1.5 shadow-sm shadow-[#0071E3]/30"
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
            className="lg:hidden p-2 rounded-xl text-white/90 hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#071A2B]/98 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="text-[11px] font-mono text-white/50 uppercase tracking-widest pb-2 border-b border-white/10">
            Navigation Index
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white/90 hover:text-[#0071E3] py-2 flex items-center justify-between border-b border-white/5"
            >
              <span>{link.label}</span>
              <span className="text-white/40 text-xs">→</span>
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-[#0071E3] text-white text-xs font-semibold tracking-wider text-center block shadow-lg shadow-[#0071E3]/30"
            >
              ASSESS MY KNEE →
            </a>
          </div>
          <ContactActions
            tone="dark"
            compact
            className="pt-1"
            whatsappMessage="Hello Dr. Manu Bora’s team, I would like to share my MRI or X-ray for an online opinion."
          />
        </div>
      )}
    </header>
  );
};
