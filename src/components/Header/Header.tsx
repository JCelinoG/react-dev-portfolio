import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../contexts/AppContext';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useApp();

  const navItems = ['about', 'experience', 'projects', 'contact'];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
    <div className="w-10 h-8 bg-gradient-to-r from-primary-600 to-primary-400 rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-sm">DEV</span>
</div>
<span className="text-xl font-bold text-secondary-900">João Celino</span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(item)}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Language Toggle & Social */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex bg-secondary-100 rounded-lg p-1">
              {(['pt', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                    language === lang
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-secondary-600 hover:text-secondary-900'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              <motion.a
                href="https://github.com/JCelinoG"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-secondary-600 hover:text-secondary-900 transition-colors"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/joao-celino-gualberto/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-secondary-600 hover:text-secondary-900 transition-colors"
              >
                <FiLinkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};