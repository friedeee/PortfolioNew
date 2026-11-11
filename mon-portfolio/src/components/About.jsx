import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaLayerGroup, FaRocket, FaGraduationCap } from 'react-icons/fa';
import { parcours, formation } from '../donnees';

const visible = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const atouts = [
  { icone: FaLayerGroup, titre: 'Full-stack', texte: "Interface en React, serveur en Laravel ou Node.js : je fais le lien entre les deux." },
  { icone: FaMobileAlt, titre: 'Pensé pour le téléphone', texte: "Des sites qui marchent bien sur mobile, avec WhatsApp, et même sans connexion." },
  { icone: FaRocket, titre: "Jusqu'en ligne", texte: 'Je ne m’arrête pas à la maquette : tests, déploiement et suivi compris.' },
];

function About() {
  return (
    <>
      <section id="about" className="section">
        <div className="conteneur apropos">
          <motion.div {...visible}>
            <p className="sur-titre">À propos</p>
            <h2>Des idées locales, des outils <span className="degrade">solides</span>.</h2>
            <p className="texte-doux">
              Diplômée d'une licence en Génie Logiciel à l'IFRI, j'ai enchaîné cinq stages qui m'ont fait passer
              du frontend pur à des applications complètes. J'aime partir d'un vrai besoin, comme les vendeuses
              d'huile rouge qui veulent connaître le prix du jour, et en faire un outil simple qu'elles utilisent vraiment.
            </p>
          </motion.div>
          <div className="atouts">
            {atouts.map((a, i) => (
              <motion.article key={a.titre} className="carte atout" {...visible} transition={{ ...visible.transition, delay: i * 0.1 }}>
                <span className="atout-icone" aria-hidden="true"><a.icone /></span>
                <h3>{a.titre}</h3>
                <p>{a.texte}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="parcours" className="section section-teintee">
        <div className="conteneur">
          <motion.div className="section-entete" {...visible}>
            <p className="sur-titre">Parcours</p>
            <h2>Cinq stages, une même envie : livrer.</h2>
          </motion.div>
          <div className="parcours-grille">
            <ol className="frise">
              {parcours.map((p, i) => (
                <motion.li key={p.lieu} className={p.actuel ? 'actuel' : ''} {...visible} transition={{ ...visible.transition, delay: i * 0.08 }}>
                  <span className="frise-date">{p.periode}</span>
                  <h3>{p.titre}</h3>
                  <p className="frise-lieu">{p.lieu}{p.actuel && <span className="badge-actuel">En cours</span>}</p>
                  <p className="texte-doux">{p.texte}</p>
                </motion.li>
              ))}
            </ol>
            <motion.aside className="carte formation" {...visible}>
              <span className="atout-icone" aria-hidden="true"><FaGraduationCap /></span>
              <h3>Formation</h3>
              {formation.map((f) => (
                <div key={f.titre} className="formation-ligne">
                  <span className="frise-date">{f.periode}</span>
                  <b>{f.titre}</b>
                  <span className="texte-doux">{f.lieu}</span>
                </div>
              ))}
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
