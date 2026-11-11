import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { contact } from '../donnees';

function Footer() {
  return (
    <footer className="pied">
      <div className="conteneur pied-ligne">
        <div>
          <p className="logo"><span className="logo-initiales" aria-hidden="true">EB</span> BOTON Kpèdétin Elfriede</p>
          <p className="texte-doux">Développeuse web full-stack · React &amp; Laravel · {contact.ville}</p>
        </div>
        <div className="pied-droite">
          <span className="reseaux">
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </span>
          <button type="button" className="haut" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Revenir en haut">
            <FaArrowUp />
          </button>
        </div>
      </div>
      <p className="conteneur pied-bas texte-doux">© {new Date().getFullYear()} BOTON Kpèdétin Elfriede. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
