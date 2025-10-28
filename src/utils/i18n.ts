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
   followme: {
    pt: 'Siga-me',
    en: 'Follow me'
  },
hero: {
  pt: 'Engenheiro de Software & Instrutor de Programação',
  en: 'Software Engineer & Programming Instructor'
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
    pt: 'Minha jornada através do Desenvolvimento de Software',
    en: 'My journey through Software Development'
  },
  currentPosition: {
    pt: 'Posição atual',
    en: 'Current position'
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
  pt: 'Habilidades técnicas',
  en: 'Tech Stack'
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
contact2: {
  pt: 'Vamos Trabalhar Juntos',
  en: "Let's Work Together"
},
contactDescription: {
  pt: 'Pronto para dar vida às suas ideias? Vamos discutir seu projeto!',
  en: "Ready to bring your ideas to life? Let's discuss your project!"
},
welcome:{
  pt: "bem-vindo(a)",
  en: "welcome"
},
shortBio:{
   pt: "Engenheiro de Software com 5+ anos de experiência criando soluções web robustas e de alta performance. Especializado em React, Angular, TypeScript e Java.",
  en: "Software Engineer with 5+ years of experience building robust and high-performance web solutions. Specialized in React, Angular, TypeScript and Java."
},
years_exp: {
  pt: "Anos de Experiência",
  en: "Years of Experience"
},
modern_tech: {
  pt: "Tecnologias Modernas",
  en: "Modern Technologies"
},
commitment: {
  pt: "Compromisso",
  en: "Commitment" 
},
 workMode: {
    pt: 'Modalidade',
    en: 'Work Mode'
  },
  remote: {
    pt: 'Remoto',
    en: 'Remote'
  },
  'on-site': {
    pt: 'Presencial', 
    en: 'On-site'
  },
  hybrid: {
    pt: 'Híbrido',
    en: 'Hybrid'
  },
  'fullname':{
    pt: 'Nome completo',
    en: 'Full Name'
  },
  'your_fullname':{
    pt: 'Seu nome completo',
    en: 'Your full name'
  },
  'email_adress':{
    pt: 'Seu e-mail',
    en: 'Email Address'
  },
  'your_email':{
    pt: 'seu.email@exemple.com',
    en: 'your.email@example.com'
  },
  'subject':{
    pt:'Assunto',
    en:'Subject'
  },
   'message':{
    pt:'Mensagem',
    en:'Message'
  },
  'about_project':{
    pt:'Me fale sobre seu projeto...',
    en:'Tell me about your project...'
  },
  'whats_about':{
    pt:'Do que se trata?',
    en: 'What\'s this about?'
  },
   'sending':{
    pt:'Enviando...',
    en: 'Sending...'
  },
   'send_message':{
    pt:'Enviar Mensagem',
    en: 'Send Message'
  },
   'location':{
    pt:'Localização',
    en: 'Location'
  },
  'phone':{
    pt:'Telefone',
    en: 'Phone'
  },
    'made':{
    pt:'Feito com',
    en: 'Made with'
  },
    'and':{
    pt:'e',
    en: 'and'
  },
    'by':{
    pt:'por',
    en: 'by'
  },
  'footer_phrase': {
    pt: 'Desenvolvedor de software e instrutor apaixonado por criar experiências digitais incríveis',
    en: 'Software Developer & Instructor passionate about creating amazing digital experiences'
  },
  'key_courses': {
  pt: 'Principais áreas',
  en: 'Key Courses'
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