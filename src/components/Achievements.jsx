import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Award, Bot, Code, Clock } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const stats = [
    { icon: <Award />, label: 'Projects Completed', value: 28 },
    { icon: <Bot />, label: 'AI Bots Built', value: 12 },
    { icon: <Code />, label: 'Technologies Learned', value: 24 },
    { icon: <Clock />, label: 'Coding Hours', value: 4150 },
  ];
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-5 glass-card rounded-2xl">
              <div className="text-accent flex justify-center mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold text-white">{inView && <CountUp end={stat.value} duration={2.2} />}+</div>
              <div className="text-textMuted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
