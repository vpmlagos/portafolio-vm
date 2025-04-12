import React, { useState, useEffect } from "react";
import personalData from "../data/personal.json";

const Hero = () => {
  const [personal, setPersonal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load personal data
    setPersonal(personalData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Cargando...
      </div>
    );
  }

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100 min-h-[50vh]"
    >
      
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left animate-fade-in">
          <p className="font-sans text-white border-pink-50 text-secondary font-extrabold text-lg">Hola, soy</p>
          <h1 className="font-sans text-4xl text-white border-pink-50 font-extrabold sm:text-6xl">
            {personal.name}
          </h1>
          <h2 className="font-sans text-2xl md:text-3xl text-white border-pink-50 font-extrabold mb-2">
            {personal.profession}
          </h2>
          <p className="font-sans text-lg text-white border-pink-50 font-bold mb-4 max-w-lg mx-auto md:mx-0">
            {personal.shortBio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-block bg-fuchsia-300 hover:bg-yellow-300/90 text-white py-3 px-8 rounded-lg shadow-lg transition-colors"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="inline-block bg-fuchsia-300 hover:bg-yellow-300/90 text-white py-3 px-8 rounded-lg shadow-lg  transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
