import React from 'react'
import './IndustriesHero.css'
import heroImg from '../../assets/industire_hero.jpg'

export default function IndustriesHero(){
  return (
    <section className="industries-hero" aria-labelledby="industries-hero-title">
      <div className="industries-hero__content">
        <div className="industries-hero__eyebrow">MEDIA LEO TECH</div>
        <h1 id="industries-hero-title" className="industries-hero__title">Digital Solutions<br/>Tailored to Your<br/>Industry</h1>
        <p className="industries-hero__text">We translate our specialized marketing expertise into measurable success for clients across key sectors.</p>
        <div className="industries-hero__actions">
          <a href="#start" className="industries-hero__button">Get&nbsp;Start&nbsp;Now</a>
        </div>
      </div>
      <div className="industries-hero__image" aria-hidden="true">
        <img src={heroImg} alt="" className="industries-hero__img" />
      </div>
    </section>
  )
}