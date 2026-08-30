import React from 'react';
import { X, ExternalLink, Globe, Smartphone, Layers, CheckCircle2 } from 'lucide-react';
import './ProjectDetailModal.css';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content project-detail-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="detail-image-box">
          <img src={project.image} alt={project.title} className="detail-img" />
          <div className="detail-badge">
            {project.category === 'mobile' ? (
              <>
                <Smartphone size={14} />
                <span>Mobile App</span>
              </>
            ) : (
              <>
                <Globe size={14} />
                <span>Website</span>
              </>
            )}
          </div>
        </div>

        <div className="detail-info-body">
          <h2 className="detail-title">{project.title}</h2>
          <p className="detail-subtitle">{project.subtitle}</p>

          <div className="detail-tech-stack">
            <span className="tech-stack-label">Technologies Used:</span>
            <div className="tech-tags-wrapper">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="detail-description-box">
            <h4>Key Features & Architecture:</h4>
            <ul className="feature-bullets">
              {project.features.map((feat, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="bullet-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-action-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close Preview
            </button>

            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <span>Visit Live {project.category === 'mobile' ? 'Mobile App' : 'Website'}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
