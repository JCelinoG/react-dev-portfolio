import React, { createContext, useContext, useMemo } from 'react';
import type { Experience, Project, Skill } from '../types';

interface PortfolioContextType {
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  featuredProjects: Project[];
  getProjectsByCategory: (category: Project['category']) => Project[];
  getSkillsByCategory: (category: Skill['category']) => Skill[];
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'SingixMarket - Sales Management System',
    description: 'System for managing sales, customers, and products with secure authentication and a modern interface.',
    descriptionPt: 'Sistema para gestão de vendas, clientes e produtos com autenticação segura e interface moderna.',
    technologies: [
      'Java',
      'Spring Boot',
      'Angular',
      'TypeScript', 
      'Spring Security',
      'JWT',
      'MySQL',
      'Tailwind CSS',
      'JUnit',
      'Docker'
    ],
    imageUrl: '/assets/img/projects/git.png',
    demoUrl: '', 
    githubUrl: 'https://github.com/JCelinoG/singix-market',
    featured: true,
    category: 'ecommerce',
    status: 'in-progress'
  },
   {
    id: '2',
    title: 'Developer Portfolio',
    description: 'Modern and responsive portfolio developed with React, TypeScript, and Tailwind CSS. Clean design with dark mode, internationalization, and smooth animations.',
    descriptionPt: 'Portfólio moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS. Design limpo com modo escuro, internacionalização e animações fluidas.',
    technologies: [
      'React',
      'TypeScript', 
      'Tailwind CSS',
      'Framer Motion',
      'Vite',
      'React Icons',
      'React Hook Form',
      'Context API',
      'Responsive Design',
      'Dark Mode',
      'Internationalization'
    ],
    imageUrl: '/assets/img/projects/react-portfolio.PNG',
    demoUrl: '', 
    githubUrl: 'https://github.com/JCelinoG/react-dev-portfolio',
    featured: true,
    category: 'portfolio',
    status: 'completed'
  },
   {
  id: '3',
  title: 'Dra. Natalia Beltrami',
  description: 'Maintenance and optimization of professional landing page for gynecologist, implementing performance improvements, SEO, and user experience enhancements.',
  descriptionPt: 'Manutenção e otimização da landing page profissional para ginecologista, implementando melhorias de performance, SEO e experiência do usuário.',
  technologies: ['WordPress', 'JavaScript','Elementor', 'CSS', 'SEO'],
    imageUrl: '/assets/img/projects/natalia.png',
  demoUrl: 'https://dranataliabeltrami.com.br/',
  githubUrl: '', 
  featured: true,
  category: 'saude',
  status: 'completed'
},
  {
    id: '4',
    title: 'Defendy - Plataforma Jurídica',
    description: 'Comprehensive legal platform for finding specialist lawyers.',
    descriptionPt: 'Plataforma jurídica completa para busca de advogados especialistas',
    technologies: ['Next.js', 'TypeScript', 'AntDesign'],
    imageUrl: '/assets/img/projects/defendyLogo.png',
    demoUrl: 'https://defendy.com.br',
    githubUrl: '', 
    featured: true,
    category: 'juridico',
    status: 'completed'
    
  },
  
   {
    id: '6',
    title: 'SMGeo - Plataforma Socioambiental',
    description: 'Geographic Monitoring System for registration, analysis, and socio-environmental monitoring of suppliers in agribusiness.',
    descriptionPt: 'Sistema de Monitoramento Geográfico para cadastro, análise e monitoramento socioambiental de fornecedores no agronegócio.',
    technologies: ['React', 'JavaScript', 'TypeScript', 'Styled Components', 'GIS', 'Google Cloud', 'Leaflet', 'Mapbox'],
    imageUrl: '/assets/img/projects/smgeo.PNG',

    demoUrl: 'https://niceplanet.com.br/smgeo',
    githubUrl: '',
    featured: true,
    category: 'agronegocio',
    status: 'completed'
  },
   {
    id: '7',
    title: 'SMGeo Consulta - Integração Socioambiental',
    description: 'Platform that connects invoices from agro-industries to supplier farms, automating the delivery of socio-environmental information to buyers, retailers, and tanneries.',
    descriptionPt: 'Plataforma que conecta notas fiscais de agroindústrias a fazendas fornecedoras, automatizando a entrega de informações socioambientais para compradores, varejistas e curtumes.',
    technologies: ['React', 'TypeScript', 'Styled Components', 'REST API'],
    imageUrl: '/assets/img/projects/smgeo-consulta.png',
    demoUrl: 'https://niceplanet.com.br/smgeo-consulta',
    githubUrl: '',
    featured: true,
    category: 'agronegocio',
    status: 'completed'
  },
  {
    id: '8',
    title: 'Projuris Empresas',
    description: 'Legal platform for corporate legal management and compliance.',
    descriptionPt: 'Plataforma legal para gestão jurídica empresarial e compliance.',
    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'SCSS'],
    imageUrl: '/assets/img/projects/projuris-logo.png',
    demoUrl: 'https://www.projuris.com.br/empresas/',
    githubUrl: '',
    featured: true,
    category: 'juridico',
    status: 'completed'
  },
  
];

