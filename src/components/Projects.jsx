import React, { useState, useEffect } from "react";
import projectsData from "../data/projects.json";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-purple-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl max-w-sm mx-auto">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-purple-500">{project.name}</h3>
        <p className="text-purple-500 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-300 text-purple-800 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-300 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors"
          >
            Ver Proyecto
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-300 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-800 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProjects(projectsData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center text-purple-600">
        Cargando proyectos...
      </div>
    );
  }

  return (
    <section id="projects" className="bg-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-500">Proyectos personales</h2>
          <div className="w-20 h-1 bg-purple-400 mx-auto mt-4 mb-6"></div>
          <p className="text-purple-800 max-w-2xl mx-auto">
            Lista de proyectos personales que utilizan tecnologías como Javascript, Typescript y React
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
