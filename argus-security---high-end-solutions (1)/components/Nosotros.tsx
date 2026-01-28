
import React from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';

const Nosotros: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white fade-in">
      {/* Hero Section Page */}
      <section className="bg-raisin py-20 relative overflow-hidden">
        <div className="geometric-bg opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-heading font-light text-white mb-4">
            Sobre <span className="font-bold text-firebrick text-6xl">ARGUS</span>
          </h1>
          <p className="text-silver text-xl max-w-2xl font-light">
            Definiendo el estándar de seguridad corporativa en Costa Rica desde hace más de una década.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="text-firebrick"><Target size={48} /></div>
            <h3 className="text-2xl font-heading font-bold text-raisin uppercase tracking-widest">Misión</h3>
            <p className="text-silver leading-relaxed">
              Proporcionar tranquilidad y continuidad operativa a nuestros clientes mediante la integración inteligente de recursos humanos de élite y tecnología de vanguardia.
            </p>
          </div>
          <div className="space-y-6">
            <div className="text-firebrick"><Eye size={48} /></div>
            <h3 className="text-2xl font-heading font-bold text-raisin uppercase tracking-widest">Visión</h3>
            <p className="text-silver leading-relaxed">
              Ser el referente absoluto en seguridad de alta gama en la región, anticipándonos a los riesgos mediante el uso estratégico de la Inteligencia Artificial.
            </p>
          </div>
          <div className="space-y-6">
            <div className="text-firebrick"><Award size={48} /></div>
            <h3 className="text-2xl font-heading font-bold text-raisin uppercase tracking-widest">Valores</h3>
            <ul className="text-silver space-y-2">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-firebrick"></div> Integridad Absoluta</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-firebrick"></div> Innovación Constante</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-firebrick"></div> Excelencia Operativa</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-firebrick"></div> Compromiso con el Cliente</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section Mockup */}
      <section className="bg-platinum py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-light text-raisin mb-16">Nuestro <span className="font-bold">Equipo Directivo</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-raisin mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <div className="absolute inset-0 bg-firebrick/10 group-hover:bg-transparent"></div>
                </div>
                <h4 className="text-lg font-heading font-bold text-raisin uppercase tracking-widest">Director Ejecutivo</h4>
                <p className="text-silver text-sm">Especialista en Seguridad Internacional</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
