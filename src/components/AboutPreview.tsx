import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import Button from './Button';

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Meet Georgina Louise
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At the heart of our practice is a commitment to creating spaces that serve real life. 
              With over 15 years of experience in architectural project management, Georgina brings 
              a unique blend of technical expertise and design sensibility to every project.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Her approach prioritizes sustainable building practices, community impact, and spaces 
              that truly enhance the daily lives of their inhabitants. Every project is an opportunity 
              to contribute positively to the built environment.
            </p>
            <Button href="/about" variant="outline">
              Learn More About Our Approach
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/georgina-portrait.jpg"
                alt="Georgina Louise, Principal Project Manager"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}