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
    <section className="py-32 md:py-40 bg-coastal-lightgrey/30">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.2em] uppercase text-coastal-text">
            Recent Projects
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-[3/4] relative overflow-hidden mb-6 bg-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-normal text-coastal-text tracking-[0.1em] uppercase">
                  {project.title}
                </h3>
                <p className="text-coastal-text/50 font-light text-sm">
                  {project.architect}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-20">
          <Link
            href="/portfolio"
            className="inline-block text-coastal-text uppercase tracking-[0.2em] text-sm font-light border-b border-coastal-text/30 hover:border-coastal-text transition-all duration-300 pb-1"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
