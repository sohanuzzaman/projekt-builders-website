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
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/georgina-portrait.jpg"
                alt="Georgina Louise, Principal Project Manager"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
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
              className="inline-block border border-black text-black px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              Learn More About Our Approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}