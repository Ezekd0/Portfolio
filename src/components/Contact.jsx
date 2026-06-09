import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message received! Thank you, ${form.name}. Victor will get back to you soon.`);
  };
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Let's Connect</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Mail className="text-accent" />
                </div>
                <div>victorclementu222@gmail.com</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Phone className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span>08107989032</span>
                  <span>07065888167</span>
                </div>
              </div>
              <div className="flex gap-5 mt-6">
                <a href="https://github.com/Ezekd0" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hover:text-accent transition">
                  <Github />
                </a>
                <a href="#" aria-label="LinkedIn profile" className="hover:text-accent transition">
                  <Linkedin />
                </a>
                <a href="#" aria-label="Direct message" className="hover:text-accent transition">
                  <MessageCircle />
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              className="w-full bg-secondary p-3 rounded-lg border border-accent/20 focus:border-accent outline-none text-white transition" 
              placeholder="Name" 
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} 
              required 
            />
            <input 
              className="w-full bg-secondary p-3 rounded-lg border border-accent/20 focus:border-accent outline-none text-white transition" 
              placeholder="Email" 
              type="email" 
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} 
              required 
            />
            <input 
              className="w-full bg-secondary p-3 rounded-lg border border-accent/20 focus:border-accent outline-none text-white transition" 
              placeholder="Subject" 
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })} 
            />
            <textarea 
              rows={4} 
              className="w-full bg-secondary p-3 rounded-lg border border-accent/20 focus:border-accent outline-none text-white transition" 
              placeholder="Message" 
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })} 
              required
            ></textarea>
            <button type="submit" className="bg-accent text-navy px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-accent/30 transition">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
