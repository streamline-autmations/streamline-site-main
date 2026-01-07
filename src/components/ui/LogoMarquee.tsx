import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Atom, Database, Workflow, Bot, CreditCard, Mic, Zap, Github, Cloud } from 'lucide-react';

interface TechLogo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const techStack: TechLogo[] = [
  { icon: Bot, label: 'OpenAI' },
  { icon: Atom, label: 'React' },
  { icon: Database, label: 'Supabase' },
  { icon: Workflow, label: 'n8n' },
  { icon: CreditCard, label: 'Stripe' },
  { icon: Github, label: 'GitHub' },
  { icon: Cloud, label: 'Render' },
  { icon: Mic, label: 'Voiceflow' },
  { icon: Zap, label: 'Vite' },
];

const LogoMarquee: React.FC = () => {
  const infiniteLogos = [...techStack, ...techStack, ...techStack, ...techStack];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }
        }
        .marquee-container:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <div ref={ref} className="w-full overflow-hidden py-12 md:py-16 relative">
        {/* Gradient Masks */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          }}
        />

        {/* Scrolling Track */}
        <div className="marquee-container relative overflow-hidden">
          <div className="flex w-max animate-scroll">
            {infiniteLogos.map((tech, index) => (
              <LogoItem
                key={index}
                icon={tech.icon}
                label={tech.label}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

interface LogoItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  index: number;
  isInView: boolean;
}

const LogoItem: React.FC<LogoItemProps> = ({ icon: Icon, label, index, isInView }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-3 mx-12 min-w-[100px] group cursor-default"
      initial={{ filter: 'grayscale(100%)', opacity: 0.5 }}
      animate={isInView ? {
        filter: ['grayscale(100%)', 'grayscale(0%)', 'grayscale(100%)'],
        opacity: [0.5, 1, 0.5]
      } : {}}
      transition={{
        duration: 1,
        delay: index * 0.1,
        times: [0, 0.5, 1]
      }}
    >
      <Icon className="h-10 w-10 text-white transition-all duration-300
                       group-hover:!grayscale-0 group-hover:!opacity-100
                       group-hover:scale-110 group-hover:brightness-125
                       group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
      <span className="text-xs font-medium text-gray-600 group-hover:text-white uppercase tracking-wider transition-colors duration-300 whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
};

export default LogoMarquee;
