import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, FolderGit2, Sparkles } from 'lucide-react';

const roles = [
  "Python Developer", "Backend Engineer", "AI Bot Developer", "Data Science Student",
  "MATLAB Programmer", "Co-Founder of Ideal Technology", "WordPress Developer", "JavaScript Developer"
];

const badgeTitles = [
  "AI Engineer & Founder",
  "Co-Founder of Ideal Technology",
  "Data Science Innovator",
  "Backend Systems Architect"
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [currentBadge, setCurrentBadge] = useState(0);
  const typingSpeed = 120;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRole % roles.length];
      setDisplayText(isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1));
      
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, loopNum]);

  useEffect(() => {
    const badgeTimer = setInterval(() => {
      setCurrentBadge((prev) => (prev + 1) % badgeTitles.length);
    }, 3500);
    return () => clearInterval(badgeTimer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm mb-6 h-8 overflow-hidden">
            <span className="text-accent animate-pulse">✦</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentBadge}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block font-medium"
              >
                {badgeTitles[currentBadge]}
              </motion.span>
            </AnimatePresence>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">Victor Clement <span className="text-accent">Udoma</span></h1>
          <div className="h-16 mb-6">
            <p className="text-xl md:text-2xl text-textMuted"><span className="text-accent font-semibold">&gt; </span>{displayText}<span className="animate-pulse">_</span></p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <button onClick={() => scrollToSection('projects')} className="bg-accent text-navy px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-accent/30 transition"><FolderGit2 size={20} /> View Projects</button>
            <button className="border border-accent text-accent px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-accent/10 transition"><Download size={20} /> Download Resume</button>
            <button onClick={() => scrollToSection('contact')} className="bg-secondary/60 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:border-accent/50 transition"><Mail size={20} /> Contact Me</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-accent/40 shadow-2xl shadow-accent/20">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Victor Clement Udoma" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-accent/20 backdrop-blur-md rounded-full p-4 border border-accent/50"><Sparkles className="text-accent" size={28} /></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
