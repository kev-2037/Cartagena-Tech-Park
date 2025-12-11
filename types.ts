import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Startup {
  name: string;
  description: string;
  logoInitial: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}