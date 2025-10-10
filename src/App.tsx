import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './contexts/AppProvider';
import { Header } from './components/ui/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { SEO } from './components/SEO/SEO';
import { Loading } from './components/Loading/Loading';

// Lazy load main sections for better performance
const Hero = lazy(() => import('./components/Hero/Hero').then(module => ({ default: module.Hero })));
const Experience = lazy(() => import('./components/Experience/Experience').then(module => ({ default: module.Experience })));
const Projects = lazy(() => import('./components/Projects/Projects').then(module => ({ default: module.Projects })));
const Skills = lazy(() => import('./components/Skills/Skills').then(module => ({ default: module.Skills })));
const Education = lazy(() => import('./components/Education/Education').then(module => ({ default: module.Education })));
const Contact = lazy(() => import('./components/Contact/Contact').then(module => ({ default: module.Contact })));

function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors">
          <SEO />
          <Header />
          <main>
            <Suspense fallback={<Loading />}>
              <Hero />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Contact />
            </Suspense>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;