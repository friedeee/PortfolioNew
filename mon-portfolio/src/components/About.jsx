import React from 'react';
import { FaCode, FaPalette, FaRocket } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">À propos de moi</span>
          <h2>Qui suis-je ?</h2>
          <p>Découvrez mon parcours et ma passion pour le développement</p>
        </div>

        <div className="about-container">
          <div className="about-content">
            <h3>Je crée des expériences numériques uniques</h3>
            <p>Passionnée par le développement web depuis plus de 2 ans, je transforme
              les idées en applications modernes, performantes et élégantes.</p>
            <p>Mon objectif est de créer des interfaces qui allient esthétique et
              fonctionnalité, tout en offrant une expérience utilisateur exceptionnelle.</p>

            <div className="about-stats">
              <div className="stat">
                <h4>2+</h4>
                <p>Années d'expérience</p>
              </div>
              <div className="stat">
                <h4>43+</h4>
                <p>Projets sur GitHub</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>Technologies maîtrisées</p>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h3>Mes compétences clés</h3>
            <div className="skill-items">
              <div className="skill-item">
                <FaCode className="skill-icon" />
                <div>
                  <h4>Frontend</h4>
                  <p>React, Next.js, JavaScript, TypeScript, Tailwind CSS</p>
                </div>
              </div>
              <div className="skill-item">
                <FaPalette className="skill-icon" />
                <div>
                  <h4>Design</h4>
                  <p>Figma, UI/UX</p>
                </div>
              </div>
              <div className="skill-item">
                <FaRocket className="skill-icon" />
                <div>
                  <h4>Backend</h4>
                  <p>PHP, Laravel, Node.js, Express, MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;