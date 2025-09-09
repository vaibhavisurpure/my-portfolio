import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary text-primary py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-slide-left">
            <h2 className="text-6xl lg:text-8xl font-black mb-8">
              About Me
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed">
              I'm Vaibhavi Suprure, a passionate and creative UI/UX Designer with a focus on bringing innovative ideas to life. Here's a glimpse into who I am and what I bring to the table:
            </p>
          </div>
          <div className="space-y-6 scroll-slide-right">
            <div className="bg-primary/10 p-6 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-3">Creative Vision</h3>
              <p className="text-lg">Transforming ideas into stunning visual experiences</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-3">User-Centered Design</h3>
              <p className="text-lg">Designing with empathy and user needs at the core</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-lg">Pushing boundaries with cutting-edge design solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;