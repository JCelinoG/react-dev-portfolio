export type Language = 'pt' | 'en';

export interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export const translations: Translations = {
  nav: {
    pt: 'Navegação',
    en: 'Navigation'
  },
  about: {
    pt: 'Sobre',
    en: 'About'
  },
  experience: {
    pt: 'Experiência',
    en: 'Experience'
  },
  projects: {
    pt: 'Projetos',
    en: 'Projects'
  },
  contact: {
    pt: 'Contato',
    en: 'Contact'
  },
  hero: {
    pt: 'Desenvolvedor Full-Stack & Instrutor',
    en: 'Full-Stack Developer & Instructor'
  },
  viewProjects: {
    pt: 'Ver Projetos',
    en: 'View Projects'
  },
  downloadCV: {
    pt: 'Baixar CV',
    en: 'Download CV'
  },
   experienceDescription: {
    pt: 'Minha jornada através do desenvolvimento de software e educação',
    en: 'My journey through software development and education'
  },
  currentPosition: {
    pt: 'Posição Atual',
    en: 'Current Position'
  },
  viewDetails: {
    pt: 'Ver Detalhes',
    en: 'View Details'
  },
  projectsDescription: {
  pt: 'Uma coleção de projetos que construí e contribuí',
  en: 'A collection of projects I have built and contributed to'
},
allProjects: {
  pt: 'Todos os Projetos',
  en: 'All Projects'
},
skills: {
  pt: 'Habilidades',
  en: 'Skills'
},
skillsDescription: {
  pt: 'Tecnologias e ferramentas que uso para dar vida às ideias',
  en: 'Technologies and tools I use to bring ideas to life'
},
techStack: {
  pt: 'Tech Stack',
  en: 'Tech Stack'
},
education: {
  pt: 'Formação',
  en: 'Education'
},
educationDescription: {
  pt: 'Minha jornada acadêmica e caminho de aprendizado contínuo',
  en: 'My academic journey and continuous learning path'
},
languages: {
  pt: 'Idiomas',
  en: 'Languages'
},
contact: {
  pt: 'Vamos Trabalhar Juntos',
  en: "Let's Work Together"
},
contactDescription: {
  pt: 'Pronto para dar vida às suas ideias? Vamos discutir seu projeto!',
  en: "Ready to bring your ideas to life? Let's discuss your project!"
}
};

class I18n {
  private currentLang: Language = 'pt';

  setLanguage(lang: Language): void {
    this.currentLang = lang;
    localStorage.setItem('preferred-language', lang);
  }

  getLanguage(): Language {
    return this.currentLang;
  }

  t(key: string): string {
    return translations[key]?.[this.currentLang] || key;
  }

  initialize(): void {
    const saved = localStorage.getItem('preferred-language') as Language;
    if (saved && ['pt', 'en'].includes(saved)) {
      this.currentLang = saved;
    }
  }
}

export const i18n = new I18n();