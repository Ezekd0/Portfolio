import { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import { ProjectFilterContext } from '../App';

const projectsData = [
  { id:1, title:'AI Customer Support Bot', desc:'Intelligent chatbot with NLP, sentiment analysis', tech:['Python','FastAPI','OpenAI'], category:'AI', demo:'#', github:'#' },
  { id:2, title:'Analytics Dashboard', desc:'Real-time data visualization for business metrics', tech:['Pandas','React','D3'], category:'Data Science', demo:'#', github:'#' },
  { id:3, title:'Ecom Backend API', desc:'Scalable REST API with authentication and rate limiting', tech:['Django','PostgreSQL','Redis'], category:'Backend', demo:'#', github:'#' },
  { id:4, title:'Automated ML Pipeline', desc:'End-to-end model training automation', tech:['Python','Scikit-learn','Airflow'], category:'Automation', demo:'#', github:'#' },
  { id:5, title:'Portfolio AI Agent', desc:'Interactive AI assistant integration', tech:['React','LangChain'], category:'AI', demo:'#', github:'#' },
  { id:6, title:'Scientific MATLAB Suite', desc:'Numerical computing tool for engineering', tech:['MATLAB','Simulink'], category:'Data Science', demo:'#', github:'#' },
  { id:7, title:'Ibom Blockchain Xperience', desc:'Official platform for West Africa\'s largest blockchain movement, facilitating community events and Web3 ecosystem integration.', tech:['React','Tailwind CSS','JavaScript','Web3'], category:'Web3', demo:'https://www.ibomblockchain.com/', github:'#' },
];

const Projects = () => {
  const { activeFilter, setActiveFilter, projectsRef } = useContext(ProjectFilterContext);
  const filtered = useMemo(() => activeFilter === 'All' ? projectsData : projectsData.filter(p => p.category === activeFilter), [activeFilter]);
  const filters = ['All', 'AI', 'Backend', 'Data Science', 'Automation', 'Web3'];

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Featured <span className="text-accent">Innovations</span></h2>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => <button key={f} onClick={() => setActiveFilter(f)} className={`px-5 py-2 rounded-full transition ${activeFilter === f ? 'bg-accent text-navy' : 'bg-secondary text-textMuted hover:bg-accent/20'}`}>{f}</button>)}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map(proj => (
            <motion.div whileHover={{ y: -6 }} key={proj.id} className="bg-secondary rounded-xl overflow-hidden border border-accent/20 hover:border-accent/70 transition-all">
              <div className="h-40 bg-gradient-to-br from-accent/20 to-navy flex items-center justify-center"><Code size={48} className="text-accent/60" /></div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-textMuted text-sm mb-3">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">{proj.tech.map(t => <span key={t} className="text-xs bg-navy px-2 py-1 rounded-full text-accent">{t}</span>)}</div>
                <div className="flex gap-4">
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-accent text-sm hover:underline">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-textMuted text-sm hover:underline">
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
