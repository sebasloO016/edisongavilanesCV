import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiDotnet, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiGitlab, 
  SiOpenai, 
  SiGoogle, 
  SiFigma,
  SiFlutter,
  SiDart,
  SiVite,
  SiGithubcopilot,
  SiSpringboot
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';

// --- Data ---
const categories = [
  {
    title: "Frontend & Mobile",
    skills: [
      { id: 3, name: "React", icon: SiReact, color: "#61DAFB", level: "Intermedio", tags: ["Frontend", "Hooks"] },
      { id: 15, name: "Apps Móviles", icon: SiFlutter, color: "#02569B", level: "Intermedio", tags: ["Flutter", "Dart"] },
      { id: 16, name: "Dart", icon: SiDart, color: "#0175C2", level: "Intermedio", tags: ["Mobile", "OOP"] },
      { id: 6, name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "Experto", tags: ["Web", "ES6+"] },
      { id: 7, name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "Básico", tags: ["Types", "Safety"] },
      { id: 17, name: "Vite.js", icon: SiVite, color: "#646CFF", level: "Intermedio", tags: ["Build Tool", "Fast"] },
      { id: 8, name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: "Intermedio", tags: ["UI", "Responsive"] },
      { id: 9, name: "HTML5", icon: SiHtml5, color: "#E34F26", level: "Experto", tags: ["Structure", "SEO"] },
      { id: 10, name: "CSS3", icon: SiCss3, color: "#1572B6", level: "Avanzado", tags: ["Style", "Flexbox"] },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { id: 1, name: "C#", icon: SiDotnet, color: "#9B4F96", level: "Avanzado", tags: ["Backend", "OOP"] },
      { id: 2, name: ".NET Core", icon: SiDotnet, color: "#512BD4", level: "Avanzado", tags: ["Enterprise", "API"] },
      { id: 4, name: "Java", icon: FaJava, color: "#007396", level: "Básico/Intermedio", tags: ["Backend", "OOP"] },
      { id: 20, name: "Node.js", icon: SiJavascript, color: "#339933", level: "Intermedio", tags: ["Backend", "Runtime"] },
      { id: 5, name: "SQL Server", icon: FaDatabase, color: "#CC2927", level: "Intermedio", tags: ["Data", "Query"] },
      { id: 21, name: "MySQL", icon: FaDatabase, color: "#4479A1", level: "Avanzado", tags: ["Data", "Relational"] },
    ]
  },
  {
    title: "DevOps, Tools & AI",
    skills: [
      { id: 19, name: "Desarrollo con IA", icon: SiGithubcopilot, color: "#FFFFFF", level: "Experto", tags: ["Calidad", "Eficiencia"] },
      { id: 12, name: "AI Integration", icon: SiOpenai, color: "#10A37F", level: "Experto", tags: ["LLM", "Prompting"] },
      { id: 13, name: "Gemini API", icon: SiGoogle, color: "#4285F4", level: "Avanzado", tags: ["GenAI", "Google"] },
      { id: 11, name: "GitLab", icon: SiGitlab, color: "#FC6D26", level: "Intermedio", tags: ["CI/CD", "Git"] },
      { id: 14, name: "Figma", icon: SiFigma, color: "#F24E1E", level: "Básico", tags: ["Design", "Prototyping"] },
    ]
  }
];

const SkillCard = ({ skill, index }: { skill: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative w-full h-36 rounded-xl cursor-pointer z-10 group"
      whileHover={{ 
        scale: 1.03, 
        zIndex: 50,
        transition: { duration: 0.2, ease: "easeOut" } 
      }}
    >
      {/* Base Card */}
      <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-lg">
        {/* Background Gradient & Icon */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent z-10" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity duration-500">
             <skill.icon size={120} color={skill.color} className="blur-md transform translate-x-8 translate-y-8" />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end p-5">
          <div className="flex items-center gap-3 mb-2">
            <skill.icon size={26} color={skill.color} className="drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display font-bold text-white text-lg tracking-wide drop-shadow-md">
              {skill.name}
            </h3>
          </div>
          
          <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] uppercase font-mono tracking-wider text-gray-300 bg-white/10 px-2 py-0.5 rounded border border-white/5">
              {skill.level}
            </span>
            <div className="flex gap-1.5 flex-wrap">
              {skill.tags.map((tag: string) => (
                <span key={tag} className="text-[10px] text-gray-400">
                  • {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Hover Highlight Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-colors duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

const TechFlix: React.FC = () => {
  return (
    <section className="relative py-24 bg-gemini-dark overflow-hidden z-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gemini-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gemini-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gemini-primary/10 border border-gemini-primary/20 text-gemini-primary text-xs font-mono mb-6"
            >
              <Sparkles size={14} />
              <span>ARSENAL DIGITAL</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
            >
              Stack Tecnológico
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
            >
              Explora mis herramientas y lenguajes favoritos organizados en una cuadrícula interactiva.
            </motion.p>
        </div>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={category.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 group/row"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-display font-bold text-white">
                  {category.title}
                </h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              
              {/* Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechFlix;
