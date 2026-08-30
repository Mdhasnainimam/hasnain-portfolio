import React, { useState } from 'react';
import { X, Link2, Globe, Smartphone, Save, CheckCircle2, RefreshCw } from 'lucide-react';
import './LinkEditorModal.css';

export default function LinkEditorModal({ isOpen, onClose, projects, onSaveLinks }) {
  if (!isOpen) return null;

  const [links, setLinks] = useState({
    p1: projects[0]?.liveUrl || '',
    p2: projects[1]?.liveUrl || '',
    p3: projects[2]?.liveUrl || '',
    p4: projects[3]?.liveUrl || '',
    p5: projects[4]?.liveUrl || '',
    p6: projects[5]?.liveUrl || '',
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (key, val) => {
    setLinks(prev => ({ ...prev, [key]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveLinks(links);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content link-editor-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-title">
            <div className="modal-icon-badge">
              <Link2 size={20} className="icon-cyan" />
            </div>
            <div>
              <h3>Update Project Live Links</h3>
              <p className="modal-subtitle">Paste your 5 website URLs & 1 mobile app URL below</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {savedSuccess && (
          <div className="success-banner animate-fadeIn">
            <CheckCircle2 size={18} />
            <span>Links saved successfully! Portfolio updated.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="link-form">
          <div className="form-section-title">
            <Globe size={16} className="icon-cyan" />
            <span>Your 5 Website Links</span>
          </div>

          <div className="form-group">
            <label>Website #1 (Full-Stack Mining Equipment - UEE India):</label>
            <input 
              type="url" 
              placeholder="https://ueeindia.com/"
              value={links.p1}
              onChange={e => handleChange('p1', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Website #2 (Full-Stack SkoriyaTech Telemetry):</label>
            <input 
              type="url" 
              placeholder="https://mining.skoriyatech.com/"
              value={links.p2}
              onChange={e => handleChange('p2', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Website #3 (SkoriyaTech Corporate Portal):</label>
            <input 
              type="url" 
              placeholder="https://skoriyatech.com/"
              value={links.p3}
              onChange={e => handleChange('p3', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Website #4 (Stars Tours & Travels Booking):</label>
            <input 
              type="url" 
              placeholder="https://stars-toursandtravels.com/"
              value={links.p4}
              onChange={e => handleChange('p4', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Website #5 (Mythri Tours & Travels Portal):</label>
            <input 
              type="url" 
              placeholder="https://mythritoursandtravels.com/"
              value={links.p5}
              onChange={e => handleChange('p5', e.target.value)}
            />
          </div>

          <div className="form-section-title" style={{ marginTop: '1.25rem' }}>
            <Smartphone size={16} className="icon-purple" />
            <span>Your Live Google Play Store Mobile App Link</span>
          </div>

          <div className="form-group">
            <label>Mobile App (Google Play Store Link - UEEindia):</label>
            <input 
              type="url" 
              placeholder="https://play.google.com/store/apps/details?id=com.ueeindia.hasnain"
              value={links.p6}
              onChange={e => handleChange('p6', e.target.value)}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <Save size={16} />
              <span>Save & Update Portfolio</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
