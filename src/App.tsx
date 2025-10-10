import React from 'react';
import { AppProvider } from './contexts/AppProvider';
import { Header } from './components/ui/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Experience } from './components/Experience/Experience';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <Experience />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;