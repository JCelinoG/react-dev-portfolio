import React from 'react';
import { AppProvider } from './contexts/AppProvider';
import { Header } from './components/ui/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;