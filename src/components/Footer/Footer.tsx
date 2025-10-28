import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../contexts/AppContext';
import { FiHeart, FiCoffee, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export const Footer: React.FC = () => {
  const { t } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 dark:bg-black text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          {/* Main Footer Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">
              João Celino Gualberto
            </h3>
            <p className="text-secondary-300 max-w-md mx-auto mb-6">
              {t('footer_phrase')}
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-6">
              {[
                { icon: FiGithub, href: 'https://github.com/JCelinoG', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/joao-celino-gualberto/', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:joaocg14@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 hover:text-white hover:bg-primary-600 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-6 border-t border-secondary-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-secondary-400">
                <span>{t('made')}</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FiHeart className="text-red-500" size={16} />
                </motion.div>
                <span>{t('and')}</span>
                <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{
                  duration: 0.8,           
                  repeat: Infinity,     
                  repeatType: 'mirror', 
                  ease: 'easeInOut'      
                }}
            >
  <FiCoffee className="text-amber-500" size={16} />
</motion.div>





                <span>{t('by')} João Gualberto</span>
              </div>
              
              <div className="text-secondary-400 text-sm">
                © {currentYear} All rights reserved.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};