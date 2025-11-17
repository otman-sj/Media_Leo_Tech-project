import React from 'react'
import './Footer.css'
import logoSvg from '../../assets/Logo2.svg'
import emailIcon from '../../assets/icons/email_icon.svg'
import phoneIcon from '../../assets/icons/phone_icon.svg'

export default function Footer({ onNavigate }){
  const year = 2025
  const websiteUrl = 'https://www.medialeotech.com'

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer__grid">
        <div className="footer__group">
          <img src={logoSvg} alt="Media Leo Tech" className="footer__logo" />
          <p className="footer__tagline">
            We don't just build websites and run ads; we build legacies. Our strategic digital solutions are engineered for one purpose: to make your brand impossible to ignore and unstoppable in the digital world.
          </p>
          <address>
            <ul className="footer__contact">
              <li>
                <span className="footer__icon-box" aria-hidden="true"><img src={phoneIcon} alt="" className="footer__icon" /></span>
                <a href="mailto:info@medialeotech.com" aria-label="Email info@medialeotech.com">info@medialeotech.com</a>
              </li>
              <li>
                <span className="footer__icon-box" aria-hidden="true"><img src={emailIcon} alt="" className="footer__icon" /></span>
                <a href="tel:+212622306020" aria-label="Call +212 6 22 30 60 20">+212 6 22 30 60 20</a>
              </li>
            </ul>
          </address>
        </div>

        <div className="footer__group" aria-labelledby="footer-quick-links">
          <h4 id="footer-quick-links">Quick Links</h4>
          <nav aria-label="Footer Quick Links">
            <ul className="footer__list">
              <li><a href="/about" onClick={(e)=>onNavigate && onNavigate('/about', e)}>About Us</a></li>
              <li><a href="/blog" onClick={(e)=>onNavigate && onNavigate('/blog', e)}>Blog</a></li>
              <li><a href="/services" onClick={(e)=>onNavigate && onNavigate('/services', e)}>Services</a></li>
              <li><a href="/industries" onClick={(e)=>onNavigate && onNavigate('/industries', e)}>Industries</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer__group" aria-labelledby="footer-services">
          <h4 id="footer-services">Our Services</h4>
          <nav aria-label="Footer Services">
            <ul className="footer__list">
              <li><a href="/services/website-creation">Website Creation</a></li>
              <li><a href="/services/social-media-management">Social Media Management</a></li>
              <li><a href="/services/seo">SEO Optimization</a></li>
              <li><a href="/services/content-creation">Content Creation</a></li>
              <li><a href="/services/google-ads">Google Ads</a></li>
              <li><a href="/services/branding">Branding</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer__copyright">
        © {year} Media Leo Tech. All rights reserved. |{' '}
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">www.medialeotech.com</a>
      </div>
    </footer>
  )
}