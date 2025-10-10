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
  'Django': '🎸',
  'Node.js': '📦',
  'PostgreSQL': '🐘',
  'Git': '📚',
  'Docker': '🐳',
  'Figma': '🎨',
  'Scrum': '🔄',
  'Teaching': '👨‍🏫',
  'JavaScript': '💛',
  'Tailwind CSS': '💨',
  'React Native': '📱'
};

export const Skills: React.FC = () => {
  const { t } = useApp();
  const { skills, getSkillsByCategory } = useUserData();

  const skillCategories = [
    { key: 'frontend' as const, label: 'Frontend', color: 'blue' },
    { key: 'backend' as const, label: 'Backend', color: 'green' },
    { key: 'tools' as const, label: 'Tools & DevOps', color: 'purple' },
    { key: 'soft' as const, label: 'Soft Skills', color: 'orange' },
    { key: 'design' as const, label: 'Design', color: 'pink' }
  ];

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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-cyan-500',
      green: 'from-green-500 to-emerald-500',
      purple: 'from-purple-500 to-indigo-500',
      orange: 'from-orange-500 to-amber-500',
      pink: 'from-pink-500 to-rose-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const SkillBar: React.FC<{ skill: any }> = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{skillIcons[skill.name] || '💼'}</span>
          <span className="font-medium text-secondary-700 dark:text-secondary-300">
            {skill.name}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-secondary-500 dark:text-secondary-400">
          {skill.years && (
            <span>{skill.years} {skill.years === 1 ? 'year' : 'years'}</span>
          )}
          <span>{skill.level}%</span>
        </div>
      </div>
      <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-3 rounded-full bg-gradient-to-r ${getColorClasses(
            skillCategories.find(cat => cat.key === skill.category)?.color || 'blue'
          )}`}
        />
      </div>
    </div>
  );

  const SkillCard: React.FC<{ category: typeof skillCategories[0] }> = ({ category }) => {
    const categorySkills = getSkillsByCategory(category.key);
    
    return (
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-secondary-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 dark:border-secondary-700"
      >
        {/* Category Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getColorClasses(category.color)} flex items-center justify-center`}>
            <span className="text-white font-bold text-lg">
              {categorySkills.length}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
              {category.label}
            </h3>
            <p className="text-secondary-500 dark:text-secondary-400 text-sm">
              {categorySkills.length} skills
            </p>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          {categorySkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </motion.div>
    );
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
            {t('skills') || 'Skills & Technologies'}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            {t('skillsDescription') || 'Technologies and tools I use to bring ideas to life'}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.key} category={category} />
          ))}
        </motion.div>

        {/* Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
              Tech Stack
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Technologies I work with regularly
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills
              .filter(skill => ['frontend', 'backend', 'tools', 'mobile'].includes(skill.category))
              .map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-2 px-4 py-3 bg-secondary-100 dark:bg-secondary-800 rounded-xl hover:shadow-md transition-all duration-200"
                >
                  <span className="text-lg">{skillIcons[skill.name] || '💼'}</span>
                  <span className="font-medium text-secondary-700 dark:text-secondary-300">
                    {skill.name}
                  </span>
                  {skill.years && (
                    <span className="text-xs bg-white dark:bg-secondary-700 text-secondary-500 px-2 py-1 rounded-full">
                      {skill.years}y
                    </span>
                  )}
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};