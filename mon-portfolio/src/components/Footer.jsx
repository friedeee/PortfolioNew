import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">Elfriede BOTON</h3>
            <p className="footer-subtitle">Créative & Développeuse</p>
          </div>

          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#projets">Projets</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Suivez-moi</h4>
            <div className="footer-social">
              <a href="https://github.com/friedeee" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/friedeee-boton-446b1a3b7/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Elfriede BOTON. Tous droits réservés.</p>
          <div className="footer-heart">
            Fait avec <FaHeart /> par Elfriede BOTON
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;