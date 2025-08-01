'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItem {
  id: number;
  title: string;
  architect: string;
  category: string;
  image: string;
  description: string;
  year: string;
}

const featuredProjects: PortfolioItem[] = [
  {
    id: 1,
    title: "Jimmy Grants Eastland",
    architect: "Techne Architects",
    category: "Commercial",
    image: "/images/portfolio/Jimmy Grants (1).jpg",
    description: "A contemporary commercial space blending functionality with striking design aesthetics",
    year: "2023"
  },
  {
    id: 2,
    title: "Hellenic Hotel Williamstown",
    architect: "March Studio",
    category: "Hospitality",
    image: "/images/portfolio/Hellenic Hotel Williamstown.webp",
    description: "Sophisticated hospitality project honoring tradition while embracing modern luxury",
    year: "2023"
  },
  {
    id: 3,
    title: "The Pinnacle at Rye",
    architect: "David Norman Design",
    category: "Residential",
    image: "/images/portfolio/The Pinnacle at Rye.jpg",
    description: "Luxury residential development showcasing coastal living at its finest",
    year: "2022"
  }
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 md:py-32 bg-coastal-lightgrey relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-16 right-16 w-40 h-40 border-2 border-coastal-gold/20 rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-2 h-48 bg-coastal-text/10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
            Recent Projects
          </h2>
          <p className="text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            A showcase of our collaborative work with leading architects and developers
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] relative overflow-hidden mb-6 bg-coastal-background">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-white">
                    <p className="text-sm font-light mb-2 uppercase tracking-[0.1em]">
                      {project.category} • {project.year}
                    </p>
                    <p className="text-base font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1">
                  <span className="text-xs text-coastal-text font-medium uppercase tracking-[0.1em]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-normal text-coastal-text tracking-[0.05em] uppercase transition-colors duration-300 group-hover:text-coastal-gold">
                  {project.title}
                </h3>
                <p className="text-coastal-text/80 font-light text-sm uppercase tracking-[0.1em]">
                  {project.architect}
                </p>
                
                {/* Animated underline */}
                <div className="w-0 h-px bg-coastal-gold transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center space-x-4 px-12 py-4 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.15em] text-base font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300 hover:scale-105"
          >
            <span>View Full Portfolio</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
