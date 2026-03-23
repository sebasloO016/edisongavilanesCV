import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Desarrollador Web & Backend (Tesis)',
      company: 'Proyecto de Grado',
      period: '2024',
      location: 'Ambato',
      description: [
        'Desarrollo de un Sistema de Gestión de Inventario para un almacén de calzado utilizando EJS, Node.js y MySQL.',
        'Creación de un Sistema para Toma de Exámenes Aptitudinales con interfaces de administrador para parametrización y carga masiva de preguntas.',
        'Implementación de interfaz para estudiantes con cálculo automático de puntajes.',
        'Integración de tecnología anti-copia en JavaScript y diseño UX responsive generado y optimizado con Inteligencia Artificial.'
      ]
    },
    {
      title: 'Desarrollador Web (Freelancer)',
      company: 'Independiente',
      period: 'Marzo 2025 – Actualidad',
      location: 'Ambato',
      description: [
        'Creación de aplicaciones web con HTML, CSS y JavaScript.',
        'Uso de GitLab para control de versiones.',
        'Optimización de interfaces centradas en el usuario y desarrollo de funcionalidades para gestión de tareas.'
      ]
    },
    {
      title: 'Estudiante en prácticas',
      company: 'Pontificia Universidad Católica del Ecuador – Sede Ambato',
      period: 'Noviembre 2024 – Actualidad',
      location: 'Ambato',
      description: [
        'Gestión eficiente de tareas asignadas por el superior inmediato.',
        'Desarrollo y programación de software a medida utilizando tecnologías como C#, Java, JavaScript, .NET y SQL Server.',
        'Apoyo en trabajo de campo relacionado con soluciones tecnológicas.',
        'Colaboración en equipo para cumplir objetivos técnicos y organizacionales.'
      ]
    },
    {
      title: 'Practicante',
      company: 'Hospital Durán',
      period: 'Febrero 2024 – Julio 2024',
      location: 'Ambato',
      description: [
        'Apoyo en tareas administrativas y organización documental.',
        'Soporte técnico básico y uso de herramientas ofimáticas (Excel avanzado).',
        'Participación en capacitaciones internas sobre procesos hospitalarios.',
        'Desarrollo de funcionalidades en Java.'
      ]
    }
  ];

  const education = [
    {
      title: 'Ingeniería en Sistemas de la Información',
      institution: 'Pontificia Universidad Católica del Ecuador – Sede Ambato',
      period: 'Febrero 2022 – 2025',
      description: 'Ingeniero graduado. Becario por Excelencia Académica (2024).'
    },
    {
      title: 'Autoaprendizaje Frontend & IA',
      institution: 'Curso Personalizado con Gemini Pro 3.1',
      period: '2024 – Actualidad',
      description: 'Especialización en Vite.js y React mediante un plan de estudios adaptativo generado y guiado por Inteligencia Artificial.'
    },
    {
      title: 'Inglés (8 Niveles)',
      institution: 'Pontificia Universidad Católica del Ecuador',
      period: '2022 – 2025',
      description: 'Finalización exitosa de los 8 niveles de inglés requeridos por la universidad.'
    },
    {
      title: 'Clases de Inglés',
      institution: 'Quality Up',
      period: '2015 – 2017',
      description: 'Desarrollo de habilidades de lectura, escritura y conversación.'
    }
  ];

  return (
    <section className="relative py-24 px-6 z-10 bg-gemini-dark/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="p-3 bg-gemini-primary/10 rounded-xl">
              <Briefcase className="text-gemini-primary w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold">Experiencia Laboral</h2>
          </motion.div>

          <div className="space-y-12 border-l-2 border-white/10 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-gemini-dark bg-gemini-primary group-hover:scale-125 transition-transform duration-300" />
                
                <h3 className="text-xl font-bold text-white group-hover:text-gemini-primary transition-colors">{exp.title}</h3>
                <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4 font-mono">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                </div>

                <ul className="space-y-2 text-gray-400 list-disc pl-4 marker:text-gemini-primary/50">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="p-3 bg-gemini-secondary/10 rounded-xl">
              <GraduationCap className="text-gemini-secondary w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold">Formación Académica</h2>
          </motion.div>

          <div className="space-y-12 border-l-2 border-white/10 pl-8 ml-4">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-gemini-dark bg-gemini-secondary group-hover:scale-125 transition-transform duration-300" />
                
                <h3 className="text-xl font-bold text-white group-hover:text-gemini-secondary transition-colors">{edu.title}</h3>
                <h4 className="text-lg text-gray-300 mb-2">{edu.institution}</h4>
                
                <div className="flex gap-4 text-sm text-gray-500 mb-4 font-mono">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {edu.period}</span>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
