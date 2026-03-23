import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import EcuadorMap from './EcuadorMap';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Courses, Languages & Map Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* Courses */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <Award className="text-gemini-secondary" />
              Cursos & Certificaciones
            </h3>
            <ul className="space-y-4">
              <li className="p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <h4 className="font-bold text-white">Cisco – Fundamentos de Sistemas Operativos</h4>
                <p className="text-sm text-gray-400">Pontificia Universidad Católica del Ecuador (20h)</p>
              </li>
              <li className="p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <h4 className="font-bold text-white">Congresos Académicos Universitarios</h4>
                <p className="text-sm text-gray-400">Ponencias sobre tecnología y software libre.</p>
              </li>
              <li className="p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <h4 className="font-bold text-white">Meta Ads – Autoaprendizaje</h4>
                <p className="text-sm text-gray-400">Gestión de campañas para eCommerce propio.</p>
              </li>
            </ul>
          </motion.div>

          {/* Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <Globe className="text-gemini-accent" />
              Idiomas
            </h3>
            <div className="p-6 bg-white/5 rounded-xl border border-white/5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-white">Inglés</span>
                <span className="px-3 py-1 bg-gemini-primary/20 text-gemini-primary rounded-full text-sm font-mono">B2 - Intermedio Avanzado</span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-400">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Escritura
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Lectura
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Hablado
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <MapPin className="text-gemini-primary" />
              Ubicación
            </h3>
            <div className="bg-white/5 rounded-xl border border-white/5 overflow-hidden">
              <EcuadorMap />
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-display font-bold text-white mb-2">Edison Gavilanes</h2>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Designed with React Three Fiber & Tailwind.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:text-gemini-primary transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:text-white transition-all">
              <Github size={20} />
            </a>
            <a href="mailto:gavilanessebas45@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:text-gemini-secondary transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
