import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Link2, 
  PhoneCall, 
  Send,
  MessageSquare 
} from 'lucide-react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme, openLinkModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <div className="logo-icon-box">
            <Code2 className="logo-icon" size={24} />
          </div>
          <div className="logo-text">
            <span className="logo-name">Hasnain Imam</span>
            <span className="logo-badge">CSE Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          <button 
            className="btn-icon" 
            onClick={toggleTheme} 
            title="Toggle Light/Dark Theme"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className="btn btn-outline btn-sm link-manager-btn" 
            onClick={openLinkModal}
            title="Update live project links"
          >
            <Link2 size={16} />
            <span>Update Links</span>
          </button>

          <a 
            href="https://wa.me/918271565060" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline btn-sm whatsapp-btn"
            style={{ borderColor: '#10b981', color: '#10b981' }}
          >
            <MessageSquare size={16} />
            <span>WhatsApp</span>
          </a>

          <a href="tel:8271565060" className="btn btn-primary btn-sm call-now-btn">
            <PhoneCall size={16} />
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-drawer-actions">
              <button 
                className="btn btn-outline btn-sm w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLinkModal();
                }}
              >
                <Link2 size={16} /> Update Website Links
              </button>
              <a 
                href="https://wa.me/918271565060" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-sm w-full"
                style={{ borderColor: '#10b981', color: '#10b981' }}
              >
                <MessageSquare size={16} /> WhatsApp Chat
              </a>
              <a 
                href="tel:8271565060" 
                className="btn btn-primary btn-sm w-full"
              >
                <PhoneCall size={16} /> Call: +91 8271565060
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
