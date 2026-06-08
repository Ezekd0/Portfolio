import React, { useState, useRef, createContext } from 'react';

// Components
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leadership from './components/Leadership';
import TechStack from './components/TechStack';
import DynamicSkills from './components/DynamicSkills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import CurrentlyLearning from './components/CurrentlyLearning';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Context for project filtering and scroll
export const ProjectFilterContext = createContext();

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const techStackRef = useRef(null);
  const leadershipRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <ProjectFilterContext.Provider value={{ 
      activeFilter, 
      setActiveFilter, 
      projectsRef, 
      scrollToProjects: () => scrollToSection(projectsRef), 
      scrollToContact: () => scrollToSection(contactRef), 
      scrollToAbout: () => scrollToSection(aboutRef), 
      scrollToTech: () => scrollToSection(techStackRef), 
      scrollToLeadership: () => scrollToSection(leadershipRef) 
    }}>
      <div className="bg-navy relative overflow-hidden">
        <ParticleBackground />
        <MouseGlow />
        <Navbar />
        <main>
          <Hero />
          <div ref={aboutRef}><About /></div>
          <div ref={leadershipRef}><Leadership /></div>
          <div ref={techStackRef}><TechStack /></div>
          <DynamicSkills />
          <div ref={projectsRef}><Projects /></div>
          <Achievements />
          <CurrentlyLearning />
          <Testimonials />
          <div ref={contactRef}><Contact /></div>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </ProjectFilterContext.Provider>
  );
}

export default App;
