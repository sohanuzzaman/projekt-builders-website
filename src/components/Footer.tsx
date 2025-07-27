import React from 'react';
import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Projekt Builders</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Architectural project management focused on sustainable, functional spaces that enhance daily life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-600 hover:text-black transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-sm text-gray-600 hover:text-black transition-colors">
                Services
              </Link>
              <Link href="/contact" className="block text-sm text-gray-600 hover:text-black transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <a href="mailto:hello@projektbuilders.com.au" className="hover:text-black transition-colors">
                  hello@projektbuilders.com.au
                </a>
              </p>
              <p>
                <a href="https://wa.me/61499080405" className="hover:text-black transition-colors">
                  +61 0499 080 405
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray/20 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Projekt Builders. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}