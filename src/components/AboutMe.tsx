'use client';

import { motion } from 'framer-motion';
import './aboutme.css';

const skills = [
  { title: "Backend & APIs", description: "Desarrollo de APIs robustas con .NET y SQL Server.", icon: "⚙️" },
  { title: "Seguridad", description: "Implementación de autenticación biométrica y cifrado.", icon: "🔒" },
  { title: "Café & Código", description: "Nada como programar con un buen café en mano.", icon: "☕" },
];

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="aboutContainer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} 
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="title"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ duration: 1 }}
      >
        Sobre Mí
      </motion.h2>
      
      <motion.p
        className="description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ duration: 1, delay: 0.2 }}
      >
        Soy un desarrollador backend con pasión por la tecnología, la naturaleza y un buen café.
        Me encanta crear soluciones eficientes, seguras y escalables, fusionando lógica y creatividad
        en cada línea de código.
      </motion.p>

      <div className="cardContainer">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <span className="icon">{skill.icon}</span>
            <h3 className="cardTitle">{skill.title}</h3>
            <p className="cardDescription">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutMe;
