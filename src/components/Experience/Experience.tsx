import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../contexts/AppContext';
import { useUserData } from '../../hooks/useUserData';
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

export const Experience: React.FC = () => {
  const { t, language } = useApp();
  const { experiences } = useUserData();

  type WorkModeKey = 'remote' | 'on-site' | 'hybrid';

  const translateWorkMode = (workMode: string) => {
    return t(workMode as WorkModeKey) || workMode;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 }, 
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4 
      }
    }
  };

  return (
    
    <section id="experience" className="section-padding bg-white dark:bg-secondary-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            {t('experience') || 'Professional Experience'}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            {t('experienceDescription') || 'My journey through software development and education'}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600 transform -translate-x-1/2" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-900 transform -translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-secondary-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 dark:border-secondary-700"
                >
                  {/* Current job badge */}
                  {experience.current && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mb-3">
                      🔥 {t('currentPosition') || 'Current Position'}
                    </span>
                  )}

                  {/* Company and position */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                        {language === 'pt' ? experience.positionPt : experience.position}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  {/* Period and Location */}
                  <div className="flex items-center space-x-4 text-secondary-500 dark:text-secondary-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <FiCalendar size={14} />
                      <span className="text-sm">
                        {language === 'pt' ? experience.periodPt : experience.period}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiMapPin size={14} />
                      <span className="text-sm">
                        {translateWorkMode(experience.workMode)}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                    {language === 'pt' ? experience.descriptionPt : experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};