import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Software Engineer",
    company: "Brain",
    duration: "2024 - Present",
    location: "Uyo, Nigeria",
    description: "Developed and optimized backend server architectures, designed database schemas, and integrated data-driven analytical models."
  },
  {
    role: "Freelance Backend Developer & AI Integrator",
    company: "Independent Contractor",
    duration: "2023 - Present",
    location: "Remote",
    description: "Built customizable automation bots, custom APIs using FastAPI/Django, and integrated third-party AI models (like LLMs) for clients."
  },
  {
    role: "Software Engineering Intern",
    company: "Aptech",
    duration: "2023",
    location: "Uyo, Nigeria",
    description: "Gained practical experience in coding standards, software debugging, relational databases, and collaborative team-based software development."
  }
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref} 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Professional <span className="text-accent">Experience</span></h2>
          <p className="text-textMuted text-center max-w-2xl mx-auto mb-12">Building scalable systems and robust software solutions across industry roles.</p>
          
          <div className="max-w-3xl mx-auto relative border-l-2 border-accent/20 pl-8 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Dot marker */}
                <div className="absolute -left-[41px] top-1 bg-navy border-2 border-accent w-6 h-6 rounded-full flex items-center justify-center text-accent">
                  <Briefcase size={12} />
                </div>
                
                <div className="bg-secondary/60 backdrop-blur-sm p-6 rounded-2xl border border-accent/10 hover:border-accent/40 transition glow-hover">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-accent font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex flex-col items-end text-sm text-textMuted font-mono">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {exp.duration}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                    </div>
                  </div>
                  <p className="text-textMuted text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
