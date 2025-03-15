'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import './mainpage.css';

const particlesOptions: ISourceOptions = {
  background: { color: "transparent" },
  particles: {
    number: { value: 80, density: { enable: true, area: 800 } },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: { min: 0.2, max: 0.5 } },
    size: { value: { min: 1, max: 3 } },
    move: { enable: true, speed: 1.5, direction: "none", outModes: { default: "out" } },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
    },
  },
};

const skills = [
  { title: "Backend & APIs", description: "Desarrollo de APIs robustas con .NET y SQL Server.", icon: "⚙️" },
  { title: "Seguridad", description: "Implementación de autenticación biométrica y cifrado.", icon: "🔒" },
  { title: "Café & Código", description: "Nada como programar con un buen café en mano.", icon: "☕" },
];

export default function MainPage() {
  useEffect(() => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <motion.div className="main-container">
      <div className="main-background"></div>
      <Particles id="tsparticles" options={particlesOptions} className="particles" />

      <motion.div className="main-content">
        <motion.h1 className="main-title" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          Código, naturaleza y un café ☕🌿💻
        </motion.h1>

        <motion.p className="main-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          Desarrollo software con la precisión de un algoritmo y la calma de un bosque.
        </motion.p>

        <motion.button className="main-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Explorar
        </motion.button>
      </motion.div>

      <motion.section id="about" className="about-container">
        <motion.h2 className="about-title" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          Sobre Mí
        </motion.h2>

        <motion.p className="about-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          Soy un desarrollador backend con pasión por la tecnología, la naturaleza y un buen café.
        </motion.p>

        <div className="card-container">
          {skills.map((skill, index) => (
            <motion.div key={index} className="card" whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.6)" }}>
              <span className="icon">{skill.icon}</span>
              <h3 className="card-title">{skill.title}</h3>
              <p className="card-description">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
