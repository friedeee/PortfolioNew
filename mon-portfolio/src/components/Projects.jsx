import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaExternalLinkAlt, FaTint, FaStore, FaFeatherAlt, FaHome, FaTshirt, FaBrain,
  FaReceipt, FaCube, FaGlobe, FaSearch, FaFilm, FaTwitter, FaAirbnb, FaSpotify, FaWhatsapp,
  FaInstagram, FaPenNib, FaAddressBook,
} from 'react-icons/fa';

const projects = [
  {
    id: 'amivovo',
    title: "Amì vɔ̀vɔ̀",
    category: "Web",
    featured: true,
    description: "Prix de l'huile rouge marché par marché au Bénin : carte interactive, courbes et alertes de prix. Les vendeuses publient leurs annonces depuis leur téléphone, sans compte. Application installable qui marche sans Internet.",
    icon: FaTint,
    tech: ["JavaScript", "PWA", "Google Sheets", "Leaflet"],
    demo: "https://amivovo.vercel.app",
    github: "https://github.com/friedeee/amivovo"
  },
  {
    id: 'kanvo',
    title: "Kanvô",
    category: "Laravel",
    featured: true,
    description: "Place de marché multi-vendeurs : une boutique par vendeur, commande par WhatsApp, comptes créés sur invitation par e-mail sécurisée, espace vendeur et 87 tests automatisés.",
    icon: FaStore,
    tech: ["Laravel", "React", "Inertia.js", "Tailwind CSS"],
    demo: "#",
    github: "https://github.com/friedeee/kanvo-connect"
  },
  {
    id: 'maxavic',
    title: "Max Avic",
    category: "Web",
    description: "Site vitrine d'un élevage de cailles : produits, galerie photo et commande par WhatsApp.",
    icon: FaFeatherAlt,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://maxavic.vercel.app",
    github: "https://github.com/friedeee/MaxAvic"
  },
  {
    id: 1,
    title: "Gestion de Loyer",
    category: "React",
    description: "Application complète de gestion de loyers avec frontend et backend séparés.",
    icon: FaHome,
    tech: ["React", "Node.js"],
    demo: "#",
    github: "https://github.com/friedeee/GestionDeLoyer"
  },
  {
    id: 15,
    title: "App Gestion Contacts",
    category: "React",
    description: "App CRUD complète avec React, Node.js, Express et MySQL. Favoris, historique d'appels et export CSV.",
    icon: FaAddressBook,
    tech: ["React", "Node.js", "Express", "MySQL"],
    demo: "#",
    github: "https://github.com/friedeee/app-contacts"
  },
  {
    id: 14,
    title: "Blog Next.js",
    category: "React",
    description: "Blog personnel avec Next.js, Tailwind CSS, routing dynamique et pages statiques.",
    icon: FaPenNib,
    tech: ["Next.js", "Tailwind CSS", "JavaScript"],
    demo: "https://mon-blog-mu.vercel.app",
    github: "https://github.com/friedeee/NextMon-blog"
  },
  {
    id: 2,
    title: "Prêt-porter",
    category: "Web",
    description: "Site de vente de vêtements en ligne avec interface moderne.",
    icon: FaTshirt,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/friedeee/Prt-porter"
  },
  {
    id: 3,
    title: "Quiz App",
    category: "React",
    description: "Application de quiz interactive avec score en temps réel.",
    icon: FaBrain,
    tech: ["React", "JavaScript"],
    demo: "#",
    github: "https://github.com/friedeee/Quiz"
  },
  {
    id: 4,
    title: "Générateur de Reçu",
    category: "Web",
    description: "Outil de génération automatique de reçus personnalisés.",
    icon: FaReceipt,
    tech: ["JavaScript", "CSS"],
    demo: "#",
    github: "https://github.com/friedeee/generateur_recu"
  },
  {
    id: 5,
    title: "Carte 3D",
    category: "Animation",
    description: "Carte interactive avec effets 3D en CSS pur.",
    icon: FaCube,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/friedeee/carte-3D"
  },
  {
    id: 6,
    title: "Ma Page Personnelle",
    category: "Web",
    description: "Ma première page web avec HTML, CSS et JavaScript.",
    icon: FaGlobe,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/friedeee/ma-page-personnelle"
  },
  {
    id: 7,
    title: "Clone Google",
    category: "Web",
    description: "Clone de la page d'accueil Google avec barre de recherche et logo multicolore.",
    icon: FaSearch,
    tech: ["HTML", "CSS"],
    demo: "https://clone-google-eight.vercel.app",
    github: "https://github.com/friedeee/Clone-Google"
  },
  {
    id: 8,
    title: "Clone Netflix",
    category: "Web",
    description: "Clone de la page hero Netflix avec image de fond, overlay et boutons stylisés.",
    icon: FaFilm,
    tech: ["HTML", "CSS"],
    demo: "https://clone-netflix-seven-chi.vercel.app",
    github: "https://github.com/friedeee/clone-netflix"
  },
  {
    id: 9,
    title: "Clone Twitter/X",
    category: "React",
    description: "Clone de cards Twitter avec like interactif et compteurs en temps réel.",
    icon: FaTwitter,
    tech: ["React", "useState", "CSS"],
    demo: "https://clone-twitter-opal.vercel.app",
    github: "https://github.com/friedeee/clone-twitter"
  },
  {
    id: 10,
    title: "Clone Airbnb",
    category: "React",
    description: "Clone Airbnb avec recherche, filtres, modal de réservation et panier interactif.",
    icon: FaAirbnb,
    tech: ["React", "useState", "CSS"],
    demo: "https://clone-airbnb-three.vercel.app",
    github: "https://github.com/friedeee/clone-airbnb"
  },
  {
    id: 11,
    title: "Clone Spotify",
    category: "React",
    description: "Clone Spotify avec playlists, lecture, mode aléatoire, répétition et recherche.",
    icon: FaSpotify,
    tech: ["React", "useState", "useEffect", "CSS"],
    demo: "https://clone-spotify-steel.vercel.app",
    github: "https://github.com/friedeee/clone-spotify"
  },
  {
    id: 12,
    title: "Clone WhatsApp",
    category: "React",
    description: "Clone WhatsApp avec chat en temps réel, réactions, statut en ligne et emojis.",
    icon: FaWhatsapp,
    tech: ["React", "useState", "useEffect", "CSS"],
    demo: "https://clone-whatsapp-ecru.vercel.app",
    github: "https://github.com/friedeee/clone-whatsapp"
  },
  {
    id: 13,
    title: "Clone Instagram",
    category: "React",
    description: "Clone Instagram avec profil, stories, grille de photos, recherche et navigation.",
    icon: FaInstagram,
    tech: ["React", "useState", "CSS"],
    demo: "https://clone-instagram-ecru.vercel.app",
    github: "https://github.com/friedeee/clone-instagram"
  },
];

function Projects() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "Laravel", "React", "Web", "Animation"];

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
          {filteredProjects.map((project, index) => {
            const Icone = project.icon;
            return (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'project-featured' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  {project.featured && <span className="project-badge">Projet phare</span>}
                  <Icone className="project-icon" aria-hidden="true" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Code de ${project.title} sur GitHub`}>
                        <FaGithub />
                      </a>
                      {project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Voir ${project.title} en ligne`}>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
