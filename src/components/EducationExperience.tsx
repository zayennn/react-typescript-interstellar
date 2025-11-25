import React from 'react';

const EducationExperience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Leading development of web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      type: "experience"
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client projects. Collaborated with design teams to create responsive and accessible web applications.",
      type: "experience"
    },
    {
      title: "Frontend Developer",
      company: "Web Creators Agency",
      period: "2018 - 2019",
      description: "Focused on creating interactive user interfaces with React and modern CSS. Worked closely with UX designers to implement pixel-perfect designs.",
      type: "experience"
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2016 - 2018",
      description: "Specialized in Human-Computer Interaction and Web Technologies. Thesis on 'Progressive Web Apps for Enhanced User Engagement'.",
      type: "education"
    },
    {
      degree: "Bachelor of Software Engineering",
      institution: "University of California",
      period: "2012 - 2016",
      description: "Graduated with honors. Focused on software development methodologies and full-stack web development.",
      type: "education"
    }
  ];

  return (
    <section id="education-experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Education & Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
              <span className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative pl-10 pb-8 border-l-2 border-purple-500/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500"></div>
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-purple-400 font-medium">{exp.company}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">{exp.period}</span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
              <span className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6l9-5m-9 5l-9-5" />
                </svg>
              </span>
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative pl-10 pb-8 border-l-2 border-blue-500/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-900/30 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-blue-400 font-medium">{edu.institution}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">{edu.period}</span>
                    </div>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;