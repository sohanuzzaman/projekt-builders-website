'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Interiors', href: '/interiors' },
    { name: 'Retreats', href: '/retreats' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-warm-white/95 backdrop-blur-sm z-50 border-b border-accent/20">
      <div className="container-minimal">
        <div className="flex items-center justify-between py-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/PROJEKT-LOGO.png"
              alt="Projekt Builders"
              width={140}
              height={45}
              className="h-10 w-auto transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-16">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-light text-black hover:text-sage transition-all duration-300 tracking-wider uppercase relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sage transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-full hover:bg-accent-warm transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span className={`block w-5 h-px bg-sage transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : 'mb-1'}`} />
              <span className={`block w-5 h-px bg-sage transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1'}`} />
              <span className={`block w-5 h-px bg-sage transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-8 border-t border-accent/20 bg-white/50 backdrop-blur-sm rounded-b-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-4 text-sm font-light text-black hover:text-sage transition-colors uppercase tracking-wider hover:bg-accent-warm/30 px-4 rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}