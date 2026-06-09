import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Experience', 'Leadership', 'Tech', 'Projects', 'Contact'];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md border-b border-accent/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-white">VICTOR</span><span className="text-accent">.</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="text-textMuted hover:text-accent transition font-medium">{link}</button>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-lg border-t border-accent/20 py-4">
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="block w-full text-left px-6 py-3 text-textMuted hover:text-accent">{link}</button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
