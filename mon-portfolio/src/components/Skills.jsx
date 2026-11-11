import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaGitAlt, FaGithub, FaDocker, FaPhp, FaLaravel, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMysql, SiTypescript, SiVercel } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'Laravel', icon: <FaLaravel /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Figma', icon: <FaFigma /> },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Compétences</span>
          <h2>Mes technologies</h2>
          <p>Les outils et technologies que j'utilise</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
