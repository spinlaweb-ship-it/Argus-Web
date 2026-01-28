
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValuePropStrip from './components/ValuePropStrip';
import ServicesOverview from './components/ServicesOverview';
import ClientSectors from './components/ClientSectors';
import Footer from './components/Footer';
import SmartAssessmentModal from './components/SmartAssessmentModal';
import Nosotros from './components/Nosotros';
import Soluciones from './components/Soluciones';
import SectoresPage from './components/SectoresPage';
import { Phone } from 'lucide-react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'nosotros':
        return <Nosotros />;
      case 'soluciones':
        return <Soluciones />;
      case 'sectores':
        return <SectoresPage />;
      default:
        return (
          <div className="fade-in">
            <Hero onCtaClick={() => setIsModalOpen(true)} />
            <ValuePropStrip />
            <ServicesOverview />
            <ClientSectors />
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen">
      <Navbar 
        currentView={view} 
        onNavigate={(v) => setView(v)} 
        onCtaClick={() => setIsModalOpen(true)} 
      />
      
      <main>
        {renderContent()}
      </main>

      <Footer onNavigate={(v) => setView(v)} />

      {/* Floating Action Button for Mobile Contact */}
      <a 
        href="tel:+50642050094"
        className="fixed bottom-6 right-6 z-50 bg-firebrick text-white p-4 rounded-full shadow-2xl hover:bg-barnred transition-colors md:hidden"
        title="Call Us"
      >
        <Phone size={24} />
      </a>

      {isModalOpen && <SmartAssessmentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;
