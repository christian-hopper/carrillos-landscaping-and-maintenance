// src/data/business.ts

export type IconName =
  | "Phone"
  | "Mail"
  | "MapPin"
  | "Clock"
  | "Star"
  | "ShieldCheck"
  | "Leaf"
  | "Shovel"
  | "Trees"
  | "Scissors"
  | "FileText"
  | "DraftingCompass"
  | "ThumbsUp"
  | "CheckCircle2"
  | "Facebook"
  | "Instagram"
  | "Twitter";

export interface NavItem {
  name: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  iconName: IconName;
  ctaLabel?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  iconName: IconName;
}

export interface TestimonialItem {
  name: string;
  location: string;
  text: string;
  stars: number;
}

export interface GalleryItem {
  image: string;
  alt: string;
  label?: string;
}

export interface BusinessData {
  theme: {
    colors: {
      primary: string;
      primaryDark: string;
      accent: string;
      bg: string;
      text: string;
      darkBg: string;
      white: string;
      muted: string;
      border: string;
    };
  };

  business: {
    name: string;
    shortName: string;
    logoInitials: string;
    phoneRaw: string;
    phoneFormatted: string;
    email: string;
    addressLine1: string;
    cityStateZip: string;
    city: string;
    serviceAreaLabel: string;
    quoteLink: string;
    copyrightName: string;
    hours?: string;
  };

  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    yelp?: string;
    google?: string;
  };

  navigation: {
    navLinks: NavItem[];
    navCtaText: string;
    mobileNavCtaText: string;
  };

  hero: {
    headline: string;
    subheadline: string;
    backgroundImage: string;
    backgroundImageAlt: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    quoteCardTitle: string;
    quoteCardSubtitle: string;
    quoteButtonText: string;
    quoteServicePlaceholder: string;
    quoteServices: { label: string; value: string }[];
    trustBadges: {
      label: string;
      iconName: IconName;
    }[];
  };

  services: {
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };

  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    checklist: string[];
    image: string;
    imageAlt: string;
    stats: {
      value: string;
      label: string;
    }[];
    ctaText: string;
    phoneLabel: string;
  };

  gallery: {
    heading: string;
    subheading: string;
    ctaText: string;
    before: GalleryItem;
    after: GalleryItem;
  };

  process: {
    heading: string;
    subheading: string;
    steps: ProcessStep[];
  };

  testimonials: {
    heading: string;
    subheading: string;
    items: TestimonialItem[];
  };

  cta: {
    headline: string;
    subheadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    urgencyText: string;
  };

  footer: {
    summary: string;
    quickLinks: NavItem[];
    serviceLinks: { name: string; href: string }[];
    legalLinks: { name: string; href: string }[];
  };
}

