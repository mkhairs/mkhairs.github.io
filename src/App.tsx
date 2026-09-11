import './liquid-glass.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Thesis } from './components/Thesis';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Publications } from './components/Publications';
import { Skills } from './components/Skills';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  useScrollReveal();
  return <ThemeProvider><a href="#main-content" className="skip-link">Skip to content</a><Navigation />
    <main id="main-content" tabIndex={-1}><Hero /><About /><Projects /><Thesis /><Experience /><Publications /><Skills /><CTA /></main><Footer />
  </ThemeProvider>;
}
