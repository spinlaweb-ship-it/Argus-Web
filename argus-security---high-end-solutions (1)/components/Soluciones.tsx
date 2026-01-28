
import React from 'react';
import { Shield, Cctv, Flame, Briefcase, Lock, Cpu, Radio, Zap } from 'lucide-react';

const Soluciones: React.FC = () => {
  const allSolutions = [
    { icon: <Shield />, name: "Seguridad Física", desc: "Oficiales entrenados bajo estándares internacionales para protección de activos críticos." },
    { icon: <Cctv />, name: "Video Vigilancia AI", desc: "Cámaras 4K con reconocimiento facial, analítica de comportamiento y detección de intrusos." },
    { icon: <Flame />, name: "Sistemas Contra Incendio", desc: "Detección temprana y supresión automática certificada por NFPA." },
    { icon: <Briefcase />, name: "Consultoría de Riesgos", desc: "Auditorías profundas y diseño de protocolos de seguridad corporativa." },
    { icon: <Lock />, name: "Control de Acceso", desc: "Biometría de última generación y gestión de visitantes en tiempo real." },
    { icon: <Cpu />, name: "Integración de Sistemas", desc: "Plataforma unificada para gestionar todos sus sistemas de seguridad desde un solo punto." },
    { icon: <Radio />, name: "Monitoreo 24/7", desc: "Central de emergencias propia con respuesta armada inmediata." },
    { icon: <Zap />, name: "Ciberseguridad", desc: "Protección de infraestructura digital y redes industriales (OT/IT)." },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white fade-in">
      <section className="bg-raisin py-20 relative">
        <div className="geometric-bg opacity-10"></div>
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-heading font-light text-white mb-4 uppercase tracking-tighter">
            Soluciones <span className="font-bold text-firebrick">Tecnológicas</span>
          </h1>
          <p className="text-silver text-xl max-w-2xl font-light">
            Arquitectura de seguridad diseñada para la era digital.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {allSolutions.map((s, i) => (
            <div key={i} className="p-8 border border-platinum hover:border-firebrick transition-colors group">
              <div className="text-firebrick mb-6 group-hover:scale-110 transition-transform">
                {/* Fix: Cast icon to React.ReactElement<any> to resolve TypeScript error when passing 'size' to cloned element */}
                {React.cloneElement(s.icon as React.ReactElement<any>, { size: 40 })}
              </div>
              <h3 className="text-xl font-heading font-bold text-raisin mb-4 uppercase tracking-wider">{s.name}</h3>
              <p className="text-silver text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-platinum py-24 border-y border-silver/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-heading font-light text-raisin mb-6">El Ecosistema <span className="font-bold text-firebrick">ARGUS AI</span></h2>
            <p className="text-silver mb-8 leading-relaxed">
              Nuestros sistemas no solo ven, sino que entienden. Mediante algoritmos de aprendizaje profundo, podemos predecir patrones de riesgo antes de que se conviertan en amenazas reales.
            </p>
            <div className="space-y-4">
              {['Reconocimiento de Placas', 'Conteo de Personas', 'Detección de Merodeo', 'Mapas de Calor'].map((item) => (
                <div key={item} className="flex items-center gap-4 text-raisin font-bold text-sm uppercase tracking-widest">
                  <div className="w-10 h-[2px] bg-firebrick"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative aspect-video bg-raisin overflow-hidden shadow-2xl">
             <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="ai-box w-2/3 h-2/3"></div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Soluciones;
