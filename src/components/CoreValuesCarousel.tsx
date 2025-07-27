'use client';

import React, { useState } from 'react';
import Container from './Container';
import { CoreValue } from '@/lib/types';

interface CoreValuesCarouselProps {
  values: CoreValue[];
}

export default function CoreValuesCarousel({ values }: CoreValuesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const icons: { [key: string]: string } = {
    home: '🏠',
    leaf: '🌿',
    users: '👥',
    eye: '👁️',
    handshake: '🤝'
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Five principles that guide every project we undertake
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.id}
              className="text-center p-6 bg-white rounded-sm hover:shadow-sm transition-shadow cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className="text-3xl mb-4">{icons[value.icon]}</div>
              <h3 className="font-semibold mb-2 text-sm">{value.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-white p-8 rounded-sm text-center">
            <div className="text-4xl mb-4">{icons[values[activeIndex].icon]}</div>
            <h3 className="text-xl font-semibold mb-4">{values[activeIndex].title}</h3>
            <p className="text-gray-600 leading-relaxed">{values[activeIndex].description}</p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {values.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-black' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}