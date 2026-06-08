import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const Leadership = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const timeline = [
    { icon: <Briefcase />, year: '2023', title: 'Co-Founder of Ideal Technology', desc: 'Launched tech startup focusing on AI automation and backend systems for SMEs.' },
    { icon: <Lightbulb />, year: '2024', title: 'Product Innovation Lead', desc: 'Developed AI-powered customer support bots used by 10+ companies.' },
    { icon: <Rocket />, year: '2025', title: 'Technology Initiatives', desc: 'Scaling ML-driven data analytics dashboards and scientific computing tools.' },
    { icon: <TrendingUp />, year: 'Future', title: 'Global AI Research', desc: 'Expanding into deep learning and AI agents for enterprise.' }
  ];
  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl font-bold text-center mb-4">Leadership & <span className="text-accent">Entrepreneurship</span></h2>
          <p className="text-textMuted text-center max-w-2xl mx-auto mb-12">Co-Founder of Ideal Technology — building the future of AI-driven solutions.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="bg-secondary/60 backdrop-blur-sm p-6 rounded-2xl border border-accent/20 hover:border-accent/60 transition-all glow-hover">
                <div className="text-accent mb-3">{item.icon}</div>
                <div className="text-sm text-accent font-mono">{item.year}</div>
                <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                <p className="text-textMuted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
