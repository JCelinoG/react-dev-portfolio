import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Language } from '../utils/i18n'; 
import { i18n } from '../utils/i18n';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    i18n.initialize();
    setLanguage(i18n.getLanguage());
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    i18n.setLanguage(lang);
  };

  const value: AppContextType = {
    language,
    setLanguage: handleSetLanguage,
    t: i18n.t.bind(i18n)
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};