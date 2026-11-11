/*
 * Contenu du portfolio : projets, parcours et compétences.
 * Pour ajouter un projet, copiez un bloc existant et changez les valeurs.
 * « image » : capture d'écran dans public/projets/ (facultatif, sinon une icône s'affiche).
 */
import {
  FaTint, FaStore, FaFeatherAlt, FaHome, FaTshirt, FaBrain, FaReceipt, FaCube, FaGlobe,
  FaSearch, FaFilm, FaTwitter, FaClinicMedical, FaAirbnb, FaSpotify, FaWhatsapp, FaInstagram, FaPenNib, FaAddressBook,
  FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaGitAlt, FaGithub, FaDocker, FaPhp, FaLaravel, FaFigma, FaVuejs, FaBootstrap,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMysql, SiTypescript, SiVercel, SiExpress, SiGitlab } from 'react-icons/si';

export const contact = {
  email: 'botonkpdt@gmail.com',
  telephone: '+229 01 68 59 51 19',
  telephone2: '+229 01 53 01 83 40',
  whatsapp: '2290168595119',
  ville: 'Cotonou, Bénin',
  github: 'https://github.com/friedeee',
  linkedin: 'https://www.linkedin.com/in/friedeee-boton-446b1a3b7/',
  instagram: 'https://www.instagram.com/elle200207',
  cv: '/CV_BOTON_Kpèdétin_Elfriede.pdf',
};

export const chiffres = [
  { valeur: '5', libelle: 'stages en développement web' },
  { valeur: '40+', libelle: 'projets sur GitHub' },
  { valeur: '2', libelle: 'mondes : React et Laravel' },
];

export const projetsPhares = [
  {
    id: 'pharmabenin',
    titre: 'PharmaBenin',
    sousTitre: "Logiciel de gestion d'officine",
    badge: "Projet d'équipe",
    description: "Logiciel de gestion de pharmacie développé à distance par une équipe de 4 développeurs. Je suis la plus forte contributrice (39 des 85 commits), principalement sur l'interface.",
    points: [
      'Tableau de bord, ventes et caisse, stock et inventaires par scan, commandes fournisseurs',
      'Traçabilité des lots, chaîne du froid, registres des stupéfiants, comptabilité SYSCOHADA',
      'Travail en équipe sur GitLab : branches, fusions et coordination à distance',
    ],
    image: null,
    icone: FaClinicMedical,
    tech: ['Laravel', 'React', 'Inertia.js', 'Tailwind CSS', 'Recharts', 'GitLab'],
    demo: null,
    github: null,
  },
  {
    id: 'amivovo',
    titre: 'Amì vɔ̀vɔ̀',
    sousTitre: "Les prix de l'huile rouge au Bénin",
    description: "Le prix de l'huile rouge marché par marché, sur une carte et en courbes, avec des alertes quand il baisse. Les vendeuses publient leurs annonces depuis leur téléphone, sans compte, et tiennent leurs comptes même sans Internet.",
    points: ['Application installable (PWA), utilisable hors ligne', 'Données gérées par Google Sheets et Forms, sans serveur', 'Carte interactive Leaflet et courbes de prix'],
    image: '/projets/amivovo.jpg',
    icone: FaTint,
    tech: ['JavaScript', 'PWA', 'Google Sheets', 'Leaflet', 'Vercel'],
    demo: 'https://amivovo.vercel.app',
    github: 'https://github.com/friedeee/amivovo',
  },
  {
    id: 'kanvo',
    titre: 'Kanvô',
    sousTitre: 'Place de marché multi-vendeurs',
    description: "Chaque vendeur a sa boutique en ligne, et les clients commandent directement sur WhatsApp. Les comptes sont créés uniquement par l'administrateur, sur invitation par e-mail sécurisée.",
    points: ['Espace vendeur : tableau de bord, produits, stock', 'Lien d’invitation signé, à usage unique', '87 tests automatisés, prêt pour Laravel Cloud'],
    image: null,
    icone: FaStore,
    tech: ['Laravel', 'React', 'Inertia.js', 'Tailwind CSS', 'PHPUnit'],
    demo: null,
    github: 'https://github.com/friedeee/kanvo-connect',
  },
];

export const projets = [
  { id: 'maxavic', titre: 'Max Avic', categorie: 'Web', description: "Site vitrine d'un élevage de cailles : produits, galerie et commande par WhatsApp.", image: '/projets/maxavic.jpg', icone: FaFeatherAlt, tech: ['HTML', 'CSS', 'JavaScript'], demo: 'https://maxavic.vercel.app', github: 'https://github.com/friedeee/MaxAvic' },
  { id: 'loyer', titre: 'Gestion de Loyer', categorie: 'React', description: 'Application complète de gestion de loyers, avec frontend et backend séparés.', image: null, icone: FaHome, tech: ['React', 'Node.js'], demo: null, github: 'https://github.com/friedeee/GestionDeLoyer' },
  { id: 'contacts', titre: 'App Gestion Contacts', categorie: 'React', description: "Application CRUD complète : favoris, historique d'appels et export CSV.", image: null, icone: FaAddressBook, tech: ['React', 'Node.js', 'Express', 'MySQL'], demo: null, github: 'https://github.com/friedeee/app-contacts' },
  { id: 'blog', titre: 'Blog Next.js', categorie: 'React', description: 'Blog personnel avec routes dynamiques et pages statiques.', image: '/projets/blog.jpg', icone: FaPenNib, tech: ['Next.js', 'Tailwind CSS'], demo: 'https://mon-blog-mu.vercel.app', github: 'https://github.com/friedeee/NextMon-blog' },
  { id: 'airbnb', titre: 'Clone Airbnb', categorie: 'React', description: 'Recherche, filtres, fenêtre de réservation et panier.', image: '/projets/airbnb.jpg', icone: FaAirbnb, tech: ['React', 'useState'], demo: 'https://clone-airbnb-three.vercel.app', github: 'https://github.com/friedeee/clone-airbnb' },
  { id: 'spotify', titre: 'Clone Spotify', categorie: 'React', description: 'Playlists, lecture, mode aléatoire, répétition et recherche.', image: '/projets/spotify.jpg', icone: FaSpotify, tech: ['React', 'useEffect'], demo: 'https://clone-spotify-steel.vercel.app', github: 'https://github.com/friedeee/clone-spotify' },
  { id: 'whatsapp', titre: 'Clone WhatsApp', categorie: 'React', description: 'Discussion, réactions et statut en ligne.', image: '/projets/whatsapp.jpg', icone: FaWhatsapp, tech: ['React', 'useEffect'], demo: 'https://clone-whatsapp-ecru.vercel.app', github: 'https://github.com/friedeee/clone-whatsapp' },
  { id: 'instagram', titre: 'Clone Instagram', categorie: 'React', description: 'Profil, stories, grille de photos, recherche et navigation.', image: '/projets/instagram.jpg', icone: FaInstagram, tech: ['React', 'useState'], demo: 'https://clone-instagram-ecru.vercel.app', github: 'https://github.com/friedeee/clone-instagram' },
  { id: 'twitter', titre: 'Clone Twitter/X', categorie: 'React', description: "Fil d'actualité avec « j'aime » et compteurs en direct.", image: '/projets/twitter.jpg', icone: FaTwitter, tech: ['React', 'useState'], demo: 'https://clone-twitter-opal.vercel.app', github: 'https://github.com/friedeee/clone-twitter' },
  { id: 'netflix', titre: 'Clone Netflix', categorie: 'Web', description: "Page d'accueil avec image de fond, voile et boutons.", image: '/projets/netflix.jpg', icone: FaFilm, tech: ['HTML', 'CSS'], demo: 'https://clone-netflix-seven-chi.vercel.app', github: 'https://github.com/friedeee/clone-netflix' },
  { id: 'google', titre: 'Clone Google', categorie: 'Web', description: "Page d'accueil Google avec barre de recherche.", image: '/projets/google.jpg', icone: FaSearch, tech: ['HTML', 'CSS'], demo: 'https://clone-google-eight.vercel.app', github: 'https://github.com/friedeee/Clone-Google' },
  { id: 'pret-porter', titre: 'Prêt-porter', categorie: 'Web', description: 'Boutique de vêtements en ligne.', image: null, icone: FaTshirt, tech: ['HTML', 'CSS', 'JavaScript'], demo: null, github: 'https://github.com/friedeee/Prt-porter' },
  { id: 'quiz', titre: 'Quiz App', categorie: 'React', description: 'Quiz interactif avec score en temps réel.', image: null, icone: FaBrain, tech: ['React'], demo: null, github: 'https://github.com/friedeee/Quiz' },
  { id: 'recu', titre: 'Générateur de reçus', categorie: 'Web', description: 'Création automatique de reçus personnalisés.', image: null, icone: FaReceipt, tech: ['JavaScript', 'CSS'], demo: null, github: 'https://github.com/friedeee/generateur_recu' },
  { id: 'carte3d', titre: 'Carte 3D', categorie: 'Web', description: 'Carte interactive avec effets 3D en CSS.', image: null, icone: FaCube, tech: ['HTML', 'CSS'], demo: null, github: 'https://github.com/friedeee/carte-3D' },
  { id: 'page-perso', titre: 'Ma première page', categorie: 'Web', description: 'Ma toute première page web.', image: null, icone: FaGlobe, tech: ['HTML', 'CSS', 'JavaScript'], demo: null, github: 'https://github.com/friedeee/ma-page-personnelle' },
];

