import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const skillset = ['Python', 'FastAPI', 'AI Development', 'MATLAB', 'R Programming', 'JavaScript', 'WordPress', 'Data Science', 'Machine Learning', 'Backend Architecture'];

const DynamicSkills = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % skillset.length), 1800);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-16 bg-gradient-to-r from-navy to-secondary/80">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">✨ Core Competencies in Motion</h3>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <span className="text-xl text-textMuted">Currently mastering:</span>
          <motion.span key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-4xl md:text-5xl font-bold text-accent inline-block">{skillset[index]}</motion.span>
        </div>
      </div>
    </section>
  );
};

export default DynamicSkills;
