import React from 'react'
import './IndustriesFeedback.css'
import avatar from '../../assets/img0.jpg'
import quotes from '../../assets/Quotation.png'
import phoneIcon from '../../assets/icons/ic1.svg'
import emailIcon from '../../assets/icons/ic2.svg'
import locationIcon from '../../assets/icons/ic3.svg'
import arrowIcon from '../../assets/icons/white_arrow.svg'

export default function IndustriesFeedback(){
  return (
    <section className="industries-feedback" aria-label="Client feedback and contact">
      <div className="industries-feedback__wrap">
        <div className="feedback__intro">
          <h2 className="feedback__title">Feedback About Their Experience With Us</h2>
          <p className="feedback__text">Read testimonials from our satisfied clients. See how our Agency services have made a difference in their lives and business.</p>
          <div className="feedback__controls" aria-label="navigate testimonials">
            <button className="feedback__btn feedback__btn--prev" aria-label="Previous"><img src={arrowIcon} alt="" className="feedback__btn-icon"/></button>
            <button className="feedback__btn feedback__btn--next" aria-label="Next"><img src={arrowIcon} alt="" className="feedback__btn-icon"/></button>
          </div>
        </div>
        <div className="feedback__card">
          <div className="feedback__card-wrap">
            <div className="feedback__media">
              <img src={avatar} alt="" className="feedback__avatar" />
            </div>
            <div className="feedback__content">
              <div className="feedback__header">
                <div className="feedback__ident">
                  <div className="feedback__name">Robert Fox</div>
                  <div className="feedback__role">Business Women</div>
                </div>
                <img src={quotes} alt="" className="feedback__quotes" />
              </div>
              <div className="feedback__stars" aria-hidden="true">★★★★★</div>
              <p className="feedback__quote">The Media Leo Tech team didn’t just build a beautiful site; they created a complete digital marketing strategy. They successfully helped us increase our Return on Ad Spend (ROAS) by 50%, resulting in significant profit growth. A true partnership!</p>
            </div>
          </div>
        </div>
        <div className="feedback__grid">
          <div className="contact__info">
            <h3 className="contact__title">Find us</h3>
            <ul className="contact__list" role="list">
              <li className="contact__item">
                <span className="contact__icon"><img src={phoneIcon} alt="" /></span>
                <div className="contact__meta">
                  <div className="contact__label">Call Us</div>
                  <div className="contact__value">+212 6 22 30 60 20</div>
                </div>
              </li>
              <li className="contact__item">
                <span className="contact__icon"><img src={emailIcon} alt="" /></span>
                <div className="contact__meta">
                  <div className="contact__label">Email Now</div>
                  <div className="contact__value">info@medialeotech.com</div>
                </div>
              </li>
              <li className="contact__item">
                <span className="contact__icon"><img src={locationIcon} alt="" /></span>
                <div className="contact__meta">
                  <div className="contact__label">Address</div>
                  <div className="contact__value">80000, Agadir, Hay Salam, Morocco</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="contact__form">
            <h3 className="contact__title">Keep In Touch</h3>
            <p className="contact__desc">We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner</p>
            <form className="contact__fields" aria-label="Contact form">
              <input type="text" className="contact__input" placeholder="Name" />
              <input type="email" className="contact__input" placeholder="Email" />
              <textarea className="contact__textarea" placeholder="Message" rows={4}></textarea>
              <button type="button" className="contact__submit">Sent Massage</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}