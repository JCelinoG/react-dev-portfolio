import { usePortfolio } from '../contexts/PortfolioContext';
import { useApp } from '../contexts/AppContext';

export const useUserData = () => {
  const { t, language } = useApp();
  const { projects, experiences, skills, featuredProjects, getProjectsByCategory, getSkillsByCategory } = usePortfolio();

  // Helper to get translated text based on language
  const getTranslatedText = (en: string, pt: string) => 
    language === 'en' ? en : pt;

  // Projects
  const translatedProjects = projects.map(project => ({
    ...project,
    title: getTranslatedText(project.title, project.title),
    description: getTranslatedText(project.description, project.descriptionPt)
  }));

  // XP's translatedd
  const translatedExperiences = experiences.map(exp => ({
    ...exp,
    position: getTranslatedText(exp.position, exp.positionPt),
    period: getTranslatedText(exp.period, exp.periodPt),
    description: getTranslatedText(exp.description, exp.descriptionPt)
  }));

  return {
    projects: translatedProjects,
    experiences: translatedExperiences,
    skills,
    featuredProjects: translatedProjects.filter(p => p.featured),
    getProjectsByCategory: (category: any) => 
      translatedProjects.filter(p => p.category === category),
    getSkillsByCategory
  };
};