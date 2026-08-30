import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, Sparkles } from 'lucide-react';
import './ExperienceTimeline.css';

export default function ExperienceTimeline() {
  const timelineData = [
    {
      year: "2023 - Present (2+ Years)",
      role: "Full-Stack Developer & IT Systems Engineer",
      company: "Universal Electricals and Electronics (UEE India)",
      description: "Leading full-stack web application development, mobile app engineering, IT support infrastructure, and technical safety audit reporting for heavy industrial clients.",
      achievements: [
        "Engineered 5 live web platforms (ueeindia.com, mining.skoriyatech.com, skoriyatech.com, stars-toursandtravels.com, mythritoursandtravels.com) with custom Admin Dashboards.",
        "Developed and published live Google Play Store Mobile Application (UEEindia / com.ueeindia.hasnain).",
        "Prepared technical audit reports and safety compliance documentation for SANY heavy equipment.",
        "Provided end-to-end IT support, server management, REST API integration, and database operations."
      ],
      badge: "Current Role"
    },
    {
      year: "2022 - 2023 (1 Year)",
      role: "Hardware & Software Integration Test Engineer",
      company: "Hindustan Aeronautics Limited (HAL)",
      description: "Spearheaded hardware and software integration testing for aerospace avionics, focusing on autopilot control systems for military aircraft.",
      achievements: [
        "Executed integration testing for Autopilot control systems on Kiran Mk II (Kiran Mk 2) aircraft.",
        "Performed hardware-in-the-loop (HIL) testing, sensor calibration, and real-time telemetry validation.",
        "Analyzed autopilot response loops, flight control signals, and diagnostic safety protocols."
      ]
    },
    {
      year: "2018 - 2022 (Education)",
      role: "B.E. in Computer Science & Engineering (CSE)",
      company: "HMS Institute of Technology (HMSIT), Tumkur | Affiliated with VTU",
      description: "Graduated with B.E. degree in Computer Science & Engineering from HMSIT, Tumkur (AICTE & NBA Accredited, affiliated with Visvesvaraya Technological University - VTU, Belagavi).",
      achievements: [
        "Completed B.E. in Computer Science & Engineering (2022 Pass-Out) from HMSIT, Tumkur.",
        "Institution accredited by AICTE & NBA, affiliated with Visvesvaraya Technological University (VTU).",
        "Completed specialized coursework in Data Structures, Web Engineering, Database Management Systems, and Embedded Systems logic."
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">
            3 Years Engineering <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            A breakdown of Md Hasnain Imam's 3-year CSE engineering growth, web projects, and mobile app deployment.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {timelineData.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-node">
                <Briefcase size={16} />
              </div>

              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-date">
                      <Calendar size={14} />
                      <span>{item.year}</span>
                      {item.badge && <span className="current-badge">{item.badge}</span>}
                    </div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-company">{item.company}</div>
                  </div>
                </div>

                <p className="timeline-desc">{item.description}</p>

                <div className="timeline-achievements">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="achieve-item">
                      <CheckCircle2 size={15} className="achieve-icon" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
