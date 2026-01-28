
import React from 'react';
import { Factory, ShoppingCart, GraduationCap, Landmark } from 'lucide-react';

const sectors = [
  { icon: <Factory size={40} />, name: "Industria" },
  { icon: <ShoppingCart size={40} />, name: "Comercio" },
  { icon: <GraduationCap size={40} />, name: "Educación" },
  { icon: <Landmark size={40} />, name: "Finanzas" },
];

const ClientSectors: React.FC = () => {
  return (
    <section className="py-20 bg-platinum">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h3 className="text-silver uppercase tracking-[0.3em] text-[10px] font-bold mb-2">Presencia Regional</h3>
            <h2 className="text-3xl font-heading font-light text-raisin mb-6">Sectores que <span className="font-bold">Protegemos</span></h2>
            <p className="text-silver leading-relaxed">
              Diseñamos protocolos específicos adaptados a la naturaleza de cada industria, garantizando continuidad de negocio y mitigación de riesgos operativos.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {sectors.map((s, idx) => (
              <div key={idx} className="bg-white p-8 flex flex-col items-center justify-center gap-4 group hover:bg-firebrick transition-all duration-300 rounded-sm shadow-sm">
                <div className="text-firebrick group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <span className="text-raisin font-heading font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSectors;
