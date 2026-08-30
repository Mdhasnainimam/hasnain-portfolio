import React, { useState } from 'react';
import { 
  Mail, 
  PhoneCall, 
  MessageSquare, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  ExternalLink,
  Sparkles,
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';
import './Contact.css';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered');
    }

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Connect With Hasnain</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle">
            Need a high-performance website or mobile application? Feel free to contact Md Hasnain Imam directly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Direct Cards */}
          <div className="contact-cards-column">
            {/* Email Card */}
            <div className="glass-card contact-info-card">
              <div className="info-icon-box cyan">
                <Mail size={22} />
              </div>
              <div className="info-details">
                <span className="info-label">Direct Email</span>
                <h4 className="info-value">hasnainimam2026@gmail.com</h4>
                <div className="info-actions">
                  <a 
                    href="mailto:hasnainimam2026@gmail.com" 
                    className="btn btn-outline btn-sm"
                  >
                    <Send size={14} />
                    <span>Send Email</span>
                  </a>
                  <button 
                    className="btn btn-secondary btn-sm" 
                    onClick={() => handleCopy('hasnainimam2026@gmail.com', 'email')}
                  >
                    {copiedEmail ? <Check size={14} className="copy-success" /> : <Copy size={14} />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp Dedicated Card */}
            <div className="glass-card contact-info-card" style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
              <div className="info-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <MessageSquare size={22} />
              </div>
              <div className="info-details">
                <span className="info-label" style={{ color: '#10b981' }}>Instant WhatsApp Chat</span>
                <h4 className="info-value">+91 8271565060</h4>
                <div className="info-actions">
                  <a 
                    href="https://wa.me/918271565060" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none' }}
                  >
                    <MessageSquare size={14} />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <button 
                    className="btn btn-secondary btn-sm" 
                    onClick={() => handleCopy('8271565060', 'phone')}
                  >
                    {copiedPhone ? <Check size={14} className="copy-success" /> : <Copy size={14} />}
                    <span>{copiedPhone ? 'Copied!' : 'Copy Number'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Availability Ribbon */}
            <div className="glass-card availability-card">
              <Sparkles className="avail-icon" size={20} />
              <div>
                <h5 className="avail-title">Available for New Projects</h5>
                <p className="avail-desc">Looking for website development or mobile app engineering? Get in touch today!</p>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="glass-card contact-form-card">
            <h3 className="form-title">Send Me a Message</h3>

            {formSubmitted ? (
              <div className="form-success-message">
                <Sparkles size={32} className="success-icon" />
                <h4>Message Received!</h4>
                <p>Thank you for reaching out. Md Hasnain Imam will respond to your email shorty.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label>Your Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label>Your Email *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Subject</label>
                  <input 
                    type="text" 
                    placeholder="Website or Mobile App Requirement"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label>Message *</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Tell me about your project details..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  <Send size={16} />
                  <span>Send Message to Hasnain</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
