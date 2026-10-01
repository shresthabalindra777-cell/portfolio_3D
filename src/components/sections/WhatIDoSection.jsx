import React, { useState } from 'react';
import { whatIDo } from '../../data/portfolioData';
import { SpotlightCard } from '../reactbits/SpotlightCard';
import { ArrowUpRight, Layers } from 'lucide-react';

export const WhatIDoSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="what-section section-container" id="services">
      {/* Visual Section Header styled like the reference site's .whatIDO */}
      <div className="what-header-flex">
        <div className="what-title-block">
          <div className="section-pill">
            <Layers size={14} className="pill-icon" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="what-main-title">
            <span className="what-letter-w">W</span>
            <span className="what-hat">HAT</span>{' '}
            <span className="what-sub-i">I</span>{' '}
            <span className="what-do">DO</span>
          </h2>
        </div>
        <p className="what-header-desc">
          Delivering production-grade software engineering, from low-latency backend architectures to immersive digital frontends and AI pipelines.
        </p>
      </div>

      {/* Services Grid with Tech Corners */}
      <div className="what-cards-grid">
        {whatIDo.map((item, idx) => (
          <SpotlightCard
            key={item.id}
              className={`what-card-box ${activeCard === idx ? 'card-active' : ''}`}
              spotlightColor="rgba(194, 164, 255, 0.14)"
              onClick={() => setActiveCard(idx)}
            >
              {/* Corner Tech Brackets */}
              <div className="corner-bracket cb-tl" />
              <div className="corner-bracket cb-tr" />
              <div className="corner-bracket cb-bl" />
              <div className="corner-bracket cb-br" />

              <div className="what-card-inner">
                <div className="what-card-top">
                  <span className="what-card-id">{item.id}</span>
                  <div className="what-card-arrow-wrap">
                    <ArrowUpRight size={18} className="what-card-arrow" />
                  </div>
                </div>

                <h3 className="what-card-title">{item.title}</h3>
                <p className="what-card-desc">{item.description}</p>

                {/* Tags / Technologies */}
                <div className="what-card-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="what-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expanded Capabilities Footnote */}
                <div className="what-card-footer">
                  <span className="footer-label">Focus Areas:</span>
                  <span className="footer-caps">{item.capabilities}</span>
                </div>
              </div>
            </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default WhatIDoSection;
