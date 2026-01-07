import { FormField } from '../types';

export const contactFormFields: FormField[] = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Your full name',
    required: true
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true
  },
  {
    id: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+27 83 779 7935',
    required: true
  },
  {
    id: 'company',
    label: 'Company Name',
    type: 'text',
    placeholder: 'Your company name',
    required: true
  },
  {
    id: 'service',
    label: 'Service Interested In',
    type: 'select',
    placeholder: 'Select a service',
    required: true,
    options: [
      { value: 'website-redesign', label: 'Website Redesign' },
      { value: 'crm-booking', label: 'CRM + Booking System' },
      { value: 'production-automation', label: 'Production Updates Automation' },
      { value: 'website-chatbot', label: 'Website Chatbot' },
      { value: 'ceo-dashboard', label: 'CEO Dashboard & Reporting' },
      { value: 'social-automation', label: 'Social Media Automation' },
      { value: 'whatsapp-agent', label: 'WhatsApp AI Agent' },
      { value: 'voice-ai', label: 'Voice AI Caller' }
    ]
  },
  {
    id: 'contactMethod',
    label: 'Preferred Contact Method',
    type: 'select',
    placeholder: 'Select contact method',
    required: true,
    options: [
      { value: 'email', label: 'Email' },
      { value: 'phone', label: 'Phone Call' },
      { value: 'whatsapp', label: 'WhatsApp' }
    ]
  }
];

export const expectationsList = [
  'Free consultation call',
  'Custom solution proposal',
  'Response within 24 hours',
  'No-pressure discussion'
];