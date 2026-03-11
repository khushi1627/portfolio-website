import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiReact, 
  SiAngular, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiGit, 
  SiGithub, 
  SiPostman 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: SiHtml5, level: 95, color: 'text-orange-500' },
        { name: 'CSS3', icon: SiCss, level: 90, color: 'text-blue-500' },
        { name: 'JavaScript', icon: SiJavascript, level: 85, color: 'text-yellow-500' },
        { name: 'React.js', icon: SiReact, level: 85, color: 'text-cyan-500' },
        { name: 'Bootstrap', icon: SiAngular, level: 80, color: 'text-purple-500' },
        { name: 'Tailwind CSS', icon: SiAngular, level: 85, color: 'text-teal-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 80, color: 'text-green-500' },
        { name: 'Express.js', icon: SiExpress, level: 75, color: 'text-gray-700 dark:text-gray-300' },
        { name: 'PHP', icon: SiExpress, level: 70, color: 'text-indigo-500' },
        { name: 'Laravel', icon: SiExpress, level: 65, color: 'text-red-500' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 75, color: 'text-green-600' },
        { name: 'MySQL', icon: SiMysql, level: 80, color: 'text-blue-600' },
        { name: 'PostgreSQL', icon: SiMysql, level: 70, color: 'text-blue-700' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: SiGit, level: 85, color: 'text-red-600' },
        { name: 'GitHub', icon: SiGithub, level: 85, color: 'text-gray-900 dark:text-white' },
        { name: 'VS Code', icon: VscVscode, level: 90, color: 'text-blue-600' },
        { name: 'Postman', icon: SiPostman, level: 80, color: 'text-orange-600' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to build modern web applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg card-hover"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <skill.icon 
                            className={`${skill.color} text-xl`}
                          />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Other Skills & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'TypeScript', 'RESTful APIs', 'JWT Authentication', 'CRUD Operations', 
                'MVC Architecture', 'UI/UX Design', 'Responsive Design', 
                'Performance Optimization', 'Testing', 'Git', 'GitHub', 'VS Code', 'Postman'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
