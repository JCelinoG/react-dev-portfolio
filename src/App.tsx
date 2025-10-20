import React, { Suspense, lazy } from 'react';
import { AppProvider } from './contexts/AppProvider';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Loading } from './components/Loading/Loading';

// Lazy load main sections for better performance
const Hero = lazy(() => import('./components/Hero/Hero').then(module => ({ default: module.Hero })));
const Experience = lazy(() => import('./components/Experience/Experience').then(module => ({ default: module.Experience })));
const Projects = lazy(() => import('./components/Projects/Projects').then(module => ({ default: module.Projects })));
const Skills = lazy(() => import('./components/Skills/Skills').then(module => ({ default: module.Skills })));
const Education = lazy(() => import('./components/Education/Education').then(module => ({ default: module.Education })));
const Contact = lazy(() => import('./components/Contact/Contact').then(module => ({ default: module.Contact })));

const SimpleSEO: React.FC = () => {
  React.useEffect(() => {
    document.title = 'João Celino - Software Engineer';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Full-Stack Developer with 5+ years of experience creating robust web solutions. Specialized in React, Angular, TypeScript, and Java.';
      document.head.appendChild(meta);
    }
  }, []);

  return null;
};

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors">
        <SimpleSEO />
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
  );
}

export default App;