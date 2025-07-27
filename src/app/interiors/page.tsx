import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productCategories } from '@/data/content';

export default function InteriorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-white pt-48">
        <div className="container-page-header">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
              Interiors Collection
            </h1>
            <div className="inline-block px-6 py-2 border border-accent-dark mb-8">
              <span className="text-sm font-light uppercase tracking-wide text-accent-dark">
                Coming Soon
              </span>
            </div>
            <p className="text-large text-gray max-w-3xl mx-auto font-light leading-relaxed">
              Thoughtfully curated interior pieces that embody our commitment to sustainable design, 
              functionality, and timeless aesthetics.
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
                Design Philosophy
              </h2>
              <p className="text-large text-gray mb-8 font-light leading-relaxed">
                Our interiors collection reflects the same principles that guide our architectural projects: 
                sustainability, functionality, and enduring beauty.
              </p>
              <p className="text-gray mb-8 font-light leading-relaxed">
                Each piece is carefully selected or designed to enhance daily life while minimizing environmental impact. 
                We believe that beautiful interiors should tell a story of conscious living and thoughtful design.
              </p>
              <p className="text-gray font-light leading-relaxed">
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
      <section className="section-padding bg-white">
        <div className="container-minimal">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Product Categories
            </h2>
            <p className="text-large text-gray max-w-2xl mx-auto font-light">
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
                  <span className="text-xs font-light text-accent-dark mb-2 block uppercase tracking-wide">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-light mb-3 uppercase tracking-wide">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray font-light leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-minimal text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Join Our Waitlist
          </h2>
          <p className="text-large text-gray mb-12 max-w-2xl mx-auto font-light">
            Be the first to know when our interiors collection launches. 
            Get exclusive access to new pieces and special previews.
          </p>
          <Link 
            href="/contact?subject=interiors" 
            className="btn-minimal-accent uppercase tracking-wide text-sm"
          >
            Join Waitlist
          </Link>
        </div>
      </section>
    </>
  );
}