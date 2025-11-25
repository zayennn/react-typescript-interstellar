import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Interstellar Dashboard",
      description: "A cosmic-themed admin dashboard with real-time analytics and beautiful data visualizations.",
      image: "/api/placeholder/400/250",
      tags: ["React", "TypeScript", "Tailwind CSS", "D3.js"],
      category: "web",
      link: "#"
    },
    {
      id: 2,
      title: "Nebula E-commerce",
      description: "Full-stack e-commerce solution with payment integration and admin panel.",
      image: "/api/placeholder/400/250",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      link: "#"
    },
    {
      id: 3,
      title: "Galaxy Mobile App",
      description: "Cross-platform mobile application for stargazing and celestial events tracking.",
      image: "/api/placeholder/400/250",
      tags: ["React Native", "Firebase", "Expo"],
      category: "mobile",
      link: "#"
    },
    {
      id: 4,
      title: "Cosmic UI Kit",
      description: "A design system and component library with interstellar theme for React applications.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Storybook", "Figma", "Design System"],
      category: "design",
      link: "#"
    },
    {
      id: 5,
      title: "Astro Portfolio Template",
      description: "A responsive portfolio template with cosmic animations and dark theme.",
      image: "/api/placeholder/400/250",
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      category: "web",
      link: "#"
    },
    {
      id: 6,
      title: "Stellar Analytics",
      description: "Data visualization platform for astronomical data with interactive charts.",
      image: "/api/placeholder/400/250",
      tags: ["Python", "Django", "Chart.js", "PostgreSQL"],
      category: "web",
      link: "#"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-yellow-500 to-purple-600 text-white shadow-lg shadow-yellow-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="h-48 bg-gradient-to-r from-yellow-400/20 via-purple-500/20 to-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <a 
                      href={project.link}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-300 rounded-full font-medium hover:bg-purple-900/20 transition-all duration-300"
          >
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;