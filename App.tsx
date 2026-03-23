import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import Profile from './components/Profile';
import TechFlix from './components/TechFlix';
import Experience from './components/Experience';
import AIManifesto from './components/AIManifesto';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-gemini-dark min-h-screen text-white selection:bg-gemini-primary selection:text-white overflow-hidden">
      
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gemini-primary via-gemini-secondary to-gemini-accent origin-left z-50"
        style={{ scaleX }}
      />

      {/* 3D Background */}
      <Background3D />

      <div className="relative z-10">
        <Hero />
        <Profile />
        <TechFlix />
        <Experience />
        <AIManifesto />
        <Footer />
      </div>
    </main>
  );
};

export default App;
