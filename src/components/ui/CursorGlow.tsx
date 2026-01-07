import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorGlow: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 150,
    damping: 15,
  });

  const springY = useSpring(mouseY, {
    stiffness: 150,
    damping: 15,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(hover: none)').matches);
    };

    checkMobile();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 24);
      mouseY.set(e.clientY - 24);
    };

    if (isVisible && !isMobile) {
      document.documentElement.style.cursor = 'none';
    } else {
      document.documentElement.style.cursor = 'auto';
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);

    return () => {
      document.documentElement.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouseX, mouseY, isVisible, isMobile]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.detail === 3) {
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  if (isMobile) return null;
  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="fixed w-12 h-12 pointer-events-none z-50"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-orange rounded-full blur-lg mix-blend-screen shadow-lg shadow-brand-purple/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-orange rounded-full blur-3xl scale-150 mix-blend-lighten shadow-lg shadow-brand-orange/40"></div>
    </motion.div>
  );
};

export default CursorGlow;
