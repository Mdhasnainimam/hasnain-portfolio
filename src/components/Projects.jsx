import React, { useState } from 'react';
import { 
  FolderGit2, 
  Globe, 
  Smartphone, 
  ExternalLink, 
  Info, 
  Link2, 
  Sparkles,
  Edit3
} from 'lucide-react';
import web1Img from '../assets/web1.jpg';
import web2Img from '../assets/web2.jpg';
import app1Img from '../assets/app1.jpg';
import './Projects.css';

export default function Projects({ projects, openLinkModal, openDetailModal }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(p => {
    if (filter === 'websites') return p.category === 'website';
    if (filter === 'mobile') return p.category === 'mobile';
    return true;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Websites & Mobile App</span>
          </h2>
          <p className="section-subtitle">
            5 Web Applications & 1 Mobile App delivered by Md Hasnain Imam (3 Years Experience).
          </p>

          {/* Shortcut Link Update Alert Banner */}
          <div className="update-links-alert" onClick={openLinkModal}>
            <Sparkles size={16} className="sparkle-icon" />
            <span>Have website URLs to add? <strong>Click here to paste live links</strong> for all 6 projects!</span>
            <Edit3 size={16} className="edit-icon" />
          </div>
        </div>

        {/* Filter Tab Control */}
        <div className="filter-tabs">
          <button 
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Showcase ({projects.length})
          </button>
          <button 
            className={`filter-tab ${filter === 'websites' ? 'active' : ''}`}
            onClick={() => setFilter('websites')}
          >
            <Globe size={16} />
            <span>Websites (5)</span>
          </button>
          <button 
            className={`filter-tab ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            <Smartphone size={16} />
            <span>Mobile App (1)</span>
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="glass-card project-card">
              <div className="card-image-box">
                <img src={proj.image} alt={proj.title} className="card-img" />
                <div className="card-badge">
                  {proj.category === 'mobile' ? (
                    <>
                      <Smartphone size={13} />
                      <span>{proj.badge}</span>
                    </>
                  ) : (
                    <>
                      <Globe size={13} />
                      <span>{proj.badge}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{proj.title}</h3>
                <p className="card-subtitle">{proj.subtitle}</p>

                <div className="card-tech-tags">
                  {proj.tech.slice(0, 3).map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">{t}</span>
                  ))}
                  {proj.tech.length > 3 && (
                    <span className="tech-tag">+{proj.tech.length - 3} more</span>
                  )}
                </div>

                <div className="card-actions">
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => openDetailModal(proj)}
                  >
                    <Info size={14} />
                    <span>Details</span>
                  </button>

                  <a 
                    href={proj.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Visit Live</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
