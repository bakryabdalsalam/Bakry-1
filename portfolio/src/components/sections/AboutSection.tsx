import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, slideIn, zoomIn } from '@/utils/animations';
import { personalInfo } from '@/data/portfolio';
import { BiBriefcase, BiMap, BiEnvelope } from 'react-icons/bi';

const AboutSection: React.FC = () => {
  const stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '10+', label: 'Happy Clients' }
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="heading">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Side */}
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="relative"
          >
            <div className="w-full max-w-md mx-auto relative">
              {/* Main Image with Frame */}
              <div className="rounded-lg overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl relative z-10">
                <Image 
                  src="/images/about-image.jpg" 
                  alt="About Me" 
                  width={500} 
                  height={600} 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Stats Cards - Adjusted for mobile */}
              <motion.div 
                variants={zoomIn(0.5, 0.5)}
                className="absolute -bottom-10 right-0 md:-right-10 bg-white dark:bg-dark rounded-lg shadow-xl p-5 z-20"
              >
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Elements - Contained within parent */}
              <div className="absolute -z-10 top-0 left-0 md:-top-4 md:-left-4 w-full h-full bg-primary/10 rounded-lg"></div>
              <div className="absolute -z-10 top-4 left-4 md:top-10 md:left-10 w-full h-full bg-secondary/10 rounded-lg"></div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={slideIn('right', 'tween', 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Frontend Developer based in {personalInfo.location}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {personalInfo.bio}
            </p>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <motion.div 
                variants={fadeIn('up', 0.3)}
                initial="hidden" 
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <BiBriefcase className="text-primary text-xl" />
                </div>
                <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Experience</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">4+ Years</p>
              </motion.div>

              <motion.div 
                variants={fadeIn('up', 0.4)}
                initial="hidden" 
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <BiMap className="text-primary text-xl" />
                </div>
                <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Location</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{personalInfo.location}</p>
              </motion.div>

              <motion.div 
                variants={fadeIn('up', 0.5)}
                initial="hidden" 
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <BiEnvelope className="text-primary text-xl" />
                </div>
                <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Email</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{personalInfo.email}</p>
              </motion.div>
            </div>

            {/* Timeline */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Education & Certifications
              </h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-secondary">
                <TimelineItem 
                  year="2018" 
                  title="Bachelor's Degree in Computer Science" 
                  description="University of Technology"
                />
                <TimelineItem 
                  year="2019" 
                  title="Frontend Web Development" 
                  description="Udacity Nanodegree"
                />
                <TimelineItem 
                  year="2021" 
                  title="Advanced React and Redux" 
                  description="Coursera Certification"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
  return (
    <motion.div 
      variants={fadeIn('up', 0.2)}
      className="ml-10 relative"
    >
      {/* Timeline dot */}
      <div className="absolute w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center -left-14 top-0 shadow-md">
        {year.slice(2)}
      </div>
      
      {/* Content */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h4 className="text-base font-bold text-gray-800 dark:text-gray-200">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        <div className="text-xs text-gray-500 mt-1">{year}</div>
      </div>
    </motion.div>
  );
};

export default AboutSection; 