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

  // Close mobile menu when clicking outside
  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-coastal-background/98 backdrop-blur-md z-50 border-b border-coastal-lightgrey">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16">
          <div className="flex items-center justify-between py-4 md:py-6">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group relative z-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-2xl md:text-3xl logo-text transition-colors duration-200">
                PROJEKT
              </span>
            </Link>

            {/* Desktop Navigation - Only visible on desktop */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-normal transition-all duration-200 tracking-[0.15em] uppercase link-minimal relative py-2 ${
                    isActive(item.href) 
                      ? 'text-coastal-text font-semibold' 
                      : 'text-coastal-text hover:text-coastal-gold'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-coastal-gold"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button - Only visible on mobile/tablet */}
            <button
              className="lg:hidden relative z-50 p-3 -mr-3 focus:outline-none focus:ring-2 focus:ring-coastal-gold focus:ring-offset-2 focus:ring-offset-coastal-background rounded-md"
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

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />
          
          {/* Mobile Menu */}
          <nav className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-coastal-background z-40 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-coastal-lightgrey">
                <span className="text-lg font-light tracking-[0.1em] uppercase text-coastal-text">
                  Menu
                </span>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 py-8">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-6 py-4 text-lg font-light transition-all duration-200 tracking-[0.1em] uppercase relative group ${
                      isActive(item.href)
                        ? 'text-coastal-gold bg-coastal-lightgrey/30'
                        : 'text-coastal-text hover:text-coastal-gold hover:bg-coastal-lightgrey/20'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: 'slideInFromRight 0.3s ease-out forwards'
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive(item.href) && (
                      <span className="absolute left-0 top-0 w-1 h-full bg-coastal-gold"></span>
                    )}
                    <span className="absolute left-0 top-0 w-0 h-full bg-coastal-gold/20 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
              
              {/* Contact CTA in Mobile Menu */}
              <div className="p-6 border-t border-coastal-lightgrey">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.1em] text-sm font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}