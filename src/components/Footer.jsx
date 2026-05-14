import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-bg-base border-t border-[var(--panel-border)] py-8 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        
        <div className="text-xl font-bold text-text-main tracking-wider mb-4 md:mb-0">
          {portfolioData.personalInfo.logoText}
        </div>

        <p className="text-text-muted/80 text-sm flex items-center gap-1">
          Designed & Built with <FiHeart className="text-red-500 animate-pulse mx-1" /> by {portfolioData.personalInfo.name}
        </p>

        <div className="mt-4 md:mt-0 text-text-muted/60 text-sm">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
