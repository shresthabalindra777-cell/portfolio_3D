import React from 'react';
import { AuroraBackground } from './components/reactbits/AuroraBackground';
import { CustomCursor } from './components/reactbits/CustomCursor';
import { Navbar } from './components/sections/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { WhatIDoSection } from './components/sections/WhatIDoSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { WorkSection } from './components/sections/WorkSection';
import { CareerSection } from './components/sections/CareerSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="portfolio-app-root">
      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* Atmospheric Aurora Background & Glowing Orbs */}
      <AuroraBackground>
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Flow matching https://harshith-portfolio-mu.vercel.app/ */}
        <main className="main-content-flow">
          <HeroSection />
          <AboutSection />
          <WhatIDoSection />
          <TechStackSection />
          <WorkSection />
          <CareerSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </AuroraBackground>
    </div>
  );
}

export default App;
