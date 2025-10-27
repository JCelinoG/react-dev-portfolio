export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionPt: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
  category: 'juridico' | 'agronegocio' | 'saude' | 'gestao' | 'ecommerce' | 'portfolio';
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  positionPt: string;
  period: string;
  periodPt: string;
  description: string;
  descriptionPt: string;
  technologies: string[];
  current?: boolean;
  type: 'full-time' | 'part-time' | 'freelance' | 'internship' | 'education';
  workMode: 'remote' | 'on-site' | 'hybrid';
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools' | 'soft' | 'design';
  level?: number;
  icon?: string;
  years?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AppState {
  language: Language;
  theme: 'light' | 'dark';
  activeSection: string;
  isLoading: boolean;
}

export type Language = 'pt' | 'en';