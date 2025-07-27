import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSection as HeroSectionType } from "@/lib/types";

interface HeroSectionProps {
  content: HeroSectionType;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container-minimal relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-8 font-light tracking-tight leading-tight">
            {content.headline}
          </h1>

          {content.subheadline && (
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {content.subheadline}
            </p>
          )}

          {content.cta && (
            <Link href={content.cta.href || "#"} className="btn-minimal">
              {content.cta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
