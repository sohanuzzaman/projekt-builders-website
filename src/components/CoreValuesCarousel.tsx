'use client';

import React, { useState } from 'react';
import { CoreValue } from '@/lib/types';

interface CoreValuesCarouselProps {
  values: CoreValue[];
}

export default function CoreValuesCarousel({ values }: CoreValuesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
            Our Core Values
          </h2>
          <p className="text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Five principles that guide every project we undertake
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-5 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.id}
              className="text-center group cursor-pointer px-2"
            >
              <div className="w-16 h-16 coastal-core-value-circle mx-auto mb-8 flex items-center justify-center">
                <span className="text-xl coastal-core-value-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-normal mb-6 text-sm uppercase tracking-[0.1em] text-coastal-text min-h-[3rem] flex items-center justify-center leading-tight">{value.title}</h3>
              <p className="text-sm text-coastal-text font-light leading-relaxed min-h-[5rem] tracking-wide">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="text-center p-8">
            <div className="w-16 h-16 coastal-core-value-circle mx-auto mb-8 flex items-center justify-center">
              <span className="text-xl coastal-core-value-number">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-lg font-normal mb-6 uppercase tracking-[0.1em] text-coastal-text">{values[activeIndex].title}</h3>
            <p className="text-coastal-text font-light leading-relaxed tracking-wide">{values[activeIndex].description}</p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {values.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 transition-colors duration-300 ${
                  index === activeIndex ? 'bg-coastal-text' : 'bg-coastal-lightgrey'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}