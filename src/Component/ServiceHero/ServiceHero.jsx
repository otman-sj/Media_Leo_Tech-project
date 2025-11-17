import React from 'react'
import './ServiceHero.css'
import bgImg from '../../assets/Service_Hero.png'
import cardImg from '../../assets/media.png'
import globeIcon from '../../assets/icons/Ic_Globe.svg'

export default function ServiceHero(){
  return (
    <section className="service-hero" aria-labelledby="service-hero-title">
      <div className="service-hero__image" aria-hidden="true">
        <img src={bgImg} alt="" className="service-hero__img" />
        <div className="service-hero__overlay" />
      </div>
      <div className="service-hero__wrap">
        <div className="service-hero__content">
          <h1 id="service-hero-title" className="service-hero__title">
            Our Comprehensive <span className="service-hero__accent">Service</span> Offerings
          </h1>
          <p className="service-hero__text">
            Media Leo Tech has delivered over 100<br/> successful digital projects and integrated<br/> strategies across
            multiple key industries.<br/> Explore our full spectrum of specialized services<br/> below.
          </p>
          <button className="service-hero__cta" aria-label="Save Time">
            <img src={globeIcon} alt="" className="service-hero__cta-icon" />
            <span>Save Time</span>
          </button>
        </div>
        <aside className="service-hero__media" aria-label="Company media">
          <div className="service-hero__card">
            <img src={cardImg} alt="" className="service-hero__card-img" />
            <button className="service-hero__play" aria-label="Play video">
              <span className="service-hero__play-triangle" />
            </button>
          </div>
        </aside>
      </div>
    </section>
  )
}