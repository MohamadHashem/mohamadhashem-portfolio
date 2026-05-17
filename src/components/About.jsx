import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-main">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto mb-10 rounded-full"></div>
          
          <div className="terminal-window text-left mx-auto relative z-10 max-w-3xl group transition-transform duration-500 hover:scale-[1.02]">
            {/* Decorative background blur */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="terminal-header">
              <div className="terminal-dot dot-red"></div>
              <div className="terminal-dot dot-yellow"></div>
              <div className="terminal-dot dot-green"></div>
              <div className="terminal-title">mohamad_about.sh</div>
            </div>
            <div className="terminal-body relative z-10">
              <div className="mb-4">
                <span className="terminal-prompt"></span>
                <span className="terminal-command">cat summary.txt</span>
              </div>
              <p className="text-gray-300 text-base md:text-lg">
                {portfolioData.about.summary}
              </p>
              <div className="mt-4 flex items-center">
                <span className="terminal-prompt"></span>
                <span className="w-2.5 h-5 bg-accent animate-pulse inline-block ml-1"></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
