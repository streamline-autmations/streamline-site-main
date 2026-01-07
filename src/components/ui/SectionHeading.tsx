import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 px-4 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ubuntu font-bold mb-6 text-white">
        {title}
      </h2>
      {subtitle && <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-inter leading-relaxed">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;