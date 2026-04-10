import React from 'react';
import { FaCode, FaPalette, FaMobile, FaRocket } from 'react-icons/fa';

function About() {
  return (
    <section  id="about" className="about" style={{
      padding: '80px 5%',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 100%)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(255, 107, 53, 0.1)',
            borderRadius: '50px',
            color: '#ff6b35',
            marginBottom: '15px'
          }}>À propos de moi</span>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #ff6b35, #ff3366)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Qui suis-je ?</h2>
          <p style={{ color: '#b0b0b0' }}>Découvrez mon parcours et ma passion pour le développement</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #ff6b35, #ff3366)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Je crée des expériences numériques uniques</h3>
            <p style={{ color: '#b0b0b0', lineHeight: '1.8', marginBottom: '20px' }}>
              Passionnée par le développement web depuis plus de 2 ans, je transforme 
              les idées en applications modernes, performantes et élégantes.
            </p>
            <p style={{ color: '#b0b0b0', lineHeight: '1.8', marginBottom: '20px' }}>
              Mon objectif est de créer des interfaces qui allient esthétique et 
              fonctionnalité, tout en offrant une expérience utilisateur exceptionnelle.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginTop: '40px'
            }}>
              <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '15px' }}>
                <h4 style={{ fontSize: '2rem', background: 'linear-gradient(135deg, #ff6b35, #ff3366)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>2+</h4>
                <p style={{ color: '#b0b0b0' }}>Années d'expérience</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '15px' }}>
                <h4 style={{ fontSize: '2rem', background: 'linear-gradient(135deg, #ff6b35, #ff3366)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>50+</h4>
                <p style={{ color: '#b0b0b0' }}>Projets réalisés</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '15px' }}>
                <h4 style={{ fontSize: '2rem', background: 'linear-gradient(135deg, #ff6b35, #ff3366)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>30+</h4>
                <p style={{ color: '#b0b0b0' }}>Clients satisfaits</p>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '30px',
              background: 'linear-gradient(135deg, #ff6b35, #ff3366)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Mes compétences clés</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '15px' }}>
                <FaCode style={{ fontSize: '2rem', color: '#ff6b35' }} />
                <div>
                  <h4 style={{ color: 'white' }}>Frontend</h4>
                  <p style={{ color: '#b0b0b0' }}>React, Vue.js, HTML5, CSS3, Tailwind</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '15px' }}>
                <FaMobile style={{ fontSize: '2rem', color: '#ff6b35' }} />
                <div>
                  <h4 style={{ color: 'white' }}>Mobile</h4>
                  <p style={{ color: '#b0b0b0' }}>React Native, Flutter</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '15px' }}>
                <FaPalette style={{ fontSize: '2rem', color: '#ff6b35' }} />
                <div>
                  <h4 style={{ color: 'white' }}>Design</h4>
                  <p style={{ color: '#b0b0b0' }}>Figma, UI/UX, Adobe XD</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '15px' }}>
                <FaRocket style={{ fontSize: '2rem', color: '#ff6b35' }} />
                <div>
                  <h4 style={{ color: 'white' }}>Backend</h4>
                  <p style={{ color: '#b0b0b0' }}>Node.js, Python, MongoDB</p>
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