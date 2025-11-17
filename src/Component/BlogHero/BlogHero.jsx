import React from 'react'
import './BlogHero.css'
import Blog_hero from '../../assets/Blog_hero.jpg'

export default function BlogHero(){
  return (
    <section className="blog-hero" aria-labelledby="blog-title">
      <div className="blog-hero__content">
        <div className="blog-hero__eyebrow">MEDIA LEO TECH</div>
        <h1 id="blog-title" className="blog-hero__title">Our Blog Section</h1>
        <p className="blog-hero__text">Stay ahead of the curve with our expert insights.<br/> Unlocking your digital potential requires constant<br/> learning. Explore our in‑depth articles on our all services,<br/> and the future of industry‑specific digital growth.</p>
        <div className="blog-hero__actions">
          <a href="#posts" className="blog-hero__button">Start Reading</a>
        </div>
      </div>
      <div className="blog-hero__image" aria-hidden="true">
        <img src={Blog_hero} alt="" className="blog-hero__img" />
      </div>
    </section>
  )
}