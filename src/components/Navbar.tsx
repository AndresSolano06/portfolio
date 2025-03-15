"use client";

import Link from "next/link";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Andres Solano</div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link href="#home">Inicio</Link>
        <Link href="#about">Sobre Mí</Link>
        <Link href="#projects">Proyectos</Link>
        <Link href="#contact">Contacto</Link>
      </div>
    </nav>
  );
}
