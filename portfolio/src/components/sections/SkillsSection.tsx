import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/animations';
import { skills } from '@/data/portfolio';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaNpm, FaGithub, FaFigma,
  FaSass, FaGitAlt, FaDatabase
} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, 
  SiFirebase, SiGraphql, SiExpress, SiMongodb, SiJest, SiCypress } from 'react-icons/si';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'other', label: 'Other' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const skillIconMap: Record<string, React.ReactElement> = {
    html5: <FaHtml5 className="text-[#E34F26]" size={30} />,
    css3: <FaCss3Alt className="text-[#1572B6]" size={30} />,
    javascript: <SiJavascript className="text-[#F7DF1E]" size={30} />,
    typescript: <SiTypescript className="text-[#3178C6]" size={30} />,
    react: <FaReact className="text-[#61DAFB]" size={30} />,
    nextjs: <SiNextdotjs className="text-[#000000] dark:text-white" size={30} />,
    tailwind: <SiTailwindcss className="text-[#06B6D4]" size={30} />,
    redux: <SiRedux className="text-[#764ABC]" size={30} />,
    sass: <FaSass className="text-[#CC6699]" size={30} />,
    'styled-components': <FaSass className="text-[#DB7093]" size={30} />,
    framer: <FaReact className="text-[#0055FF]" size={30} />,
    nodejs: <FaNodeJs className="text-[#339933]" size={30} />,
    express: <SiExpress className="text-[#000000] dark:text-white" size={30} />,
    mongodb: <SiMongodb className="text-[#47A248]" size={30} />,
    firebase: <SiFirebase className="text-[#FFCA28]" size={30} />,
    api: <FaDatabase className="text-[#4CAF50]" size={30} />,
    graphql: <SiGraphql className="text-[#E10098]" size={30} />,
    figma: <FaFigma className="text-[#F24E1E]" size={30} />,
    adobexd: <SiNextdotjs className="text-[#FF61F6]" size={30} />,
    photoshop: <SiNextdotjs className="text-[#31A8FF]" size={30} />,
    git: <FaGitAlt className="text-[#F05032]" size={30} />,
    github: <FaGithub className="text-[#181717] dark:text-white" size={30} />,
    webpack: <FaNpm className="text-[#8DD6F9]" size={30} />,
    jest: <SiJest className="text-[#C21325]" size={30} />,
    cypress: <SiCypress className="text-[#17202C]" size={30} />,
  };

  return (
    <section id="skills" className="section overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="heading">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I specialize in frontend development with expertise in modern frameworks and tools.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn('up', 0.1 * index)}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <div className="mb-4">
                {skillIconMap[skill.icon.toLowerCase()] || <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full" />}
              </div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</h3>
              <div className="mt-2 w-full">
                <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {['Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Expert'][skill.level - 1]}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Meter Explanation */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Skill Level Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Expert'].map((level, index) => (
              <div key={level} className="flex flex-col items-center">
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" 
                    style={{ width: `${((index + 1) / 5) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">{level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 