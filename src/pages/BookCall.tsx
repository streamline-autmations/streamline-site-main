import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import SectionHeading from '../components/ui/SectionHeading';

const BookCall: React.FC = () => {
  return (
    <div className="py-20 bg-dark-950">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Let's Talk AI"
          subtitle="Fill in your details and we'll get back to you within 24 hours to schedule your free AI demo or consultation."
          centered={true}
          className="max-w-3xl mx-auto"
        />

        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default BookCall;