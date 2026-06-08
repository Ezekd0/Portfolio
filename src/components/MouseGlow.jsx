import { useEffect, useState } from 'react';

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-50 rounded-full mix-blend-screen"
      style={{
        left: position.x - 150,
        top: position.y - 150,
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(46,204,113,0.2) 0%, rgba(46,204,113,0) 70%)',
        transition: 'transform 0.05s linear'
      }}
    />
  );
};

export default MouseGlow;
