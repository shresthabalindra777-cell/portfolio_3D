import React, { useState } from 'react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { SpotlightCard } from '../reactbits/SpotlightCard';
import { ShinyText } from '../reactbits/ShinyText';
import { Magnet } from '../reactbits/Magnet';
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from '../icons/BrandIcons';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Phone, 
  Sparkles, 
  ArrowUpRight
} from 'lucide-react';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const getSocialIcon = (name) => {
    switch (name) {
      case 'GitHub': return <GithubIcon size={20} />;
      case 'LinkedIn': return <LinkedinIcon size={20} />;
      case 'Instagram': return <InstagramIcon size={20} />;
      case 'X (Twitter)': return <TwitterIcon size={20} />;
      default: return <ArrowUpRight size={20} />;
    }
  };

  return (
    <section className="contact-section section-container" id="contact">
      {/* Background Glow */}
      <div className="contact-ambient-glow" />

      {/* Main Section Header */}
      <div className="contact-header-wrap">
        <div className="section-pill">
          <Sparkles size={14} className="pill-icon" />
          <span>Initiate Contact</span>
        </div>
        <h2 className="contact-giant-title">
          Let's build <br />
          <ShinyText text="Something Iconic" speed={3.5} />
        </h2>
        <p className="contact-subtitle">
          Have an ambitious project, systems engineering challenge, or leadership role in mind? My inbox is always open.
        </p>
      </div>

      <div className="contact-content-grid">
        {/* Left Side: Direct Contact Details & 1-Click Copy */}
        <div className="contact-details-col">
          <SpotlightCard className="contact-card-box" spotlightColor="rgba(194, 164, 255, 0.14)">
            <div className="contact-box-inner">
              {/* Direct Email with 1-Click Copy */}
              <div className="contact-detail-row">
                <span className="detail-tag">Direct Email</span>
                <div className="email-copy-bar">
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="email-link-text"
                    data-cursor="pointer"
                  >
                    <Mail size={16} className="contact-icon" />
                    <span>{personalInfo.email}</span>
                  </a>
                  <button 
                    onClick={handleCopyEmail}
                    className="copy-email-btn"
                    title="Copy email to clipboard"
                    data-cursor="pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="copied-icon" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone & Location */}
              <div className="contact-info-grid">
                <div className="contact-mini-info">
                  <span className="detail-tag">Phone / WhatsApp</span>
                  <div className="info-val-row">
                    <Phone size={15} className="contact-icon" />
                    <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} data-cursor="pointer">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-mini-info">
                  <span className="detail-tag">Location & Timezone</span>
                  <div className="info-val-row">
                    <MapPin size={15} className="contact-icon" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="contact-socials-block">
                <span className="detail-tag">Social & Developer Channels</span>
                <div className="contact-socials-grid">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-card"
                      data-cursor="pointer"
                    >
                      <div className="social-card-left">
                        {getSocialIcon(social.name)}
                        <div className="social-card-text">
                          <span className="social-name">{social.name}</span>
                          <span className="social-username">{social.username}</span>
                        </div>
                      </div>
                      <ArrowUpRight size={16} className="social-arrow" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Side: Quick Message Form */}
        <div className="contact-form-col">
          <SpotlightCard className="contact-form-card" spotlightColor="rgba(194, 164, 255, 0.16)">
            <div className="form-card-inner">
              <h3 className="form-title">Send a Direct Message</h3>
              <p className="form-desc">
                Fill out the quick form below and I'll respond within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="form-success-message">
                  <div className="success-icon-wrap">
                    <Check size={28} />
                  </div>
                  <h4>Message Received!</h4>
                  <p>Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell me about your project, timeline, or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <Magnet strength={15}>
                    <button type="submit" className="form-submit-btn" data-cursor="pointer">
                      <span>Send Transmission</span>
                      <Send size={16} className="submit-icon" />
                    </button>
                  </Magnet>
                </form>
              )}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
