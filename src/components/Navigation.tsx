import React from 'react';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 right-8 z-50 animate-fade-in">
      <div className="flex gap-8">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-secondary font-medium hover:opacity-80 transition-all duration-300 hover:scale-110"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('services')}
          className="text-secondary font-medium hover:opacity-80 transition-all duration-300 hover:scale-110"
        >
          Services
        </button>
        <button 
          onClick={() => scrollToSection('work')}
          className="text-secondary font-medium hover:opacity-80 transition-all duration-300 hover:scale-110"
        >
          Work
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-secondary font-medium hover:opacity-80 transition-all duration-300 hover:scale-110"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navigation;