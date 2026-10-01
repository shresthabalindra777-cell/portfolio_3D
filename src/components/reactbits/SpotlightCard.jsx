import React, { useRef, useState } from 'react';

/**
 * SpotlightCard Component (React Bits inspired)
 * Interactive card with a dynamic mouse-following radial spotlight.
 */
export const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(194, 164, 255, 0.15)',
  spotlightSize = 350,
  onClick
}) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`spotlight-card ${className}`}
    >
      <div
        className="spotlight-overlay"
        style={{
          opacity,
          background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
        }}
      />
      <div className="spotlight-content">{children}</div>
    </div>
  );
};

export default SpotlightCard;
