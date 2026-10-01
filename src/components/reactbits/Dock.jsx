import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import './Dock.css';

/**
 * DockItem Component
 * Automatically magnifies when mouse is near using continuous spring physics.
 */
export const DockItem = ({
  children,
  className = '',
  onClick,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  ariaLabel,
  mouseX,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  distance = 180,
  magnification = 68,
  baseItemSize = 48
}) => {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
    return val - rect.x - rect.width / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  const size = useSpring(targetSize, spring);

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      aria-label={ariaLabel}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={`dock-item ${className}`}
      tabIndex={0}
      role={href ? 'link' : 'button'}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { isHovered })
          : child
      )}
    </Component>
  );
};

/**
 * DockLabel Component
 * Displays animated tooltip directly above hovered/focused icon.
 */
export const DockLabel = ({ children, className = '', isHovered }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on('change', (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 6, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 4, x: '-50%' }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * DockIcon Component
 * Scalable icon container inside DockItem.
 */
export const DockIcon = ({ children, className = '' }) => {
  return <div className={`dock-icon ${className}`}>{children}</div>;
};

/**
 * Dock Component (React Bits)
 * Renders an interactive, magnifiable macOS-style dock.
 */
export const Dock = ({
  items = [],
  children,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 68,
  distance = 180,
  panelHeight = 64,
  baseItemSize = 48
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <nav
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`dock-panel ${className}`}
      style={{ height: panelHeight }}
      role="toolbar"
      aria-label="Interactive Social Dock"
    >
      {children
        ? React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, {
                  mouseX,
                  spring,
                  distance,
                  magnification,
                  baseItemSize
                })
              : child
          )
        : items.map((item, idx) => (
            <DockItem
              key={item.label || item.name || idx}
              href={item.href || item.url}
              target={item.target || '_blank'}
              rel={item.rel || 'noopener noreferrer'}
              onClick={item.onClick}
              ariaLabel={item.label || item.name}
              mouseX={mouseX}
              spring={spring}
              distance={distance}
              magnification={magnification}
              baseItemSize={baseItemSize}
            >
              <DockLabel>{item.label || item.name}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          ))}
    </nav>
  );
};

export default Dock;
