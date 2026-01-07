import React from 'react';

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  techStack: Array<{ icon: React.ComponentType<{ className?: string }>; label: string }>;
  heroImageSrc?: string;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  children,
  title,
  subtitle,
  techStack,
  heroImageSrc,
}) => {
  return (
    <div className="min-h-screen bg-brand-dark relative overflow-hidden">
      {/* Atmospheric Blobs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/10 blur-[100px] rounded-full animate-blob pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-orange/10 blur-[120px] rounded-full animate-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-ubuntu font-bold mb-6 text-white leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-inter leading-relaxed">
              {subtitle}
            </p>

            {/* Tech Stack Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-brand-purple/50 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-brand-purple" />
                    <span className="text-sm font-ubuntu font-medium text-gray-300">
                      {tech.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Hero Image */}
            {heroImageSrc ? (
              <div className="mt-12 w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={heroImageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="mt-12 w-full aspect-video bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-gray-500 font-ubuntu">
                HERO IMAGE PLACEHOLDER
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      {children}
    </div>
  );
};

export default CaseStudyLayout;
