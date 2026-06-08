import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Dr. Jane Mwangi', role: 'Tech Lead', text: 'Victor’s backend architecture skills are outstanding. He delivered a robust API that scaled our platform seamlessly.' },
  { name: 'IdealTech Partner', role: 'CTO', text: 'His AI bot development reduced our customer support tickets by 45%. A true innovator.' },
  { name: 'Data Science Prof', role: 'University', text: 'MATLAB and Python expertise is next-level; Victor brings research into production.' }
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((idx + 1) % testimonials.length);
  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length);
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <div className="glass-card max-w-3xl mx-auto p-8 rounded-2xl relative">
          <Quote className="text-accent/30 absolute top-6 left-6" size={48} />
          <div className="text-center py-4">
            <p className="text-white text-lg italic mb-6">“{testimonials[idx].text}”</p>
            <h4 className="text-accent font-bold">{testimonials[idx].name}</h4>
            <p className="text-textMuted text-sm">{testimonials[idx].role}</p>
            <div className="flex justify-center gap-4 mt-6">
              <button onClick={prev} aria-label="Previous testimonial" className="text-accent hover:text-white transition">
                <ChevronLeft />
              </button>
              <button onClick={next} aria-label="Next testimonial" className="text-accent hover:text-white transition">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
