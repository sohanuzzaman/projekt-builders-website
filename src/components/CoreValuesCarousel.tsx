'use client';

import React, { useState } from 'react';
import { CoreValue } from '@/lib/types';

interface CoreValuesCarouselProps {
  values: CoreValue[];
}

export default function CoreValuesCarousel({ values }: CoreValuesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-minimal">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-base text-gray max-w-2xl mx-auto font-light leading-relaxed">
            Five principles that guide every project we undertake
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.id}
              className="text-center group cursor-pointer"
            >
              <div className="w-14 h-14 core-value-circle mx-auto mb-6 flex items-center justify-center">
                <span className="text-lg core-value-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-medium mb-4 text-xs uppercase tracking-wider text-black min-h-[2.5rem] flex items-center justify-center">{value.title}</h3>
              <p className="text-xs text-gray font-light leading-relaxed min-h-[4rem]">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="text-center p-8">
            <div className="w-16 h-16 border border-gray mx-auto mb-8 flex items-center justify-center">
              <span className="text-xl font-light text-black">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-wider text-black">{values[activeIndex].title}</h3>
            <p className="text-gray font-light leading-relaxed">{values[activeIndex].description}</p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {values.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 transition-colors duration-300 ${
                  index === activeIndex ? 'bg-black' : 'bg-gray-light'
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