import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.png';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Vivekanand College, Veer Narmad South Gujarat University, Surat',
      year: '2023 - 2026',
      description: 'Minor in Management. Academic project focused on analyzing technology companies and improving their web development and product design workflows.',
    },
  ];

  const skills = [
    'Problem Solving',
    'Team Collaboration',
    'Project Management',
    'Communication',
    'Critical Thinking',
    'Adaptability',
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Profile Image and Bio */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={profileImage}
                      alt="About Profile"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/about/400/400.jpg`;
                      }}
                    />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-600/20 rounded-2xl"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>

              {/* Bio */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Hello! I'm a Web Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm Khushi Nakrani, a passionate BCA student and Web Developer with a strong foundation in 
                  modern web technologies. I love creating elegant solutions to complex problems and 
                  am always eager to learn new technologies and frameworks.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Web Developer with good knowledge of development and design, experienced in working with teams to build scalable web applications.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Education and Career Objective */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Career Objective */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Career Objective
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Seeking a Web Developer role to apply my knowledge of web technologies, collaborate with teams, and deliver high-quality, scalable web solutions.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 card-hover"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      {edu.year}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Key Skills */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Key Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
