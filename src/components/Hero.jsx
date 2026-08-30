import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  Mail, 
  Award, 
  Globe, 
  Smartphone, 
  CheckCircle2, 
  Copy, 
  Check,
  MessageSquare
} from 'lucide-react';
const avatarImg = './avatar.jpg';
import './Hero.css';

export default function Hero({ openLinkModal }) {
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-cyan" style={{ top: '-10%', left: '-5%' }}></div>
      <div className="ambient-glow glow-purple" style={{ bottom: '10%', right: '-5%' }}></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Engineering Badge */}
          <div className="hero-badge animate-float">
            <Sparkles className="badge-icon" size={16} />
            <span>CSE Engineer • 3 Years Experience</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            Building Digital Products That <span className="gradient-text">Perform & Impress</span>
          </h1>

          {/* Name Announcement */}
          <div className="hero-author-intro">
            <span className="greeting">Hello! I'm</span>
            <span className="author-name">Md Hasnain Imam</span>
          </div>

          {/* Subtitle */}
          <p className="hero-description">
            Computer Science & Engineering Graduate (<strong>2022 Pass-Out</strong>) with <strong>3+ Years Experience</strong> across Aerospace Hardware & Software Integration Testing (<strong>HAL - Kiran Mk II Autopilot Systems</strong>), Full-Stack Web Engineering (<strong>6 Websites Built</strong>), Mobile App Development (<strong>UEEindia on Google Play Store</strong>), IT Support, and <strong>SANY Heavy Equipment Technical Audits</strong>.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-lg">
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            <a 
              href="https://wa.me/918271565060" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-lg"
              style={{ borderColor: '#10b981', color: '#10b981' }}
            >
              <MessageSquare size={18} />
              <span>WhatsApp Chat</span>
            </a>
            
            <a href="tel:8271565060" className="btn btn-secondary btn-lg">
              <PhoneCall size={18} />
              <span>Call: 8271565060</span>
            </a>
          </div>

          {/* Quick Copy Contact Chips */}
          <div className="quick-contact-chips">
            <a 
              href="https://imam.skoriyatech.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-chip"
              style={{ textDecoration: 'none', borderColor: 'var(--accent-cyan)' }}
            >
              <Globe size={14} className="chip-icon" />
              <span>imam.skoriyatech.com</span>
            </a>

            <div className="contact-chip" onClick={() => handleCopy('hasnainimam2026@gmail.com', 'email')}>
              <Mail size={14} className="chip-icon" />
              <span>hasnainimam2026@gmail.com</span>
              {copiedEmail ? <Check size={14} className="copy-success" /> : <Copy size={14} className="copy-icon" />}
            </div>

            <div className="contact-chip" onClick={() => handleCopy('8271565060', 'phone')}>
              <PhoneCall size={14} className="chip-icon" />
              <span>8271565060</span>
              {copiedPhone ? <Check size={14} className="copy-success" /> : <Copy size={14} />}
            </div>
          </div>
        </div>

        {/* Hero Visual Card / Profile Image */}
        <div className="hero-visual">
          <div className="profile-card-glow"></div>
          <div className="glass-card profile-card">
            <div className="profile-image-wrapper">
              <img src={avatarImg} alt="Md Hasnain Imam CSE Engineer" className="profile-img" />
              <div className="experience-floating-tag">
                <Award size={20} className="tag-icon" />
                <div>
                  <div className="tag-number">3+ Years</div>
                  <div className="tag-label">CSE Experience</div>
                </div>
              </div>
            </div>

            {/* Quick Summary Floating Pill */}
            <div className="profile-meta">
              <div className="meta-item">
                <Globe size={18} className="meta-icon cyan" />
                <div>
                  <span className="meta-val">5 Websites</span>
                  <span className="meta-lbl">Web Applications</span>
                </div>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <Smartphone size={18} className="meta-icon purple" />
                <div>
                  <span className="meta-val">1 Mobile App</span>
                  <span className="meta-lbl">Android & iOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Ribbon */}
      <div className="container stats-ribbon-container">
        <div className="glass-card stats-ribbon">
          <div className="stat-card">
            <div className="stat-value gradient-text">3+</div>
            <div className="stat-label">Years CSE Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-value gradient-text">5</div>
            <div className="stat-label">Websites Built</div>
          </div>
          <div className="stat-card">
            <div className="stat-value gradient-text">1</div>
            <div className="stat-label">Mobile App</div>
          </div>
          <div className="stat-card">
            <div className="stat-value gradient-text">100%</div>
            <div className="stat-label">Client & Code Quality</div>
          </div>
        </div>
      </div>
    </section>
  );
}
