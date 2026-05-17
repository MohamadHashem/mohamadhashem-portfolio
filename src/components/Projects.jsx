import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-bg-alt/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel neon-glow rounded-2xl overflow-hidden group flex flex-col relative z-10"
            >
              <div className="relative h-60 overflow-hidden border-b border-[var(--panel-border)]">
                <div className="absolute inset-0 bg-accent/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                />
                {/* Tech overlay grid on image */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,254,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,254,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-20 opacity-50 mix-blend-overlay"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow bg-bg-base/50">
                <h3 className="text-2xl font-bold text-text-main mb-3 group-hover:text-accent transition-colors flex items-center gap-2">
                  <span className="text-accent text-lg">{">_"}</span> {project.title}
                </h3>
                <p className="text-text-muted mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono font-medium bg-accent/10 text-accent rounded border border-accent/30 shadow-[0_0_5px_rgba(0,242,254,0.2)]">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[var(--panel-border)]">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent flex items-center gap-2 transition-colors font-mono text-sm"
                  >
                    <FiGithub size={18} /> [Code]
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent flex items-center gap-2 transition-colors ml-auto font-mono text-sm"
                  >
                    <FiExternalLink size={18} /> [Live_Demo]
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
