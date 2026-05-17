import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-accent/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Central line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-purple opacity-50 shadow-[0_0_10px_rgba(0,242,254,0.5)]"></div>

          {portfolioData.experience.map((exp, index) => (
            <div key={exp.id} className={`mb-12 relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0 text-left md:text-right' : 'md:pl-12 md:ml-auto text-left'} `}>
              {/* Timeline dot */}
              <div className={`absolute top-0 w-10 h-10 bg-[#0f172a] border-2 border-accent rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,242,254,0.6)] 
                -left-13 md:-left-5
                ${index % 2 === 0 ? 'md:left-auto md:-right-5' : 'md:-left-5'}
              `}>
                <FiBriefcase className="text-accent text-sm" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-panel neon-glow p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent border border-accent/30 font-mono rounded-md shadow-[0_0_5px_rgba(0,242,254,0.2)] text-sm font-medium mb-3">
                  {exp.period}
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-1 group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-text-muted/80 font-medium mb-4">
                  {exp.company}
                </h4>
                <p className="text-text-muted leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
