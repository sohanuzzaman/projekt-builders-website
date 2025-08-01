import React from 'react';
import Image from 'next/image';

const portfolioProjects = [
  {
    id: 1,
    title: "Jimmy Grants Eastland",
    architect: "Techne Architects",
    builder: "CBD Contracting",
    photographer: "Tom Blachford",
    images: [
      "/images/portfolio/Jimmy Grants (1).jpg",
      "/images/portfolio/Jimmy Grants (2).jpg",
      "/images/portfolio/Jimmy Grants (3).jpg",
      "/images/portfolio/Jimmy Grants (5).jpg"
    ],
    description: "A contemporary commercial space that seamlessly blends functionality with striking design aesthetics."
  },
  {
    id: 2,
    title: "Hellenic Hotel Williamstown",
    architect: "March Studio",
    builder: "CBD Contracting Group",
    photographer: "Michael Woods",
    images: [
      "/images/portfolio/Hellenic Hotel Williamstown.webp"
    ],
    description: "A sophisticated hospitality project that honors tradition while embracing modern luxury."
  },
  {
    id: 3,
    title: "Pavilions",
    architect: "VIA Architects",
    builder: "Ironside Construction",
    photographer: "",
    images: [
      "/images/portfolio/Pavilions (1).jpg",
      "/images/portfolio/Pavilions (3).jpg"
    ],
    description: "Elegant residential pavilions that create harmony between indoor and outdoor living."
  },
  {
    id: 4,
    title: "The Pinnacle at Rye",
    architect: "David Norman Design",
    builder: "Rayco Construction",
    photographer: "",
    images: [
      "/images/portfolio/The Pinnacle at Rye.jpg"
    ],
    description: "A pinnacle of contemporary design overlooking stunning coastal landscapes."
  }
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-section-first pb-20 md:pb-32 bg-coastal-background">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
              Portfolio
            </h1>
            <p className="text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              A showcase of our collaborative projects with leading architects and builders, 
              demonstrating our commitment to exceptional project management and quality delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="space-y-32">
            {portfolioProjects.map((project, index) => (
              <div key={project.id} className="group">
                {/* Project Images */}
                <div className="mb-12">
                  {project.images.length === 1 ? (
                    // Single image layout
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      />
                    </div>
                  ) : (
                    // Multiple images grid
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.images.map((image, imageIndex) => (
                        <div key={imageIndex} className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={image}
                            alt={`${project.title} - Image ${imageIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 35vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.1em] uppercase text-coastal-text">
                      {project.title}
                    </h2>
                    <p className="text-lg text-coastal-text font-light leading-relaxed tracking-wide mb-8">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-coastal-text mb-2">
                        Architect
                      </h3>
                      <p className="text-coastal-text font-light tracking-wide">
                        {project.architect}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-coastal-text mb-2">
                        Builder
                      </h3>
                      <p className="text-coastal-text font-light tracking-wide">
                        {project.builder}
                      </p>
                    </div>
                    
                    {project.photographer && (
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-coastal-text mb-2">
                          Photography
                        </h3>
                        <p className="text-coastal-text font-light tracking-wide">
                          {project.photographer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider (except for last project) */}
                {index < portfolioProjects.length - 1 && (
                  <div className="mt-32 border-t border-coastal-lightgrey"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-coastal-lightgrey">
        <div className="max-w-4xl mx-auto px-8 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-[0.1em] uppercase text-coastal-text">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-coastal-text mb-12 font-light leading-relaxed tracking-wide">
            Let us bring the same level of expertise and attention to detail to your next architectural project.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.15em] text-sm font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
