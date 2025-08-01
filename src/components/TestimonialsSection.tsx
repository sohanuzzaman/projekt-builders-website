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

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-coastal-gold' : 'text-coastal-lightgrey'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-coastal-lightgrey/30 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-coastal-lightgrey/20 rounded-full hidden lg:block"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-40 bg-coastal-gold/20 hidden xl:block"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
            Client Testimonials
          </h2>
          <p className="text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Hear from the architects, developers, and business owners who have trusted us with their vision
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative min-h-[400px] md:min-h-[300px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="text-center px-4 md:px-8">
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl font-light text-coastal-text leading-relaxed mb-8 md:mb-12 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Author Info */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-coastal-text tracking-wide">
                      {testimonial.author}
                    </h4>
                    <p className="text-coastal-text/80 font-light">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="text-coastal-gold text-sm font-light uppercase tracking-[0.1em]">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 border border-coastal-text hover:border-coastal-gold text-coastal-text hover:text-coastal-gold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-coastal-gold focus:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 border border-coastal-text hover:border-coastal-gold text-coastal-text hover:text-coastal-gold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-coastal-gold focus:ring-offset-2"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-coastal-gold' 
                  : 'bg-coastal-lightgrey hover:bg-coastal-gold/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/portfolio"
            className="inline-block px-12 py-4 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.15em] text-base font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300 hover:scale-105"
          >
            View Our Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
