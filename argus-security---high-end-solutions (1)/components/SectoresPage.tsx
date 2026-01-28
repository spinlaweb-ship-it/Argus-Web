
import React from 'react';
import { Factory, ShoppingCart, GraduationCap, Landmark, Plane, Hospital, Building2, Truck } from 'lucide-react';

const SectoresPage: React.FC = () => {
  const allSectors = [
    { icon: <Factory />, name: "Industrial & Logística", desc: "Seguridad para plantas de producción y centros de distribución masiva." },
    { icon: <ShoppingCart />, name: "Retail & Comercio", desc: "Prevención de pérdidas y control de inventarios en puntos de venta." },
    { icon: <GraduationCap />, name: "Educación", desc: "Entornos seguros para campus universitarios y centros educativos." },
    { icon: <Landmark />, name: "Sector Financiero", desc: "Protocolos de alta seguridad para bóvedas y sucursales bancarias." },
    { icon: <Plane />, name: "Infraestructura Crítica", desc: "Aeropuertos, puertos y telecomunicaciones." },
    { icon: <Hospital />, name: "Salud", desc: "Gestión de seguridad en hospitales y centros de investigación médica." },
    { icon: <Building2 />, name: "Corporativo & Hotelería", desc: "Servicios premium de conserjería de seguridad y control de acceso." },
    { icon: <Truck />, name: "Transporte de Valores", desc: "Logística blindada y monitoreo satelital en tiempo real." },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white fade-in">
      <section className="bg-raisin py-20 relative overflow-hidden">
        <div className="geometric-bg opacity-20"></div>
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-heading font-light text-white mb-4 uppercase tracking-tighter">
            Sectores <span className="font-bold text-firebrick">Estratégicos</span>
          </h1>
          <p className="text-silver text-xl max-w-2xl font-light">
            Soluciones a medida para cada desafío operativo.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allSectors.map((s, i) => (
            <div key={i} className="p-10 bg-platinum/30 border border-transparent hover:border-firebrick hover:bg-white transition-all group">
              <div className="text-raisin mb-6 group-hover:text-firebrick transition-colors">
                {/* Fix: Cast icon to React.ReactElement<any> to resolve TypeScript error when passing 'size' and 'strokeWidth' to cloned element */}
                {React.cloneElement(s.icon as React.ReactElement<any>, { size: 48, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-xl font-heading font-bold text-raisin mb-4 uppercase tracking-wider">{s.name}</h3>
              <p className="text-silver text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-raisin text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-light mb-12">¿Su sector no está en la lista?</h2>
          <p className="text-silver max-w-3xl mx-auto mb-12 text-lg">
            Nuestro equipo de consultoría diseña protocolos únicos basados en su ubicación geográfica, naturaleza operativa y presupuesto. Contáctenos para un diseño personalizado.
          </p>
          <button className="bg-firebrick hover:bg-barnred px-12 py-5 font-bold tracking-widest uppercase text-sm transition-all shadow-xl">
            Solicitar Consultoría Técnica
          </button>
        </div>
      </section>
    </div>
  );
};

export default SectoresPage;
