import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-darkBackground bg-opacity-80 backdrop-blur-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-cyberGreen text-2xl font-bold glow">CyberNature</h1>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="#home" className="text-white hover:text-cyberGreen transition duration-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-white hover:text-cyberGreen transition duration-300">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-white hover:text-cyberGreen transition duration-300">
              Sobre Mí
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:text-cyberGreen transition duration-300">
              Contacto
            </Link>
          </li>
        </ul>

        {/* Botón Especial */}
        <button className="px-4 py-2 bg-cyberGreen text-black rounded-lg shadow-lg hover:shadow-cyberGreen glow transition duration-300">
          Explorar
        </button>
      </div>
    </nav>
  );
}
