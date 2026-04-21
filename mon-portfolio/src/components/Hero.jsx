import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-image">
          <img src="/Photopro.png" alt="Elfriede BOTON" />
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge">Disponible immédiatement</span>
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">BOTON Kpèdétin Elfriede</span>
            <br />
            <span className="hero-subtitle">Développeuse Web Junior</span>
          </h1>

          <p className="hero-description">
            Je transforme des idées en expériences numériques élégantes.
            Spécialisée dans la création d'interfaces modernes et responsives.
          </p>

          <div className="hero-info">
            <span>📍 Cotonou, Bénin</span>
            <span>📧 botonkpdt@gmail.com</span>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              Voir mes projets
            </button>
            <button className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Me contacter
            </button>
            <a href="/CV_BOTON_Kpèdétin_Elfriede.pdf" download="CV_BOTON_Kpèdétin_Elfriede.pdf" className="btn-cv">
              Télécharger mon CV
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/friedeee" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/friedeee-boton-446b1a3b7/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/elle200207" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;