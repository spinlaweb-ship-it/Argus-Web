
import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative h-screen flex items-center bg-raisin overflow-hidden">
      {/* Background Image with HUD Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=2070&auto=format&fit=crop" 
          alt="Professional Security Officer" 
          className="w-full h-full object-cover opacity-60 grayscale-[0.5]"
        />
        <div className="absolute inset-0 hud-overlay"></div>
        {/* Geometric Decors */}
        <div className="geometric-bg opacity-30"></div>
        
        {/* Digital Elements Mockup */}
        <div className="absolute top-[20%] right-[10%] hidden md:block">
            <div className="ai-box w-48 h-64 opacity-40"></div>
            <div className="mt-4 flex gap-2">
                <div className="w-12 h-1 bg-firebrick"></div>
                <div className="w-4 h-1 bg-firebrick"></div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-firebrick"></div>
            <span className="text-silver uppercase tracking-[0.4em] text-xs font-bold">Líderes en Seguridad Corporativa</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-light text-white leading-tight mb-8">
            Soluciones Integrales de Seguridad: <span className="font-bold text-firebrick">Protección & Eficiencia.</span>
          </h1>
          
          <p className="text-silver text-xl md:text-2xl font-light mb-12 max-w-2xl leading-relaxed">
            Más de 15 años protegiendo a Costa Rica mediante la fusión perfecta entre <span className="text-white border-b border-firebrick/30">talento humano de élite</span> y <span className="text-white border-b border-firebrick/30">tecnología AI de vanguardia</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={onCtaClick}
              className="bg-firebrick hover:bg-barnred text-white px-10 py-5 rounded-sm font-bold tracking-widest transition-all shadow-2xl flex items-center justify-center gap-2 group"
            >
              SOLICITAR EVALUACIÓN
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-silver/30 hover:border-white hover:bg-white/5 text-white px-10 py-5 rounded-sm font-bold tracking-widest transition-all flex items-center justify-center gap-2">
              <ShieldCheck size={20} />
              NUESTROS SERVICIOS
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Curve/Angle */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-raisin" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
};

export default Hero;
