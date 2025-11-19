import React from 'react'
import './AboutHero.css'
import heroImg from '../../assets/image_AboutUs.png'
import pcIcon from '../../assets/icons/Online Education.svg'
import companyIcon from '../../assets/icons/Board.svg'

export default function AboutHero(){
  return (
    <section className="hero" aria-labelledby="about-hero-title">
      <div className="hero__grid">
        <div className="hero__copy">
          <h1 id="about-hero-title" className="hero__title">Your <span className="accent">Trusted</span> Partner In Digital Transformation</h1>
          <p className="hero__text">We are your strategic partner, dedicated to blueprinting your vision into exceptional digital realities. Know more about us in this section.</p>
          <a href="#faqs" className="btn">FAQ's</a>
          <svg className="rings rings--left" viewBox="0 0 520 520" aria-hidden="true">
            <circle cx="260" cy="260" r="260" fill="none" stroke="#DDE7E9" strokeWidth="1.6" opacity="0.55" />
            <circle cx="260" cy="260" r="210" fill="none" stroke="#DDE7E9" strokeWidth="1.6" opacity="0.35" />
            <circle cx="260" cy="260" r="160" fill="none" stroke="#DDE7E9" strokeWidth="1.6" opacity="0.25" />
            <circle cx="260" cy="260" r="110" fill="none" stroke="#DDE7E9" strokeWidth="1.6" opacity="0.18" />
          </svg>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <svg className="rings rings--right" viewBox="0 0 700 700" aria-hidden="true">
            <circle cx="350" cy="350" r="420" fill="none" stroke="#43C4B6" strokeWidth="1.6" opacity="0.6" />
            <circle cx="350" cy="350" r="510" fill="none" stroke="#43C4B6" strokeWidth="1.6" opacity="0.45" />
          </svg>
          <div className="circle">
            <img className="person" src={heroImg} alt="Professional with tablet" />
          </div>
          <span className="dot"></span>

          <article className="kpi kpi--left">
            <div className="kpi__icon"><img src={pcIcon} alt="" /></div>
            <div className="kpi__meta">
              <div className="kpi__value">2K+</div>
              <div className="kpi__label">Projects</div>
            </div>
          </article>

          <article className="kpi kpi--topright">
            <div className="kpi__gauge" aria-hidden="true">
              <svg viewBox="0 0 54 54"><circle cx="27" cy="27" r="22" className="g-bg"/><circle cx="27" cy="27" r="22" className="g-val"/></svg>
            </div>
            <div className="kpi__meta">
              <div className="kpi__value">5K+</div>
              <div className="kpi__label">Clients</div>
            </div>
          </article>

          <article className="kpi kpi--bottomright">
            <div className="kpi__icon"><img src={companyIcon} alt="" /></div>
            <div className="kpi__meta">
              <div className="kpi__label">Companies</div>
              <div className="kpi__value">250+</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}