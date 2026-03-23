import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Quote, Brain } from 'lucide-react';

const AIManifesto: React.FC = () => {
  return (
    <section className="relative py-32 px-6 z-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gemini-dark via-gemini-primary/5 to-gemini-dark pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gemini-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-3xl border border-gemini-primary/30 bg-black/40 backdrop-blur-xl shadow-2xl shadow-gemini-primary/10 overflow-hidden"
        >
          {/* Decorative Border Gradient */}
          <div className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-br from-gemini-primary via-transparent to-gemini-secondary opacity-50 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gemini-accent/10 border border-gemini-accent/20 text-gemini-accent text-sm font-mono uppercase tracking-widest">
              <Sparkles size={14} />
              Ventaja Competitiva
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Fortaleza en el Uso Estratégico de la <br className="hidden md:block" />
              <span className="text-gemini-primary">Inteligencia Artificial</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              En el entorno actual, la IA no es solo una herramienta, es un <span className="text-white font-semibold">impulsor real de resultados</span>. 
              Mi enfoque no es reemplazar el trabajo, sino potenciarlo: crear soluciones funcionales y sistemas completos uniendo código generado por IA con una comprensión profunda de la arquitectura.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pt-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gemini-primary/50 transition-colors text-left">
                <Zap className="text-yellow-400 w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Velocidad & Eficiencia</h3>
                <p className="text-gray-400 text-sm">Reducción drástica de tiempos de desarrollo sin comprometer la calidad del código.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gemini-secondary/50 transition-colors text-left">
                <Brain className="text-purple-400 w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Adaptabilidad Total</h3>
                <p className="text-gray-400 text-sm">Capacidad de adaptarme a cualquier stack tecnológico (lenguaje, framework) en tiempo récord.</p>
              </div>
            </div>

            <div className="relative mt-12 p-8 border-t border-white/10 w-full">
              <Quote className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gemini-dark bg-gemini-primary p-2 w-10 h-10 rounded-full" />
              <blockquote className="text-xl italic text-gray-400 font-serif">
                "La Inteligencia Artificial no te reemplazará. Una persona que sepa utilizar la Inteligencia Artificial lo hará."
              </blockquote>
              <cite className="block mt-4 text-sm font-mono text-gemini-primary not-italic">
                — Jensen Huang, CEO de NVIDIA
              </cite>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIManifesto;
