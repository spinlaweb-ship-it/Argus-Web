
import React from 'react';
import { Shield, Cctv, Flame, Briefcase, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Seguridad & Vigilancia",
    desc: "Personal altamente capacitado para resguardo físico de instalaciones críticas y comerciales.",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=2000&auto=format&fit=crop",
    icon: <Shield size={24} />,
    tag: "HUMAN TALENT"
  },
  {
    title: "Soluciones Electrónicas",
    desc: "CCTV con analítica avanzada, control de acceso biométrico e integración de sistemas inteligentes.",
    image: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=2000&auto=format&fit=crop",
    icon: <Cctv size={24} />,
    tag: "AI TECHNOLOGY"
  },
  {
    title: "Protección Contra Incendios",
    desc: "Diseño, instalación y monitoreo de sistemas de detección y supresión bajo normas internacionales.",
    image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2000&auto=format&fit=crop",
    icon: <Flame size={24} />,
    tag: "CERTIFIED"
  },
  {
    title: "Servicios Corporativos",
    desc: "Consultoría de riesgos, auditorías de seguridad y programas de prevención de pérdidas.",
    image: "https://images.unsplash.com/photo-1454165833767-027eeef1596e?q=80&w=2000&auto=format&fit=crop",
    icon: <Briefcase size={24} />,
    tag: "STRATEGY"
  }
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-platinum/30 -skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-platinum text-firebrick text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            Especialistas en Integración
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-light text-raisin mb-4">
            Nuestros <span className="font-bold">Servicios</span>
          </h2>
          <div className="w-16 h-1 bg-firebrick mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="group relative bg-white border border-platinum overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-raisin/40 group-hover:bg-firebrick/20 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-firebrick text-white p-3 rounded-sm shadow-lg">
                  {s.icon}
                </div>
                <div className="absolute bottom-4 left-4 text-[10px] font-bold tracking-widest text-white/80 uppercase">
                    {s.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-heading font-bold text-raisin mb-4">{s.title}</h3>
                <p className="text-silver text-sm leading-relaxed mb-6 h-16 line-clamp-3">
                  {s.desc}
                </p>
                <button className="flex items-center gap-2 text-firebrick text-xs font-bold tracking-widest uppercase hover:text-barnred transition-colors">
                  Más Información <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