export const parcours = [
  {
    periode: 'Depuis sept. 2026', titre: 'Stagiaire en développement web', lieu: 'ALIBORA', actuel: true,
    texte: "Applications web de la maquette au produit avec React, Next.js, PHP et Laravel : plateforme de centre d'appels Allô Campus, maquettes ChannelO, Skill 360, QA Hub et sites vitrines clients.",
  },
  {
    periode: 'Juin – sept. 2026', titre: 'Stagiaire développeuse front-end', lieu: 'Port Autonome de Cotonou',
    texte: "Interface de l'application de gestion de la cantine du Port, en React intégré à Laravel avec Inertia.js, en lien avec l'équipe backend.",
  },
  {
    periode: 'Mars 2025 – févr. 2026', titre: 'Stagiaire développeuse front-end', lieu: "Vice-Rectorat de l'UAC · Abomey-Calavi",
    texte: 'Interfaces responsives en React et Tailwind CSS à partir de maquettes Figma ; optimisation SEO, performances et UX.',
  },
  {
    periode: 'Mars – juin 2024', titre: 'Stagiaire en développement web', lieu: 'African Technologies · Cotonou',
    texte: 'Système de gestion des actifs en Next.js et TypeScript : suivi et réaffectation des équipements.',
  },
  {
    periode: 'Mai – juin 2023', titre: 'Stagiaire en développement web', lieu: 'SEBADI Informatique · Sèkandji',
    texte: 'Travail en équipe avec Git, maquettes et retouches photo, gestion de données.',
  },
];

export const formation = [
  { periode: '2021 – 2025', titre: 'Licence en Génie Logiciel', lieu: 'IFRI · Université d’Abomey-Calavi' },
  { periode: '2018 – 2021', titre: 'Technicienne en installation et maintenance informatique', lieu: 'Lycée Technique FM Coulibaly' },
];

export const competences = [
  {
    groupe: 'Frontend',
    texte: 'Des interfaces rapides, claires et adaptées au téléphone.',
    items: [
      { nom: 'React', icone: FaReact }, { nom: 'Next.js', icone: SiNextdotjs }, { nom: 'TypeScript', icone: SiTypescript },
      { nom: 'JavaScript', icone: FaJs }, { nom: 'Vue.js', icone: FaVuejs }, { nom: 'Tailwind CSS', icone: SiTailwindcss },
      { nom: 'HTML5', icone: FaHtml5 }, { nom: 'CSS3', icone: FaCss3Alt }, { nom: 'Bootstrap', icone: FaBootstrap },
    ],
  },
  {
    groupe: 'Backend',
    texte: 'Des API et des applications complètes, testées.',
    items: [
      { nom: 'PHP', icone: FaPhp }, { nom: 'Laravel', icone: FaLaravel }, { nom: 'Node.js', icone: FaNodeJs },
      { nom: 'Express', icone: SiExpress }, { nom: 'MySQL', icone: SiMysql },
    ],
  },
  {
    groupe: 'Outils',
    texte: 'Du code versionné jusqu’à la mise en ligne.',
    items: [
      { nom: 'Git', icone: FaGitAlt }, { nom: 'GitHub', icone: FaGithub }, { nom: 'GitLab', icone: SiGitlab },
      { nom: 'Docker', icone: FaDocker }, { nom: 'Vercel', icone: SiVercel }, { nom: 'Figma', icone: FaFigma },
    ],
  },
];
