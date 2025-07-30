import {
  HeroSection,
  ServicePhase,
  PersonProfile,
  CoreValue,
  ProductCategory,
  RetreatInfo,
} from "@/lib/types";

export const heroContent: HeroSection = {
  headline: "Spaces Built with Purpose. Designed for Real Life.",
  subheadline:
    "Expert project management for architectural projects that prioritize functionality, sustainability, and timeless design.",
  image: {
    src: "/images/home_living_room_2.webp",
    alt: "Wide open minimalist space with beige tones showcasing purposeful design",
    width: 1920,
    height: 1080,
  },
  cta: {
    text: "Start Your Project",
    href: "/contact",
  },
};

export const coreValues: CoreValue[] = [
  {
    id: "functionality",
    title: "Functionality & Liveability",
    description:
      "Every space is designed to enhance daily life, prioritizing practical needs and human comfort.",
    icon: "home",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description:
      "Environmental responsibility guides every decision, from materials to energy efficiency.",
    icon: "leaf",
  },
  {
    id: "public-contribution",
    title: "Public Contribution",
    description:
      "Projects that positively impact communities and contribute to the built environment.",
    icon: "users",
  },
  {
    id: "aesthetics",
    title: "Aesthetics & Innovation",
    description:
      "Timeless design that balances beauty with cutting-edge building practices.",
    icon: "eye",
  },
  {
    id: "collaboration",
    title: "Collaboration & Integrity",
    description:
      "Transparent partnerships built on trust, communication, and shared vision.",
    icon: "handshake",
  },
];

export const servicePhases: ServicePhase[] = [
  {
    id: "initiation",
    title: "Project Initiation/Definition",
    description:
      "Establishing project foundations, scope, and strategic direction.",
    responsibilities: [
      "Project scope definition and feasibility analysis",
      "Stakeholder identification and engagement strategy",
      "Initial budget and timeline development",
      "Risk assessment and mitigation planning",
    ],
  },
  {
    id: "concept",
    title: "Concept Design & Planning",
    description:
      "Translating vision into preliminary design concepts and planning applications.",
    responsibilities: [
      "Design brief development and concept exploration",
      "Planning permit application management",
      "Consultant team coordination",
      "Initial cost estimation and value engineering",
    ],
  },
  {
    id: "development",
    title: "Design Development",
    description: "Refining concepts into detailed, buildable design solutions.",
    responsibilities: [
      "Detailed design coordination across all disciplines",
      "Material selection and specification",
      "Building permit application management",
      "Construction documentation oversight",
    ],
  },
  {
    id: "procurement",
    title: "Procurement Strategy",
    description:
      "Strategic sourcing of materials, products, and construction services.",
    responsibilities: [
      "Procurement strategy development",
      "Supplier evaluation and selection",
      "Contract negotiation support",
      "Quality assurance protocols",
    ],
  },
  {
    id: "tendering",
    title: "Contractor Tendering & Engagement",
    description:
      "Managing the contractor selection process for optimal project outcomes.",
    responsibilities: [
      "Tender documentation preparation",
      "Contractor prequalification and evaluation",
      "Contract negotiation and award",
      "Project handover to construction phase",
    ],
  },
  {
    id: "construction",
    title: "Construction Phase Management",
    description:
      "Ensuring quality delivery throughout the construction process.",
    responsibilities: [
      "Construction progress monitoring",
      "Quality control and compliance management",
      "Variation assessment and approval",
      "Stakeholder communication and reporting",
    ],
  },
  {
    id: "commissioning",
    title: "Commissioning & Practical Completion",
    description: "Final quality assurance and project completion processes.",
    responsibilities: [
      "Systems commissioning and testing",
      "Defects identification and rectification",
      "Practical completion certification",
      "Final inspections and approvals",
    ],
  },
  {
    id: "handover",
    title: "Handover & Close-Out",
    description: "Seamless project delivery and post-completion support.",
    responsibilities: [
      "Documentation handover and training",
      "Warranty period management",
      "Post-occupancy evaluation",
      "Project closure and lessons learned",
    ],
  },
];

export const georgina: PersonProfile = {
  name: "Georgina Louise",
  title: "Principal Project Manager",
  bio: "With over 15 years of experience in architectural project management, Georgina brings a unique blend of technical expertise and design sensibility to every project. Her approach prioritizes sustainable building practices, community impact, and spaces that truly serve their inhabitants.",
  qualifications: [
    "Master's in Project Management",
    "15+ years in architectural project management",
    "Certified in sustainable building practices",
    "Specialist in residential and commercial projects",
  ],
  experience: "15+ years",
  image: {
    src: "/images/georgina-portrait.jpg",
    alt: "Georgina Louise, Principal Project Manager at Projekt Builders",
    width: 400,
    height: 500,
  },
};

export const productCategories: ProductCategory[] = [
  {
    id: "bedding",
    name: "Bedding",
    description: "Organic cotton and linen bedding collections",
    image: {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      alt: "Organic bedding collection",
    },
    comingSoon: true,
  },
  {
    id: "cushions",
    name: "Cushion Covers",
    description: "Handwoven cushion covers in natural fibers",
    image: {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      alt: "Natural fiber cushion covers",
    },
    comingSoon: true,
  },
  {
    id: "wall-hangings",
    name: "Wall Hangings",
    description: "Artisan-crafted wall art and textiles",
    image: {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      alt: "Artisan wall hangings",
    },
    comingSoon: true,
  },
  {
    id: "rugs",
    name: "Rugs",
    description: "Hand-knotted rugs from sustainable materials",
    image: {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      alt: "Sustainable hand-knotted rugs",
    },
    comingSoon: true,
  },
  {
    id: "chairs",
    name: "Chairs",
    description: "Ergonomic seating with timeless design",
    image: {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      alt: "Ergonomic designer chairs",
    },
    comingSoon: true,
  },
  {
    id: "lighting",
    name: "Light Fittings",
    description: "Architectural lighting solutions",
    image: {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      alt: "Architectural light fittings",
    },
    comingSoon: true,
  },
  {
    id: "baskets",
    name: "Baskets",
    description: "Woven storage solutions from natural materials",
    image: {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      alt: "Natural woven baskets",
    },
    comingSoon: true,
  },
  {
    id: "pottery",
    name: "Pottery",
    description: "Handcrafted ceramics for modern living",
    image: {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      alt: "Handcrafted ceramic pottery",
    },
    comingSoon: true,
  },
];

export const retreatInfo: RetreatInfo = {
  title: "Bali Architecture & Design Retreat",
  location: "Pondok Cocoa Learning Retreat, Bali",
  duration: "10 days",
  description:
    "Immerse yourself in sustainable architecture and design practices while experiencing the beauty of Balinese building traditions.",
  included: [
    "Accommodation at Pondok Cocoa Learning Retreat",
    "All meals featuring local, organic ingredients",
    "Airport transfer and local transportation",
    "Guided bamboo architecture tours",
    "Traditional and contemporary interiors tours",
    "Hands-on sustainability workshops",
    "Expert-led design sessions",
    "Cultural experiences and local artisan visits",
  ],
  images: [
    {
      src: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop",
      alt: "Traditional Balinese bamboo architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop",
      alt: "Pondok Cocoa Learning Retreat grounds",
    },
    {
      src: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop",
      alt: "Design workshop session in Bali",
    },
  ],
  cta: {
    text: "Register Interest",
    href: "/contact?subject=retreat",
  },
};
