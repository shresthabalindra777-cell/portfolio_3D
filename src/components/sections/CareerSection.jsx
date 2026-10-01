import React from 'react';
import { experienceData } from '../../data/portfolioData';
import { SpotlightCard } from '../reactbits/SpotlightCard';
import { ShinyText } from '../reactbits/ShinyText';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

export const CareerSection = () => {
  return (
    <section className="career-section section-container" id="experience">
      {/* Section Header styled after reference site */}
      <div className="career-header-wrapper">
        <div className="section-pill">
          <Briefcase size={14} className="pill-icon" />
          <span>Professional Journey</span>
        </div>
        <h2 className="career-main-title">
          My career <span className="ampersand">&</span> <br />
          <ShinyText text="Experience" speed={4} />
        </h2>
        <p className="career-intro-desc">
          Chronological progression across technical leadership, backend systems development, and high-growth engineering teams.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="career-timeline-container">
        {/* Vertical Glowing Spine */}
        <div className="timeline-spine">
          <div className="spine-glow" />
        </div>

        <div className="timeline-items-list">
          {experienceData.map((item) => (
            <div key={item.id} className="timeline-item">
              {/* Glowing Dot on Spine */}
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot">
                  <div className="dot-inner-core" />
                </div>
              </div>

              {/* Experience Card */}
              <div className="timeline-card-col">
                <SpotlightCard
                  className="experience-spotlight-card"
                  spotlightColor="rgba(194, 164, 255, 0.12)"
                >
                  <div className="exp-card-inner">
                    {/* Header Row: Position & Duration */}
                    <div className="exp-card-header">
                      <div className="exp-role-info">
                        <h3 className="exp-position">{item.position}</h3>
                        <div className="exp-company-row">
                          <span className="exp-company">{item.company}</span>
                          <span className="exp-separator">•</span>
                          <span className="exp-location">
                            <MapPin size={12} className="inline-icon" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <div className="exp-duration-badge">
                        <Calendar size={13} className="inline-icon" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    {/* Overview description */}
                    <p className="exp-overview">{item.description}</p>

                    {/* Responsibilities & Achievements */}
                    <div className="exp-highlights-box">
                      <h4 className="highlights-title">Key Responsibilities & Achievements:</h4>
                      <ul className="highlights-list">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="highlight-item">
                            <ChevronRight size={14} className="highlight-bullet-icon" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Associated Skills */}
                    {item.skills && (
                      <div className="exp-skills-row">
                        {item.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="exp-skill-pill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
