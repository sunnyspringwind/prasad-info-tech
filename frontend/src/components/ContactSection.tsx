import React from "react";
import FormFields from "./FormFields";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white text-blue-900 py-12 pt-16">
      <div className="container max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-8">
          We'd love to hear from you!
        </h2>
        <FormFields showServices={true} contactSection={true}/>
      </div>
    </section>
  );
};

export default ContactSection;
