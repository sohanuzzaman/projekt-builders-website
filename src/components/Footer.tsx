'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-coastal-text text-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl logo-text mb-6 tracking-[0.15em] uppercase font-light !text-white">
              PROJEKT
            </h3>
            <p className="text-white/80 font-light leading-relaxed text-base mb-8 max-w-md">
              Expert architectural project management focused on sustainable, functional spaces that enhance daily life.
            </p>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="font-medium mb-4 uppercase tracking-wider text-sm text-white">
                Stay Updated
              </h4>
              <div className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-coastal-gold focus:border-coastal-gold"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-coastal-gold text-coastal-text font-medium text-sm uppercase tracking-wider hover:bg-white transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-sm text-white">Navigation</h4>
            <nav className="space-y-4">
              <Link href="/about" className="block text-sm text-white/70 hover:text-white transition-colors font-light hover:translate-x-1 transform duration-300">
                About
              </Link>
              <Link href="/services" className="block text-sm text-white/70 hover:text-white transition-colors font-light hover:translate-x-1 transform duration-300">
                Services
              </Link>
              <Link href="/portfolio" className="block text-sm text-white/70 hover:text-white transition-colors font-light hover:translate-x-1 transform duration-300">
                Portfolio
              </Link>
              <Link href="/interiors" className="block text-sm text-white/70 hover:text-white transition-colors font-light hover:translate-x-1 transform duration-300">
                Interiors
              </Link>
              <Link href="/retreats" className="block text-sm text-white/70 hover:text-white transition-colors font-light hover:translate-x-1 transform duration-300">
                Retreats
              </Link>
              <Link href="/contact" className="block text-sm text-white/70 hover:text-white transition-colors font-light hover:translate-x-1 transform duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info & Services */}
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-sm text-white">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Email</p>
                <a 
                  href="mailto:hello@projektbuilders.com.au" 
                  className="text-white/80 hover:text-white transition-colors font-light"
                >
                  hello@projektbuilders.com.au
                </a>
              </div>
              
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Phone</p>
                <a 
                  href="tel:+61499080405" 
                  className="text-white/80 hover:text-white transition-colors font-light"
                >
                  +61 0499 080 405
                </a>
              </div>
              
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-1">WhatsApp</p>
                <a 
                  href="https://wa.me/61499080405" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors font-light"
                >
                  Message us
                </a>
              </div>

              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="inline-block px-8 py-3 border-2 border-coastal-gold text-coastal-gold hover:bg-coastal-gold hover:text-coastal-text text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105"
                >
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
              <p className="text-xs text-white/50 font-light">
                © {new Date().getFullYear()} Projekt Builders. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-xs text-white/50 hover:text-white/70 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-xs text-white/50 hover:text-white/70 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/projekt-builders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-coastal-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://instagram.com/projektbuilders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-coastal-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.320-1.297C4.198 14.81 3.708 13.659 3.708 12.362c0-1.297.49-2.448 1.297-3.320c.871-.871 2.023-1.297 3.320-1.297s2.448.49 3.320 1.297c.871.871 1.297 2.023 1.297 3.320c0 1.297-.49 2.448-1.297 3.320c-.871.871-2.023 1.297-3.320 1.297zm7.718-1.297c-.871.871-2.023 1.297-3.320 1.297s-2.448-.49-3.320-1.297c-.871-.871-1.297-2.023-1.297-3.320c0-1.297.49-2.448 1.297-3.320c.871-.871 2.023-1.297 3.320-1.297s2.448.49 3.320 1.297c.871.871 1.297 2.023 1.297 3.320c0 1.297-.49 2.448-1.297 3.320z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}