import React from 'react'
import './IndustriesUpdates.css'
import p1 from '../../assets/1.png'
import p2 from '../../assets/2.png'
import p3 from '../../assets/3.png'

export default function IndustriesUpdates(){
  const posts = [
    { id:'p1', img:p1, author:'JOHN HELTON', date:'JAN 6, 2025', title:'Eco‑Friendly Cleaning: How We Keep Your Home Green', excerpt:'Learn about our commitment to eco‑friendly practices. We share the eco‑conscious products…' },
    { id:'p2', img:p2, author:'JOHN HELTON', date:'JAN 6, 2025', title:'How to Maintain a Clean Home Between Professional Visits', excerpt:'Get practical advice on maintaining cleanliness between our scheduled visits. These easy‑to‑follow tips…', featured:true },
    { id:'p3', img:p3, author:'JOHN HELTON', date:'JAN 6, 2025', title:'UI/UX Design', excerpt:'Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air…' },
  ]

  return (
    <section className="industries-updates" aria-label="Tips & Service News">
      <div className="industries-updates__wrap">
        <header className="industries-updates__header">
          <h2 className="industries-updates__title">Stay Updated with Our<br/>Tips & Service News!</h2>
          <div className="industries-updates__aside">
            <h3 className="industries-updates__eyebrow">Our Blog</h3>
            <p className="industries-updates__desc">Unlock Digital Growth: Stay ahead with our latest insights on specialized Services strategies, and industry trends.</p>
          </div>
        </header>
        <div className="industries-updates__divider" />
        <div className="updates-grid">
          {posts.map(post => (
            <article key={post.id} className={`update-card${post.featured ? ' update-card--featured' : ''}`}>
              <figure className="update-card__media">
                <img src={post.img} alt="" className="update-card__img" />
              </figure>
              <div className="update-card__meta">{post.author} <span className="dot" /> {post.date}</div>
              <h4 className="update-card__title">{post.title}</h4>
              <p className="update-card__text">{post.excerpt}</p>
              <div className="update-card__divider" />
              <a href="#read" className={`update-card__cta${post.featured ? ' update-card__cta--accent' : ''}`}>{post.featured ? 'Read More' : 'Read More'}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}