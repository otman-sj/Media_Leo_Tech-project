import React from 'react'
import './AboutContact.css'
import xIcon from '../../assets/icons/x.svg'
import fbIcon from '../../assets/icons/facebook.svg'
import igIcon from '../../assets/icons/Instagram.svg'
import phoneIcon from '../../assets/icons/phone_icon.svg'
import emailIcon from '../../assets/icons/email_icon.svg'

export default function AboutContact(){
  return (
    <section className="about-contact" aria-labelledby="about-contact-title">
      <div className="about-contact__wrap">
        <h2 id="about-contact-title" className="about-contact__heading">Contact Us</h2>
        <div className="about-contact__grid">
          <div className="contact-left reveal" data-reveal aria-label="Leave us a message">
            <div className="contact-left__label">Leave us a message</div>
            <form className="contact-form" aria-label="Contact form">
              <input type="text" className="contact-input" placeholder="First_Name Last_Name" aria-label="Name" />
              <input type="email" className="contact-input" placeholder="Email Address" aria-label="Email Address" />
              <textarea className="contact-textarea" placeholder="Your Message" rows={5} aria-label="Your Message"></textarea>
              <button type="button" className="contact-submit" aria-label="Send">Send</button>
            </form>
          </div>
          <div className="contact-right reveal" data-reveal>
            <address className="contact-info">
              <div className="contact-info__name">MEDIA LEO TECH</div>
              <div className="contact-info__addr">2 Floor Hay Essalam Rue 948 , Near Bank Of Africa. Agadir: 80026 . MA</div>
              <a href="tel:+212622306020" className="contact-info__link"><img src={phoneIcon} alt="" className="contact-info__icon" />+212 6 22 30 60 20</a><br/>
              <a href="mailto:info@medialeotech.com" className="contact-info__link"><img src={emailIcon} alt="" className="contact-info__icon" />info@medialeotech.com</a>
              <div className="contact-socials" aria-label="Social links">
                <a href="https://x.com" className="contact-social" aria-label="X"><img src={xIcon} alt="" className="contact-social__icon" /></a>
                <a href="https://facebook.com" className="contact-social" aria-label="Facebook"><img src={fbIcon} alt="" className="contact-social__icon" /></a>
                <a href="https://instagram.com" className="contact-social" aria-label="Instagram"><img src={igIcon} alt="" className="contact-social__icon" /></a>
              </div>
            </address>
            <div className="contact-map">
              <a href="https://maps.app.goo.gl/Me3qB2yNFWfA2VqXA" target="_blank" rel="noopener noreferrer" className="contact-map__link">Open in Google Maps</a>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.0214362007373!2d-9.551157124924998!3d30.399933101641146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7002afbea89%3A0x395063ddfa0c0660!2sMedia%20Leo%20Tech!5e1!3m2!1sen!2sma!4v1763567323113!5m2!1sen!2sma"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}