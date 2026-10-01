import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { Magnet } from '../reactbits/Magnet';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // When at top of page, no nav item is active
      if (window.scrollY < 120) {
        setActiveSection('');
        return;
      }

      // Determine active section based on scroll position
      const sections = ['about', 'services', 'techstack', 'work', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Monogram - Clean logo with NO decorative dot */}
          <a href="#" className="navbar-brand" data-cursor="pointer">
            <span className="brand-name">{personalInfo.firstName}</span>
            {personalInfo.lastName && <span className="brand-badge">{personalInfo.lastName}</span>}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar-nav desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                data-cursor="pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="navbar-actions">
            <Magnet strength={15}>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="nav-cta-btn"
                data-cursor="pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={15} />
              </a>
            </Magnet>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              data-cursor="pointer"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-brand-row">
            <span className="brand-title">{personalInfo.name}</span>
            <span className="status-pill">
              <span className="status-dot" />
              {personalInfo.availabilityStatus}
            </span>
          </div>

          <div className="mobile-nav-links">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mobile-nav-item"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <span className="mobile-nav-num">0{idx + 1}</span>
                <span className="mobile-nav-title">{link.name}</span>
                <ArrowUpRight size={18} className="mobile-nav-arrow" />
              </a>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mobile-contact-btn"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
