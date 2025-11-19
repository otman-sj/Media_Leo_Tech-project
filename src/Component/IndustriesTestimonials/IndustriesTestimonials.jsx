import React from 'react'
import './IndustriesTestimonials.css'
import photo1 from '../../assets/photo1.jpg'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'
import iconFacebook from '../../assets/icons/facebook.svg'
import iconX from '../../assets/icons/x.svg'
import iconInstagram from '../../assets/icons/Instagram.svg'
import iconLinkedin from '../../assets/icons/Linkedin.svg'

const defaultItems = [
  { id:'t1', name:'Erick Reynolds', img: photo1, quote:'Excellent service! Your team designed a highly user‑friendly website and app (UI/UX) that helped us increase our online membership sign‑ups by 65% in just two months. The class booking system is flawless.' },
  { id:'t2', name:'Semon Endus', img: photo2, quote:'The website design provided by your team added significant credibility to our clinic’s brand. The new, seamless appointment booking system is trustworthy and led to a 40% increase in online appointment requests.' },
  { id:'t3', name:'Ahmed Mustafa', img: photo3, quote:'Media Leo Tech perfectly captured the luxurious feel of our restaurant in the new site. By refining the user experience (UX), our Average Online Order Value (AOV) increased by 28%. Truly professional and precise work!' },
]

export default function IndustriesTestimonials({ items = defaultItems }){
  return (
    <section className="industries-testimonials" aria-label="Client testimonials">
      <div className="industries-testimonials__wrap">
        <header className="industries-testimonials__header">
          <h2 className="industries-testimonials__title">Our <span className="accent">Testimonials</span></h2>
          <div className="industries-testimonials__aside">
            <h3 className="industries-testimonials__eyebrow">Previous Work</h3>
            <p className="industries-testimonials__desc">Every project in our portfolio tells a story of strategic partnership, design excellence, and measurable growth.</p>
          </div>
        </header>
        <div className="industries-testimonials__divider"></div>
        <div className="t-grid">
          {items.map(item => (
            <article key={item.id} className="t-card">
              <figure className="t-media">
                <img src={item.img} alt="" className="t-img" />
              </figure>
              <div className="t-content">
                <h4 className="t-name">{item.name}</h4>
                <div className="t-stars" aria-hidden="true">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="t-quote">{item.quote}</p>
                <div className="t-social" aria-label="Social links">
                  <a href="#" className="t-social__link"><img src={iconFacebook} alt="" className="t-social__icon" /></a>
                  <a href="#" className="t-social__link"><img src={iconX} alt="" className="t-social__icon" /></a>
                  <a href="#" className="t-social__link"><img src={iconInstagram} alt="" className="t-social__icon" /></a>
                  <a href="#" className="t-social__link"><img src={iconLinkedin} alt="" className="t-social__icon" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}