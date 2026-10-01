import React from 'react';
import { projectsData } from '../../data/portfolioData';
import { SpotlightCard } from '../reactbits/SpotlightCard';
import { ShinyText } from '../reactbits/ShinyText';
import { Magnet } from '../reactbits/Magnet';
import { ArrowUpRight, Sparkles, FolderGit2 } from 'lucide-react';

export const WorkSection = () => {
  return (
    <section className="work-section section-container" id="work">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-pill">
          <FolderGit2 size={14} className="pill-icon" />
          <span>Selected Portfolios</span>
        </div>
        <h2 className="section-title">
          Featured <ShinyText text="Projects & Systems" speed={4} />
        </h2>
        <p className="section-subtitle">
          A curated selection of production web applications, machine learning architectures, and distributed systems.
        </p>
      </div>

      {/* Projects Showcase List */}
      <div className="work-items-list">
        {projectsData.map((project) => (
          <div key={project.id} className="work-item-wrapper">
            <SpotlightCard 
              className="work-project-card"
              spotlightColor="rgba(194, 164, 255, 0.12)"
            >
              <div className="project-grid">
                {/* Visual Image Preview */}
                <div className="project-media-col">
                  <div className="project-image-frame">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Information Column */}
                <div className="project-info-col">
                  {/* Top Meta: Number & Category & Year */}
                  <div className="project-meta-row">
                    <span className="project-number">{project.id}</span>
                    <div className="project-meta-pills">
                      <span className="project-category-pill">{project.category}</span>
                      <span className="project-year-pill">{project.year}</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="project-title">{project.title}</h3>

                  {/* Project Description */}
                  <p className="project-description">{project.description}</p>

                  {/* Highlight Stat / Impact */}
                  {project.stats && (
                    <div className="project-stats-box">
                      <Sparkles size={14} className="stat-icon" />
                      <span className="stat-text">{project.stats}</span>
                    </div>
                  )}

                  {/* Technologies / Tools */}
                  <div className="project-tools-block">
                    <h4 className="tools-title">Tools & Architecture:</h4>
                    <p className="tools-list">{project.tools}</p>
                  </div>

                  {/* Action Links Row */}
                  <div className="project-links-row">
                    {project.liveUrl && (
                      <Magnet strength={12}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-text-link"
                          data-cursor="pointer"
                        >
                          <span>Explore System</span>
                          <ArrowUpRight size={16} />
                        </a>
                      </Magnet>
                    )}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
