import React from 'react';
import Hero from '../components/home/Hero';
import LogoMarquee from '../components/ui/LogoMarquee';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FeaturedProject from '../components/ui/FeaturedProject';
import HighlightServices from '../components/home/HighlightServices';
import Testimonials from '../components/home/Testimonials';
import FinalCTA from '../components/home/FinalCTA';
import CircuitLine from '../components/ui/CircuitLine';
import MultiLineDivider from '../components/ui/MultiLineDivider';
import SectionHeading from '../components/ui/SectionHeading';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Atmospheric Orbs - Extended Down the Page */}
      <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-brand-orange/10 blur-[100px] rounded-full animate-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-brand-purple/10 blur-[120px] rounded-full animate-blob pointer-events-none" style={{ animationDelay: '4s' }}></div>

      <Hero />
      <div className="pt-16 md:pt-24 text-center mb-12">
        <p className="text-sm md:text-base font-bold text-gray-600 uppercase tracking-[0.2em]">
          POWERED BY NEXT-GEN INFRASTRUCTURE
        </p>
      </div>
      <LogoMarquee />
      <div className="py-8 md:py-12">
        <CircuitLine variant="fast" />
      </div>
      <WhyChooseUs />
      <MultiLineDivider />

      {/* Featured Builds Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-10"></div>
        <div className="absolute -right-40 top-1/3 w-[800px] h-[800px] bg-gradient-to-l from-brand-purple/20 to-brand-orange/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading
            title="Featured Builds"
            subtitle="Real systems solving real business problems"
            centered={true}
            className="max-w-4xl mx-auto mb-12 md:mb-16"
          />

          <div className="space-y-8 md:space-y-12 max-w-7xl mx-auto">
            {/* Project 1: BLOM Cosmetics */}
            <FeaturedProject
              title="E-commerce Command Center"
              subtitle="End-to-end digital retail system. Features custom inventory synchronization, automated stock alerts, and a unified CRM for managing reviews and orders."
              tags={['Full-Stack Retail', 'Inventory Automation', 'Admin Dashboard']}
              imageSrc="https://res.cloudinary.com/dnlgohkcc/image/upload/v1765468469/Untitled_design_50_p3ibsc.png"
              color="brand-purple"
              align="left"
              linkTo="/portfolio/blom-cosmetics"
            />

            {/* Project 2: RecklessBear Apparel */}
            <FeaturedProject
              title="Custom Website & Quote Engine"
              subtitle="A modern, customer-facing website integrated with AI production infrastructure. Features product customization, automated quoting, and real-time job tracking."
              tags={['Web Design', 'AI Booking Agent', 'Production Workflow']}
              imageSrc="https://res.cloudinary.com/dnlgohkcc/image/upload/v1765468470/Untitled_design_51_zuhyoc.png"
              color="brand-orange"
              align="right"
              linkTo="/portfolio/recklessbear-apparel"
              objectFit="contain"
              containerHeight="h-[600px] md:h-[750px]"
            />
          </div>
        </div>
      </section>

      <div className="py-8 md:py-12">
        <CircuitLine variant="fast" />
      </div>
      <HighlightServices />
      <MultiLineDivider />
      <Testimonials />
      <div className="py-8 md:py-12">
        <CircuitLine variant="slow-pulse" />
      </div>
      <FinalCTA />
    </div>
  );
};

export default Home;