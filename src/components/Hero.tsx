// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 text-center z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                AS
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-6">
            <span className="typing-animation">Full Stack Developer & UI/UX Designer</span>
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Creating digital experiences that blend innovation with elegance. 
            Welcome to my interstellar portfolio.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-purple-500 text-purple-300 rounded-full font-medium hover:bg-purple-900/20 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-yellow-400 opacity-70 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-purple-500 opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-blue-400 opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;