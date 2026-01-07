import React from 'react';
import { services } from '../../data/services';
import ServiceCard from '../services/ServiceCard';
import SectionHeading from '../ui/SectionHeading';

const HighlightServices: React.FC = () => {
  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute -left-40 top-1/4 w-[800px] h-[800px] bg-gradient-to-r from-brand-purple/20 to-brand-orange/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Our Services"
          subtitle="Smart solutions that save time and boost your business growth"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightServices;