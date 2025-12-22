import React, { useEffect, useState } from 'react';

const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        // Reverted to Warm Earth color #C69060 (198, 144, 96)
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(198, 144, 96, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default CursorEffect;