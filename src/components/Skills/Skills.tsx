import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../contexts/AppContext';
import { useUserData } from '../../hooks/useUserData';

// Icon mapping for skills
const skillIcons: { [key: string]: string } = {
  'React': '⚛️',
  'TypeScript': '🔷',
  'Angular': '🅰️',
  'Next.js': '▲',
  'Python': '🐍',
  'Node.js': '📦',
  'PostgreSQL': '🐘',
  'Git': '📚',
  'Docker': '🐳',
  'Figma': '🎨',
  'Scrum': '🔄',
  'Teaching': '👨‍🏫',
  'JavaScript': '💛',
  'Tailwind CSS': '💨',
  'React Native': '📱',
  'Spring Framework': '🌱',
  'Google Cloud': '☁️',
  'Kotlin': '🟪',
  'Java':'♨️',
  'PHP': '🐘',
  'Symfony': '🎻',
  'MySQL': '🗃️',
  'Arduino': '🔌'
};

export const Skills: React.FC = () => {
  const { t } = useApp();
  const { skills } = useUserData();

  // Filtrar apenas skills técnicas (remover soft skills)
  const technicalSkills = skills.filter(skill => 
    ['frontend', 'backend', 'tools', 'mobile', 'design'].includes(skill.category)
  );

  // Agrupar skills por categoria
  const skillsByCategory = {
    frontend: technicalSkills.filter(skill => skill.category === 'frontend'),
    backend: technicalSkills.filter(skill => skill.category === 'backend'),
    tools: technicalSkills.filter(skill => skill.category === 'tools'),
    mobile: technicalSkills.filter(skill => skill.category === 'mobile'),
    design: technicalSkills.filter(skill => skill.category === 'design')
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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
    <section id="skills" className="section-padding bg-white dark:bg-secondary-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            {t('skills') || 'Tech Stack'}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            {t('skillsDescription') || 'Technologies I work with regularly'}
          </p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {technicalSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg hover:shadow-md transition-all duration-200 border border-primary-200 dark:border-primary-800"
              >
                <span className="text-lg">{skillIcons[skill.name] || '💼'}</span>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};