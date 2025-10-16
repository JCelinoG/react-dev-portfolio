import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../contexts/AppContext';
import { useUserData } from '../../hooks/useUserData';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

export const Projects: React.FC = () => {
  const { t } = useApp();
  const { projects } = useUserData();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

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
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-800 overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : project.status === 'in-progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {project.status === 'completed' ? '✅ Concluído' : 
                       project.status === 'in-progress' ? '🔄 Em Desenvolvimento' : '📅 Planejado'}
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
              {/* Modal Header */}
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-800">
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
                        {selectedProjectData.status === 'completed' ? 'Concluído' : 
                         selectedProjectData.status === 'in-progress' ? 'Em Desenvolvimento' : 'Planejado'}
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
                        Ver Projeto
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
                        Código
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
                  {selectedProjectData.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                    Tecnologias Utilizadas
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