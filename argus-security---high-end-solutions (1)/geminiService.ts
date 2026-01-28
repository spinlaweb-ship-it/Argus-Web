
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSecurityAssessment = async (propertyType: string, concerns: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Proporcione una evaluación de seguridad profesional de alto nivel para un cliente interesado en: ${propertyType}. 
      Sus preocupaciones principales son: ${concerns}.
      Responda en español, con un tono autoritario, experto y profesional.
      Estructura la respuesta con:
      1. Diagnóstico de Riesgo
      2. Solución Recomendada (mezclando seguridad física y electrónica)
      3. Tecnología ARGUS AI sugerida.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error generating assessment:", error);
    return "Lo sentimos, el asesor de IA no está disponible en este momento. Por favor, contáctenos directamente al +506 4205-0094.";
  }
};
