import { 
  Cpu, 
  Globe, 
  Zap, 
  Users, 
  Leaf, 
  ShieldCheck, 
  Twitter, 
  Linkedin, 
  Instagram 
} from 'lucide-react';
import { NavItem, Feature, Startup, Testimonial, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Visión', href: '#vision' },
  { label: 'Ecosistema', href: '#ecosistema' },
  { label: 'Startups', href: '#startups' },
  { label: 'Contacto', href: '#contacto' },
];

export const FEATURES: Feature[] = [
  {
    title: 'Infraestructura Web3',
    description: 'Nodos de alta velocidad y laboratorios equipados para desarrollo blockchain y contratos inteligentes.',
    icon: Cpu,
  },
  {
    title: 'Networking Global',
    description: 'Conexión directa con aceleradoras de Berlín, Silicon Valley y Tel Aviv.',
    icon: Globe,
  },
  {
    title: 'Innovación Sostenible',
    description: 'Espacios alimentados por energía renovable, integrando tecnología y respeto por el Caribe.',
    icon: Leaf,
  },
  {
    title: 'Talento On-Demand',
    description: 'Acceso a una red de desarrolladores, diseñadores y expertos en producto de primer nivel.',
    icon: Users,
  },
  {
    title: 'Seguridad Empresarial',
    description: 'Marco legal y digital seguro para la operación de empresas fintech y tech.',
    icon: ShieldCheck,
  },
  {
    title: 'Velocidad de Escala',
    description: 'Programas de soft-landing para startups que buscan expandirse en LATAM.',
    icon: Zap,
  },
];

export const STARTUPS: Startup[] = [
  {
    name: "CaribeDAO",
    description: "Gobernanza descentralizada para proyectos de conservación marina.",
    logoInitial: "C",
    category: "Web3 / ESG"
  },
  {
    name: "FinTech Cartagena",
    description: "Pasarela de pagos híbrida fiat-crypto para turismo.",
    logoInitial: "F",
    category: "FinTech"
  },
  {
    name: "LogisTech",
    description: "Optimización portuaria mediante IA y sensores IoT.",
    logoInitial: "L",
    category: "Logistics"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "El ecosistema perfecto para quienes construimos el futuro de internet. La vibra de Cartagena inspira creatividad.",
    author: "Elena M.",
    role: "CTO",
    company: "BlockLabs",
    avatarUrl: "https://picsum.photos/id/1011/100/100"
  },
  {
    quote: "Encontrar talento Web3 es difícil, pero aquí la comunidad es vibrante y colaborativa.",
    author: "Carlos R.",
    role: "Founder",
    company: "Nautica Digital",
    avatarUrl: "https://picsum.photos/id/1025/100/100"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "Twitter", url: "#", icon: Twitter },
  { platform: "LinkedIn", url: "#", icon: Linkedin },
  { platform: "Instagram", url: "#", icon: Instagram },
];