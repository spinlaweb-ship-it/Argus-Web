
import React from 'react';
import { PackageSearch, Cpu, Timer, History } from 'lucide-react';

const props = [
  { icon: <PackageSearch size={32} />, title: "Soluciones Integrales" },
  { icon: <Cpu size={32} />, title: "Tecnología AI (Vanguardia)" },
  { icon: <Timer size={32} />, title: "Respuesta Inmediata" },
  { icon: <History size={32} />, title: "15+ Años de Experiencia" },
];

const ValuePropStrip: React.FC = () => {
  return (
    <section className="bg-raisin py-12 md:py-0 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:h-32">
          {props.map((p, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-center gap-4 py-8 md:py-0 transition-colors group ${idx !== props.length - 1 ? 'md:border-r border-white/5' : ''}`}
            >
              <div className="text-firebrick group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              <span className="text-white text-sm uppercase tracking-widest font-heading font-medium text-center md:text-left">
                {p.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropStrip;