const mockExperiences: Experience[] = [
  {
    id: '1',
    company: 'SENAC',
    position: 'Programming Instructor',
    positionPt: 'Instrutor de Programação',
    period: 'Apr 2025 - Present',
    periodPt: 'Apr 2025 - Atual',
    description: 'Teach IT courses in web, mobile, and desktop development, focusing on practical and modern programming practices. Guide new professionals in software fundamentals and real-world development workflows.',
    descriptionPt: 'Ministro cursos de TI em desenvolvimento web, mobile e desktop, com foco em práticas modernas de programação. Oriento novos profissionais nos fundamentos e fluxos de trabalho reais do desenvolvimento de software.',
    technologies: ['Teaching', 'Mentoring', 'Programming Logic', 'Front-end', 'Back-end', 'Databases'],
    current: true,
    type: 'full-time',
    workMode: 'on-site' 
  },
  {
    id: '2',
    company: 'Freelance',
    position: 'Full-Stack Developer',
    positionPt: 'Desenvolvedor Full-Stack',
    period: 'Jun 2024 - Present',
    periodPt: 'Jun 2024 - Atual',
    description: "I develop responsive business applications with a focus on performance and user experience. I've built legal platforms for finding lawyers and management systems used by stores and businesses to control sales, inventory, and finances — including custom landing pages for companies and professionals.",
    descriptionPt: 'Desenvolvo aplicações responsivas empresariais com foco em performance e experiência do usuário. Criei plataformas jurídicas para busca de advogados e sistemas de gestão usados por comércios e lojas para controle de vendas, estoque e financeiro. Incluindo landing pages personalizadas para empresas e profissionais. ',
    technologies: ['Angular', 'Next.js', 'React', 'TypeScript', 'WordPress', 'Tailwind CSS'],
    current: true,
    type: 'freelance',
    workMode: 'remote' 
  },
  {
    id: '3',
    company: 'Niceplanet Geotecnologia',
    position: 'Frontend Developer',
    positionPt: 'Desenvolvedor Frontend',
    period: 'Jun 2022 - Jun 2024',
    periodPt: 'Jun 2022 - Jun 2024',
    description: 'Developed web applications focused on traceability and socio-environmental compliance for agribusiness. Integrated GIS for mapping and geospatial data visualization. Participated in decision-making for new features and platform improvements. Drove the company’s international expansion by delivering a more intuitive and modern platform, which helped grow operations from 3 to 5 countries, receiving direct positive feedback from clients and ensuring scalability for new markets.',
    descriptionPt: 'Desenvolvi aplicações web focadas em rastreabilidade e conformidade socioambiental para o agronegócio. Integrei GIS para mapeamento e visualização de dados geoespaciais. Participei de tomadas de decisão para novas funcionalidades e melhorias na plataforma. Impulsionei a expansão internacional da empresa ao entregar uma plataforma mais intuitiva e moderna, que contribuiu para o crescimento de 3 para 5 países atendidos, com feedbacks positivos diretos dos clientes e escalabilidade garantida para novos mercados.',
    technologies: ['React', 'JavaScript', 'TypeScript', 'Styled Components', 'GIS', 'Google Cloud'],
    current: false,
    type: 'full-time',
    workMode: 'remote' 

  },
  {
    id: '4',
    company: 'Projuris By Softplan',
    position: 'Frontend Developer',
    positionPt: 'Desenvolvedor Frontend',
    period: 'May 2021 - May 2022',
    periodPt: 'Mai 2021 - Mai 2022',
    description: 'Built and maintained web applications for the legal sector, focusing on case management and document automation. Designed responsive and scalable user interfaces using Angular and TypeScript. Collaborated closely with cross-functional teams to implement features that improved user efficiency. Ensured code quality and reliability through automated testing with Cypress and Jest, and containerized deployments using Docker.',
    descriptionPt: 'Desenvolvi e mantive aplicações web para o setor jurídico, com foco em gestão de processos e automação de documentos. Criei interfaces responsivas e escaláveis utilizando Angular e TypeScript. Colaborei com times multidisciplinares para implementar funcionalidades que aumentaram a eficiência dos usuários. Assegurei a qualidade e confiabilidade do código com testes automatizados usando Cypress e Jest, além de empacotar aplicações com Docker para facilitar o deployment.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Docker', 'Cypress', 'Jest'],
    current: false,
    type: 'full-time',
    workMode: 'remote' 
  },
  {
  id: '5',
  company: 'Federal University of Tocantins',
  position: 'Full-Stack Developer',
  positionPt: 'Desenvolvedor Full-Stack',
  period: 'Oct 2020 - Nov 2021',
  periodPt: 'Out 2020 - Nov 2021',
  description: 'Maintained Python middleware for HTTP communication between physical access gates and web applications. Developed Mifare card readers with Arduino and C++ for access control. Created web applications for educational process management using Django, and Bootstrap. Designed user interfaces in Figma with a focus on UX. Managed MySQL databases using Doctrine.',
  descriptionPt: 'Mantive middleware em Python para comunicação HTTP entre catracas de acesso físico e aplicações web. Desenvolvi leitores de cartão Mifare com Arduino e C++ para controle de acesso. Criei aplicações web para gestão de processos educacionais usando Django e Bootstrap. Modelei interfaces no Figma com foco em experiência do usuário. Gerenciei bancos de dados MySQL com Doctrine.',
  technologies: ['Python', 'Django', 'C++', 'Arduino', 'Bootstrap', 'MySQL', 'Doctrine', 'Git', 'Figma'],
  current: false,
  type: 'internship',
  workMode: 'on-site' 
},
{
  id: '6',
  company: 'Institute of Attention to Cities (IAC)',
  position: 'Software Developer',
  positionPt: 'Desenvolvedor de Software',
  period: 'Feb 2019 - Feb 2020',
  periodPt: 'Fev 2019 - Fev 2020',
  description: 'Developed a web application to manage water resource grants and streamline environmental licensing processes. Built responsive UI components using Angular 8/9 and Bootstrap. Migrated Java code to Kotlin and improved the existing codebase using the Spring Framework. Handled database operations with PostgreSQL.',
  descriptionPt: 'Desenvolvi uma aplicação web para gerenciamento de outorgas de recursos hídricos, otimizando processos de licenciamento ambiental. Construí componentes de UI responsivos com Angular 8/9 e Bootstrap. Migrando código Java para Kotlin aprimorando a base existente com o Spring Framework. Realizei operações com banco de dados PostgreSQL.',
  technologies: ['Angular 8/9', 'Spring Framework', 'Kotlin', 'Bootstrap', 'PostgreSQL'],
  current: false,
  type: 'internship',
  workMode: 'on-site' 
}
];
const mockSkills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 90, years: 4 },
  { name: 'TypeScript', category: 'frontend', level: 85, years: 3 },
  { name: 'Angular', category: 'frontend', level: 80, years: 3 },
  { name: 'Next.js', category: 'frontend', level: 75, years: 2 },
  { name: 'JavaScript', category: 'frontend', level: 88, years: 5 },
  { name: 'Tailwind CSS', category: 'frontend', level: 82, years: 3 },
  
  // Backend
  { name: 'Java', category: 'backend', level: 75, years: 3 },
  { name: 'Python', category: 'backend', level: 80, years: 4 },
  { name: 'Node.js', category: 'backend', level: 70, years: 2 },
  { name: 'PostgreSQL', category: 'backend', level: 75, years: 3 },
  { name: 'Spring Framework', category: 'backend', level: 65, years: 2 },
  
  // Tools & DevOps
  { name: 'Git', category: 'tools', level: 85, years: 5 },
  { name: 'Docker', category: 'tools', level: 70, years: 2 },
  { name: 'Google Cloud', category: 'tools', level: 65, years: 2 },
  { name: 'Scrum', category: 'tools', level: 80, years: 4 },
  
  // Design
  { name: 'Figma', category: 'design', level: 65, years: 2 },
  { name: 'UI/UX Design', category: 'design', level: 70, years: 3 },
  
  // Soft Skills
  { name: 'Teaching', category: 'soft', level: 100 },
  { name: 'Fast Learner', category: 'soft', level: 100 },
  { name: 'Communication', category: 'soft', level: 100},
  { name: 'Problem Solving', category: 'soft', level: 100 }
];

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const projects = mockProjects;
  const experiences = mockExperiences;
  const skills = mockSkills;

  const featuredProjects = useMemo(() => 
    projects.filter(project => project.featured), 
    [projects]
  );

  const getProjectsByCategory = (category: Project['category']) => 
    projects.filter(project => project.category === category);

  const getSkillsByCategory = (category: Skill['category']) => 
    skills.filter(skill => skill.category === category);

  const value: PortfolioContextType = {
    projects,
    experiences,
    skills,
    featuredProjects,
    getProjectsByCategory,
    getSkillsByCategory
  };

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};