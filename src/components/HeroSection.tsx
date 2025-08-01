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
        {/* Minimal overlay for subtle depth while preserving image clarity */}
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-coastal-background/20 via-transparent to-transparent" />
      </div>

      {/* Minimal geometric accents */}
      <div className="absolute top-1/4 right-1/4 w-px h-16 bg-coastal-text/15 rotate-45 hidden xl:block"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-coastal-gold/30 rounded-full hidden xl:block"></div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Minimalist headline */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-coastal-text font-light tracking-[0.15em] uppercase leading-[0.9] hero-text-minimal animate-fade-in-up">
              <span className="block">Spaces Built</span>
              <span className="block">with Purpose</span>
            </h1>
          </div>

          {/* Minimal CTA */}
          {content.cta && (
            <div
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <Link href={content.cta.href || "#"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="group border border-coastal-text text-coastal-text hover:bg-coastal-text hover:text-white px-8 py-3 text-sm font-light tracking-[0.2em] uppercase bg-transparent transition-all duration-500 hover:scale-105"
                >
                  {content.cta.text}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <button 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-coastal-text/50 focus:outline-none focus:ring-1 focus:ring-coastal-text focus:ring-offset-2 rounded p-2"
        onClick={() => {
          const nextSection = document.querySelector('.hero-section + section');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center cursor-pointer group">
          <div className="w-px h-12 bg-coastal-text/30 group-hover:bg-coastal-text/50 transition-colors"></div>
          <div className="w-1 h-1 bg-coastal-text/30 rounded-full mt-2 group-hover:bg-coastal-text/50 transition-colors"></div>
        </div>
      </button>
    </section>
  );
}
