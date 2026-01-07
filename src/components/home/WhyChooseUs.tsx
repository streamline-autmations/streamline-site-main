import React from 'react';
import { TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-10"></div>
      <div className="absolute -left-40 top-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-purple/20 to-brand-orange/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ubuntu font-bold mb-6 text-white">
              Built for ROI, Not Just Looks
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-inter max-w-3xl mx-auto">
              Real business value. Measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Reduce Operational Costs */}
            <div className="bg-[#050505] border border-white/10 rounded-2xl p-8 hover:border-brand-purple/50 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-14 h-14 bg-brand-purple/10 border border-brand-purple/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-brand-purple" />
                </div>
                <h3 className="text-2xl font-ubuntu font-bold text-white mb-3">
                  Reduce Operational Costs
                </h3>
              </div>

              <p className="text-gray-400 font-inter leading-relaxed">
                Automate repetitive admin to cut overhead by up to 40%.
              </p>
            </div>

            {/* Card 2 - Enterprise Reliability */}
            <div className="bg-[#050505] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-ubuntu font-bold text-white mb-3">
                  Enterprise Reliability
                </h3>
              </div>

              <p className="text-gray-400 font-inter leading-relaxed">
                99.9% Uptime with Supabase & n8n. Your business never goes offline.
              </p>
            </div>

            {/* Card 3 - Launch in Weeks */}
            <div className="bg-[#050505] border border-white/10 rounded-2xl p-8 hover:border-brand-orange/50 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-14 h-14 bg-brand-orange/10 border border-brand-orange/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-ubuntu font-bold text-white mb-3">
                  Launch in Weeks
                </h3>
              </div>

              <p className="text-gray-400 font-inter leading-relaxed">
                We deploy custom infrastructure faster than traditional agencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
