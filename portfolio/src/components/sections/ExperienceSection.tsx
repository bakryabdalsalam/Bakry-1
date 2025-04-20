import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { fadeIn, slideIn } from '@/utils/animations';
import { experiences } from '@/data/portfolio';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey as a frontend developer.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={fadeIn('up', 0.1 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              className={`flex flex-col md:flex-row mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center z-10 relative">
                    <FaBriefcase className="text-primary text-xl" />
                  </div>
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent"></div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 flex-grow md:mx-8 mt-6 md:mt-0 relative ${
                index % 2 === 0 
                  ? 'md:ml-8 md:before:content-[""] md:before:absolute md:before:top-8 md:before:left-[-8px] md:before:border-8 md:before:border-r-white md:before:dark:border-r-gray-800 md:before:border-t-transparent md:before:border-b-transparent md:before:border-l-transparent'
                  : 'md:mr-8 md:before:content-[""] md:before:absolute md:before:top-8 md:before:right-[-8px] md:before:border-8 md:before:border-l-white md:before:dark:border-l-gray-800 md:before:border-t-transparent md:before:border-b-transparent md:before:border-r-transparent'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.position}</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <FaCalendarAlt className="text-primary mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{experience.duration}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-lg font-semibold text-primary">{experience.company}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume Download */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="text-center mt-16"
        >
          <a 
            href="/resume.pdf" 
            download
            className="btn btn-primary"
          >
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection; 