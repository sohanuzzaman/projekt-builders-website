import React from 'react';
import Image from 'next/image';
import { georgina, coreValues } from '@/data/content';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-section-first pb-20 md:pb-32 bg-coastal-background">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
              About Us
            </h1>
            <p className="text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              At the heart of our practice is a commitment to creating spaces that serve real life, 
              prioritizing functionality, sustainability, and timeless design.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-coastal-lightgrey">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
                Our Philosophy
              </h2>
              <p className="text-lg text-coastal-text mb-8 font-light leading-relaxed tracking-wide">
                At the heart of our practice is a belief that architecture should serve life, not the other way around. 
                Every space we help create is designed with the understanding that buildings shape how we live, work, and connect.
              </p>
              <p className="text-coastal-text mb-8 font-light leading-relaxed tracking-wide">
                We champion sustainable building practices not as a trend, but as a responsibility to future generations. 
                Our approach integrates environmental consciousness with aesthetic excellence, proving that responsible design 
                can be both beautiful and functional.
              </p>
              <p className="text-coastal-text font-light leading-relaxed tracking-wide">
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
      <section className="py-20 md:py-32 bg-coastal-background">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              {/* Animated geometric elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-black/20 transition-all duration-500 group-hover:border-black/40 group-hover:rotate-45"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gray-light transition-all duration-700 group-hover:bg-black/10 group-hover:scale-110"></div>
              <div className="absolute top-1/3 -left-10 w-2 h-32 bg-black/30 hidden lg:block transition-all duration-300 group-hover:bg-black group-hover:h-40"></div>
              <div className="absolute bottom-1/4 -right-6 w-1 h-16 bg-gray-medium hidden lg:block transition-all duration-500 group-hover:bg-black group-hover:h-20"></div>
              
              <div className="aspect-[3/4] relative overflow-hidden z-10 transition-all duration-500 group-hover:shadow-2xl">
                <Image
                  src={georgina.image.src}
                  alt={georgina.image.alt}
                  fill
                  className="object-cover grayscale image-hover transition-all duration-700 group-hover:grayscale-0"
                />
                
                {/* Subtle overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Animated experience badge */}
              <div className="absolute -bottom-12 left-6 bg-white px-6 py-3 shadow-lg border border-gray-light z-20 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                <p className="text-sm font-medium text-black uppercase tracking-wider">Principal Project Manager</p>
                <p className="text-xs text-gray-medium mt-1">15+ Years Experience</p>
              </div>
              

            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-[0.15em] uppercase text-coastal-text">
                {georgina.name}
              </h2>
              <p className="text-lg text-coastal-gold mb-8 font-light uppercase tracking-wide">
                {georgina.title}
              </p>
              <p className="text-lg text-coastal-text mb-8 font-light leading-relaxed tracking-wide">
                {georgina.bio}
              </p>
              <div className="space-y-3">
                {georgina.qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-coastal-gold mr-4"></div>
                    <span className="text-coastal-text font-light">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
              Our Core Principles
            </h2>
            <p className="text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Five fundamental beliefs that guide every decision and shape every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {coreValues.map((value, index) => (
              <div key={value.id} className="text-center group cursor-pointer px-4">
                <div className="w-16 h-16 coastal-core-value-circle mx-auto mb-8 flex items-center justify-center">
                  <span className="text-xl coastal-core-value-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-normal mb-6 uppercase tracking-[0.1em] text-coastal-text min-h-[3rem] flex items-center justify-center leading-tight">
                  {value.title}
                </h3>
                <p className="text-coastal-text font-light leading-relaxed min-h-[5rem] tracking-wide">
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