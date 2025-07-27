import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { retreatInfo } from '@/data/content';

export default function RetreatsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-white pt-48">
        <div className="container-minimal">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
              Design Retreats
            </h1>
            <div className="inline-block px-6 py-2 border border-accent-dark mb-8">
              <span className="text-sm font-light uppercase tracking-wide text-accent-dark">
                Coming Soon
              </span>
            </div>
            <p className="text-large text-gray max-w-3xl mx-auto font-light leading-relaxed">
              Immersive learning experiences that combine architectural exploration, 
              sustainable design practices, and cultural discovery in beautiful locations.
            </p>
          </div>
        </div>
      </section>

      {/* Retreat Overview */}
      <section className="section-padding bg-gray-light">
        <div className="container-minimal">
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
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                {retreatInfo.title}
              </h2>
              <p className="text-large text-accent-dark mb-8 font-light uppercase tracking-wide">
                {retreatInfo.location} • {retreatInfo.duration}
              </p>
              <p className="text-large text-gray mb-8 font-light leading-relaxed">
                {retreatInfo.description}
              </p>
              <p className="text-gray font-light leading-relaxed">
                These intimate retreats are designed for architects, designers, and anyone passionate about 
                sustainable building practices. Experience traditional craftsmanship, modern innovation, 
                and the intersection of culture and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white">
        <div className="container-minimal">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              What&apos;s Included
            </h2>
            <p className="text-large text-gray max-w-2xl mx-auto font-light">
              A comprehensive experience designed to inspire and educate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreatInfo.included.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 border border-gray-light mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-extralight text-black">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-gray font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-gray-light">
        <div className="container-minimal">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Experience Preview
            </h2>
            <p className="text-large text-gray max-w-2xl mx-auto font-light">
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
      <section className="section-padding bg-white">
        <div className="container-minimal text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Register Your Interest
          </h2>
          <p className="text-large text-gray mb-12 max-w-2xl mx-auto font-light">
            Be among the first to know when retreat dates are announced. 
            Limited spaces available for an intimate learning experience.
          </p>
          <Link 
            href="/contact?subject=retreat" 
            className="btn-minimal-accent uppercase tracking-wide text-sm"
          >
            Register Interest
          </Link>
        </div>
      </section>
    </>
  );
}