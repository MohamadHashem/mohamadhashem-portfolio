import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative bg-bg-alt/30">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel neon-glow p-6 rounded-xl flex items-center gap-6 group transition-all duration-300"
            >
              <div className="p-3 bg-accent/10 text-accent rounded-lg group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,242,254,0.3)]">
                <FiAward size={28} />
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-text-main group-hover:text-accent transition-colors">{cert.title}</h3>
                <div className="flex items-center gap-2 mt-1 text-sm font-mono text-text-muted/80">
                  <span className="font-medium text-accent-purple">{cert.issuer}</span>
                  <span className="text-accent">&bull;</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
