import React from 'react'
import './ContactHero.css'
import heroBg from '../../assets/Hero_contact.png'
import phoneIcon from '../../assets/icons/white_phone_icon.svg'
import boiteIcon from '../../assets/icons/boite_icon.svg'
import gpsIcon from '../../assets/icons/gps_icon.svg'
import globalIcon from '../../assets/icons/solar_global-bold.svg'

export default function ContactHero(){
  return (
    <section className="contact-hero" style={{ backgroundImage: `url(${heroBg})` }} aria-label="Contact options">
      <div className="contact-hero__overlay"></div>
      <div className="contact-hero__wrap">
        <h2 className="contact-hero__title">Contact Us</h2>
        <p className="contact-hero__desc">
          We value your vision and are ready to discuss your next growth opportunity. Whether you have specific questions
          about our Services, need a custom quote, or want to explore a strategic partnership, our expert team is here to
          assist you. Below are the ways you can reach out to us directly.
        </p>
      </div>
      <div className="contact-hero__pills" aria-label="Contact methods">
        <div className="contact-pill">
          <img src={phoneIcon} alt="" className="contact-pill__icon" />
          <span className="contact-pill__text">+212 6 22 30 60 20</span>
        </div>
        <div className="contact-pill">
          <img src={boiteIcon} alt="" className="contact-pill__icon" />
          <span className="contact-pill__text">medialeotechagence@gmail.com</span>
        </div>
        <div className="contact-pill">
          <img src={gpsIcon} alt="" className="contact-pill__icon" />
          <span className="contact-pill__text">Agadir, Hay Essalam, Ma</span>
        </div>
        <div className="contact-pill">
          <img src={globalIcon} alt="" className="contact-pill__icon" />
          <span className="contact-pill__text">www.medialeotech.com</span>
        </div>
      </div>
    </section>
  )
}