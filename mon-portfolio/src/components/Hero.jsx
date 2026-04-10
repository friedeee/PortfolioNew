import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 100%)'
    }}>
      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(255, 107, 53, 0.1)',
            border: '1px solid rgba(255, 107, 53, 0.3)',
            borderRadius: '50px',
            color: '#ff6b35'
          }}>
            Bienvenue sur mon portfolio
          </span>
        </div>
        
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #ff6b35, #ff3366)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Elfriede BOTON</span>
          <br />
          <span style={{ fontSize: '1.8rem', color: '#b0b0b0' }}>Créative & Développeuse</span>
        </h1>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#b0b0b0',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Je transforme des idées en expériences numériques élégantes et innovantes.
          Spécialisée dans la création d'interfaces modernes et responsives.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <button style={{
            padding: '12px 30px',
            background: 'linear-gradient(135deg, #ff6b35, #ff3366)',
            border: 'none',
            borderRadius: '50px',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Explorer mon travail
          </button>
          <button style={{
            padding: '12px 30px',
            background: 'transparent',
            border: '2px solid #ff6b35',
            borderRadius: '50px',
            color: '#ff6b35',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Me contacter
          </button>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center'
        }}>
          <a href="https://github.com/friedeee" style={{ color: '#b0b0b0', fontSize: '1.5rem' }}><FaGithub /></a>
          <a href="https://www.linkedin.com/in/friedeee-boton-446b1a3b7/" style={{ color: '#b0b0b0', fontSize: '1.5rem' }}><FaLinkedin /></a>
          {/* <a href="#" style={{ color: '#b0b0b0', fontSize: '1.5rem' }}><FaTwitter /></a> */}
          <a href="https://www.instagram.com/elle200207?igsh=eWNpbzg4N3N3cW9m" style={{ color: '#b0b0b0', fontSize: '1.5rem' }}><FaInstagram /></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;