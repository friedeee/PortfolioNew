import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';
import { projetsPhares, projets } from '../donnees';

const visible = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

/** Capture d'écran du projet, ou à défaut son icône sur un fond dégradé. */
function Apercu({ projet, grand = false }) {
  const Icone = projet.icone;
  return (
    <div className={`apercu ${grand ? 'apercu-grand' : ''}`}>
      <div className="navigateur" aria-hidden="true"><i /><i /><i /></div>
      {projet.image
        ? <img src={projet.image} alt={`Aperçu de ${projet.titre}`} loading="lazy" />
        : <div className="apercu-icone"><Icone aria-hidden="true" /></div>}
    </div>
  );
}

function Liens({ projet }) {
  return (
    <div className="liens-projet">
      {projet.demo && (
        <a href={projet.demo} target="_blank" rel="noreferrer" className="bouton bouton-plein bouton-petit">
          Voir en ligne <FaExternalLinkAlt aria-hidden="true" />
        </a>
      )}
      <a href={projet.github} target="_blank" rel="noreferrer" className="bouton bouton-contour bouton-petit">
        <FaGithub aria-hidden="true" /> Code
      </a>
    </div>
  );
}

function Projects() {
  const [filtre, setFiltre] = useState('Tous');
  const [tout, setTout] = useState(false);
  const filtres = ['Tous', 'React', 'Web'];
  const liste = projets.filter((p) => filtre === 'Tous' || p.categorie === filtre);
  const affiches = tout ? liste : liste.slice(0, 6);

  return (
    <section id="projects" className="section">
      <div className="conteneur">
        <motion.div className="section-entete" {...visible}>
          <p className="sur-titre">Projets</p>
          <h2>Ce que j'ai construit</h2>
          <p className="texte-doux">Deux projets dont je suis fière, puis une sélection de mes réalisations.</p>
        </motion.div>

        <div className="phares">
          {projetsPhares.map((p, i) => (
            <motion.article key={p.id} className={`carte phare ${i % 2 ? 'phare-inverse' : ''}`} {...visible}>
              <Apercu projet={p} grand />
              <div className="phare-texte">
                <span className="badge-phare">Projet phare</span>
                <h3>{p.titre}</h3>
                <p className="phare-sous-titre">{p.sousTitre}</p>
                <p className="texte-doux">{p.description}</p>
                <ul className="phare-points">
                  {p.points.map((point) => <li key={point}><FaCheck aria-hidden="true" /> {point}</li>)}
                </ul>
                <div className="etiquettes">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                <Liens projet={p} />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="filtres" role="group" aria-label="Filtrer les projets">
          {filtres.map((f) => (
            <button key={f} type="button" className={filtre === f ? 'actif' : ''} aria-pressed={filtre === f} onClick={() => { setFiltre(f); setTout(false); }}>
              {f}
            </button>
          ))}
        </div>

        <motion.div className="grille-projets" layout>
          <AnimatePresence mode="popLayout">
            {affiches.map((p) => (
              <motion.article
                key={p.id}
                className="carte projet"
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <Apercu projet={p} />
                <div className="projet-texte">
                  <h3>{p.titre}</h3>
                  <p className="texte-doux">{p.description}</p>
                  <div className="etiquettes">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                  <Liens projet={p} />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {liste.length > 6 && (
          <div className="centre">
            <button type="button" className="bouton bouton-contour" onClick={() => setTout(!tout)}>
              {tout ? 'Voir moins' : `Voir les ${liste.length} projets`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
