import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-minimal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            {/* Minimalist geometric elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-black/10 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gray-light z-0"></div>
            <div className="absolute top-1/2 -left-8 w-1 h-24 bg-black hidden lg:block"></div>
            
            <div className="aspect-[3/4] relative overflow-hidden z-10">
              <Image
                src="/images/georgina-portrait.jpg"
                alt="Georgina Louise, Principal Project Manager"
                fill
                className="object-cover grayscale hover:grayscale-0 image-hover transition-all duration-700"
              />
              
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Quote or accent text */}
            <div className="absolute -bottom-8 left-4 bg-white px-4 py-2 shadow-sm border border-gray-light z-20">
              <p className="text-xs font-light text-gray-medium uppercase tracking-wider">15+ Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
              Meet Georgina Louise
            </h2>
            
            <p className="text-base text-gray mb-8 font-light leading-relaxed">
              At the heart of our practice is a commitment to creating spaces that serve real life. 
              With over 15 years of experience in architectural project management, Georgina brings 
              a unique blend of technical expertise and design sensibility to every project.
            </p>
            
            <p className="text-sm text-gray mb-12 font-light leading-relaxed">
              Her approach prioritizes sustainable building practices, community impact, and spaces 
              that truly enhance the daily lives of their inhabitants. Every project is an opportunity 
              to contribute positively to the built environment.
            </p>
            
            <Link 
              href="/about" 
              className="btn-minimal"
            >
              Learn More About Our Approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}