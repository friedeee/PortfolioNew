import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaArrowRight, FaDownload, FaReact, FaLaravel } from 'react-icons/fa';
import { contact, chiffres } from '../donnees';

const apparition = (delai) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: delai, ease: [0.22, 1, 0.36, 1] },
});

function Hero() {
  const aller = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="accueil" className="heros">
      <div className="heros-lueur heros-lueur-1" aria-hidden="true" />
      <div className="heros-lueur heros-lueur-2" aria-hidden="true" />
      <div className="conteneur heros-grille">
        <div className="heros-texte">
          <motion.p className="disponible" {...apparition(0)}>
            <span className="point-vert" aria-hidden="true" /> Disponible pour un poste ou une mission
          </motion.p>
          <motion.h1 {...apparition(0.1)}>
            Bonjour, je suis <span className="degrade">Elfriede</span>.<br />
            Je construis des applications web <em>utiles</em>.
          </motion.h1>
          <motion.p className="heros-intro" {...apparition(0.2)}>
            Développeuse web full-stack <b>React &amp; Laravel</b> à Cotonou. Je conçois des applications
            de la maquette jusqu'à la mise en ligne, pensées pour ceux qui les utilisent : sur téléphone,
            avec WhatsApp, et même sans Internet.
          </motion.p>
          <motion.div className="heros-actions" {...apparition(0.3)}>
            <button type="button" className="bouton bouton-plein" onClick={() => aller('projects')}>
              Voir mes projets <FaArrowRight aria-hidden="true" />
            </button>
            <a href={contact.cv} download className="bouton bouton-contour">
              <FaDownload aria-hidden="true" /> Télécharger mon CV
            </a>
          </motion.div>
          <motion.div className="heros-bas" {...apparition(0.4)}>
            <span className="heros-lieu"><FaMapMarkerAlt aria-hidden="true" /> {contact.ville}</span>
            <span className="reseaux">
              <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </span>
          </motion.div>
        </div>

        <motion.div
          className="heros-photo"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="photo-cadre">
            <img src="/Photopro.png" alt="Elfriede BOTON" />
          </div>
          <motion.span className="pastille pastille-1" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
            <FaReact aria-hidden="true" /> React
          </motion.span>
          <motion.span className="pastille pastille-2" animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
            <FaLaravel aria-hidden="true" /> Laravel
          </motion.span>
        </motion.div>
      </div>

      <div className="conteneur">
        <motion.ul className="chiffres" {...apparition(0.5)}>
          {chiffres.map((c) => (
            <li key={c.libelle}><b>{c.valeur}</b><span>{c.libelle}</span></li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default Hero;
