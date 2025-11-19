import React from 'react'
import './HeroMetrics.css'
import person from '../../assets/image_AboutUs.png'
import pcIcon from '../../assets/icons/pc_icon.svg'
import companyIcon from '../../assets/icons/cart_per_icon.svg'

export default function HeroMetrics(){
  return (
    <section className="hero-metrics" aria-label="Company metrics">
      <div className="hero-stage">
        <svg className="rings" viewBox="0 0 900 900" aria-hidden="true">
          <circle cx="450" cy="450" r="395" className="ring r1" />
          <circle cx="450" cy="450" r="315" className="ring r2" />
        </svg>

        <div className="main-circle">
          <img className="person" src={person} alt="Professional with tablet" />
        </div>

        <span className="dot" />

        <article className="card card--left">
          <div className="card__icon" aria-hidden="true"><img src={pcIcon} alt="" /></div>
          <div className="card__meta">
            <div className="card__value">2K+</div>
            <div className="card__label">Projects</div>
          </div>
        </article>

        <article className="card card--topright">
          <div className="card__progress" aria-hidden="true">
            <svg viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="18" className="pg-bg" />
              <circle cx="22" cy="22" r="18" className="pg-val" />
            </svg>
          </div>
          <div className="card__meta">
            <div className="card__value">5K+</div>
            <div className="card__label">Clients</div>
          </div>
        </article>

        <article className="card card--bottomright">
          <div className="card__icon" aria-hidden="true"><img src={companyIcon} alt="" /></div>
          <div className="card__meta">
            <div className="card__label">Companies</div>
            <div className="card__value">250+</div>
          </div>
        </article>
      </div>
    </section>
  )
}