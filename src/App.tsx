import React from 'react';
import { AppProvider } from './contexts/AppProvider';
import { Header } from './components/ui/Header/Header';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;