import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { contact } from '../donnees';

/*
 * Le formulaire n'a pas de serveur : il prépare le message et l'ouvre
 * dans WhatsApp ou dans la messagerie e-mail de la personne.
 */
function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [envoye, setEnvoye] = useState('');

  const changer = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const texte = () => `Bonjour Elfriede,\n\n${form.message}\n\n${form.nom}${form.email ? ` (${form.email})` : ''}`;

  const envoyer = (voie) => (e) => {
    e.preventDefault();
    const formulaire = e.currentTarget.form || e.currentTarget;
    if (!formulaire.reportValidity()) return;
    if (voie === 'whatsapp') {
      window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(texte())}`, '_blank', 'noopener');
    } else {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Contact depuis le portfolio : ${form.nom}`)}&body=${encodeURIComponent(texte())}`;
    }
    setEnvoye(voie);
  };

  return (
    <section id="contact" className="section">
      <div className="conteneur">
        <motion.div
          className="carte contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-texte">
            <p className="sur-titre">Contact</p>
            <h2>Un projet, un poste, <span className="degrade">une idée</span> ?</h2>
            <p className="texte-doux">Écrivez-moi : je réponds rapidement, sur WhatsApp ou par e-mail.</p>
            <ul className="contact-infos">
              <li><FaEnvelope aria-hidden="true" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><FaPhone aria-hidden="true" /><span>{contact.telephone}<br />{contact.telephone2}</span></li>
              <li><FaMapMarkerAlt aria-hidden="true" /><span>{contact.ville}</span></li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={envoyer('whatsapp')}>
            <label>Votre nom<input name="nom" value={form.nom} onChange={changer} required autoComplete="name" /></label>
            <label>Votre e-mail <small>facultatif</small><input type="email" name="email" value={form.email} onChange={changer} autoComplete="email" /></label>
            <label>Votre message<textarea name="message" rows="5" value={form.message} onChange={changer} required /></label>
            <div className="contact-boutons">
              <button type="submit" className="bouton bouton-whatsapp"><FaWhatsapp aria-hidden="true" /> Envoyer sur WhatsApp</button>
              <button type="button" className="bouton bouton-contour" onClick={envoyer('email')}><FaPaperPlane aria-hidden="true" /> Par e-mail</button>
            </div>
            {envoye && (
              <p className="confirmation" role="status">
                <FaCheckCircle aria-hidden="true" />
                {envoye === 'whatsapp'
                  ? 'WhatsApp s’est ouvert avec votre message : il ne reste qu’à appuyer sur Envoyer.'
                  : 'Votre messagerie s’est ouverte avec le message prêt : il ne reste qu’à l’envoyer.'}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
