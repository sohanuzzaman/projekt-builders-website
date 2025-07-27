import React from 'react';
import Image from 'next/image';
import { georgina, coreValues } from '@/data/content';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-white pt-48">
        <div className="container-minimal">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
              About Us
            </h1>
            <p className="text-large text-gray max-w-3xl mx-auto font-light leading-relaxed">
              At the heart of our practice is a commitment to creating spaces that serve real life, 
              prioritizing functionality, sustainability, and timeless design.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-minimal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
                Our Philosophy
              </h2>
              <p className="text-large text-gray mb-8 font-light leading-relaxed">
                At the heart of our practice is a belief that architecture should serve life, not the other way around. 
                Every space we help create is designed with the understanding that buildings shape how we live, work, and connect.
              </p>
              <p className="text-gray mb-8 font-light leading-relaxed">
                We champion sustainable building practices not as a trend, but as a responsibility to future generations. 
                Our approach integrates environmental consciousness with aesthetic excellence, proving that responsible design 
                can be both beautiful and functional.
              </p>
              <p className="text-gray font-light leading-relaxed">
                Through meticulous project management and collaborative partnerships, we ensure that every detail serves 
                the greater vision while maintaining the highest standards of craftsmanship and integrity.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop"
                  alt="Architectural detail showcasing our design philosophy"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Georgina Profile */}
      <section className="section-padding bg-white">
        <div className="container-minimal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={georgina.image.src}
                  alt={georgina.image.alt}
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                {georgina.name}
              </h2>
              <p className="text-large text-accent-dark mb-8 font-light uppercase tracking-wide">
                {georgina.title}
              </p>
              <p className="text-large text-gray mb-8 font-light leading-relaxed">
                {georgina.bio}
              </p>
              <div className="space-y-3">
                {georgina.qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent-dark mr-4"></div>
                    <span className="text-gray font-light">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-light">
        <div className="container-minimal">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Our Core Principles
            </h2>
            <p className="text-large text-gray max-w-2xl mx-auto font-light">
              Five fundamental beliefs that guide every decision and shape every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {coreValues.map((value, index) => (
              <div key={value.id} className="text-center">
                <div className="w-16 h-16 border border-gray-light mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-extralight text-black">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-light mb-4 uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="text-gray font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}