import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-section-first pb-20 md:pb-32 bg-coastal-background min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8 md:px-16 text-center">
        {/* 404 Number */}
        <div className="text-8xl md:text-9xl font-light text-coastal-lightgrey mb-8 tracking-[0.2em] select-none">
          404
        </div>
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
          Page Not Found
        </h1>
        
        {/* Description */}
        <p className="text-lg text-coastal-text max-w-2xl mx-auto font-light leading-relaxed tracking-wide mb-12">
          The page you&apos;re looking for seems to have moved or doesn&apos;t exist. 
          Let&apos;s get you back to creating something extraordinary.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/"
            className="group px-12 py-4 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.15em] text-base font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3"
          >
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
          
          <Link
            href="/contact"
            className="text-coastal-text/80 hover:text-coastal-text text-base font-light tracking-[0.1em] uppercase border-b border-coastal-text/30 hover:border-coastal-text/60 pb-1 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-coastal-lightgrey">
          <p className="text-sm text-coastal-text/60 uppercase tracking-[0.1em] mb-6">
            Or explore these pages:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Portfolio', href: '/portfolio' },
              { name: 'Contact', href: '/contact' }
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-coastal-text hover:text-coastal-gold text-sm font-light uppercase tracking-[0.1em] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
