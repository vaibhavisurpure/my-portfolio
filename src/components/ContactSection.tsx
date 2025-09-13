import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-background py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-6xl lg:text-8xl font-black text-secondary mb-8 scroll-fade-in">
          Let's Work Together
        </h2>
        <p className="text-2xl text-secondary/80 mb-12 max-w-3xl mx-auto scroll-fade-in">
          Ready to bring your ideas to life? Let's collaborate and create something amazing together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-scale">
          <a 
            href="mailto:vaibhavi.surpure@byteahead.in"
            className="bg-secondary text-primary px-12 py-6 rounded-full font-bold text-xl hover:opacity-80 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t-2 border-secondary">
          <p className="text-secondary/60">
            © 2025 Vaibhavi Surpure. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;