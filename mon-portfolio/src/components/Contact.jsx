import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section style={{
      padding: '80px 5%',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 100%)',
      width: '100%'
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
          }}>📬 Me contacter</span>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #ff6b35, #ff3366)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Parlons de votre projet</h2>
          <p style={{ color: '#b0b0b0' }}>Une idée ? Un projet ? N'hésitez pas à me contacter</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 107, 53, 0.2)'
          }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', color: 'white' }}>Informations</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', padding: '15px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px' }}>
              <FaEnvelope style={{ fontSize: '24px', color: '#ff6b35' }} />
              <div>
                <h4 style={{ color: 'white' }}>Email</h4>
                <p style={{ color: '#b0b0b0' }}>botonkpdt@gmail.com</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', padding: '15px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px' }}>
              <FaPhone style={{ fontSize: '24px', color: '#ff6b35' }} />
              <div>
                <h4 style={{ color: 'white' }}>Téléphone</h4>
                <p style={{ color: '#b0b0b0' }}>+229 01 68 59 51 19</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px' }}>
              <FaMapMarkerAlt style={{ fontSize: '24px', color: '#ff6b35' }} />
              <div>
                <h4 style={{ color: 'white' }}>Localisation</h4>
                <p style={{ color: '#b0b0b0' }}>Cotonou, Benin</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 107, 53, 0.2)'
          }}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                marginBottom: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                marginBottom: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                marginBottom: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
            />
            <button type="submit" style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(135deg, #ff6b35, #ff3366)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}>
              <FaPaperPlane /> Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;