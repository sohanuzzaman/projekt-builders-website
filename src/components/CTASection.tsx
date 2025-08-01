'use client';

import React from 'react';
import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundColor?: 'light' | 'dark' | 'white';
  showContactInfo?: boolean;
}

export default function CTASection({
  title = "Ready to Bring Your Vision to Life?",
  subtitle = "Let's discuss your project and explore how we can create something extraordinary together.",
  primaryButtonText = "View Our Portfolio",
  primaryButtonHref = "/portfolio",
  secondaryButtonText = "Book Discovery Call",
  secondaryButtonHref = "/contact?subject=discovery-call",
  backgroundColor = 'dark',
  showContactInfo = true
}: CTASectionProps) {
  
  const backgroundClasses = {
    light: 'bg-coastal-lightgrey',
    dark: 'bg-coastal-text',
    white: 'bg-white'
  };

  const textClasses = {
    light: 'text-coastal-text',
    dark: 'text-white',
    white: 'text-coastal-text'
  };

  const buttonClasses = {
    light: 'border-coastal-text text-coastal-text hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text',
    dark: 'border-white text-white hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text',
    white: 'border-coastal-text text-coastal-text hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text'
  };

  const secondaryButtonClasses = {
    light: 'text-coastal-text/80 hover:text-coastal-text border-coastal-text/30 hover:border-coastal-text/60',
    dark: 'text-white/80 hover:text-white border-white/30 hover:border-white/60',
    white: 'text-coastal-text/80 hover:text-coastal-text border-coastal-text/30 hover:border-coastal-text/60'
  };

  return (
    <section className={`py-20 md:py-32 ${backgroundClasses[backgroundColor]} relative overflow-hidden`}>
      {/* Background geometric elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-current opacity-10 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-current opacity-5 rounded-full hidden lg:block"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-40 bg-current opacity-10 hidden xl:block"></div>
      
      <div className="max-w-5xl mx-auto px-8 md:px-16 text-center relative z-10">
        {/* Main Content */}
        <div className="mb-12 md:mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-[0.15em] uppercase ${textClasses[backgroundColor]}`}>
            {title}
          </h2>
          <p className={`text-lg md:text-xl ${textClasses[backgroundColor]}/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide`}>
            {subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link
            href={primaryButtonHref}
            className={`group px-12 py-4 border-2 ${buttonClasses[backgroundColor]} uppercase tracking-[0.15em] text-base font-normal transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-3`}
          >
            <span>{primaryButtonText}</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <Link
            href={secondaryButtonHref}
            className={`${secondaryButtonClasses[backgroundColor]} text-base font-light tracking-[0.1em] uppercase border-b pb-1 transition-all duration-300 hover:scale-105`}
          >
            {secondaryButtonText}
          </Link>
        </div>

        {/* Contact Information */}
        {showContactInfo && (
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-current opacity-20`}>
            <div className="text-center">
              <h4 className={`text-sm font-light uppercase tracking-[0.1em] ${textClasses[backgroundColor]} mb-3`}>
                Email
              </h4>
              <a 
                href="mailto:hello@projektbuilders.com.au" 
                className={`${textClasses[backgroundColor]}/80 hover:${textClasses[backgroundColor]} font-light transition-colors duration-300`}
              >
                hello@projektbuilders.com.au
              </a>
            </div>
            
            <div className="text-center">
              <h4 className={`text-sm font-light uppercase tracking-[0.1em] ${textClasses[backgroundColor]} mb-3`}>
                Phone
              </h4>
              <a 
                href="tel:+61412345678" 
                className={`${textClasses[backgroundColor]}/80 hover:${textClasses[backgroundColor]} font-light transition-colors duration-300`}
              >
                +61 412 345 678
              </a>
            </div>
            
            <div className="text-center">
              <h4 className={`text-sm font-light uppercase tracking-[0.1em] ${textClasses[backgroundColor]} mb-3`}>
                Response Time
              </h4>
              <p className={`${textClasses[backgroundColor]}/80 font-light`}>
                Within 24 hours
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
