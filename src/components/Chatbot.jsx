import { useState, useContext } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { ProjectFilterContext } from '../App';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'ai', text: "Hi! I'm IDEAL AI. Ask me about Victor, projects, technologies, or Ideal Technology!" }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { setActiveFilter, scrollToProjects, scrollToContact, scrollToAbout, scrollToTech, scrollToLeadership, scrollToExperience } = useContext(ProjectFilterContext);

  const getReply = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.startsWith('hi') || lower.startsWith('hello') || lower.startsWith('hey') || lower.includes('greetings') || lower.includes('morning') || lower.includes('afternoon')) {
      return "Hello! I'm IDEAL AI. How can I help you learn about Victor's projects, background at BYU/UniUyo, certifications, or Ideal Technology today?";
    }
    if (lower.includes('education') || lower.includes('study') || lower.includes('byu') || lower.includes('university of uyo') || lower.includes('school')) {
      return "Victor is an online student of BYU studying Software Engineering, and also a Data Science student at the University of Uyo, based in Uyo, Nigeria.";
    }
    if (lower.includes('certificate') || lower.includes('cert') || lower.includes('coursera')) {
      return "Victor has certified credentials in UI/UX, Python, and Automation with Coursera.";
    }
    if (lower.includes('gdg') || lower.includes('google developer group')) {
      return "Victor is an active member of Google Developer Groups (GDG) and a member of the largest blockchain movement in West Africa, the Ibom Blockchain Xperience.";
    }
    if (lower.includes('who is victor')) {
      scrollToAbout();
      return "Victor Clement Udoma is a Python Dev, Backend Engineer, AI Bot Developer, Data Science student & Co-Founder of Ideal Technology. Scroll to about!";
    }
    if (lower.includes('experience') || lower.includes('work') || lower.includes('job') || lower.includes('career') || lower.includes('aptech') || lower.includes('freelance') || lower.includes('brain')) {
      scrollToExperience();
      return "Victor worked as a Software Engineer at Brain, does freelance backend & AI integration, and interned with Aptech. Check out the Experience timeline, I've scrolled there for you!";
    }
    if (lower.includes('technologies') || lower.includes('stack') || lower.includes('skills')) {
      scrollToTech();
      return "Victor uses Python, FastAPI, Django, R, MATLAB, Pandas, Machine Learning, PostgreSQL & more! Check the Tech Stack section.";
    }
    if (lower.includes('ideal technology')) {
      scrollToLeadership();
      return "Ideal Technology is an innovative startup building AI automation & scalable backend solutions for businesses. Victor co-founded it to drive digital transformation.";
    }
    if (lower.includes('projects') && lower.includes('backend')) {
      setActiveFilter('Backend');
      scrollToProjects();
      return "Showing backend projects! Check the projects section filtered for Backend.";
    }
    if (lower.includes('ai projects') || (lower.includes('projects') && lower.includes('ai'))) {
      setActiveFilter('AI');
      scrollToProjects();
      return "Filtering AI projects! See the latest AI bots & assistants in the projects grid.";
    }
    if (lower.includes('web3') || lower.includes('blockchain') || lower.includes('ibom') || lower.includes('b2trendz') || lower.includes('edimax') || lower.includes('crypto')) {
      setActiveFilter('Web3');
      scrollToProjects();
      return "Showing Web3 and blockchain projects, including the Ibom Blockchain Xperience and B2TRENDZ! Check the projects section.";
    }
    if (lower.includes('thought starters') || lower.includes('dailystarters') || lower.includes('devotion') || lower.includes('bible')) {
      setActiveFilter('Backend');
      scrollToProjects();
      return "Showing the Thought Starters devotion platform! Check the projects section.";
    }
    if (lower.includes('kinnex') || lower.includes('investment') || lower.includes('smart investments')) {
      setActiveFilter('Backend');
      scrollToProjects();
      return "Showing the Kinnex Ltd investment platform! Check the projects section.";
    }
    if (lower.includes('jumia') || lower.includes('ecommerce') || lower.includes('e-commerce') || lower.includes('shop')) {
      setActiveFilter('Backend');
      scrollToProjects();
      return "Showing the Jumia E-commerce Clone! Check the projects section.";
    }
    if (lower.includes('studyverse') || lower.includes('study-verse') || lower.includes('study partner')) {
      setActiveFilter('AI');
      scrollToProjects();
      return "Showing StudyVerse Connect with its AI study buddy! Check the projects section.";
    }
    if (lower.includes('resume')) {
      return "You can download Victor's resume from the Hero section (Download Resume button).";
    }
    if (lower.includes('contact') || lower.includes('email') || lower.includes('message')) {
      scrollToContact();
      return "Navigate to Contact section → Use form or social links.";
    }
    return "I can help navigate: say 'show backend projects', 'AI projects', 'technologies', 'who is Victor', 'resume', or 'contact'. Try it!";
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userText = input;
    setInput('');

    const userMsg = { sender: 'user', text: userText };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userText }),
      });

      if (!res.ok) {
        throw new Error('API request failed');
      }

      const data = await res.json();
      const aiMsg = { sender: 'ai', text: data.reply };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.warn("API chatbot failed, falling back to rule-based parser:", error);
      const fallbackReply = getReply(userText);
      const aiMsg = { sender: 'ai', text: fallbackReply };
      setMessages(prev => [...prev, aiMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!open && (
        <button 
          onClick={() => setOpen(true)} 
          aria-label="Open AI Assistant"
          className="fixed bottom-6 right-6 bg-accent p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition cursor-pointer"
        >
          <MessageCircle className="text-navy" size={28} />
        </button>
      )}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-secondary/95 backdrop-blur-md rounded-2xl border border-accent/30 shadow-2xl z-50 flex flex-col max-h-[500px]">
          <div className="flex justify-between items-center p-4 border-b border-accent/20">
            <span className="font-bold text-accent">IDEAL AI</span>
            <button onClick={() => setOpen(false)} aria-label="Close AI Assistant" className="text-textMuted hover:text-white transition">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[300px]">
            {messages.map((m, i) => (
              <div 
                key={i} 
                className={`p-2 rounded-lg max-w-[85%] ${
                  m.sender === 'ai' 
                    ? 'bg-navy text-white self-start' 
                    : 'bg-accent/20 text-accent self-end ml-auto'
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="p-2 rounded-lg max-w-[85%] bg-navy text-textMuted self-start italic animate-pulse">
                IDEAL AI is thinking...
              </div>
            )}
          </div>
          <div className="p-3 border-t border-accent/20 flex gap-2">
            <input 
              className="flex-1 bg-navy rounded-lg px-3 py-2 text-sm outline-none text-white border border-accent/10 focus:border-accent transition" 
              placeholder="Ask me..." 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              onKeyDown={e => e.key === 'Enter' && sendMessage()} 
            />
            <button onClick={sendMessage} className="text-accent hover:text-white transition" aria-label="Send message">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
