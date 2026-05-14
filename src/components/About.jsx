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
          
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-3xl"></div>
            
            <p className="text-text-muted text-lg md:text-xl leading-relaxed relative z-10">
              {portfolioData.about.summary}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
