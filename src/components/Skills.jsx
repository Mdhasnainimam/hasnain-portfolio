import React from 'react';
import { 
  Code, 
  Layout, 
  Server, 
  Smartphone, 
  Database, 
  GitBranch, 
  Terminal,
  Layers
} from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Web Development",
      icon: <Layout className="cat-icon cyan" size={22} />,
      skills: [
        { name: "React.js / Next.js", level: 92 },
        { name: "JavaScript (ES6+) & TypeScript", level: 90 },
        { name: "HTML5, CSS3 & Modern Styling", level: 95 },
        { name: "Responsive UI & Animations", level: 92 },
      ]
    },
    {
      category: "Backend & API Development",
      icon: <Server className="cat-icon purple" size={22} />,
      skills: [
        { name: "Node.js & Express.js", level: 88 },
        { name: "RESTful API Design & Integration", level: 90 },
        { name: "Python Engineering", level: 82 },
        { name: "Authentication & Security", level: 85 },
      ]
    },
    {
      category: "Mobile App Development",
      icon: <Smartphone className="cat-icon emerald" size={22} />,
      skills: [
        { name: "React Native App Architecture", level: 88 },
        { name: "Android App Development", level: 85 },
        { name: "Cross-Platform State Management", level: 86 },
        { name: "Mobile UI/UX Optimization", level: 90 },
      ]
    },
    {
      category: "Databases, Tools & DevOps",
      icon: <Database className="cat-icon amber" size={22} />,
      skills: [
        { name: "MongoDB & SQL Databases", level: 85 },
        { name: "Git, GitHub & Version Control", level: 92 },
        { name: "Vercel / Netlify Deployment", level: 90 },
        { name: "CSE Problem Solving & Debugging", level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-tag">
            <Layers size={14} />
            <span>Technical Expertise</span>
          </div>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <p className="section-subtitle">
            Core engineering stack and technical proficiency developed over 3 years of building 5 websites and 1 mobile app.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card skill-cat-card">
              <div className="cat-header">
                <div className="cat-icon-box">{cat.icon}</div>
                <h3 className="cat-title">{cat.category}</h3>
              </div>

              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
