import React from 'react';
import { AppProvider } from './contexts/AppContext';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;