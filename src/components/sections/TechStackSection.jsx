import React, { useState } from 'react';
import { techStackData } from '../../data/portfolioData';
import { SpotlightCard } from '../reactbits/SpotlightCard';
import { ElectricBorder } from '../reactbits/ElectricBorder';
import { ShinyText } from '../reactbits/ShinyText';
import { 
  Code, 
  Layers, 
  Terminal, 
  Database, 
  Sparkles, 
  Flame
} from 'lucide-react';

export const TechStackSection = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const getTechIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'python':
      case 'javascript':
      case 'js':
        return <Code size={24} />;
      case 'react':
      case 'next':
      case 'html':
        return <Layers size={24} />;
      case 'node':
        return <Terminal size={24} />;
      case 'sql':
      case 'pandas':
        return <Database size={24} />;
      case 'css':
        return <Sparkles size={24} />;
      default:
        return <Code size={24} />;
    }
  };

  return (
    <section className="techstack-section section-container" id="techstack">
      {/* Enhanced Section Header */}
      <div className="section-header techstack-header">
        <div className="section-pill">
          <Flame size={14} className="pill-icon" />
          <span>Core Engineering Tools</span>
        </div>
        <h2 className="section-title">
          Technologies I <ShinyText text="Build With" speed={3.8} />
        </h2>
        <p className="section-subtitle">
          A focused toolkit for building modern, scalable and interactive digital experiences.
        </p>
      </div>

      {/* Clean 3x3 Visually Rich Tech Stack Grid with ElectricBorder */}
      <div className="techstack-grid">
        {techStackData.map((tech, idx) => (
          <ElectricBorder
            key={tech.name}
            color="#c17743"
            speed={0.5}
            chaos={0.08}
            thickness={2}
            borderRadius={16}
            style={{ borderRadius: 16 }}
            className="tech-card-electric"
          >
            <SpotlightCard
              className={`tech-card ${hoveredTech === idx ? 'tech-hovered' : ''}`}
              spotlightColor="rgba(194, 164, 255, 0.22)"
              onMouseEnter={() => setHoveredTech(idx)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Tech Corner Accents */}
              <div className="tech-card-corner tc-tl" />
              <div className="tech-card-corner tc-br" />

              {/* Faint Subtle Grid Detail */}
              <div className="tech-card-bg-grid" />

              <div className="tech-card-content">
                {/* Prominent Icon & Technical Index Tag */}
                <div className="tech-top-row">
                  <div className="tech-icon-inner">
                    {getTechIcon(tech.name)}
                  </div>
                  <span className="tech-index-tag">0{idx + 1}</span>
                </div>

                {/* Tech Title, Category & One-Line Description */}
                <div className="tech-meta">
                  <div className="tech-title-row">
                    <h3 className="tech-name">{tech.name}</h3>
                    <span className="tech-category-pill">{tech.category}</span>
                  </div>
                  <p className="tech-desc">{tech.description}</p>
                </div>

                {/* Status & Core Specialty Footer */}
                <div className="tech-footer">
                  <span className="tech-level-pill">
                    <span className="dot" />
                    {tech.level}
                  </span>
                  {tech.highlight && (
                    <span className="tech-specialty-badge" title="Core Specialty">
                      ✦ Core
                    </span>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </ElectricBorder>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
