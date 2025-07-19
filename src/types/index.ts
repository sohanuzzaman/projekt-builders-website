// Core content types
export interface HeroSection {
  headline: string;
  subheadline?: string;
  backgroundImage: string;
  primaryCTA: CallToAction;
  secondaryCTA: CallToAction;
}

export interface ServiceHighlight {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface PersonProfile {
  name: string;
  title: string;
  bio: string;
  portrait: string;
  qualifications: string[];
  experience: string;
}

export interface ServicePhase {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  icon: string;
  order: number;
}

export interface CallToAction {
  text: string;
  url: string;
  type: "internal" | "external" | "modal";
  variant: "primary" | "secondary" | "outline";
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  source?: string;
}

export interface WaitlistFormData {
  email: string;
  interests: string[];
}

export interface ContactDetails {
  email: string;
  whatsapp: string;
  address?: string;
}

export interface MenuItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}