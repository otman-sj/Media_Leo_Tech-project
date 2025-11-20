import React from 'react'
import './ContactLead.css'
import bgImg from '../../assets/fome_img.png'
import dotsSvg from '../../assets/icons/Graphic_Elements.svg'

export default function ContactLead(){
  return (
    <section className="contact-lead" style={{ backgroundImage: `url(${bgImg})` }} aria-label="Lead form">
      <div className="contact-lead__overlay"></div>
      <div className="contact-lead__wrap">
        <div className="contact-lead__head">
          <h2 className="contact-lead__title">Your Partner in <span className="accent">Digital Excellence</span></h2>
          <p className="contact-lead__subtitle">Your digital growth, simplified</p>
          <p className="contact-lead__desc">We build and scale your online presence with strategic expertise and unwavering support</p>
        </div>

        <form className="contact-lead__form" aria-label="Contact form">
          <input type="text" className="input" placeholder="Full Name" aria-label="Full Name" />
          <input type="email" className="input" placeholder="Email Address" aria-label="Email Address" />
          <input type="tel" className="input" placeholder="Phone Number" aria-label="Phone Number" />
          <input type="text" className="input" placeholder="Company" aria-label="Company" />
          <textarea className="textarea" placeholder="Your Message" aria-label="Your Message"></textarea>
          <select className="select" aria-label="Select a Service" defaultValue="">
            <option value="" disabled>Select a Service</option>
            <option value="web">Website Development</option>
            <option value="social">Social Media Marketing</option>
            <option value="content">Content Creation</option>
            <option value="ads">Paid Ads</option>
            <option value="seo">SEO Optimization</option>
            <option value="branding">Branding</option>
          </select>
          <button type="submit" className="submit">Submit</button>
        </form>

        <a href="#story" className="contact-lead__watch">Watch Our Story</a>
      </div>

      <section className="contact-next" aria-label="Next steps">
        <div className="contact-next__wrap">
          <h3 className="contact-next__title">WHAT HAPPENS NEXT?</h3>
          <div className="contact-next__content">
            <p>Become a part of Media Leo Tech of the near future:</p>
            <ul className="contact-next__list">
              <li>We'll review your message and business needs</li>
              <li>Schedule a free consultation call</li>
              <li>Provide a customized strategy proposal</li>
              <li>Start transforming your digital presence</li>
            </ul>
          </div>
        </div>
        <img src={dotsSvg} alt="" className="contact-next__dots contact-next__dots--left" />
        <img src={dotsSvg} alt="" className="contact-next__dots contact-next__dots--right" />
      </section>
    </section>
  )
}