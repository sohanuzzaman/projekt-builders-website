import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: "Project Management",
    description: "Comprehensive oversight from concept to completion, ensuring your vision becomes reality with precision and care.",
    number: "01"
  },
  {
    title: "Design Collaboration", 
    description: "Seamless coordination between architects, designers, and contractors to maintain design excellence throughout.",
    number: "02"
  },
  {
    title: "Sustainable Advocacy",
    description: "Championing environmentally responsible practices and materials that benefit both your project and the planet.",
    number: "03"
  }
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-minimal">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            How We Help
          </h2>
          <p className="text-base text-gray max-w-2xl mx-auto font-light leading-relaxed">
            Three core areas of expertise that ensure your architectural project succeeds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-light text-black mb-6">
                {service.number}
              </div>
              <h3 className="text-lg font-medium mb-4 tracking-wide uppercase text-black">
                {service.title}
              </h3>
              <p className="text-gray font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/services"
            className="inline-block border border-black text-black px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}