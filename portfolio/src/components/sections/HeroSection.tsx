import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaArrowDown } from 'react-icons/fa';
import { fadeIn, floatAnimation, slideIn } from '@/utils/animations';
import { personalInfo, socialLinks } from '@/data/portfolio';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container-custom pt-28 md:pt-20 flex flex-col md:flex-row items-center">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.05 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
            {personalInfo.title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.05 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6"
          >
            {personalInfo.bio}
          </motion.p>
          
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.05 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="#contact" className="btn btn-primary">
              Contact Me
            </Link>
            <Link href={personalInfo.resumeUrl} className="btn btn-outline">
              Download CV
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.05 }}
            className="flex space-x-4 mt-8"
          >
            {socialLinks.filter(link => ['github', 'linkedin'].includes(link.icon.toLowerCase())).map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon.toLowerCase() === 'github' ? <FaGithub size={24} /> : <FaLinkedinIn size={24} />}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.05 }}
          className="relative md:w-1/2 h-[400px] md:h-[500px]"
        >
          <div className="relative w-full max-w-md mx-auto lg:ml-auto">
            <div className="w-full pt-[100%] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
              <Image
                src="/images/hero-image.jpg"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-full p-4"
                priority
              />
            </div>

            {/* Background Decorations - Contained within parent boundaries */}
            <motion.div 
              className="absolute -z-10 -top-4 -left-4 w-40 h-40 bg-primary/20 rounded-full blur-2xl"
              variants={floatAnimation}
              animate="show"
            />
            <motion.div 
              className="absolute -z-10 -bottom-8 -right-4 w-60 h-60 bg-secondary/20 rounded-full blur-3xl"
              variants={floatAnimation}
              animate="show"
              initial={{ y: 0 }}
              custom={1}
            />
            
            {/* Skill Orbs - Adjusted position to prevent overflows */}
            <motion.div
              className="absolute top-10 left-0 sm:-left-10 w-20 h-20 bg-white dark:bg-dark rounded-full shadow-lg flex items-center justify-center"
              variants={floatAnimation}
              animate="show"
              custom={2}
            >
              <span className="text-2xl">⚛️</span>
            </motion.div>
            <motion.div
              className="absolute bottom-10 right-0 sm:-right-5 w-16 h-16 bg-white dark:bg-dark rounded-full shadow-lg flex items-center justify-center"
              variants={floatAnimation}
              animate="show"
              custom={3}
            >
              <span className="text-xl">🎨</span>
            </motion.div>
            <motion.div
              className="absolute top-1/2 right-0 sm:-right-12 w-24 h-24 bg-white dark:bg-dark rounded-full shadow-lg flex items-center justify-center"
              variants={floatAnimation}
              animate="show"
              custom={1}
            >
              <span className="text-3xl">💻</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute left-1/2 bottom-10 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-xl"
        >
          <FaArrowDown className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 