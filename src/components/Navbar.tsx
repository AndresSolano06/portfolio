import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-darkBackground bg-opacity-70 backdrop-blur-md p-3 z-50 shadow-md">
      <div className="container mx-auto max-w-screen-lg flex items-center justify-between px-6">
        
        {/* Sección Izquierda - Logo y Título */}
        <div className="flex flex-col items-start">
          <h1 className="text-cyberGreen text-lg font-bold glow">Andres Solano</h1>
          <h3 className="text-cyberGreen text-xs font-semibold glow opacity-80">
            Backend Developer
          </h3>
        </div>

        {/* Sección Central - Links de Navegación */}
        <ul className="flex space-x-8 text-sm">
          <li>
            <a href="#home" className="text-white hover:text-cyberGreen transition duration-300">
              Inicio
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-cyberGreen transition duration-300">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-cyberGreen transition duration-300">
              Sobre Mí
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-cyberGreen transition duration-300">
              Contacto
            </a>
          </li>
        </ul>

        {/* Sección Derecha - Botón de Acción */}
        <button className="px-4 py-2 bg-cyberGreen text-black rounded-lg shadow-lg hover:shadow-cyberGreen glow transition duration-300 text-xs font-semibold">
          Explorar
        </button>
      </div>
    </nav>
  );
}
