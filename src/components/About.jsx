import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6">Architect of <span className="text-accent">Intelligent Systems</span></h2>
            <div className="space-y-4 text-textMuted leading-relaxed">
              <p>Victor Clement Udoma is a Python Developer, Backend Engineer, and AI Bot Developer with a passion for building robust digital ecosystems. As Co-Founder of Ideal Technology, he merges entrepreneurship with engineering to craft AI-driven solutions.</p>
              <p>Currently pursuing Data Science, Victor utilizes MATLAB, Python, and modern backend frameworks to solve complex problems. His mission: democratize AI tools for African enterprises and beyond.</p>
              <p>Vision: "Build technology that thinks ahead — creating systems that not only compute but anticipate human needs."</p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="border-l-4 border-accent pl-4"><p className="text-2xl font-bold text-white">6+</p><p className="text-textMuted">Projects Shipped</p></div>
              <div className="border-l-4 border-accent pl-4"><p className="text-2xl font-bold text-white">12+</p><p className="text-textMuted">AI Bots Deployed</p></div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-accent/30"><img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-auto max-w-sm rounded-2xl" alt="Victor working" /></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
