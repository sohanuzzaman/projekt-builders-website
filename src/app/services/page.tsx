"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicePhases } from "@/data/content";

export default function ServicesPage() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-white pt-48">
        <div className="container-page-header">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
              Services
            </h1>
            <p className="text-large text-gray max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive project management services that guide your
              architectural vision from initial concept through to successful
              completion.
            </p>
          </div>
        </div>
      </section>

      {/* Service Phases */}
      <section className="section-padding bg-gray-light">
        <div className="container-minimal">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Phase Navigation */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-light mb-8 uppercase tracking-wide">
                Project Phases
              </h2>
              <nav className="space-y-4">
                {servicePhases.map((phase, index) => (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(index)}
                    className={`block w-full text-left p-4 transition-all duration-300 ${
                      activePhase === index
                        ? "bg-white text-black"
                        : "bg-transparent text-gray hover:text-black"
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
              <div className="bg-white p-12">
                <div className="mb-8">
                  <span className="text-6xl font-extralight text-accent-dark">
                    {String(activePhase + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-3xl font-light mb-6 tracking-tight">
                  {servicePhases[activePhase].title}
                </h3>
                <p className="text-large text-gray mb-8 font-light leading-relaxed">
                  {servicePhases[activePhase].description}
                </p>

                <h4 className="text-lg font-light mb-6 uppercase tracking-wide">
                  Key Responsibilities
                </h4>
                <ul className="space-y-4">
                  {servicePhases[activePhase].responsibilities.map(
                    (responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-accent-dark mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray font-light leading-relaxed">
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
      <section className="section-padding bg-white">
        <div className="container-minimal text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-large text-gray mb-12 max-w-2xl mx-auto font-light">
            Let&apos;s discuss how our comprehensive project management approach can
            bring your architectural vision to life.
          </p>
          <Link
            href="/contact"
            className="btn-minimal uppercase tracking-wide text-sm"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
