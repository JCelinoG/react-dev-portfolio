import React from 'react';
import { AppProvider as I18nAppProvider } from './AppContext';
import { ThemeProvider } from './ThemeContext';
import { PortfolioProvider } from './PortfolioContext';
import { NavigationProvider } from './NavigationContext';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <I18nAppProvider>
      <ThemeProvider>
        <NavigationProvider>
          <PortfolioProvider>
            {children}
          </PortfolioProvider>
        </NavigationProvider>
      </ThemeProvider>
    </I18nAppProvider>
  );
};