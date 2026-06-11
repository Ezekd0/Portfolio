import { useContext, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, X, Sparkles } from 'lucide-react';
import { ProjectFilterContext } from '../App';

const projectsData = [
  { id:1, title:'B2TRENDZ', desc:'A reliable cryptocurrency and gift card exchange platform offering the best trading rates, entertainment blog updates, and events.', tech:['React','Tailwind CSS','Node.js','Web3'], category:'Web3', demo:'https://www.b2trendz.com/', github:'https://github.com/Ezekd0', image:'/b2trendz.png' },
  { id:2, title:'Kinnex Ltd', desc:'A strategic investment solutions platform offering tailored financial goals, smart asset growth tracker, and expert guidance.', tech:['React','Tailwind CSS','Vite','Chart.js'], category:'Backend', demo:'https://kinnex-rho.vercel.app/', github:'https://github.com/Ezekd0', image:'/kinnex.png' },
  { id:3, title:'Jumia E-commerce Clone', desc:'A high-fidelity replica of the Jumia e-commerce catalog page, featuring category filter sliders, dynamic cart management, and interactive product highlights.', tech:['React','Tailwind CSS','Vite','JavaScript'], category:'Backend', demo:'https://real-e-commerce-ashy.vercel.app/', github:'https://github.com/Ezekd0', image:'/ecommerce.png' },
  { id:4, title:'StudyVerse Connect', desc:'An online educational matchmaker and landing page designed to help students connect with study partners and get helper assistance from a custom AI study buddy.', tech:['React','Tailwind CSS','Vite','Gemini API'], category:'AI', demo:'https://study-verse-connect.vercel.app/landingpage', github:'https://github.com/Ezekd0', image:'/studyverse.png' },
  { id:5, title:'UniUyo Printing Press', desc:'A digital library and publications platform for the University of Uyo, enabling access to e-books, research materials, academic journals, and purchase portals.', tech:['React','Tailwind CSS','Vite','Payment Gateway'], category:'Backend', demo:'https://uniuyoprintingpress.com/home', github:'https://github.com/Ezekd0', image:'/uniuyopress.png' },
  { id:6, title:'Scientific MATLAB Suite', desc:'Numerical computing tool for engineering', tech:['MATLAB','Simulink'], category:'Data Science', demo:'#', github:'https://github.com/Ezekd0' },
  { id:7, title:'Ibom Blockchain Xperience', desc:'Official platform for West Africa\'s largest blockchain movement, facilitating community events and Web3 ecosystem integration.', tech:['React','Tailwind CSS','JavaScript','Web3'], category:'Web3', demo:'https://www.ibomblockchain.com/', github:'https://github.com/Ezekd0', image:'/ibomblockchain.png' },
  { id:8, title:'Thought Starters', desc:'A daily devotion and Christian reflection platform offering morning spiritual tonics, daily scriptures, and faith teachings.', tech:['React','Tailwind CSS','JavaScript','Vite'], category:'Backend', demo:'https://www.dailystarters.org/', github:'https://github.com/Ezekd0', image:'/dailystarters.png' },
];

const Projects = () => {
  const { activeFilter, setActiveFilter, projectsRef } = useContext(ProjectFilterContext);
  const filtered = useMemo(() => activeFilter === 'All' ? projectsData : projectsData.filter(p => p.category === activeFilter), [activeFilter]);
  const filters = ['All', 'AI', 'Backend', 'Data Science', 'Automation', 'Web3'];

  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewTitle, setPreviewTitle] = useState('');

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Featured <span className="text-accent">Innovations</span></h2>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => <button key={f} onClick={() => setActiveFilter(f)} className={`px-5 py-2 rounded-full transition ${activeFilter === f ? 'bg-accent text-navy' : 'bg-secondary text-textMuted hover:bg-accent/20'}`}>{f}</button>)}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map(proj => (
            <motion.div whileHover={{ y: -6 }} key={proj.id} className="bg-secondary rounded-xl overflow-hidden border border-accent/20 hover:border-accent/70 transition-all flex flex-col justify-between">
              <div>
                <div className="h-40 relative overflow-hidden bg-navy flex items-center justify-center">
                  {proj.image ? (
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-300" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-navy flex items-center justify-center">
                      <Code size={48} className="text-accent/60" />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                  <p className="text-textMuted text-sm mb-3">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">{proj.tech.map(t => <span key={t} className="text-xs bg-navy px-2 py-1 rounded-full text-accent">{t}</span>)}</div>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-navy/40 mt-auto">
                <div className="flex items-center justify-between w-full mt-4">
                  <div className="flex gap-4">
                    {proj.demo !== '#' ? (
                      <button 
                        onClick={() => { setPreviewUrl(proj.demo); setPreviewTitle(proj.title); }}
                        className="flex items-center gap-1 text-accent text-sm hover:underline cursor-pointer font-semibold"
                      >
                        <Sparkles size={14} /> Preview
                      </button>
                    ) : (
                      <span className="text-textMuted text-sm italic">Backend project</span>
                    )}
                  </div>
                  {proj.demo !== '#' && (
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-textMuted text-xs hover:text-accent transition">
                      Launch <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Modal Overlay */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/85 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
            onClick={() => setPreviewUrl(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-secondary w-full max-w-5xl h-[80vh] rounded-2xl border border-accent/30 flex flex-col overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-accent/20">
                <span className="font-bold text-accent">{previewTitle}</span>
                <div className="flex items-center gap-4">
                  <a 
                    href={previewUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs bg-accent/10 border border-accent/30 text-accent px-3 py-1 rounded-md hover:bg-accent hover:text-navy transition flex items-center gap-1"
                  >
                    <ExternalLink size={12} /> Open in new tab
                  </a>
                  <button onClick={() => setPreviewUrl(null)} className="text-textMuted hover:text-white transition cursor-pointer">
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Viewport */}
              <div className="flex-1 bg-white relative">
                <iframe 
                  src={previewUrl} 
                  title={previewTitle} 
                  className="w-full h-full border-0" 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
