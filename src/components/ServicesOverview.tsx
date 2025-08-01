import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: "Project Management",
    description: "Comprehensive oversight from concept to completion, ensuring your vision becomes reality with precision and care.",
    number: "01",
    icon: "📋"
  },
  {
    title: "Design Collaboration", 
    description: "Seamless coordination between architects, designers, and contractors to maintain design excellence throughout.",
    number: "02",
    icon: "🤝"
  },
  {
    title: "Sustainable Advocacy",
    description: "Championing environmentally responsible practices and materials that benefit both your project and the planet.",
    number: "03",
    icon: "🌱"
  }
];

export default function ServicesOverview() {
  return (
    <section className="pt-24 pb-16 md:pt-40 md:pb-24 bg-coastal-background">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
            How We Help
          </h2>
          <p className="text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Three core areas of expertise that ensure your architectural project succeeds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {services.map((service, index) => (
            <div key={index} className="text-center group cursor-pointer px-4 py-8 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg">
              {/* Icon */}
              <div className="text-4xl mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              
              {/* Number */}
              <div className="text-5xl md:text-6xl font-light text-coastal-text mb-8 transition-all duration-500 group-hover:text-coastal-gold group-hover:scale-105">
                {service.number}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-normal mb-6 tracking-[0.1em] uppercase text-coastal-text transition-colors duration-300 group-hover:text-coastal-taupe">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-coastal-text font-light text-base leading-relaxed tracking-wide">
                {service.description}
              </p>
              
              {/* Animated underline */}
              <div className="w-0 h-px bg-coastal-gold mx-auto mt-6 transition-all duration-500 group-hover:w-16"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link 
            href="/services"
            className="inline-block px-12 py-4 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.15em] text-base font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}