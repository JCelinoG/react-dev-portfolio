import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-primary-700">João Gualberto</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#about" className="text-secondary-600 hover:text-primary-600 transition-colors">Sobre</a></li>
                <li><a href="#experience" className="text-secondary-600 hover:text-primary-600 transition-colors">Experiência</a></li>
                <li><a href="#projects" className="text-secondary-600 hover:text-primary-600 transition-colors">Projetos</a></li>
                <li><a href="#contact" className="text-secondary-600 hover:text-primary-600 transition-colors">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Em construção...
            </h2>
            <p className="text-secondary-600">
              Portfolio em desenvolvimento com React + TypeScript + Tailwind CSS
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;