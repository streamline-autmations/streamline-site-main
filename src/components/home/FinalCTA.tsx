import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute -right-40 top-1/2 w-[800px] h-[800px] bg-gradient-to-l from-brand-orange/30 to-brand-purple/30 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] bg-gradient-to-r from-brand-purple/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-8">
            <span className="text-sm md:text-base font-ubuntu font-bold text-brand-orange bg-brand-orange/10 px-4 py-2 rounded-full border border-brand-orange/20">
              Ready to Transform?
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-ubuntu font-bold text-white mb-8 leading-tight">
            Unlock your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-glow">
              full potential
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-12 font-inter leading-relaxed max-w-2xl mx-auto">
            Stop letting manual tasks slow you down. Let our AI-powered systems handle the work while you focus on growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/contact"
              variant="orange"
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 group"
            >
              Book Your System Audit
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              to="/portfolio"
              variant="ghost"
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5"
            >
              See Our Work
            </Button>
          </div>

          <p className="text-sm md:text-base text-gray-500 mt-10 font-inter">
            Free consultation • No commitment • Results-driven approach
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent"></div>
    </section>
  );
};

export default FinalCTA;
