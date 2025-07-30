import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productCategories } from '@/data/content';

export default function InteriorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-section-first pb-20 md:pb-32 bg-coastal-background">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
              Interiors Collection
            </h1>
            <div className="inline-block px-6 py-2 border border-coastal-gold mb-8">
              <span className="text-sm font-light uppercase tracking-[0.1em] text-coastal-gold">
                Coming Soon
              </span>
            </div>
            <p className="text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Thoughtfully curated interior pieces that embody our commitment to sustainable design, 
              functionality, and timeless aesthetics.
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
                Design Philosophy
              </h2>
              <p className="text-lg text-coastal-text mb-8 font-light leading-relaxed tracking-wide">
                Our interiors collection reflects the same principles that guide our architectural projects: 
                sustainability, functionality, and enduring beauty.
              </p>
              <p className="text-coastal-text mb-8 font-light leading-relaxed tracking-wide">
                Each piece is carefully selected or designed to enhance daily life while minimizing environmental impact. 
                We believe that beautiful interiors should tell a story of conscious living and thoughtful design.
              </p>
              <p className="text-coastal-text font-light leading-relaxed tracking-wide">
                From organic textiles to handcrafted ceramics, every item in our collection represents 
                a commitment to quality, sustainability, and timeless style.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop"
                  alt="Minimalist interior design showcase"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
              Product Categories
            </h2>
            <p className="text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Eight carefully curated categories of interior pieces, each designed to enhance your living space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <div key={category.id} className="group">
                <div className="aspect-square relative overflow-hidden mb-6">
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                </div>
                <div className="text-center">
                  <span className="text-xs font-light text-coastal-gold mb-2 block uppercase tracking-wide">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-light mb-3 uppercase tracking-wide text-coastal-text">
                    {category.name}
                  </h3>
                  <p className="text-sm text-coastal-text font-light leading-relaxed tracking-wide">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 md:py-32 bg-coastal-lightgrey">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
            Join Our Waitlist
          </h2>
          <p className="text-lg text-coastal-text mb-12 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Be the first to know when our interiors collection launches. 
            Get exclusive access to new pieces and special previews.
          </p>
          <Link 
            href="/contact?subject=interiors" 
            className="inline-block px-12 py-4 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.15em] text-base font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300"
          >
            Join Waitlist
          </Link>
        </div>
      </section>
    </>
  );
}