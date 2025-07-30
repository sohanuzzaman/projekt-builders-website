import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { retreatInfo } from '@/data/content';

export default function RetreatsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-section-first pb-20 md:pb-32 bg-coastal-background">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
              Design Retreats
            </h1>
            <div className="inline-block px-6 py-2 border border-coastal-gold mb-8">
              <span className="text-sm font-light uppercase tracking-[0.1em] text-coastal-gold">
                Coming Soon
              </span>
            </div>
            <p className="text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Immersive learning experiences that combine architectural exploration, 
              sustainable design practices, and cultural discovery in beautiful locations.
            </p>
          </div>
        </div>
      </section>

      {/* Retreat Overview */}
      <section className="py-20 md:py-32 bg-coastal-lightgrey">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={retreatInfo.images[0].src}
                  alt={retreatInfo.images[0].alt}
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
                {retreatInfo.title}
              </h2>
              <p className="text-lg text-coastal-gold mb-8 font-light uppercase tracking-wide">
                {retreatInfo.location} • {retreatInfo.duration}
              </p>
              <p className="text-lg text-coastal-text mb-8 font-light leading-relaxed tracking-wide">
                {retreatInfo.description}
              </p>
              <p className="text-coastal-text font-light leading-relaxed tracking-wide">
                These intimate retreats are designed for architects, designers, and anyone passionate about 
                sustainable building practices. Experience traditional craftsmanship, modern innovation, 
                and the intersection of culture and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
              What&apos;s Included
            </h2>
            <p className="text-lg text-coastal-text max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
              A comprehensive experience designed to inspire and educate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreatInfo.included.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 coastal-core-value-circle mx-auto mb-6 flex items-center justify-center">
                  <span className="text-xl coastal-core-value-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-coastal-text font-light leading-relaxed tracking-wide">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-32 bg-coastal-lightgrey">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
              Experience Preview
            </h2>
            <p className="text-lg text-coastal-text max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
              A glimpse into the architectural wonders and cultural richness you&apos;ll discover
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {retreatInfo.images.map((image, index) => (
              <div key={index} className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
            Register Your Interest
          </h2>
          <p className="text-lg text-coastal-text mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Be among the first to know when retreat dates are announced. 
            Limited spaces available for an intimate learning experience.
          </p>
          <Link 
            href="/contact?subject=retreat" 
            className="inline-block px-12 py-4 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.15em] text-base font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300"
          >
            Register Interest
          </Link>
        </div>
      </section>
    </>
  );
}