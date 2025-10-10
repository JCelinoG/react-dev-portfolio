export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionPt: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
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
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  level: number;
}