import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { RevealLayer } from './RevealLayer';
import { BrandLogo } from './BrandLogo';
import { useTheme } from '../context/ThemeContext';

const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";

export const Hero: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Prevent background scrolling when mobile menu drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const handleMouseMove = (e: MouseEvent) => {
    mouse.current = { x: e.clientX, y: e.clientY };
    if (smooth.current.x === -999) {
      smooth.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      mouse.current = { x: touch.clientX, y: touch.clientY };
      if (smooth.current.x === -999) {
        smooth.current = { x: touch.clientX, y: touch.clientY };
      }
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });

    const tick = () => {
      if (smooth.current.x !== -999) {
        smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
        smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
        setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#about' },
    { label: 'Thesis', href: '#thesis' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' }
  ];

  // Update sliding pill position whenever activeTab changes
  useEffect(() => {
    const updatePillPosition = () => {
      const activeIdx = navLinks.findIndex(l => l.label === activeTab);
      const activeBtn = buttonRefs.current[activeIdx];
      const container = navContainerRef.current;

      if (activeBtn && container) {
        setPillStyle({
          left: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
          opacity: 1
        });
      }
    };

    updatePillPosition();
    window.addEventListener('resize', updatePillPosition);
    return () => window.removeEventListener('resize', updatePillPosition);
  }, [activeTab]);

  // Scrollspy: Automatically detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;

      if (window.scrollY < 300) {
        setActiveTab('Overview');
        return;
      }

      const sections = [
        { label: 'Skills', id: 'skills' },
        { label: 'Experience', id: 'experience' },
        { label: 'Publications', id: 'publications' },
        { label: 'Projects', id: 'projects' },
        { label: 'Thesis', id: 'thesis' },
        { label: 'Overview', id: 'about' }
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveTab(section.label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative w-full overflow-hidden h-screen bg-black" style={{ height: '100dvh' }}>
      
      {/* 1. Base image layer */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
        style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
      />

      {/* 2. Reveal layer */}
      <RevealLayer 
        image={BG_IMAGE_2} 
        cursorX={cursorPos.x} 
        cursorY={cursorPos.y} 
      />

      {/* Navigation Layer with Liquid Glass Capsule */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 bg-white/70 dark:bg-black/80 backdrop-blur-md border-b border-slate-200/60 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          
          {/* Left Nav: Brand logo */}
          <div className="flex-1 flex items-center justify-start">
            <a href="#hero">
              <BrandLogo showSubtitle={true} />
            </a>
          </div>

          {/* Center Nav: Liquid Glass Pill Bar */}
          <div className="hidden lg:flex absolute inset-x-0 mx-auto justify-center pointer-events-none">
            <div 
              ref={navContainerRef}
              className="pointer-events-auto relative flex liquid-nav rounded-full p-1.5 items-center gap-1 shadow-2xl"
            >
              {/* Sliding Pill Indicator (Dark in light mode, White in dark mode) */}
              <div 
                className="absolute top-1.5 bottom-1.5 bg-slate-900 dark:bg-white text-white dark:text-gray-900 rounded-full transition-all duration-300 ease-out shadow-lg pointer-events-none"
                style={{
                  left: `${pillStyle.left}px`,
                  width: `${pillStyle.width}px`,
                  opacity: pillStyle.opacity,
                  transform: 'translateZ(0)'
                }}
              />

              {navLinks.map((link, idx) => {
                const isActive = activeTab === link.label;
                return (
                  <a
                    key={link.label}
                    ref={(el) => (buttonRefs.current[idx] = el)}
                    href={link.href}
                    onClick={() => setActiveTab(link.label)}
                    className={`relative z-10 transition-colors duration-200 px-3.5 py-1.5 rounded-full text-xs font-medium ${
                      isActive 
                        ? 'text-white dark:text-gray-900 font-semibold' 
                        : 'text-slate-700 dark:text-white/80 hover:text-slate-950 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Action Controls: Liquid Glass Buttons */}
          <div className="flex-1 flex items-center justify-end gap-2.5 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md backdrop-blur-md"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={16} className="text-amber-300" /> : <Moon size={16} className="text-slate-800" />}
            </button>

            {/* Desktop Hire Me Button */}
            <a 
              href="mailto:mkhairs10@gmail.com" 
              className="hidden lg:inline-flex bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#e8702a]/25"
            >
              Hire Me
            </a>

            {/* Mobile / Tablet Hamburger Button */}
            <button 
              onClick={() => setMobileMenuOpen(true)} 
              className="lg:hidden text-slate-900 dark:text-white p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors active:scale-95"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>

        </div>
      </nav>

      {/* Full-Screen Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-950/98 dark:bg-[#080808]/98 backdrop-blur-3xl z-[9999] flex flex-col justify-between p-6 overflow-y-auto lg:hidden animate-in fade-in duration-200">
          
          {/* Top Header */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10 w-full shrink-0">
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <BrandLogo showSubtitle={true} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all active:scale-95"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Links Body */}
          <div className="flex-1 flex flex-col justify-center items-center py-6 w-full max-w-sm mx-auto my-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-[#e8702a] font-semibold mb-6">
              Menu Navigation
            </span>
            <div className="flex flex-col gap-2 w-full text-center">
              {navLinks.map((link) => {
                const isActive = activeTab === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActiveTab(link.label);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-lg sm:text-xl font-medium py-2.5 px-5 rounded-2xl transition-all flex items-center justify-center gap-2 ${
                      isActive 
                        ? 'bg-white/20 text-[#e8702a] font-semibold border border-white/20' 
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#e8702a]"></span>}
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm mx-auto shrink-0">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white/10 text-white border border-white/20 text-xs font-mono active:scale-95 transition-transform"
            >
              {theme === 'dark' ? <Sun size={15} className="text-amber-300" /> : <Moon size={15} />}
              <span>{theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
            </button>

            <a
              href="mailto:mkhairs10@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold py-3 rounded-full transition-colors shadow-lg shadow-[#e8702a]/30 active:scale-95"
            >
              Hire Me &rarr;
            </a>
          </div>

        </div>
      )}

      {/* 3. Hero heading */}
      <div className="absolute top-[14%] sm:top-[16%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono bg-white/90 dark:bg-black/50 border border-slate-200 dark:border-white/20 backdrop-blur-md text-slate-900 dark:text-white/95 mb-4 hero-anim hero-fade shadow-lg" style={{ animationDelay: '0.1s' }}>
          <span className="w-2 h-2 rounded-full bg-[#e8702a] animate-ping"></span>
          <span>Open to AI / Machine Learning Roles</span>
        </div>
        <h1 className="text-white leading-[0.95] drop-shadow-lg">
          <span 
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal text-white"
            style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
          >
            Analytical rigor
          </span>
          <span 
            className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal text-white"
            style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
          >
            with AI engineering
          </span>
        </h1>
      </div>

      {/* 4. Bottom-left paragraph */}
      <div 
        className="hidden sm:block absolute bottom-12 md:bottom-14 left-6 sm:left-8 md:left-14 max-w-[290px] z-50 hero-anim hero-fade"
        style={{ animationDelay: '0.7s' }}
      >
        <div className="p-5 rounded-[1.8rem] liquid-glass shadow-2xl">
          <p className="text-xs font-mono text-[#e8702a] uppercase tracking-wider mb-1.5 font-bold">Muhammad Khair Syawaludin</p>
          <p className="text-xs text-slate-700 dark:text-white/90 leading-relaxed">
            Mathematics graduate (GPA 3.61/4.00) engineering deep learning models, GRU architectures, optimization algorithms, and end-to-end ML workflows.
          </p>
        </div>
      </div>

      {/* 5. Bottom-right block */}
      <div 
        className="absolute bottom-6 sm:bottom-12 md:bottom-14 left-4 right-4 sm:left-auto sm:right-8 md:right-14 max-w-full sm:max-w-[300px] flex flex-col items-start gap-4 z-50 hero-anim hero-fade"
        style={{ animationDelay: '0.85s' }}
      >
        <div className="p-5 rounded-[1.8rem] liquid-glass shadow-2xl w-full">
          <p className="text-xs text-slate-700 dark:text-white/90 leading-relaxed mb-3.5">
            Explore 98.27% accuracy Bitcoin GRU research, registered software copyright, and PyTorch / LangChain projects.
          </p>
          <div className="flex items-center gap-2">
            <a 
              href="#thesis"
              className="inline-flex items-center gap-2 bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30"
            >
              <span>Explore Research</span>
              <ArrowRight size={14} />
            </a>
            <a 
              href="#projects"
              className="inline-flex items-center text-xs text-slate-800 dark:text-white/90 hover:text-slate-950 dark:hover:text-white px-3 py-2 rounded-full border border-slate-300 dark:border-white/25 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              Projects
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};
