'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onGoToIndex: (index: number) => void;
  projectTitle: string;
}

export default function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onGoToIndex,
  projectTitle
}: LightboxProps) {
  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onPrev();
        break;
      case 'ArrowRight':
        onNext();
        break;
    }
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-2 text-white hover:text-coastal-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coastal-gold focus:ring-offset-2 focus:ring-offset-black rounded-md"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-coastal-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coastal-gold focus:ring-offset-2 focus:ring-offset-black rounded-md"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-coastal-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coastal-gold focus:ring-offset-2 focus:ring-offset-black rounded-md"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Main image container */}
      <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-6 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`${projectTitle} - Image ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            quality={95}
            priority
          />
        </div>
      </div>

      {/* Image counter and title */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <h3 className="text-white text-lg font-light tracking-[0.1em] mb-2">
          {projectTitle}
        </h3>
        {images.length > 1 && (
          <div className="text-white/70 text-sm tracking-wide">
            {currentIndex + 1} of {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail navigation for multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto px-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onGoToIndex(index)}
              className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex 
                  ? 'border-coastal-gold' 
                  : 'border-white/30 hover:border-white/60'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Backdrop to close on click */}
      <div 
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />
    </div>
  );
}
