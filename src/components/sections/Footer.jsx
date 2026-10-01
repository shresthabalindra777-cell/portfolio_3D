import React from 'react';
import { personalInfo, navLinks, socialLinks } from '../../data/portfolioData';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Magnet } from '../reactbits/Magnet';
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from '../icons/BrandIcons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name) => {
    switch (name) {
      case 'GitHub': return <GithubIcon size={15} />;
      case 'LinkedIn': return <LinkedinIcon size={15} />;
      case 'Instagram': return <InstagramIcon size={15} />;
      case 'X (Twitter)': return <TwitterIcon size={15} />;
      default: return <ArrowUpRight size={15} />;
    }
  };

  return (
    <footer className="footer-wrap">
      <div className="footer-container section-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-logo">{personalInfo.name}</span>
            <p className="footer-tagline">
              Engineering scalable platforms with precision, elegance, and purpose.
            </p>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-title">Navigation</span>
            <div className="footer-nav">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="footer-nav-link" data-cursor="pointer">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-title">Social Links</span>
            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <Magnet key={social.name} strength={12}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-pill"
                    title={`${social.name} (${social.username})`}
                    data-cursor="pointer"
                  >
                    {getSocialIcon(social.name)}
                    <span>{social.name}</span>
                  </a>
                </Magnet>
              ))}
            </div>
          </div>

          <div className="footer-scroll-top">
            <Magnet strength={15}>
              <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top" data-cursor="pointer">
                <ArrowUp size={18} />
                <span>Top</span>
              </button>
            </Magnet>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-copy">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="footer-status">
            <span className="status-indicator-dot" />
            <span>Designed for cinematic web performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
