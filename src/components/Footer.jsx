import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-800 text-purple-200 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-purple-100">Portafolio</p>
          </div>
  
          <div className="text-sm text-purple-300">
            &copy; {currentYear} Todos los derechos reservados
          </div>
  
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#home"
                  className="hover:text-purple-400 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-purple-400 transition-colors"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-purple-400 transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
  
};

export default Footer;
