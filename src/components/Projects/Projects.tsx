import React from 'react';
import { ProjectsPage } from './ProjectsPage';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGrid, FiLayers } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useApp } from '../../contexts/AppContext';
import { useUserData } from '../../hooks/useUserData';

export const Projects: React.FC = () => {
  const { t, language } = useApp();
  const { projects } = useUserData();

  const landingPageCount = projects.filter(p => p.category === 'landing-page').length;

  return (
    <>
      {/* Seção Principal - Projetos sem Landing Pages */}
      <ProjectsPage category="all" />

      {/* Banner para Landing Pages */}
      <section className="py-12 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-white dark:bg-secondary-800 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center text-2xl">
                🖌️
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                  {language === 'pt' ? 'Landing Pages' : 'Landing Pages'}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {language === 'pt' 
                    ? `${landingPageCount} landing pages profissionais desenvolvidas para clientes`
                    : `${landingPageCount} professional landing pages developed for clients`}
                </p>
              </div>
            </div>

            <Link
              to="/landing-pages"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all duration-200 group"
            >
              <span>{language === 'pt' ? 'Ver todas' : 'View all'}</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};