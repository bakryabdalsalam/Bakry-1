import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaDribbble } from 'react-icons/fa';
import { slideIn } from '@/utils/animations';
import { socialLinks, personalInfo } from '@/data/portfolio';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const iconMap: Record<string, React.ReactElement> = {
    github: <FaGithub size={20} />,
    linkedin: <FaLinkedinIn size={20} />,
    twitter: <FaTwitter size={20} />,
    dribbble: <FaDribbble size={20} />
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Bio */}
          <motion.div
            variants={slideIn('left', 'tween', 0.1, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 inline-block">
              {personalInfo.name}
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-4 pr-4">
              {personalInfo.bio.split(' ').slice(0, 15).join(' ')}...
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={slideIn('up', 'tween', 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={slideIn('right', 'tween', 0.3, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{personalInfo.email}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{personalInfo.phone}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{personalInfo.location}</p>
            
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {iconMap[link.icon.toLowerCase()]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-500">
            <span>Designed and Built with</span>
            <span className="mx-1 text-red-500">❤</span>
            <span>By Bakry Abdelsalam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 