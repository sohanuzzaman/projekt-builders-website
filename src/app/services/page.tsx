"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicePhases } from "@/data/content";

export default function ServicesPage() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="page-section-first pb-20 md:pb-32 bg-coastal-background">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
              Services
            </h1>
            <p className="text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Comprehensive project management services that guide your
              architectural vision from initial concept through to successful
              completion.
            </p>
          </div>
        </div>
      </section>

      {/* Service Phases */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
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
      <section className="py-20 md:py-32 bg-coastal-background">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-coastal-text mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Let&apos;s discuss how our comprehensive project management approach can
            bring your architectural vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.15em] text-base font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
