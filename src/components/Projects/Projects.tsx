import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../contexts/AppContext';
import { useUserData } from '../../hooks/useUserData';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

export const Projects: React.FC = () => {
  const { t } = useApp();
  const { projects } = useUserData();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const getProjectGradient = (project: any) => {
    const gradients = {
      juridico: 'from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900',
      agronegocio: 'from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900',
      saude: 'from-pink-100 to-rose-100 dark:from-pink-900 dark:to-rose-900',
      gestao: 'from-orange-100 to-amber-100 dark:from-orange-900 dark:to-amber-900',
      ecommerce: 'from-cyan-100 to-sky-100 dark:from-cyan-900 dark:to-sky-900',
      portfolio: 'from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900',
      default: 'from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900'
    };
    
    return gradients[project.category as keyof typeof gradients] || gradients.default;
  };

  const selectedProjectData = useMemo(() => {
    return projects.find(project => project.id === selectedProject);
  }, [selectedProject, projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            {t('projects') || 'Projetos em Destaque'}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            {t('projectsDescription') || 'Uma coleção de projetos que desenvolvi e contribuí'}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-secondary-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  {project.imageUrl ? (
                    <>
                      <img 
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${getProjectGradient(project)} flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="text-3xl mb-2">
                          {project.category === 'juridico' && '⚖️'}
                          {project.category === 'agronegocio' && '🌱'}
                          {project.category === 'saude' && '🏥'}
                          {project.category === 'ecommerce' && '🛒'}
                          {project.category === 'portfolio' && '⚡'}
                          {!project.category && '💼'}
                        </div>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400 font-medium">
                          {project.category === 'juridico' && 'Plataforma Jurídica'}
                          {project.category === 'agronegocio' && 'Sistema Agrícola'}
                          {project.category === 'saude' && 'Sistema de Saúde'}
                          {project.category === 'ecommerce' && 'E-commerce'}
                          {project.category === 'portfolio' && 'Portfolio'}
                          {!project.category && 'Projeto'}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : project.status === 'in-progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {project.status === 'completed' ? '✅' : 
                       project.status === 'in-progress' ? '🔄' : '📅'}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 dark:bg-secondary-800/90 rounded-lg hover:bg-white dark:hover:bg-secondary-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 dark:bg-secondary-800/90 rounded-lg hover:bg-white dark:hover:bg-secondary-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-600 text-secondary-700 dark:text-secondary-300 rounded-full text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-secondary-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-800 overflow-hidden">
                {selectedProjectData.imageUrl && (
                  <img 
                    src={selectedProjectData.imageUrl}
                    alt={selectedProjectData.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-secondary-800/90 rounded-lg hover:bg-white dark:hover:bg-secondary-700 transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                      {selectedProjectData.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-secondary-600 dark:text-secondary-400">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProjectData.status === 'completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : selectedProjectData.status === 'in-progress'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {selectedProjectData.status === 'completed' ? '✅' : 
                         selectedProjectData.status === 'in-progress' ? '🔄' : '📅'}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-4 lg:mt-0">
                    {selectedProjectData.demoUrl && (
                      <a
                        href={selectedProjectData.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                      >
                        <FiExternalLink className="mr-2" />
                        {t('see_project')}
                      </a>
                    )}
                    {selectedProjectData.githubUrl && (
                      <a
                        href={selectedProjectData.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-secondary-200 hover:bg-secondary-300 dark:bg-secondary-700 dark:hover:bg-secondary-600 text-secondary-800 dark:text-secondary-200 rounded-lg transition-colors"
                      >
                        <FiGithub className="mr-2" />
                        {t('code')}
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
                  {selectedProjectData.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                    {t('technologies')}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProjectData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};