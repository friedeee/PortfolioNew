import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Gestion de Loyer",
    category: "React",
    description: "Application complète de gestion de loyers avec frontend et backend séparés.",
    image: "🏠",
    tech: ["React", "Node.js"],
    demo: "#",
    github: "https://github.com/friedeee/GestionDeLoyer"
  },
  {
    id: 2,
    title: "Prêt-porter",
    category: "Web",
    description: "Site de vente de vêtements en ligne avec interface moderne.",
    image: "👗",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/friedeee/Prt-porter"
  },
  {
    id: 3,
    title: "Quiz App",
    category: "React",
    description: "Application de quiz interactive avec score en temps réel.",
    image: "🧠",
    tech: ["React", "JavaScript"],
    demo: "#",
    github: "https://github.com/friedeee/Quiz"
  },
  {
    id: 4,
    title: "Générateur de Reçu",
    category: "Web",
    description: "Outil de génération automatique de reçus personnalisés.",
    image: "🧾",
    tech: ["JavaScript", "CSS"],
    demo: "#",
    github: "https://github.com/friedeee/generateur_recu"
  },
  {
    id: 5,
    title: "Carte 3D",
    category: "Animation",
    description: "Carte interactive avec effets 3D en CSS pur.",
    image: "🃏",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/friedeee/carte-3D"
  },
  {
    id: 6,
    title: "Ma Page Personnelle",
    category: "Web",
    description: "Ma première page web avec HTML, CSS et JavaScript.",
    image: "🌐",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/friedeee/ma-page-personnelle"
  },
  {
  id: 7,
  title: "Clone Google",
  category: "Web",
  description: "Clone de la page d'accueil Google avec barre de recherche et logo multicolore.",
  image: "🔍",
  tech: ["HTML", "CSS"],
  demo: "https://clone-google-eight.vercel.app",
  github: "https://github.com/friedeee/Clone-Google"
},
{
  id: 8,
  title: "Clone Netflix",
  category: "Web",
  description: "Clone de la page hero Netflix avec image de fond, overlay et boutons stylisés.",
  image: "🎬",
  tech: ["HTML", "CSS"],
  demo: "https://clone-netflix-seven-chi.vercel.app",
  github: "https://github.com/friedeee/clone-netflix"
},
{
  id: 9,
  title: "Clone Twitter/X",
  category: "React",
  description: "Clone de cards Twitter avec like interactif et compteurs en temps réel.",
  image: "🐦",
  tech: ["React", "useState", "CSS"],
  demo: "https://clone-twitter-opal.vercel.app",
  github: "https://github.com/friedeee/clone-twitter"
},
];

function Projects() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "React", "Web", "Animation"];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Portfolio</span>
          <h2>Mes projets</h2>
          <p>Une sélection de mes réalisations</p>
        </motion.div>

        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === "all" ? "Tous" : cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;