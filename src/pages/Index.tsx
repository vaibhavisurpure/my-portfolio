import React, { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import CircularNav from '@/components/CircularNav';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="relative">
      <CircularNav />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
};

export default Index;
