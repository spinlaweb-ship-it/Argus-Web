
import React, { useState } from 'react';
import { X, Send, ShieldCheck, Loader2 } from 'lucide-react';
import { getSecurityAssessment } from '../geminiService';

interface SmartAssessmentModalProps {
  onClose: () => void;
}

const SmartAssessmentModal: React.FC<SmartAssessmentModalProps> = ({ onClose }) => {
  const [propertyType, setPropertyType] = useState('');
  const [concerns, setConcerns] = useState('');
  const [loading, setLoading] = useState(false);
  const [assessment, setAssessment] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await getSecurityAssessment(propertyType, concerns);
    setAssessment(result);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-raisin/90 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-sm shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Decor */}
        <div className="h-2 bg-firebrick"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-raisin hover:text-firebrick transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12 overflow-y-auto">
          {!assessment ? (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-firebrick text-white p-3 rounded-sm">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-raisin">Asesor Virtual de Seguridad</h2>
                  <p className="text-silver text-sm">Impulsado por ARGUS AI • Obtenga un diagnóstico preliminar en segundos.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-raisin mb-2">Tipo de Propiedad / Activo</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Ej: Planta Industrial, Edificio de Oficinas, Condominio..."
                    className="w-full bg-raisin text-white border-b-2 border-firebrick/30 focus:border-firebrick p-4 outline-none transition-all placeholder:text-silver/50"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-raisin mb-2">Principales Preocupaciones</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Describa sus necesidades: intrusión, robo de activos, control de acceso, riesgos de incendio..."
                    className="w-full bg-raisin text-white border border-silver/30 focus:border-firebrick p-4 outline-none transition-all resize-none placeholder:text-silver/50"
                    value={concerns}
                    onChange={(e) => setConcerns(e.target.value)}
                  ></textarea>
                </div>
                
                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full bg-firebrick hover:bg-barnred text-white py-5 font-bold tracking-[0.2em] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" /> PROCESANDO EVALUACIÓN...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> GENERAR DIAGNÓSTICO
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-platinum p-6 border-l-4 border-firebrick">
                <h3 className="font-heading font-bold text-firebrick text-sm tracking-widest mb-2 uppercase">Diagnóstico Preliminar AI</h3>
                <div className="text-raisin leading-relaxed whitespace-pre-wrap text-sm">
                  {assessment}
                </div>
              </div>

              <div className="p-6 bg-raisin text-white rounded-sm">
                <p className="text-xs mb-4 text-silver italic">Este diagnóstico es una recomendación generada por IA. Para un plan de seguridad vinculante y certificado, requerimos una visita técnica presencial.</p>
                <button 
                  onClick={() => window.location.href = "tel:+50642050094"}
                  className="w-full border border-firebrick text-firebrick hover:bg-firebrick hover:text-white py-4 font-bold transition-all uppercase tracking-widest text-sm"
                >
                  Agendar Visita Técnica
                </button>
              </div>

              <button 
                onClick={() => setAssessment(null)}
                className="text-silver text-xs hover:text-raisin underline"
              >
                Nueva consulta
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartAssessmentModal;
