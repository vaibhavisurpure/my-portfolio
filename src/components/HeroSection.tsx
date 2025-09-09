import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Large VS text */}
      <div className="text-center animate-scale-in">
        <h1 className="text-[15rem] lg:text-[20rem] xl:text-[25rem] font-black leading-none text-secondary tracking-tight hover:scale-105 transition-transform duration-700 ease-out">
          VAIBHAVI
        </h1>
      </div>
      
      {/* Bottom overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent"></div>
    </section>
  );
};

export default HeroSection;