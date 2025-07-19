import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { contactDetails } from '@/data/dummy';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Projekt Builders</h3>
            <p className="text-gray-300 mb-4">
              Expert architectural project management that brings your vision to life with integrity, sustainability, and exceptional results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/interiors" className="text-gray-300 hover:text-white transition-colors">Interiors Shop</Link></li>
              <li><Link href="/retreats" className="text-gray-300 hover:text-white transition-colors">Retreats</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Icon name="mail" size={20} className="mr-3 text-emerald-400" />
                <a href={`mailto:${contactDetails.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {contactDetails.email}
                </a>
              </div>
              <div className="flex items-center">
                <Icon name="phone" size={20} className="mr-3 text-emerald-400" />
                <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
                  {contactDetails.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Projekt Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}