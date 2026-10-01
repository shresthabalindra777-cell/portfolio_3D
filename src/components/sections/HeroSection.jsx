import React, { useState, useEffect } from 'react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { CharacterScene } from '../character/CharacterScene';
import { ShinyText } from '../reactbits/ShinyText';
import { Magnet } from '../reactbits/Magnet';
import { Dock, DockItem, DockLabel, DockIcon } from '../reactbits/Dock';
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from '../icons/BrandIcons';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Mail
} from 'lucide-react';

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  // Dynamic cycling for the hero role rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.rolesRotator.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const getSocialIcon = (name) => {
    switch (name) {
      case 'GitHub': return <GithubIcon size={18} />;
      case 'LinkedIn': return <LinkedinIcon size={18} />;
      case 'Instagram': return <InstagramIcon size={18} />;
      case 'X (Twitter)': return <TwitterIcon size={18} />;
      default: return <ArrowUpRight size={18} />;
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background atmospheric ambient orbs */}
      <div className="hero-ambient-orb hero-orb-left" />
      <div className="hero-ambient-orb hero-orb-right" />
      <div className="hero-ambient-orb hero-orb-center" />

      <div className="hero-container section-container">
        {/* ========================================================
            LEFT COLUMN: Main Introduction, Name & CTAs
            ======================================================== */}
        <div className="hero-col hero-col-left">

          {/* Intro Greeting */}
          <div className="hero-greeting">
            <span className="greeting-sub">Hello! I'm</span>
          </div>

          {/* Main Giant Name Typography */}
          <h1 className="hero-title">
            <span className="hero-title-first">{personalInfo.firstName}</span>
          </h1>

          {/* Dynamic Role Rotator Row */}
          <div className="hero-role-wrapper">
            <span className="role-prefix">{personalInfo.rolePrefix}</span>
            <div className="role-slider">
              <span key={roleIndex} className="role-dynamic-item">
                <ShinyText text={personalInfo.rolesRotator[roleIndex]} speed={3} />
              </span>
            </div>
          </div>

          {/* Desktop Call-to-action buttons */}
          <div className="hero-actions hero-desktop-actions">
            <Magnet strength={20}>
              <a href="#work" className="hero-primary-btn" data-cursor="pointer">
                <span>Explore Work</span>
                <ArrowUpRight size={18} className="btn-icon" />
              </a>
            </Magnet>

            <Magnet strength={15}>
              <a 
                href="#contact" 
                className="hero-secondary-btn" 
                data-cursor="pointer"
              >
                <Mail size={16} className="btn-icon-left" />
                <span>Contact Me</span>
              </a>
            </Magnet>
          </div>
        </div>

        {/* ========================================================
            CENTER COLUMN: Prominent Centered 3D Character Centerpiece
            ======================================================== */}
        <div className="hero-col hero-col-center">
          <div className="hero-character-stage">
            {/* Cinematic soft violet/purple atmospheric aura behind character */}
            <div className="hero-character-aura" />
            
            {/* Enlarged 3D Character Canvas */}
            <CharacterScene />
          </div>
        </div>

        {/* Mobile Call-to-Action buttons (Shown between 3D character and supporting section on mobile) */}
        <div className="hero-actions hero-mobile-actions">
          <Magnet strength={20}>
            <a href="#work" className="hero-primary-btn" data-cursor="pointer">
              <span>Explore Work</span>
              <ArrowUpRight size={18} className="btn-icon" />
            </a>
          </Magnet>

          <Magnet strength={15}>
            <a 
              href="#contact" 
              className="hero-secondary-btn" 
              data-cursor="pointer"
            >
              <Mail size={16} className="btn-icon-left" />
              <span>Contact Me</span>
            </a>
          </Magnet>
        </div>

        {/* ========================================================
            RIGHT COLUMN: Editorial Introduction, Capabilities & Socials
            ======================================================== */}
        <div className="hero-col hero-col-right">
          {/* Strong Short Editorial Heading */}
          <h2 className="hero-editorial-heading">
            I build things for the web.
          </h2>

          {/* Concise 2-3 Line Description */}
          <p className="hero-editorial-desc">
            Crafting high-performance web products, intelligent systems, and interactive 3D digital experiences with engineering precision.
          </p>

          {/* Small Capability Indicators */}
          <div className="hero-capabilities-list">
            <span className="hero-cap-item">
              <span className="cap-dot" />
              <span className="cap-label">Full Stack</span>
            </span>
            <span className="hero-cap-item">
              <span className="cap-dot" />
              <span className="cap-label">AI / ML</span>
            </span>
            <span className="hero-cap-item">
              <span className="cap-dot" />
              <span className="cap-label">3D & Interaction</span>
            </span>
          </div>

          {/* Interactive Social Dock Positioned Toward Lower Part */}
          <div className="hero-socials">
            <span className="socials-label">Connect</span>
            <Dock
              baseItemSize={48}
              magnification={68}
              panelHeight={64}
              distance={180}
              className="hero-social-dock"
            >
              {socialLinks.map((social) => (
                <DockItem
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel={social.name}
                >
                  <DockLabel>{social.name}</DockLabel>
                  <DockIcon>{getSocialIcon(social.name)}</DockIcon>
                </DockItem>
              ))}
            </Dock>
          </div>
        </div>
      </div>

      {/* Hero Scroll Down Indicator */}
      <div className="hero-scroll-indicator">
        <a href="#about" className="scroll-pill" data-cursor="pointer">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span className="scroll-text">SCROLL TO DISCOVER</span>
          <ArrowDown size={14} className="scroll-arrow" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
