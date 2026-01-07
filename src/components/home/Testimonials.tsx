import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "90% faster response time. Our AI assistant handles customer inquiries automatically, giving our team back hours every day to focus on strategy.",
    author: "Sarah Chen",
    role: "Operations Director, TechFlow",
    metric: "90% Faster Response Time"
  },
  {
    quote: "3X more qualified leads. We're booking 3x more sales calls without adding staff — their AI qualification system is a game changer.",
    author: "Michael Rodriguez",
    role: "Sales Manager, GrowthForce",
    metric: "3X More Qualified Leads"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-purple/5 border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-10"></div>
      <div className="absolute -right-40 top-1/2 w-[800px] h-[800px] bg-gradient-to-l from-brand-orange/20 to-brand-purple/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ubuntu font-bold mb-6 text-white">
            Client Success Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-inter">
            Real feedback from businesses we've transformed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 md:p-10 border border-white/10 hover:border-brand-purple/50 transition-all duration-300 group"
            >
              <div className="flex items-start mb-6">
                <div className="p-3 bg-brand-purple/20 rounded-lg border border-brand-purple/30 group-hover:bg-brand-purple/30 transition-all">
                  <Quote className="w-6 h-6 text-brand-purple" />
                </div>
              </div>

              <div className="text-brand-orange font-ubuntu font-bold text-lg mb-6">
                {testimonial.metric}
              </div>

              <p className="text-gray-300 mb-8 font-inter text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                <div className="w-1 h-12 bg-gradient-to-b from-brand-purple to-brand-orange rounded-full mr-4"></div>
                <div>
                  <div className="font-ubuntu font-bold text-white text-lg">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 font-inter">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
