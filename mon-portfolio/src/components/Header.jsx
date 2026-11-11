import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const liens = [
  { nom: 'À propos', id: 'about' },
  { nom: 'Parcours', id: 'parcours' },
  { nom: 'Projets', id: 'projects' },
  { nom: 'Compétences', id: 'skills' },
];

function Header() {
  const [ouvert, setOuvert] = useState(false);
  const [defile, setDefile] = useState(false);
  const [actif, setActif] = useState('');

  useEffect(() => {
    const surDefilement = () => {
      setDefile(window.scrollY > 30);
      const courant = [...liens, { id: 'contact' }].map((l) => document.getElementById(l.id))
        .filter((el) => el && el.getBoundingClientRect().top < window.innerHeight * 0.4)
        .pop();
      setActif(courant ? courant.id : '');
    };
    surDefilement();
    window.addEventListener('scroll', surDefilement, { passive: true });
    return () => window.removeEventListener('scroll', surDefilement);
  }, []);

  useEffect(() => {
    document.body.style.overflow = ouvert ? 'hidden' : '';
  }, [ouvert]);

  const aller = (e, id) => {
    e.preventDefault();
    setOuvert(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`entete ${defile ? 'entete-defile' : ''}`}>
      <div className="conteneur entete-ligne">
        <a href="#accueil" className="logo" onClick={(e) => aller(e, 'accueil')}>
          <span className="logo-initiales" aria-hidden="true">EB</span>
          <span>Elfriede<span className="logo-point">.</span></span>
        </a>

        <nav className={`nav ${ouvert ? 'nav-ouverte' : ''}`} aria-label="Navigation principale">
          {liens.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={actif === l.id ? 'actif' : ''} onClick={(e) => aller(e, l.id)}>{l.nom}</a>
          ))}
          <a href="#contact" className="bouton bouton-plein nav-cta" onClick={(e) => aller(e, 'contact')}>Me contacter</a>
        </nav>

        <button type="button" className="burger" onClick={() => setOuvert(!ouvert)} aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={ouvert}>
          {ouvert ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header;
