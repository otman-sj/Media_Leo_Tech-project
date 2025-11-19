import React from 'react'
import './IndustriesSection.css'
import imgA from '../../assets/Image-1.png'
import imgB from '../../assets/Image.png'
import imgC from '../../assets/media.png'
import imgD from '../../assets/Blog_hero.jpg'
import imgE from '../../assets/industire_hero.jpg'
import arrowRight from '../../assets/icons/Ic_Arrow.svg'

export default function IndustriesSection({ items }){
  const data = items?.length ? items : [
    { id:'hospitality', title:'Hospitality & Restaurant Groups', desc:'Digital strategies, coupled with custom web and mobile design (UI/UX), to increase foot traffic, reservations, and customer loyalty for restaurants, gyms, and hotels.', img: imgA },
    { id:'retail', title:'E‑commerce & Retail', desc:'Attracting high‑value clients and establishing industry authority through specialized marketing and professional, trust‑building website development for lawyers, medical clinics, and consultants.', img: imgB },
    { id:'realestate', title:'Real Estate & Construction', desc:'High‑conversion ad campaigns combined with immersive web and landing page design to sell properties faster and generate investor interest for developers and agencies.', img: imgC },
    { id:'logistics', title:'AutoTech & Logistics', desc:'Digital strategies, coupled with custom web and mobile design (UI/UX), to increase foot traffic, reservations, and customer loyalty for restaurants, gyms, and hotels.', img: imgD },
    { id:'education', title:'Education & E‑Learning', desc:'Attracting high‑value clients and establishing industry authority through specialized marketing and professional, trust‑building website development for lawyers, medical clinics, and consultants.', img: imgE },
    { id:'technology', title:'Technology & Software', desc:'High‑conversion ad campaigns combined with immersive web and landing page design to sell properties faster and generate investor interest for developers and agencies.', img: imgB },
  ]

  return (
    <section className="industries-section" aria-label="Industries we serve">
      <div className="industries-section__wrap">
        <header className="industries-section__header">
          <h2 className="industries-section__title">We Always Provide The Best Industries</h2>
          <div className="industries-section__aside">
            <h3 className="industries-section__eyebrow">Industries</h3>
            <p className="industries-section__desc">While we can customize your special services plan to suit your needs.</p>
          </div>
        </header>
        <div className="industries-section__divider" />
        <div className="industries-grid">
          {data.map(item => (
            <article key={item.id} className="industry-card">
              <figure className="industry-card__media">
                <img src={item.img} alt="" className="industry-card__img" />
              </figure>
              <h4 className="industry-card__title">{item.title}</h4>
              <p className="industry-card__text">{item.desc}</p>
              <a href="#discover" className="industry-card__cta">
                <span>Discover</span>
                <img src={arrowRight} alt="" className="industry-card__cta-icon" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}