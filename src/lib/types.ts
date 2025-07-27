// Core content types
export interface HeroSection {
  headline: string;
  subheadline?: string;
  image: MediaItem;
  cta?: CTA;
}

export interface ServicePhase {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  cta?: CTA;
}

export interface PersonProfile {
  name: string;
  title: string;
  bio: string;
  qualifications: string[];
  image: MediaItem;
  experience: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: MediaItem;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: MediaItem;
  comingSoon: boolean;
}

export interface RetreatInfo {
  title: string;
  location: string;
  duration: string;
  description: string;
  included: string[];
  images: MediaItem[];
  cta: CTA;
}

// Form data models
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface WaitlistFormData {
  name: string;
  email: string;
  interests?: string[];
}

// Media and CTA interfaces
export interface MediaItem {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CTA {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

// Component props utility types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}