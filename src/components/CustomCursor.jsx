import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: -100,
    y: -100
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });

      try {
        if (e.target && e.target.closest) {
          if (e.target.closest('a, button, h1, h2, h3, h4, h5, h6')) {
            setIsHovering(true);
          } else {
            setIsHovering(false);
          }
        }
      } catch (error) {
        // fail silently
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'difference' }}
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.15
      }}
    />
  );
};

export default CustomCursor;
