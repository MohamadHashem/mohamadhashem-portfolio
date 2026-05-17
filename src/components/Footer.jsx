import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FiHeart, FiTerminal } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-bg-base border-t border-[var(--panel-border)] py-8 relative overflow-hidden">
      {/* Background grid for footer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,254,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        
        <div className="text-xl font-bold text-text-main tracking-wider mb-4 md:mb-0 font-mono flex items-center group cursor-pointer">
          <span className="text-accent group-hover:-translate-x-1 transition-transform duration-300">{"<"}</span>
          <span className="mx-1 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,242,254,0.8)] transition-all duration-300">{portfolioData.personalInfo.logoText}</span>
          <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">{"/>"}</span>
        </div>

        <p className="text-text-muted/80 text-sm flex items-center gap-1 font-mono">
          Compiled with <FiTerminal className="text-accent animate-pulse mx-1" /> by <span className="text-accent-purple ml-1">{portfolioData.personalInfo.name}</span>
        </p>

        <div className="mt-4 md:mt-0 text-text-muted/60 text-sm font-mono">
          &copy; {new Date().getFullYear()} sys.exit(0)
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
