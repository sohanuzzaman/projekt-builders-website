'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { CoreValue } from '@/types';

interface CoreValuesCarouselProps {
  values: CoreValue[];
}

export function CoreValuesCarousel({ values }: CoreValuesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % values.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + values.length) % values.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five principles that guide every project and partnership
          </p>
        </div>

        <div className="relative">
          {/* Desktop View - Show all cards */}
          <div className="hidden md:grid md:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} hover className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Icon name={value.icon as any} size={24} className="text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden">
            <Card className="text-center min-h-[300px] flex flex-col justify-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Icon name={values[currentIndex].icon as any} size={32} className="text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {values[currentIndex].title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {values[currentIndex].description}
              </p>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Icon name="chevron-left" size={20} />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {values.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-emerald-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Icon name="chevron-right" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}