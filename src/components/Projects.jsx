import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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

  const projects = [
    {
      id: 1,
      title: 'WeJobs Job Portal',
      description: 'Contributed to the development of a comprehensive job portal connecting job seekers with employers. Implemented business logic, core functionalities, and database management with MySQL & MongoDB.',
      image: 'https://picsum.photos/seed/wejobs/400/250.jpg',
      technologies: ['PHP', 'Laravel', 'MySQL', 'MongoDB', 'JavaScript'],
      category: 'fullstack',
      githubLink: 'https://github.com/khushinakrani',
      liveLink: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform with product catalog, shopping cart, payment integration, and order management system using React and Node.js.',
      image: 'https://picsum.photos/seed/ecommerce/400/250.jpg',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
      category: 'mern',
      githubLink: 'https://github.com/khushinakrani',
      liveLink: 'https://example.com',
      featured: true,
    },
    {
      id: 3,
      title: 'College Club Management System',
      description: 'A platform for managing college clubs, events, memberships, and communications. Includes role-based access and event scheduling using MERN stack.',
      image: 'https://picsum.photos/seed/collegeclub/400/250.jpg',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      category: 'mern',
      githubLink: 'https://github.com/khushinakrani',
      liveLink: 'https://example.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://picsum.photos/seed/taskapp/400/250.jpg',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
      category: 'mern',
      githubLink: 'https://github.com/khushinakrani',
      liveLink: 'https://example.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A feature-rich blogging platform with markdown support, comment system, and admin panel for content management using PHP and Laravel.',
      image: 'https://picsum.photos/seed/blog/400/250.jpg',
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
      category: 'fullstack',
      githubLink: 'https://github.com/khushinakrani',
      liveLink: 'https://example.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React.js and modern web technologies to showcase my projects and skills.',
      image: 'https://picsum.photos/seed/portfolio/400/250.jpg',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'HTML5'],
      category: 'mern',
      githubLink: 'https://github.com/khushinakrani',
      liveLink: 'https://example.com',
      featured: false,
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mern', label: 'MERN Stack' },
    { id: 'mean', label: 'MEAN Stack' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <FaFilter className="inline mr-2" />
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FaGithub size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      <FaExternalLinkAlt size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          {filteredProjects.length > 6 && (
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View More Projects
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
