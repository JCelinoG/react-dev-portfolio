import React from 'react';
import { ProjectsPage } from '../components/Projects/ProjectsPage';
import { useApp } from '../contexts/AppContext';

export const LandingPages: React.FC = () => {
  const { language } = useApp();

  return (
    <ProjectsPage
      category="landing-page"
      title={language === 'pt' ? 'Landing Pages' : 'Landing Pages'}
      description={language === 'pt' 
        ? 'Landing pages profissionais desenvolvidas para empresas e profissionais' 
        : 'Professional landing pages developed for companies and professionals'}
    />
  );
};