'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Interiors', href: '/interiors' },
    { name: 'Retreats', href: '/retreats' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md z-50 border-b border-gray-light">
      <div className="container-minimal">
        <div className="flex items-center justify-between py-6">
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
          <nav className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 tracking-wide uppercase link-minimal relative ${
                  isActive(item.href) 
                    ? 'text-black font-semibold' 
                    : 'text-black hover:text-gray-medium'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-black"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-px bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : 'mb-1'}`} />
              <span className={`block w-6 h-px bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1'}`} />
              <span className={`block w-6 h-px bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-light bg-white">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 text-sm font-medium transition-colors uppercase tracking-wide ${
                  isActive(item.href)
                    ? 'text-black font-semibold bg-gray-light/50'
                    : 'text-black hover:text-gray-medium'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="block w-8 h-px bg-black mt-1"></span>
                )}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}