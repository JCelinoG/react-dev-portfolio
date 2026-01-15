import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../contexts/AppContext';
import { Button } from '../ui/Button';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

export const Hero: React.FC = () => {
  const { t } = useApp();

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

  const getStats = () => [
  { value: '7+', label: t('years_exp') },
  { value: '💻', label: t('modern_tech') },
  { value: '100%', label: t('commitment') }
]

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                👋 {t('welcome')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                João Celino{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                  Gualberto
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-secondary-600 font-medium">
                {t('hero')}
              </h2>
              <p className="text-lg text-secondary-500 leading-relaxed">
                {t('shortBio')}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                href="#projects"
                size="lg"
                className="group"
              >
                {t('viewProjects')}
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/Joao_Celino_Gualberto_Resume.pdf"
                download
              >
                {t('downloadCV')}
                <FiDownload className="ml-2" />
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-8">
             {getStats().map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-sm text-secondary-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Gradient Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl blur-lg opacity-75" />
           {/* Photo Container */}
            <div className="relative bg-white rounded-2xl p-2 shadow-xl">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center overflow-hidden">

                <img 
              src="/assets/img/avatar.png" 
              alt="João Gualberto - Software Engineer"
              className="w-full h-full object-cover rounded-xl"
            />
              </div>
            </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-100/80  dark:bg-yellow-900/40 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-lg">⚡</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 w-10 h-10 bg-green-100/80 dark:bg-green-900/40 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-md">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};