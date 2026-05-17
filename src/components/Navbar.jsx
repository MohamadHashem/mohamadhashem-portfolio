import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check initial dark mode state
    if (!document.documentElement.classList.contains('dark') && darkMode) {
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-base/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-[var(--panel-border)] py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-text-main tracking-wider flex items-center font-mono group">
          <span className="text-accent transition-transform group-hover:-translate-x-1 duration-300">{"<"}</span>
          <span className="group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,242,254,0.8)] transition-all duration-300 mx-1">{portfolioData.personalInfo.logoText}</span>
          <span className="text-accent transition-transform group-hover:translate-x-1 duration-300">{"/>"}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-text-muted hover:text-accent transition-colors text-sm font-mono tracking-wide hover:drop-shadow-[0_0_8px_rgba(0,242,254,0.5)]">
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="text-text-muted hover:text-accent focus:outline-none transition-colors">
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-text-muted hover:text-accent focus:outline-none">
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-muted hover:text-accent focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-alt/95 backdrop-blur-md border-t border-[var(--panel-border)]"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-muted hover:text-accent font-mono text-lg font-medium transition-colors"
                >
                  <span className="text-accent mr-2">{">"}</span>{link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
