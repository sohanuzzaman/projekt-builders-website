import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-light mb-6 tracking-wide">Projekt Builders</h3>
            <p className="text-white/70 font-light leading-relaxed text-sm">
              Architectural project management focused on sustainable, functional spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-xs text-white/90">Navigation</h4>
            <nav className="space-y-3">
              <Link href="/about" className="block text-sm text-white/70 hover:text-white transition-colors font-light">
                About
              </Link>
              <Link href="/services" className="block text-sm text-white/70 hover:text-white transition-colors font-light">
                Services
              </Link>
              <Link href="/interiors" className="block text-sm text-white/70 hover:text-white transition-colors font-light">
                Interiors
              </Link>
              <Link href="/retreats" className="block text-sm text-white/70 hover:text-white transition-colors font-light">
                Retreats
              </Link>
              <Link href="/contact" className="block text-sm text-white/70 hover:text-white transition-colors font-light">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-xs text-white/90">Contact</h4>
            <div className="space-y-3 text-sm">
              <p>
                <a href="mailto:hello@projektbuilders.com.au" className="text-white/70 hover:text-white transition-colors font-light">
                  hello@projektbuilders.com.au
                </a>
              </p>
              <p>
                <a href="https://wa.me/61499080405" className="text-white/70 hover:text-white transition-colors font-light">
                  +61 0499 080 405
                </a>
              </p>
              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-black px-6 py-2 text-xs font-medium uppercase tracking-wider hover:bg-gray-200 transition-colors"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <p className="text-center text-xs text-white/50 font-light">
            © {new Date().getFullYear()} Projekt Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}