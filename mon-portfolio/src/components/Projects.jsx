import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "E-commerce Luxe",
    category: "React",
    description: "Plateforme e-commerce avec panier intelligent et paiement sécurisé",
    image: "🛍️",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    category: "Data Viz",
    description: "Tableau de bord interactif pour visualisation de données en temps réel",
    image: "📊",
    tech: ["Vue.js", "D3.js", "Express", "Socket.io"],
    demo: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Application Mobile",
    category: "Mobile",
    description: "App de fitness avec suivi d'activités et challenges sociaux",
    image: "📱",
    tech: ["React Native", "Firebase", "Redux"],
    demo: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Portfolio Artistique",
    category: "Design",
    description: "Galerie interactive pour artistes avec animations fluides",
    image: "🎨",
    tech: ["Three.js", "GSAP", "WebGL"],
    demo: "#",
    github: "#"
  }
];

function Projects() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "React", "Data Viz", "Mobile", "Design"];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projets" className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">✨ Portfolio</span>
          <h2>Mes créations récentes</h2>
          <p>Découvrez une sélection de mes projets favoris</p>
        </motion.div>

        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
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
                    <a href={project.github}><FaGithub /></a>
                    <a href={project.demo}><FaExternalLinkAlt /></a>
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