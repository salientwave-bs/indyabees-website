import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import ServiceLines from './components/ServiceLines';
import MarketplacePacks from './components/MarketplacePacks';
import EngagementModels from './components/EngagementModels';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <ServiceLines />
      <MarketplacePacks />
      <EngagementModels />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;