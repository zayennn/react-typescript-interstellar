import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 p-1">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                          JD
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">John Doe</h3>
                    <p className="text-gray-400">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-yellow-400 opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-purple-500 opacity-30"></div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Crafting Digital Experiences
            </h3>
            
            <p className="text-gray-300 mb-6 text-lg">
              I'm a passionate full-stack developer with over 5 years of experience 
              creating digital solutions that blend functionality with beautiful design. 
              My journey in tech started with a curiosity about how things work, and 
              has evolved into a career building applications that solve real-world problems.
            </p>
            
            <p className="text-gray-300 mb-8 text-lg">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or capturing moments through photography. 
              I believe in continuous learning and pushing the boundaries of what's possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">Location</h4>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">Experience</h4>
                  <p className="text-gray-400">5+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;