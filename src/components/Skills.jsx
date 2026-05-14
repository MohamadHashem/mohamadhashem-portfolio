import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaLinux } from 'react-icons/fa';
import { SiFlutter, SiKotlin } from 'react-icons/si';
import { TbMathFunction } from 'react-icons/tb';

const getSkillIcon = (skillName) => {
  const name = skillName.toLowerCase();
  if (name.includes('react')) return <FaReact className="text-[#61DAFB]" />;
  if (name.includes('html')) return <FaHtml5 className="text-[#E34F26]" />;
  if (name.includes('css')) return <FaCss3Alt className="text-[#1572B6]" />;
  if (name.includes('flutter')) return <SiFlutter className="text-[#02569B]" />;
  if (name.includes('kotlin')) return <SiKotlin className="text-[#7F52FF]" />;
  if (name.includes('python')) return <FaPython className="text-[#3776AB]" />;
  if (name.includes('matlab')) return <TbMathFunction className="text-[#e26928]" />;
  if (name.includes('linux')) return <FaLinux className="text-[#FCC624]" />;
  return <div className="w-full h-full bg-gray-500 rounded-full"></div>; // Default icon fallback
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-bg-alt/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 border border-[var(--panel-border)] hover:border-accent/50"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                {getSkillIcon(skill.name)}
              </div>
              <h3 className="text-lg font-medium text-text-muted">{skill.name}</h3>
              
              {/* Optional Progress Bar approach */}
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-accent to-accent-purple rounded-full relative"
                >
                  <span className="absolute -top-6 right-0 text-xs text-text-muted/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.level}%
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
