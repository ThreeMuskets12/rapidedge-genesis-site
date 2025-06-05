
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <Services />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
