import React from 'react';

interface SectionDividerProps {
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full py-8 md:py-12 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-purple via-40% via-brand-orange via-60% to-transparent"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
