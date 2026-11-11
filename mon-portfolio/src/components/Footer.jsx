import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">
          <div>
            <h3 className="footer-title">BOTON Kpèdétin Elfriede</h3>
            <p className="footer-subtitle">Développeuse Web Full-Stack · React &amp; Laravel</p>
            <p className="footer-subtitle" style={{ marginTop: '8px' }}>
              <FaMapMarkerAlt style={{ marginRight: '8px', color: '#ff6b35' }} aria-hidden="true" />
              Cotonou, Bénin
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav">
              <li><a href="#about">À propos</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-subtitle">
              <FaEnvelope style={{ marginRight: '8px', color: '#ff6b35' }} />
              botonkpdt@gmail.com
            </p>
            <h4 className="footer-heading" style={{ marginTop: '20px' }}>Suivez-moi</h4>
            <div className="footer-social">
              <a href="https://github.com/friedeee" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/friedeee-boton-446b1a3b7/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/elle200207" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} BOTON Kpèdétin Elfriede — Tous droits réservés.</p>
          <button onClick={scrollToTop} className="scroll-top-btn">
            <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;