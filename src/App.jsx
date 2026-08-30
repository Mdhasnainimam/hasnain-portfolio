import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LinkEditorModal from './components/LinkEditorModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import ExperienceTimeline from './components/ExperienceTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ueeindiaImg from './assets/ueeindia.jpg';
import miningImg from './assets/mining.jpg';
import skoriyatechImg from './assets/skoriyatech.jpg';
import starsImg from './assets/starstravels.jpg';
import mythriImg from './assets/mythritravels.jpg';
import welfareImg from './assets/universalwelfare.jpg';
import app1Img from './assets/app1.jpg';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Initialize Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Initial projects template with Hasnain's 5 exact websites & 1 mobile app
  const initialProjects = [
    {
      id: 'p1',
      badge: 'Full-Stack Web #1',
      title: 'Universal Electricals & Electronics (UEE India)',
      subtitle: 'Full-Stack Mining Safety & Industrial Solutions Platform. Frontend showcases AFDSS, Anti-Tilt & Driver Fatigue systems; Backend features complete Admin Dashboard.',
      image: ueeindiaImg,
      liveUrl: 'https://ueeindia.com/',
      category: 'website',
      tech: ['React.js', 'Node.js', 'Express', 'Admin Dashboard', 'Mining Safety R&D'],
      features: [
        'Frontend catalog detailing AFDSS (Automatic Fire Detection), Anti-Tilt, Driver Fatigue & Rear View Camera systems',
        'Backend Admin Dashboard for device inventory, client inquiries, and service management',
        'Built for heavy mining vehicle fleets (Bangalore R&D & Trading since 2016)',
        'Responsive, high-performance web architecture with real-time API integrations'
      ]
    },
    {
      id: 'p2',
      badge: 'Full-Stack Web #2',
      title: 'Skoriyatech - Mining Devices & Telemetry Portal',
      subtitle: 'Full-Stack Electronics R&D & Mining Equipment Web Application. Features live mining device monitoring, telemetry data tracking, and Admin Control Panel.',
      image: miningImg,
      liveUrl: 'https://mining.skoriyatech.com/',
      category: 'website',
      tech: ['React.js', 'Node.js', 'Express', 'Admin Control Panel', 'WebSockets'],
      features: [
        'Manufacturers showcase for Anti-Tilt Devices, Audio Visual Alarms, Seat Belt Reminders & Battery Cut-Off Switches',
        'Backend Admin Control Panel for updating device parameters, logs, and telemetry',
        'Interactive analytics & real-time device status dashboard',
        'TailwindCSS glassmorphism dark theme UI built for industrial telemetry'
      ]
    },
    {
      id: 'p3',
      badge: 'Website #3',
      title: 'SkoriyaTech - Deep-Tech Studio Platform',
      subtitle: 'Deep-Tech Engineering Studio Web Portal in Bengaluru. Showcases embedded systems, hardware, AI/ML models, and mass production capabilities.',
      image: skoriyatechImg,
      liveUrl: 'https://skoriyatech.com/',
      category: 'website',
      tech: ['React.js', 'TailwindCSS', 'JavaScript (ES6+)', 'AI/ML Showcase', 'UI/UX'],
      features: [
        'Modern cyberpunk-inspired dark design with gold particle constellation animations',
        'Highlights 6 disciplines: Embedded, Hardware, Software, AI/ML, R&D, Mass Production (1M+ units)',
        'Featured Project IRIS edge AI traffic-intelligence showcase',
        'Interactive capability cards & smooth scrolling engineering layout'
      ]
    },
    {
      id: 'p4',
      badge: 'Website #4',
      title: 'Stars Tours & Travels - Bangalore Booking App',
      subtitle: 'Bangalore\'s premier travel & cab booking web application featuring Hampi Heritage Special packages, airport taxis, outstation trips, and WhatsApp integration.',
      image: starsImg,
      liveUrl: 'https://stars-toursandtravels.com/',
      category: 'website',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp API', 'Booking Engine'],
      features: [
        'Hampi Heritage Special tours (Express 2D/1N, Weekend 3D/2N & Badami combo packages)',
        'Airport taxi, city cabs, outstation trips & Tempo Traveller booking system',
        'Direct WhatsApp instant booking integration with live date & vehicle selection',
        'Dark gold luxury travel design with floating action tools & review counters'
      ]
    },
    {
      id: 'p5',
      badge: 'Website #5',
      title: 'Mythri Tours & Travels - Karnataka Holiday Portal',
      subtitle: 'Curated Karnataka holiday & taxi booking portal with interactive fleet filter, tour itinerary packages, instant quotes, and responsive design.',
      image: mythriImg,
      liveUrl: 'https://mythritoursandtravels.com/',
      category: 'website',
      tech: ['HTML5', 'TailwindCSS', 'JavaScript (ES6+)', 'Fleet Filter UI', 'SEO'],
      features: [
        'Interactive fleet vehicle filter (Sedan, MUV, SUV, Tempo Traveller) with day rates',
        'Curated holiday packages across Mysore, Coorg, Ooty, Gokarna, and Hampi',
        'Instant quote generator & 24/7 call/WhatsApp booking actions',
        'Over 9+ years of trusted service & 12,500+ happy travellers track record'
      ]
    },
    {
      id: 'p6',
      badge: 'Website #6',
      title: 'Universal Welfare Trust',
      subtitle: 'Official Web Platform for Universal Welfare Trust non-profit social organization. Features community welfare initiatives, donor portal, and event management.',
      image: welfareImg,
      liveUrl: 'https://universalwelfaretrust.com/',
      category: 'website',
      tech: ['React.js', 'TailwindCSS', 'JavaScript (ES6+)', 'Donor Portal', 'SEO'],
      features: [
        'Responsive non-profit web platform for Universal Welfare Trust community programs',
        'Interactive causes showcase, education & medical assistance initiatives catalog',
        'Donor inquiry & volunteer registration form with automated email alerts',
        'Optimized cross-device design with high accessibility & SEO score'
      ]
    },
    {
      id: 'p7',
      badge: 'Live Play Store Mobile App',
      title: 'UEEindia Mobile Application',
      subtitle: 'Live Mobile Application published on Google Play Store under UEEindia. Enables mining device tracking & equipment access on Android smartphones.',
      image: app1Img,
      liveUrl: 'https://play.google.com/store/apps/details?id=com.ueeindia.hasnain',
      category: 'mobile',
      tech: ['React Native / Android', 'Google Play Store Live', 'REST APIs', 'Push Notifications'],
      features: [
        'Live and published on Google Play Store (com.ueeindia.hasnain)',
        'Mobile application allowing client access to mining equipment details & datasheets',
        'Push notifications, offline data caching & rapid performance',
        'Optimized for Android smartphones and tablets'
      ]
    }
  ];

  const [projects, setProjects] = useState(() => {
    const savedLinks = localStorage.getItem('hasnain_project_links');
    if (savedLinks) {
      try {
        const parsed = JSON.parse(savedLinks);
        return initialProjects.map((p, idx) => ({
          ...p,
          liveUrl: parsed[`p${idx + 1}`] || p.liveUrl
        }));
      } catch (e) {
        return initialProjects;
      }
    }
    return initialProjects;
  });

  const handleSaveLinks = (newLinks) => {
    localStorage.setItem('hasnain_project_links', JSON.stringify(newLinks));
    setProjects(prev => prev.map((p, idx) => ({
      ...p,
      liveUrl: newLinks[`p${idx + 1}`] || p.liveUrl
    })));
  };

  return (
    <div className="app-main">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        openLinkModal={() => setIsLinkModalOpen(true)} 
      />

      <main>
        <Hero openLinkModal={() => setIsLinkModalOpen(true)} />
        <About />
        <Skills />
        <Projects 
          projects={projects}
          openLinkModal={() => setIsLinkModalOpen(true)}
          openDetailModal={(proj) => setSelectedProject(proj)}
        />
        <ExperienceTimeline />
        <Contact />
      </main>

      <Footer />

      {/* Dynamic Link Editor Modal */}
      <LinkEditorModal 
        isOpen={isLinkModalOpen}
        onClose={() => setIsLinkModalOpen(false)}
        projects={projects}
        onSaveLinks={handleSaveLinks}
      />

      {/* Project Deep Dive Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
