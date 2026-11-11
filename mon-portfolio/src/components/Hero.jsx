import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

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
            <span className="hero-subtitle">Développeuse Web Full-Stack · React &amp; Laravel</span>
          </h1>

          <p className="hero-description">
            Je conçois des applications web de la maquette jusqu'à la mise en ligne,
            avec des interfaces modernes et responsives, pensées pour ceux qui les utilisent.
          </p>

          <div className="hero-info">
            <span><FaMapMarkerAlt className="hero-info-icon" aria-hidden="true" /> Cotonou, Bénin</span>
            <span><FaEnvelope className="hero-info-icon" aria-hidden="true" /> botonkpdt@gmail.com</span>
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