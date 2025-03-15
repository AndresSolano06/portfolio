'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Fondo con imagen ajustado */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/hero-backgroundV4.jpg')" }}
      />

      {/* Contenido del Hero */}
      <motion.div 
        className="relative text-center p-6 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold tracking-wide text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
          Código, naturaleza y un café
        </h1>
        <p className="mt-4 text-lg text-gray-300 opacity-80">
          Desarrollo software con la precisión de un algoritmo y la calma de un bosque.
        </p>
        <motion.button
          className="mt-6 px-6 py-3 text-lg font-semibold bg-cyan-500 hover:bg-cyan-700 rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explorar
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;