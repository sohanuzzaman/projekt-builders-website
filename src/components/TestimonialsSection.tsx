'use client';

import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
  image?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Georgina's expertise in project management transformed our vision into a reality that exceeded all expectations. Her attention to detail and commitment to sustainable practices made all the difference.",
    author: "David Chen",
    role: "Head Architect",
    company: "Chen Architecture Studio",
    project: "Sustainable Family Home",
    rating: 5,
  },
  {
    id: 2,
    quote: "Working with Projekt Builders was a seamless experience. The coordination between all parties was exceptional, and the final result speaks for itself - functional, beautiful, and environmentally conscious.",
    author: "Sarah Mitchell",
    role: "Restaurant Owner",
    company: "Eastland Hospitality Group",
    project: "Jimmy Grants Eastland",
    rating: 5,
  },
  {
    id: 3,
    quote: "The level of professionalism and dedication to quality is unmatched. Every phase was managed with precision, and the communication throughout the process was outstanding.",
    author: "Michael Thompson",
    role: "Property Developer",
    company: "Thompson Developments",
    project: "The Pinnacle at Rye",
    rating: 5,
  },
  {
    id: 4,
    quote: "Georgina's holistic approach to project management ensures that sustainability and functionality are never compromised. Our hotel renovation exceeded all quality and environmental benchmarks.",
    author: "Helena Papadopoulos",
    role: "General Manager",
    company: "Hellenic Hotel",
    project: "Hellenic Hotel Williamstown",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  return (
    <section className="py-32 md:py-40 bg-white relative">
      <div className="max-w-4xl mx-auto px-8 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.2em] uppercase text-coastal-text">
            Client Testimonials
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[300px] md:min-h-[250px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="text-center px-4 md:px-8">
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl font-light text-coastal-text leading-relaxed mb-12 md:mb-16">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="space-y-2">
                    <h4 className="text-base font-medium text-coastal-text tracking-wide">
                      {testimonial.author}
                    </h4>
                    <p className="text-coastal-text/60 font-light text-sm">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Dots Navigation */}
        <div className="flex justify-center mt-16 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'bg-coastal-text' 
                  : 'bg-coastal-lightgrey/40 hover:bg-coastal-lightgrey'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
