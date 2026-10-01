import React from 'react';

/**
 * ShinyText Component (React Bits inspired)
 * Adds an elegant shimmering light effect moving across text.
 */
export const ShinyText = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
  color = '#c2a4ff',
  shineColor = '#ffffff'
}) => {
  return (
    <span
      className={`shiny-text-root ${className} ${disabled ? 'disabled' : ''}`}
      style={{
        '--speed': `${speed}s`,
        '--color': color,
        '--shine-color': shineColor
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
