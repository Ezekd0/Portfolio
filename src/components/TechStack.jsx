import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techCategories = [
  { name: 'Backend', skills: ['Python', 'FastAPI', 'Flask', 'Django'] },
  { name: 'Data Science', skills: ['Pandas', 'NumPy', 'R', 'Machine Learning', 'Data Analytics'] },
  { name: 'Programming', skills: ['JavaScript', 'MATLAB', 'R', 'HTML', 'CSS'] },
  { name: 'Database', skills: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { name: 'Tools', skills: ['Git', 'GitHub', 'Linux', 'Postman'] },
];

const TechStack = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <section id="tech" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-center mb-12">Tech Arsenal <span className="text-accent">⚡</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {techCategories.map((cat, i) => (
              <div key={i} className="bg-secondary p-6 rounded-xl border border-accent/20 hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-accent">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => <span key={idx} className="px-3 py-1 bg-navy/70 rounded-full text-sm text-white border border-accent/20">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
