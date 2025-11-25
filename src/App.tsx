// App.tsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import EducationExperience from './components/EducationExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <StarsBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <EducationExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;