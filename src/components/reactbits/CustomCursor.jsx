import React, { useEffect, useState } from 'react';

/**
 * CustomCursor Component
 * High-end dual cursor: a sharp center dot and a trailing glowing ring
 * that expands and morphs when hovering over clickable/interactive elements.
 */
export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'text' | 'hidden'
  const [isTouchDevice] = useState(() => 
    typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  );

  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check hovered element
      const target = e.target;
      const clickable = target.closest('a, button, [data-cursor="pointer"], .interactive-card, input, textarea');
      const textElement = target.closest('p, h1, h2, h3, h4, h5, h6, span');

      if (clickable) {
        setCursorState('hover');
      } else if (textElement && !clickable) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeaveWindow = () => {
      setCursorState('hidden');
    };

    const handleMouseEnterWindow = () => {
      setCursorState('default');
    };

    // Smooth spring physics for the trailing ring
    const render = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22
      }));
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouchDevice, pos.x, pos.y]);

  if (isTouchDevice || cursorState === 'hidden') return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className={`custom-cursor-dot ${cursorState}`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
        }}
      />
      {/* Trailing Ambient Aura Ring */}
      <div
        className={`custom-cursor-ring ${cursorState}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`
        }}
      />
    </>
  );
};

export default CustomCursor;
