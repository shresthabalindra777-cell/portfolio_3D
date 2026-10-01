import React, { useEffect, useState } from 'react';

/**
 * AuroraBackground Component (React Bits & Reference Site inspired)
 * Generates ambient glowing orbs, subtle grid, and soft purple radiance.
 */
export const AuroraBackground = ({ children, className = '' }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handleMove = (e) => {
      // Calculate percentage for fluid background lighting
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className={`aurora-background-container ${className}`}>
      {/* Dynamic mouse ambient glow */}
      <div
        className="aurora-dynamic-glow"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`
        }}
      />

      {/* Atmospheric glowing orbs (like .landing-circle1 & .landing-circle2 in ref site) */}
      <div className="aurora-orb aurora-orb-1" />
      <div className="aurora-orb aurora-orb-2" />
      <div className="aurora-orb aurora-orb-3" />

      {/* Cybernetic subtle dot/grid pattern */}
      <div className="aurora-grid-overlay" />

      {/* Foreground content */}
      <div className="aurora-content-wrap">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;
