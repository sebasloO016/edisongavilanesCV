import React, { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  Code, 
  Coffee, 
  FileCode, 
  Server, 
  Database, 
  Layout, 
  Palette, 
  GitBranch, 
  Cpu, 
} from 'lucide-react';

const skills = [
  { name: 'C#', icon: Code, level: 'Advanced', color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { name: 'Java', icon: Coffee, level: 'Advanced', color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { name: 'JavaScript', icon: FileCode, level: 'Intermediate', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { name: '.NET', icon: Server, level: 'Advanced', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'SQL Server', icon: Database, level: 'Intermediate', color: 'text-red-500', bg: 'bg-red-500/10' },
  { name: 'HTML', icon: Layout, level: 'Advanced', color: 'text-orange-600', bg: 'bg-orange-600/10' },
  { name: 'CSS', icon: Palette, level: 'Advanced', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { name: 'GitLab', icon: GitBranch, level: 'Intermediate', color: 'text-orange-700', bg: 'bg-orange-700/10' },
  { name: 'AI Integration', icon: Cpu, level: 'Expert', color: 'text-gemini-accent', bg: 'bg-gemini-accent/10' },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl border border-white/10 bg-white/5 px-6 py-8 overflow-hidden hover:border-white/20 transition-colors"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`p-4 rounded-full ${skill.bg} transition-colors duration-300 group-hover:bg-opacity-20`}
        >
          <skill.icon size={32} strokeWidth={1.5} className={skill.color} />
        </motion.div>
        
        <div>
          <h3 className="text-lg font-medium text-white group-hover:text-gemini-primary transition-colors">
            {skill.name}
          </h3>
          <span className="text-xs text-gray-500 uppercase tracking-wider mt-1 block group-hover:text-gray-300 transition-colors">
            {skill.level}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="relative py-24 px-6 z-10 bg-gemini-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 animate-text-shimmer bg-[length:200%_auto]">
              Stack Tecnológico
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gemini-primary to-gemini-secondary rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Herramientas y lenguajes que utilizo para construir soluciones robustas y escalables.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
