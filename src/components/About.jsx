import React from 'react';
import { 
  User, 
  Code2, 
  Layers, 
  Smartphone, 
  Cpu, 
  Zap, 
  CheckCircle, 
  FileText,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';
import './About.css';

export default function About() {
  const highlights = [
    {
      icon: <Cpu size={24} className="hl-icon cyan" />,
      title: "HAL Aerospace Testing (1 Yr)",
      desc: "Hardware & Software Integration Testing for Autopilot Control Systems on Kiran Mk II (Kiran Mk 2) aircraft."
    },
    {
      icon: <Code2 size={24} className="hl-icon purple" />,
      title: "UEE India Full-Stack (2+ Yrs)",
      desc: "Architected 5 live web platforms & Play Store Mobile App (UEEindia), managing IT support & admin dashboards."
    },
    {
      icon: <Layers size={24} className="hl-icon emerald" />,
      title: "SANY Technical Audits",
      desc: "Prepared technical audit reports & safety compliance documentation for heavy industrial machinery & SANY vehicles."
    },
    {
      icon: <Zap size={24} className="hl-icon amber" />,
      title: "2022 CSE Graduate",
      desc: "Bachelor of Engineering in Computer Science (2022 Pass-Out) with 3+ years of total multi-domain expertise."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-tag">
            <User size={14} />
            <span>Engineer Profile</span>
          </div>
          <h2 className="section-title">About <span className="gradient-text">Md Hasnain Imam</span></h2>
          <p className="section-subtitle">
            CSE Engineer with 3 years of dedicated experience crafting impactful digital solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Detailed Story Box */}
          <div className="glass-card about-story-card">
            <h3 className="story-heading">Computer Science & Engineering Professional (2022 Graduate)</h3>
            <p className="story-paragraph">
              My name is <strong>Md Hasnain Imam</strong>. I completed my B.E. degree in Computer Science & Engineering (<strong>2022 Pass-Out</strong>) from <strong>HMS Institute of Technology (HMSIT), Tumkur</strong> (affiliated with <strong>VTU, Belagavi</strong>, AICTE & NBA Accredited). I bring over <strong>3 years of core engineering experience</strong> spanning Aerospace Integration Testing, Full-Stack Web Architecture, Mobile App Development, and Industrial Systems Audit.
            </p>
            <p className="story-paragraph">
              During my <strong>1-year tenure at Hindustan Aeronautics Limited (HAL)</strong>, I conducted hardware & software integration testing for <strong>Autopilot control systems on Kiran Mk II aircraft</strong>. Subsequently, during my <strong>2+ years at Universal Electricals & Electronics (UEE India)</strong>, I engineered <strong>6 production websites</strong> (featuring full-stack mining platforms like <em>ueeindia.com</em>, <em>mining.skoriyatech.com</em>, & <em>universalwelfaretrust.com</em> with custom Admin Dashboards), published a live <strong>Google Play Store Mobile App (UEEindia)</strong>, provided enterprise IT support, and prepared technical audit reports for <strong>SANY heavy equipment</strong>.
            </p>

            <div className="key-details-list">
              <div className="detail-item">
                <CheckCircle size={18} className="check-icon" />
                <span><strong>Name:</strong> Md Hasnain Imam</span>
              </div>
              <div className="detail-item">
                <CheckCircle size={18} className="check-icon" />
                <span><strong>Degree & Pass-Out:</strong> B.E. CSE (2022 Pass-Out)</span>
              </div>
              <div className="detail-item">
                <CheckCircle size={18} className="check-icon" />
                <span><strong>College & Location:</strong> HMS Institute of Technology (HMSIT), Tumkur, KA</span>
              </div>
              <div className="detail-item">
                <CheckCircle size={18} className="check-icon" />
                <span><strong>University Affiliation:</strong> VTU, Belagavi (AICTE & NBA Accredited)</span>
              </div>
              <div className="detail-item">
                <CheckCircle size={18} className="check-icon" />
                <span><strong>Aerospace Testing:</strong> HAL (Kiran Mk II Autopilot)</span>
              </div>
              <div className="detail-item">
                <CheckCircle size={18} className="check-icon" />
                <span><strong>Full-Stack & IT:</strong> UEE India (2+ Years)</span>
              </div>
              <div className="detail-item">
                <CheckCircle size={18} className="check-icon" />
                <span><strong>Audit Experience:</strong> SANY Heavy Industry Audits</span>
              </div>
              <div className="detail-item">
                <CheckCircle size={18} className="check-icon" />
                <span><strong>Delivered:</strong> 5 Websites + 1 Play Store App</span>
              </div>
              <div className="detail-item">
                <CheckCircle size={18} className="check-icon" />
                <span><strong>Email:</strong> hasnainimam2026@gmail.com</span>
              </div>
              <div className="detail-item">
                <CheckCircle size={18} className="check-icon" />
                <span><strong>Phone/WhatsApp:</strong> +91 8271565060</span>
              </div>
            </div>

            <div className="about-action-row">
              <a href="#contact" className="btn btn-primary">
                <Mail size={16} />
                <span>Get In Touch</span>
              </a>
              <a 
                href="https://wa.me/918271565060" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
                style={{ borderColor: '#10b981', color: '#10b981' }}
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
              <a href="tel:8271565060" className="btn btn-outline">
                <Phone size={16} />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

          {/* 4 Feature Cards */}
          <div className="highlights-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass-card highlight-card">
                <div className="hl-icon-wrapper">{item.icon}</div>
                <h4 className="hl-title">{item.title}</h4>
                <p className="hl-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
