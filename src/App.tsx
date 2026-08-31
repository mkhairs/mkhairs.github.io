import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Thesis } from './components/Thesis';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function PortfolioApp() {
  useScrollReveal();

  return (
    <div 
      className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white tracking-[-0.02em] transition-colors duration-300 overflow-x-hidden" 
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Hero />
      <About />
      <Thesis />
      <Projects />
      <Publications />
      <Experience />
      <Skills />
      <CTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

export default App;
