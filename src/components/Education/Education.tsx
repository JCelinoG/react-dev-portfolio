import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../contexts/AppContext';
import { FiCalendar, FiMapPin, FiAward, FiBook } from 'react-icons/fi';

interface EducationItem {
  id: string;
  degree: string;
  degreePt: string;
  institution: string;
  period: string;
  periodPt: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
  descriptionPt: string;
  location: string;
  icon: string;
  courses?: string[];
}

export const Education: React.FC = () => {
  const { t, language } = useApp();

  const educationData: EducationItem[] = [
    {
      id: '1',
      degree: 'MBA in Software Engineering',
      degreePt: 'MBA em Engenharia de Software',
      institution: 'University of São Paulo (USP/Esala)',
      period: '2024 - 2025',
      periodPt: '2024 - 2025',
      status: 'in-progress',
      description: 'Advanced studies in software architecture, project management, and agile methodologies.',
      descriptionPt: 'Estudos avançados em arquitetura de software, gerenciamento de projetos e metodologias ágeis.',
      location: 'São Paulo, Brazil',
      icon: '🎓',
      courses: ['Software Architecture', 'Agile Methodologies', 'Project Management', 'DevOps']
    },
    {
      id: '2',
      degree: 'Bachelor in Computer Science',
      degreePt: 'Bacharelado em Ciência da Computação',
      institution: 'Federal University of Tocantins (UFT)',
      period: '2018 - 2022',
      periodPt: '2018 - 2022',
      status: 'completed',
      description: 'Comprehensive computer science education with focus on software development and algorithms.',
      descriptionPt: 'Formação abrangente em ciência da computação com foco em desenvolvimento de software e algoritmos.',
      location: 'Tocantins, Brazil',
      icon: '💻',
      courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering']
    },
    {
      id: '3',
      degree: 'Technical Course in Computer Networks and Programming',
      degreePt: 'Curso Técnico em Redes de Computadores e Programação',
      institution: 'Military Police School of Tocantins',
      period: '2013 - 2015',
      periodPt: '2013 - 2015',
      status: 'completed',
      description: 'Technical education in computer networks, programming fundamentals, and IT infrastructure.',
      descriptionPt: 'Formação técnica em redes de computadores, fundamentos de programação e infraestrutura de TI.',
      location: 'Tocantins, Brazil',
      icon: '🔧',
      courses: ['Networking', 'Programming Logic', 'Hardware', 'Operating Systems']
    }
  ];

  const getStatusBadge = (status: EducationItem['status']) => {
    const statusConfig = {
      completed: { label: '✅', labelPt: '✅', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
      'in-progress': { label: '🔄', labelPt: '🔄', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
      planned: { label: '📅', labelPt: '📅', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' }
    };
    
    const config = statusConfig[status];
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {language === 'pt' ? config.labelPt : config.label}
      </span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="education" className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            {t('education') || 'Education & Qualifications'}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            {t('educationDescription') || 'My academic journey and continuous learning path'}
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600 transform -translate-x-1/2" />

          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-800 transform -translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-secondary-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 dark:border-secondary-600"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white text-xl">
                        {education.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                          {language === 'pt' ? education.degreePt : education.degree}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {education.institution}
                        </p>
                      </div>
                    </div>
                    {getStatusBadge(education.status)}
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-secondary-600 dark:text-secondary-400">
                      <FiCalendar className="mr-2" size={16} />
                      <span className="text-sm">
                        {language === 'pt' ? education.periodPt : education.period}
                      </span>
                    </div>
                    <div className="flex items-center text-secondary-600 dark:text-secondary-400">
                      <FiMapPin className="mr-2" size={16} />
                      <span className="text-sm">{education.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                    {language === 'pt' ? education.descriptionPt : education.description}
                  </p>

                  {/* Courses */}
                  {education.courses && (
                    <div>
                      <div className="flex items-center text-secondary-700 dark:text-secondary-300 mb-2">
                        <FiBook className="mr-2" size={14} />
                        <span className="text-sm font-medium">Key Courses</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {education.courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16"
        >
          <div className="bg-white dark:bg-secondary-700 rounded-2xl p-8 shadow-lg border border-secondary-100 dark:border-secondary-600">
            <div className="flex items-center space-x-3 mb-6">
              <FiAward className="text-primary-600" size={24} />
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                {t('languages') || 'Languages'}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { language: 'Portuguese', level: 'Native', levelPt: 'Nativo', flag: '🇧🇷' },
                { language: 'English', level: 'Proficient (B2)', levelPt: 'Proficiente (B2)', flag: '🇺🇸' },
                { language: 'Spanish', level: 'Advanced (C1)', levelPt: 'Avançado (C1)', flag: '🇪🇸' }
              ].map((lang, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{lang.flag}</div>
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-1">
                    {lang.language}
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                    {language === 'pt' ? lang.levelPt : lang.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};