export const businessData: BusinessData = {
  theme: {
    colors: {
      primary: "#1F3D2B",
      primaryDark: "#162d1f",
      accent: "#C5A880",
      bg: "#F5F5F2",
      text: "#333333",
      darkBg: "#1a3324",
      white: "#FFFFFF",
      muted: "#6B7280",
      border: "#E5E7EB",
    },
  },

  business: {
    name: "Carrillo's Landscape & Maintenance",
    shortName: "Carrillo's",
    logoInitials: "CL",
    phoneRaw: "9513713089",
    phoneFormatted: "(951) 371-3089",
    email: "hello@carrilloslandscape.com",
    addressLine1: "1560 Spencer Blvd",
    cityStateZip: "Norco, CA 92860",
    city: "Norco",
    serviceAreaLabel: "Norco and surrounding areas",
    quoteLink: "#quote",
    copyrightName: "Carrillo's Landscape & Maintenance",
    hours: "Open daily until 9 PM",
  },

  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    yelp: "#",
    google: "#",
  },

  navigation: {
    navLinks: [
      { name: "Services", href: "#services" },
      { name: "About", href: "#about" },
      { name: "Gallery", href: "#gallery" },
      { name: "Reviews", href: "#testimonials" },
    ],
    navCtaText: "Free Quote",
    mobileNavCtaText: "Get a Quote",
  },

  hero: {
    headline: "Reliable Landscaping & Maintenance for a Yard You’re Proud Of",
    subheadline:
      "Professional landscape maintenance in Norco, helping homeowners keep their yards clean, healthy, and well cared for year-round.",
    backgroundImage:
      "https://images.unsplash.com/photo-1773427617774-d9ce7493b3d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGVkJTIweWFyZCUyMGhvbWV8ZW58MXx8fHwxNzc2Mzc3OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    backgroundImageAlt: "Beautiful landscaped yard",
    primaryCtaText: "Get a Free Quote",
    secondaryCtaText: "Call",
    quoteCardTitle: "Request Your Free Quote",
    quoteCardSubtitle:
      "Tell us what your yard needs and we’ll follow up as soon as possible.",
    quoteButtonText: "Get Estimate",
    quoteServicePlaceholder: "Select a Service...",
    quoteServices: [
      { label: "Lawn Care & Maintenance", value: "lawn" },
      { label: "Landscape Maintenance", value: "maintenance" },
      { label: "Yard Cleanup", value: "cleanup" },
      { label: "Tree & Shrub Trimming", value: "trimming" },
      { label: "Other", value: "other" },
    ],
    trustBadges: [
      { label: "Local Norco Service", iconName: "MapPin" },
      { label: "4.0-Star Rated", iconName: "Star" },
      { label: "Free Estimates", iconName: "Clock" },
    ],
  },

  services: {
    heading: "Landscape Services Built Around Your Yard",
    subheading:
      "From regular maintenance to seasonal cleanup, Carrillo’s helps keep outdoor spaces clean, polished, and easy to enjoy.",
    items: [
      {
        title: "Lawn Care & Maintenance",
        description:
          "Consistent lawn care to keep your grass trimmed, clean, and looking sharp throughout the year.",
        image:
          "https://images.unsplash.com/photo-1630871453479-88ad2f2623dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwY2FyZSUyMG1vd2luZyUyMGdyYXNzfGVufDF8fHx8MTc3NjM3Nzk3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        iconName: "Leaf",
        ctaLabel: "Request Info",
      },
      {
        title: "Landscape Maintenance",
        description:
          "Routine maintenance for plants, beds, edges, and outdoor spaces so your property stays presentable.",
        image:
          "https://images.unsplash.com/photo-1764212515460-04fcb75657c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYW5kc2NhcGUlMjBnYXJkZW4lMjBkZXNpZ258ZW58MXx8fHwxNzc2Mzc3OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        iconName: "Trees",
        ctaLabel: "Request Info",
      },
      {
        title: "Yard Cleanups",
        description:
          "Cleanup services for overgrown yards, leaves, weeds, branches, and general outdoor mess.",
        image:
          "https://images.unsplash.com/photo-1764296377273-4299e3f3d6f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGJhY2t5YXJkJTIwZ3Jhc3N8ZW58MXx8fHwxNzc2Mzc3OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        iconName: "Scissors",
        ctaLabel: "Request Info",
      },
      {
        title: "Tree & Shrub Trimming",
        description:
          "Trimming and shaping for shrubs, hedges, and small trees to keep your yard looking maintained.",
        image:
          "https://images.unsplash.com/photo-1761637823407-ef47925c2714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdG9uZSUyMHBhdGlvJTIwd2Fsa3dheSUyMGhhcmRzY2FwaW5nfGVufDF8fHx8MTc3NjM3Nzk3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        iconName: "Shovel",
        ctaLabel: "Request Info",
      },
    ],
  },

  about: {
    eyebrow: "About Us",
    heading: "A Local Landscaping Team Serving Norco Homeowners",
    paragraphs: [
      "Carrillo's Landscape & Maintenance provides dependable landscaping and yard maintenance services for homeowners who want their outdoor spaces to stay clean, healthy, and well cared for.",
      "Whether you need regular lawn care, a cleanup, or general landscape maintenance, our goal is simple: show up, do quality work, and leave your yard looking better than when we arrived.",
    ],
    checklist: [
      "Local Norco Landscaping Service",
      "Reliable Yard Maintenance",
      "Clean, Detailed Work",
      "Friendly Service for Homeowners",
    ],
    image:
      "https://images.unsplash.com/photo-1588680281884-5e694f9e9e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGluZyUyMHRlYW0lMjB3b3JrZXJzfGVufDF8fHx8MTc3NjM3Nzk3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "Landscaping team at work",
    stats: [
      {
        value: "20+",
        label: "Years Serving Local Clients",
      },
    ],
    ctaText: "Work With Us",
    phoneLabel: "Questions? Call us:",
  },

  gallery: {
    heading: "Clean Yards Make a Big Difference",
    subheading:
      "A well-maintained yard improves curb appeal, makes your home feel cared for, and gives you an outdoor space you can actually enjoy.",
    ctaText: "Start Your Yard Cleanup",
    before: {
      image:
        "https://images.unsplash.com/photo-1706033844083-91d7a6fdab12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNzeSUyMGdhcmRlbiUyMHdlZWRzfGVufDF8fHx8MTc3NjM3Nzk4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Overgrown yard before landscaping",
      label: "Before",
    },
    after: {
      image:
        "https://images.unsplash.com/photo-1729647178020-bb0aa58e6072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWF1dGlmdWwlMjBsYXduJTIweWFyZHxlbnwxfHx8fDE3NzYzNzc5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Clean beautiful modern backyard",
      label: "After",
    },
  },

  process: {
    heading: "How It Works",
    subheading:
      "Getting started is simple. Reach out, tell us what your yard needs, and we’ll help you plan the next step.",
    steps: [
      {
        title: "Request a Quote",
        description:
          "Call or send a quote request with the service you need and basic details about your property.",
        iconName: "FileText",
      },
      {
        title: "Review the Yard",
        description:
          "We discuss the job, review what needs to be done, and provide a clear estimate for the work.",
        iconName: "DraftingCompass",
      },
      {
        title: "Enjoy a Cleaner Yard",
        description:
          "Our team handles the maintenance so your outdoor space looks clean, cared for, and ready to enjoy.",
        iconName: "ThumbsUp",
      },
    ],
  },

  testimonials: {
    heading: "What Local Customers Say",
    subheading:
      "Carrillo’s has earned feedback from local customers who value reliable service and clean results.",
    items: [
      {
        name: "James Smallwood",
        location: "Local Customer",
        text: "Excellent service, reliable, and your yard is always left in immaculate condition. I would recommend this company 100%.",
        stars: 5,
      },
      {
        name: "G Carmean",
        location: "Long-Time Customer",
        text: "Great service for 20 years.",
        stars: 5,
      },
      {
        name: "Local Homeowner",
        location: "Norco, CA",
        text: "Dependable landscape maintenance for homeowners who want their yard kept clean and cared for.",
        stars: 4,
      },
    ],
  },

  cta: {
    headline: "Ready to Get Your Yard Looking Better?",
    subheadline:
      "Call Carrillo's Landscape & Maintenance today to request service or get a free estimate for your property.",
    primaryCtaText: "Get a Free Quote",
    secondaryCtaText: "Call",
    urgencyText: "Now serving Norco and nearby areas",
  },

  footer: {
    summary:
      "Reliable landscaping and yard maintenance services for homeowners in Norco and surrounding areas.",
    quickLinks: [
      { name: "Home", href: "#" },
      { name: "Our Services", href: "#services" },
      { name: "About Us", href: "#about" },
      { name: "Gallery", href: "#gallery" },
      { name: "Reviews", href: "#testimonials" },
    ],
    serviceLinks: [
      { name: "Lawn Maintenance", href: "#services" },
      { name: "Landscape Maintenance", href: "#services" },
      { name: "Yard Cleanups", href: "#services" },
      { name: "Tree & Shrub Trimming", href: "#services" },
      { name: "Seasonal Maintenance", href: "#services" },
    ],
    legalLinks: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
};