import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "User Interface (UI) Design",
      description: "Creating beautiful and intuitive interfaces"
    },
    {
      number: "02", 
      title: "Wireframes And Prototypes",
      description: "Building functional prototypes and wireframes"
    },
    {
      number: "03",
      title: "Visual Design",
      description: "Crafting stunning visual experiences"
    },
    {
      number: "04",
      title: "Web and Application Design", 
      description: "Designing comprehensive web and mobile solutions"
    },
    {
      number: "05",
      title: "Product Design",
      description: "End-to-end product design solutions"
    }
  ];

  return (
    <section id="services" className="bg-background py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-16 scroll-fade-in">
          <h2 className="text-6xl lg:text-8xl font-black text-secondary">
            Services
          </h2>
          <a 
            href="https://www.linkedin.com/in/vaibhavisurpure/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:opacity-80 transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </a>
        </div>
        
        <div className="grid gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border-b-2 border-secondary pb-8 group hover:bg-secondary/5 transition-all duration-500 p-6 rounded-lg scroll-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-8">
                <div className="text-6xl font-black text-secondary/30 group-hover:text-secondary transition-all duration-500 group-hover:scale-110">
                  {service.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-xl text-secondary/80">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;