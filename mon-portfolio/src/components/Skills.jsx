import React from 'react';
import { motion } from 'framer-motion';
import { competences } from '../donnees';

function Skills() {
  return (
    <section id="skills" className="section section-teintee">
      <div className="conteneur">
        <motion.div
          className="section-entete"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="sur-titre">Compétences</p>
          <h2>Mes outils de travail</h2>
        </motion.div>
        <div className="grille-competences">
          {competences.map((g, i) => (
            <motion.article
              key={g.groupe}
              className="carte competence"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3>{g.groupe}</h3>
              <p className="texte-doux">{g.texte}</p>
              <ul className="techno-liste">
                {g.items.map((t) => (
                  <li key={t.nom}><t.icone aria-hidden="true" /> {t.nom}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
