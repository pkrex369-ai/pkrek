import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import VisionMission from './components/VisionMission';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import ProcessWorkflow from './components/ProcessWorkflow';
import QualitySecurity from './components/QualitySecurity';
import CombinedServices from './components/CombinedServices';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "PKREX - Non-Voice BPO Services";
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <CompanyOverview />
          <VisionMission />
          <WhyChoose />
          <Services />
          <ProcessWorkflow />
          <QualitySecurity />
          <CombinedServices />
          <Gallery />
          <FAQ />    
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;