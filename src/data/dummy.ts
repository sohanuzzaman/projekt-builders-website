import { HeroSection, ServiceHighlight, CoreValue, PersonProfile, ServicePhase, ContactDetails } from '@/types';

export const heroData: HeroSection = {
  headline: "Spaces Built with Purpose. Designed for Real Life.",
  subheadline: "Expert architectural project management that brings your vision to life with integrity, sustainability, and exceptional results.",
  backgroundImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  primaryCTA: {
    text: "Start Your Project",
    url: "/contact",
    type: "internal",
    variant: "primary"
  },
  secondaryCTA: {
    text: "Book a Call",
    url: "/contact",
    type: "internal",
    variant: "secondary"
  }
};

// Featured project images for visual appeal
export const featuredImages = [
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Modern sustainable home exterior",
    category: "Residential"
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Contemporary interior living space",
    category: "Interior Design"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sustainable building materials",
    category: "Sustainable Build"
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Architectural detail and craftsmanship",
    category: "Craftsmanship"
  }
];

export const servicesData: ServiceHighlight[] = [
  {
    title: "Client-side Project Management",
    description: "Comprehensive oversight from concept to completion, ensuring your project stays on track, on budget, and aligned with your vision.",
    icon: "clipboard-list"
  },
  {
    title: "Design Integrity & Collaboration",
    description: "Seamless coordination between architects, designers, and contractors to maintain design intent throughout the build process.",
    icon: "users"
  },
  {
    title: "Sustainable Building Advocacy",
    description: "Championing environmentally responsible practices and materials that create healthier spaces for you and the planet.",
    icon: "leaf"
  }
];

export const coreValuesData: CoreValue[] = [
  {
    title: "Functionality & Liveability",
    description: "Every space we help create is designed to enhance daily life, prioritizing comfort, efficiency, and practical beauty.",
    icon: "home",
    order: 1
  },
  {
    title: "Sustainability",
    description: "We advocate for environmentally responsible building practices that reduce impact and create healthier living environments.",
    icon: "recycle",
    order: 2
  },
  {
    title: "Public Contribution",
    description: "Our projects consider their broader impact on communities, contributing positively to the built environment around us.",
    icon: "building",
    order: 3
  },
  {
    title: "Aesthetics & Innovation",
    description: "Beautiful design meets cutting-edge solutions, creating spaces that inspire and stand the test of time.",
    icon: "sparkles",
    order: 4
  },
  {
    title: "Collaboration & Integrity",
    description: "Transparent communication and ethical practices form the foundation of every project relationship.",
    icon: "handshake",
    order: 5
  }
];

export const georginaProfile: PersonProfile = {
  name: "Georgina Louise",
  title: "Principal & Project Manager",
  bio: "With over 15 years of experience in architectural project management, Georgina brings a unique blend of technical expertise and creative vision to every project. Her passion for sustainable design and client advocacy has shaped hundreds of successful builds across residential and commercial sectors.",
  portrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  qualifications: [
    "Master's in Project Management",
    "Bachelor of Architecture",
    "Certified Project Management Professional (PMP)",
    "LEED Accredited Professional"
  ],
  experience: "15+ years in architectural project management"
};

export const servicePhases: ServicePhase[] = [
  {
    id: "initiation",
    title: "Project Initiation & Definition",
    description: "Establishing clear project goals, scope, and success criteria from the very beginning.",
    responsibilities: [
      "Stakeholder identification and engagement",
      "Project charter development",
      "Initial feasibility assessment",
      "Budget framework establishment",
      "Timeline development"
    ],
    icon: "play-circle",
    order: 1
  },
  {
    id: "concept",
    title: "Concept Design & Planning",
    description: "Translating your vision into actionable design concepts and comprehensive planning.",
    responsibilities: [
      "Design brief development",
      "Concept design review and approval",
      "Planning permit coordination",
      "Consultant team assembly",
      "Design development oversight"
    ],
    icon: "lightbulb",
    order: 2
  },
  {
    id: "development",
    title: "Design Development",
    description: "Refining designs and ensuring all technical requirements are met before construction.",
    responsibilities: [
      "Detailed design coordination",
      "Technical specification review",
      "Building permit applications",
      "Design integrity maintenance",
      "Value engineering assessment"
    ],
    icon: "drafting-compass",
    order: 3
  },
  {
    id: "procurement",
    title: "Procurement Strategy",
    description: "Strategic sourcing and procurement management to optimize quality and value.",
    responsibilities: [
      "Procurement strategy development",
      "Supplier evaluation and selection",
      "Contract negotiation support",
      "Quality assurance protocols",
      "Cost optimization analysis"
    ],
    icon: "shopping-cart",
    order: 4
  },
  {
    id: "tendering",
    title: "Contractor Tendering & Engagement",
    description: "Managing the tender process to select the right construction team for your project.",
    responsibilities: [
      "Tender documentation preparation",
      "Contractor pre-qualification",
      "Tender evaluation and analysis",
      "Contract negotiation",
      "Construction team onboarding"
    ],
    icon: "file-text",
    order: 5
  },
  {
    id: "construction",
    title: "Construction Phase Management",
    description: "Active oversight during construction to ensure quality, timeline, and budget adherence.",
    responsibilities: [
      "Regular site inspections",
      "Progress monitoring and reporting",
      "Quality control management",
      "Change order evaluation",
      "Stakeholder communication"
    ],
    icon: "hard-hat",
    order: 6
  },
  {
    id: "commissioning",
    title: "Commissioning & Practical Completion",
    description: "Ensuring all systems function correctly and the project meets all requirements.",
    responsibilities: [
      "Systems testing and commissioning",
      "Defect identification and resolution",
      "Practical completion certification",
      "Final inspections coordination",
      "Warranty documentation"
    ],
    icon: "check-circle",
    order: 7
  },
  {
    id: "handover",
    title: "Handover & Close-Out",
    description: "Smooth transition to occupancy with comprehensive documentation and support.",
    responsibilities: [
      "Final handover coordination",
      "Documentation compilation",
      "Maintenance schedule setup",
      "Post-occupancy support",
      "Project evaluation and lessons learned"
    ],
    icon: "key",
    order: 8
  }
];

export const contactDetails: ContactDetails = {
  email: "hello@projektbuilders.com.au",
  whatsapp: "+61 0499 080 405"
};

export const studioPhilosophy = `At the heart of our practice lies a deep commitment to creating spaces that truly serve the people who inhabit them. We believe that exceptional architecture emerges from the intersection of thoughtful design, sustainable practices, and genuine collaboration.

Our approach goes beyond traditional project management. We act as your advocate throughout the entire building process, ensuring that your vision remains intact while navigating the complexities of modern construction. Every decision we make is guided by our core principles of functionality, sustainability, and aesthetic excellence.

We understand that building or renovating is one of life's most significant investments, both financially and emotionally. That's why we're committed to transparency, integrity, and clear communication at every stage of your project.`;