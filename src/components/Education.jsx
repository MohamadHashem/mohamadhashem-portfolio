import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-panel neon-glow p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:border-accent/50 transition-all duration-300"
            >
              <div className="p-4 bg-accent/10 rounded-full text-accent shadow-[0_0_15px_rgba(0,242,254,0.4)]">
                <FiBookOpen size={32} />
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-text-main">{edu.degree}</h3>
                  <span className="text-accent font-mono font-medium mt-1 md:mt-0">{edu.period}</span>
                </div>
                <h4 className="text-lg text-text-muted/80 font-medium mb-4">{edu.institution}</h4>
                <p className="text-text-muted leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
