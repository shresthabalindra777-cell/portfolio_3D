import React from 'react';
import { personalInfo, keyMetrics } from '../../data/portfolioData';
import { SpotlightCard } from '../reactbits/SpotlightCard';
import { ShinyText } from '../reactbits/ShinyText';
import { MapPin, Target, Sparkles, User, Compass } from 'lucide-react';

export const AboutSection = () => {
  const { about } = personalInfo;

  return (
    <section className="about-section section-container" id="about">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-pill">
          <Sparkles size={14} className="pill-icon" />
          <span>Biography & Vision</span>
        </div>
        <h2 className="section-title">
          About <ShinyText text="Me" speed={4} />
        </h2>
      </div>

      <div className="about-grid">
        {/* Main Narrative Card */}
        <div className="about-main-card">
          <SpotlightCard className="about-spotlight" spotlightColor="rgba(194, 164, 255, 0.12)">
            <div className="about-inner">
              <div className="about-header-row">
                <div className="about-avatar-pill">
                  <User size={16} />
                  <span>{personalInfo.name} • {personalInfo.primaryRole}</span>
                </div>
                <div className="about-location-pill">
                  <MapPin size={14} />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Exact user-provided statement */}
              <h3 className="about-short-bio">
                "{about.statement}"
              </h3>

              {/* Interests & Career Goals Grid */}
              <div className="about-details-grid">
                <div className="about-detail-box">
                  <div className="detail-box-header">
                    <Compass size={16} className="detail-icon" />
                    <h4>Core Interests</h4>
                  </div>
                  <div className="interest-tags">
                    {about.interests.map((interest, i) => (
                      <span key={i} className="interest-tag">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="about-detail-box">
                  <div className="detail-box-header">
                    <Target size={16} className="detail-icon" />
                    <h4>Career Goals</h4>
                  </div>
                  <p className="goal-text">
                    {about.careerGoals}
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Key Metrics / Quantitative Impact Cards */}
        <div className="about-metrics-column">
          {keyMetrics.map((metric, idx) => (
            <SpotlightCard 
              key={idx} 
              className="metric-card" 
              spotlightColor="rgba(194, 164, 255, 0.16)"
            >
              <div className="metric-content">
                <span className="metric-value">
                  <ShinyText text={metric.value} speed={3 + idx} />
                </span>
                <h4 className="metric-label">{metric.label}</h4>
                <p className="metric-desc">{metric.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
