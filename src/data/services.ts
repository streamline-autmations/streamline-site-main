import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Modern, vector-based logo marks and branding assets.',
    icon: 'Sparkles',
    category: 'branding',
    features: [
      'Vector-based scalable files',
      'Dark & Light mode variants',
      'Full copyright transfer',
      '3 Concept iterations'
    ]
  },
  {
    id: 'digital-stationery',
    title: 'Digital Stationery',
    description: 'Professional business cards and HTML email signatures.',
    icon: 'FileText',
    category: 'branding',
    features: [
      'Clickable HTML email signatures',
      'Print-ready business cards',
      'QR code integration',
      'Brand consistency check'
    ]
  },
  {
    id: 'social-media-assets',
    title: 'Social Media Assets',
    description: 'Profile banners and ad creative templates.',
    icon: 'Image',
    category: 'branding',
    features: [
      'Optimized for all platforms',
      'High-CTR ad templates',
      'Profile banner set',
      'Source files included'
    ]
  },
  {
    id: 'business-lead-gen-sites',
    title: 'Business & Lead Gen Sites',
    description: 'High-performance React sites designed to convert traffic.',
    icon: 'Globe',
    category: 'web-development',
    features: [
      'High-conversion layouts',
      'Under 1s load time (Vite)',
      'Mobile-first architecture',
      'Basic SEO setup'
    ]
  },
  {
    id: 'custom-ecommerce',
    title: 'Custom E-commerce',
    description: 'Full online stores with custom cart logic and databases.',
    icon: 'ShoppingCart',
    category: 'web-development',
    features: [
      'Custom Cart Logic',
      'Supabase Database',
      'Admin Dashboard included',
      'No monthly platform fees'
    ]
  },
  {
    id: 'digital-portfolios',
    title: 'Digital Portfolios',
    description: 'Interactive showcases for agencies, photographers, or catalogues.',
    icon: 'Briefcase',
    category: 'web-development',
    features: [
      'Interactive project gallery',
      'Fast image optimization',
      'Contact form integration',
      'Easy-to-update structure'
    ]
  },
  {
    id: 'domain-email-setup',
    title: 'Domain & Email Setup',
    description: 'Complete DNS management, professional email hosting, and SSL security.',
    icon: 'Mail',
    category: 'web-development',
    features: [
      'DNS configuration',
      'SSL Certificate setup',
      'Google Workspace / Outlook',
      'DMARC security'
    ]
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    description: '24/7 Voiceflow assistants for customer support and booking.',
    icon: 'MessageSquare',
    category: 'automation',
    features: [
      '24/7 Auto-replies',
      'Lead qualification flow',
      'Booking calendar sync',
      'Human handoff logic'
    ]
  },
  {
    id: 'social-media-ai',
    title: 'Social Media AI',
    description: 'Automated comment replies, DM handling, and engagement bots.',
    icon: 'Zap',
    category: 'automation',
    features: [
      'Auto-comment replies',
      'DM lead capture',
      'Story mentions tracking',
      'Spam filtering'
    ]
  },
  {
    id: 'lead-workflows',
    title: 'Lead Workflows',
    description: 'Connecting web forms instantly to WhatsApp and CRMs.',
    icon: 'Workflow',
    category: 'automation',
    features: [
      'Instant WhatsApp alerts',
      'Google Sheets syncing',
      'CRM data entry',
      'Automated email follow-ups'
    ]
  },
  {
    id: 'admin-dashboards',
    title: 'Admin Dashboards',
    description: 'Custom control panels to manage stock, orders, and internal data.',
    icon: 'LayoutDashboard',
    category: 'automation',
    features: [
      'Live sales tracking',
      'Inventory management',
      'User role permissions',
      'Export to CSV/PDF'
    ]
  }
];