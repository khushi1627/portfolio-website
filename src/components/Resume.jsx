import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCalendarAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Resume = () => {
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

  const experience = [
    {
      title: 'Web Development Intern',
      company: 'We3vision Private Limited',
      period: 'January 2024 - Present',
      description: [
        'Developed full-stack features using PHP and Laravel',
        'Contributed to WeJobs Job Portal (frontend + backend)',
        'Implemented business logic and core functionalities',
        'Managed MySQL & MongoDB databases with CRUD operations',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Vivekanand College, Veer Narmad South Gujarat University, Surat',
      period: '2023 - 2026',
      details: [
        'Minor in Management',
        'Academic project focused on analyzing technology companies',
        'Relevant Coursework: Web Development, Database Management, Software Engineering',
        'Activities: Web Development Projects, Technical Events',
      ],
    },
  ];

  
  const skills = [
    { category: 'Programming Languages', items: ['JavaScript', 'PHP'] },
    { category: 'Frontend Technologies', items: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'] },
    { category: 'Backend Technologies', items: ['Node.js', 'Express.js', 'Laravel', 'MongoDB', 'MySQL', 'PostgreSQL'] },
    { category: 'Core Concepts', items: ['RESTful APIs', 'JWT Authentication', 'CRUD Operations', 'MVC Architecture'] },
  ];

  const handleDownloadResume = () => {
    // Create a sample resume download
    const link = document.createElement('a');
    link.href = '/portfolio-website/resume.pdf'; // You would place your actual resume PDF here
    link.download = 'KhushiNakrani_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              My <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey, education, and qualifications
            </p>
          </motion.div>

          {/* Download Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaDownload />
              Download Full Resume
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <FaBriefcase className="text-2xl text-blue-500" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Work Experience
                </h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg card-hover"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1 sm:mt-0">
                        <FaCalendarAlt />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">▸</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-2xl text-purple-500" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg card-hover"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1 sm:mt-0">
                        <FaCalendarAlt />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                      {edu.institution}
                    </p>
                    <ul className="space-y-1">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="text-purple-500 mr-2 mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Technical Skills Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          </motion.div>
      </div>
    </section>
  );
};

export default Resume;
