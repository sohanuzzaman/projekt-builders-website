import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Container from './Container';
import { HeroSection as HeroSectionType } from '@/lib/types';

interface HeroSectionProps {
  content: HeroSectionType;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-heading">
            {content.headline}
          </h1>
          {content.subheadline && (
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-body">
              {content.subheadline}
            </p>
          )}
          {content.cta && (
            <Button 
              href={content.cta.href}
              variant="outline"
              size="lg"
              className="bg-white text-black border-white hover:bg-white/90"
            >
              {content.cta.text}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}