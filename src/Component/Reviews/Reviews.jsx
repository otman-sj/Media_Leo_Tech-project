import React from 'react'
import './Reviews.css'

export default function Reviews(){
  const items = [
    {
      text: "Thanks to Media Leo Tech, our online visibility has exploded! The management of our social networks and advertising campaigns were a real success. Thank you for your work and support!",
      author: 'Imane Dehbi',
      role: 'Client'
    },
    {
      text: "A serious and dynamic agency. The website delivered corresponds exactly to what I wanted. Thank you, Media Leo Tech.",
      author: 'Mina Chaib',
      role: 'Client'
    },
    {
      text: "Since our collaboration with Media Leo Tech, we have seen a marked improvement in our sales of graders. Their team is dynamic, responsive and always attentive to our needs. A trusted partner that we recommend without hesitation!",
      author: 'mokni abdeljalil',
      role: 'Client'
    },
    {
      text: "Media Leo Tech a transformé notre stratégie digitale ! Très professionnel et efficace.",
      author: 'Ahmed El Idrissi',
      role: 'Client'
    }
  ]

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className="sr-only">Client testimonials</h2>
      <section class="testimonials-header" aria-labelledby="reviews-title">
  <h1 id="reviews-title">
    What Our <span class="accent">Clients</span> Say
  </h1>
  <p class="subtitle">
    Don't just take our word for it.<br/> Here's what our satisfied clients have to say about working with us.
  </p>
</section>
      <div className="t-grid">
        {items.map((t, i) => (
          <figure className="t-card" role="listitem" key={i}>
            <div className="t-stars" aria-hidden="true">★★★★★</div>
            <blockquote className="t-quote">{t.text}</blockquote>
            <figcaption className="t-author">
              <div className="t-name"><em>{t.author}</em></div>
              <div className="t-role">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}