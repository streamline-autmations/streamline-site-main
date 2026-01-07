import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`px-4 py-16 md:py-24 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Section;
