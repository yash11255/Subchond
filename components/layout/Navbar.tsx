'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

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
          ? 'py-3.5 bg-[#071A2B]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20 text-white'
          : 'py-5 bg-[#071A2B]/40 backdrop-blur-md text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white font-semibold tracking-tight text-lg sm:text-xl group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0071E3] transition-transform duration-300 group-hover:scale-125 shadow-[0_0_10px_#0071E3]" />
          <span className="font-mono tracking-widest text-sm sm:text-base font-bold text-white">SUBCHOND</span>
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

        {/* Right CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#assessment"
            className="px-4 sm:px-5 py-2 rounded-full bg-[#0071E3] text-white text-xs font-medium tracking-wide hover:bg-[#0055B3] transition-all duration-200 flex items-center gap-1.5 shadow-sm shadow-[#0071E3]/30"
          >
            <span>ASSESS MY KNEE</span>
            <ArrowRight className="w-3.5 h-3.5" />
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
        </div>
      )}
    </header>
  );
};
