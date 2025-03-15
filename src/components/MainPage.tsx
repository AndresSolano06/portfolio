"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import "./mainpage.css";

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
  { title: "Backend & APIs", description: "Desarrollo de APIs con .NET y SQL Server.", icon: "⚙️" },
  { title: "Seguridad", description: "Autenticación biométrica y ciberseguridad.", icon: "🔒" },
  { title: "DevOps & Cloud", description: "Azure, AWS, Docker y Kubernetes.", icon: "☁️" },
  { title: "Arquitectura de Software", description: "Diseño de sistemas escalables.", icon: "🏛️" },
  { title: "Control de Versiones", description: "Gestión de código con Git y GitHub.", icon: "🛠️" },
  { title: "Café & Código", description: "Nada como programar con un buen café.", icon: "☕" },
];

export default function MainPage() {
  return (
    <motion.div className="main-container">
      <Particles id="tsparticles" options={particlesOptions} className="particles" />

      {/* ✅ Sección Home */}
      <motion.div id="home" className="main-content">
        <h1 className="main-title">Código, naturaleza y un café ☕🌿💻</h1>
        <p className="main-text">
          Desarrollo software con la precisión de un algoritmo y la calma de un bosque.
        </p>
        <button className="main-button">Explorar</button>
      </motion.div>

      {/* ✅ Sección "Sobre Mí" */}
      <section id="about" className="about-container">
        <h2 className="about-title">Sobre Mí</h2>
        <p className="about-text">
          Soy un desarrollador backend con pasión por la tecnología, la naturaleza y un buen café.
        </p>
        <div className="card-container">
          {skills.map((skill, index) => (
            <motion.div key={index} className="card">
              <span className="icon">{skill.icon}</span>
              <h3 className="card-title">{skill.title}</h3>
              <p className="card-description">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
