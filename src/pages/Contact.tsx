import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import SectionHeading from '../components/ui/SectionHeading';

const Contact: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Let's Automate Your Success"
          subtitle="Book your free consultation call and discover how our AI solutions can transform your business."
          centered={true}
          className="max-w-3xl mx-auto mb-8 md:mb-12"
        />

        <div className="mt-8 md:mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;