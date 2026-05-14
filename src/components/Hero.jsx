import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const { name, title, imagePath } = portfolioData.personalInfo;
  const { typingRoles } = portfolioData.hero;
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 text-center md:text-left"
        >
          <p className="text-accent text-lg font-medium tracking-wide">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-text-main leading-tight">
            {name}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-text-muted">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">
              <Typewriter
                words={typingRoles}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-text-muted/80 max-w-lg mx-auto md:mx-0 text-lg">
            {title} based in {portfolioData.personalInfo.location}. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accent-purple text-text-main font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-gray-500 text-text-main font-medium hover:border-accent hover:text-accent transition-colors duration-300 flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-accent to-accent-purple shadow-[0_0_40px_rgba(139,92,246,0.4)] animate-[float_6s_ease-in-out_infinite]">
            <div className="w-full h-full rounded-full overflow-hidden bg-primary border-4 border-primary">
              {!imageError ? (
                <img
                  src={imagePath}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-6xl text-text-muted/80 font-bold">
                  {name.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
