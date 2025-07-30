import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-coastal-background">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            {/* Coastal geometric elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-coastal-lightgrey z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-coastal-lightgrey z-0"></div>
            <div className="absolute top-1/2 -left-12 w-1 h-32 bg-coastal-gold hidden lg:block"></div>
            
            <div className="aspect-[3/4] relative overflow-hidden z-10">
              <Image
                src="/images/georgina-portrait.jpg"
                alt="Georgina Louise, Principal Project Manager"
                fill
                className="object-cover grayscale hover:grayscale-0 image-hover transition-all duration-700"
              />
              
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-coastal-text/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Quote or accent text */}
            <div className="absolute -bottom-10 left-6 bg-coastal-background px-6 py-3 border border-coastal-lightgrey z-20">
              <p className="text-sm font-light text-coastal-text uppercase tracking-[0.1em]">15+ Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-light mb-10 tracking-[0.15em] uppercase text-coastal-text">
              Meet Georgina Louise
            </h2>
            
            <p className="text-lg text-coastal-text mb-8 font-light leading-relaxed tracking-wide">
              At the heart of our practice is a commitment to creating spaces that serve real life. 
              With over 15 years of experience in architectural project management, Georgina brings 
              a unique blend of technical expertise and design sensibility to every project.
            </p>
            
            <p className="text-base text-coastal-text mb-12 font-light leading-relaxed tracking-wide">
              Her approach prioritizes sustainable building practices, community impact, and spaces 
              that truly enhance the daily lives of their inhabitants. Every project is an opportunity 
              to contribute positively to the built environment.
            </p>
            
            <Link 
              href="/about" 
              className="inline-block px-12 py-4 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.15em] text-base font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300"
            >
              Learn More About Our Approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}