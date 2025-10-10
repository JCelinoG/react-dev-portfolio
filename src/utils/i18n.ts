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