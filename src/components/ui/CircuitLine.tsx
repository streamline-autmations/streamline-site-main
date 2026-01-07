import React from 'react';

interface CircuitLineProps {
  className?: string;
  variant?: 'fast' | 'slow-pulse';
}

const CircuitLine: React.FC<CircuitLineProps> = ({ className = '', variant = 'fast' }) => {
  if (variant === 'slow-pulse') {
    return (
      <div className={`h-[1px] w-full bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent animate-pulse-slow ${className}`}>
      </div>
    );
  }

  return (
    <div className={`h-[1px] w-full bg-white/5 relative overflow-hidden ${className}`}>
      <div className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-0 animate-beam"></div>
    </div>
  );
};

export default CircuitLine;
