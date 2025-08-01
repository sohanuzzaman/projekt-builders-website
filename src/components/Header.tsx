'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Interiors', href: '/interiors' },
    { name: 'Retreats', href: '/retreats' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => pathname === href;

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-coastal-background/98 backdrop-blur-md z-50 border-b border-coastal-lightgrey/30">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex items-center justify-between py-5 md:py-6">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group relative z-50"
            >
              <span className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-coastal-text transition-colors duration-300 hover:text-coastal-gold">
                PROJEKT
              </span>
            </Link>

            {/* Desktop Navigation - Always visible on large screens and up */}
            <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-normal transition-all duration-300 tracking-[0.1em] uppercase relative py-2 group ${
                    isActive(item.href) 
                      ? 'text-coastal-text' 
                      : 'text-coastal-text/70 hover:text-coastal-text'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-coastal-gold transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Contact CTA for Desktop */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="px-6 py-2 border border-coastal-text text-coastal-text text-sm font-normal uppercase tracking-[0.1em] hover:bg-coastal-text hover:text-white transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile Menu Button - Hidden on large screens */}
            <button
              className="block lg:!hidden relative z-50 p-2 focus:outline-none focus:ring-2 focus:ring-coastal-gold focus:ring-offset-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span 
                  className={`block w-6 h-0.5 bg-coastal-text transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 translate-y-0.5' : 'mb-1.5'
                  }`} 
                />
                <span 
                  className={`block w-6 h-0.5 bg-coastal-text transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'mb-1.5'
                  }`} 
                />
                <span 
                  className={`block w-6 h-0.5 bg-coastal-text transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 z-40 lg:!hidden transition-opacity duration-300"
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* Mobile Menu */}
          <div className="fixed inset-0 z-50 lg:!hidden">
            <div className="flex h-full">
              {/* Menu Panel */}
              <div className="relative flex flex-col w-full max-w-sm bg-white shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-coastal-lightgrey/30">
                  <Link 
                    href="/" 
                    onClick={closeMenu}
                    className="text-xl font-light tracking-[0.2em] uppercase text-coastal-text"
                  >
                    PROJEKT
                  </Link>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-full hover:bg-coastal-lightgrey/20 transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6 text-coastal-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-1">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className={`block px-4 py-4 text-lg font-light tracking-[0.1em] uppercase transition-all duration-200 rounded-lg relative group ${
                          isActive(item.href)
                            ? 'text-coastal-text'
                            : 'text-coastal-text/70 hover:text-coastal-text hover:bg-coastal-lightgrey/10'
                        }`}
                        style={{ 
                          animationDelay: `${index * 80}ms`,
                          opacity: 0,
                          animation: 'slideInFromLeft 0.4s ease-out forwards'
                        }}
                      >
                        <span>{item.name}</span>
                        <span className={`absolute -bottom-1 left-4 h-px bg-coastal-gold transition-all duration-300 ${
                          isActive(item.href) ? 'w-8' : 'w-0 group-hover:w-8'
                        }`}></span>
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Footer CTA */}
                <div className="px-6 py-6 border-t border-coastal-lightgrey/30">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full text-center px-6 py-4 bg-coastal-text text-white text-sm font-normal uppercase tracking-[0.1em] hover:bg-coastal-gold hover:text-coastal-text transition-all duration-300 rounded-lg"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    </>
  );
}