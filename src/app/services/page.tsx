"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { servicePhases } from "@/data/content";

export default function ServicesPage() {
  const [activePhase, setActivePhase] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Handle swipe gestures on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance && activePhase < servicePhases.length - 1) {
      // Swipe left - next phase
      setActivePhase(activePhase + 1);
    }

    if (distance < -minSwipeDistance && activePhase > 0) {
      // Swipe right - previous phase
      setActivePhase(activePhase - 1);
    }
  };

  // Add keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && activePhase > 0) {
        setActivePhase(activePhase - 1);
      } else if (e.key === 'ArrowRight' && activePhase < servicePhases.length - 1) {
        setActivePhase(activePhase + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhase]);

  return (
    <>
      {/* Hero Section */}
      <section className="page-section-first pb-16 md:pb-20 lg:pb-32 bg-coastal-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 md:mb-8 tracking-[0.15em] uppercase text-coastal-text">
              Services
            </h1>
            <p className="text-base sm:text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Comprehensive project management services that guide your
              architectural vision from initial concept through to successful
              completion.
            </p>
          </div>
        </div>
      </section>

      {/* Service Phases */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Mobile-first approach: Stack on mobile, side-by-side on larger screens */}
          <div className="block lg:hidden mb-12">
            <h2 className="text-xl sm:text-2xl font-light mb-6 uppercase tracking-[0.1em] text-coastal-text text-center">
              Project Phases
            </h2>
            
            {/* Mobile Phase Navigation - Horizontal Scroll */}
            <div className="overflow-x-auto pb-4 mb-8 phase-navigation-mobile">
              <div className="flex space-x-3 min-w-max px-4">
                {servicePhases.map((phase, index) => (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(index)}
                    className={`flex-shrink-0 px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                      activePhase === index
                        ? "bg-coastal-gold text-coastal-text"
                        : "bg-coastal-lightgrey text-coastal-text/70"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-xs font-light mr-2 opacity-60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-light text-xs uppercase tracking-wide">
                        {phase.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Phase Details */}
            <div 
              className="bg-coastal-lightgrey p-6 sm:p-8 rounded-lg relative mobile-phase-transition"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Navigation arrows for mobile */}
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => activePhase > 0 && setActivePhase(activePhase - 1)}
                  disabled={activePhase === 0}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    activePhase === 0 
                      ? 'text-coastal-text/30 cursor-not-allowed' 
                      : 'text-coastal-text hover:bg-coastal-gold hover:text-white'
                  }`}
                  aria-label="Previous phase"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="text-xs text-coastal-text/60 uppercase tracking-wider">
                  {activePhase + 1} of {servicePhases.length}
                </div>

                <button
                  onClick={() => activePhase < servicePhases.length - 1 && setActivePhase(activePhase + 1)}
                  disabled={activePhase === servicePhases.length - 1}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    activePhase === servicePhases.length - 1 
                      ? 'text-coastal-text/30 cursor-not-allowed' 
                      : 'text-coastal-text hover:bg-coastal-gold hover:text-white'
                  }`}
                  aria-label="Next phase"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-light text-coastal-gold">
                  {String(activePhase + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light mb-4 tracking-[0.1em] uppercase text-coastal-text">
                {servicePhases[activePhase].title}
              </h3>
              <p className="text-base sm:text-lg text-coastal-text mb-6 font-light leading-relaxed tracking-wide">
                {servicePhases[activePhase].description}
              </p>

              <h4 className="text-base sm:text-lg font-light mb-4 uppercase tracking-[0.1em] text-coastal-text">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {servicePhases[activePhase].responsibilities.map(
                  (responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-coastal-gold mt-2 mr-3 flex-shrink-0 rounded-full"></div>
                      <span className="text-sm sm:text-base text-coastal-text font-light leading-relaxed tracking-wide">
                        {responsibility}
                      </span>
                    </li>
                  )
                )}
              </ul>

              {/* Swipe indicator */}
              <div className="mt-6 text-center">
                <div className="text-xs text-coastal-text/40 uppercase tracking-wider">
                  Swipe left or right to navigate
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-16">
            {/* Phase Navigation */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-light mb-8 uppercase tracking-[0.1em] text-coastal-text">
                Project Phases
              </h2>
              <nav className="space-y-4">
                {servicePhases.map((phase, index) => (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(index)}
                    className={`block w-full text-left p-4 transition-all duration-300 ${
                      activePhase === index
                        ? "bg-coastal-lightgrey text-coastal-text"
                        : "bg-transparent text-coastal-text hover:text-coastal-gold"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-xs font-light mr-4 opacity-60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-light text-sm uppercase tracking-wide">
                        {phase.title}
                      </span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Phase Details */}
            <div className="lg:col-span-2">
              <div className="bg-coastal-lightgrey p-12">
                <div className="mb-8">
                  <span className="text-6xl font-light text-coastal-gold">
                    {String(activePhase + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-3xl font-light mb-6 tracking-[0.1em] uppercase text-coastal-text">
                  {servicePhases[activePhase].title}
                </h3>
                <p className="text-lg text-coastal-text mb-8 font-light leading-relaxed tracking-wide">
                  {servicePhases[activePhase].description}
                </p>

                <h4 className="text-lg font-light mb-6 uppercase tracking-[0.1em] text-coastal-text">
                  Key Responsibilities
                </h4>
                <ul className="space-y-4">
                  {servicePhases[activePhase].responsibilities.map(
                    (responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-coastal-gold mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-coastal-text font-light leading-relaxed tracking-wide">
                          {responsibility}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-coastal-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 md:mb-8 tracking-[0.15em] uppercase text-coastal-text">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg text-coastal-text mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Let&apos;s discuss how our comprehensive project management approach can
            bring your architectural vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.15em] text-sm sm:text-base font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
