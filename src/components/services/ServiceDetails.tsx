import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { services } from '../../data/services';
import ServiceCard from './ServiceCard';
import SectionHeading from '../ui/SectionHeading';
import type { ServiceCategory } from '../../types';

const ServiceDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['branding', 'web-development', 'automation'].includes(hash)) {
      setActiveCategory(hash as ServiceCategory);
    }
  }, [location]);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'branding', label: 'Branding & Design' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'automation', label: 'Automation' }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === (activeCategory as ServiceCategory));

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category as ServiceCategory | 'all');
    navigate(`#${category === 'all' ? '' : category}`, { replace: true });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Services"
          subtitle="Tailored solutions for your industry needs."
          centered={true}
        />
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 md:px-6 py-3 md:py-4 rounded-full font-medium transition-all duration-300 text-sm md:text-base min-h-[48px] ${
                activeCategory === category.id
                  ? 'bg-accent-600 text-white shadow-glow'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 max-w-6xl mx-auto">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
            >
              <ServiceCard
                service={service}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;