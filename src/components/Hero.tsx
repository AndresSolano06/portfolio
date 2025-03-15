'use client';

import { motion } from 'framer-motion';
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import './hero.css'; // ✅ Manteniendo los estilos en CSS

// ✅ Configuración de partículas corregida
const particlesOptions: ISourceOptions = {
  background: {
    color: "transparent", // ✅ Se asegura que no tape el fondo
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        width: 800,
        height: 800,
      },
    },
    color: {
      value: "#00ffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.2, max: 0.5 },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      outModes: {
        default: "out",
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
  },
};

const Hero = () => {
  return (
    <motion.div 
      className="hero-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* ✅ Fondo con imagen asegurando visibilidad */}
      <div className="hero-background"></div>

      {/* ✅ Partículas manteniendo el fondo visible */}
      <Particles id="tsparticles" options={particlesOptions} className="particles" />

      {/* Contenido del Hero */}
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <h1 className="hero-title">
          Código, naturaleza y un café ☕🌿💻
        </h1>
        <p className="hero-text">
          Desarrollo software con la precisión de un algoritmo y la calma de un bosque.
        </p>
        <motion.button className="hero-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Explorar
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
