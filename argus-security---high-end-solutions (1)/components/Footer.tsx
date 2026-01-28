
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'soluciones', label: 'Soluciones' },
    { id: 'sectores', label: 'Sectores' },
  ];

  const handleNav = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-raisin text-white pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col items-start gap-1">
              <img 
                src="logo.png" 
                alt="ARGUS Security" 
                className="h-8 w-auto object-contain brightness-0 invert" 
              />
              <span className="text-silver text-[8px] tracking-[0.5em] font-bold uppercase opacity-60">SECURITY</span>
            </div>
            <p className="text-silver text-sm leading-relaxed">
              Líderes en soluciones integrales de seguridad en Costa Rica. Fusión de inteligencia humana y artificial para una protección sin precedentes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-firebrick transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-firebrick transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-firebrick transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links Updated */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase mb-8 border-l-2 border-firebrick pl-4">Enlaces</h4>
            <ul className="space-y-4 text-silver text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleNav(link.id)}
                    className="hover:text-firebrick transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase mb-8 border-l-2 border-firebrick pl-4">Contacto</h4>
            <ul className="space-y-6 text-silver text-sm">
              <li className="flex gap-4">
                <MapPin className="text-firebrick shrink-0" size={20} />
                <span>San José, Costa Rica.<br />Edificio Argus, Paseo Colón.</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-firebrick shrink-0" size={20} />
                <a href="tel:+50642050094" className="hover:text-white transition-colors">+506 4205-0094</a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-firebrick shrink-0" size={20} />
                <a href="mailto:info@argus.cr" className="hover:text-white transition-colors">info@argus.cr</a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase mb-8 border-l-2 border-firebrick pl-4">Certificaciones</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 flex flex-col items-center justify-center rounded-sm hover:bg-white/10 transition-colors">
                <span className="font-heading font-bold text-xs text-white">ALAS</span>
                <span className="text-[8px] text-silver uppercase text-center">Asociación Latinoamericana</span>
              </div>
              <div className="bg-white/5 p-4 flex flex-col items-center justify-center rounded-sm hover:bg-white/10 transition-colors">
                <span className="font-heading font-bold text-xs text-white">NFPA</span>
                <span className="text-[8px] text-silver uppercase text-center">Sistemas Contra Incendio</span>
              </div>
              <div className="bg-white/5 p-4 flex flex-col items-center justify-center rounded-sm hover:bg-white/10 transition-colors">
                <span className="font-heading font-bold text-xs text-white">ASIS</span>
                <span className="text-[8px] text-silver uppercase text-center">Management System</span>
              </div>
              <div className="bg-white/5 p-4 flex flex-col items-center justify-center rounded-sm hover:bg-white/10 transition-colors">
                <span className="font-heading font-bold text-xs text-white">ISO</span>
                <span className="text-[8px] text-silver uppercase text-center">9001:2015</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Updated */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4 text-silver text-[10px] uppercase tracking-widest text-center">
          <p>© {new Date().getFullYear()} ARGUS Security CR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
