import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';

const Contact = () => {
  const { email, phone, github, linkedin, website } = portfolioData.personalInfo;

  const contactLinks = [
    { icon: <FiMail size={24} />, title: "Email", value: email, href: `mailto:${email}` },
    { icon: <FiPhone size={24} />, title: "Phone", value: phone, href: `tel:${phone}` },
    { icon: <FiGithub size={24} />, title: "GitHub", value: "github.com", href: github },
    { icon: <FiLinkedin size={24} />, title: "LinkedIn", value: "linkedin.com", href: linkedin },
    { icon: <FiGlobe size={24} />, title: "Website", value: "Portfolio", href: website },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-text-muted/80 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group hover:border-accent/50 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] neon-glow"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-text-main transition-colors duration-300 shadow-inner">
                {contact.icon}
              </div>
              <h3 className="text-lg font-bold text-text-main mb-2">{contact.title}</h3>
              <p className="text-text-muted/80 text-sm">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
