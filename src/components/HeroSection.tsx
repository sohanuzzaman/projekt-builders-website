'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSection as HeroSectionType } from "@/lib/types";
import Button from "@/components/ui/Button";

interface HeroSectionProps {
  content: HeroSectionType;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.image.src}
          alt=""
          fill
          className="object-cover scale-105 transition-transform duration-[20s] ease-out"
          priority
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Improved overlay for better text readability and accessibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-coastal-text/45 via-coastal-text/65 to-coastal-text/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent" />
        {/* Additional overlay for WCAG AA contrast compliance */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Enhanced geometric accents with better positioning */}
      <div className="absolute top-1/3 right-1/3 w-px h-24 bg-white/15 rotate-45 hidden xl:block animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-px bg-white/15 hidden xl:block animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-1/5 w-2 h-2 bg-white/20 rounded-full hidden xl:block animate-pulse" style={{ animationDelay: "2s" }}></div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Improved headline hierarchy and typography */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light tracking-[0.12em] uppercase leading-[0.9] md:leading-[0.85] hero-text animate-fade-in-up">
              <span className="block mb-2 md:mb-4">Spaces Built</span>
              <span className="block mb-4 md:mb-6">with Purpose.</span>
            </h1>
            <div 
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 font-light tracking-[0.15em] uppercase">
                Designed for Real Life.
              </p>
            </div>
          </div>

          {/* Enhanced subheadline with better spacing */}
          {content.subheadline && (
            <div
              className="opacity-0 animate-fade-in-up mb-12 md:mb-16"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-light normal-case tracking-wide leading-relaxed hero-subtext">
                {content.subheadline}
              </p>
            </div>
          )}

          {/* Enhanced CTA section with multiple actions */}
          {content.cta && (
            <div
              className="opacity-0 animate-fade-in-up flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <Link href={content.cta.href || "#"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2 border-white/90 text-white hover:bg-white hover:text-coastal-text px-12 py-4 text-base font-medium tracking-[0.15em] uppercase backdrop-blur-sm bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[200px]"
                >
                  <span className="relative z-10">{content.cta.text}</span>
                </Button>
              </Link>
              <Link href="/about">
                <button className="text-white/80 hover:text-white text-base font-light tracking-[0.1em] uppercase border-b border-white/30 hover:border-white/60 pb-1 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg p-2"
        onClick={() => {
          const nextSection = document.querySelector('.hero-section + section');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center cursor-pointer group">
          <span className="text-xs uppercase tracking-[0.2em] mb-3 font-light group-hover:text-white transition-colors">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/50 group-hover:bg-white/70 transition-colors"></div>
          <div className="w-1 h-1 bg-white/50 rounded-full mt-2 group-hover:bg-white/70 transition-colors"></div>
        </div>
      </button>

      {/* Subtle brand element */}
      <div className="absolute bottom-8 right-8 text-white/30 text-xs font-light tracking-[0.2em] uppercase hidden lg:block">
        Projekt Builders
      </div>
    </section>
  );
}
