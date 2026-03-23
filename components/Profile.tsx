import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Brain, Zap } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <section className="relative py-24 px-6 z-10 bg-gemini-dark/50 backdrop-blur-sm border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Left Column: Title & Icon */}
          <div className="md:col-span-1 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gemini-primary to-gemini-secondary flex items-center justify-center shadow-lg shadow-gemini-primary/20">
              <User className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold tracking-tight">Perfil Personal</h2>
            <div className="h-1 w-20 bg-gemini-accent rounded-full" />
          </div>

          {/* Right Column: Content */}
          <div className="md:col-span-2 space-y-8 text-gray-300 leading-relaxed">
            <p className="text-lg font-light">
              Soy <span className="text-white font-medium">Ingeniero en Sistemas de la Información</span>, 
              autodidacta y apasionado por el desarrollo de soluciones tecnológicas. Me considero una persona responsable, 
              respetuosa, comprometida y con alta capacidad de adaptación.
            </p>
            
            <p>
              Me motiva aprender constantemente, aplicar mis conocimientos en entornos reales y crecer profesionalmente.
              Cuento con experiencia en <span className="text-gemini-accent">desarrollo backend y frontend</span>, diseño de interfaces de usuario, 
              integración de APIs y automatización de procesos mediante herramientas de inteligencia artificial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Code className="text-gemini-primary w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-1">Desarrollo Full Stack</h3>
                  <p className="text-sm text-gray-400">Creación de soluciones completas desde la base de datos hasta la interfaz.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Brain className="text-gemini-secondary w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-1">Integración de IA</h3>
                  <p className="text-sm text-gray-400">Automatización inteligente y uso estratégico de modelos generativos.</p>
                </div>
              </div>
            </div>

            <p className="italic text-gray-400 border-l-2 border-gemini-primary pl-4">
              "Busco siempre aportar con soluciones eficientes y un enfoque centrado en el usuario final."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
