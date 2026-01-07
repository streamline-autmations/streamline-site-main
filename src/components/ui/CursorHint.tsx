import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

const CursorHint: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [playIconAnimation, setPlayIconAnimation] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const iconAnimationTimer = setTimeout(() => {
      setPlayIconAnimation(true);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    const unmountTimer = setTimeout(() => {
      setShouldRender(false);
    }, 7000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(iconAnimationTimer);
      clearTimeout(hideTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-8 right-8 z-40 pointer-events-none"
        >
          <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3 backdrop-blur-md shadow-lg">
            <motion.div
              animate={
                playIconAnimation
                  ? {
                      scale: [1, 0.8, 1, 0.8, 1, 0.8, 1],
                    }
                  : {}
              }
              transition={{
                duration: 0.9,
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
                ease: 'easeInOut',
              }}
            >
              <MousePointer2 className="w-4 h-4 text-brand-purple" />
            </motion.div>
            <span className="text-xs text-gray-400 font-inter whitespace-nowrap">
              Triple-click to toggle fx
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CursorHint;
