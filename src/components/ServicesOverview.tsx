import React from 'react';
import Link from 'next/link';
import Container from './Container';
import Card from './Card';

const services = [
  {
    title: "Client-side Project Management",
    description: "Comprehensive oversight from concept to completion, ensuring your vision becomes reality on time and within budget.",
    icon: "📋"
  },
  {
    title: "Design Integrity & Collaboration", 
    description: "Seamless coordination between architects, designers, and contractors to maintain design excellence throughout the build.",
    icon: "🎨"
  },
  {
    title: "Sustainable Building Advocacy",
    description: "Championing environmentally responsible practices and materials that benefit both your project and the planet.",
    icon: "🌱"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            How We Help
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three core areas of expertise that ensure your architectural project succeeds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="inline-flex items-center text-black hover:text-gray-600 transition-colors"
          >
            View All Services
            <span className="ml-2">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}