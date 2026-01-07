import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap } from 'lucide-react';

const RogueBot: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentDistance, setCurrentDistance] = useState(1000);
  const [isCaught, setIsCaught] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(hover: none)').matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Continuous mouse tracking with progressive fear response
  useEffect(() => {
    if (isMobile || isCaught) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      // Cancel any pending animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Use requestAnimationFrame for smooth updates
      animationFrameRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        // Bot center position (in viewport coordinates)
        const botCenterX = rect.left + rect.width / 2 + position.x;
        const botCenterY = rect.top + rect.height / 2 + position.y;

        // Mouse position
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Calculate distance
        const dx = botCenterX - mouseX;
        const dy = botCenterY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Store current distance for color calculation
        setCurrentDistance(distance);

        // Constants
        const FEAR_RADIUS = 300;    // Maximum fear influence range
        const PANIC_ZONE = 80;      // Distance where jitter kicks in
        const MAX_RADIUS = 300;     // Maximum distance bot can move from origin
        const BASE_SPEED = 200;     // Base movement speed

        // Progressive fear formula: repulsionStrength = Math.max(0, (300 - distance) / 300)
        // This gives us 0 (far) to 1 (touching)
        const repulsionStrength = Math.max(0, (FEAR_RADIUS - distance) / FEAR_RADIUS);

        if (repulsionStrength === 0) {
          // Too far to care - return to center
          setPosition({ x: 0, y: 0 });
        } else {
          // Calculate flee direction (normalized)
          const angle = Math.atan2(dy, dx);

          // Apply progressive speed based on repulsion strength
          // Low strength = slow drift, high strength = fast flee
          const fleeDistance = BASE_SPEED * repulsionStrength;

          let newX = Math.cos(angle) * fleeDistance;
          let newY = Math.sin(angle) * fleeDistance;

          // Add jitter when very close (< 80px)
          if (distance < PANIC_ZONE) {
            // Jitter amount scales with how close we are
            const jitterIntensity = Math.max(0, (PANIC_ZONE - distance) / PANIC_ZONE);
            const jitterAmount = 20 * jitterIntensity;
            newX += (Math.random() - 0.5) * jitterAmount;
            newY += (Math.random() - 0.5) * jitterAmount;
          }

          // Apply bounds: keep within MAX_RADIUS
          const distanceFromOrigin = Math.sqrt(newX * newX + newY * newY);
          if (distanceFromOrigin > MAX_RADIUS) {
            const scale = MAX_RADIUS / distanceFromOrigin;
            newX *= scale;
            newY *= scale;
          }

          setPosition({ x: newX, y: newY });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMobile, isCaught, position.x, position.y]);

  // Calculate bot state based on distance for visual feedback
  const getBotState = () => {
    if (isCaught) return 'caught';
    if (currentDistance < 100) return 'panic';    // < 100px: Red panic
    if (currentDistance < 250) return 'wary';     // 100-250px: Orange wary
    return 'calm';                                 // > 250px: Purple calm
  };

  const state = getBotState();

  const getColorClass = () => {
    if (isCaught) return 'text-green-500';
    if (state === 'panic') return 'text-red-500';
    if (state === 'wary') return 'text-brand-orange';
    return 'text-brand-purple';
  };

  const getScale = () => {
    if (isCaught) return 1.5;
    if (state === 'panic') return 1.3;
    if (state === 'wary') return 1.15;
    return 1;
  };

  const handleClick = () => {
    if (isMobile) {
      return;
    }

    setIsCaught(true);
    setShowConfetti(true);

    const alertMessage = [
      'SYSTEM BREACH DETECTED!',
      'You caught me! You win!',
      'Unauthorized access... Just kidding!',
      'Error 418: I am a teapot (and you caught me)'
    ];

    alert(alertMessage[Math.floor(Math.random() * alertMessage.length)]);

    setTimeout(() => {
      setIsCaught(false);
      setShowConfetti(false);
      setPosition({ x: 0, y: 0 });
      setCurrentDistance(1000);
    }, 3000);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center"
      style={{ minHeight: '120px' }}
    >
      <motion.div
        className="absolute cursor-pointer select-none"
        onClick={handleClick}
        animate={{
          x: position.x,
          y: position.y,
          scale: getScale(),
          rotate: state === 'panic' ? [0, -5, 5, -5, 5, 0] : 0,
        }}
        transition={{
          x: { type: 'spring', stiffness: state === 'panic' ? 500 : state === 'wary' ? 350 : 250, damping: state === 'panic' ? 12 : state === 'wary' ? 20 : 30 },
          y: { type: 'spring', stiffness: state === 'panic' ? 500 : state === 'wary' ? 350 : 250, damping: state === 'panic' ? 12 : state === 'wary' ? 20 : 30 },
          scale: { duration: 0.3, ease: 'easeOut' },
          rotate: { duration: state === 'panic' ? 0.1 : 0.3, repeat: state === 'panic' ? Infinity : 0 }
        }}
      >
        <div className="relative">
          <Bot
            className={`${getColorClass()} transition-colors duration-200 ${state === 'panic' ? 'animate-pulse' : ''}`}
            size={isMobile ? 24 : 32}
          />

          {state === 'panic' && !isMobile && (
            <motion.div
              className="absolute -top-10 -right-3"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <Zap className="text-yellow-400 animate-pulse" size={20} />
            </motion.div>
          )}

          {showConfetti && (
            <>
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-0 left-0 w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: ['#8B5CF6', '#F97316', '#10B981', '#F59E0B'][i % 4]
                  }}
                  initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  animate={{
                    opacity: 0,
                    scale: 0,
                    x: Math.cos(i * 22.5 * Math.PI / 180) * 60,
                    y: Math.sin(i * 22.5 * Math.PI / 180) * 60
                  }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              ))}
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RogueBot;
