export interface SiteConfig {
  brand: string
  tagline: string
  subtitle: string
  launchDate: string
  inventory: number
  fullPrice: number
  launchPrice: number
  naverUrl: string
  tossUrl: string
  banners: {
    reservationBanner: boolean
    tiersBanner: boolean
  }
  badges: string[]
  hero: {
    headline: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string[]
    videoUrl: string
    fallbackImage: string
  }
  story: {
    title: string
    philosophy: string
    farmers: Farmer[]
    location: {
      name: string
      coordinates: string
      mapImage: string
    }
  }
  durian: {
    title: string
    features: Feature[]
    comparison: Comparison[]
  }
  process: {
    title: string
    steps: ProcessStep[]
  }
  tiers: {
    title: string
    description: string
    notice: string
    items: TierItem[]
  }
  faqCategories: FAQCategory[]
  company: Company
}

export interface Farmer {
  name: string
  role: string
  description: string
  image: string
}

export interface Feature {
  title: string
  description: string
}

export interface Comparison {
  variety: string
  origin: string
  sweetness: string
  aroma: string
  texture: string
  price: string
}

export interface ProcessStep {
  title: string
  description: string
  icon: string
}

export interface TierItem {
  name: string
  weight: string
  description: string
  originalPrice: number
  launchPrice: number
  features: string[]
}

export interface FAQ {
  question: string
  answer: string
  image: string
}

export interface FAQCategory {
  category: string
  icon: string
  questions: FAQ[]
}

export interface Company {
  name: string
  businessNumber: string
  license: string
  address: string
  phone: string
  email: string
  social: {
    instagram: string
    youtube: string
    blog: string
  }
}

export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
} 