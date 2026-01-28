
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onCtaClick: () => void;
  onNavigate: (view: string) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick, onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'soluciones', label: 'Soluciones' },
    { id: 'sectores', label: 'Sectores' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled || currentView !== 'home' ? 'bg-raisin py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Replacement */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="flex flex-col">
            <img 
              src="logo.png" 
              alt="ARGUS Security" 
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert" 
            />
            <span className="text-silver text-[9px] tracking-[0.5em] font-bold mt-1 ml-1 opacity-80 group-hover:text-firebrick transition-colors">SECURITY</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8 text-silver text-sm uppercase tracking-widest font-bold">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`transition-colors border-b-2 pb-1 ${currentView === link.id ? 'text-white border-firebrick' : 'border-transparent hover:text-white'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <a href="tel:+50642050094" className="flex items-center gap-2 text-white font-medium hover:text-firebrick transition-colors">
              <Phone size={18} className="text-firebrick" />
              <span>+506 4205-0094</span>
            </a>
            <button 
              onClick={onCtaClick}
              className="bg-firebrick hover:bg-barnred text-white px-6 py-2 rounded-sm text-sm font-bold tracking-widest transition-all shadow-xl hover:translate-y-[-2px]"
            >
              CONTACTO
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-raisin border-t border-white/10 p-6 flex flex-col gap-6 animate-fadeIn">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => { onNavigate(link.id); setIsOpen(false); }}
              className={`text-lg font-heading text-left uppercase tracking-widest ${currentView === link.id ? 'text-firebrick' : 'text-white'}`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => { setIsOpen(false); onCtaClick(); }}
            className="bg-firebrick text-white py-4 rounded-sm font-bold text-center"
          >
            CONTACTO
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
