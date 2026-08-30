import React from 'react';
import { Code2, ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon-box">
                <Code2 size={24} />
              </div>
              <div className="logo-text">
                <span className="logo-name">Md Hasnain Imam</span>
                <span className="logo-badge">CSE Engineer • 3 Yrs Exp</span>
              </div>
            </div>
            <p className="footer-tagline">
              Crafting premium full-stack web applications and cross-platform mobile apps with modern architecture and high performance.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#projects">Web & Mobile Projects</a></li>
              <li><a href="#experience">3-Year Timeline</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Direct Contact</h4>
            <div className="footer-contact-item">
              <Mail size={16} className="cyan" />
              <a href="mailto:hasnainimam2026@gmail.com">hasnainimam2026@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} className="purple" />
              <a href="tel:8271565060">+91 8271565060</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>Md Hasnain Imam</strong>. All Rights Reserved. Built with React & Modern Web Tech.
          </p>

          <button className="scroll-top-btn" onClick={scrollToTop} title="Back to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
