import React, { useState, useEffect } from "react";
import personalData from "../data/personal.json";

const About = () => {
  const [personal, setPersonal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load personal data
    setPersonal(personalData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">Cargando...</div>
    );
  }

  // Split the paragraphs based on new lines
  const bioParagraphs = personal.fullBio.split("\n\n");

  return (
    <section id="about" className="bg-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-12">
          <h2 className="text-4xl font-bold text-purple-400">Sobre Mí</h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
            <div className="bg-purple-50 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-purple-300 font-extrabold">4+</div>
              <div className="text-purple-300 text-lg mt-2">Años de Experiencia</div>
            </div>
  
            <div className="bg-purple-50 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-purple-300 font-extrabold">10+</div>
              <div className="text-purple-300 text-lg mt-2">Proyectos Completados</div>
            </div>
  
            <div className="bg-purple-50 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-purple-300 font-extrabold">15+</div>
              <div className="text-purple-300 text-lg mt-2">Tecnologías</div>
            </div>
  
            <div className="bg-purple-50 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-purple-300 font-extrabold">5+</div>
              <div className="text-purple-300 text-lg mt-2">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default About;
